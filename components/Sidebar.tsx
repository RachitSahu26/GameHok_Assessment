// import { Image } from "lucide-react";
import image11 from "../public/image11.png"
import Image from "next/image";
export default function Sidebar() {
  return (
  <div className="
  hidden md:flex
  fixed top-0 left-0

  w-64
  h-screen

  flex-col
  bg-[#021a0f]

  border-r border-green-900
  p-4
">
    {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
     
        <h1 className="text-white font-semibold text-lg">

         <Image src={image11} alt="logo" width={100} height={100} />         
        </h1>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3 text-sm">

        <div className="bg-[#0b2d1f] text-green-400 px-3 py-2 rounded-lg">
          🏠 Home
        </div>

        <div className="px-3 py-2 text-gray-400 hover:text-white">
          🏆 My Tournament
        </div>

        <div className="px-3 py-2 text-gray-400 hover:text-white">
          👥 Social
        </div>

        <div className="px-3 py-2 text-gray-400 hover:text-white">
          💬 Chat
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-auto text-red-400 text-sm flex items-center gap-2">
        ⏻ Logout
      </div>

    </div>
  );
}