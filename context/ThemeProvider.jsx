"use client"

import { useState, useEffect } from "react";
import { MyContext } from "./ThemeContext";

// create theme provider
const ThemeProvider = ({ children }) => {
   const values = {

   }

  return (
    <MyContext.Provider value={values}>
      { children }
    </MyContext.Provider>
  )
}

export default ThemeProvider; 
