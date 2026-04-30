export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4 ">
      
      {/* Left - Logo */}
      <div className="flex items-center gap-2">
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">

        {/* Coins */}
        <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs">
          🪙 245
        </div>

        <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-2 py-1 rounded-full text-xs">
          🪙 2456
        </div>

        {/* Bell */}
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0b2d1f]">
          🔔
        </div>

        {/* Profile */}
        <div className="w-8 h-8 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}