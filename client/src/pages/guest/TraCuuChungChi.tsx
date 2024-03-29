import {Container, Typography, Box, TextField, InputLabel, Button} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const TraCuuChungChi = () => {
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
            TRA CỨU CHỨNG CHỈ CNTT
          </Typography>
          <Box
            sx={{
              textAlign: 'left',
              alignSelf: 'flex-start',
              width: '100%',
            }}
          >
            <InputLabel sx={{fontWeight: 700}}>Họ tên:</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Nhập đầy đủ họ tên để tìm kiếm. VD: Nguyễn Văn Nam"
              fullWidth
            />
            <br />
            <br />
            <br />
            <InputLabel sx={{fontWeight: 700}}>Số hiệu:</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Nhập đầy đủ họ tên để tìm kiếm. VD: Nguyễn Văn Nam"
              fullWidth
            />
          </Box>
          <Button
            variant="contained"
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
            Tra cứu
          </Button>
          <Typography>Vui lòng nhập đầy đủ thông tin.</Typography>
        </Container>
        <GuestFooter />
      </ThemeProvider>
    </>
  );
};

export default TraCuuChungChi;
