import React from "react";
import { Input } from "../../../../shared/components/ui";
import { FiUpload, FiLink } from "react-icons/fi";
import type { ProjectFormData } from "../../types";

interface ProjectsFormProps {
  formData: ProjectFormData;
  updateFormData: (data: Partial<ProjectFormData>) => void;
  fieldErrors?: Record<string, boolean>;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({
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
        {/* Project Name */}
        <div>
          <Input
            type="text"
            name="projectName"
            placeholder="Projects Name"
            value={formData.projectName}
            onChange={handleInputChange}
            className={getBorderClass("projectName")}
          />
        </div>

        {/* Tools Used */}
        <div>
          <Input
            type="text"
            name="toolsUsed"
            placeholder="Tools Used"
            value={formData.toolsUsed}
            onChange={handleInputChange}
            className={getBorderClass("toolsUsed")}
          />
        </div>

        {/* Outcome */}
        <div>
          <Input
            type="text"
            name="outcome"
            placeholder="Outcome"
            value={formData.outcome}
            onChange={handleInputChange}
            className={getBorderClass("outcome")}
          />
        </div>

        {/* Project Link */}
        <div className="relative">
          <Input
            type="text"
            name="projectLink"
            placeholder="Project Link"
            value={formData.projectLink}
            onChange={handleInputChange}
            className={getBorderClass("projectLink")}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiLink />
          </div>
        </div>

        {/* Institution */}
        <div>
          <Input
            type="text"
            name="institution"
            placeholder="Institution"
            value={formData.institution}
            onChange={handleInputChange}
            className={getBorderClass("institution")}
          />
        </div>

        {/* Duration */}
        <div>
          <Input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleInputChange}
            className={getBorderClass("duration")}
          />
        </div>

        {/* Key Projects */}
        <div>
          <Input
            type="text"
            name="keyProjects"
            placeholder="Key Projects"
            value={formData.keyProjects}
            onChange={handleInputChange}
            className={getBorderClass("keyProjects")}
          />
        </div>

        {/* Achievements */}
        <div>
          <Input
            type="text"
            name="achievements"
            placeholder="Achievements"
            value={formData.achievements}
            onChange={handleInputChange}
            className={getBorderClass("achievements")}
          />
        </div>
      </div>

      {/* Upload Certifications */}
      <div className="mt-6">
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.certifications ? "border-red-500" : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>Upload Certifications (Optional)</p>
              {formData.certifications && (
                <p className="text-sm text-gray-300 mt-2">
                  {formData.certifications.name}
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, "certifications")}
            />
          </label>
        </div>
      </div>

      {/* Social profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* LinkedIn Profile */}
        <div className="relative">
          <Input
            type="text"
            name="linkedinProfile"
            placeholder="LinkedIn Profile"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
            className={getBorderClass("linkedinProfile")}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiLink />
          </div>
        </div>

        {/* Portfolio Links */}
        <div className="relative">
          <Input
            type="text"
            name="portfolioLinks"
            placeholder="Portfolio Links"
            value={formData.portfolioLinks}
            onChange={handleInputChange}
            className={getBorderClass("portfolioLinks")}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FiLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;
