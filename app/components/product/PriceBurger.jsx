import Image from "next/image";

// react images 
import burger from "@/public/assets/product/burger12.jpg"; 
import burger2 from "@/public/assets/product/burger13.jpg"; 
import burger3 from "@/public/assets/product/burger14.jpg"; 

export default function PriceBurger() {
  return (
    <div className="py-20">
       <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {/* column 1  */}
            <div className="flex gap-3 flex-col xl:flex-row group ">
                <div className="image relative  w-[320px] h-[300px] xl:w-[180px] xl:h-[180px] overflow-hidden rounded-md ">
                  <Image src={burger} alt="burger" className="rounded-md w-full h-full group-hover:scale-110 transition-all duration-300 overflow-hidden group-hover:rounded-md "/>
                  <h5 className="bg-[#f7be27] text-white text-sm uppercase text-
                     md px-2 py-1 rounded-md w-[100px] absolute left-3 top-3 " > code : 0859 </h5>
                </div>
                <div className="flex flex-col justify-between ">
                   <div >
                     <h2 className="text-[22px] text-[#642F21] font-bold tracking-tighter cursor-pointer"> PANISH BURGER </h2>
                     <p className="text-[15px] text-[#757575] font-normal w-[200px]"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula </p>
                   </div>
                  <h4 className="text-red-500 text[28px] font-bold "> $8.95 </h4>
                </div>
              </div>

              {/* column 2  */}
              <div className="flex gap-3 flex-col xl:flex-row group py-4 xl:py-0 ">
              <div className="image relative  w-[320px] h-[300px] xl:w-[180px] xl:h-[180px] overflow-hidden rounded-md ">
                  <Image src={burger2} alt="burger" className="rounded-md w-full h-full group-hover:scale-110 transition-all duration-300 overflow-hidden group-hover:rounded-md "/>
                  <h5 className="bg-[#f7be27] text-white text-sm uppercase text-
                     md px-2 py-1 rounded-md w-[100px] absolute left-3 top-3 " > code : 0894 </h5>
                </div>
                <div className="flex flex-col justify-between ">
                   <div >
                     <h2 className="text-[22px] text-[#642F21] font-bold tracking-tighter cursor-pointer"> CLASSIC BURGER </h2>
                     <p className="text-[15px] text-[#757575] font-normal w-[200px]"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula </p>
                   </div>
                  <h4 className="text-red-500 text[28px] font-bold "> $7.95 </h4>
                </div>
              </div>

              {/* column 3  */}
              <div className="flex gap-3 flex-col xl:flex-row group ">
              <div className="image relative w-[320px] h-[300px] xl:w-[180px] xl:h-[180px] overflow-hidden rounded-md ">
                  <Image src={burger3} alt="burger" className="rounded-md w-full h-full group-hover:scale-110 transition-all duration-300 overflow-hidden group-hover:rounded-md "/>
                  <h5 className="bg-[#f7be27] text-white text-sm uppercase text-
                     md px-2 py-1 rounded-md w-[100px] absolute left-3 top-3 " > code : 0152 </h5>
                </div>
                <div className="flex flex-col justify-between ">
                   <div >
                     <h2 className="text-[22px] text-[#642F21] font-bold tracking-tighter cursor-pointer "> CRISPY CHICKEN </h2>
                     <p className="text-[15px] text-[#757575] font-normal w-[200px]"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula </p>
                   </div>
                  <h4 className="text-red-500 text[28px] font-bold "> $8.50 </h4>
                </div>
              </div>

              
          </div>
       </div>
    </div>
  )
}












