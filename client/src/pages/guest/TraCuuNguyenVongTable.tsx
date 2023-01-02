import {Box, IconButton, Tooltip} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import PaidIcon from '@mui/icons-material/Paid';
const moment = require('moment');
import * as _ from 'lodash';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuKetNguyenVongTable = (props) => {
  const [rows, setRows] = useState([]) as any;

  const [result, setResult] = useState({}) as any;

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/student/search?code=${props.code}&citizenId=${props.citizenId}`
      );
      if (res.data.length === 0) {
        alert('Không tìm thấy thông tin');
        return;
      }
      setResult(res.data);
    } catch (e) {
      alert('Không tìm thấy thông tin');
    }
  };

  const columns: GridColDef[] = [
    {field: 'intentId'},
    {field: 'clientSecret'},
    // {field: 'testTime'},
    {field: 'id', headerName: 'STT', width: 50},
    {field: 'codeCourse', headerName: 'Mã khóa học', width: 150},
    {field: 'nameCourse', headerName: 'Tên khóa học', width: 350},
    {field: 'certificate', headerName: 'Tên kì thi', width: 350},
    {
      field: 'amount',
      headerName: 'Số tiền',
      width: 200,
      renderCell: (params: any) =>
        new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'VND'}).format(
          params?.row?.amount
        ),
    },
    {
      field: 'description',
      headerName: 'Trạng thái',
      width: 250,
    },
    {
      field: 'action',
      width: 100,
      headerName: '',
      align: 'right',
      renderCell: (params: any) => {
        if (params.row.description !== 'Chưa thanh toán') {
          return <></>;
        } else {
          return (
            <Tooltip title="Thanh toán">
              <IconButton>
                <Link to={`/checkout/${params.row.intentId}/${params.row.clientSecret}`} replace>
                  <PaidIcon />
                </Link>
              </IconButton>
            </Tooltip>
          );
        }
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const grouped = _.mapValues(_.groupBy(result?.registration, 'payment.id'), (clist) =>
      clist.map((car) => _.omit(car, ['student']))
    );
    const arr: any = [];
    Object.keys(grouped)?.forEach((key: any, index: number) => {
      const object = {} as any;
      const output = grouped[key].forEach((item: any) => {
        const merged = _.mergeWith({}, object, item, (a, b) => (b === null ? a : undefined));
        Object.assign(object, merged);
      });
      let i = 0;
      console.log(object);
      arr.push({
        id: ++index,
        intentId: object?.payment?.intentId,
        clientSecret: object?.payment?.secret,
        codeCourse: object?.course?.code,
        nameCourse: object?.course?.name,
        certificate: object?.certificate?.name,
        amount: object?.payment?.amount,
        description: object?.payment?.status == 0 ? 'Chưa thanh toán' : 'Đã thanh toán',
      });
    });
    setRows(arr);
  }, [result]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <DataGrid
            sx={{width: '100%', marginY: '100px'}}
            autoHeight
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            columnVisibilityModel={{
              intentId: false,
              clientSecret: false,
              testTime: false,
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TraCuuKetNguyenVongTable;
