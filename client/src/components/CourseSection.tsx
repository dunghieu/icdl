import {Container, Typography} from '@mui/material';
import {Navigation, Pagination} from 'swiper';
import {SwiperSlide, Swiper} from 'swiper/react';
import background from '../lib/assets/images/course-background.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import ActionAreaCardHorizontal from './common/card/ActionAreaCardHorizontal';

const courseItems = [
  {
    title: 'Course 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.',
    time: '2 hours',
  },
  {
    title: 'Course 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.',
    time: '2 hours',
  },
  {
    title: 'Course 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.',
    time: '2 hours',
  },
  {
    title: 'Course 4',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.',
    time: '2 hours',
  },
  {
    title: 'Course 5',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vitae aliquam nisl nisl sit amet nisl.',
    time: '2 hours',
  },
];

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
          paddingY: '25px',
          gap: '25px',
        }}
      >
        <Typography variant="h5" color="white" sx={{fontWeight: '700'}}>
          CÁC KHÓA HỌC
        </Typography>
        <Swiper
          className="courseSwiper"
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          pagination
          loop={true}
        >
          {courseItems.map((item) => (
            <SwiperSlide key={item.title}>
              <ActionAreaCardHorizontal
                title={item.title}
                content={item.content}
                time={item.time}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default CourseSection;
