import {Box, IconButton, Tooltip} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
const moment = require('moment');

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuKetQuaThiTable = (props) => {
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
    // {field: 'intentId'},
    // {field: 'clientSecret'},
    // {field: 'testTime'},
    {field: 'id', headerName: 'STT', width: 50},
    {field: 'code', headerName: 'Mã học phần', width: 150},
    {field: 'name', headerName: 'Tên học phần', width: 300},
    {field: 'lanthi', headerName: 'Lần thi', width: 150},
    {field: 'practicalScore', headerName: 'Điểm thực hành', width: 200},
    {field: 'theoreticalScore', headerName: 'Điểm lý thuyết', width: 200},
    {
      field: 'totalScore',
      headerName: 'Tổng điểm',
      width: 250,
      valueGetter: (params) => {
        if (!params.row.practicalScore || !params.row.theoreticalScore) {
          return;
        }
        return (params.row.practicalScore + params.row.theoreticalScore) / 2;
      },
    },
    {
      field: 'status',
      headerName: 'Đánh giá',
      width: 150,
      valueGetter: (params) => {
        if (!params.row.practicalScore || !params.row.theoreticalScore) {
          return;
        }
        if ((params.row.practicalScore + params.row.theoreticalScore) / 2 < 5) {
          return 'Chưa đạt';
        } else if ((params.row.practicalScore + params.row.theoreticalScore) / 2 >= 5) {
          return 'Đạt';
        }
      },
    },
    // {
    //   field: 'action',
    //   width: 200,
    //   headerName: '',
    //   align: 'right',
    //   // renderCell: (params: any) => {},
    // },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const arr: any = [];
    result?.registration?.map((registration: any, index: number) => {
      let i = 0;
      registration?.student?.studentExamMapping?.map((examMapping: any) => {
        arr.push({
          id: ++i,
          studentId: result.id,
          code: examMapping?.exam?.code,
          name: examMapping?.exam?.name,
          certificateId: examMapping?.exam?.certificateId,
          practicalScore: examMapping?.practicalScore,
          theoreticalScore: examMapping?.theoreticalScore,
          examId: examMapping?.exam?.id,
          lanthi: examMapping?.entry,
        });
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

export default TraCuuKetQuaThiTable;
