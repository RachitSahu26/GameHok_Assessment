"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { videos } from "@/data/video";

export default function RightPanel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full p-2 space-y-4">
      <div className="flex justify-between">
        <h2 className="text-white font-semibold text-lg">
          Game Highlights
        </h2>

        <h2>View all</h2>
      </div>


      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden rounded-xl">

        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="min-w-full bg-[#0b2d1f] h-60"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-40 object-cover"
              />
              <p className="p-2 text-sm text-white">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        >
          <ArrowLeft className="text-white" size={18} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
        >
          <ArrowRight className="text-white" size={18} />
        </button>

      </div>

    </div>
  );
}