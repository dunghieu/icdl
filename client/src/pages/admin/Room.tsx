import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RoomTable from 'components/common/table/RoomTable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import {IconButton} from '@mui/material';

const Room = () => {
  const [data, setData] = useState([]);
  const filterRef = React.useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    const getData = await axios.get(
      `http://localhost:8080/api/student-exam-mapping/room?s=${filterRef.current?.value}`
    );
    const finalData = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TextField
          inputRef={filterRef}
          label="Lọc"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              fetchData();
            }
          }}
          color="info"
          sx={{
            width: 200,
          }}
        />
        <IconButton color="info" onClick={() => fetchData()}>
          <RefreshIcon />
        </IconButton>
      </Box>
      <RoomTable rows={data} />
    </>
  );
};

export default Room;
