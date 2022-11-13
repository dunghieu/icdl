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
    const finalData = getData.data.map((item: any, index: number) => {
      if (item.payment.length > 1) {
        return (item = {
          ...item,
          payment: item.payment[index],
        });
      } else {
        return (item = {
          ...item,
          payment: item.payment[0],
        });
      }
    });
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Box marginBottom={1} sx={{textAlign: 'right'}}>
        <Button variant="contained">
          {/* <AddCircleRoundedIcon /> */}
          &nbsp; CHỐT DANH SÁCH THI
        </Button>
      </Box>
      <CustomPaginationActionsTable rows={data} />
    </>
  );
};

export default Candidate;
