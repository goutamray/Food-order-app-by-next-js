import Image from "next/image";
import burger from "@/public/assets/product/burger11.jpg"

export default function ProductV2() {
  return (
    <div className="bg-white border-1 border-gray-300 rounded-md overflow-hidden w-[310px]">
       <Image src={burger} alt="burger" className="w-full h-[260px] rounded-md  object-cover"/> 
       <div>
        
       </div>
    </div>
  )
}











