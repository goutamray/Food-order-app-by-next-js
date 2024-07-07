import banner2 from "@/public/assets/banner/about-page.jpg"

const bgStyleBanner2 = {
  backgroundImage : `url(${banner2.src}) `,
  backgroundSize : "cover",
  backgroundPosition : "center" ,
  backgroundRepeat : "no-repeat",
};

export default function page() {
  return (
    <div>
      {/* breadcrumb */}
    <div style={bgStyleBanner2} className="h-[400px] w-full -mt-20 ">
      <div className="container ">
         <div className="flex flex-col justify-center items-center pt-40">
          <h2 className="text-white text-[15px] font-semibold uppercase"> 
            <a className="text-[15px] uppercase font-bold  text-white mr-2" href="/">Home </a> <span className="mr-2"> / </span> F.A.Q.S </h2>
          <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> F.A.Q.S </h1>
         </div>
      </div> 
    </div>

    {/* faq question */}
      <div className="container py-20">
         <div className="flex flex-col gap-4 xl:flex-row ">
          {/* left faq */}
            <div className="w-[100%] xl:w-[47%]">
                <div className="mb-4">
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> WHAT PAYMENT METHODS DO YOU ACCEPT? </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal"> Etiam amet mauris suscipit in odio. Integer congue undo metus. Vitae arcu mollis blandit ultrice ligula egestas a magna suscipit lectus magna suscipit luctus blandit molestie purus </p>
                </div>
                <div  className="mb-4" >
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> IS MY PAYMENT INFORMATION SECURE? </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal"> Aliqum mullam blandit and tempor sapien donec ipsum gravida porta. Velna vitae auctor congue quaerat and sodales sapien </p>
                </div>

                <div  className="mb-4" >
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> IS THERE A DISCOUNT CODE? </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia </p>
                </div>

                <div>
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> WHAT IF I HAVE LOST MY GIFT CERTIFICATE?  </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia </p>
                </div>
            </div>
         {/* right faq  */}
         <div className="w-[100%] xl:w-[47%]">
                <div className="mb-4">
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> HOW CAN I CHANGE SOMETHING IN MY ORDER?  </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal"> Aliqum mullam blandit and tempor sapien donec ipsum at gravida porta. Velna vitae auctor congue tristique </p>
                </div>
                <div  className="mb-4" >
                  <h2 className="text-xl text-[#642F21] font-bold mb-2">HOW MUCH IS SHIPPING?? </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal"> Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia </p>
                </div>

                <div  className="mb-4" >
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> HOW LONG WILL MY ORDER TAKE TO BE DELIVERED? </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula ligula massa in faucibus orci a luctus ultrices ipsum primis in faucibus odio feugiat primis luctus in ligula eros ligula </p>
                </div>

                <div>
                  <h2 className="text-xl text-[#642F21] font-bold mb-2"> HOW DO I TRACK MY ORDER?  </h2>
                  <p className="text-[18px] text-[#a0a0a0] font-normal">Praesent semper lacus sed cursus porta, feugiat primis luctus in ligula eros ac ligula massa and faucibus orci a luctus aliquet and molestie purus venenatis aliquam eget lacinia </p>
                </div>
            </div>

         </div>
      </div>
    </div>
  )
}




