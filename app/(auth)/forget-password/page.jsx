
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

    <div className="py-20">
      <div className="container">
          <p className="text-[18px] font-light text-[#757575]" > Lost your password? Please enter your username or email address. You will receive a link to create a new password via email. </p>
          <div>
              <label htmlFor="name" className="text-[18px] font-light text-[#757575]"> Username or email <span className="text-red-500"> * </span> </label>
              <div>
                 <input type="text" id="name" className="w-[100%] xl:w-[50%] border-1 border-gray-300  focus:outline-none focus:border-1 focus:border-gray-300 px-3 py-[10px] mt-1"/>
              </div>
          </div>
          <div className="mt-4">
              <button className="text-sm font-medium text-black px-4 py-[10px] bg-[#f7be27] rounded-sm"> Reset Password </button>
          </div>
      </div>
    </div>



    </div>
  )
}

