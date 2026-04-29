const SocialBanner = () => {
  return (
  
    <div className="bg-gradient-to-r from-[#003B1F] to-[#00A155] rounded-1.8px p-5 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <h2 className="text-white font-bold text-lg mb-1 relative z-10">
        Be the Gamehok's Social Star
      </h2>
      <p className="text-white/80 text-sm mb-4 relative z-10">
        Earn rewards by levelling up your social game
      </p>

      {/* Stats */}
      <div className="flex gap-6 relative z-10">
        
        {/* Posts */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs">P</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">245</p>
            <p className="text-white/60 text-xs">Posts</p>
          </div>
        </div>

        {/* Followers */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs">F</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">12.5K</p>
            <p className="text-white/60 text-xs">Followers</p>
          </div>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs">L</span>
          </div>
          <div>
            <p className="text-white font-bold text-sm">45.2K</p>
            <p className="text-white/60 text-xs">Likes</p>
          </div>
        </div>

      </div>

      {/* Profile Image */}
      <div className="absolute -bottom-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
        <div className="w-full h-full rounded-full bg-[#16213E] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
};

export default SocialBanner;