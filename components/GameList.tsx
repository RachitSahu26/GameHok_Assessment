"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { games } from "@/data/Game";
// import { videos } from "@/data/video";


const GameList = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
    };

    return (


        <div className="border-2 border-amber-800 p-4">
            <div className="p-2 mb-5">
                <h3 className="text-white text-sm font-semibold">
                    Play Tournament by the Game
                </h3>
            </div>


            <div className="grid grid-cols-3 sm:grid-cols-3   lg:grid-cols-4 gap-4">

                {games.map((video) => (
                    <div
                        key={video.id}
                        className="min-w-116px min-h-112px   rounded-xl overflow-hidden"
                    >
                        <img
                            src={video.image}
                            alt={video.name}
                            className="min-w-115px min-h-92px object-cover"
                        />
                        <p className="p-2 text-sm text-white">
                            {video.name}
                        </p>
                    </div>
                ))}

            </div>

        </div>

    );
};

export default GameList;