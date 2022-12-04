import {
  Container,
  Typography,
  Box,
  TextField,
  InputLabel,
  Button,
  IconButton,
  CircularProgress,
  Tooltip,
  Modal,
} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CancelIcon from '@mui/icons-material/Cancel';
import PaidIcon from '@mui/icons-material/Paid';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {Link, Redirect, useHistory} from 'react-router-dom';
import TheDuThi from 'components/pdf/TheDuThi';
import TraCuuHeader from 'components/header/TraCuuHeader';
import DanhSachThiTable from 'components/common/table/DanhSachThiTable';
const moment = require('moment');

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuDanhSachThi = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [updateCode, setUpdateCode] = useState('');

  const [citizenId, setCitizenId] = useState('');

  const [result, setResult] = useState({}) as any;
  const handleOnClick = async () => {
    if (code === '' || citizenId === '') {
      alert('Bạn chưa nhập đầy đủ thông tin');
      return;
    }
    const res = await axios.get(
      `http://localhost:8080/api/student/search?code=${code}&citizenId=${citizenId}`
    );
    if (res.data.length === 0) {
      alert('Không tìm thấy thông tin');
      return;
    }
    setResult(res.data);
    setCode('');
    setCitizenId('');
    setOpen(true);
    return;
  };

  const handleHoanThi = async (studentId: number) => {
    // const res = await axios.patch(`http://localhost:8080/api/registration/`);
    // if (res.data.length === 0) {
    //   alert('Không tìm thấy thông tin');
    //   return;
    // }
    // setResult(res.data);
    // setUpdateCode('');
    // setOpen(true);
    return;
  };

  const onUpdateCode = async (id: any) => {
    const res = await axios.patch(`http://localhost:8080/api/student/updateCode`, {
      code: updateCode,
      id: id,
    });
    if (res.data) {
      alert('Cập nhật mã đăng ký thành công');
      setUpdateCode('');
      setOpen(false);
      setOpenModal(false);
      return;
    }
    alert('Cập nhật mã đăng ký thất bại');
    return;
  };

  const columns: GridColDef[] = [
    {field: 'intentId'},
    {field: 'clientSecret'},
    {field: 'id', headerName: 'ID', width: 50},
    {field: 'name', headerName: 'Tên chứng chỉ', width: 350},
    {field: 'date', headerName: 'Ngày thi', width: 150},
    {field: 'time', headerName: 'Thời gian', width: 150},
    {field: 'room', headerName: 'Phòng thi', width: 150},
    {field: 'sbd', headerName: 'Số báo danh', width: 100},
    {field: 'type', headerName: 'Hình thức thi', width: 100},
    {field: 'dotthi', headerName: 'Đợt thi', width: 80},
    {field: 'lanthi', headerName: 'Lần thi', width: 80},
    {
      field: 'description',
      headerName: 'Ghi chú',
      width: 200,
      flex: 1,
      // renderCell: (params: any) => params.value,
    },
    {
      field: 'action',
      width: 100,
      headerName: '',
      renderCell: (params: any) => {
        if (params.row.description !== 'Chưa thanh toán') {
          return (
            <>
              <Tooltip title="Hoãn thi">
                <IconButton onClick={() => handleHoanThi(params.row.id)}>
                  <CancelIcon />
                </IconButton>
              </Tooltip>
              <TheDuThi {...result} {...params.row} />
            </>
          );
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
    // {
    //   field: 'fullName',
    //   headerName: 'Họ và tên',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <TraCuuHeader />
        <Container
          maxWidth="md"
          sx={{
            display: open ? 'none' : 'flex',
            flexDirection: 'column',
            gap: '50px',
            marginY: '50px',
            alignItems: 'center',
            minHeight: '50vh',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#b20530',
            }}
          >
            CỔNG TRA CỨU THÔNG TIN THÍ SINH ĐĂNG KÝ DỰ THI
          </Typography>
          <Box
            sx={{
              textAlign: 'left',
              alignSelf: 'flex-start',
              width: '100%',
            }}
          >
            <InputLabel sx={{fontWeight: 700}}>CMND (Không có khoảng cách giữa các số):</InputLabel>
            <TextField
              onChange={(e) => setCitizenId(e.target.value)}
              value={citizenId}
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Ví dụ: 900800700"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel sx={{fontWeight: 700}}>Mã xác nhận (4 chữ số):</InputLabel>
            <TextField
              value={code}
              onChange={(e) => setCode(e.target.value)}
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Ví Dụ: 0000"
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleOnClick}
            sx={{
              fontWeight: 700,
              backgroundColor: '#b20530',
              color: 'white',
              borderRadius: '50px',
              '&:hover': {
                backgroundColor: '#b20530',
              },
            }}
          >
            Tìm
          </Button>
          <Typography>Vui lòng nhập đầy đủ thông tin.</Typography>
          <CircularProgress sx={{display: loading ? 'block' : 'none'}} />
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            display: open ? 'block' : 'none',
            paddingY: '50px',
            // border: '1px solid #b20530',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                color: '#b20530',
                marginY: '50px',
              }}
              gutterBottom
            >
              KẾT QUẢ TRA CỨU
            </Typography>
            <Typography sx={{display: 'inline-block', width: '50%'}} gutterBottom>
              Họ và tên:
              <strong>
                {' '}
                {result?.firstName} {result?.lastName}
              </strong>
            </Typography>
            <Typography sx={{display: 'inline-block', width: '50%'}} gutterBottom>
              Ngày sinh:{' '}
              <strong>
                {result?.dayOfBirth} - {result?.monthOfBirth} - {result?.yearOfBirth}
              </strong>
            </Typography>
            <Typography sx={{display: 'inline-block', width: '50%'}}>
              Số điện thoại: <strong>{result?.phoneNumber}</strong>
            </Typography>
            <Typography sx={{display: 'inline-block', width: '50%'}}>
              Email: <strong>{result?.email}</strong>
            </Typography>
          </Box>
          <Box marginY={1} sx={{textAlign: 'right'}}>
            <Button variant="contained" onClick={handleOpen}>
              ĐỔI MÃ XÁC NHẬN
            </Button>
            <Modal
              open={openModal}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  position: 'absolute' as 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 500,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Nhập mã xác nhận mới
                </Typography>
                <TextField value={updateCode} onChange={(e) => setUpdateCode(e.target.value)} />
                <Button variant="contained" onClick={() => onUpdateCode(result?.id)}>
                  Submit
                </Button>
              </Box>
            </Modal>
          </Box>
          {result.registration && <DanhSachThiTable rows={result.registration} />}
        </Container>
        <GuestFooter />
      </ThemeProvider>
    </>
  );
};

export default TraCuuDanhSachThi;
