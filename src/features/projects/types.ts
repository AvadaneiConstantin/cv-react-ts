/**
 * Projects Types - TypeScript definitions for projects
 * Rol: Definește tipurile de date pentru toate componentele de proiecte
 * Importanță: Type safety pentru proiecte, metrics, stack, highlights
 */

export interface ProjectMetrics {
  commits?: number;
  stars?: number;
  forks?: number;
  lines?: string;
  duration?: string;
  performance?: string;
  accessibility?: string;
  components?: number;
  bundleSize?: string;
  users?: string;
  projects?: string;
  uptime?: string;
  // Legacy format for compatibility
  label?: string;
  value?: number;
  unit?: string;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  tools?: string[];
  styling?: string[];
  // Legacy format for compatibility
  stack?: string[];
}

export interface ProjectHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface TechnicalDecision {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ProjectData {
  id: string;
  name: string;
  title: string;
  description: string;
  longDescription?: string;
  status: "STABLE" | "LIVE" | "WORKING";
  category: "web" | "mobile" | "desktop" | "api" | "tool";
  metrics?:
    | ProjectMetrics
    | Array<{
        label: string;
        value: number;
        unit: string;
      }>;
  stack?: TechStack | string[];
  highlights?: ProjectHighlight[];
  technicalDecisions?: TechnicalDecision[];
  images?: {
    preview?: string;
    screenshots?: string[];
  };
  links?: {
    live?: string;
    github?: string;
    demo?: string;
    docs?: string;
  };
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;

  // Legacy properties for compatibility
  tech: string;
  version: string;
  url: string;
  quote?: string;
  challenge?: string;
  coreTech?: string[];
  subtitle: string;
  cvHighlights: string[];
  previewImages: Array<{
    src: string;
    alt: string;
    label: string;
  }>;
  pulseData?: number[];
}
