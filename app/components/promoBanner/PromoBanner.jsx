
// react icons 
import { LiaShoppingBagSolid } from "react-icons/lia";

// import images
import promo from "@/public/assets/berger/promobanner.jpg";
import burder from "@/public/assets/berger/big11.png";
import komil from "@/public/assets/berger/komil.png";
import sough from "@/public/assets/berger/sough.png";
import badge from "@/public/assets/berger/badge.png";

// import next image
import Image from "next/image";

const bgStyleBanner2 = {
  backgroundImage : `url(${promo.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

const bgStyleBanner = {
  backgroundImage : `url(${badge.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};


export default function PromoBanner() {
  return (
    <div style={bgStyleBanner2} className="py-24 ">
      <div className="container flex flex-col xl:flex-row justify-between items-center gap-4 ">
        {/* collumn 1 */}
         <div className="flex flex-col md:flex-row xl:flex-row gap-4 ml-4 md:items-center xl:items-center ">
            <div>
               <h2 className="text-3xl xl:text-5xl text-white font-bold uppercase tracking-tighter "> THE </h2>
               <h1 className="text-white text-4xl xl:text-8xl tracking-tighter font-bold w-[320px]"> BIGTI BURGER </h1>
               <p className="text-white/90 font-semibold text-xl w-[300px] md:w-[350px] xl:w-[420px]">  Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula rutrum risus ultrice luctus ligula congue a </p>
               <button className="bg-red-600 text-white border-2 border-red-600 px-4 py-2 w-[200px] xl:w-[220px] rounded-sm text-xl font-medium xl:uppercase hover:bg-transparent hover:border-2 hover:border-white transition-all duration-300 flex items-center gap-2"> <LiaShoppingBagSolid className="text-white text-2xl"/> Add to cart </button>
            </div>
      
          {/* collumn 2 */}
            <div className="relative mt-4 xl:mt-0">    
               <Image src={burder} alt="burger" className="w-[380] h-[300px]  md:w-[600px] md:h-[400px] xl:h-[600px]" /> 
               <div style={bgStyleBanner} className="h-[150px] w-[150px] xl:h-[200px] xl:w-[200px] text-white flex flex-col justify-center items-center absolute -top-4 right-0 ">
                   <h3 className="font-semibold"> ONLY </h3>
                   <h2 className="text-4xl font-bold"> $10.35 </h2>
                   <p className="text-md font-md"> Code: 0841 </p>
               </div>
            </div>
         </div>

          {/* collumn 3 */}
         <div>
            <div className="flex md:flex-row xl:flex-col gap-4">

              <div className="text-center p-4 border border-gray-200 rounded-md hover:bg-[#ffc934] transition-all duration-300  ">
                 <Image src={komil} alt="komil" className="h-24 w-28 md:h-52 md:w-52"/>
                 <h5 className="text-white text-md font-medium"> Komil berger </h5>
              </div>

              <div className="text-center p-4 border border-gray-200 rounded-md hover:bg-[#ffc934] transition-all duration-300 ">
                 <Image src={sough} alt="komil" className="h-24 w-28  md:h-52 md:w-52 "/>
                 <h5 className="text-white text-md font-medium"> Komil berger </h5>
              </div>     

            </div>
         </div>
      </div> 
    </div>
  )
}


















