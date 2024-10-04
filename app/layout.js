
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";
import Header from "./components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";  
import Footer from "./components/footer/Footer";


export const metadata = {
  title: "Food Order App",
  description: "Full Stack Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider >
          <Header /> 
            {children}
          <Footer /> 
        </ThemeProvider>
      </body>
    </html>
  );
}




