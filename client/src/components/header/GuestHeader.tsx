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
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchModal from 'components/common/modal/SearchModal';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const basicPages = [
  {
    name: 'Thông báo',
    route: '/category/thong-bao',
  },
  {
    name: ' Tra cứu chứng chỉ',
    route: '/tra-cuu-chung-chi',
  },
  {
    name: 'Đăng ký thi',
    route: '/dang-ky-thi',
  },
];
const collapsablePages = ['Giới thiệu', 'CÔNG NGHỆ THÔNG TIN'];
const settings = [
  {
    name: 'GIỚI THIỆU TRUNG TÂM',
    route: '',
  },
  {
    name: 'SƠ ĐỒ TỔ CHỨC',
    route: '/so-do-to-chuc',
  },
  {
    name: 'CHỨC NĂNG & NHIỆM VỤ',
    route: '/chuc-nang-nhiem-vu',
  },
  {
    name: 'ĐỘI NGŨ NHÂN SỰ',
    route: '/doi-ngu-nhan-su',
  },
  {
    name: 'GIẢNG VIÊN',
    route: '/giang-vien',
  },
];

const settings2 = [
  ['KHÓA HỌC', 'LỊCH THI'],
  ['KHÓA HỌC', 'LỊCH THI'],
  ['KHÓA HỌC', 'LỊCH THI'],
];

const GuestHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState<null | HTMLElement>(null);
  const {width, height} = useWindowDimensions();

  const [openSearch, setOpenSearch] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const handleOpenUserMenu1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenUserMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  const handleSearch = () => {
    alert(searchText);
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
        <Container
          maxWidth="xl"
          sx={{justifyContent: 'center', display: {xs: 'block', md: 'flex'}}}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Icon component={HomeOutlinedIcon} />
            </Typography>

            {/* <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: 'block', md: 'none'},
                }}
              >
                {collapsablePages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                {basicPages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link to={page.route} style={{textDecoration: 'none', color: '#fff'}}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              <Button onMouseUp={handleOpenUserMenu1} sx={{my: 2, color: 'white', display: 'flex'}}>
                Giới thiệu
                <KeyboardArrowDownRoundedIcon />
                <Menu
                  sx={{mt: '45px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link
                        to={`/gioi-thieu-trung-tam${setting.route}`}
                        style={{textDecoration: 'none', color: '#000'}}
                      >
                        <Typography textAlign="center">{setting.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Button>
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              <Button onMouseUp={handleOpenUserMenu2} sx={{my: 2, color: 'white', display: 'flex'}}>
                Công nghệ thông tin
                <KeyboardArrowDownRoundedIcon />
                <Menu
                  sx={{mt: '45px', ml: '100px'}}
                  id="menu-appbar"
                  anchorEl={anchorElUser2}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser2)}
                  onClose={handleCloseUserMenu2}
                >
                  <div style={{display: 'flex'}}>
                    <div>
                      <MenuItem onClick={handleCloseUserMenu2}>
                        <Typography fontWeight={700} textAlign="center">
                          CNTT Cơ bản
                        </Typography>
                      </MenuItem>
                      {settings2[0].map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu2}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </div>
                    <Divider orientation="vertical" flexItem light variant="middle" />
                    <div>
                      <MenuItem onClick={handleCloseUserMenu2}>
                        <Typography fontWeight={700} textAlign="center">
                          CNTT Nâng Cao
                        </Typography>
                      </MenuItem>
                      {settings2[1].map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu2}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </div>
                    <Divider orientation="vertical" flexItem light variant="middle" />
                    <div>
                      <MenuItem onClick={handleCloseUserMenu2}>
                        <Typography fontWeight={700} textAlign="center">
                          IC3, MOS
                        </Typography>
                      </MenuItem>
                      {settings2[2].map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu2}>
                          <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </div>
                  </div>
                </Menu>
              </Button>
            </Box>

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
            <IconButton
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              onClick={() => setOpenSearch(true)}
            >
              <Icon component={SearchOutlinedIcon} />
              <Modal
                open={openSearch}
                onClose={(e: any) => {
                  e.stopPropagation();
                  setOpenSearch(false);
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 500,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Nhập từ khóa tìm kiếm"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <IconButton onClick={handleSearch}>
                    <Icon component={SearchOutlinedIcon} />
                  </IconButton>
                </Box>
              </Modal>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default GuestHeader;
