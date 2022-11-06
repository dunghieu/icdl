import React from 'react';
import {Box, Container, Stack} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {GuestHeader} from 'components';
import GuestFooter from 'components/footer/GuestFooter';
import {DashBoardProps} from 'lib/interfaces';
const renderRoutes = require('react-router-config').renderRoutes;

const IntroduceLayout: React.FC<DashBoardProps> = ({route}) => {
  return (
    <>
      <GuestHeader />
      <Container maxWidth="lg" sx={{marginY: '50px', display: 'flex', gap: '50px'}}>
        <Box sx={{width: '25%', borderRight: '1px solid #d3d7df'}}>
          <Stack spacing={0}>
            <NavLink
              to="/gioi-thieu-trung-tam"
              exact
              activeStyle={{borderRight: '3px solid #f50057'}}
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              GIỚI THIỆU TRUNG TÂM
            </NavLink>
            <NavLink
              to="/gioi-thieu-trung-tam/so-do-to-chuc"
              activeStyle={{borderRight: '3px solid #f50057'}}
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              SƠ ĐỒ TỔ CHỨC
            </NavLink>
            <NavLink
              to="/gioi-thieu-trung-tam/chuc-nang-nhiem-vu"
              activeStyle={{borderRight: '3px solid #f50057'}}
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              CHỨC NĂNG VÀ NHIỆM VỤ
            </NavLink>
            <NavLink
              to="/gioi-thieu-trung-tam/doi-ngu-nhan-su"
              activeStyle={{borderRight: '3px solid #f50057'}}
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              ĐỘI NGŨ NHÂN SỰ
            </NavLink>
            <NavLink
              to="/gioi-thieu-trung-tam/giang-vien"
              activeStyle={{borderRight: '3px solid #f50057'}}
              style={{
                textDecoration: 'none',
                color: '#000',
                borderBottom: '1px solid #d3d7df',
                padding: '10px 0',
              }}
            >
              GIẢNG VIÊN
            </NavLink>
          </Stack>
        </Box>
        <Box sx={{width: '65%'}}>{renderRoutes(route?.routes)}</Box>
      </Container>
      <GuestFooter />
    </>
  );
};

export default IntroduceLayout;
