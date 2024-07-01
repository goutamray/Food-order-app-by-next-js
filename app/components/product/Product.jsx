import ProductV2 from "./ProductV2";


export default function Product() {
  return (
    <div className="py-12">
       <div className="container">
        {/* header part */}
          <div className="header-part text-center ">
               <h2 className="text-[40px] xl:text-[60px] text-[#E3000E] font-bold tracking-tighter"> EXPLORE OUR MENU </h2>
               <p className="w-[500px] xl:w-[650px] text-xl font-light text-[#888888] mx-auto "> Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna </p>
          </div>
          {/* products All */}
          <div className="py-5">
             <div className="productList grid  grid-cols-2 xl:grid-cols-4 gap-6 ">
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
                 <ProductV2 />
             </div>
          </div>
       </div>
    </div>
  )
}

















