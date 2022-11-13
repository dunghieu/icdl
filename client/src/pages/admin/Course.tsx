import {Button, Paper, Box, IconButton} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'store';
import {RootState} from 'store/reducers';
import CustomPaginationActionsTable from 'components/common/table/TablePaginationActions';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CourseTable from 'components/common/table/CourseTable';

const Course = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/course');
    const finalData = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CourseTable rows={data} />
    </>
  );
};

export default Course;
