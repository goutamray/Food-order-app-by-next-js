"use client"; 

import ProductV3 from "../product/ProductV3";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';

export default function BestOffer() {
  return (
    <div className="pt-10 pb-24">
      <div className="container">
        {/* header part */}
        <div className="header-part text-center">
          <h2 className="text-[30px] xl:text-[60px] text-[#E3000E] font-bold tracking-tighter">
            OUR BEST OFFERS
          </h2>
          <p className="w-[500px] xl:w-[650px] text-xl font-light text-[#888888] mx-auto">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor
            primis libero tempus, blandit a cursus varius magna
          </p>
        </div>
        
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          modules={[ Navigation, Autoplay]}
          className="custom-swiper pt-5"
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            340: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
              <ProductV3 />
          </SwiperSlide>
          <SwiperSlide>
              <ProductV3 />
          </SwiperSlide>
          <SwiperSlide>
              <ProductV3 />
          </SwiperSlide>
          <SwiperSlide>
              <ProductV3 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
