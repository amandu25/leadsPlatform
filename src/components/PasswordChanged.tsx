import { useNavigate } from "react-router-dom";
import bigSparkle from "../assets/bigSparkle.svg";
import smallSparkle from "../assets/smallSparkle.svg";
import AuthLayout from "./shared/layout/AuthLayout";
import Button from "./shared/ui/Button";

export default function PasswordChanged() {
  const navigate = useNavigate();
  return (
    <AuthLayout title="" subtitle="">
      <div className="relative w-full max-w-sm mx-auto bg-transparent py-12 px-6 sm:px-10 flex flex-col items-center justify-center">
        {/* Sparkle SVGs at corners of the content box */}
        <img
          src={bigSparkle}
          alt="sparkle"
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-[51.15px] sm:h-[47.29px]"
        />
        <img
          src={bigSparkle}
          alt="sparkle"
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-10 h-10 sm:w-[51.15px] sm:h-[47.29px]"
        />
        <img
          src={smallSparkle}
          alt="small sparkle"
          className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 sm:w-[10.9px] sm:h-[10.47px]"
        />
        <img
          src={smallSparkle}
          alt="small sparkle"
          className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-[10.9px] sm:h-[10.47px]"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center whitespace-nowrap">
          Password Changed
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-center">
          Your password has been changed successfully
        </p>

        <Button onClick={() => navigate("/")}>Back to Login</Button>
      </div>
    </AuthLayout>
  );
}
