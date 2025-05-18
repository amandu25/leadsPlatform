import React from "react";
import { Input } from "../../../../shared/components/ui";
import { FiUpload } from "react-icons/fi";
import type { QualificationFormData } from "../../types";

interface QualificationsFormProps {
  formData: QualificationFormData;
  updateFormData: (data: Partial<QualificationFormData>) => void;
  fieldErrors?: Record<string, boolean>;
}

const QualificationsForm: React.FC<QualificationsFormProps> = ({
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
        {/* Degree */}
        <div>
          <Input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleInputChange}
            className={getBorderClass("degree")}
          />
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

        {/* Field of Study */}
        <div>
          <Input
            type="text"
            name="fieldOfStudy"
            placeholder="Field of Study"
            value={formData.fieldOfStudy}
            onChange={handleInputChange}
            className={getBorderClass("fieldOfStudy")}
          />
        </div>

        {/* Graduation Year */}
        <div>
          <Input
            type="text"
            name="graduationYear"
            placeholder="Graduation Year"
            value={formData.graduationYear}
            onChange={handleInputChange}
            className={getBorderClass("graduationYear")}
          />
        </div>

        {/* GPA */}
        <div>
          <Input
            type="text"
            name="gpa"
            placeholder="GPA"
            value={formData.gpa}
            onChange={handleInputChange}
            className={getBorderClass("gpa")}
          />
        </div>

        {/* Certifications */}
        <div>
          <Input
            type="text"
            name="certifications"
            placeholder="Certifications"
            value={formData.certifications}
            onChange={handleInputChange}
            className={getBorderClass("certifications")}
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

        {/* Languages */}
        <div>
          <Input
            type="text"
            name="languages"
            placeholder="Languages"
            value={formData.languages}
            onChange={handleInputChange}
            className={getBorderClass("languages")}
          />
        </div>

        {/* Awards */}
        <div>
          <Input
            type="text"
            name="awards"
            placeholder="Awards"
            value={formData.awards}
            onChange={handleInputChange}
            className={getBorderClass("awards")}
          />
        </div>

        {/* Publications */}
        <div>
          <Input
            type="text"
            name="publications"
            placeholder="Publications"
            value={formData.publications}
            onChange={handleInputChange}
            className={getBorderClass("publications")}
          />
        </div>
      </div>

      {/* Upload Documents */}
      <div className="mt-6">
        <div className="relative">
          <label
            className={`block w-full bg-[#111] border-2 border-dashed ${
              fieldErrors.documents ? "border-red-500" : "border-gray-800"
            } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer`}
          >
            <FiUpload className="text-2xl mb-2 text-gray-400" />
            <div className="text-center text-gray-400">
              <p>Upload Documents (Optional)</p>
              {formData.documents && (
                <p className="text-sm text-gray-300 mt-2">
                  {formData.documents.name}
                </p>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, "documents")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default QualificationsForm;
