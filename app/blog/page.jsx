
// import components 
import BlogBreadcrumb from "../components/breadCrumb/BlogBreadcrumb";
import BlogSingle2 from "../components/blog/BlogSingle2";

// react icons 
import { IoSearchSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

// blog images 
import blog from "@/public/assets/blog/blog1.jpg"
import blog2 from "@/public/assets/blog/blog2.jpg"
import blog3 from "@/public/assets/blog/blog3.jpg"
import offer from "@/public/assets/banner/offer-6.jpg"

// import next image 
import Image from "next/image";

const BlogData = [
  {
    id: 1,
    image : blog,
    title : "NEQUE DOLOR PRIMIS A LIBERO TEMPUS A TEMPOR",
    desc : "Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo",
  },
  {
    id: 2,
    image : blog2,
    title : "TEMPOR BLANDIT SAPIEN AT GRAVIDA DONEC IPSUM",
    desc : "Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo",
  },
  {
    id: 3,
    image : blog3,
    title : "QUAERAT NEQUE PURUS IPSUM NEQUE DOLOR",
    desc : "Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor a gravi donec ipsum aporta justo",
  },
]


export default function page() {
  return (
    <div>
      <BlogBreadcrumb title={"BLOG"}/>
      {/* blog listing */}
            <div className="blog-listing py-20">
              <div className="container"> 
                <div className="flex flex-col xl:flex-row justify-between xl:gap-6 ">
                  <div className="grid grid-cols-1 place-items-center gap-4">
                    {
                      BlogData.map((item, index) => {
                        return  <BlogSingle2 key={index} item={item}/>
                      })
                    }
            
                  </div>
                  <div className="right">
                     <div className="search relative group">
                        <input type="search" name="" placeholder="Search...." className="bg-[#f6f9fa] px-3 py-[18px] text-md w-[370px] md:w-[690px] xl:w-[450px] mt-3 xl:mt-0 border-1 border-gray-300 rounded-md focus:outline-none"/>   
                        <IoSearchSharp className=" text-xl text-gray-400 font-bold absolute top-8  right-6 group-hover:text-[#f7be27] transition-all duration-300 "/>   
                     </div>

                     {/*****  recent post  ****/}
                     <div>                
                        <h2 className="my-4 pt-2 font-semibold text-[#642F21] tracking-tighter"> Recent Posts</h2>
                        <div className="space-y-8">
                          {/* post 1  */}
                           <div className="flex gap-3 shadow-sm">
                              <div>
                                 <Image src={blog} alt="blog" className="h-[100px w-[100px] rounded-md "/>
                              </div>
                              <div className="pr-2">
                              <h2 className="text-[16px] font-bold hover:text-[#f7be27] transition-all duration-300 ">Neque dolor primis a libero tempus a tempor </h2>
                                  <div>
                                      <h2 className="text-sm font-normal text-black  px-2 py-1 rounded-xl w-[150px] flex  items-center gap-2 z-50"> <span> <SlCalender /> </span> 16 MARCH, 2021</h2>  
                                  </div>
                              </div>
                          </div>
                          {/* post 1 */}
                          <div className="flex gap-3 shadow-sm">
                              <div>
                                 <Image src={blog} alt="blog" className="h-[100px w-[100px] rounded-md "/>
                              </div>
                              <div className="pr-2">
                              <h2 className="text-[16px] font-bold hover:text-[#f7be27] transition-all duration-300 ">Neque dolor primis a libero tempus a tempor </h2>
                                  <div>
                                      <h2 className="text-sm font-normal text-black  px-2 py-1 rounded-xl w-[150px] flex  items-center gap-2 z-50"> <span> <SlCalender /> </span> 16 MARCH, 2021</h2>  
                                  </div>
                              </div>
                          </div>
                          {/* post 3 */}
                          <div className="flex gap-3 shadow-sm">
                              <div>
                                 <Image src={blog} alt="blog" className="h-[100px w-[100px] rounded-md "/>
                              </div>
                              <div className="pr-2">
                                  <h2 className="text-[16px] font-bold hover:text-[#f7be27] transition-all duration-300 ">Neque dolor primis a libero tempus a tempor </h2>
                                  <div>
                                      <h2 className="text-sm font-normal text-black  px-2 py-1 rounded-xl w-[150px] flex  items-center gap-2 z-50"> <span> <SlCalender /> </span> 16 MARCH, 2021</h2>  
                                  </div>
                              </div>
                          </div>
                        </div>         
                    </div>

                      {/* category */} 
                      <div>
                        <h2 className="my-4 pt-2 font-semibold text-[#642F21] tracking-tighter"> Categories</h2>
                        <ul className="space-y-4">
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline "> Burger </a></li>
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline "> Organic Food </a></li>
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline "> Restaurant </a></li>
                        </ul>
                        <div className="rounded-xl w-[400px] h-[400px] overflow-hidden mt-2">
                           <Image src={offer} alt="banner" className="w-[370px] xl:w-[400px] h-[400px] rounded-xl overflow-hidden"/>
                        </div>
                      </div>  

                      {/* tag */}
                      <div className="w-[400px]">
                        <h2 className="my-4 pt-2 font-semibold text-[#642F21] tracking-tighter"> Tag</h2>
                        <ul className="flex gap-2 flex-wrap ">
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1 rounded-md"> burger </a></li>
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1 rounded-md"> food </a></li>
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1 rounded-md"> ideas </a></li>
                          <li><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1 rounded-md"> life </a></li>
                          <li className="mt-2" ><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1  rounded-md"> pizza </a></li>
                          <li className="mt-2"><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1  rounded-md"> story </a></li>
                          <li className="mt-2" ><a href="#" className="text-xl text-[#898989] font-medium no-underline bg-red-50 px-3 py-1  rounded-md"> taste </a></li>
                        </ul>
              
                      </div>  
                  </div>
                </div>
              </div>
              
      </div>
    </div>
  )
}
