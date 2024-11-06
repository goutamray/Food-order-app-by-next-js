"use client"

import Image from "next/image";
import Link from "next/link";
import { MyContext } from "@/context/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";

import logo from "@/public/assets/logo.png" 

// react icons 
import { FaPhoneVolume } from "react-icons/fa";
import { MdOutlineShoppingBag  } from "react-icons/md"; 
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

import Cookies from "js-cookie" 

// material ui 
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu ] = useState(false);
  const headerRef = useRef(); 

  const context = useContext(MyContext);

  const router = useRouter(); 

  // handle open close
  const handleOpenClose = () => {
    setOpenMenu(() => (!openMenu))
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


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // handle log out 
  const handleLogOut = () => {
    handleClose();
    Cookies.remove('token');
    context?.setIsLogin(false);
    router.push("/signIn"); 
  }

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
                        <li className="hover:ml-2 transition-all duration-300"> 
                          <Link 
                             href="/team" 
                             className="no-underline capitalize text-[18px] text-[#787878] font-medium ">
                               Meet The Team 
                          </Link>
                         </li> 
                      <li className="hover:ml-2 transition-all duration-300 "> 
                        <Link 
                           href="/#" 
                           className="no-underline capitalize  text-[18px] text-[#787878] font-medium "> Image Galary 
                          </Link>
                       </li> 
                     <li className="hover:ml-2 transition-all duration-300">       <Link 
                        href="/faq" 
                        className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> FAQ.s 
                       </Link> 
                      </li> 
                     <li className="hover:ml-2 transition-all duration-300 "> <Link href="/term" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Terms & Service </Link> </li> 
                  </ul>
                </li>
                <li className="group relative cursor-pointer "> 
                  <Link className=" text-white font-semibold no-underline  flex gap-1 items-center" href="/menu"> Our Menu <span> <MdOutlineKeyboardArrowDown className="text-2xl font-medium transition-all duration-200 group-hover:rotate-180" /> </span></Link>
                  <ul className="absolute hidden group-hover:block transition-all duration-300 top-[100%] left-[0%] w-[200px] bg-white rounded-md shadow p-3 space-y-3">    
                      <li className="hover:ml-2 transition-all duration-300 "> 
                          <Link href="menu2" className="no-underline capitalize  text-[18px] text-[#787878] font-medium ">
                            Menu Item 2 
                         </Link> 
                    </li> 
                    <li className="hover:ml-2 transition-all duration-300 "> 
                       <Link href="menu3" className="no-underline capitalize  text-[18px] text-[#787878] font-medium  "> Menu Item 3 
                      </Link> 
                    </li> 
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
                 openMenu === true ?
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
                      <Link href="/cart"> 
                        <MdOutlineShoppingBag  className="text-white text-3xl font-bold "/>   
                        <span className="cart-count"> 0 </span>
                      </Link>
                    </div>
                    <div className="sign-btn">
                      {
                        context.isLogin === false ?   
                        <Link href="/signUp" className="text-md text-black bg-white font-medium px-6 py-2 rounded-full border border-1 no-underline border-gray-400 uppercase"> Sign In </Link> : (
                          <> 
                            <Tooltip title="Account settings">
                              <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                              >
                                <Avatar className="capitalize" sx={{ width: 32, height: 32 }}>{context?.user?.name?.charAt(0)}</Avatar>
                              </IconButton>
                          </Tooltip>
                          <Menu
                              anchorEl={anchorEl}
                              id="account-menu"
                              open={open}
                              onClose={handleClose}
                              onClick={handleClose}
                              slotProps={{
                                paper: {
                                  elevation: 0,
                                  sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                      width: 32,
                                      height: 32,
                                      ml: -0.5,
                                      mr: 1,
                                    },
                                    '&::before': {
                                      content: '""',
                                      display: 'block',
                                      position: 'absolute',
                                      top: 0,
                                      right: 14,
                                      width: 10,
                                      height: 10,
                                      bgcolor: 'background.paper',
                                      transform: 'translateY(-50%) rotate(45deg)',
                                      zIndex: 0,
                                    },
                                  },
                                },
                              }}
                              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                              <MenuItem onClick={handleClose}>
                                <Avatar /> Profile
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <Avatar /> My account
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                  <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                              </MenuItem>
                              <MenuItem onClick={handleLogOut}>
                                <ListItemIcon>
                                  <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                              </MenuItem>
                            </Menu>
                        </>
                        )
                      }
                    
                    </div>
                </div>
             </div>
          </div>
       </div>
    </header>
  )
}





