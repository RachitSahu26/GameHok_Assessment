import Image from "next/image";
import { Play } from "lucide-react";
import birdBanner from "../public/Frame 1244837959.png";

const BouncyBanner = () => {
    return (
       <div className="relative block md:hidden mb-5 h-40 rounded-2xl overflow-hidden p-5">
        {/* <div className="border-2 border-purple-500 ">
             

            </div> */}
            {/* Bird Image */}
            <Image
                src={birdBanner}
                alt="bird"
      className=" w-full h-full  object-contain"
            />
        </div>
    );
};

export default BouncyBanner;