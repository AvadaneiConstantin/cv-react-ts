/**
 * CV Types - TypeScript definitions for CV data
 * Rol: Definește tipurile de date pentru toate componentele CV
 * Importanță: Type safety pentru profil, experiență, skills, educație, contact
 */

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  photo: string;
  location?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  name: string;
  technologies: string[];
}

export interface KeySkill {
  title: string;
  desc: string;
  color: string;
}

export interface SoftSkill {
  title: string;
  desc: string;
  color: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Language {
  code: string;
  name: string;
  level: string;
}

export interface CVData {
  profile: ProfileData;
  skills: {
    main: SkillItem[];
    categories: SkillCategory[];
    keySkills: KeySkill[];
    softSkills: SoftSkill[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  languages: Language[];
}
