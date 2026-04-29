export default function Hero() {
  return (
    <div className="bg-[#0b2d1f] w-full rounded-xl p-4 ">
      
      {/* Title */}
      <div>
        <h2 className="text-lg font-semibold">
          Be the Gamehok’s{" "}
          <span className="text-green-400">Social Star</span>
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Earn rewards by levelling up your social game
        </p>
      </div>

      {/* Icons */}
      <div className="flex justify-between text-center">
        
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 border border-green-500 rounded-full flex items-center justify-center">
            📷
          </div>
          <span className="text-xs">Posts</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 border border-yellow-500 rounded-full flex items-center justify-center">
            👥
          </div>
          <span className="text-xs">Followers</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 border border-blue-500 rounded-full flex items-center justify-center">
            👍
          </div>
          <span className="text-xs">Likes</span>
        </div>

      </div>

    </div>
  );
}