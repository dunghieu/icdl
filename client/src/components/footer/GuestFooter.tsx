import {
  Box,
  Container,
  Grid,
  Typography,
  Icon,
  Tooltip,
  Button,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import {Link} from 'react-router-dom';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import {useEffect, useState} from 'react';
import axios from 'axios';

const theme = createTheme({
  palette: {
    neutral: {
      main: 'black',
      // contrastText: '#fff',
    },
  },
});

const GuestFooter = () => {
  const [data, setData] = useState<any>([]);
  const [showScroll, setShowScroll] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  document.body.onscroll = function () {
    setScrollPosition(window.scrollY);
  };

  const fetchFeed = () => {
    axios
      .get('http://localhost:8080/api/feed?limit=2')
      .then((res) => {
        const [finalData] = res.data;
        setData(finalData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (scrollPosition > 100) {
      setShowScroll('fixed');
    } else {
      setShowScroll('absolute');
    }
  }, [scrollPosition]);

  useEffect(() => {
    fetchFeed();
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#b20530',
        position: 'relative',
      }}
    >
      <Container
        sx={{
          color: '#fff',
          padding: '1rem',
          wordWrap: 'break-word',
          paddingY: '2rem',
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Box>
              <Typography variant="h6">GIỚI THIỆU</Typography>
              <div style={{borderBottom: '3px solid #fff', width: '15%', marginTop: '5px'}}></div>
              <Typography variant="body2" sx={{marginTop: '1rem', textAlign: 'justify'}}>
                Trung tâm Tin học thuộc Trường Đại học Thủy lợi
              </Typography>

              <a
                href="https://www.facebook.com/tinhoc.tlu.edu.vn/"
                target="_blank"
                rel="noreferrer"
                style={{color: '#fff', textDecoration: 'none'}}
              >
                <Tooltip title="Follow on Facebook">
                  <Icon component={FacebookIcon} sx={{marginTop: '1rem'}} />
                </Tooltip>
              </a>

              <a href="mailto: abc@example.com" style={{color: '#fff', textDecoration: 'none'}}>
                <Tooltip title="Send us an email">
                  <Icon component={MailOutlineIcon} sx={{marginTop: '1rem'}} />
                </Tooltip>
              </a>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography variant="h6">CÁC KHÓA HỌC</Typography>
              <div style={{borderBottom: '3px solid #fff', width: '15%', marginTop: '5px'}}></div>
              <ul
                style={{
                  listStyleType: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  gap: '10px',
                }}
              >
                <li>
                  <Link to="/ic3-mos" style={{textDecoration: 'none', color: '#fff'}}>
                    ➤ IC3, MOS
                  </Link>
                </li>
                <li>
                  <Link to="/ung-dung-cntt-co-ban" style={{textDecoration: 'none', color: '#fff'}}>
                    ➤ ỨNG DỤNG CNTT CƠ BẢN
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ung-dung-cntt-nang-cao"
                    style={{textDecoration: 'none', color: '#fff'}}
                  >
                    ➤ ỨNG DỤNG CNTT NÂNG CAO
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{maxHeight: '200px'}}>
              <Typography variant="h6">THÔNG BÁO MỚI NHẤT</Typography>
              <div style={{borderBottom: '3px solid #fff', width: '15%', marginTop: '5px'}}></div>
              {data.map((item: any) => {
                return (
                  <Box sx={{marginTop: '1rem'}} key={item.id}>
                    <Typography variant="body2" sx={{display: 'flex', alignItems: 'center'}}>
                      <Link to={`/news/${item.id}`} style={{textDecoration: 'none', color: '#fff'}}>
                        {item.title}
                      </Link>
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography variant="h6">THÔNG TIN LIÊN HỆ:</Typography>
              <div style={{borderBottom: '3px solid #fff', width: '15%', marginTop: '5px'}}></div>
              <Box sx={{marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <Typography variant="body2" sx={{display: 'flex', alignItems: 'center'}}>
                  <Icon component={HomeIcon} sx={{marginRight: '0.5rem'}} />
                  175 Tây Sơn, Đống Đa, Hà Nội
                </Typography>
                <Typography variant="body2" sx={{display: 'flex', alignItems: 'center'}}>
                  <Icon component={PhoneIcon} sx={{marginRight: '0.5rem'}} />
                  <a style={{color: '#fff', textDecoration: 'none'}}>0963.725.098</a>
                </Typography>
                <Typography variant="body2" sx={{display: 'flex', alignItems: 'center'}}>
                  <Icon component={MailOutlineIcon} sx={{marginRight: '0.5rem'}} />
                  <a
                    href="mailto:1851061662@e.tlu.edu.vn"
                    style={{color: '#fff', textDecoration: 'none'}}
                  >
                    1851061662@e.tlu.edu.vn
                  </a>
                </Typography>
                <Typography variant="body2" sx={{display: 'flex', alignItems: 'center'}}>
                  Website: www.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ThemeProvider theme={theme}>
        <Button
          variant="text"
          sx={{
            position: showScroll,
            bottom: '1rem',
            right: '1rem',
          }}
          onClick={scrollToTop}
        >
          <ArrowCircleUpOutlinedIcon fontSize="large" color="neutral" />
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default GuestFooter;
