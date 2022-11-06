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
  MenuItem,
  FormGroup,
} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PopupDialog from 'components/common/alert/PopupDialog';
import {useHistory} from 'react-router-dom';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const certificateList = [
  {
    id: 1,
    name: 'Công nghệ thông tin cơ bản',
  },
  {
    id: 2,
    name: 'Công nghệ thông tin nâng cao',
  },
  {
    id: 3,
    name: 'IC3, MOS',
  },
];

const DangKyThi = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [firstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState({});
  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState({});
  const [gender, setGender] = useState('');
  const [errorGender, setErrorGender] = useState({});
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [errorDay, setErrorDay] = useState({});
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [errorMonth, setErrorMonth] = useState({});
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [errorYear, setErrorYear] = useState({});
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState({});
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState({});
  const [citizenId, setCitizenId] = useState('');
  const [errorCitizenId, setErrorCitizenId] = useState({});
  const [certificate, setCertificate] = useState('');
  const [errorCertificate, setErrorCertificate] = useState({});
  const [city, setCity] = useState('');
  const [errorCity, setErrorCity] = useState({});
  const [cityList, setCityList] = useState([]);
  const [ethnic, setEthnic] = useState('');
  const [errorEthnic, setErrorEthnic] = useState({});
  const [ethnicList, setEthnicList] = useState([]);
  const [checkOn, setCheckOn] = useState(false);
  const [checkThi, setCheckThi] = useState(false);
  const [checked, setChecked] = useState('');
  const [errorChecked, setErrorChecked] = useState({});
  const [student, setStudent] = useState({} as any);

  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search).get('id');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push(`/`);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (checkOn === true && checkThi === true) {
      setChecked('ôn + thi');
    }
    if (checkOn === true && checkThi === false) {
      setChecked('ôn');
    }
    if (checkOn === false && checkThi === true) {
      setChecked('thi');
    }
  }, [checkOn, checkThi]);

  const fetchData = async () => {
    const getCity = await axios.get('http://localhost:8080/api/city');
    const getEthnic = await axios.get('http://localhost:8080/api/ethnic');
    setCityList(getCity.data);
    setEthnicList(getEthnic.data);

    if (params) {
      const getStudent = await axios.get(`http://localhost:8080/api/student/${params}`);
      setFirstName(getStudent.data.firstName);
      setLastName(getStudent.data.lastName);
      if (getStudent.data.gender === 'Nam') {
        setGender('Nam');
      } else {
        setGender('Nữ');
      }
      setDayOfBirth(getStudent.data.dayOfBirth);
      setMonthOfBirth(getStudent.data.monthOfBirth);
      setYearOfBirth(getStudent.data.yearOfBirth);
      setEmail(getStudent.data.email);
      setPhone(getStudent.data.phoneNumber);
      setCitizenId(getStudent.data.citizenId);
      setCertificate(getStudent.data.certificate);
      setCity(getStudent.data.city);
      setEthnic(getStudent.data.ethnic);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      gender,
      dayOfBirth: ('0' + dayOfBirth).slice(-2),
      monthOfBirth: ('0' + monthOfBirth).slice(-2),
      yearOfBirth,
      placeOfBirth: city,
      email,
      phoneNumber: phone,
      citizenId,
      ethnic,
      certificateType: certificate,
      type: checked,
    };
    try {
      let result;
      if (params) {
        result = await axios.patch(`http://localhost:8080/api/student/${params}`, data);
      } else {
        result = await axios.post('http://localhost:8080/api/student', data);
      }
      console.log(result);
      if (result.status === 201) {
        handleClickOpen();
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 400) {
        handleClickOpen2();
      }
    }
  };

  return (
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
          <Grid item xs={5}>
            <InputLabel sx={{fontWeight: 700}}>HỌ VÀ TÊN LÓT (Ví dụ: Nguyễn Văn)</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <InputLabel sx={{fontWeight: 700}}>TÊN (Ví dụ: Thanh)</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <FormLabel id="demo-radio-buttons-group-label" sx={{fontWeight: 700}}>
              Giới tính
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              row
              onChange={(e) => setGender(e.target.value)}
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
                checked={gender === 'Nam'}
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
                checked={gender === 'Nữ'}
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>NGÀY SINH</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={dayOfBirth}
              onChange={(e) => setDayOfBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>THÁNG SINH</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={monthOfBirth}
              onChange={(e) => setMonthOfBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>NĂM SINH</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>NƠI SINH (ví dụ: Hà Nội)</InputLabel>
            <TextField
              select
              variant="outlined"
              size="small"
              fullWidth
              sx={{marginTop: '0.5rem'}}
              SelectProps={{
                MenuProps: {sx: {height: '300px'}},
              }}
              onChange={(event) => setCity(event.target.value)}
              value={city ? city : student.placeOfBirth}
            >
              {cityList.map((item: any) => (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>CMND ( Ví dụ: 023456789)</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={citizenId}
              onChange={(e) => setCitizenId(e.target.value)}
            />
          </Grid>

          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>SỐ ĐIỆN THOẠI (Ví dụ: 0909121377)</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>EMAIL</InputLabel>
            <TextField
              variant="outlined"
              color="neutral"
              margin="dense"
              size="small"
              placeholder="Câu trả lời của bạn"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>DÂN TỘC</InputLabel>
            <TextField
              select
              variant="outlined"
              color="neutral"
              margin="dense"
              SelectProps={{
                MenuProps: {sx: {height: '300px'}},
              }}
              size="small"
              fullWidth
              defaultValue="Kinh"
              value={ethnic}
              onChange={(event) => setEthnic(event.target.value)}
            >
              {ethnicList.map((item: any) => (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>LOẠI CHỨNG CHỈ</InputLabel>
            <TextField
              select
              variant="outlined"
              color="neutral"
              size="small"
              fullWidth
              value={certificate}
              onChange={(event) => setCertificate(event.target.value)}
            >
              {certificateList.map((item: any) => (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>HÌNH THỨC</InputLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkOn}
                    onChange={(event) => setCheckOn(event.target.checked)}
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
                    checked={checkThi}
                    onChange={(event) => setCheckThi(event.target.checked)}
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
            </FormGroup>
          </Grid>
        </Grid>
        <Button
          onClick={handleSubmit}
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
      <PopupDialog
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        title="Đăng ký thành công"
        content="Vui lòng kiểm tra email để biết thêm chi tiết"
      />
      <PopupDialog
        open={open2}
        handleClickOpen={handleClickOpen2}
        handleClose={handleClose2}
        title="Đăng ký không thành công"
        content="Vui lòng nhập đầy đủ thông tin"
      />
    </ThemeProvider>
  );
};

export default DangKyThi;
