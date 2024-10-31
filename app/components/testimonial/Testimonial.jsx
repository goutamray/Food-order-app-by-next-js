"use client"; // Ensure this component is treated as a client component

// images 
import review from "@/public/assets/reviews.jpg"
import man1 from "@/public/assets/man/auth1.jpg"
import man2 from "@/public/assets/man/auth2.jpg"
import man3 from "@/public/assets/man/auth3.jpg"
import man4 from "@/public/assets/man/auth4.jpg"

import { FaStar } from "react-icons/fa";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/effect-fade';

// Import required modules
import { Navigation, Pagination, Autoplay , EffectFade} from 'swiper/modules';

const bgStyleBanner = {
  backgroundImage : `url(${review.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

const data = [
  {
    image : man1, 
    name : "by goutam ray",
    desc : ` "Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue. An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor " `,
  },
  {
    image : man2, 
    name : "by Leslie Serpas",
    desc : ` Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Vestibulum maximus lacinia massa non porttitor. Pellentesque vehicula est a lorem gravida bibendum. `,
  },
  {
    image : man3, 
    name : "by Robert Peterson",
    desc : ` " An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor. Egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue "  `,
  },
  {
    image : man4, 
    name : "by Sean McMarthy",
    desc : ` "Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue augue. An orci nullam tempor sapien, eget orci gravida donec enim ipsum porta justo integer at odio velna auctor " `,
  },

];


export default function Testimonial() {
  return (
    <div className="" style={bgStyleBanner}>
       <div className="container">
       <Swiper
      spaceBetween={50}
      slidesPerView={1}
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
      className="testimonial-swiper " // Add custom class
    >
      {data.map((item, index)=> (
        <SwiperSlide key={index} >
           <div className="flex flex-col justify-center items-center space-y-4">
             <Image src={item.image} alt="man" className="h-24 w-24 rounded-full "/> 
             <p className="text-white/80 text-2xl font-semibold w-[360px] md:w-[550px]  xl:w-[900px] mx-auto text-center ">{item.desc}</p>
             <div className="pt-3 text-center ">
                 <span className="flex gap-2 justify-center items-center">  
                     <FaStar className="text-[#f7be27] text-md " /> 
                     <FaStar className="text-[#f7be27] text-md " /> 
                     <FaStar className="text-[#f7be27] text-md " /> 
                     <FaStar className="text-[#f7be27] text-md " /> 
                     <FaStar className="text-[#f7be27] text-md " />   
                  </span>
                 <p className="text-white/90 font-semibold text-xl pt-2 uppercase"> {item.name} </p>    
             </div>
          </div>
        </SwiperSlide>    
      ))}
    </Swiper>
       </div>
    </div>
  )
}



