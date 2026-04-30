"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
// import { games } from "@/data/Game";
import Image from "next/image";
import { games,  } from "@/data/Game";
const GameList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };


  return (
    <div className="item-center p-4 relative">

      {/* Header */}
      <div className="p-2 mb-5">
        <h3 className="text-white text-sm font-semibold">
          Play Tournament by the Game
        </h3>
      </div>




      {/* Arrows (only tablet+) */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#01A74B] p-2 rounded-full"
      >
        <ArrowLeft size={20} className="text-white" />
      </button>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#01A74B] p-2 rounded-full"
      >
        <ArrowRight size={20} className="text-white" />
      </button>

      {/* Grid → Carousel */}
      <div
        ref={scrollRef}
        className="
         grid grid-cols-2 gap-4
          sm:w-170
          sm:flex sm:overflow-x-auto sm:gap-10 sm:pb-2
          sm:snap-x sm:snap-mandatory
          scrollbar-hide
                 "
      >
      {games.map((video) => (
  <div
    key={video.id}
    className="
      rounded-xl 
      overflow-hidden
      w-full
      sm:min-w-[180px]
      sm:snap-start
    "
  >
    <Image
      src={video.image}
      alt={video.title}
      width={180}
      height={100}
      className="w-full h-24 object-cover"
    />

    <p className="p-2 text-center text-sm text-white">
      {video.title}
    </p>
  </div>
))}
      </div>

    </div>
  );
};

export default GameList;