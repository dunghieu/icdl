import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
const moment = require('moment');

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuDanhSachOn = (props) => {
  // console.log(props.data);
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
    {field: 'id', headerName: 'STT', width: 50},
    {field: 'name', headerName: 'Tên học phần', width: 300},
    {field: 'code', headerName: 'Học phần', width: 150},
    {field: 'time', headerName: 'Thời gian', width: 150},
    {field: 'day', headerName: 'Ngày học', width: 150},
    {field: 'open', headerName: 'Ngày mở lớp', width: 120},
    {
      field: 'close',
      headerName: 'Ngày kết thúc',
      width: 120,
      valueGetter: (params: GridValueGetterParams) =>
        `${moment(params.row.open, 'DD-MM-YYYY').add(8, 'w').format('DD-MM-YYYY')}`,
    },
    {field: 'total', headerName: 'Sĩ số', width: 80},
    {
      field: 'description',
      headerName: 'Ghi chú',
      width: 200,
      flex: 1,
      // renderCell: (params: any) => params.value,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const arr: any = [];
    result?.registration?.map((registration: any, index: number) => {
      let i = 0;
      registration?.student?.studentCourseMapping?.map((mapping: any) => {
        arr.push({
          id: ++i,
          name: mapping?.course?.name,
          code: mapping?.course?.code,
          time: `${mapping.course?.start?.slice(0, 5)}-${mapping.course?.end?.slice(0, 5)}`,
          day: mapping?.course?.day,
          open: moment(mapping?.course?.open).format('DD/MM/YYYY'),
          total: registration?.total,
          description: '',
        });
      });
    });
    setRows(arr);
  }, [result]);

  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
};

export default TraCuuDanhSachOn;
