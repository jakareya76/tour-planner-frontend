import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import SlideOne from "./SlideOne";
import SlideTow from "./SlideTow";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";

const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SlideOne />
      </SwiperSlide>
      <SwiperSlide>
        <SlideTow />
      </SwiperSlide>
      <SwiperSlide>
        <SlideThree />
      </SwiperSlide>
      <SwiperSlide>
        <SlideFour />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
