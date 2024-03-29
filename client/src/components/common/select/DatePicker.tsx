import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

export default function DatePicker(props) {
  const {value, onChange, label} = props;

  // const [value, setValue] = React.useState<dayjs.Dayjs | null>(dayjs('2014-08-18T21:11:54'));

  // const handleChange = (newValue: dayjs.Dayjs | null) => {
  //   setValue(newValue);
  // };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
