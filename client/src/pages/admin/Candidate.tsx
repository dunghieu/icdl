import {Button, Paper, Box, IconButton, TextField, MenuItem} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AdminCandidateTable from 'components/common/table/AdminCandidateTable';

const filters = [
  {
    value: '?',
    label: 'Tất cả',
  },
  {
    value: '?status=-1',
    label: 'Chưa thi',
  },
  {
    value: '?status=1',
    label: 'Đã thi',
  },
];

const Candidate = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };
  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/student-exam-mapping${filter}`);
    const finalData = getData.data;

    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, [filter]);

  const handleGenerateRoom = async () => {
    await axios.post('http://localhost:8080/api/student-exam-mapping/generate-room').then(() => {
      fetchData();
    });
  };

  return (
    <>
      <Box marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TextField
          select
          label="Lọc"
          value={filter}
          onChange={handleChange}
          sx={{
            width: 200,
          }}
        >
          {filters.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {filter === '?status=-1' && (
          <Button variant="contained" onClick={handleGenerateRoom}>
            {/* <AddCircleRoundedIcon /> */}
            &nbsp; LẬP PHÒNG THI
          </Button>
        )}
      </Box>
      <AdminCandidateTable rows={data} printable={filter === '?status=-1'} />
    </>
  );
};

export default Candidate;
