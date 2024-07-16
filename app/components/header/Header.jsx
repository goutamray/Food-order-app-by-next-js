"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import logo from "@/public/assets/logo.png" 

// react icons 
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineShoppingBag  } from "react-icons/md"; 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [open, setOpen ] = useState(false);
  const headerRef = useRef(); 

  // handle open close
  const handleOpenClose = () => {
    setOpen(() => (!open))
  }

  useEffect(() => {
     window.addEventListener("scroll", () => {
      let postition = window.scrollY;
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
    <header className="w-full sticky top-0 left-0 z-30 duration-300 " ref={headerRef}>
       <div className="container flex items-center justify-between ">
         {/* logo part */}
          <div className="logo pt-3 xl:pt-4">
             <Link href={"/"}> 
                <Image src={logo} alt="logo" height={90} width={120}/> 
             </Link>
          </div>

          {/* menu part */}
          <div className="menu flex items-center justify-end gap-4 ">
             <nav className="hidden xl:block">
               <ul className="flex items-center gap-x-7 mb-0">
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/"> Home </Link>
                </li>
                <li className="group relative cursor-pointer " > 
                  <Link className=" text-white font-semibold flex items-center no-underline " href="/about"> About <span> <MdOutlineKeyboardArrowDown className="text-2xl font-medium transition-all duration-200 group-hover:rotate-180" /> </span> </Link>
                  <ul  className="absolute hidden group-hover:block transition-all duration-300 top-[100%] left-[0%] w-[200px] bg-white rounded-md shadow p-3 space-y-3 ">
                  <li className="hover:ml-2 transition-all duration-300"> <Link href="/team" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Meet The Team </Link> </li> 
                  <li className="hover:ml-2 transition-all duration-300 "> <Link href="/#" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Image Galary </Link> </li> 
                  <li className="hover:ml-2 transition-all duration-300 "> <Link href="/faq" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> FAQ.s </Link> </li> 
                  <li className="hover:ml-2 transition-all duration-300 "> <Link href="/term" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Terms & Service </Link> </li> 
                  </ul>
                </li>
                <li className="group relative cursor-pointer "> 
                  <Link className=" text-white font-semibold no-underline  flex gap-1 items-center" href="/menu"> Our Menu <span> <MdOutlineKeyboardArrowDown className="text-2xl font-medium transition-all duration-200 group-hover:rotate-180" /> </span></Link>
                  <ul className="absolute hidden group-hover:block transition-all duration-300 top-[100%] left-[0%] w-[200px] bg-white rounded-md shadow p-3 space-y-3">    
                    <li className="hover:ml-2 transition-all duration-300 "> <Link href="menu2" className="no-underline capitalize  text-[18px] text-[#787878] font-medium "> Menu Item 2 </Link> </li> 
                    <li className="hover:ml-2 transition-all duration-300 "> <Link href="menu3" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Menu Item 3 </Link> </li> 
                  </ul>
                </li>
                <li className="group relative cursor-pointer "> 
                  <Link className=" text-white font-semibold no-underline flex  gap-1" href="/shop"> Shop <span> <MdOutlineKeyboardArrowDown className="text-2xl font-medium transition-all duration-200 group-hover:rotate-180" /> </span> </Link>
                  <ul className="absolute hidden group-hover:block transition-all duration-300 top-[100%] left-[0%] w-[200px] bg-white rounded-md shadow p-3 space-y-3">    
                    <li className="hover:ml-2 transition-all duration-300 "> <Link href="/single" className="no-underline capitalize  text-[18px] text-[#787878] font-medium "> Single Product </Link> </li> 
                  
                  </ul>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/blog"> Blog </Link>
                </li>
                <li> 
                  <Link className=" text-white font-semibold no-underline " href="/contact"> Contacts </Link>
                </li>
               </ul>
             </nav>

             {/***** mobile menu *****/}
             <div  className="block xl:hidden ">
                {
                 open === true ?
                  <RxCross2 className="text-5xl font-semibold text-[#ed9d07]" onClick={handleOpenClose} /> : 
                  <FiMenu className="text-5xl font-semibold text-[#ed9d07]" onClick={handleOpenClose} /> 
                }
                  
             </div>

             {/***** contact part *******/}
             <div className="hidden xl:block ">
                <div className="flex gap-3 items-center ">
                    <div > 
                        <span className="text-[#F7BE27] text-2xl font-bold flex items-center gap-1 justify-center"> <FaPhoneVolume className="text-2xl text-[#F7BE27] font-bold "/>01755302053 </span>
                    </div>
                    <div className="cart-data">
                      <Link href={"#"}> 
                        <MdOutlineShoppingBag  className="text-white text-3xl font-bold "/>   
                        <span className="cart-count"> 0 </span>
                      </Link>
                    </div>
                    <div className="sign-btn">
                      <a href="/my-account" className="text-md text-black bg-white font-medium px-6 py-2 rounded-full border border-1 no-underline border-gray-400 uppercase"> Sign In </a>
                    </div>
                </div>
             </div>
          </div>
       </div>
    </header>
  )
}





