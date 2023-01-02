import React, {useEffect, useState} from 'react';

import {
  Button,
  Snackbar,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Box,
  Typography,
} from '@mui/material';
import axios from 'axios';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useHistory, useLocation} from 'react-router-dom';
const moment = require('moment');

const theme = createTheme({
  palette: {
    neutral: {
      main: 'none',
      // contrastText: '#fff',
    },
  },
});

const categories = [
  'Thông báo',
  'Các Khóa học',
  'Thông báo CNTT Cơ Bản',
  'Thông báo CNTT Nâng Cao',
  'Thông báo IC3, MOS',
];

const days = () => {
  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days;
};

const months = [
  {value: 1, label: 'Tháng 1'},
  {value: 2, label: 'Tháng 2'},
  {value: 3, label: 'Tháng 3'},
  {value: 4, label: 'Tháng 4'},
  {value: 5, label: 'Tháng 5'},
  {value: 6, label: 'Tháng 6'},
  {value: 7, label: 'Tháng 7'},
  {value: 8, label: 'Tháng 8'},
  {value: 9, label: 'Tháng 9'},
  {value: 10, label: 'Tháng 10'},
  {value: 11, label: 'Tháng 11'},
  {value: 12, label: 'Tháng 12'},
];

const years = () => {
  let years = [];
  for (let i = new Date().getFullYear(); i <= 2025; i++) {
    years.push(i);
  }
  return years;
};

const certificates = [
  {value: '1', label: 'Công nghê thông tin Cơ bản'},
  {value: '2', label: 'Công nghệ thông tin Nâng cao'},
  {value: '3', label: 'IC3, MOS'},
];

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateExam(props: {history: string[]}) {
  const location = useLocation() as any;
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  // console.log(location.state);
  const [name, setName] = location.state?.name ? useState(location.state?.name) : useState('');
  const [day, setDay] = location.state?.day ? useState(location.state?.day) : useState('');
  const [month, setMonth] = location.state?.month ? useState(location.state?.month) : useState('');
  const [year, setYear] = location.state?.year ? useState(location.state?.year) : useState('');
  const [certificateId, setCertificateId] = location.state?.certificateId
    ? useState(location.state?.certificateId)
    : useState('');
  const [open, setOpen] = React.useState(false);

  const handleChangeDay = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };
  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };
  const handleChangeYear = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const handleChangeCertificate = (event: SelectChangeEvent) => {
    setCertificateId(event.target.value as string);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCancel = () => {
    history.goBack();
  };

  const onSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    const variables = {
      id: location.state?.id ? location.state?.id : null,
      name: name,
      date: moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      certificateId: certificateId,
    };

    if (!name || !day || !month || !year || !certificateId) {
      return alert('Vui lòng điền đầy đủ thông tin');
    } else {
      if (params && params.get('edit') === 'true') {
        axios
          .patch(`http://localhost:8080/api/exam/${location.state?.id}`, variables)
          .then((response) => {
            if (response) {
              setOpen(true);

              setTimeout(() => {
                props.history.push('/admin/exam');
              }, 1000);
            }
          });
        return;
      }
      axios.post('http://localhost:8080/api/exam', variables).then((response) => {
        if (response) {
          setOpen(true);

          setTimeout(() => {
            props.history.push('/admin/exam');
          }, 1000);
        }
      });
    }
  };
  return (
    <div
      style={{
        maxWidth: '700px',
        margin: '2rem auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
      }}
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4" component="h2" sx={{textAlign: 'center'}}>
          {params && params.get('edit') === 'true' ? 'Cập nhật kì thi' : 'Tạo kì thi'}
        </Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Tên"
          InputLabelProps={{shrink: true}}
          variant="outlined"
          fullWidth
          color="neutral"
        />
        <Box sx={{display: 'flex', gap: '25px'}}>
          <FormControl sx={{minWidth: 80}}>
            <InputLabel id="label-day">Ngày</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-day"
              value={day}
              label="Ngày"
              onChange={handleChangeDay}
              // autoWidth
              fullWidth
            >
              {days().map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: 120}}>
            <InputLabel id="label-month">Tháng</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-month"
              value={month}
              label="Tháng"
              onChange={handleChangeMonth}
              // autoWidth
              fullWidth
            >
              {months.map((month) => (
                <MenuItem key={month.value} value={month.value}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: 100}}>
            <InputLabel id="label-year">Năm</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-year"
              value={year}
              label="Năm"
              onChange={handleChangeYear}
              // autoWidth
              fullWidth
            >
              {years().map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <FormControl fullWidth>
          <InputLabel id="label-certificate">Chứng chỉ</InputLabel>
          <Select
            MenuProps={{sx: {height: '300px'}}}
            labelId="label-certificate"
            value={certificateId}
            label="Chứng chỉ"
            onChange={handleChangeCertificate}
            fullWidth
          >
            {certificates.map((day) => (
              <MenuItem key={day.value} value={day.value}>
                {day.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>

      <form onSubmit={onSubmit}>
        <Box sx={{justifyContent: 'center', margin: '2rem', display: 'flex', gap: '25px'}}>
          <Button type="submit" variant="contained" color="info">
            Submit
          </Button>
          {params && params.get('edit') == 'true' ? (
            <Button variant="outlined" color="info" onClick={handleCancel}>
              Cancel
            </Button>
          ) : null}
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
              {params && params.get('edit') == 'true' ? 'Cập nhật thành công' : 'Tạo thành công'}
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </div>
  );
}

export default CreateExam;
