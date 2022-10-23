import {Button, Container, Typography} from '@mui/material';
import {GuestHeader} from 'components';
import CourseSection from 'components/CourseSection';
import GuestFooter from 'components/footer/GuestFooter';
import NewsSection from 'components/NewsSection';
import SearchSection from 'components/SearchSection';
import Slider from 'components/Slider';
import VideoIntro from 'components/Videointro';

const GuestHome = () => {
  return (
    <>
      <GuestHeader />
      <Slider />
      <VideoIntro />
      <SearchSection />
      <CourseSection />
      <div
        style={{
          backgroundColor: '#b20530',
          height: '140px',
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            height: 'inherit',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" color="white" width="55%">
            Bạn cần tư vấn Khoá học Tiếng Anh Khung Năng Lực Ngoại Ngữ 6 Bậc tại BUH?
          </Typography>
          <Button
            variant="outlined"
            size="large"
            sx={{
              fontWeight: '700',
              fontSize: '1.5rem',
              borderRadius: '50px',
              border: '2px solid white',
              '& a': {
                color: 'white',
              },
              '&:hover a': {
                color: '#b20530',
              },
              '&:hover': {
                backgroundColor: 'white',
                color: '#b20530',
              },
            }}
          >
            <a href="tel:1900636999">GỌI TƯ VẤN NGAY</a>
          </Button>
        </Container>
      </div>
      <NewsSection />
      <GuestFooter />
    </>
  );
};

export default GuestHome;
