import { battles } from "@/data/battles";
import BattleCard from "./BattleCard";

const Battles = () => {
    return (
        <div className="
  p-2 
  flex flex-col 
  gap-2 
  overflow-x-auto 
 
">
            {/* Title */}



            <div className="flex justify-between p-3">
                <h3 className="text-white text-sm font-bold">
                    Compete in Daily Battles
                </h3>

                <h3 className="text-white text-sm font-bold">
                    View all
                </h3>
            </div>




            {/* Cards */}
            <div className="
        flex gap-3 overflow-x-auto pb-2
        sm:grid sm:grid-cols-2 sm:grid-cols-3  sm:overflow-visible
       
      ">
                {battles.map((battle) => (
                    <BattleCard key={battle.id} {...battle} />
                ))}
            </div>

        </div>
    );
};

export default Battles;