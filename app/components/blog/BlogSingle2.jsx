import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { SiBurgerking } from "react-icons/si";

export default function BlogSingle2({ item }) {
  return (
    <div>
        <div className="group border-1 border-gray-200 rounded-xl   overflow-hidden w-[320px] md:w-[340px] xl:w-[780px] ">
              <div className="flex flex-col space-y-4 relative">
                  <div className="relative h-[350px] xl:h-[500px] w-[780px] overflow-hidden ">
                         <Image src={item.image} alt="blog" className="h-[350px] xl:h-[500px] xl:w-full rounded-xl group-hover:scale-110 overflow-hidden transition-all duration-300 "/>
                      </div>
                      <div className="absolute bottom-[-16px] left-5 flex flex-wrap  gap-2">
                          <h2 className="text-sm font-normal text-white bg-red-600 px-2 py-1 rounded-xl w-[150px] flex uppercase items-center gap-2    z-50"> <span> <FaUser /> </span> testoadmin </h2>            
                          <h2 className="text-sm font-normal text-white bg-red-600 px-2 py-1 rounded-xl w-[150px] flex  items-center gap-2 z-50"> <span> <SlCalender /> </span> 16 MARCH, 2021</h2>            
                          <h2 className="text-sm font-normal text-white bg-red-600 px-2 py-1 rounded-xl w-[50px] flex uppercase items-center gap-2 z-50"> <span> <FaRegComment /> </span> 0 </h2>            
                          <h2 className="text-sm font-normal text-white bg-red-600 px-2 py-1 rounded-xl w-[100px] flex uppercase items-center gap-2 z-50"> <span> <SiBurgerking /> </span> burger </h2>            
                      </div>                         
                  </div >             
                     <div className="p-4">
                        <h1 className="text-[20px] xl:text-[30px] text-[#642F21] font-bold tracking-tighter ">{item.title} </h1>
                        <h3 className="text-[#757575] text-[19px] font-normal xl:w-[700px]"> {item.desc} </h3>   
                        <button className="my-btn uppercase bg-[#E3000E] font-medium text-xl px-4 py-3 rounded-sm text-white w-[190px] overflow-hidden  mt-4 tracking-tighter"> read more + </button>     
                  
                      </div>
              </div>

    </div>
  )
}
