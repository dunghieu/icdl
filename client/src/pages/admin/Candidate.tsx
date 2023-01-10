import {Button, Paper, Box, IconButton, TextField, MenuItem} from '@mui/material';
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

const filters2 = [
  {
    value: '&',
    label: 'Tất cả',
  },
  {
    value: '&status2=1',
    label: 'Đạt',
  },
  {
    value: '&status2=0',
    label: 'Không đạt',
  },
];

const Candidate = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [filter2, setFilter2] = useState('');
  const [selectedFile, setSelectedFile] = React.useState<any>(null);

  React.useEffect(() => {
    if (selectedFile) handleImportFile();
  }, [selectedFile]);

  const handleImportFile = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/student-exam-mapping/import',
        data: formData,
        headers: {'Content-Type': 'multipart/form-data'},
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter2(event.target.value);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };
  const fetchData = async () => {
    const getData = await axios.get(
      `http://localhost:8080/api/student-exam-mapping${filter}${filter2}`
    );
    const finalData = getData.data;

    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, [filter, filter2]);

  const handleGenerateRoom = async () => {
    axios.post('http://localhost:8080/api/student-exam-mapping/generate-room').then((result) => {
      setTimeout(() => {
        fetchData();
      }, 1000);
      if (result.data && result.data.length > 0) alert('Lập phòng thi thành công');
    });
  };

  return (
    <>
      <Box marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <TextField
            select
            label="Lọc"
            value={filter}
            onChange={handleChange}
            color="info"
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
          {filter === '?status=1' && (
            <TextField
              select
              label="Lọc trạng thái"
              value={filter2}
              onChange={handleChange2}
              color="info"
              sx={{
                width: 200,
              }}
            >
              {filters2.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        </Box>
        {filter === '?status=-1' && (
          <Box sx={{display: 'flex', gap: '10px'}}>
            <Button variant="contained" color="info" component="label">
              Vào điểm lý thuyết
              <input id="file" type="file" hidden onChange={handleFileSelect} />
            </Button>
            <Button variant="contained" onClick={handleGenerateRoom} color="info">
              {/* <AddCircleRoundedIcon /> */}
              &nbsp; LẬP PHÒNG THI
            </Button>
          </Box>
        )}
      </Box>
      <AdminCandidateTable rows={data} printable={filter === '?status=-1'} />
    </>
  );
};

export default Candidate;
