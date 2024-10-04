"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

// import components 
import ShopBreadcrumb from "../../components/breadCrumb/ShopBreadcrumb";
import Counter from "../../components/counter/Counter";
import ProductV2 from "../../components/product/ProductV2";

// react icons
import { FaCartPlus, FaFacebook, FaStar, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GrPinterest } from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Navigation } from 'swiper/modules';

import Rating from '@mui/material/Rating';

// images 
import burger from "@/public/assets/berger/burger6.png";
import goutam from "@/public/assets/team/goutam.png";


export default function SinglePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const bigSlider = useRef(); 
  const smallSlider = useRef(); 

  const goto = (index) => {
    setSlideIndex(index); 
    bigSlider.current.swiper.slideTo(index);
    smallSlider.current.swiper.slideTo(index);
  }; 



  return (
    <>
      <ShopBreadcrumb title= {"PRODUCT DETAILS"}/>

      <div className="container py-20">
         <div className="flex flex-col xl:flex-row  gap-4 xl:gap-6 ">
          {/* product photo */}
          <div className="w-[100%] xl:w-[50%]">
             <div className="productSliderBig">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  className="bigSlider"
                  ref={bigSlider}
                >
                   <SwiperSlide>
                       <div className="single-item-big" onClick={() => goto(0)}>
                          <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[500px] xl:w-[600px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="single-item-big" onClick={() => goto(1)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[500px] xl:w-[600px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="single-item-big" onClick={() => goto(2)}>
                          <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[500px] xl:w-[600px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="single-item-big" onClick={() => goto(3)}>
                          <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[500px] xl:w-[600px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="single-item-big" onClick={() => goto(4)}>
                          <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[500px] xl:w-[600px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  
                </Swiper>
             </div>

             <div className="productSliderSmall mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={15}
                  pagination={{
                    clickable: true,
                  }}
                  className="smallSlider"
                  ref={smallSlider}
                >
                  <SwiperSlide>
                      <div className={`single-item ${slideIndex === 0 && "active" }`} onClick={() => goto(0)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[120px] xl:w-[250px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={`single-item ${slideIndex === 1 && "active" }`}  onClick={() => goto(1)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[120px] xl:w-[250px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={`single-item ${slideIndex === 2 && "active" }`}  onClick={() => goto(2)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[120px] xl:w-[250px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={`single-item ${slideIndex === 3 && "active" }`}  onClick={() => goto(3)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[120px] xl:w-[250px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className={`single-item ${slideIndex === 4 && "active" }`}  onClick={() => goto(4)}>
                         <Image src={burger} alt="burger" className="h-[300px] w-[400px] xl:h-[120px] xl:w-[250px] mx-auto"/>
                      </div>
                  </SwiperSlide>
                
          
                </Swiper>
             </div>
          </div>
          {/* product details */}
           <div className="w-[100%] xl:w-[50%]">
             <h1 className="text-[30px] xl:text-[56px] text-[#642F21] font-bold tracking-tighter "> SOUGH BURGER </h1>
             {/* price */}
             <div className="flex gap-1 items-center pt-2">
              <h3 className="text-5xl text-[#babbbc] font-bold line-through"> $9.95 </h3>
              <h4 className="text-4xl text-[#f7be27] font-bold"> $8.60 </h4>
             </div>
             {/* reviews */}
             <div className="flex gap-2 ">
               <h5 className="flex gap-1"> 
                    <Rating name="read-only" value={5} readOnly size="small" />
                </h5>
               <p className="text-[18px] text-md text-gray-500"> (1 customer review) </p>
             </div>
             {/* description */}
              <div>
                <p className="text-[18px] text-[#adaaaa] font-light w-[500px]"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula rutrum risus ultrice luctus ligula congue a vitae auctor sapien gravida enim ipsum congue </p>
              </div>
              {/* category */}
              <div className="flex gap-2 items-center  ">
                <p className="text-xl font-medium text-[#b3b2b2]"> Category: </p>
                <p className="text-xl font-medium"> Burgers </p>
              </div>
              {/* counter */}
              <div className="flex gap-2 ">
                 {/* counter */}
                 <div>    
                  <Counter />
                 </div>
                 {/* cart btn  */}
                 <div>
                  <Link href="#" className="px-3 py-2 bg-[#f7be27] text-black text-md font-medium flex items-center justify-center rounded-md no-underline w-[150px] gap-1"> <FaCartPlus /> Add To Cart 
                  </Link>
                 </div>
              </div>
              {/* social media */}
              <div className="pt-4 flex gap-2 items-center ">
                <h3 className="text-[18px] text-[#363636] font-medium"> Share This: </h3>
                <p className="flex gap-3 relative top-[5px] "> 
                    <FaFacebook className="text-xl hover:text-[#f7be27] transition-all duration-300 "/>
                    <FaTwitter className="text-xl hover:text-[#f7be27] transition-all duration-300 "/>
                    <FaLinkedin className="text-xl hover:text-[#f7be27] transition-all duration-300 "/>
                    <GrPinterest className="text-xl hover:text-[#f7be27] transition-all duration-300 "/>
                </p> 
              </div>
           </div>
            
         </div>
      </div>

      {/* Product Tab */}
      <div className="pb-16 pt-10 ">
        <div className="container"> 
            <div>
              <ul className="flex gap-2 items-center justify-center pb-5">
                <li > 
                  <button className={`my-custom-btn text-[16px] xl:text-[18px] text-[#6B6B6B] font-bold no-underline h-[60px] xl:h-auto px-3 py-2 rounded-md ${activeTab === 0 && "active" }`} onClick={() => setActiveTab(0)} >    Description 
                  </button>
                </li>
                <li > 
                  <button className={`my-custom-btn h-[60px] xl:h-auto text-[16px] xl:text-[18px] text-[#6B6B6B] font-bold no-underline px-3 py-2 rounded-md ${activeTab === 1 && "active" }`} onClick={() => setActiveTab(1)} > Additional information 
                  </button>
                </li>
                <li > 
                  <button className={`my-custom-btn h-[60px] xl:h-auto text-[16px] xl:text-[18px] text-[#6B6B6B] font-bold no-underline px-3 py-2 rounded-md ${activeTab === 2 && "active" }`} onClick={() => setActiveTab(2)} > Reviews (1) 
                  </button>
                </li>
              </ul>

              {/* description data */}
              {
                activeTab === 0 && <div>
                <h2 className="text-[32px] text-[#642F21] font-bold "> Description </h2>
                <p className="text-[18px] text-[#9a9999] font-thin"> Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae consequat tortor </p>
                <div>
                 <ul>
                   <li className="text-[18px] text-[#4e4e4e] font-thin list-disc mb-2 "> Quaerat sodales sapien undo euismod purus blandit velna vitae auctor a congue magna tempor sapien eget gravida laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar consectetur purus efficitur ipsum primis in cubilia laoreet augue donec </li>
                   <li className="text-[18px] text-[#4e4e4e] font-thin list-disc"> Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia undo pretium a purus pretium ligula </li>
                 </ul>
                </div>
                <p className="text-[18px] text-[#9a9999] font-thin"> Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales mpedit ligula risus. Mauris donec ociis et magnis sapien </p>
                </div> 
              }
              
              {/* Additional information */}
              {
                activeTab === 1 && <div className="mt-3 ">
                <h2 className="text-[32px] text-[#642F21] font-bold "> Additional information </h2>
                <div className="flex items-center">
                  <div className="w-[15%] border-1 border-gray-300 p-2">
                    <h2 className="text-[18px] text-[#666666] "> Weight </h2>
                  </div>
                  <div className="w-[85%] border-1 border-gray-300 p-2">
                    <h2 className="text-[18px] text-[#666666] italic"> 320G </h2>
                  </div>
                </div>
                </div> 
              }
           
              {/* reviews part */}
              {
                activeTab === 2 && <div>
                <h2 className="text-[32px] text-[#642F21] font-bold "> Reviews </h2>
                <div className="flex flex-col xl:flex-row gap-5 pt-3">
                   <div className="w-[100%] xl:w-[48%]" >
                       <h4 className="text-[16px] font-bold mb-4 text-[#242424]"> REVIEWS </h4>
                       <div className=" flex gap-4 border-1 border-gray-300 rounded-md p-2">
                                  {/* item-1 */}
                                  <div className="image-item w-[20%] text-center">
                                    <div >
                                        <Image src={goutam} alt="photo" className="h-[80px] w-[80px] rounded-full mx-auto" />
                                     </div>
                                     <p className="font-bold text-md"> Goutam Roy </p> 
                                  </div>
                                  {/* right part */}
                                  <div className="card-info  w-[60%]">
                                     <div className="review-date">
                                       <p className="now-date"> 25-05-2025 </p>
                                      </div>
                                      <div className="star-message flex justify-start"> 
                                        <p className="message"> Very Nice Product. This is very essential product for every person </p>
                                      </div> 
                                  </div>
                                  <div className="review-final  w-[20%]">
                                     <span className="flex justify-end"> 
                                        <Rating name="read-only" value={5} readOnly  size="small" />
                                    </span>   
                                  </div>
                              </div>
                   </div>
                   <div className="w-[100%] xl:w-[48%]" >
                      <h4 className="text-[16px] font-bold mb-4 text-[#242424]"> ADD A REVIEW </h4>
                      <div className="review-form">
                                 <form className="form" > 
                                     <div className="form-group my-2">
                                        <textarea name="review" cols="30" rows="5" className="form-control" placeholder="Write Comment"></textarea>
                                     </div>
                                     <div className="row my-3">
                                       <div className="col-md-6">
                                          <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name" name="userName" />
                                          </div>
                                       </div>
                                    <div className="col-md-6">
                                      <div className="form-group flex gap-2 items-center ">
                                       <div className="me-3"> 
                                            Review 
                                        </div>
                                          <div className="flex"> 
                                             <Rating name="read-only" value={5}  />
                                          </div>
                                          </div>
                                       </div>  
                                     </div>
                                                                       
                                     <button type="submit" className="px-3 py-2 bg-[#f7be27] rounded-md text-md "> Submit Review </button>
                                  </form>

                                 </div> 
                   </div>
                </div>
                </div> 
              }
        
            </div>
        </div>
      </div>

      {/* Related Product */}
      <div className="py-20 bg-[#f6f9fa]">
        <div className="container">
          <h2 className="text-[25px] xl:text-[60px] text-center mb-4 text-[#642F21] font-bold"> Related Products </h2>
        <div className="productList ">
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
        
              modules={[ Navigation, Autoplay ]}
              className="custom-swiper -mt-20" // Add custom class
            >
                  <SwiperSlide>
                      <ProductV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductV2 />
                  </SwiperSlide>
                  <SwiperSlide>
                      <ProductV2 />
                  </SwiperSlide>
                  
                </Swiper> 
             </div>
        </div>
      </div>
    </>
  )
}





