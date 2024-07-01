"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import logo from "@/public/assets/logo.png" 

// react icons 
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineShoppingBag  } from "react-icons/md"; 

export default function Header() {
  const headerRef = useRef(); 

  useEffect(() => {
     window.addEventListener("scroll", () => {
      let postition = window.pageYOffset;
    if (headerRef.current) {
       if (postition > 100 ) {
        headerRef.current.classList.add('fixed');
       }else{
        headerRef.current.classList.remove('fixed'); 
       }
    }
     })
  }, []);  


  return (
    <header className="w-full sticky top-0 left-0 z-30 duration-300" ref={headerRef}>
       <div className="container flex items-center justify-between">
          <div className="logo xl:mt-4">
             <Link href={"/"}> 
                <Image src={logo} alt="logo" height={90} width={120}/> 
             </Link>
          </div>
          <div className="menu flex items-center justify-end gap-4">
             <nav>
               <ul className="flex items-center gap-x-7 mb-0">
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/"> Home </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/about"> About </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/menu"> Our Menu </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/shop"> Shop </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/blog"> Blog </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/contact"> Contacts </Link>
                </li>
               </ul>
             </nav>
             <div className="flex gap-3 items-center ">
                 <div> 
                    <span className="text-[#F7BE27] text-2xl font-bold flex items-center gap-1 justify-center"> <FaPhoneVolume className="text-2xl text-[#F7BE27] font-bold "/>01755302053 </span>
                </div>
                <div className="cart-data">
                  <Link href={"#"}> 
                    <MdOutlineShoppingBag  className="text-white text-3xl font-bold "/>   
                    <span className="cart-count"> 0 </span>
                  </Link>
                </div>
                <div className="sign-btn">
                  <button className="text-md text-black bg-white font-medium px-6 py-2 rounded-full border border-1 border-gray-400 uppercase"> Sign In </button>
                </div>
             </div>
          </div>
       </div>
    </header>
  )
}





