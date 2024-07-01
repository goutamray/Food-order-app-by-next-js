
import banner1 from "@/public/assets/berger/berg1.jpg";
import banner2 from "@/public/assets/berger/berg2.jpg";

const bgStyleBanner = {
  backgroundImage : `url(${banner1.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
  height : "320px",
};

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
  height : "320px",
};

export default function BergerBanner() {
  return (
    <div className="py-10">
       <div className="container">
       <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             {/* banner box 1 */}
              <div className="banner1 w-[380px]  md:w-[500px] rounded-xl  " style={bgStyleBanner} >
                  <div className="flex flex-col items-end p-[24px] gap-2">
                      <h2 className="text-xl xl:text-[33px] text-[#6F5E4D] font-thin mt-[55px]"> GET YOUR FREE </h2>
                      <h4 className="text-2xl xl:text-[38px] text-[#6F5E4D] font-bold "> CHEESE FRIES </h4>
                      <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-2 rounded-sm text-white w-[170px] overflow-hidden"> Learn more </button>
                  </div>
              </div>
            {/* banner box 2 */}
              <div  style={bgStyleBanner2} className="banner2 w-[380px] md:w-[600px] xl:w-[800px] rounded-xl " >    
              <div className="flex flex-col items-end p-[24px] gap-2">
                      <h2 className="text-xl xl:text-[33px] text-[#6F5E4D] font-thin mt-[55px]"> CRISPY CHICKEN </h2>
                      <h4 className="text-2xl xl:text-[38px] text-[#6F5E4D] font-bold xl:mb-2"> BURGER IS BACK!  </h4>
                      <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-2 rounded-sm text-white w-[170px] overflow-hidden  "> Learn more </button>
                  </div>
              </div>
           </div>
       </div>
    </div>
  )
}



