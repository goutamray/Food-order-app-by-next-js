import { burgerData } from "@/faker/data";
import Menu3Breadcrumb from "../components/breadCrumb/Menu3Breadcrumb";

// react icons 
import { GoDotFill } from "react-icons/go";

export default function page() {
  return (
    <div>
      <Menu3Breadcrumb title={"Menu Item 3"}/>
      {/* products */}
      <div className="container py-20">
         <div>
            <div>
              <h2 className="text-red-600 text-[25px] md:text-[40px] xl:text-[60px] font-bold mb-5 text-center"> APPETIZERS & SIDES  </h2>
            </div>
            <div className="flex flex-col xl:flex-row gap-4">
               <div>
                  {
                    burgerData.map((item, index) => {
                        return <div className="w-[370px] md:w-[650px] xl:w-[600px] mb-3 border border-gray-200 shadow-md p-3" key={index}>
                             <div className="flex gap-2  ">
                               <div className="flex items-center justify-between relative ">
                                   {/* left  */}
                                    <div className="flex gap-3 items-center w-[280px] md:w-[570px] xl:w-[650px]">
                                      <a className="font-bold text-[18px] xl:text-2xl text-[#642F21] no-underline" href="#"> {item.name}</a>
                                      <span className="flex">
                                       
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                  
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>

                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                      </span>
                                    </div>                 
                                    <h2 className="font-bold text-[18px] xl:text-2xl text-[#642F21] absolute -right-[35px] xl:ml-0   xl:right-[15%] top-2"> {item.price} </h2> 
                                 </div>                    
                             </div>
                             {/* bottom part */}
                             <div className="flex justify-between items-center mt-2 xl:mt-0">
                              <h2 className="font-normal w-[300px] md:w-[350px] xl:w-[400px]  text-[17px] text-[#333333]">{item.desc} </h2>
                              <div>
                                 <a href="#" className="px-3 py-2 text-gray-600 test-sm no-underline bg-[#eaeaea] hover:bg-[#f7c234] font-semibold rounded-md transition-all duration-300 "> ${item.wait} </a>
                              </div>
                             </div>
                        </div>
                    })
                  }
               </div>
               <div>
                  {
                    burgerData.map((item, index) => {
                        return <div className="w-[370px] md:w-[650px] xl:w-[600px] mb-3 border border-gray-200 shadow-md p-3" key={index}>
                             <div className="flex gap-2  ">
                               <div className="flex items-center justify-between relative">
                                   {/* left  */}
                                    <div className="flex gap-3 items-center w-[280px] md:w-[570px] xl:w-[650px]">
                                      <a className="font-bold text-[18px] xl:text-2xl text-[#642F21] no-underline" href="#"> {item.name}</a> 
                                      <span className="flex">
                                       
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                  
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>

                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                          <GoDotFill className=" text-amber-400 text-xs"/>
                                      </span>
                                    </div>                 
                                    <h2 className="font-bold text-[18px] xl:text-2xl text-[#642F21] absolute -right-[35px]  xl:right-[15%] top-2"> {item.price}  </h2>
                                 </div>                    
                             </div>
                             {/* bottom part */}
                             <div className="flex justify-between items-center mt-2 xl:mt-0">
                              <h2 className="font-normal w-[300px] md:w-[350px] xl:w-[400px]  text-[17px] text-[#333333]">{item.desc} </h2>
                              <div>
                                 <a href="#" className="px-3 py-2 text-gray-600 test-sm no-underline bg-[#eaeaea] hover:bg-[#f7c234] font-semibold rounded-md transition-all duration-300 "> ${item.wait} </a>
                              </div>
                             </div>
                        </div>
                    })
                  }
               </div>

              
            </div>
         </div>
      </div>
    </div>
  )
}
