import React from "react";
import { DashboardLayout } from "../../../shared/components";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import { EmployeeDetailsForm, ProjectsForm, QualificationsForm } from "./forms";
import ProfileSidebar from "./sidebar/ProfileSidebar";
import FormTabs from "./forms/FormTabs";
import { useProfileForm } from "../hooks/useProfileForm";
import Completion from "./Completion";

const ProfileSetup: React.FC = () => {
  const {
    activeTab,
    formCompletion,
    profileImageUrl,
    formData,
    employeeFormData,
    projectFormData,
    qualificationFormData,
    personalFieldErrors,
    employeeFieldErrors,
    projectFieldErrors,
    qualificationFieldErrors,
    showInvalidFormMessage,
    showCompletion,
    handleTabChange,
    handleNext,
    updateFormData,
    updateEmployeeFormData,
    updateProjectFormData,
    updateQualificationFormData,
    handleProfileImageChange,
    isCurrentSectionComplete,
  } = useProfileForm();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left side - Profile picture with progress */}
          <div className="md:col-span-4">
            <ProfileSidebar
              profileImageUrl={profileImageUrl}
              formCompletion={formCompletion}
              onImageChange={handleProfileImageChange}
            />
          </div>

          {/* Right side - Form tabs and form content */}
          <div className="md:col-span-8">
            {showCompletion ? (
              <Completion />
            ) : (
              <>
                {/* Tabs - Now placed above the form section */}
                <div className="w-full mb-4">
                  <FormTabs
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                  />
                </div>

                {/* Form content in black box */}
                <div className="bg-black rounded-xl p-6">
                  {/* Form incomplete message */}
                  {showInvalidFormMessage && (
                    <div className="mb-4 p-3 bg-red-900/30 border border-red-500 rounded-lg">
                      <p className="text-red-500 font-medium text-sm">
                        Please complete all required fields highlighted in red
                        before proceeding.
                      </p>
                    </div>
                  )}

                  {/* Form content */}
                  <div>
                    {activeTab === "personal" && (
                      <PersonalInfoForm
                        formData={formData}
                        updateFormData={updateFormData}
                        fieldErrors={personalFieldErrors}
                      />
                    )}
                    {activeTab === "employ" && (
                      <EmployeeDetailsForm
                        formData={employeeFormData}
                        updateFormData={updateEmployeeFormData}
                        fieldErrors={employeeFieldErrors}
                      />
                    )}
                    {activeTab === "projects" && (
                      <ProjectsForm
                        formData={projectFormData}
                        updateFormData={updateProjectFormData}
                        fieldErrors={projectFieldErrors}
                      />
                    )}
                    {activeTab === "qualifications" && (
                      <QualificationsForm
                        formData={qualificationFormData}
                        updateFormData={updateQualificationFormData}
                        fieldErrors={qualificationFieldErrors}
                      />
                    )}
                  </div>

                  {/* Next button - Full width */}
                  <div className="mt-8">
                    <button
                      className={`w-full py-3 px-4 rounded-full font-semibold ${
                        isCurrentSectionComplete()
                          ? "bg-[#ffce3a] text-black"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                      onClick={handleNext}
                      disabled={!isCurrentSectionComplete()}
                    >
                      {activeTab === "qualifications" ? "Complete" : "Next"}
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileSetup;
