import {
  Container,
  Typography,
  Box,
  TextField,
  InputLabel,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Checkbox,
  Button,
} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';

const DangKyThi = () => {
  return (
    <>
      <GuestHeader />
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
          alignItems: 'center',
          marginY: '50px',
          minHeight: '60vh',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: '#b20530',
          }}
        >
          FORM ĐĂNG KÝ THI
        </Typography>

        <Grid container spacing={5}>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>HỌ VÀ TÊN LÓT (Ví dụ: Nguyễn Văn)</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>TÊN (Ví dụ: Thanh)</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>NGÀY SINH</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>THÁNG SINH</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>NĂM SINH</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{fontWeight: 700}}>
              Giới tính
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="Nam"
                control={
                  <Radio
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
                  />
                }
                label="Nam"
              />
              <FormControlLabel
                value="Nữ"
                control={
                  <Radio
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
                  />
                }
                label="Nữ"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>CMND ( Ví dụ: 023456789)</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>NƠI SINH (ví dụ: Hà Nội)</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>SỐ ĐIỆN THOẠI (Ví dụ: 0909121377)</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>EMAIL</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>DÂN TỘC</InputLabel>
            <TextField
              variant="filled"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>HÌNH THỨC ĐĂNG KÝ</InputLabel>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'black',
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
              }
              value="Ôn"
              label="Ôn"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: 'black',
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
              }
              value="Thi"
              label="Thi"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#b20530',
            color: 'white',
            '&:hover': {
              backgroundColor: '#b20530',
            },
          }}
        >
          GỬI
        </Button>
      </Container>
      <GuestFooter />
    </>
  );
};

export default DangKyThi;
