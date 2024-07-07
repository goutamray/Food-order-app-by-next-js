import Image from "next/image";

// import components  
import ImageContent2 from "../components/imageContent/ImageContent2";
import WhatElse from "../components/whatElse/WhatElse";
import Breadcrumb from "../components/breadCrumb/Breadcrumb";

// images
import img1 from "@/public/assets/banner/aabb.jpg"
import img2 from "@/public/assets/banner/bbcc.jpg"

import img3 from "@/public/assets/banner/pb1.jpg";
import img4 from "@/public/assets/banner/pb2.jpg";
import img5 from "@/public/assets/banner/pb3.jpg";
import Blog from "../components/blog/Blog";

const bgStyleBanner = {
  backgroundImage : `url(${img3.src}) `,
  backgroundSize : "cover", 
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

const bgStyleBanner2 = {
  backgroundImage : `url(${img4.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

const bgStyleBanner3 = {
  backgroundImage : `url(${img5.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function page() {
  return (
    <div>
       <Breadcrumb title={"About Us"}/>
       <ImageContent2 />
       <WhatElse />

       {/*  big burger */}
       <div className="py-20">
        <div className="container flex flex-col xl:flex-row gap-4 ">
            <div className="w-[100%] xl:w-[50%] flex flex-col ">
               <div> 
                  <h2 className="text-[32px] xl:text-[50px] font-semibold text-[#642F21] tracking-tighter"> DISCOVER THE NEW TASTE OF THE BURGER </h2>
                  <p className="text-[18px] text-[#757575] font-thin w-[340px] md:w-[600px] xl:w-[600px]"> Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis </p> 
               </div>    
               <div>
                <Image src={img1} alt="photo" className="rounded-sm overflow-hidden" />
               </div>
            </div>   
            <div  className="w-[100%] xl:w-[50%]">
              <div>
                <Image src={img2} alt="photo" className=" h-[300px] md:h-[500px] xl:h-[680px] rounded-sm overflow-hidden" /> 
               </div>
               <p className="text-[18px] text-[#757575] font-thin mt-2"> Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis </p> 
            </div>
        </div>
       </div>

       {/****** order section **********/}
       <div className="py-10 px-4">
         <div className="">
            <div className="grid grid-cols-1 xl:grid-cols-4 place-items-center gap-4">
                <div className="flex flex-col justify-center items-center h-[370px] w-[355px] md:w-full xl:w-[350px] rounded-md" style={bgStyleBanner} >
                     <h1 className="text-white text-[42px] font-bold mt-10 "  > CAREERS </h1>
                     <p className="text-[19px] text-white font-normal "> Want to join our team? </p> 
                     <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[10px] rounded-sm text-white w-[160px] overflow-hidden "> learn more </button>
                </div>
                {/* column 2  */}
                <div className="flex  flex-col col-span-2 justify-center items-center h-[370px] w-[355px] md:w-full xl:w-[700px] rounded-md" style={bgStyleBanner2} >
                     <h1 className="text-white text-[42px] font-bold mt-10 "  > ORDER NOW </h1>
                     <p className="text-[19px] text-white font-normal "> Want to join our team? </p> 
                     <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[10px] rounded-sm text-white w-[160px] overflow-hidden "> learn more </button>
                </div>
                {/* column 3 */}
                <div className="flex flex-col justify-center items-center h-[370px] w-[355px] md:w-full xl:w-[350px] rounded-md" style={bgStyleBanner3} >
                     <h1 className="text-white text-[42px] font-bold mt-10 "  > CAREERS </h1>
                     <p className="text-[19px] text-white font-normal "> Want to join our team? </p> 
                     <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[10px] rounded-sm text-white w-[160px] overflow-hidden "> learn more </button>
                </div>
            </div>
         </div>
       </div>

       {/* blog section */}
       <Blog />

       {/* subscribe section  */}
       <div className="py-16 bg-[#f6f9fa] mb-10">
        <div className="container">
          {/* header part */}
            <div className="header-part text-center ">
               <h2 className="text-[30px] xl:text-[42px] text-[#642F21] font-bold tracking-tighter"> SUBSCRIBE TO NEWSLETTER </h2>
               <p className="w-[500px] xl:w-[650px] text-xl font-light text-[#888888] mx-auto "> Subscribe to the weekly newsletter for all the latest updates </p>
          </div>
          {/* subscribe btn */}
            <div className="flex justify-center items-center gap-2 ">
              <input type="search" className="px-2 py-[15px] w-[350px]  border-1 border-gray-300 focus:outline-none text-xl text-gray-400" placeholder="Email"/> 
              <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[15px] rounded-sm text-white w-[200px] overflow-hidden "> sign up </button>
            </div>
        </div>
       </div>
    </div>
  )
}
