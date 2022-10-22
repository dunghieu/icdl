import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import slider1 from '../lib/assets/images/Slider1.jpg';
import slider2 from '../lib/assets/images/Slider2.jpg';
import slider3 from '../lib/assets/images/Slider3.png';

import 'swiper/css';

const Slider = () => {
  return (
    <Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination loop={true}>
      <SwiperSlide>
        <img src={slider1} alt="Slider 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="Slider 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="Slider 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
