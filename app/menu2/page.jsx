import Menu2Breadcrumb from "@/app/components/breadCrumb/Menu2Breadcrumb";
import ProductV2 from "../components/product/ProductV2";

// import images
import banner2 from "@/public/assets/banner/banner-4.jpg"

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function page() {
  return (
    <div>
         <Menu2Breadcrumb title={"menu item 2"}/> 
       <div className="container">
          {/* products All */}
          <div className="py-5">
             <div className="productList grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-center ">
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 /> 
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
             </div>
          </div>
       </div>

      {/****** banner  ******/}
      <div className="banner-part py-40" style={bgStyleBanner2} >
         <div className="container">
            <div className="flex flex-col space-y-6 justify-center items-center">
              <h2 className="text-2xl xl:text-[38px] font-semibold text-[#642F21]"> WE GUARANTEE </h2>
              <h1  className="text-3xl xl:text-[72px] font-semibold text-[#642F21] tracking-tighter"> 30 MINUTES DELIVERY! </h1>
              <p className="text-md xl:text-[19px] font-semibold text-[#642F21] w-[340px] md:w-[550px] xl:w-[750px] text-center "> Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius luctus neque magna </p>
              <button className="my-btn uppercase bg-[#E3000E] font-bold text-xl px-4 py-3 rounded-sm text-white w-[250px] overflow-hidden mt-5"> CALL: 789-654-3210 </button>
            </div>
         </div>
      </div>
    </div>
  )
}



