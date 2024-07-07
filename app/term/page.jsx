
import banner2 from "@/public/assets/banner/term.jpg"

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
                  <a className="text-[15px] uppercase font-bold  text-white mr-2" href="/">Home </a> <span className="mr-2"> / </span> TERMS & PRIVACY </h2>
                <h1 className="text-[30px] xl:text-[64px] font-bold text-white "> TERMS & PRIVACY  </h1>
              </div>
            </div> 
          </div>
          {/* terms  */}
      <div className="container py-12">
          <div className="w-[80%] mx-auto ">
             <p className="text-[18px] text-[#989999] font-thin "> Donec sodales, nibh vel (the <b  className="font-bold text-md text-black" > “Terms” </b> ) tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit diam. Nunc gravida ultrices felis eget faucibus. Aliquet lorem purus, quis mollis nisi laoreet at vitae. Mauris consequat tortor. Duis fermentum a massa in convallis ultrices interdum. </p>
             <p className="text-[18px] text-[#989999] font-thin " > Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec diam. Curabitur undo dapibus libero. Quisque eu tristique neque blandit tristique justo aliquam. Aliquam molestie nunc sapien justo, aliquet non molestie sed, venenatis nec purus. Aliquam eget lacinia elit. Vestibulum tincidunt tincidunt massa, et porttitor justo suscipit in magna dignissim </p>
        <div>
            <h2 className="text-[22px] xl:text-[28px]  font-bold text-[#642F21]"> PROCESSING OF YOUR DATA </h2>
            <p className="text-[18px] text-[#989999] font-thin " > Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor </p>
            <p className="text-[18px] text-[#989999] font-thin " > Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p>
            <p> <b className="font-bold text-md"> Email address </b> euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget </p>
            <p> <b className="font-bold text-md" > Payment Data </b> euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget </p>
            <p className="text-[18px] text-[#989999] font-thin " > Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor </p> 
          </div>
            <div>
                <h2 className="text-[22px] xl:text-[28px]  font-bold text-[#642F21]"> COLLECTION OF INFORMATION </h2>
                <p className="text-[18px] text-[#989999] font-thin " > Hliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p> 
           </div>
            <div>
                <h2 className="text-[22px] xl:text-[28px]  font-bold text-[#642F21]"> AUTHORIZE USER ACCOUNTS AND ACCOUNT SECURITY </h2>
                <p className="text-[18px] text-[#989999] font-thin " > Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor liqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p> 
           </div>

            <div>
                <h2 className="text-[22px] xl:text-[28px]  font-bold text-[#642F21]"> PROHABITED CONDUCT AND CONTENT </h2>
                <p className="text-[18px] text-[#989999] font-thin " > Quaerat sodales sapien undo euismod purus blandit velna euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget </p> 
                <p className="text-[18px] text-[#989999] font-thin " > Nemo ipsam egestas volute turpis dolores euismod purus pretium purus pretium ligula rutrum tempor mullam blandit tempor sapien and gravida donec ipsum at justo turpis urna augue, viverra a augue eget </p> 
           </div>

            <div>
                <h2 className="text-[22px] xl:text-[28px]  font-bold text-[#642F21]"> YOUR RESPONSIBLITIES </h2>
                <p className="text-[18px] text-[#989999] font-thin " >Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor liqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p> 
              
           </div>
            <div>
                <h2 className="text-[22px] xl:text-[28px] font-bold text-[#642F21]"> OTHER TERMS  </h2>
                <p className="text-[18px] text-[#989999] font-thin " >Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor </p> 
                <p className="text-[18px] text-[#989999] font-thin " > Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p> 
                <p className="text-[18px] text-[#989999] font-thin " >Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna aliquet suscipit in magna dignissim, porttitor hendrerit. Nunc gravida ultrices a felis eget faucibus. Praesent lorem purus, quis mollis nisi laoreet vitae. Mauris nec consequat tortor </p> 
                <p className="text-[18px] text-[#989999] font-thin " > Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien sagittis sapien sem congue tempor gravida donec enim ipsum porta justo integer odio velna a purus efficitur ipsum primis in cubilia laoreet augue egestas luctus donec purus and blandit sodales </p> 
              
           </div>

      </div>
    </div>
</div>
  )
}
