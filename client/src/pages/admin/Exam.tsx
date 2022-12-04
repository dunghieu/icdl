import {Button, Paper, Box, IconButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ExamTable from 'components/common/table/ExamTable';

const Exam = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/exam');
    const finalData = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ExamTable rows={data} />
    </>
  );
};

export default Exam;
