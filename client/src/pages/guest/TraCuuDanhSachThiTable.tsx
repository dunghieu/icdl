import {Box, IconButton, Tooltip} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useEffect, useState} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import PaidIcon from '@mui/icons-material/Paid';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import TheDuThi from 'components/pdf/TheDuThi';
import NopBaiThiModal from 'components/common/modal/NopBaiThiModal';
import {removeVietnameseTones} from 'utils/helper';
const moment = require('moment');

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuDanhSachThi = (props) => {
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

  const handleHoanThi = async (arg: {studentId: number; certificateId: number; examId: number}) => {
    if (!confirm('Bạn có chắc chắn muốn hoãn thi?')) {
      return;
    }
    const {studentId, certificateId, examId} = arg;
    const res = await axios.patch(`http://localhost:8080/api/registration/hoanthi`, {
      studentId: studentId,
      certificateId: certificateId,
      examId: examId,
    });
    if (res.data) {
      alert('Hoãn thi thành công');
      fetchData();
      return;
    }
  };

  const columns: GridColDef[] = [
    {field: 'intentId'},
    {field: 'clientSecret'},
    {field: 'testTime'},
    {field: 'avatar'},
    {field: 'id', headerName: 'STT', width: 50},
    {field: 'name', headerName: 'Tên chứng chỉ', width: 300},
    {field: 'testDate', headerName: 'Ngày thi', width: 120},
    {field: 'time', headerName: 'Thời gian', width: 150},
    {field: 'room', headerName: 'Phòng thi', width: 120},
    {field: 'sbd', headerName: 'SBD', width: 80},
    {field: 'dotthi', headerName: 'Đợt thi', width: 100},
    {field: 'lanthi', headerName: 'Lần thi', width: 100},
    {
      field: 'description',
      headerName: 'Ghi chú',
      width: 200,
      flex: 1,
    },
    {
      field: 'action',
      width: 200,
      headerName: '',
      align: 'right',
      renderCell: (params: any) => {
        if (params.row.description !== 'Chưa thanh toán') {
          const beforeExam = moment().isSameOrBefore(moment(params.row.testDate, 'DD/MM/YYYY'));

          return (
            <>
              {params.row.description !== 'Hoãn thi' && beforeExam ? (
                <>
                  <NopBaiThiModal
                    name={`${removeVietnameseTones(
                      `${result?.firstName}${result?.lastName}`
                    ).replace(/ /g, '')}`}
                    folderDate={moment(params.row.testDate, 'DD/MM/YYYY').format('DDMMYYYY')}
                    folderRoom={params.row.room}
                    sbd={params.row.sbd}
                  />
                  <Tooltip title="Hoãn thi">
                    <IconButton
                      onClick={() =>
                        handleHoanThi({
                          studentId: params.row.studentId,
                          certificateId: params.row.certificateId,
                          examId: params.row.examId,
                        })
                      }
                    >
                      <CancelIcon />
                    </IconButton>
                  </Tooltip>
                  <TheDuThi {...result} {...params.row} />
                </>
              ) : (
                <></>
              )}
            </>
          );
        }
        // {
        //   return (
        //     <Tooltip title="Thanh toán">
        //       <IconButton>
        //         <Link to={`/checkout/${params.row.intentId}/${params.row.clientSecret}`} replace>
        //           <PaidIcon />
        //         </Link>
        //       </IconButton>
        //     </Tooltip>
        //   );
        // }
      },
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(result);
    const arr: any = [];
    result?.registration?.map((registration: any, index: number) => {
      let i = 0;
      registration?.student?.studentExamMapping?.map((examMapping: any) => {
        arr.push({
          id: ++i,
          studentId: result.id,
          avatar: result.avatar,
          intentId: registration?.payment?.intentId,
          clientSecret: registration?.payment?.secret,
          name: examMapping?.exam?.name,
          certificateId: examMapping?.exam?.certificateId,
          examId: examMapping?.exam?.id,
          time: `${examMapping?.start?.slice(0, 5)} - ${examMapping.end?.slice(0, 5)}`,
          testTime: `${moment(examMapping?.start, 'HH:mm:ss')
            .subtract(15, 'minutes')
            .format('HH:mm')}`,
          testDate: moment(examMapping?.exam.date).format('DD/MM/YYYY'),
          registrationStatus: registration?.status,
          room: examMapping?.room,
          sbd: examMapping?.sbd,
          dotthi: examMapping?.exam?.series,
          lanthi: examMapping?.entry,
          // amount: new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'VND'}).format(
          //   registration?.payment?.amount
          // ),
          description:
            registration?.status === 0
              ? 'Hoãn thi'
              : registration?.payment?.status === 1
              ? 'Đã thanh toán'
              : 'Chưa thanh toán',
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
              avatar: false,
            }}
          />
        </Box>
      </ThemeProvider>
    </>
  );
};

export default TraCuuDanhSachThi;
