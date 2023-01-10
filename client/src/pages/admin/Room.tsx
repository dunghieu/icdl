import React, {useEffect, useState} from 'react';
import axios from 'axios';
import RoomTable from 'components/common/table/RoomTable';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RefreshIcon from '@mui/icons-material/Refresh';
import {IconButton} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Room = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filterRef = React.useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    setIsLoading(true);
    const getData = await axios.get(
      `http://localhost:8080/api/student-exam-mapping/room?s=${filterRef.current?.value}`
    );
    const finalData = getData.data;
    setData(finalData);
    setIsLoading(false);
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
      {isLoading && (
        <CircularProgress
          color="info"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      )}
      {!isLoading && <RoomTable rows={data} />}
    </>
  );
};

export default Room;
