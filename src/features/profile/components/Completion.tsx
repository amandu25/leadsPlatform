import React from "react";
import { useNavigate } from "react-router-dom";
import CompleteIcon from "../../auth/assets/complete.svg";
import BigSparkle from "../../auth/assets/bigSparkle.svg";
import SmallSparkle from "../../auth/assets/smallSparkle.svg";

const Completion: React.FC = () => {
  const navigate = useNavigate();

  const handleWelcome = () => {
    navigate("/home"); // Redirect to dashboard
  };

  return (
    <div className="bg-black rounded-xl p-8 h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Sparkles */}
      <div className="absolute top-60 left-16">
        <img src={BigSparkle} alt="Sparkle" />
      </div>
      <div className="absolute bottom-44 right-16">
        <img src={BigSparkle} alt="Sparkle" />
      </div>
      <div className="absolute top-44 right-40">
        <img src={SmallSparkle} alt="Sparkle" />
      </div>
      <div className="absolute bottom-60 left-40">
        <img src={SmallSparkle} alt="Sparkle" />
      </div>

      {/* Completion icon */}
      <div className="mb-8">
        <img src={CompleteIcon} alt="Complete" width="134" height="133" />
      </div>

      {/* Completion text */}
      <h1 className="text-white text-4xl font-bold mb-4">Congratulation</h1>
      <p className="text-white text-center mb-12">
        Congratulations! Your profile has been successfully created on
        Yallopage.
      </p>

      {/* Welcome button */}
      <button
        onClick={handleWelcome}
        className="bg-[#ffce3a] text-black py-4 px-8 rounded-full font-semibold text-lg w-full max-w-md hover:bg-[#e5b935] transition-colors"
      >
        Welcome to Yallopage
      </button>
    </div>
  );
};

export default Completion;
