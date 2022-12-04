import React, {useEffect, useState} from 'react';

import QuillEditor from '../../components/editor/QuillEditor';
import {
  Typography,
  Button,
  Snackbar,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';
import axios from 'axios';
import {useSelector} from 'react-redux';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MultipleSelectChip from 'components/common/select/MultipleSelectChip';
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
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [certificateId, setCertificateId] = useState('');
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
  const handleChangeType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (event: {preventDefault: () => void}) => {
    event.preventDefault();

    const variables = {
      name: name,
      date: moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      certificateId: certificateId,
      type: type,
    };

    if (!name || !day || !month || !year || !certificateId) {
      return alert('Vui lòng điền đầy đủ thông tin');
    } else {
      axios.post('http://localhost:8080/api/exam', variables).then((response) => {
        if (response) {
          setOpen(true);

          setTimeout(() => {
            props.history.push('/admin/exam');
          }, 2000);
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
              autoWidth
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
              autoWidth
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
              autoWidth
            >
              {years().map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="label-type">Hình thức</InputLabel>
            <Select
              // MenuProps={{sx: {height: '300px'}}}
              labelId="label-type"
              value={type}
              label="Hình thức"
              onChange={handleChangeType}
            >
              <MenuItem value="Lý thuyết">Lý thuyết</MenuItem>
              <MenuItem value="Thực hành">Thực hành</MenuItem>
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
        <div style={{textAlign: 'center', margin: '2rem'}}>
          <Button type="submit" variant="contained" color="info">
            Submit
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
              Create Succeed!
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
}

export default CreateExam;
