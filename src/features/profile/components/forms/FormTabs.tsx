import React from "react";
import type { FormStep } from "../../types";

interface FormTabsProps {
  activeTab: FormStep;
  onTabChange: (tab: FormStep) => void;
}

const FormTabs: React.FC<FormTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      <button
        className={`px-3 py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
          activeTab === "personal"
            ? "bg-[#ffce3a] text-black"
            : "bg-[#161616] text-white/50 hover:bg-[#2a2a2a] hover:text-white border border-white/50"
        }`}
        onClick={() => onTabChange("personal")}
      >
        Personal Info
      </button>
      <button
        className={`px-3 py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
          activeTab === "employ"
            ? "bg-[#ffce3a] text-black"
            : "bg-[#161616] text-white/50 hover:bg-[#2a2a2a] hover:text-white border border-white/50"
        }`}
        onClick={() => onTabChange("employ")}
      >
        Employee Details
      </button>
      <button
        className={`px-3 py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
          activeTab === "projects"
            ? "bg-[#ffce3a] text-black"
            : "bg-[#161616] text-white/50 hover:bg-[#2a2a2a] hover:text-white border border-white/50"
        }`}
        onClick={() => onTabChange("projects")}
      >
        Projects
      </button>
      <button
        className={`px-3 py-3 rounded-full text-xs md:text-sm font-medium transition-all ${
          activeTab === "qualifications"
            ? "bg-[#ffce3a] text-black"
            : "bg-[#161616] text-white/50 hover:bg-[#2a2a2a] hover:text-white border border-white/50"
        }`}
        onClick={() => onTabChange("qualifications")}
      >
        Qualifications
      </button>
    </div>
  );
};

export default FormTabs;
