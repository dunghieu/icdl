import {useEffect, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import {Grid, Typography} from '@mui/material';
import BaiThiModal from 'components/common/modal/BaiThiModal';
import DatePicker from 'components/common/select/DatePicker';
import dayjs from 'dayjs';

const Unit = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs());

  const handleChange = (newValue: dayjs.Dayjs | null) => {
    setValue(newValue);
  };

  const fetchData = async () => {
    const getData = await axios.get(
      `http://localhost:8080/api/file?date=${dayjs(value).format('DDMMYYYY')}`
    );
    const finalData = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, [value]);
  return (
    <>
      <Box sx={{margin: '20px 0'}}>
        <DatePicker value={value} onChange={handleChange} />
      </Box>
      <Box>
        <Box>
          <Typography variant="h4" sx={{marginBottom: '20px'}}>
            Bài 1
          </Typography>
          <Grid container spacing={2} sx={{marginBottom: '50px'}}>
            {data &&
              data.length > 0 &&
              data.map(
                (item: any) =>
                  item.name.startsWith('Bai1') && (
                    <Grid item xs={4}>
                      <BaiThiModal url={item.url} name={item.name} phach={item.phach} />
                    </Grid>
                  )
              )}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h4" sx={{marginBottom: '20px'}}>
            Bài 2
          </Typography>
          <Grid container spacing={2} sx={{marginBottom: '50px'}}>
            {data &&
              data.length > 0 &&
              data.map(
                (item: any) =>
                  item.name.startsWith('Bai2') && (
                    <Grid item xs={4}>
                      <BaiThiModal url={item.url} name={item.name} phach={item.phach} />
                    </Grid>
                  )
              )}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h4" sx={{marginBottom: '20px'}}>
            Bài 3
          </Typography>
          <Grid container spacing={2} sx={{marginBottom: '50px'}}>
            {data &&
              data.length > 0 &&
              data.map(
                (item: any) =>
                  item.name.startsWith('Bai3') && (
                    <Grid item xs={4}>
                      <BaiThiModal url={item.url} name={item.name} phach={item.phach} />
                    </Grid>
                  )
              )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Unit;
