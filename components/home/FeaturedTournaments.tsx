import { tournaments } from "@/data/tournaments";
import TournamentCard from "../TournamentCard";

const FeaturedTournaments = () => {
    return (
        <div className="mb-6     rounded-[8px]">
            <div className="flex justify-between p-3">
                <h3 className="text-white text-lg font-bold mb-4">
                    Featured Tournaments
                </h3>

          
                <h3 className="text-white text-lg font-bold mb-4">
                   View all
                </h3>

            </div>

            <div className="flex gap-4 overflow-x-auto">
                {tournaments.map((t) => (
                    <TournamentCard key={t.id} tournament={t} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedTournaments;
