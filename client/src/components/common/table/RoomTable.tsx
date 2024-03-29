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
import {Button} from '@mui/material';
import axios from 'axios';
import DanhSachDuThi from 'components/pdf/DanhSachDuThi';
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
          {row.room}
        </TableCell>
        <TableCell>{row.exam.name}</TableCell>
        <TableCell align="right">{row.exam.date}</TableCell>
        <TableCell align="right">{row.time}</TableCell>
        <TableCell align="right">{row.student.find((o) => o.status !== 1) ? '' : 'Đóng'}</TableCell>
        <TableCell width="300px">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '10px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
              }}
            >
              <DanhSachDuThi
                key={row.room}
                exam={row.exam.name}
                series={row.exam.series}
                room={row.room}
                rows={row.student}
              />
            </Box>
          </Box>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>SBD</TableCell>
                    <TableCell>Tên học sinh</TableCell>
                    <TableCell align="right">Giới tính</TableCell>
                    <TableCell align="right">Ngày sinh</TableCell>
                    <TableCell align="right">Bài 1</TableCell>
                    <TableCell align="right">Bài 2</TableCell>
                    <TableCell align="right">Bài 3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.student.map((studentRow, i) => (
                    <TableRow key={studentRow.id}>
                      <TableCell component="th" scope="row">
                        {i + 1}
                      </TableCell>
                      <TableCell>{studentRow.sbd}</TableCell>
                      <TableCell>{studentRow.name}</TableCell>
                      <TableCell align="right">{studentRow.gender}</TableCell>
                      <TableCell align="right">{studentRow.birthday}</TableCell>
                      <TableCell align="right">{studentRow.bai1 ? 'Đã nộp' : ''}</TableCell>
                      <TableCell align="right">{studentRow.bai2 ? 'Đã nộp' : ''}</TableCell>
                      <TableCell align="right">{studentRow.bai3 ? 'Đã nộp' : ''}</TableCell>
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
  room: string,
  start: Date,
  end: Date,
  exam: {
    id: number;
    date: Date;
    series: number;
    name: string;
    code: string;
  },
  student: Array<{
    id: number;
    citizenId: string;
    firstName: string;
    lastName: string;
    gender: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    practicalScore: number;
    theoreticalScore: number;
    status: number;
    avatar: string;
    sbd: string;
    bai1: string;
    bai2: string;
    bai3: string;
  }>
) {
  // exam.date = moment(exam.date).format('DD/MM/YYYY');
  return {
    room,
    time: `${moment(start, 'HH:mm:ss').format('HH:mm')} - ${moment(end, 'HH:mm:ss').format(
      'HH:mm'
    )}`,
    exam: {
      date: moment(exam.date).format('DD/MM/YYYY'),
      series: exam.series,
      name: exam.name,
    },
    student: student.map((s) => {
      return {
        id: s.id,
        citizenId: s.citizenId,
        name: `${s.firstName} ${s.lastName}`,
        gender: s.gender,
        birthday: `${s.dayOfBirth}/${s.monthOfBirth}/${s.yearOfBirth}`,
        practicalScore: s.practicalScore,
        theoreticalScore: s.theoreticalScore,
        status: s.status,
        avatar: s.avatar,
        sbd: s.sbd,
        bai1: s.bai1,
        bai2: s.bai2,
        bai3: s.bai3,
      };
    }),
  };
}

export default function RoomTable(props: any) {
  const rows = props.rows.map((row: any) => {
    return createData(row.room, row.start, row.end, row.exam, row.student);
  }) as ReturnType<typeof createData>[];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Tên phòng thi</TableCell>
            <TableCell>Chứng chỉ</TableCell>
            <TableCell align="right">Ngày thi</TableCell>
            <TableCell align="right">Giờ thi</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.room} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
