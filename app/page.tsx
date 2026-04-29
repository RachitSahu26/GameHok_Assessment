"use client"

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import RightPanel from "@/components/RightPanel";
import Hero from "@/components/home/Hero";
import SocialBanner from "@/components/home/SocialBanner";
import FeaturedTournaments from "@/components/home/FeaturedTournaments";
import GameList from "@/components/GameList";
import BouncyBird from "@/components/BouncyBird";
import Battles from "@/components/Battles";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");

  return (


    <div className="min-h-screen w-full bg-[#08090A] border-2 border-red-500 text-white flex">

      {/* ================= SIDEBAR (ONLY DESKTOP) ================= */}
      <div className="hidden lg:block w-64 border-r border-green-900">
        Sidebar
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="border-b border-green-900 p-4">
          <Header />
        </div>



        <div className="min-h-screen w-full border-2  border-yellow-500 flex flex-col lg:flex-row">

          {/* CONTENT */}
          <div className="p-3 w-full rounded-1.8px">
            <SocialBanner />
          </div>

          {/* ================= BOTTOM SECTION ================= */}
          <div className="  w-full rounded-lg p-4">

            <FeaturedTournaments />
            <BouncyBird />
            <GameList />
            <Battles/>
          </div>








        </div>



        {/* ================= RIGHT PANEL (ONLY DESKTOP) ================= */}
        <div className="  border-5 border-red-900 p-4">

          <RightPanel />
        </div>

      </div>

     {/* Mobile Bottom Nav */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>





  );
}