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
      <NewsSection />
      <GuestFooter />
    </>
  );
};

export default GuestHome;
