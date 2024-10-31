"use client"

import { useState } from "react";
import { MyContext } from "./ThemeContext";
import  toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import Cookies from "js-cookie" 

const alertBox = (msg, type) => {
   if(type === "success"){
    toast.success(msg); 
   }

   if(type === "error"){
    toast.error(msg);
   }
}

// create theme provider
const ThemeProvider = ({ children }) => {
   const [isLogin, setIsLogin ] = useState(false); 
   const [user, setUser] = useState()

   useEffect(() => {
    const token =  Cookies.get('token'); 
    if(token !== "" && token !== null && token !== undefined){
      setIsLogin(true); 
      const userData = JSON.parse(Cookies.get("user")); 
      setUser(userData); 
    }else{
      setIsLogin(false); 
    }

   }, [isLogin]);


   const values = {
    alertBox,
    isLogin,
    setIsLogin,
    user,
   }

  return (
    <MyContext.Provider value={values}>
      <Toaster />

      { children }
    </MyContext.Provider>
  )
}

export default ThemeProvider; 
