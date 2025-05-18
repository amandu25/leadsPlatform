import { useState } from "react";
import type {
  FormStep,
  PersonalFormData,
  EmployeeFormData,
} from "../types/profile";

interface UseProfileFormReturn {
  activeTab: FormStep;
  formCompletion: number;
  profileImageUrl: string;
  formData: PersonalFormData;
  employeeFormData: EmployeeFormData;
  personalFieldErrors: Record<string, boolean>;
  employeeFieldErrors: Record<string, boolean>;
  showInvalidFormMessage: boolean;
  handleTabChange: (tab: FormStep) => void;
  handleNext: () => void;
  updateFormData: (newData: Partial<PersonalFormData>) => void;
  updateEmployeeFormData: (newData: Partial<EmployeeFormData>) => void;
  handleProfileImageChange: (file: File) => void;
}

export function useProfileForm(): UseProfileFormReturn {
  const [activeTab, setActiveTab] = useState<FormStep>("personal");
  const [formCompletion, setFormCompletion] = useState<number>(25);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    "https://via.placeholder.com/180"
  );

  // Personal Info form data
  const [formData, setFormData] = useState<PersonalFormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    dob: "",
    gender: "",
    languages: [],
    currentLocation: "",
    preferredLocation: "",
    profilePicture: null,
    bio: "",
  });

  // Employee Details form data
  const [employeeFormData, setEmployeeFormData] = useState<EmployeeFormData>({
    currentOrganization: "",
    currentDesignation: "",
    industry: "",
    department: "",
    preferredRoles: "",
    skills: "",
    totalYearsExperience: "",
    jobType: "",
    currentCompensation: "",
    expectedCompensation: "",
    cv: null,
    coverLetter: null,
    videoIntroduction: null,
    audioIntroduction: null,
  });

  // Field-specific error tracking
  const [personalFieldErrors, setPersonalFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [employeeFieldErrors, setEmployeeFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [showInvalidFormMessage, setShowInvalidFormMessage] = useState(false);

  const handleProfileImageChange = (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);
    updateFormData({ profilePicture: file });
  };

  const validateCurrentSection = (): boolean => {
    if (activeTab === "personal") {
      return !(
        !formData.fullName ||
        !formData.email ||
        !formData.contactNumber ||
        !formData.dob ||
        !formData.gender ||
        formData.languages.length === 0 ||
        !formData.currentLocation ||
        !formData.preferredLocation ||
        !formData.bio
      );
    } else if (activeTab === "employ") {
      return !(
        !employeeFormData.currentOrganization ||
        !employeeFormData.currentDesignation ||
        !employeeFormData.industry ||
        !employeeFormData.department ||
        !employeeFormData.preferredRoles ||
        !employeeFormData.skills ||
        !employeeFormData.totalYearsExperience ||
        !employeeFormData.jobType ||
        !employeeFormData.currentCompensation ||
        !employeeFormData.expectedCompensation ||
        !employeeFormData.cv
      );
    }
    return true;
  };

  const isCurrentSectionComplete = (): boolean => {
    return validateCurrentSection();
  };

  const markIncompleteFields = () => {
    if (activeTab === "personal") {
      const errors: Record<string, boolean> = {};

      if (!formData.fullName) errors.fullName = true;
      if (!formData.email) errors.email = true;
      if (!formData.contactNumber) errors.contactNumber = true;
      if (!formData.dob) errors.dob = true;
      if (!formData.gender) errors.gender = true;
      if (formData.languages.length === 0) errors.languages = true;
      if (!formData.currentLocation) errors.currentLocation = true;
      if (!formData.preferredLocation) errors.preferredLocation = true;
      if (!formData.bio) errors.bio = true;

      setPersonalFieldErrors(errors);
    } else if (activeTab === "employ") {
      const errors: Record<string, boolean> = {};

      if (!employeeFormData.currentOrganization)
        errors.currentOrganization = true;
      if (!employeeFormData.currentDesignation)
        errors.currentDesignation = true;
      if (!employeeFormData.industry) errors.industry = true;
      if (!employeeFormData.department) errors.department = true;
      if (!employeeFormData.preferredRoles) errors.preferredRoles = true;
      if (!employeeFormData.skills) errors.skills = true;
      if (!employeeFormData.totalYearsExperience)
        errors.totalYearsExperience = true;
      if (!employeeFormData.jobType) errors.jobType = true;
      if (!employeeFormData.currentCompensation)
        errors.currentCompensation = true;
      if (!employeeFormData.expectedCompensation)
        errors.expectedCompensation = true;
      if (!employeeFormData.cv) errors.cv = true;

      setEmployeeFieldErrors(errors);
    }
  };

  const handleTabChange = (tab: FormStep) => {
    const steps: FormStep[] = [
      "personal",
      "employ",
      "projects",
      "qualifications",
    ];
    const currentIndex = steps.indexOf(activeTab);
    const targetIndex = steps.indexOf(tab);

    if (targetIndex <= currentIndex) {
      setActiveTab(tab);
      setShowInvalidFormMessage(false);
    } else if (isCurrentSectionComplete()) {
      setActiveTab(tab);
      setShowInvalidFormMessage(false);
    } else {
      markIncompleteFields();
      setShowInvalidFormMessage(true);
    }
  };

  const handleNext = () => {
    if (isCurrentSectionComplete()) {
      const steps: FormStep[] = [
        "personal",
        "employ",
        "projects",
        "qualifications",
      ];
      const currentIndex = steps.indexOf(activeTab);

      if (currentIndex < steps.length - 1) {
        const nextStep = steps[currentIndex + 1];
        setActiveTab(nextStep);
        setFormCompletion((currentIndex + 2) * 25);
        setShowInvalidFormMessage(false);
      }
    } else {
      markIncompleteFields();
      setShowInvalidFormMessage(true);
    }
  };

  const updateFormData = (newData: Partial<PersonalFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));

    if (Object.keys(newData).some((key) => personalFieldErrors[key])) {
      const updatedErrors = { ...personalFieldErrors };
      Object.keys(newData).forEach((key) => {
        delete updatedErrors[key];
      });
      setPersonalFieldErrors(updatedErrors);

      if (Object.keys(updatedErrors).length === 0) {
        setShowInvalidFormMessage(false);
      }
    }
  };

  const updateEmployeeFormData = (newData: Partial<EmployeeFormData>) => {
    setEmployeeFormData((prev) => ({ ...prev, ...newData }));

    if (Object.keys(newData).some((key) => employeeFieldErrors[key])) {
      const updatedErrors = { ...employeeFieldErrors };
      Object.keys(newData).forEach((key) => {
        delete updatedErrors[key];
      });
      setEmployeeFieldErrors(updatedErrors);

      if (Object.keys(updatedErrors).length === 0) {
        setShowInvalidFormMessage(false);
      }
    }
  };

  return {
    activeTab,
    formCompletion,
    profileImageUrl,
    formData,
    employeeFormData,
    personalFieldErrors,
    employeeFieldErrors,
    showInvalidFormMessage,
    handleTabChange,
    handleNext,
    updateFormData,
    updateEmployeeFormData,
    handleProfileImageChange,
  };
}
