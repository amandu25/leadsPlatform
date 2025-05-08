import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loginSvg from "../assets/login.svg";

const OTP_LENGTH = 5;

export default function OtpInput() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(20);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  useEffect(() => {
    inputRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < OTP_LENGTH - 1) setActiveIndex(index + 1);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setActiveIndex(index - 1);
      }
      setOtp(newOtp);
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setOtp(Array(OTP_LENGTH).fill(""));
      setActiveIndex(0);
      setTimer(20);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black">
      <div className="w-full lg:w-1/2 bg-black text-white flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-left">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-400 mb-8 text-left">
            Lorem ipsum dolor sit ame consectetur emet
          </p>

          <div className="flex justify-between mb-8">
            {otp.map((digit, index) => (
              <div
                key={index}
                className={`w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-xl font-bold bg-[#1a1a1a] ${
                  index === activeIndex
                    ? "border-[#ffce3a] ring-2 ring-[#ffce3a]"
                    : ""
                }`}
              >
                <input
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full h-full text-center bg-transparent outline-none caret-transparent text-white"
                />
              </div>
            ))}
          </div>
          <Link to="/resetPassword">
            <button
              className={`w-full py-3.5 rounded-full font-semibold shadow-lg transition-colors duration-200 ${
                otp.every((digit) => digit !== "")
                  ? "bg-[#ffce3a] text-black hover:bg-[#e6b933] focus:outline-none focus:ring-2 focus:ring-[#ffce3a] focus:ring-offset-2 focus:ring-offset-black"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!otp.every((digit) => digit !== "")}
            >
              Verify
            </button>
          </Link>

          <div className="mt-6 text-center">
            {timer === 0 ? (
              <button
                onClick={handleResend}
                className="text-[#ffce3a] hover:text-[#e6b933] transition-colors duration-200"
              >
                Send code again
              </button>
            ) : (
              <span className="text-gray-400">
                Send code again &nbsp; 00:{timer.toString().padStart(2, "0")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 bg-[#251c00] items-center justify-center p-8 sm:p-12 lg:p-16">
        <img
          src={loginSvg}
          alt="OTP Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
