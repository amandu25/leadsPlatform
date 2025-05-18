// Form step types
export type FormStep = "personal" | "employ" | "projects" | "qualifications";

// Personal info form data interface
export interface PersonalFormData {
  fullName: string;
  email: string;
  contactNumber: string;
  dob: string | Date;
  gender: string;
  languages: string[];
  currentLocation: string;
  preferredLocation: string;
  profilePicture: File | null;
  bio: string;
}

// Employee details form data interface
export interface EmployeeFormData {
  currentOrganization: string;
  currentDesignation: string;
  industry: string;
  department: string;
  preferredRoles: string;
  skills: string;
  totalYearsExperience: string;
  jobType: string;
  currentCompensation: string;
  expectedCompensation: string;
  cv: File | null;
  coverLetter: File | null;
  videoIntroduction: File | null;
  audioIntroduction: File | null;
}
