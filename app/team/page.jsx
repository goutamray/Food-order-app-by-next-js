import TeamBreadcrumb from "@/app/components/breadCrumb/TeamBreadcrumb";

// react images
import img1 from "@/public/assets/team/team-1.jpg"
import img2 from "@/public/assets/team/team-2.jpg"
import img3 from "@/public/assets/team/team-3.jpg"
import img4 from "@/public/assets/team/team-4.jpg"
import img5 from "@/public/assets/team/team-5.jpg"
import img6 from "@/public/assets/team/team-6.jpg"
import img7 from "@/public/assets/team/team-7.jpg"
import img8 from "@/public/assets/team/team-8.jpg"


import SingleTeam from "./SingleTeam";
import DownloadBtn from "../components/downloadBtn/DownloadBtn";

const Teamdata = [
   {
    id : 1,
    name : "SAM RICHERDSON",
    title : "Head chef",
    image : img1,
   },
   {
    id : 2,
    name : "JANNIFER HARPER",
    title : "Sous chef",
    image : img2,
   },
   {
    id : 3,
    name : "JONATHON CORONADO",
    title : "Burger chef",
    image : img3,
   },
   {
    id : 4,
    name : "JORGE STUCKY",
    title : "Grill chef",
    image : img4,
   },
   {
    id : 5,
    name : "ANTHONY BACKER",
    title : "Fry chef",
    image : img5,
   },
   {
    id : 6,
    name : "LEA VICTORIA",
    title : "Roast chef",
    image : img6,
   },
   {
    id : 7,
    name : "JUSTIN ROBERTO",
    title : "Pizza chef",
    image : img7,
   },
   {
    id : 8,
    name : "STEPHANIE REED",
    title : "Executive chef",
    image : img8,
   },

]

export default function page() {
  return (
    <div>
      <TeamBreadcrumb title={"MEET THE TEAM"}/>
      {/* All team data */}
      <div className="team py-20">
        <div className="container ">
           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center ">
              {
               Teamdata?.map((item, index) => {
                return <SingleTeam key={index} item={item}/> 
               })
              }
           </div>
        </div>
      </div>

      <DownloadBtn /> 
    </div>
  )
}


