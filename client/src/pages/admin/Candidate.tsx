import {Button, Paper, Box, IconButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import CustomPaginationActionsTable from 'components/common/table/TablePaginationActions';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Candidate = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/student');
    setData(getData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <CustomPaginationActionsTable rows={data} />;
};

export default Candidate;
