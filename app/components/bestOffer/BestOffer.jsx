import ProductV3 from "../product/ProductV3";


export default function BestOffer() {
  return (
    <div className="pt-10 pb-24">
       <div className="container">
         {/* header part */}
         <div className="header-part text-center ">
               <h2 className="text-[30px] xl:text-[60px] text-[#E3000E] font-bold tracking-tighter"> OUR BEST OFFERS </h2>
               <p className="w-[500px] xl:w-[650px] text-xl font-light text-[#888888] mx-auto "> Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 pt-5">
              <ProductV3 />
              <ProductV3 />
              <ProductV3 />
           </div>
       </div>
    </div>
  )
}


