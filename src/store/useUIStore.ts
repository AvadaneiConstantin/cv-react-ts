/**
 * useUIStore - Zustand global state management store
 *
 * Key Bindings:
 * - create: Zustand store creation function
 * - ProjectData interface: Type definition for project objects
 * - Global state: Single source of truth for UI state
 *
 * Functionality:
 * - Centralized state management (no prop drilling)
 * - Project selection and hover state management
 * - Mobile detection and responsive state
 * - Terminal and system status tracking
 * - Persistent state across component re-renders
 * - Optimized selectors for performance
 */
import { create } from "zustand";
import type { ProjectData } from "../features/projects/types";

interface UIState {
  // Navigation & View State
  activeSection: "BIO" | "EXPERIENCE" | "PROJECTS";
  setActiveSection: (section: "BIO" | "EXPERIENCE" | "PROJECTS") => void;

  // Project Telemetry State
  hoveredProject: ProjectData | null;
  setHoveredProject: (project: ProjectData | null) => void;

  // Project Details Toggle State
  isProjectDetailsOpen: boolean;
  selectedProject: ProjectData | null;
  setSelectedProject: (project: ProjectData | null) => void;
  toggleProjectDetails: () => void;

  // Mobile/Responsive State
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  showMobileProjects: boolean;
  setShowMobileProjects: (show: boolean) => void;

  // Terminal/System State
  isTerminalOpen: boolean;
  toggleTerminal: () => void;
  systemStatus: "READY" | "BUSY" | "ERROR";
}

export const useUIStore = create<UIState>((set) => ({
  // Defaults
  activeSection: "BIO",
  hoveredProject: null,
  isProjectDetailsOpen: false,
  selectedProject: null,
  isMobile: false,
  showMobileProjects: false,
  isTerminalOpen: false,
  systemStatus: "READY",

  // Actions
  setActiveSection: (section) => set({ activeSection: section }),

  setHoveredProject: (project) =>
    set({
      hoveredProject: project,
      systemStatus: project ? "BUSY" : "READY",
    }),

  setSelectedProject: (project) =>
    set({
      selectedProject: project,
      isProjectDetailsOpen: !!project,
      systemStatus: project ? "BUSY" : "READY",
    }),

  toggleProjectDetails: () =>
    set((state) => ({
      isProjectDetailsOpen: !state.isProjectDetailsOpen,
      selectedProject: !state.isProjectDetailsOpen
        ? state.selectedProject
        : null,
      systemStatus: !state.isProjectDetailsOpen ? "BUSY" : "READY",
    })),

  setIsMobile: (isMobile) => set({ isMobile }),

  setShowMobileProjects: (show) => set({ showMobileProjects: show }),

  toggleTerminal: () =>
    set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
}));
