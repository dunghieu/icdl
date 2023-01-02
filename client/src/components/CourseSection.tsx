import {Container, Typography} from '@mui/material';
import {Navigation, Pagination} from 'swiper';
import {SwiperSlide, Swiper} from 'swiper/react';
import background from '../lib/assets/images/course-background.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import ActionAreaCardHorizontal from './common/card/ActionAreaCardHorizontal';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

const CourseSection = () => {
  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const getData = await axios.get(`http://localhost:8080/api/feed?category=Các Khóa học`);
    const [finalData] = getData.data;
    setData(finalData);
  };
  useEffect(() => {
    fetchData();
  }, []);

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
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ActionAreaCardHorizontal
                id={item.id}
                title={item.title}
                content={item.content}
                time={moment(item.updated_at).format('DD/MM/YYYY')}
                thumbnail={item.thumbnail}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default CourseSection;
