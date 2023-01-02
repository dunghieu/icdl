import {Container, Grid, Typography} from '@mui/material';
import ActionAreaCardVertical from './common/card/ActionAreaCardVertical';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

const NewsSection = () => {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/feed?limit=6`);
    const [finalData] = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: '50px',
        marginY: '50px',
      }}
    >
      <Typography variant="h4" sx={{fontWeight: 700, color: '#b20530'}}>
        THÔNG BÁO VÀ TIN TỨC
      </Typography>
      <Grid container spacing={4} sx={{marginTop: '50px'}}>
        {data.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <ActionAreaCardVertical
              id={item.id}
              title={item.title}
              content={item.content}
              time={moment(item.updated_at).format('DD/MM/YYYY')}
              thumbnail={item.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NewsSection;
