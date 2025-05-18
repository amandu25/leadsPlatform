import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "google";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = true,
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "py-3.5 rounded-full font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary:
      "bg-[#ffce3a] hover:bg-[#e6b933] text-black shadow-lg focus:ring-[#ffce3a]",
    secondary:
      "border border-gray-700 bg-[#1a1a1a] text-white hover:bg-[#242424] focus:ring-gray-700",
    google:
      "border border-gray-700 bg-[#1a1a1a] text-white hover:bg-[#242424] focus:ring-gray-700",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
