import React from "react";
import loginSvg from "../../../features/auth/assets/login.svg";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-black">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-12">
        <div className="w-full max-w-sm">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-left">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 mb-8 text-left text-sm sm:text-base">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex w-full lg:w-1/2 bg-[#251c00] items-center justify-center p-8 sm:p-12 lg:p-16">
        <img
          src={loginSvg}
          alt="Authentication Illustration"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
