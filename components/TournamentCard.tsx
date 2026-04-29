import { Trophy, Users } from "lucide-react";
import Coin from "./coin";
// import Coin from "./Coin";

type Tournament = {
  id: number;
  title: string;
  game: string;
  mode: string;
  entry: string;
  participants: number;
  maxParticipants: number;
  prizePool: number;
  status: string;
  image: string;
};

const TournamentCard = ({ tournament }: { tournament: Tournament }) => {
  return (
 
    <div className="
  bg-[#002E14]

  rounded-8px
  overflow-hidden
  border border-[#00A155]/20
  hover:border-[#00A155]/50
  transition duration-300
">
      {/* Image */}
      <div className="relative h-36">
        <img
          src={tournament.image}
          alt={tournament.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Participants */}
        <div className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1 flex items-center gap-1">
          <Users size={12} className="text-white" />
          <span className="text-white text-xs">
            {tournament.participants}/{tournament.maxParticipants}
          </span>
        </div>

        {/* Status */}
        <div className="absolute bottom-3 left-3 bg-green-500/20 px-2 py-1 rounded-full">
          <span className="text-green-400 text-xs">
            {tournament.status}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h4 className="text-white font-semibold mb-2">
          {tournament.title}
        </h4>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-purple-500/20 text-purple-400 text-xs px-2 py-1 rounded">
            {tournament.game}
          </span>

          <span className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
            {tournament.mode}
          </span>

          <span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-1 rounded flex items-center gap-1">
            <Coin size={10} /> {tournament.entry}
          </span>
        </div>

        {/* Prize */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
            <Trophy size={14} className="text-white" />
          </div>

          <div>
            <p className="text-white/60 text-xs">Prize Pool</p>
            <p className="text-white text-sm font-semibold flex items-center gap-1">
              {tournament.prizePool}
              <Coin size={12} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;