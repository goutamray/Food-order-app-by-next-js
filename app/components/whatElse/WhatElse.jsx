
// react icons 
import banner1 from "@/public/assets/banner/about-1.jpg"
import berger from "@/public/assets/berger/burger-1.svg"
import berger2 from "@/public/assets/berger/burger2.svg"
import berger3 from "@/public/assets/berger/chicken.svg"
import berger4 from "@/public/assets/berger/salad.svg"
import Image from "next/image"


const bgStyleBanner = {
  backgroundImage : `url(${banner1.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function WhatElse() {
  return (
    <div className=" py-24" style={bgStyleBanner}>
       <div className="container">   
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-6xl text-[#f7be27] font-bold "> BURGERS… <span className="text-[#642f21]"> WHAT ELSE? </span> </h1>
            <p className="w-[780px] text-[#757575] text-[20px] text-center"> Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus mollislorem primis in integer metus curae integer orci congue integer and primis in integer metus mollis faucibus </p> 
            <div className="photo-box flex  md:flex-row justify-between xl:pt-2 w-[570px] xl:w-[800px] xl:mt-3">      
                   <div className="space-y-3 "> 
                     <Image src={berger} alt="burger" className="h-12 w-12 xl:h-16 xl:w-16 mx-auto"/>
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold"> BURGERS </h2>
                   </div>
                   <div className="space-y-3">
                     <Image src={berger2} alt="burger"className="h-12 w-12 xl:h-16 xl:w-16 mx-auto" />
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold"> FRIES </h2>
                   </div>
                   <div className="space-y-3">
                     <Image src={berger3} alt="burger" className="h-12 w-12 xl:h-16 xl:w-16 mx-auto"/>
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold"> CHICKEN </h2>
                   </div>
                   <div className="space-y-3">
                     <Image src={berger4} alt="burger" className="h-12 w-12 xl:h-16 xl:w-16 mx-auto"/>
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold">SALADS </h2>
                   </div>
                   <div className="space-y-3">
                     <Image src={berger2} alt="burger" className="h-12 w-12 xl:h-16 xl:w-16 mx-auto"/>
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold"> DESSERTS</h2>
                   </div>
                   <div className="space-y-3">
                     <Image src={berger3} alt="burger" className="h-12 w-12 xl:h-16 xl:w-16 mx-auto"/>
                     <h2 className="text-[16px] xl:text-[19px] text-[#642F21] font-semibold"> DRINKS </h2>
                   </div>
            </div>
            <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[10px] rounded-sm text-white w-[240px] overflow-hidden mt-5"> EXPLORE FULL MENU </button>
          </div>
       </div>
    </div>
  )
}




