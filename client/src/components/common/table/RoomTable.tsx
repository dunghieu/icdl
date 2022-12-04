import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const moment = require('moment');

function Row(props: {row: ReturnType<typeof createData>}) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.day}</TableCell>
        <TableCell align="right">{row.time}</TableCell>
        <TableCell align="right">{row.open}</TableCell>
        <TableCell align="right">{row.count}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Tên học sinh</TableCell>
                    <TableCell align="right">Giới tính</TableCell>
                    <TableCell align="right">Ngày sinh</TableCell>
                    <TableCell align="right">SĐT</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.students.map((studentRow) => (
                    <TableRow key={studentRow.id}>
                      <TableCell component="th" scope="row">
                        {studentRow.id}
                      </TableCell>
                      <TableCell>{studentRow.name}</TableCell>
                      <TableCell align="right">{studentRow.gender}</TableCell>
                      <TableCell align="right">{studentRow.birthday}</TableCell>
                      <TableCell align="right">{studentRow.phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
function createData(
  id: number,
  name: string,
  day: string,
  start: string,
  end: string,
  open: Date,
  count: number,
  students: Array<{
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    phoneNumber: string;
  }>
) {
  return {
    id,
    name,
    day,
    time: `${moment(start, 'HH:mm:ss').format('HH:mm')} - ${moment(end, 'HH:mm:ss').format(
      'HH:mm'
    )}`,
    count,
    open: moment(open).format('DD/MM/YYYY'),
    students: students.map((student) => {
      return {
        id: student.id,
        name: `${student.firstName} ${student.lastName}`,
        gender: student.gender,
        birthday: `${student.dayOfBirth}/${student.monthOfBirth}/${student.yearOfBirth}`,
        phone: student.phoneNumber,
      };
    }),
  };
}

export default function RoomTable(props: any) {
  const rows = props.rows.map((row: any) => {
    return createData(
      row.id,
      row.name,
      row.day,
      row.start,
      row.end,
      row.open,
      row.students?.length,
      row.students
    );
  }) as ReturnType<typeof createData>[];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tên khóa học</TableCell>
            <TableCell align="right">Thứ</TableCell>
            <TableCell align="right">Giờ học</TableCell>
            <TableCell align="right">Ngày khai giảng</TableCell>
            <TableCell align="right">Sĩ số</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
