import { tournaments } from "@/data/tournaments";
import TournamentCard from "../TournamentCard";

const FeaturedTournaments = () => {
    return (
      
        <div className="mb-6 cursor-pointer b bg-[#021a0f] rounded-[8px]">

  {/* Header */}
  <div className="flex justify-between p-3">
    <h3 className="text-white text-sm font-bold">
      Featured Tournaments
    </h3>

    <h3 className="text-white text-sm font-bold">
      View all
    </h3>
  </div>

  {/* Swipe Carousel */}
  <div className="
  
    w-full
    flex gap-4
    overflow-x-auto
    snap-x snap-mandatory
    scroll-smooth
    pb-2
  ">
    {tournaments.map((t) => (
      <div
        key={t.id}
        className="
          min-w-full          /* mobile → 1 card */
          sm:min-w-[calc(50%-0.5rem)]  /* ≥ sm → 2 cards */
          snap-start
        "
      >
        <TournamentCard tournament={t} />
      </div>
    ))}
  </div>

</div>
    );
};

export default FeaturedTournaments;
