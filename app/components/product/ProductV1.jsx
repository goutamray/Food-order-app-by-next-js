import Image from "next/image";

// react icons 

import { LiaShoppingBagSolid } from "react-icons/lia";

// images 
import bur1 from "@/public/assets/tab/promo1.png";

// material icons 
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

//rating
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ProductV1() {
  return (
    <div className="w-[300px]">
       <div className="image-wrapper p-4 relative border-1 border-gray-300 rounded-md">
           <Image src={bur1} alt="burger" className="h-48 w-60"/> 
           <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="absolute top-2 right-2 " />
           <div className="flex justify-between items-center pt-3">
            <span className="price"> $10.35 </span>
            <span > 
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
            </Stack>
            </span>
           </div>
       </div>
       <div className="flex flex-col justify-center items-center space-y-1 pt-3 text-center ">
        <h2 className="text-[#642F21] text-[22px] font-bold"> BIGTI BURGER </h2>
        <h4 className="text-[#757575] text-[16px] font-thin px-3 leading-6 mb-2"> Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula </h4>
        <button className="text-gray-600 text-md font-bold uppercase px-8 py-2 border-1 border-gray-300 flex items-center gap-2 rounded-md hover:bg-[#f7be27] transition-all duration-300 overflow-hidden mb-4"> <span> <LiaShoppingBagSolid className="text-xl "/> </span> add to cart </button>
       </div>
    </div>
  )
}










