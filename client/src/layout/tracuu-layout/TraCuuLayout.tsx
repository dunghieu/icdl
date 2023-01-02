import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {DashBoardProps} from 'lib/interfaces';
const renderRoutes = require('react-router-config').renderRoutes;
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import DatePicker from 'components/common/select/DatePicker';
import dayjs from 'dayjs';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuLayout: React.FC<DashBoardProps> = ({route}) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

  const codeRef = React.useRef<HTMLInputElement>(null);
  const checkCodeRef = React.useRef<HTMLInputElement>(null);

  const firstNameRef = React.useRef<HTMLInputElement>(null);
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const [date, setDate] = React.useState<dayjs.Dayjs | null>(dayjs('2014-08-18T21:11:54'));
  const phoneNumberRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);

  const [open, setOpen] = React.useState(false);

  const [citizenId, setCitizenId] = React.useState('');
  const [code, setCode] = React.useState('');

  const [result, setResult] = React.useState({}) as any;

  const history = useHistory();
  const pathname = history.location.pathname;

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/student/search?code=${code}&citizenId=${citizenId}`
      );
      if (res.data.length === 0) {
        alert('Không tìm thấy thông tin');
        return;
      }
      setResult(res.data);
      setDate(dayjs(`${res.data.yearOfBirth}-${res.data.monthOfBirth}-${res.data.dayOfBirth}`));
      setOpen(true);
      history.push('/tra-cuu/nguyen-vong-dang-ky');
    } catch (e) {
      alert('Không tìm thấy thông tin');
    }
  };

  const handleOnClick = async () => {
    if (code === '' || citizenId === '') {
      alert('Bạn chưa nhập đầy đủ thông tin');
      return;
    }
    fetchData();
    return;
  };
  const onUpdateCode = async (id: any) => {
    const updateCode = codeRef.current?.value;
    const checkCode = checkCodeRef.current?.value;
    if (updateCode !== checkCode) {
      alert('Mã xác nhận không khớp');
      return;
    }

    const res = await axios.patch(`http://localhost:8080/api/student/${id}`, {
      code: updateCode,
    });
    if (res.data) {
      alert('Cập nhật mã đăng ký thành công');
      setOpenModal(false);
      return;
    }
    alert('Cập nhật mã đăng ký thất bại');
    return;
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GuestHeader />
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
        </Container>
        <Container
          maxWidth={false}
          sx={{
            marginY: '50px',
            display: open ? 'flex' : 'none',
            gap: '50px',
          }}
        >
          <Box sx={{width: '15%', borderRight: '1px solid #d3d7df'}}>
            <Stack spacing={0}>
              <NavLink
                to="/tra-cuu/nguyen-vong-dang-ky"
                exact
                activeStyle={{borderRight: '3px solid #f50057'}}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                DANH SÁCH NGUYỆN VỌNG
              </NavLink>
              <NavLink
                to="/tra-cuu/ket-qua-dang-ky-thi"
                exact
                activeStyle={{borderRight: '3px solid #f50057'}}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                KẾT QUẢ ĐĂNG KÝ THI
              </NavLink>
              <NavLink
                to="/tra-cuu/ket-qua-dang-ky-hoc"
                activeStyle={{borderRight: '3px solid #f50057'}}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                KẾT QUẢ ĐĂNG KÝ HỌC
              </NavLink>
              <NavLink
                to="/tra-cuu/ket-qua-thi"
                activeStyle={{borderRight: '3px solid #f50057'}}
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                KẾT QUẢ THI
              </NavLink>
            </Stack>
          </Box>
          <Box sx={{width: '80%'}}>
            <Box>
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
                  {pathname === '/tra-cuu/ket-qua-dang-ky-thi'
                    ? 'KẾT QUẢ ĐĂNG KÝ THI'
                    : pathname === '/tra-cuu/ket-qua-dang-ky-hoc'
                    ? 'KẾT QUẢ ĐĂNG KÝ HỌC'
                    : pathname === '/tra-cuu/ket-qua-thi'
                    ? 'KẾT QUẢ THI'
                    : 'DANH SÁCH NGUYỆN VỌNG'}
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
                <Button variant="contained" onClick={() => setOpenModal(true)}>
                  ĐỔI MÃ XÁC NHẬN
                </Button>
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
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
                    <TextField
                      value={codeRef.current?.value}
                      inputRef={codeRef}
                      type="password"
                      placeholder="Nhập mã xác nhận mới"
                    />
                    <TextField
                      placeholder="Nhập lại mã xác nhận mới"
                      value={checkCodeRef.current?.value}
                      inputRef={checkCodeRef}
                      type="password"
                    />
                    <Button variant="contained" onClick={() => onUpdateCode(result?.id)}>
                      Submit
                    </Button>
                  </Box>
                </Modal>
              </Box>
              <Box marginY={1} sx={{textAlign: 'right'}}>
                <Button variant="contained" onClick={() => setOpenModal2(true)}>
                  CẬP NHẬT THÔNG TIN
                </Button>
                <Modal
                  open={openModal2}
                  onClose={() => setOpenModal2(false)}
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
                      Nhập trường cần cập nhật
                    </Typography>
                    <Box sx={{display: 'grid', gap: '10px'}}>
                      <TextField
                        label="Họ"
                        defaultValue={result?.firstName}
                        value={firstNameRef.current?.value}
                        inputRef={firstNameRef}
                      />
                      <TextField
                        label="Tên"
                        defaultValue={result?.lastName}
                        value={lastNameRef.current?.value}
                        inputRef={lastNameRef}
                      />
                      <DatePicker value={date} onChange={setDate} label={'Ngày sinh'} />
                      <TextField
                        label="Email"
                        defaultValue={result?.email}
                        value={emailRef.current?.value}
                        inputRef={lastNameRef}
                      />
                      <TextField
                        label="Số điện thoại"
                        defaultValue={result?.phoneNumber}
                        value={phoneNumberRef.current?.value}
                        inputRef={lastNameRef}
                      />
                    </Box>
                    <Button variant="contained" onClick={() => onUpdateCode(result?.id)}>
                      Submit
                    </Button>
                  </Box>
                </Modal>
              </Box>
            </Box>
            {renderRoutes(route?.routes, {code: code, citizenId: citizenId, data: result})}
          </Box>
        </Container>
        <GuestFooter />
      </ThemeProvider>
    </>
  );
};

export default TraCuuLayout;
