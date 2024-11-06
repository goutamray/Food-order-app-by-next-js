import Image from "next/image";
import logo from "@/public/assets/logo.png";

// react icons 
import { FaFacebookF } from "react-icons/fa"; 
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6"; 

import Link from "next/link";


export default function Footer() {
  return (
    <div className="pt-16 pb-10 bg-[#e3e3e3]">
       <div className="container">
           <div className="footer-part flex  justify-center items-center flex-col gap-y-8 ">
              <Image src={logo} alt="logo" className="w-[220px] h-[100px] "/> 
              <div className="media flex gap-4 ">
                 <FaFacebookF className="text-xl hover:text-[#f7be27] duration-300 transition-all " />
                 <FaTwitter className="text-xl hover:text-[#f7be27] duration-300 transition-all "/> 
                 <FaBehance className="text-xl hover:text-[#f7be27] duration-300 transition-all "/>
                 <FaYoutube className="text-xl hover:text-[#f7be27] duration-300 transition-all "/>
                 <FaPinterestP className="text-xl hover:text-[#f7be27] duration-300 transition-all "/> 
              </div>
              <div>
                <ul className="flex flex-wrap justify-center gap-1">
                  <li> 
                     <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase border-r-2 border-gray-500 px-3" href="/about" > About </Link>
                  </li> 
                  <li> 
                      <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase border-r-2 border-gray-500 px-3" href="#" > Menu </Link> 
                  </li> 
                  <li> 
                     <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase border-r-2 border-gray-500 px-3" href="#" > Order Now </Link> 
                  </li> 
                  <li> 
                      <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase border-r-2 border-gray-500 px-3" href="#" > Galary </Link> 
                  </li> 
                  <li> 
                     <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase border-r-2 border-gray-500 px-3" href="#" > Locations </Link> 
                    </li> 
                  <li> 
                      <Link className="text-[15px] font-bold text-[#757575] no-underline hover:text-[#f7be27] duration-300 transition-all uppercase pl-3" href="/contact" > Contact </Link> 
                  </li> 
                </ul>
                <p className="text-[18px] font-light text-[#757575] text-center "> 2021 © Copyright, Testo. All rights reserved. </p> 
              </div>
           </div>
       </div>
    </div>
  )
}














