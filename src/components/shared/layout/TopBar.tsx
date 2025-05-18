import React from "react";

// Mock user data - in a real app this would come from context/state
const user = {
  name: "Jatin Kumar Prajapaty",
  profilePic: "https://via.placeholder.com/60", // Placeholder for now
};

const TopBar: React.FC = () => {
  return (
    <div className="bg-black px-6 py-4 flex items-center justify-between border-b border-gray-800">
      <div>
        <h2 className="text-xl font-medium text-white">Jatin Prajapaty</h2>
        <p className="text-gray-400 text-sm">Have a Nice Day 👋</p>
      </div>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
