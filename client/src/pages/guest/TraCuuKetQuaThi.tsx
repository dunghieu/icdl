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

const TraCuuKetQuaThi = () => {
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
            CỔNG TRA CỨU KẾT QUẢ THI CỦA THÍ SINH
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
            <InputLabel sx={{fontWeight: 700}}>Ngày thi (theo định dạng dd/mm/yyy):</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Ví dụ: 20/04/1996"
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
            Tìm
          </Button>
          <Typography>Vui lòng nhập đầy đủ thông tin.</Typography>
        </Container>
        <GuestFooter />
      </ThemeProvider>
    </>
  );
};

export default TraCuuKetQuaThi;
