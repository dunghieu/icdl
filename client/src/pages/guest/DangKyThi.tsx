import {
  Container,
  Typography,
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
  Box,
} from '@mui/material';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import PopupDialog from 'components/common/alert/PopupDialog';
import {useHistory} from 'react-router-dom';
import moment from 'moment';

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
    value: '1',
  },
  {
    id: 2,
    name: 'Công nghệ thông tin nâng cao',
    value: '2',
  },
  {
    id: 3,
    name: 'IC3, MOS',
    value: '3',
  },
];

const DangKyThi = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dayOfBirth, setDayOfBirth] = useState('');
  const [monthOfBirth, setMonthOfBirth] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [citizenId, setCitizenId] = useState('');
  const [certificate, setCertificate] = useState('');
  const [course, setCourse] = useState('');
  const [courseList, setCourseList] = useState([]);
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [ethnic, setEthnic] = useState('');
  const [ethnicList, setEthnicList] = useState([]);
  const [checkOn, setCheckOn] = useState(false);
  const [checkThi, setCheckThi] = useState(false);
  const [checked, setChecked] = useState('');
  const [student, setStudent] = useState({} as any);
  const [selectedFile, setSelectedFile] = React.useState<any>(null);
  const [fileUrl, setFileUrl] = React.useState<any>(null);

  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search).get('id');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setFileUrl(URL.createObjectURL(event.target.files[0]));
    }
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
    if (!checkOn) {
      setCourse('');
    }

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
    const getCourse = await axios.get('http://localhost:8080/api/course/available');
    setCityList(getCity.data);
    setEthnicList(getEthnic.data);
    setCourseList(getCourse.data);

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
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('gender', gender);
    formData.append('dayOfBirth', ('0' + dayOfBirth).slice(-2));
    formData.append('monthOfBirth', ('0' + monthOfBirth).slice(-2));
    formData.append('yearOfBirth', yearOfBirth);
    formData.append('placeOfBirth', city);
    formData.append('email', email);
    formData.append('phoneNumber', phone);
    formData.append('citizenId', citizenId);
    formData.append('ethnic', ethnic);
    formData.append('certificateId', certificate);
    formData.append('type', checked);
    formData.append('courseId', course);
    formData.append('avatar', selectedFile);
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
      certificateId: certificate,
      type: checked,
      courseId: course,
    };
    try {
      let result;
      if (params) {
        result = await axios.patch(`http://localhost:8080/api/registration/${params}`, data);
      } else {
        // result = await axios.post('http://localhost:8080/api/registration', data);
        result = await axios({
          method: 'post',
          url: 'http://localhost:8080/api/registration',
          data: formData,
          headers: {'Content-Type': 'multipart/form-data'},
        });
      }
      if (result.status === 201) {
        handleClickOpen();
      }
    } catch (e) {
      console.log(e.response.status);
      if (e.response.status === 400 || e.response.status === 500) {
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
                <MenuItem value={item.id} key={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
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
          <Grid item xs={3} sx={{position: 'relative'}}>
            <Box sx={{position: 'absolute', width: '4cm', height: '6cm', top: '10px', left: '0px'}}>
              {selectedFile && (
                <img src={fileUrl} alt="preview image" style={{width: '100%', height: '100%'}} />
              )}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{fontWeight: 700}}>KHÓA HỌC</InputLabel>
            <TextField
              disabled={!checkOn}
              select
              variant="outlined"
              color="neutral"
              size="small"
              fullWidth
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            >
              {checkOn &&
                courseList.map((item: any) => {
                  if (item.certificateId == certificate) {
                    return (
                      <MenuItem value={item.id} key={item.id}>
                        Thứ {item.day} ({item.start} - {item.end}) Khai giảng ngày{' '}
                        {moment(item.open).format('DD/MM/YYYY')}
                      </MenuItem>
                    );
                  }
                })}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <InputLabel sx={{fontWeight: 700}}>Ảnh đại diện</InputLabel>
            <Button variant="contained" color="info" component="label">
              Chọn ảnh
              <input id="file1" type="file" hidden onChange={handleFileSelect} />
            </Button>
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
          ĐĂNG KÝ THI
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
