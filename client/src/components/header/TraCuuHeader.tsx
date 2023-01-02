import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Icon,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {Link} from 'react-router-dom';
import Logo from '../../lib/assets/images/Logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import {Tooltip} from '@mui/material';
import useWindowDimensions from 'lib/hooks/useWindowDimentions';

const basicPages = [
  {
    name: 'Tra cứu danh sách thi',
    route: '/tra-cuu-danh-sach-thi',
  },
  {
    name: ' Tra cứu danh sách phòng học',
    route: '/tra-cuu-danh-sach-on',
  },
  {
    name: ' Tra cứu kết quả thi',
    route: '/tra-cuu-ket-qua-thi',
  },
];

const TraCuuHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const {width, height} = useWindowDimensions();

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
      >
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div>
          <Tooltip title="1900 636 999">
            <a href="tel:1900 636 999">
              <Typography
                variant="h6"
                sx={{color: '#b20530', fontWeight: 'bold', display: 'flex', alignItems: 'center'}}
              >
                <PhoneIcon sx={{fontSize: '40px', color: '#b20530'}} />
                1900 636 999
              </Typography>
            </a>
          </Tooltip>
        </div>
      </Container>
      <AppBar
        position={height > 300 ? 'sticky' : 'fixed'}
        sx={{backgroundColor: '#b20530', color: 'white'}}
      >
        <Container maxWidth="md" sx={{justifyContent: 'left', display: {xs: 'block', md: 'flex'}}}>
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              {basicPages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{my: 2, color: 'white', display: 'block'}}
                >
                  <Link to={page.route} style={{textDecoration: 'none', color: '#fff'}}>
                    {page.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default TraCuuHeader;
