import React from "react";
import ProfileCircularProgress from "../../components/ProfileCircularProgress";
import {
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiMail,
  FiBriefcase,
  FiFile,
} from "react-icons/fi";

interface ProfileSidebarProps {
  profileImageUrl: string;
  formCompletion: number;
  onImageChange: (file: File) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  profileImageUrl,
  formCompletion,
  onImageChange,
}) => {
  return (
    <div className="relative mt-14">
      {/* Profile image positioned half above container */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
        <ProfileCircularProgress
          percentage={formCompletion}
          imageUrl={profileImageUrl}
          onImageChange={onImageChange}
        />
      </div>

      <div className="bg-black rounded-xl p-8 pt-24 flex flex-col items-center">
        <h2 className="text-xl font-bold mt-4 text-white">Jatin Prajapaty</h2>
        <p className="text-gray-400 mt-1">Product Designer</p>

        <div className="w-full mt-8 space-y-4">
          {/* Contact information */}
          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiPhone className="text-gray-400 mr-3" />
            <span className="text-gray-400">9310038567</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiCalendar className="text-gray-400 mr-3" />
            <span className="text-gray-400">Add availability to join</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiMapPin className="text-gray-400 mr-3" />
            <span className="text-gray-400">Add Location</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiMail className="text-gray-400 mr-3" />
            <span className="text-gray-400">jatinprajapaty@gmail.com</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiBriefcase className="text-gray-400 mr-3" />
            <span className="text-gray-400">Fresher</span>
          </div>

          <div className="bg-[#1a1a1a] rounded-[100px] p-4 flex items-center">
            <FiFile className="text-gray-400 mr-3" />
            <span className="text-gray-400">Add Resume</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-[#ffce3a] text-black py-3 px-4 rounded-[100px] font-semibold">
          Add 13 Missing Details
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
