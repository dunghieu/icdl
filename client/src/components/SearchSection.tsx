import {Box, Container, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import searchIcon1 from '../lib/assets/images/Search1.png';
import searchIcon2 from '../lib/assets/images/Search2.png';
import searchIcon3 from '../lib/assets/images/Search3.png';
import searchIcon4 from '../lib/assets/images/Search4.png';

const SearchSection = () => {
  return (
    <section style={{backgroundColor: 'white'}}>
      <Container
        maxWidth="xl"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          paddingY: '50px',
          gap: '50px',
        }}
      >
        <Typography variant="h5" sx={{fontWeight: 700, color: '#b20530'}}>
          TRA CỨU TRỰC TUYẾN
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '50px',
          }}
        >
          <Box
            sx={{
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to="/tra-cuu" target="_blank">
              <Box
                sx={{
                  display: 'flex',
                  border: '2px solid #b20530',
                  width: '200px',
                  height: '200px',
                  borderRadius: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#b20530',
                    cursor: 'pointer',
                    '& img': {
                      filter: 'grayscale(1) invert(1) brightness(1.5)',
                    },
                  },
                }}
              >
                <img src={searchIcon2} alt="Search 2" style={{width: '50%', height: '120px'}} />
              </Box>
            </Link>
            <Typography
              variant="h6"
              sx={{color: '#b20530', textAlign: 'center', marginTop: '10px'}}
            >
              {' '}
              DANH SÁCH DỰ THI VÀ KẾT QUẢ THI CNTT
            </Typography>
          </Box>
          <Box
            sx={{
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to="/tra-cuu-chung-chi" target="_blank">
              <Box
                sx={{
                  display: 'flex',
                  border: '2px solid #b20530',
                  width: '200px',
                  height: '200px',
                  borderRadius: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#b20530',
                    cursor: 'pointer',
                    '& img': {
                      filter: 'grayscale(1) invert(1) brightness(1.5)',
                    },
                  },
                }}
              >
                <img src={searchIcon3} alt="Search 3" style={{width: '50%', height: '120px'}} />
              </Box>
            </Link>
            <Typography
              variant="h6"
              sx={{color: '#b20530', textAlign: 'center', marginTop: '10px'}}
            >
              {' '}
              TRA CỨU CHỨNG CHỈ
            </Typography>
          </Box>
          <Box
            sx={{
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to="/">
              <Box
                sx={{
                  display: 'flex',
                  border: '2px solid #b20530',
                  width: '200px',
                  height: '200px',
                  borderRadius: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: '#b20530',
                    cursor: 'pointer',
                    '& img': {
                      filter: 'grayscale(1) invert(1) brightness(1.5)',
                    },
                  },
                }}
              >
                <img src={searchIcon4} alt="Search 4" style={{width: '50%', height: '120px'}} />
              </Box>
            </Link>
            <Typography
              variant="h6"
              sx={{color: '#b20530', textAlign: 'center', marginTop: '10px'}}
            >
              {' '}
              XÁC MINH CHỨNG CHỈ
            </Typography>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default SearchSection;
