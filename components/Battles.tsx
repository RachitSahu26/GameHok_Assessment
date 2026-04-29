import { battles } from "@/data/battles";
import BattleCard from "./BattleCard";

const Battles = () => {
    return (
       <div className="
  p-2 
  flex flex-col 
  gap-2 
  overflow-x-auto 
  border-2 border-purple-500
">
            {/* Title */}
            <div>

                <h2 className="text-white text-[16px] leading-[20px] font-semibold tracking-normal font-inter">
                    Compete in Daily Battles
                </h2>
            </div>





            {/* Cards */}
            <div className="
        flex gap-4 overflow-x-auto pb-2
        lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:overflow-visible
         border-2 border-red-500
      ">
                {battles.map((battle) => (
                    <BattleCard key={battle.id} {...battle} />
                ))}
            </div>

        </div>
    );
};

export default Battles;