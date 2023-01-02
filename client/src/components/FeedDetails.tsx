import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Box, CircularProgress, Container, Typography} from '@mui/material';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const FeedDetails = (props) => {
  console.log(props.match.params[0]);
  const {params} = props.match;
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/feed/${props.match.params[0]}`);
    const finalData = getData.data;
    setData(finalData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [params]);

  const category = data.category?.split(',').map((item) => {
    if (item.trim() === 'Thông báo') return {url: 'thong-bao', name: 'Thông báo'};
    if (item.trim() === 'Thông báo CNTT Cơ Bản')
      return {url: 'thong-bao-cntt-co-ban', name: 'Thông báo CNTT Cơ Bản'};
    if (item.trim() === 'Các Khóa học') return {url: 'cac-khoa-hoc', name: 'Các Khóa học'};
    if (item.trim() === 'Thông báo CNTT Nâng Cao')
      return {url: 'thong-bao-cntt-nang-cao', name: 'Thông báo CNTT Nâng Cao'};
    if (item.trim() === 'Thông báo IC3, MOS')
      return {url: 'thong-bao-ic3-mos', name: 'Thông báo IC3, MOS'};
  });
  return (
    <>
      <Container maxWidth={'lg'} className="customTable">
        {loading && <CircularProgress sx={{display: loading ? 'block' : 'none'}} />}
        {!loading && data && (
          <Box>
            <Box sx={{display: 'flex', gap: '10px'}}>
              {category.map((item) => {
                return (
                  <Link to={`/category/${item.url}`}>
                    <Typography
                      key={item.url}
                      variant="body2"
                      fontWeight={400}
                      sx={{color: '#1F386B', '&:hover': {color: '#b20530'}}}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
            <Typography
              variant="h5"
              fontWeight={'bold'}
              sx={{
                color: '#B20530',
              }}
            >
              {data.title}
            </Typography>
            {parse(data.content)}
          </Box>
        )}
      </Container>
    </>
  );
};

export default FeedDetails;
