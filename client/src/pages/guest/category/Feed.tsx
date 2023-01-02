import {CircularProgress, Container, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import ActionAreaCardVertical from 'components/common/card/ActionAreaCardVertical';
import NotFound from 'components/NotFound';
import {useHistory, useLocation} from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

const ThongBao = (props) => {
  const history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);

  let categoryInit;
  switch (props.route.path.split('/')[2]) {
    case 'thong-bao':
      categoryInit = 'Thông báo';
      break;
    case 'cac-khoa-hoc':
      categoryInit = 'Các Khóa học';
      break;
    case 'thong-bao-cntt-co-ban':
      categoryInit = 'Thông báo CNTT Cơ Bản';
      break;
    case 'thong-bao-cntt-nang-cao':
      categoryInit = 'Thông báo CNTT Nâng Cao';
      break;
    case 'thong-bao-ic3-mos':
      categoryInit = 'Thông báo IC3, MOS';
      break;
    default:
      break;
  }
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    let getData;
    // const pageParams = params && params.get('page') ? params.get('page') : 1;
    if (categoryInit) {
      getData = await axios.get(
        `http://localhost:8080/api/feed?category=${categoryInit}&page=${page}`
      );
    } else {
      getData = await axios.get(
        `http://localhost:8080/api/feed?s=${params && params.get('s')}&page=${page}`
      );
    }
    const [finalData, total] = getData.data;
    setTotal(Math.ceil(total / 10));
    setData(finalData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [page]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        gap: '50px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6" sx={{fontWeight: 'bold', padding: '10px 0', color: '#b20530'}}>
        {categoryInit}
      </Typography>
      {loading ? (
        <CircularProgress sx={{display: loading ? 'block' : 'none'}} color="info" />
      ) : (
        <Grid container spacing={2} sx={{marginTop: '0px'}}>
          {data &&
            data.map((item) => (
              <Grid item xs={12} md={12} key={item.id}>
                <ActionAreaCardVertical
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  time={moment(item.updated_at).format('DD/MM/YYYY')}
                  thumbnail={item.thumbnail}
                />
              </Grid>
            ))}
          {data.length === 0 && <NotFound />}
        </Grid>
      )}
      <Pagination count={total} onChange={(e, v) => setPage(v)} page={page} />
    </Container>
  );
};

export default ThongBao;
