"use client"

import Battles from "@/components/Battles";
import GameList from "@/components/GameList";
import Header from "@/components/Header";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import SocialBanner from "@/components/home/SocialBanner";
import RightPanel from "@/components/RightPanel";
import Sidebar from "@/components/Sidebar";
// BouncyBird
import BouncyBird from "@/components/BouncyBird";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

// import Header from "@/components/Header";
// import Sidebar from "@/components/Sidebar";
// import RightPanel from "@/components/RightPanel";
// import Hero from "@/components/home/Hero";
// import SocialBanner from "@/components/home/SocialBanner";
// import FeaturedTournaments from "@/components/home/FeaturedTournaments";
// import GameList from "@/components/GameList";
// import BouncyBird from "@/components/BouncyBird";
// import Battles from "@/components/Battles";
// import BottomNav from "@/components/BottomNav";
// // import Sidebar from "@/components/Sidebar";
// import { useState } from "react";

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("home");

//   return (


//     <div className="min-h-screen w-full bg-[##001208] border-2 border-red-500 text-white flex">

//       {/* ================= SIDEBAR (ONLY DESKTOP) ================= */}
//       <div className="hidden sm:block w-64 border-r border-green-900">
//         <Sidebar />
//       </div>

//       {/* ================= MAIN ================= */}
//       <div className="flex-1 border-2 border-purple-500 w-full  sm:w-full  ">

//         {/* HEADER */}
//         <div className="border-b border-green-900 p-4">
//           <Header />
//         </div>

//         <div className="border-2 border-yellow-500 flex flex-col sm:flex-row">


//           <div className="w-full  border-2 border-red-700 ">

//             {/* CONTENT */}
//             <div className="p-3 rounded-[8px]">
//               <SocialBanner />
//             </div>

//             {/* BOTTOM SECTION */}
//             <div className="w-full rounded-lg p-4">
//               <FeaturedTournaments />
//               <BouncyBird />
//               <GameList />
//               <Battles />
//             </div>

//           </div>


//           <div className="w-full ">

//             <div className="border-5 lg:w-[300px] border-green-500 m-2">
//               <RightPanel />
//             </div>

//           </div>







//         </div>



//       </div>

//       {/* Mobile Bottom Nav */}
//       <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
//     </div>





//   );
// }

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  return (

    <div className="min-h-screen flex bg-[#021a0f] text-white">

      {/* ================= SIDEBAR ================= */}
      <div className="
    hidden lg:block
    w-64
    border-r border-green-900
  ">
        <Sidebar />
      </div>

      {/* ================= RIGHT MAIN ================= */}
      <div className="flex-1 flex bg-[#08090A] w-[320px] flex-col">

        {/* HEADER (optional) */}
        <div className="p-4 border-b border-green-900">
          <Header />
        </div>

        {/* ================= CONTENT AREA ================= */}
        <div className="flex flex-col  lg:flex-row flex-1">

          {/* LEFT PANEL (MAIN CONTENT) */}
          <div className="
        w-full
        lg:flex-1
        p-4
        space-y-4
      ">
            {/* CONTENT */}           <div className="p-3 rounded-[8px]">
              <SocialBanner />
            </div>

            {/* BOTTOM SECTION */}
            <div className="w-full rounded-lg p-4">
              <FeaturedTournaments />
              <BouncyBird />
              <GameList />
              <Battles />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="
        w-full
        lg:w-[320px]
        border-t lg:border-t-0 lg:border-l border-green-900
        p-4
      ">
            <RightPanel />
          </div>

        </div>

      </div>
        {/* Mobile Bottom Nav */}
//       <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>

  )



}