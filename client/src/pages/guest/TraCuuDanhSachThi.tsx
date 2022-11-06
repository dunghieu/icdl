import {Container, Typography, Box, TextField, InputLabel, Button} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import {useState} from 'react';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuDanhSachThi = () => {
  const [fullName, setFullName] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [result, setResult] = useState({});

  const handleOnClick = async () => {
    if (fullName === '' || citizenId === '') {
      alert('Bạn chưa nhập đầy đủ thông tin');
      return;
    }
    const res = await axios.get(
      `http://localhost:3000/api/certificates?fullName=${fullName}&citizenId=${citizenId}`
    );
    setResult(res.data);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GuestHeader />
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
            alignItems: 'center',
            marginY: '50px',
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
            <InputLabel sx={{fontWeight: 700}}>Họ tên đầy đủ:</InputLabel>
            <TextField
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Ví Dụ: Nguyễn Văn Nam"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel sx={{fontWeight: 700}}>CMND (Không có khoảng cách giữa các số):</InputLabel>
            <TextField
              value={citizenId}
              onChange={(e) => setCitizenId(e.target.value)}
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Ví dụ: 900800700"
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
        <GuestFooter />
      </ThemeProvider>
    </>
  );
};

export default TraCuuDanhSachThi;
