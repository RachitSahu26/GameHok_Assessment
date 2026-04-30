

import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
};

const BattleCard = ({ title, subtitle, description, image }: Props) => {
    return (
        <div className="
  bg-gradient-to-b from-[#182920] to-[#4D5A53]
  rounded-xl 
  cursor-pointer
  p-4 
  w-full
  min-w-50
  sm:w-40
  flex flex-col gap-3
   border-2 border-green-900/40
">

            {/* Logo */}

            <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex items-center justify-center">
                <Image src={image} alt={title} width={32} height={32} />
            </div>
            {/* Text */}
            <div>
                <h3 className="text-white font-semibold text-sm">{title}</h3>
                <p className="text-gray-400 text-xs">{subtitle}</p>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
                {description}
            </p>

            {/* CTA */}
            <button className="text-green-400 text-sm font-medium flex items-center gap-1 mt-auto">
                Explore scrims →
            </button>
        </div>
    );
};

export default BattleCard;