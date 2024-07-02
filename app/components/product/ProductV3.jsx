
import Image from "next/image";
import { LiaShoppingBagSolid } from "react-icons/lia";
import burger from "@/public/assets/product/burger11.jpg"

// material icons 
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

//rating
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProductV3() {
  return (
    <div>
     <div className="bg-white  group rounded-md overflow-hidden w-[390px] md:w-[340px] relative">
      <div className="h-[260px] overflow-hidden rounded-md">
       <Image src={burger} alt="burger"  className="w-full h-[260px]  object-cover group-hover:scale-110 transition-all duration-300 rounded-md "/> 
      </div>
      <div className="absolute top-3 left-3 ">
        <h5 className="bg-[#3f2416] text-white text-sm uppercase text-
        md px-2 py-1 rounded-sm"> code : 0859 </h5>
      </div>
        <div className="p-3">
           <div className="flex justify-between items-center">
                <span > 
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
                </Stack>
                </span>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}  />
            </div>
            <div className="flex flex-col  space-y-1 pt-3 text-left ">
              <h2 className="text-[#642F21] text-[22px] font-bold cursor-pointer"> BIGTI BURGER </h2>
              <h4 className="text-[#757575] text-[16px] font-thin leading-6 mb-2"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula </h4>
            </div>
            <div className="flex justify-between items-center pt-3 relative ">
               <span className="price"> $10.35 </span>
               <div className="absolute mt-8 right-0 group-hover:mt-0 mr-0 transition-all duration-300 ">
                   <button className="text-gray-600 text-sm font-semibold pl-8 pr-3  py-2 border-1 border-gray-300 gap-2 rounded-md bg-[#f7be27]  overflow-hidden relative hidden  group-hover:block transition-all duration-800 "> 
                   <span> <LiaShoppingBagSolid className="text-2xl absolute top-[6px] left-2 pr-1 "/> </span>
                 Add to cart 
                </button>
               </div>
             
            </div>
          </div>
       
    </div>
    </div>
  )
}





