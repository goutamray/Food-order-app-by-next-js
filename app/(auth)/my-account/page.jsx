
import banner2 from "@/public/assets/banner/cartpage.jpg"

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
            <a className="text-[15px] uppercase font-bold  text-white mr-2" href="/">Home </a> <span className="mr-2"> / </span> MY ACCOUNT </h2>
          <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> MY ACCOUNT </h1>
         </div>
      </div> 
    </div>

      <div className="container py-10">
          <div className="flex flex-col xl:flex-row justify-between gap-4">
              <div className="w-[100%] xl:w-[48%]">
                <h2 className="text-[32px] text-[#642F21] font-bold mb-4"> Login </h2>
                <div className="border border-gray-300 p-3 rounded-md ">
                  <div>
                    <label htmlFor="name" className="text-[18px] font-light text-[#757575]"> Username or email address <span className="text-red-500"> * </span> </label>
                    <input type="text" id="name" className=" w-[100%] border-1 border-gray-300  focus:outline-none focus:border-1 focus:border-gray-300 px-3 py-[10px] mt-1"/>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="pass" className="text-[18px] font-light text-[#757575]"> Password  <span className="text-red-500"> * </span> </label>
                    <input type="text" id="pass" className=" w-[100%] border-1 border-gray-300  focus:outline-none focus:border-1 focus:border-gray-300 px-3 py-[10px] mt-1"/>
                  </div>
                  <div className="flex gap-1 mt-4">
                    <input type="checkbox" id="remember" /> 
                    <label htmlFor="remember" className="text-[18px] font-light text-[#757575]"> Remember me </label>
                  </div>
                  <div className="mt-2">
                    <button className="text-sm font-medium text-black px-4 py-[10px] bg-[#f7be27] rounded-sm"> Login </button>
                  </div>
                  <div className="mt-2">
                    <a href="/forget-password" className="text-[18px] font-semibold text-[#757575] no-underline hover:text-[#f7be27] transition-all duration-300 " > Lost your password? </a>
                  </div>
                </div>
              </div>
              <div  className="w-[100%] xl:w-[48%]" >
                <h2  className="text-[32px] text-[#642F21] font-bold "> Register </h2>
                <div className="border border-gray-300 p-3 rounded-md ">
                  <div>
                    <label htmlFor="name" className="text-[18px] font-light text-[#757575]"> Username <span className="text-red-500"> * </span> </label>
                    <input type="text" id="name" className=" w-[100%] border-1 border-gray-300  focus:outline-none focus:border-1 focus:border-gray-300 px-3 py-[10px] mt-1"/>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="pass" className="text-[18px] font-light text-[#757575]"> Email address  <span className="text-red-500"> * </span> </label>
                    <input type="text" id="pass" className=" w-[100%] border-1 border-gray-300  focus:outline-none focus:border-1 focus:border-gray-300 px-3 py-[10px] mt-1"/>
                  </div>
                  <div className=" mt-4">
                    <p  className="text-[18px] font-light text-[#757575]" > A link to set a new password will be sent to your email address. </p>
                    <p> Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-[18px] no-underline hover:text-[#f7be27] text-[#474646] transition-all duration-300 "> privacy policy </a>. </p>
                  </div>
                  <div className="mt-2">
                    <button className="text-sm font-medium text-black px-4 py-[10px] bg-[#f7be27] rounded-sm"> Register </button>
                  </div>
                  
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}




