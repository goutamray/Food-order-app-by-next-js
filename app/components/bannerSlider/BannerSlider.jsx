"use client"; // Ensure this component is treated as a client component

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/effect-fade';

// Import required modules
import { Navigation, Pagination, Autoplay , EffectFade} from 'swiper/modules';

// banner images
import banner1 from "@/public/assets/slider/slide1.jpg";
import banner2 from "@/public/assets/slider/slide2.jpg";
import banner3 from "@/public/assets/slider/slide3.jpg";

// slider data 
const slides = [
  { id: 1, imageUrl: banner1, title : "CRISPY CHICKEN", desc: "Open Daily : ", time: "11:00 AM - 8:00PM " },
  { id: 2, imageUrl: banner2 , title: "FARMERS SPECIAL", desc: "Special Time : ", time: "5:00PM - 7:00PM"},
  { id: 3, imageUrl: banner3, title: "DOUBLE BERGER", desc: "Order Now : ", time: "4587695556" },   
];

export default function BannerSlider() {
  return (  
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      effect={'fade'}
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
      className="custom-swiper -mt-20" // Add custom class
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div
            className="slide flex  justify-center flex-col"
            style={{
              backgroundImage: `url(${slide.imageUrl.src})`, // Add .src to imageUrl for Next.js
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <div className="container"> 
                <h1 className='heading-text text-3xl md:text-5xl xl:text-8xl  text-white w-[150px]'>{slide.title}</h1>
                <div className='flex flex-col xl:flex-row xl:justify-start item-center mt-7 xl:mt-10 '>
                  <h2  className='text-xl md:text-2xl xl:text-3xl font-bold text-white '>{slide.desc} </h2>
                  <span className='text-3xl  md:text-2xl xl:text-4xl font-semibold relative top-0 ml-2 text-[#f7be27]'> {slide.time}</span>
                </div>
            </div>
          </div>
        </SwiperSlide>    
      ))}
    </Swiper>
  );
}


