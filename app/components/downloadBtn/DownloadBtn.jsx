import Image from "next/image";

// react icons 
import banner from "@/public/assets/banner/e-shop.png";
import google from "@/public/assets/banner/googleplay.png";
import store from "@/public/assets/banner/appstore.png";


export default function DownloadBtn() {
  return (
    <div className="pt-20 bg-[#f7be27] my-10 xl:h-[465px]">
       <div className="container ">
           <div className="grid grid-cols-1 xl:grid-cols-2 gap-6  ">
              <div>
                <h2 className="text-md xl:text-[36px] text-[#642f21] font-normal "> DOWNLOAD MOBILE APP AND </h2>
                <h1 className="text-5xl xl:text-[72px] text-[#642f21] font-bold tracking-tighter"> SAVE UP TO 20% </h1>
                <p className="text-[18px] text-[#642f21] font-thin w-[350px] xl:w-[600px]"> Aliquam a augue suscipit, luctus neque purus ipsum and neque dolor primis libero tempus, blandit varius </p>
                <div className="flex gap-4">
                  <Image src={store} alt="store"  className="w-[160px] h-[93px] object-contain" />
                  <Image src={google} alt="google" className="w-[160px] h-[93px] object-contain" />
                </div>
            </div>
            <div >
              <Image src={banner} alt="banner" className="relative h-[400px] w-[400px] xl:h-[530px] xl:w-[600px] xl:-mt-[145px]  z-20"/>
            </div>
          </div>
       </div>
    </div>
  )
}
