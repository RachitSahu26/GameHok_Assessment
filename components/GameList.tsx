"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { games } from "@/data/Game";

const GameList = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3; // number of cards per view (desktop)

  const next = () => {
    if (index < games.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="p-4  relative">

      {/* Header */}
      <div className="p-2 mb-5">
        <h3 className="text-white text-sm font-semibold">
          Play Tournament by the Game
        </h3>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 hidden lg:block top-1/2 -translate-y-1/2 z-10 bg-[#01A74B] p-2 rounded-full"
      >
        <ArrowLeft size={20} className="text-white" />
      </button>

      <button
        onClick={next}
        className="absolute hidden lg:block right-2 top-1/2 -translate-y-1/2 z-10 bg-[#01A74B] p-2 rounded-full"
      >
        <ArrowRight size={20} className="text-white" />
      </button>

      {/* Slider */}
      <div className="overflow-hidden  cursor-pointer">
        <div
          className=" gap-2 grid grid-cols-2 md:grid-cols-4 lg:flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 200}px)`,
          }}
        >
          {games.map((video) => (
            <div
              key={video.id}
              className=" w-[180px] sm:w-full rounded-xl overflow-hidden"
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

    </div>
  );
};

export default GameList;