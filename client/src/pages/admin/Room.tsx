import {Button, Paper, Box, IconButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import {useEffect, useState} from 'react';
import axios from 'axios';
import RoomTable from 'components/common/table/RoomTable';

const Room = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/student-exam-mapping/room');
    const finalData = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <RoomTable rows={data} />
    </>
  );
};

export default Room;
