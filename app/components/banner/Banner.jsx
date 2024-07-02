import Image from "next/image";
import banner1 from "@/public/assets/banner/offer-1.jpg"
import banner2 from "@/public/assets/banner/offer-2.jpg"
import banner3 from "@/public/assets/banner/abcd.jpg"
import banner4 from "@/public/assets/banner/offer-4.jpg"

export default function Banner() {
  return (
    <div className="py-10">
       <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
               <div>
                <Image src={banner1} alt="burger" className="rounded-md" />
               </div>
               <div>
                <Image src={banner2} alt="burger" className="rounded-md" />
               </div>
               <div>
                <Image src={banner3} alt="burger" className="rounded-md" />
               </div>
               <div>
                <Image src={banner4} alt="burger" className="rounded-md" />
               </div>
           </div>
       </div>
    </div>
  )
}
