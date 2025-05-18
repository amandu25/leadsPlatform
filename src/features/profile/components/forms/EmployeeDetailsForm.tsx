import React from "react";
import { Input } from "../../../../shared/components/ui";
import { FiUpload } from "react-icons/fi";
import type { EmployeeFormData } from "../../types";

interface EmployeeDetailsFormProps {
  formData: EmployeeFormData;
  updateFormData: (data: Partial<EmployeeFormData>) => void;
  fieldErrors?: Record<string, boolean>;
}

const EmployeeDetailsForm: React.FC<EmployeeDetailsFormProps> = ({
  formData,
  updateFormData,
  fieldErrors = {},
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      updateFormData({ [fieldName]: e.target.files[0] });
    }
  };

  // Helper function to determine border color based on error state
  const getBorderClass = (fieldName: string) => {
    return fieldErrors[fieldName]
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-700 focus:ring-[#ffce3a]";
  };

  return (
    <div className="space-y-6">
      {/* Form fields in two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Organization */}
        <div>
          <Input
            type="text"
            name="currentOrganization"
            placeholder="Current Organization"
            value={formData.currentOrganization}
            onChange={handleInputChange}
            className={getBorderClass("currentOrganization")}
          />
        </div>

        {/* Current Designation */}
        <div>
          <Input
            type="text"
            name="currentDesignation"
            placeholder="Current Designation"
            value={formData.currentDesignation}
            onChange={handleInputChange}
            className={getBorderClass("currentDesignation")}
          />
        </div>

        {/* Industry */}
        <div>
          <Input
            type="text"
            name="industry"
            placeholder="Industry"
            value={formData.industry}
            onChange={handleInputChange}
            className={getBorderClass("industry")}
          />
        </div>

        {/* Department */}
        <div>
          <Input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleInputChange}
            className={getBorderClass("department")}
          />
        </div>

        {/* Preferred roles */}
        <div>
          <Input
            type="text"
            name="preferredRoles"
            placeholder="Preferred roles"
            value={formData.preferredRoles}
            onChange={handleInputChange}
            className={getBorderClass("preferredRoles")}
          />
        </div>

        {/* Skills */}
        <div>
          <Input
            type="text"
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleInputChange}
            className={getBorderClass("skills")}
          />
        </div>

        {/* Total years of work experience */}
        <div>
          <Input
            type="text"
            name="totalYearsExperience"
            placeholder="Total years of work experience"
            value={formData.totalYearsExperience}
            onChange={handleInputChange}
            className={getBorderClass("totalYearsExperience")}
          />
        </div>

        {/* Job type */}
        <div>
          <Input
            type="text"
            name="jobType"
            placeholder="Job type"
            value={formData.jobType}
            onChange={handleInputChange}
            className={getBorderClass("jobType")}
          />
        </div>

        {/* Current compensation */}
        <div>
          <Input
            type="text"
            name="currentCompensation"
            placeholder="Current compensation"
            value={formData.currentCompensation}
            onChange={handleInputChange}
            className={getBorderClass("currentCompensation")}
          />
        </div>

        {/* Expected compensation */}
        <div>
          <Input
            type="text"
            name="expectedCompensation"
            placeholder="Expected compensation"
            value={formData.expectedCompensation}
            onChange={handleInputChange}
            className={getBorderClass("expectedCompensation")}
          />
        </div>
      </div>

      {/* Upload fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* CV Upload */}
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.cv ? "border-red-500" : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>CV (PDF/Doc)</p>
              {formData.cv && (
                <p className="text-sm text-gray-300 mt-2">{formData.cv.name}</p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "cv")}
            />
          </label>
        </div>

        {/* Cover Letter Upload */}
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.coverLetter ? "border-red-500" : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>Cover Letter (Optional)</p>
              {formData.coverLetter && (
                <p className="text-sm text-gray-300 mt-2">
                  {formData.coverLetter.name}
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, "coverLetter")}
            />
          </label>
        </div>

        {/* Video Introduction Upload */}
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.videoIntroduction
                ? "border-red-500"
                : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>Video Introduction (upload)</p>
              {formData.videoIntroduction && (
                <p className="text-sm text-gray-300 mt-2">
                  {formData.videoIntroduction.name}
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept="video/*"
              onChange={(e) => handleFileChange(e, "videoIntroduction")}
            />
          </label>
        </div>

        {/* Audio Introduction Upload */}
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.audioIntroduction
                ? "border-red-500"
                : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>Audio Introduction (Optional)</p>
              {formData.audioIntroduction && (
                <p className="text-sm text-gray-300 mt-2">
                  {formData.audioIntroduction.name}
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept="audio/*"
              onChange={(e) => handleFileChange(e, "audioIntroduction")}
            />
          </label>
        </div>
      </div>

      {/* Job Search Status Toggle */}
      <div className="mt-8">
        <div className="text-white mb-4 font-medium">Job Search Status</div>
        <div className="flex w-full bg-[#111] rounded-lg p-1 border border-gray-800">
          <button
            type="button"
            onClick={() =>
              updateFormData({ jobSearchStatus: "actively-looking" })
            }
            className={`flex-1 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
              formData.jobSearchStatus === "actively-looking"
                ? "bg-[#ffce3a] text-black"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            Actively Looking
          </button>
          <button
            type="button"
            onClick={() =>
              updateFormData({ jobSearchStatus: "casually-exploring" })
            }
            className={`flex-1 py-3 rounded-md font-medium text-sm transition-all duration-200 ${
              formData.jobSearchStatus === "casually-exploring"
                ? "bg-[#ffce3a] text-black"
                : "bg-transparent text-gray-400 hover:text-white"
            }`}
          >
            Casually Exploring
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsForm;
