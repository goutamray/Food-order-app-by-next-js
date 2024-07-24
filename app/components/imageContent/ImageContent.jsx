import Image from "next/image";

// react icons 
import about from "@/public/assets/about.png";
import berger from "@/public/assets/berger/burger-1.svg"
import berger2 from "@/public/assets/berger/burger2.svg"
import berger3 from "@/public/assets/berger/chicken.svg"
import berger4 from "@/public/assets/berger/salad.svg"

export default function ImageContent() {
  return (
    <div className="pt-12 xl:pt-24 pb-10 xl:pb-16">
      <div className="container">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center ">
          {/*berger image */}
         <div>
           <Image src={about} alt="" className="h-[650px] w-full object-contain  "/>
         </div>
         {/*berger text */}
         <div>
           <div className="space-y-5">
               <h2 className="text-[#642F21] text-4xl xl:text-[52px]  font-bold leading-tight w-[350px] xl:w-[590px]" > NOTHING BRINGS  PEOPLE TOGETHER LIKE  A GOOD BURGER </h2>
               <p className="text-[#757575] text-[18px] w-[350px] xl:w-[470px]"> Porta semper lacus cursus, feugiat primis ultrice a ligula  risus auctor an tempus feugiat dolor lacinia cubilia curae at  integer orci congue and metus in mollislorem primis gravida </p>
               <div className="photo-box flex  md:flex-row justify-between xl:pt-2 w-[370px] xl:w-[500px] ">   
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
               </div>
           </div>
         </div>
         </div>
      </div>
    </div>
  )
}



