
import notFound from "@/public/assets/banner/not-found.png"
import Image from 'next/image'
import Link from "next/link"
import banner2 from "@/public/assets/banner/banner-not.jpg"

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};


export default function page() {
  return (
    <div>
      <div style={bgStyleBanner2} className="h-[400px] w-full -mt-20 ">
      <div className="container ">
         <div className="flex flex-col justify-center items-center pt-40">
          <h2 className="text-white text-[15px] font-semibold uppercase"> 
            <a className="text-[15px] uppercase font-bold  text-white mr-2" href="/">Home </a> <span className="mr-2"> / </span> ERROR 404 </h2>
          <h1 className="text-[30px] xl:text-[64px] font-bold text-white ">Page Not Found  </h1>
          <p className="text-white text-xl font-semibold "> Sorry page not found... </p>
         </div>
      </div> 
    </div>

     {/* not found */}
      <div className="pb-16">
        <div className="flex flex-col justify-center items-center  gap-4 ">
          <Image src={notFound} alt='not-found' className="h-[500] w-[500px]"/>
          <div>
            <Link href="/" className="px-3 py-2 text-xl text-gray-700 bg-[#f7be27] rounded-md font-semibold no-underline"> Back To Home </Link>
          </div>
        </div>
      </div>
    </div>
  )
}







