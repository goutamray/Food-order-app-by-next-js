"use client"


import Image from "next/image";
import burder1 from "@/public/assets/berger/burger-1.svg"
import burder2 from "@/public/assets/berger/donut.png"
import burder3 from "@/public/assets/berger/salad.svg"
import burder4 from "@/public/assets/berger/fried.png"
import ProductV1 from "../product/ProductV1";
import { useState } from "react";

export default function ProductFilter() {
 const [isActiveTab, setIsActiveTab ] = useState(0);

 const filterProduct = (index) => {
  setIsActiveTab(index);
 }


  return (
    <div className="py-16">
      <div className="container">
        {/* Product tab */}
         <div className="product-box w-[800px] mx-auto">
           <ul className="list list-inline text-center flex justify-between gap-4 xl:gap-12">
            <li className={`list-inline-item cursor-pointer  ${isActiveTab === 0 && "active"}`} onClick={() => filterProduct(0)}> 
              <Image src={burder1} alt="burger" className="w-16 h-16 mb-3 mx-auto opacity-80" />
              <h3 className="text-[#642F21] text-[22px] font-bold "> BURGERS </h3>
            </li>
            <li className={`list-inline-item cursor-pointer  ${isActiveTab === 1 && "active"}`} onClick={() => filterProduct(1)}> 
              <Image src={burder2} alt="burger" className="w-16 h-16 mb-3 mx-auto opacity-70" />
              <h3 className="text-[#642F21] text-[22px] font-bold "> DESSERTS </h3>
            </li>
            <li className={`list-inline-item cursor-pointer   ${isActiveTab === 2 && "active"}`} onClick={() => filterProduct(2)}> 
              <Image src={burder3} alt="burger" className="w-16 h-16 mb-3 mx-auto opacity-80" />
              <h3 className="text-[#642F21] text-[22px] font-bold  "> SALADS </h3>
            </li>
            <li className={`list-inline-item cursor-pointer  ${isActiveTab === 3 && "active" }`} onClick={() => filterProduct(3)}> 
              <Image src={burder4} alt="burger" className="w-16 h-16 mb-3 mx-auto opacity-60" />
              <h3 className="text-[#642F21] text-[22px] font-bold "> SIDES </h3> 
            </li>
           </ul>
         </div>

         {/* Product grid */}
         <div className="productList flex gap-5 pt-6">
            <ProductV1 />
            <ProductV1 />
            <ProductV1 /> 
            <ProductV1 />    
         </div>
      </div>
    </div>
  )
}


