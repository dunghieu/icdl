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
    const finalData = getData.data
      .map((item: any, index: number) => {
        if (item.registration.length > 1) {
          return item.registration.map((item2: any, index2: number) => {
            console.log(index2);
            return {
              ...item,
              registration: item.registration[index2],
            };
          });
        } else {
          return (item = {
            ...item,
            registration: item.registration[0],
          });
        }
      })
      .flat();

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
