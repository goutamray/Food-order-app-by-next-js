"use client"

import { useState } from "react"

// react icons 
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Counter() {
  const [count, setCount] = useState(1);

  // increment 
  const handleIncrement = () => { 
       setCount(() => count + 1)
  }; 

  // increment 
  const handleDecrement = () => {
    if (count > 1 ) {
      setCount(() => count - 1);
    }
  }; 

  return (
    <div>
      <div className="flex gap-3 justify-end items-center border-1 border-gray-300 rounded-md w-[80px] pl-3 pr-1 py-1">
         <h1 className="text-[22px] font-medium relative top-[3px]"> 
            { count }
         </h1>
         <div className="flex flex-col ">
            <button > <IoMdArrowDropup onClick={handleIncrement}/> </button>
            <button> <IoMdArrowDropdown onClick={handleDecrement}/> </button>
         </div>
      </div>
    </div>
  )
}
