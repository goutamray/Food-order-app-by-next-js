
// import components 
import ContactBreadcrumb from "../components/breadCrumb/ContactBreadcrumb";
import DownloadBtn from "../components/downloadBtn/DownloadBtn";

// react icons 
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";


export default function page() {
  return (
    <div>
      <ContactBreadcrumb title={"Contact us"}/>
      <div className="py-20 ">
        <div className="container">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
            {/* column 1 */}
              <div className="custom-shadow flex gap-4">
                 <div className="bg-[#f2f2f2] h-[60px] w-[60px] rounded-full flex justify-center items-center  ">
                    <FaMapMarkerAlt className="text-3xl text-[#757474]"/>
                 </div>
                 <div>   
                  <h2 className="text-[22px] text-[#642F21] font-bold "> LOCATION </h2>
                  <p className="text-[16px] text-[#757575] font-medium w-[180px]"> Phone: 789-654-3210 
                    8721 M Central Avenue,      
                    Los Angeles, CA 90036
                    Daily 11 am to 10 pm </p>
                 </div>
              </div>
            {/* column 2 */}
              <div className="custom-shadow flex gap-4">
                 <div className="bg-[#f2f2f2] h-[60px] w-[60px] rounded-full flex justify-center items-center  ">
                    <FaRegClock className="text-3xl text-[#757474]"/>
                 </div>
                 <div>
                  <h2 className="text-[22px] text-[#642F21] font-bold "> WORKING HOURS </h2>
                  <p className="text-[16px] text-[#757575] font-medium w-[180px]"> Phone: 789-654-3210 
                    8721 M Central Avenue,      
                    Los Angeles, CA 90036
                    Daily 11 am to 10 pm </p>
                 </div>
              </div>
            {/* column 3 */}
              <div className="custom-shadow flex gap-4">
                 <div className="bg-[#f2f2f2] h-[60px] w-[60px] rounded-full flex justify-center items-center  ">
                    <FaLayerGroup className="text-3xl text-[#757474]"/>
                 </div>
                 <div>
                  <h2 className="text-[22px] text-[#642F21] font-bold "> ORDER NOW </h2>
                  <p className="text-[16px] text-[#757575] font-medium w-[180px]"> Phone: 789-654-3210 
                    8721 M Central Avenue,      
                    Los Angeles, CA 90036
                    Daily 11 am to 10 pm </p>
                 </div>
              </div>

           </div>
        </div>
      </div>
 

     {/* column 2 */}
     <div className="pt-10 pb-20">
      <div className="container">
        <div>    
           <h2 className="text-[30px] xl:text-[50] font-bold text-[#642F21]"> LEAVE A MESSAGE </h2>
           <div className="form">
             <div className="flex flex-col xl:flex-row gap-3 items-center ">
               <input type="text" placeholder="Your Name*" className="h-12 px-3 w-[100%] xl:w-[33%] border-1 border-gray-300 "/>
               <input type="text" placeholder="Your Email*" className="h-12 px-3 w-[100%] xl:w-[33%] border-1 border-gray-300 "/>
               <input type="text" placeholder="What is this about?..." className="h-12 px-3 w-[100%] xl:w-[33%] border-1 border-gray-300 " />
             </div>
             <div className="mt-3">
              <textarea name="" placeholder="Your Message..."  className="h-40 px-3 w-[100%] border-1 border-gray-300 "> </textarea>
             </div> 
             <button className="my-btn uppercase bg-[#E3000E] font-medium text-md px-4 py-[15px] rounded-sm text-white w-[200px] overflow-hidden mt-3"> Send Message </button>    
           </div>
        </div>
      </div>
     </div>
     
     {/* download btn  */}
      <DownloadBtn />
     </div>
  )
}


