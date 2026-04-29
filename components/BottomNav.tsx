import { Home, Trophy, User, MessageCircle } from "lucide-react";

const BottomNav = ({ activeTab, setActiveTab }: any) => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-[#08090A] flex justify-around py-2">
      <Home onClick={() => setActiveTab("home")} />
      <Trophy onClick={() => setActiveTab("tournament")} />
      <User onClick={() => setActiveTab("social")} />
      <MessageCircle onClick={() => setActiveTab("chat")} />
    </div>
  );
};

export default BottomNav;