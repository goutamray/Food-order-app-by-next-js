
import banner2 from "@/public/assets/banner/shop.jpg"

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function ShopBreadcrumb({ title }) {
  return (
    <div style={bgStyleBanner2} className="h-[400px] w-full -mt-20 ">
     <div className="container ">
       <div className="flex flex-col justify-center items-center pt-40">
        <h2 className="text-white text-[15px] font-semibold uppercase"> 
          <a className="text-[15px] uppercase font-bold  text-white mr-2" href="/">Home </a> <span className="mr-2"> / </span> Product </h2>
        <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> {title }</h1>
       </div>
    </div> 
  </div>
  )
}


