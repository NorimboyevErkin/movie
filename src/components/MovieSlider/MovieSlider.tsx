"use client"
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./MovieSlider.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function MovieSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Image src={"https://files.cinerama.uz/images/banners/2023/05/05/81df7f99-78da-4b27-b570-21d1680e6ae5.png"} width={800} height={400} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"https://files.cinerama.uz/images/banners/2023/05/05/81df7f99-78da-4b27-b570-21d1680e6ae5.png"} width={800} height={400} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"https://files.cinerama.uz/images/banners/2023/05/05/81df7f99-78da-4b27-b570-21d1680e6ae5.png"} width={800} height={400} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MovieSlider;
