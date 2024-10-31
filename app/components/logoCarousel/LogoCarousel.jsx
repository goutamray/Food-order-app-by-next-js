
"use client"; // Ensure this component is treated as a client component

import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 


// Import required modules
import { Navigation, Pagination, Autoplay , EffectFade} from 'swiper/modules';

// banner images
import logo1 from "@/public/assets/logo/brand-11.png";
import logo2 from "@/public/assets/logo/brand-12.png";
import logo3 from "@/public/assets/logo/brand-13.png";
import logo4 from "@/public/assets/logo/brand-14.png";
import logo5 from "@/public/assets/logo/brand-15.png";
import logo6 from "@/public/assets/logo/brand-16.png";
import logo7 from "@/public/assets/logo/brand-17.png";
import logo8 from "@/public/assets/logo/brand-18.png";


// slider data 
const data = [
  { id: 1, image: logo1 },
  { id: 2, image: logo2 },
  { id: 3, image: logo3 },   
  { id: 4, image: logo4 },   
  { id: 5, image: logo5 },   
  { id: 6, image: logo6 },   
  { id: 7, image: logo7 },   
  { id: 8, image: logo8 },   
];

export default function LogoCarousel() {
  return (
    <div className="py-8 bg-[#f6f9fa] mt-5">
       <div className="container">
            <Swiper
            spaceBetween={10}
            slidesPerView={6}
            breakpoints={{
              380: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
              1320: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          
            navigation
            modules={[Navigation, Pagination, Autoplay, EffectFade ]}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="custom-swiper-slider " // Add custom class
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                  <div > 
                  <Image src={item.image} alt="logo" className="w-[280px] xl:h-[160px] xl:w-[150px]"/>
                  </div>
              </SwiperSlide>    
            ))}
          </Swiper>
       </div>
    </div>
  )
}
