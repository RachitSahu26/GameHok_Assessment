import Image from "next/image";
import image6 from "../../public/image6.png"
// image7
import image7 from "../../public/image7.png"
import image8 from "../../public/image8.png"
import image9 from "../../public/image9.png"


const SocialBanner = () => {
  return (

    <div className="
w-full

  bg-gradient-to-r from-[#003B1F] to-[#00A155]

  rounded-[8px]
  p-5
  relative
  overflow-hidden
  
">
      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>




      <div className=" p-3 flex items-center  gap-3 justify-between">

        {/* Profile Image */}

        <div className="
  order-1 sm:order-2

w-full   /* mobile */
  sm:w-[142.8px] sm:h-[139.58px] /* ≥ sm */
 rounded-[2px]
  overflow-hidden
">
          <Image
            src={image6}
            alt="Profile"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}

        <div className=" order-2 sm:order-1  flex-1 px-3">

          <h2 className="
      
  text-white

  /* Mobile (default) */
  text-[18px] leading-[24px] font-bold min-h-[48px] flex items-center

  /* ≥ sm (apply new design) */
  sm:w-[344px]
  sm:h-[32px]
  sm:text-[24px]
  sm:leading-[32px]
">
            Be the Gamehok's Social Star
          </h2>

          <p className="
  text-white/80

  /* Mobile (default) */
  w-[172px]
  min-h-[40px]
  text-[14px]
  leading-[20px]
  font-semibold
  tracking-normal
  flex items-center

  /* ≥ sm (new design) */
  sm:w-[347px]
  sm:min-h-[20px]
">
            Earn rewards by levelling up your social game
          </p>

          {/* Stats */}
          <div className="
    flex items-center 
    gap-4 sm:gap-3
    flex-wrap

  ">

            {[image7, image8, image9].map((img, i) => (
              <div
                key={i}
                className="
          w-10 h-10          /* mobile */
          sm:w-18 sm:h-16    /* tablet */
             /* desktop */

          overflow-hidden
          flex items-center justify-center
          mt-2
        "
              >
                <Image
                  src={img}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  );
};

export default SocialBanner;

