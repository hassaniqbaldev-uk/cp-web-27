"use client";

import { Children } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// One card at a time with dots, for phone layouts. Takes already-rendered
// cards as children, so server sections can use it without passing data in.
const PhoneSlider = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        rewind
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={16}
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-color": "#1A1A1A",
          "--swiper-pagination-bullet-inactive-color": "#1A1A1A",
          "--swiper-pagination-bullet-inactive-opacity": "0.2",
        }}
        className="pb-[50px]!"
      >
        {Children.toArray(children).map((child, index) => (
          <SwiperSlide key={child.key ?? index} className="h-auto!">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhoneSlider;
