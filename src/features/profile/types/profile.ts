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
  jobSearchStatus: "actively-looking" | "casually-exploring";
  cv: File | null;
  coverLetter: File | null;
  videoIntroduction: File | null;
  audioIntroduction: File | null;
}

// Project form data interface
export interface ProjectFormData {
  projectName: string;
  toolsUsed: string;
  outcome: string;
  projectLink: string;
  institution: string;
  duration: string;
  keyProjects: string;
  achievements: string;
  certifications: File | null;
  linkedinProfile: string;
  portfolioLinks: string;
}

// Qualification form data interface
export interface QualificationFormData {
  degree: string;
  institution: string;
  fieldOfStudy: string;
  graduationYear: string;
  gpa: string;
  certifications: string;
  skills: string;
  languages: string;
  awards: string;
  publications: string;
  documents: File | null;
}
