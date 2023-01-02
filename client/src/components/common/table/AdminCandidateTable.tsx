import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {TableHead} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TheDuThi from 'components/pdf/TheDuThi';
const moment = require('moment');

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const {count, page, rowsPerPage, onPageChange} = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{flexShrink: 0, ml: 2.5}}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function AdminCandidateTable({rows, printable}: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} sx={{overflowX: 'auto', width: '100%', maxHeight: '90vh'}}>
      <Table aria-label="custom pagination table" sx={{minWidth: '90vw'}}>
        <TableHead>
          <TableRow>
            <TableCell width={150}>Họ và tên</TableCell>
            <TableCell width={80}>Giới tính</TableCell>
            <TableCell width={100}>Ngày sinh</TableCell>
            <TableCell width={100}>Email</TableCell>
            <TableCell width={100}>Chứng chỉ</TableCell>
            <TableCell width={100}>Số báo danh</TableCell>
            <TableCell width={100}>Phòng thi</TableCell>
            <TableCell width={100}>Thời gian</TableCell>
            <TableCell width={100}>Ghi chú</TableCell>
            <TableCell width={100}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row: any) => (
            <TableRow key={row.id}>
              <TableCell style={{display: 'none'}}>{row.id}</TableCell>
              <TableCell style={{display: 'none'}}>{row.student?.placeOfBirth}</TableCell>
              <TableCell style={{display: 'none'}}>{row.student?.phoneNumber}</TableCell>
              <TableCell style={{display: 'none'}}>{row.student?.ethnic}</TableCell>
              <TableCell>
                {row.student?.firstName} {row.student?.lastName}
              </TableCell>
              <TableCell>{row.student?.gender}</TableCell>
              <TableCell>
                {row.student?.dayOfBirth} - {row.student?.monthOfBirth} - {row.student?.yearOfBirth}
              </TableCell>
              <TableCell>{row.student?.email}</TableCell>
              <TableCell>
                {row.exam?.certificateId == 1
                  ? 'CNTT Cơ bản'
                  : row.exam?.certificateId == 2
                  ? 'CNTT Nâng cao'
                  : 'IC3, MOS'}
              </TableCell>
              <TableCell align="center">{row.sbd}</TableCell>
              <TableCell align="center">{row.room}</TableCell>
              <TableCell align="center">
                {row.start &&
                  row.end &&
                  `${moment(row.start, 'HH:mm:ss').format('HH:mm')} - ${moment(
                    row.end,
                    'HH:mm:ss'
                  ).format('HH:mm')}`}
              </TableCell>
              <TableCell></TableCell>
              <TableCell sx={{position: 'relative'}}>
                {
                  <>
                    <IconButton aria-label="">
                      <DeleteIcon />
                    </IconButton>
                    {printable && (
                      <TheDuThi
                        name={
                          row.exam?.certificateId == 1
                            ? 'Công nghệ thông tin Cơ bản'
                            : row.certificateId == 2
                            ? 'Công nghệ thông tin Nâng cao'
                            : 'IC3, MOS'
                        }
                        dotthi={row.exam?.series}
                        room={row.room}
                        sbd={row.sbd}
                        firstName={row.student?.firstName}
                        lastName={row.student?.lastName}
                        gender={row.student?.gender}
                        dayOfBirth={row.student?.dayOfBirth}
                        monthOfBirth={row.student?.monthOfBirth}
                        yearOfBirth={row.student?.yearOfBirth}
                        placeOfBirth={row.student?.placeOfBirth}
                        testTime={row.start}
                        testDate={moment(row.exam?.date).format('DD/MM/YYYY')}
                      />
                    )}
                  </>
                }
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{height: 53 * emptyRows}}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
              colSpan={11}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
