import Image from "next/image";
import about from "@/public/assets/about.png";
import { GoDotFill } from "react-icons/go";

export default function ImageContent2() {
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
             <h2 className="text-[#642F21] text-4xl xl:text-[50px] font-extrabold leading-tight w-[350px] xl:w-[590px]" > NOTHING BRINGS  PEOPLE TOGETHER LIKE  A GOOD BURGER </h2>
             <p className="text-[#757575] text-[18px] w-[350px] xl:w-[470px]"> Porta semper lacus cursus, feugiat primis ultrice a ligula  risus auctor an tempus feugiat dolor lacinia cubilia curae at  integer orci congue and metus in mollislorem primis gravida </p>
               {/* list  */}
               <div className="flex items-center gap-12"> 
                  <div>
                    <div>
                      <h4 className="flex items-center gap-3 text-[16px] font-normal text-[#757575]"> 
                        <GoDotFill  className="h-4 w-4 text-red-500"/> 
                        Fringilla risus luctus mau. </h4>
                    </div>
                    <div className="pt-2">
                      <h4 className="flex items-center gap-3 text-[16px] font-normal text-[#757575]"> 
                        <GoDotFill  className="h-4 w-4 text-red-500"/> 
                        Fringilla risus luctus mau. </h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4 className="flex items-center gap-3 text-[16px] font-normal text-[#757575]"> 
                        <GoDotFill  className="h-4 w-4 text-red-500"/> 
                        Fringilla risus luctus mau. </h4>
                    </div>
                    <div className="pt-2">
                      <h4 className="flex items-center gap-3 text-[16px] font-normal text-[#757575]"> 
                        <GoDotFill  className="h-4 w-4 text-red-500"/> 
                        Fringilla risus luctus mau. </h4>
                    </div>
                  </div>
               </div>
               <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-2 rounded-sm text-white w-[170px] overflow-hidden mt-5"> Learn more </button>
         </div>
       </div>
    
       </div>
    </div>
  </div>
  )
}



