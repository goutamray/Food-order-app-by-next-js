"use client"


import { MyContext } from "@/context/ThemeContext";
import banner2 from "@/public/assets/banner/cartpage.jpg"; 
import { postData } from "@/utilis/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

import CircularProgress from '@mui/material/CircularProgress';

export default function page() {
  const [formFields, setFormFields] = useState({
     name: "",
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


  // handle form submit 
  const handleFormSubmit = (e) => {
     e.preventDefault();
     setIsLoading(true); 

     postData(`/api/v1/user/signUp`, formFields).then((res) => {

        if(res?.token !== "" &&  res?.token !== null && res?.token !== undefined){

          setTimeout(() => {
             context.alertBox(res.message, "success");
             setIsLoading(false);
             setFormFields({
                 name: "",
                 email : "",
                 password : ""
             }); 
             router.push('/signIn'); // Redirect to the sign-in page
          }, 1000);
          
        }else{
          context.alertBox(res.message, "error");
          setTimeout(() => {
            setIsLoading(false);
            setFormFields({
              name: "",
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
             <form onSubmit={handleFormSubmit} >
                 <Box sx={{ width: 500, maxWidth: '100%', margin: "auto"}}  >
                     <TextField 
                         fullWidth 
                         label="Name" 
                         id="fullWidth"
                         className="mb-3" 
                         name="name"
                         value={formFields.name}
                         onChange={handleInputChange}
                         disabled={isLoading === true ? true : false}
                        />
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
                 <button 
                    type="submit" 
                    className="bg-[#E3000E] text-white px-4 py-2 w-full text-xl font-semibold rounded-md "
                    disabled={isLoading === true ? true : false} 
                    > 
                    {
                      isLoading === true ?  <CircularProgress className="btn-loader"/> : "SIGN UP"
                    }
                    
                 </button>
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




