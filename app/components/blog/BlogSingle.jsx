import Image from "next/image";
import { SlCalender } from "react-icons/sl";


export default function BlogSingle({ item }) {
  return (
    <div className="group border-1 border-gray-200 rounded-md overflow-hidden md:w-[340px] xl:w-[400px]">
      <div className="flex flex-col space-y-4 relative">
        <div className="relative h-[300px] w-[400px] overflow-hidden ">
         <Image src={item.image} alt="blog" className="h-[300px] xl:w-[400px] rounded-md group-hover:scale-110 overflow-hidden transition-all duration-300 "/>
        </div>
         <h2 className="text-sm font-normal text-white bg-red-500 px-2 py-1 rounded-md w-[150px] flex justify-center items-center gap-2 absolute bottom-[37%] left-5  z-50"> <span> <SlCalender /> </span> March 16, 2021 </h2>
         <div className="p-4">
            <h1 className="text-[25px] text-[#642F21] font-bold tracking-tighter w-[320px]"> {item.title} </h1>
            <h3 className="text-[#757575] text-[15px] font-normal">{item.desc} </h3>    
         </div> 
      </div>
    </div>
  )
}
