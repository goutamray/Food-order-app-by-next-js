"use client"


import banner2 from "@/public/assets/banner/cartpage.jpg"; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from "next/image";
import Link from "next/link";

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function page() {
  return (
    <div>
      {/* breadcrumb  */}
      <div style={bgStyleBanner2} className="h-[400px] w-full -mt-20 ">
      <div className="container ">
         <div className="flex flex-col justify-center items-center pt-40">
          <h2 className="text-white text-[15px] font-semibold uppercase"> 
            <a className="text-[15px] uppercase font-bold text-white mr-2" href="/"> Home </a>
             <span className="mr-2"> / </span> SIGN UP
          </h2>
          <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> SIGN UP </h1>
         </div>
      </div> 
    </div>

      <div className="container py-10">
          <h2 className="text-center text-3xl font-bold mb-4"> Register </h2>
          <div className="register-form w-[500px] mx-auto shadow p-5 ">
             <form >
                 <Box sx={{ width: 500, maxWidth: '100%', margin: "auto"}}  >
                     <TextField 
                         fullWidth 
                         label="Name" 
                         id="fullWidth"
                         className="mb-3" 
                        />
                     <TextField 
                         fullWidth 
                         label="Email" 
                         id="fullWidth"
                         className="mb-3"  
                        />
                     <TextField 
                         fullWidth 
                         label="Phone" 
                         id="fullWidth" 
                         className="mb-3" 
                        />
                     <TextField 
                         fullWidth 
                         label="Password" 
                         id="fullWidth" 
                         className="mb-3" 
                        />
                 </Box>
                 <button className="bg-[#E3000E] text-white px-4 py-2 w-full text-xl font-semibold rounded-md "> SIGN UP </button>
             </form>
             <div className="or-btn text-center py-3">
               <p className="mb-0"> Already have an Account 
                   <Link className="text-md font-medium ml-1 no-underline" href="/signIn"> Sign In </Link> 
               </p>
             </div>
            
             
          </div>
      </div>
    </div>
  )
}




