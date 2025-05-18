import React, { useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface ProfileCircularProgressProps {
  percentage: number;
  imageUrl: string;
  onImageChange?: (file: File) => void;
}

const ProfileCircularProgress: React.FC<ProfileCircularProgressProps> = ({
  percentage,
  imageUrl,
  onImageChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && onImageChange) {
      onImageChange(e.target.files[0]);
    }
  };

  return (
    <div className="relative w-40 h-40">
      {/* Circular progress bar */}
      <CircularProgressbar
        value={percentage}
        strokeWidth={5}
        styles={buildStyles({
          strokeLinecap: "round",
          pathColor: "#ffce3a",
          trailColor: "rgba(0,0,0,0)",
          rotation: 0.75,
          pathTransitionDuration: 0.5,
        })}
      />

      {/* Profile image in the center */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black bg-white">
          <img
            src={imageUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      {/* Edit button */}
      <div
        className="absolute bottom-0 right-0 bg-black p-1 rounded-full cursor-pointer z-10"
        onClick={handleEditClick}
      >
        <div className="bg-[#1a1a1a] w-8 h-8 flex items-center justify-center rounded-full">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProfileCircularProgress;
