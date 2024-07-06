import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; 
import { FaLinkedinIn } from "react-icons/fa";

export default function SingleTeam({ item }) {
  return (
    <div >
      <div className="group relative  border border-gray-200 rounded-md overflow-hidden">
        <Image src={item.image} alt="team-member" className="w-[273px] h-[323px]rounded-md"/>
        <div className="hidden group-hover:block transition-all duration-300">
          <div className="absolute mt-8 right-0 group-hover:bottom-24  mr-20  ">
             <h2 className="flex gap-2 items-center justify-center "> 
              <span className="bg-[#03050850] h-10 w-10 rounded-full flex items-center justify-center ">        
                  <FaFacebook className=" text-[20px] text-white hover:text-[#F7BE27] cursor-pointer "/>  
              </span>
               <span className="bg-[#03050850] h-10 w-10 rounded-full flex items-center justify-center">        
                 <FaTwitter className=" text-[20px] text-white hover:text-[#F7BE27] cursor-pointer " /> 
               </span>
              <span className="bg-[#03050850] h-10 w-10 rounded-full flex items-center justify-center"> 
                 <FaLinkedinIn className=" text-[20px] text-white  hover:text-[#F7BE27] cursor-pointer"/> 
              </span>
            </h2>
         </div>
        </div>
   
         <div className="text-center py-3">
          <h2 className="text-[20px] font-bold text-[#642F21]"> {item.name}</h2>
          <h2 className="text-[19px] font-semibold text-[#F7BE27]"> {item.title}</h2>
         </div>
      </div>
    </div>
  )
}



