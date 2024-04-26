import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-80px)] bg-red-500"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-80px)] bg-blue-500"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-80px)] bg-orange-600"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[calc(100vh-80px)] bg-pink-600"></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
