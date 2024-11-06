import React from 'react'
import BlogSingle from './BlogSingle'

// blog images 
import blog from "@/public/assets/blog/blog1.jpg"
import blog2 from "@/public/assets/blog/blog2.jpg"
import blog3 from "@/public/assets/blog/blog3.jpg"


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

export default function Blog() {
  return (
    <div className='py-20'>
      <div className='container'>
        {/* header part */}
         <div className="header-part text-center ">
               <h2 className="text-[30px] xl:text-[60px] text-[#E3000E] font-bold tracking-tighter"> EVENTS & CATERING </h2>
               <p className="w-[500px] xl:w-[650px] text-xl font-light text-[#888888] mx-auto "> Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor primis libero tempus, blandit a cursus varius magna </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-4 pt-5">
            {
              BlogData?.map((item, index) => {
                return <BlogSingle key={index} item={item}/>
              })
            }
           </div>
      </div> 
    </div>
  )
}
