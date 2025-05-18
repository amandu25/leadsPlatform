import React, { useRef } from "react";
import { Input } from "../../../../shared/components/ui";
import { IoCalendarOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { PersonalFormData } from "../../types";

interface PersonalInfoFormProps {
  formData: PersonalFormData;
  updateFormData: (data: Partial<PersonalFormData>) => void;
  fieldErrors?: Record<string, boolean>;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  formData,
  updateFormData,
  fieldErrors = {},
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      updateFormData({ dob: date });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateFormData({ profilePicture: e.target.files[0] });
    }
  };

  // Helper function to determine border color based on error state
  const getBorderClass = (fieldName: string) => {
    return fieldErrors[fieldName]
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-700 focus:ring-[#ffce3a]";
  };

  // Custom styles for the date picker to match the dark theme
  const datePickerCustomStyles = `
    .react-datepicker {
      background-color: #1a1a1a;
      border-color: #333;
      color: white;
    }
    .react-datepicker__header {
      background-color: #222;
      border-color: #333;
    }
    .react-datepicker__current-month, 
    .react-datepicker__day-name,
    .react-datepicker__day {
      color: white;
    }
    .react-datepicker__day:hover {
      background-color: #333;
    }
    .react-datepicker__day--selected {
      background-color: #ffce3a;
      color: black;
    }
    .react-datepicker__day--keyboard-selected {
      background-color: #ffce3a;
      color: black;
    }
    .react-datepicker-wrapper,
    .react-datepicker__input-container {
      display: block;
      width: 100%;
    }
    .react-datepicker__input-container input {
      width: 100%;
      padding: 0.875rem 2.5rem 0.875rem 1rem;
      border-radius: 9999px;
      border: 1px solid ${fieldErrors.dob ? "#ef4444" : "#4b5563"};
      background-color: #1a1a1a;
      color: white;
      outline: none;
      transition: all 0.2s;
      height: 48px;
    }
    .react-datepicker__input-container input:focus {
      border-color: transparent;
      box-shadow: 0 0 0 2px ${fieldErrors.dob ? "#ef4444" : "#ffce3a"};
    }
  `;

  return (
    <div className="space-y-6">
      <style>{datePickerCustomStyles}</style>

      {/* Form fields in two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className={getBorderClass("fullName")}
          />
        </div>

        {/* Email ID */}
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleInputChange}
            className={getBorderClass("email")}
          />
        </div>

        {/* Contact Number */}
        <div>
          <Input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className={getBorderClass("contactNumber")}
          />
        </div>

        {/* Date of Birth - Calendar Input */}
        <div>
          <div className="relative w-full">
            <DatePicker
              selected={formData.dob instanceof Date ? formData.dob : null}
              onChange={handleDateChange}
              placeholderText="Date of Birth"
              className={`w-full pr-10 pl-4 py-3.5 rounded-full border ${getBorderClass(
                "dob"
              )} bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
              showYearDropdown
              dropdownMode="select"
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <IoCalendarOutline size={20} />
            </div>
          </div>
        </div>

        {/* Gender */}
        <div>
          <div className="relative">
            <select
              name="gender"
              className={`w-full pr-10 pl-4 py-3.5 rounded-full border ${getBorderClass(
                "gender"
              )} bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 appearance-none`}
              value={formData.gender}
              onChange={(e) => updateFormData({ gender: e.target.value })}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
        </div>

        {/* Languages Known */}
        <div>
          <div className="relative">
            <select
              name="languages"
              className={`w-full pr-10 pl-4 py-3.5 rounded-full border ${getBorderClass(
                "languages"
              )} bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 appearance-none`}
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  updateFormData({
                    languages: [...formData.languages, value],
                  });
                }
              }}
            >
              <option value="" disabled>
                Languages Known
              </option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>

          {/* Display selected languages */}
          {formData.languages.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full flex items-center"
                >
                  {lang}
                  <button
                    className="ml-1 text-gray-400 hover:text-white"
                    onClick={() => {
                      const newLanguages = [...formData.languages];
                      newLanguages.splice(index, 1);
                      updateFormData({ languages: newLanguages });
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Current Location */}
        <div>
          <div className="relative">
            <Input
              type="text"
              name="currentLocation"
              placeholder="Current Location"
              value={formData.currentLocation}
              onChange={handleInputChange}
              className={getBorderClass("currentLocation")}
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </div>
        </div>

        {/* Preferred Location */}
        <div>
          <div className="relative">
            <select
              name="preferredLocation"
              className={`w-full pr-10 pl-4 py-3.5 rounded-full border ${getBorderClass(
                "preferredLocation"
              )} bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 appearance-none`}
              value={formData.preferredLocation}
              onChange={(e) =>
                updateFormData({ preferredLocation: e.target.value })
              }
            >
              <option value="" disabled>
                Preferred Location
              </option>
              <option value="remote">Remote</option>
              <option value="newyork">New York</option>
              <option value="sanfrancisco">San Francisco</option>
              <option value="london">London</option>
              <option value="tokyo">Tokyo</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <MdKeyboardArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Profile Picture Upload */}
      <div
        className={`w-full bg-[#111] border-2 border-dashed ${
          fieldErrors.profilePicture ? "border-red-500" : "border-gray-800"
        } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-gray-400 mb-4 flex flex-col items-center">
          <FiUpload className="text-2xl mb-2" />
          <div className="text-center">
            <p>Profile Picture (upload: Jpeg, Png)</p>
            {formData.profilePicture && (
              <p className="text-sm text-gray-300 mt-2">
                {formData.profilePicture.name}
              </p>
            )}
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {/* Bio */}
      <div>
        <textarea
          name="bio"
          placeholder="Short Bio (Textarea, max 300 characters)"
          value={formData.bio}
          onChange={handleInputChange}
          maxLength={300}
          className={`w-full px-4 py-4 rounded-lg border ${getBorderClass(
            "bio"
          )} bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
          rows={4}
        ></textarea>
        <div className="text-right text-xs text-gray-500 mt-1">
          {formData.bio.length}/300 characters
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
