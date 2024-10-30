"use client"

import { MyContext } from "./ThemeContext";
import  toast, { Toaster } from 'react-hot-toast';

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


   const values = {
    alertBox
   }

  return (
    <MyContext.Provider value={values}>
      <Toaster />

      { children }
    </MyContext.Provider>
  )
}

export default ThemeProvider; 
