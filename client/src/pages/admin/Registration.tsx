import {Button, Paper, Box, IconButton, Snackbar, Alert} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminRegistrationTable from 'components/common/table/AdminRegistrationTable';
import FuseAlert, {AlertType, AlertVariant} from 'components/common/alert/FuseAlert';

const Registration = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/registration?status=0');
    const finalData = getData.data;

    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onDeleteRow = (id: number) => {
    confirm('Xác nhận xóa?') &&
      axios.delete(`http://localhost:8080/api/registration/${id}`).then(() => {
        fetchData();
      });
  };
  const handleClick = async () => {
    await axios.post('http://localhost:8080/api/registration/assign').then(() => {
      setOpen(true);
      fetchData();
    });
  };

  return (
    <>
      <Box marginBottom={1} sx={{textAlign: 'right'}}>
        <Button variant="contained" onClick={handleClick}>
          {/* <AddCircleRoundedIcon /> */}
          &nbsp; CHỐT DANH SÁCH THI
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
            Phân công thành công!
          </Alert>
        </Snackbar>
      </Box>

      <AdminRegistrationTable rows={data} onDeleteRow={onDeleteRow} />
    </>
  );
};

export default Registration;
