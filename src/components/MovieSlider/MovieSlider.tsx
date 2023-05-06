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
        <Image src={"https://image.tmdb.org/t/p/original/rPSJAElGxOTko1zK6uIlYnTMFxN.jpg"} width={800} height={400} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"https://image.tmdb.org/t/p/original/cWDWUkIR22FSlxokhaNrT6jqX3n.jpg"} width={800} height={400} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <Image src={"https://image.tmdb.org/t/p/original/a2tys4sD7xzVaogPntGsT1ypVoT.jpg"} width={800} height={400} alt=""/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default MovieSlider;
