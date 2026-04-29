const Coin = ({ size = 20 }: { size?: number }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-white"
    >
      $
    </div>
  );
};

export default Coin;