"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { videos } from "@/data/video";

export default function RightPanel() {
  type Video = {
    id: number;
    title: string;
    image: StaticImageData;
  };
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="  p-2  space-y-4 ">
      <div className="flex justify-between">
        <h2 className="text-white font-semibold text-lg">
          Game Highlights
        </h2>

        <h2>View all</h2>
      </div>


      {/* Carousel Container */}
      <div className="
  relative w-full
  overflow-x-auto
  snap-x snap-mandatory
  scroll-smooth
   bordker-red-500

  lg:overflow-visible
  lg:snap-none
">

        {/* Slides */}
        <div
          className="
      flex gap-3
w-90
sm:w-full
      lg:flex-col
    "
        >

          {
            videos.map((video) => (

              <div
                key={video.id}
                className="
          min-w-full snap-start   /* mobile */

          lg:min-w-0             /* reset */
          lg:w-full
        "
              >
                <Image
                  src={video.image}
                  alt={video.title}
                  width={300}
                  height={160}
                  className="w-full h-40 rounded-xl  object-cover"
                />

                <p className="p-2 text-sm text-white">
                  {video.title}
                </p>
              </div>
            ))}


        </div>



      </div>

    </div>
  );
}