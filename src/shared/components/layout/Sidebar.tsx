import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  // Update active item based on current route
  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveItem("dashboard");
    } else if (location.pathname === "/profile-setup") {
      setActiveItem("profile");
    }
  }, [location.pathname]);

  return (
    <div className="w-[248px] h-screen bg-black flex flex-col border-r border-gray-800">
      {/* Logo */}
      <div className="p-6">
        <div className="text-2xl font-bold bg-[#ffce3a] text-black px-4 py-2 rounded-[100px] text-center shadow-[3px_3px_0px_rgba(255,255,255,0.8)] border border-black">
          YELLOPAHE
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          <Link
            to="/home"
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeItem === "dashboard"
                ? "bg-[#251c00] text-[#ffce3a]"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <RiDashboardLine
              className={`mr-3 text-xl ${
                activeItem === "dashboard" ? "text-[#ffce3a]" : ""
              }`}
            />
            <span>Dashboard</span>
          </Link>

          <Link
            to="/profile-setup"
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              activeItem === "profile"
                ? "bg-[#251c00] text-[#ffce3a]"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            <CgProfile
              className={`mr-3 text-xl ${
                activeItem === "profile" ? "text-[#ffce3a]" : ""
              }`}
            />
            <span>Profile Setup</span>
          </Link>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 mt-auto">
        <Link to="/">
          <button className="w-full flex items-center justify-center px-4 py-3 text-[#ff5c5c] bg-[#2d2020] rounded-lg hover:bg-[#3d2a2a] transition-colors">
            <FiLogOut className="mr-2" />
            <span>Log out</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
