import React from 'react';
import {Box, Container, Stack, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {DashBoardProps} from 'lib/interfaces';
import {renderRoutes} from 'react-router-config';

const CategoryLayout: React.FC<DashBoardProps> = ({route}) => {
  return (
    <>
      <GuestHeader />
      <Container maxWidth="lg" sx={{marginY: '50px', display: 'flex', gap: '50px'}}>
        <Box sx={{width: '25%', borderRight: '1px solid #d3d7df'}}>
          <Typography variant="h6" sx={{fontWeight: 'bold', padding: '10px 0'}}>
            DANH MỤC
          </Typography>
          <Stack spacing={0}>
            <Link
              to=""
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
              to=""
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              TIN TỨC & SỰ KIỆN
            </Link>
            <Link
              to=""
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
              to=""
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
              to=""
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
        <Box sx={{width: '65%'}}>{renderRoutes(route?.routes)}</Box>
      </Container>
      <GuestFooter />
    </>
  );
};

export default CategoryLayout;
