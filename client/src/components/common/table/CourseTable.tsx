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
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const moment = require('moment');

function Row(props: {
  row: ReturnType<typeof createData>;
  handleDelete: (id: number, count: number) => any;
  handleEdit: (id: number, state?: any) => any;
}) {
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
        <TableCell align="right">
          <IconButton
            onClick={() =>
              props.handleEdit(row.id, {
                name: row.name,
                day: moment(row.open, 'DD-MM-YYYY').format('D'),
                month: moment(row.open, 'DD-MM-YYYY').format('M'),
                year: moment(row.open, 'DD-MM-YYYY').format('YYYY'),
                count: row.count,
              })
            }
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => props.handleDelete(row.id, row.count)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={7}>
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
                  {row.students.map((studentRow, i) => (
                    <TableRow key={studentRow.id}>
                      <TableCell component="th" scope="row">
                        {i + 1}
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
    start: moment(start, 'HH:mm:ss').format('HH:mm'),
    end: moment(end, 'HH:mm:ss').format('HH:mm'),
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

// [createData('CNTT Cơ bản', '2, 4, 6', '12:00 - 14:00', '22/01/2023', 1)];

export default function CourseTable(props: any) {
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
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.id}
              row={row}
              handleDelete={props.handleDelete}
              handleEdit={props.handleEdit}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
