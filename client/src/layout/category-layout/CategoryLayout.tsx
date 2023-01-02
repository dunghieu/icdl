import {Box, Container, Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {DashBoardProps} from 'lib/interfaces';
const renderRoutes = require('react-router-config').renderRoutes;
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CategoryLayout: React.FC<DashBoardProps> = ({route}) => {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/feed?limit=5`);
    const [finalData] = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <GuestHeader />
      <Container
        maxWidth={'lg'}
        sx={{marginY: '50px', display: 'flex', justifyContent: 'space-between', minHeight: '500px'}}
      >
        <Box sx={{width: '70%'}}>{renderRoutes(route?.routes)}</Box>
        <Box sx={{width: '20%'}}>
          <Box>
            <Typography variant="h6" sx={{fontWeight: 'bold', padding: '10px 0'}}>
              DANH MỤC
            </Typography>
            <Stack spacing={0}>
              <Link
                to="cac-khoa-hoc"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                CÁC KHÓA HỌC
              </Link>
              <Link
                to="thong-bao"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                THÔNG BÁO
              </Link>
              <Link
                to="thong-bao-cntt-co-ban"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                THÔNG BÁO CNTT CƠ BẢN
              </Link>
              <Link
                to="thong-bao-cntt-nang-cao"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                THÔNG BÁO CNTT NÂNG CAO
              </Link>
              <Link
                to="thong-bao-ic3-mos"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  borderBottom: '1px solid #d3d7df',
                  padding: '10px 0',
                }}
              >
                THÔNG BÁO IC3, MOS
              </Link>
            </Stack>
          </Box>
          <Box sx={{marginTop: '50px'}}>
            <Typography variant="h6" sx={{fontWeight: 'bold', padding: '10px 0'}}>
              TIN TỨC MỚI NHẤT
            </Typography>
            <Stack spacing={3}>
              {data.map((item: any) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <img src={item.thumbnail} width="42px" height={'42px'} />
                    <Typography variant="body2" sx={{padding: '0 10px'}}>
                      {item.title}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
      <GuestFooter />
    </>
  );
};

export default CategoryLayout;
