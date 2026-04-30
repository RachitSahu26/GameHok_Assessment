import Image from "next/image";
import { Play } from "lucide-react";
import birdBanner from "../public/Frame 1244837959.png";

const BouncyBanner = () => {
    return (
  <div className="w-full  cursor-pointer block sm:hidden flex justify-center sm:justify-end">
  <Image
    src={birdBanner}
    alt="bird"
    className="
      w-full h-auto           /* mobile */
               
      object-contain
    "
  />
</div>
    );
};

export default BouncyBanner;