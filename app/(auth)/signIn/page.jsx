
"use client"

import { MyContext } from "@/context/ThemeContext";
import banner2 from "@/public/assets/banner/cartpage.jpg"; 
import { postData } from "@/utilis/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useContext, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from "js-cookie"

const bgStyleBanner3 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};



export default function SignIn() {
  const [formFields, setFormFields] = useState({
    email : "",
    password : ""
 })
 const [isLoading, setIsLoading] = useState(false); 

 const context = useContext(MyContext); 
 const router = useRouter();

   // handle input change 
   const handleInputChange = (e) => {
    setFormFields((prevState) => ({
         ...prevState,
         [e.target.name] : e.target.value 
    }))
  }


  // handle Form Submit 
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 

    postData(`/api/v1/user/signIn`, formFields).then((res) => {
      if(res?.token !== "" &&  res?.token !== null && res?.token !== undefined){
        setTimeout(() => {
           context.alertBox(res?.message, "success");
           setIsLoading(false);
           setFormFields({
               email : "",
               password : ""
           }); 
           router.push('/'); // Redirect to the sign-in page
           Cookies.set('token', res?.token);
           Cookies.set('user', JSON.stringify(res?.user), {expires : 30} );
           context?.setIsLogin(true)
        }, 1000);
        
      }else{
        context.alertBox(res?.message, "error");
        setTimeout(() => {
          setIsLoading(false);
          setFormFields({
            email : "",
            password : ""
        }); 
        }, 4000);
      }
    })

  }


  return (
    <div>
      {/* breadcrumb  */}
      <div style={bgStyleBanner3} className="h-[400px] w-full -mt-20 ">
      <div className="container ">
         <div className="flex flex-col justify-center items-center pt-40">
          <h2 className="text-white text-[15px] font-semibold uppercase"> 
            <a className="text-[15px] uppercase font-bold text-white mr-2" href="/"> Home </a>
             <span className="mr-2"> / </span> SIGN IN
          </h2>
          <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> SIGN IN </h1>
         </div>
      </div> 
    </div>

      <div className="container py-9">
          <h2 className="text-center text-3xl font-bold mb-3"> Login </h2>
          <div className="register-form w-[500px] mx-auto shadow p-5 ">
             <form onSubmit={handleFormSubmit}>
                 <Box sx={{ width: 500, maxWidth: '100%', margin: "auto"}}  >
                     <TextField 
                         fullWidth 
                         label="Email" 
                         id="fullWidth"
                         className="mb-3"
                         name="email"
                         value={formFields.email}
                         onChange={handleInputChange} 
                         disabled={isLoading === true ? true : false} 
                        />
                     <TextField 
                         fullWidth 
                         label="Password" 
                         id="fullWidth" 
                         className="mb-3" 
                         name="password"
                         value={formFields.password}
                         onChange={handleInputChange}
                         disabled={isLoading === true ? true : false}
                        />
                 </Box>
                 <button className="bg-[#E3000E] text-white px-4 py-2 w-full text-xl font-semibold rounded-md"> 
                    {
                      isLoading === true ?  
                      <CircularProgress className="btn-loader"/> : "LOGIN"
                    }
                  </button>
             </form>
             <div className="or-btn text-center py-3">
               <p> Dont have an Account 
                   <Link className="text-md font-medium ml-1 no-underline" href="/signUp"> Sign Up </Link> 
               </p>
             </div>
             <div className="google-login">
                <button className="text-xl font-semibold border-1 w-full rounded-md text-center border-gray-500 py-2 flex justify-center items-center mx-auto gap-2">
                    <img src="/assets/google.png" alt="google" />
                    <p className="mb-0 relative ">  Login With Google  </p>
                </button>
             </div>
             
          </div>
      </div>
    </div>
  )
}


















