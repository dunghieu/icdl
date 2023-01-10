import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {IconButton, Tooltip} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TheDuThi from 'components/pdf/TheDuThi';
const moment = require('moment');

function Row(props: {row: ReturnType<typeof createData>}) {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const handleHoanThi = async (studentId: number) => {
    // const res = await axios.patch(`http://localhost:8080/api/registration/`);
    // if (res.data.length === 0) {
    //   alert('Không tìm thấy thông tin');
    //   return;
    // }
    // setResult(res.data);
    // setUpdateCode('');
    // setOpen(true);
    return;
  };

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.amount}</TableCell>
        <TableCell>{row.type}</TableCell>
        {/* <TableCell align="right">{row.count}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{margin: 1}}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>STT</TableCell>
                    <TableCell>Ngày thi</TableCell>
                    <TableCell>Phòng thi</TableCell>
                    <TableCell>Số báo danh</TableCell>
                    <TableCell>Hình thức thi</TableCell>
                    <TableCell>Điểm lý thuyết</TableCell>
                    <TableCell>Điểm thực hành</TableCell>
                    <TableCell>Trạng thái</TableCell>
                    <TableCell>Chức năng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.examsMapping.map((examMapping, index) => (
                    <TableRow key={examMapping.id}>
                      <TableCell component="th" scope="row" sx={{display: 'none'}}>
                        {examMapping.id}
                      </TableCell>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{examMapping.day}</TableCell>
                      <TableCell>{examMapping.room}</TableCell>
                      <TableCell>{examMapping.sbd}</TableCell>
                      <TableCell>{examMapping.type}</TableCell>
                      <TableCell>{examMapping.theoreticalScore}</TableCell>
                      <TableCell>{examMapping.practicalScore}</TableCell>
                      <TableCell>{examMapping.status}</TableCell>
                      <TableCell>
                        <Tooltip title="Hoãn thi">
                          <IconButton onClick={() => handleHoanThi(row.id)}>
                            <CancelIcon />
                          </IconButton>
                        </Tooltip>
                        <TheDuThi
                          avatar={row.student.avatar}
                          name={examMapping.exam.name}
                          dayOfBirth={row.student.dayOfBirth}
                          dotthi={+examMapping.exam.series}
                          firstName={row.student.firstName}
                          lastName={row.student.lastName}
                          gender={row.student.gender}
                          monthOfBirth={row.student.monthOfBirth}
                          placeOfBirth={row.student.placeOfBirth}
                          yearOfBirth={row.student.yearOfBirth}
                          room={examMapping.room}
                          sbd={examMapping.sbd}
                          testDate={examMapping.exam.day}
                          testTime={examMapping.start}
                        />
                      </TableCell>
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
  payment: {
    secret: string;
    intentId: string;
    status: string;
    amount: number;
  },
  certificate: {name: string},
  examsMapping: Array<{
    id: number;
    start: string;
    end: string;
    room: string;
    sbd: string;
    theoreticalScore: number;
    practicalScore: number;
    status: string;
    exam: {
      id: number;
      name: string;
      type: string;
      code: string;
      day: string;
      series: string;
    };
  }>,
  student: {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    dayOfBirth: string;
    monthOfBirth: string;
    yearOfBirth: string;
    placeOfBirth: string;
    avatar: string;
  }
) {
  return {
    id,
    name: certificate.name,
    amount: new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'VND'}).format(
      payment.amount
    ),
    type: payment.status == '1' ? 'Đã thanh toán' : 'Chưa thanh toán',
    student: student,
    examsMapping: examsMapping.map((examMapping) => {
      return {
        exam: examMapping.exam,
        id: examMapping.id,
        day: moment(examMapping.exam.day).format('DD/MM/YYYY'),
        room: examMapping.room,
        sbd: examMapping.sbd,
        theoreticalScore: examMapping.theoreticalScore,
        practicalScore: examMapping.practicalScore,
        status: examMapping.status,
        type: examMapping.exam.type,
        start: moment(examMapping.start).format('DD/MM/YYYY'),
        end: moment(examMapping.end).format('DD/MM/YYYY'),
        time: `${moment(examMapping.start, 'HH:mm:ss').format('HH:mm')} - ${moment(
          examMapping.end,
          'HH:mm:ss'
        ).format('HH:mm')}`,
      };
    }),
  };
}

// [createData('CNTT Cơ bản', '2, 4, 6', '12:00 - 14:00', '22/01/2023', 1)];

export default function DanhSachThiTable(props: any) {
  console.log(props);
  const rows = props.rows?.registration?.map((row: any) => {
    return createData(
      row.id,
      row.payment,
      row.certificate,
      row.student?.studentExamMapping,
      row.student
    );
  }) as ReturnType<typeof createData>[];
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>STT</TableCell>
            <TableCell>Tên chứng chỉ</TableCell>
            <TableCell>Số tiền</TableCell>
            <TableCell>Ghi chú</TableCell>
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
