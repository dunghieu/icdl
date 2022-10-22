import {Container, Typography} from '@mui/material';
import {Navigation, Pagination} from 'swiper';
import {SwiperSlide, Swiper} from 'swiper/react';
import background from '../lib/assets/images/course-background.jpg';
import 'swiper/css';
import CourseItem from './course/courseItem';
const CourseSection = () => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background}) center center/cover no-repeat`,
        height: '500px',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '50px',
        }}
      >
        <Typography variant="h5" color="white" sx={{fontWeight: '700'}}>
          CÁC KHÓA HỌC
        </Typography>
        {/* <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          navigation
          pagination
          loop={true}
        >
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
          <SwiperSlide>
            <CourseItem />
          </SwiperSlide>
        </Swiper> */}
      </Container>
    </div>
  );
};

export default CourseSection;
