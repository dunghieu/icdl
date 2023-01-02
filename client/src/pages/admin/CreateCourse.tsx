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
// import type {TimePickerProps} from '@mui/x-date-pickers/TimePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {LocalizationProvider} from '@mui/x-date-pickers';
import MultipleSelectChip from 'components/common/select/MultipleSelectChip';
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

const dates = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

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

function CreateCourse(props: {history: string[]}) {
  const location = useLocation() as any;

  const [name, setName] = location.state?.name ? useState(location.state.name) : useState('');
  const [day, setDay] = location.state?.day ? useState(location.state.day) : useState('');
  const [month, setMonth] = location.state?.month ? useState(location.state.month) : useState('');
  const [year, setYear] = location.state?.year ? useState(location.state.year) : useState('');
  const [date, setDate] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [start, setStart] = useState(null) as any;
  const [end, setEnd] = useState(null) as any;
  const [open, setOpen] = React.useState(false);

  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);

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
    const validateDate = date
      .split(',')
      .map((item: string) => {
        return item.split(' ')[1];
      })
      .sort()
      .join(', ');
    const variables = {
      id: location.state?.id ? location.state.id : null,
      name: name,
      open: moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      certificateId: certificateId,
      start: moment(start).format('HH:mm'),
      end: moment(end).format('HH:mm'),
      day: validateDate,
    };

    if (!name || !day || !month || !year || !certificateId) {
      return alert('Vui lòng điền đầy đủ thông tin');
    } else {
      axios.post('http://localhost:8080/api/course', variables).then((response) => {
        if (response) {
          setOpen(true);
          setTimeout(() => {
            props.history.push('/admin/course');
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
          {params && params.get('edit') === 'true' ? 'Cập nhật khóa học' : 'Tạo khóa học'}
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
          <FormControl sx={{minWidth: 80}} fullWidth>
            <InputLabel id="label-day">Ngày khai giảng</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-day"
              value={day}
              label="Ngày"
              onChange={handleChangeDay}
              autoWidth
            >
              {days().map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: 120}} fullWidth>
            <InputLabel id="label-month">Tháng khai giảng</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-month"
              value={month}
              label="Tháng"
              onChange={handleChangeMonth}
              autoWidth
            >
              {months.map((month) => (
                <MenuItem key={month.value} value={month.value}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{minWidth: 100}} fullWidth>
            <InputLabel id="label-year">Năm khai giảng</InputLabel>
            <Select
              MenuProps={{sx: {height: '300px'}}}
              labelId="label-year"
              value={year}
              label="Năm"
              onChange={handleChangeYear}
              autoWidth
            >
              {years().map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{display: 'flex', gap: '25px'}}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Giờ bắt đầu"
              value={start}
              onChange={(newValue) => {
                setStart(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              label="Giờ kết thúc"
              value={end}
              onChange={(newValue) => {
                setEnd(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Box>
        <MultipleSelectChip
          label="Ngày học"
          value={dates}
          get={(value: string | string[]) => {
            if (typeof value === 'string') {
              setDate(value);
            }
            if (Array.isArray(value)) {
              setDate(value.join(','));
            }
          }}
        />
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

export default CreateCourse;
