import { useState, useEffect, useRef } from "react";
import type {
  FormStep,
  PersonalFormData,
  EmployeeFormData,
  ProjectFormData,
  QualificationFormData,
} from "../types/profile";

interface UseProfileFormReturn {
  activeTab: FormStep;
  formCompletion: number;
  profileImageUrl: string;
  formData: PersonalFormData;
  employeeFormData: EmployeeFormData;
  projectFormData: ProjectFormData;
  qualificationFormData: QualificationFormData;
  personalFieldErrors: Record<string, boolean>;
  employeeFieldErrors: Record<string, boolean>;
  projectFieldErrors: Record<string, boolean>;
  qualificationFieldErrors: Record<string, boolean>;
  showInvalidFormMessage: boolean;
  showCompletion: boolean;
  handleTabChange: (tab: FormStep) => void;
  handleNext: () => void;
  updateFormData: (newData: Partial<PersonalFormData>) => void;
  updateEmployeeFormData: (newData: Partial<EmployeeFormData>) => void;
  updateProjectFormData: (newData: Partial<ProjectFormData>) => void;
  updateQualificationFormData: (
    newData: Partial<QualificationFormData>
  ) => void;
  handleProfileImageChange: (file: File) => void;
  isCurrentSectionComplete: () => boolean;
}

export function useProfileForm(): UseProfileFormReturn {
  const [activeTab, setActiveTab] = useState<FormStep>("personal");
  const [formCompletion, setFormCompletion] = useState<number>(25);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    "https://randomuser.me/api/portraits/men/72.jpg"
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
    jobSearchStatus: "actively-looking",
    cv: null,
    coverLetter: null,
    videoIntroduction: null,
    audioIntroduction: null,
  });

  // Project form data
  const [projectFormData, setProjectFormData] = useState<ProjectFormData>({
    projectName: "",
    toolsUsed: "",
    outcome: "",
    projectLink: "",
    institution: "",
    duration: "",
    keyProjects: "",
    achievements: "",
    certifications: null,
    linkedinProfile: "",
    portfolioLinks: "",
  });

  // Qualification form data
  const [qualificationFormData, setQualificationFormData] =
    useState<QualificationFormData>({
      degree: "",
      institution: "",
      fieldOfStudy: "",
      graduationYear: "",
      gpa: "",
      certifications: "",
      skills: "",
      languages: "",
      awards: "",
      publications: "",
      documents: null,
    });

  // Field-specific error tracking
  const [personalFieldErrors, setPersonalFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [employeeFieldErrors, setEmployeeFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [projectFieldErrors, setProjectFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [qualificationFieldErrors, setQualificationFieldErrors] = useState<
    Record<string, boolean>
  >({});
  const [showInvalidFormMessage, setShowInvalidFormMessage] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const errorTimeoutRef = useRef<number | null>(null);

  // Clear error message after 4 seconds
  useEffect(() => {
    if (showInvalidFormMessage) {
      // Clear any existing timeout
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }

      // Set new timeout
      errorTimeoutRef.current = setTimeout(() => {
        setShowInvalidFormMessage(false);
      }, 4000); // 4 seconds
    }

    // Cleanup on unmount or when dependencies change
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, [showInvalidFormMessage]);

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
    } else if (activeTab === "projects") {
      return !(
        !projectFormData.projectName ||
        !projectFormData.toolsUsed ||
        !projectFormData.outcome ||
        !projectFormData.institution ||
        !projectFormData.duration
      );
    } else if (activeTab === "qualifications") {
      return !(
        !qualificationFormData.degree ||
        !qualificationFormData.institution ||
        !qualificationFormData.fieldOfStudy ||
        !qualificationFormData.graduationYear
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
    } else if (activeTab === "projects") {
      const errors: Record<string, boolean> = {};

      if (!projectFormData.projectName) errors.projectName = true;
      if (!projectFormData.toolsUsed) errors.toolsUsed = true;
      if (!projectFormData.outcome) errors.outcome = true;
      if (!projectFormData.institution) errors.institution = true;
      if (!projectFormData.duration) errors.duration = true;

      setProjectFieldErrors(errors);
    } else if (activeTab === "qualifications") {
      const errors: Record<string, boolean> = {};

      if (!qualificationFormData.degree) errors.degree = true;
      if (!qualificationFormData.institution) errors.institution = true;
      if (!qualificationFormData.fieldOfStudy) errors.fieldOfStudy = true;
      if (!qualificationFormData.graduationYear) errors.graduationYear = true;

      setQualificationFieldErrors(errors);
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
      } else if (activeTab === "qualifications") {
        // Show completion page when qualifications form is completed
        setShowCompletion(true);
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

  const updateProjectFormData = (newData: Partial<ProjectFormData>) => {
    setProjectFormData((prev) => ({ ...prev, ...newData }));

    if (Object.keys(newData).some((key) => projectFieldErrors[key])) {
      const updatedErrors = { ...projectFieldErrors };
      Object.keys(newData).forEach((key) => {
        delete updatedErrors[key];
      });
      setProjectFieldErrors(updatedErrors);

      if (Object.keys(updatedErrors).length === 0) {
        setShowInvalidFormMessage(false);
      }
    }
  };

  const updateQualificationFormData = (
    newData: Partial<QualificationFormData>
  ) => {
    setQualificationFormData((prev) => ({ ...prev, ...newData }));

    if (Object.keys(newData).some((key) => qualificationFieldErrors[key])) {
      const updatedErrors = { ...qualificationFieldErrors };
      Object.keys(newData).forEach((key) => {
        delete updatedErrors[key];
      });
      setQualificationFieldErrors(updatedErrors);

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
  };
}
