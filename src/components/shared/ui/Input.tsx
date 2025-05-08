import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  icon,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      <input
        className={`w-full pr-10 pl-4 py-3.5 rounded-full border border-gray-700 bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffce3a] focus:border-transparent transition-all duration-200 ${className}`}
        {...props}
      />
      {icon && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
