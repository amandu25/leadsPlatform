import React from "react";

interface DividerProps {
  text?: string;
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ text, className = "" }) => {
  return (
    <div className={`flex items-center w-full max-w-sm ${className}`}>
      <hr className="flex-grow border-t border-gray-700" />
      {text && <span className="mx-4 text-gray-500 text-sm">{text}</span>}
      <hr className="flex-grow border-t border-gray-700" />
    </div>
  );
};

export default Divider;
