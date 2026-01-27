/**
 * MobileProjectsView Component - Full-screen projects list for mobile
 *
 * Key Dependencies:
 * - PROJECTS_DATA: Complete project information array
 * - ProjectCard: Reusable project card component
 * - useUIStore: Global state management (navigation state)
 *
 * Core Functionality:
 * - Full-screen display of all projects on mobile devices
 * - Header with back button and project count
 * - Scrollable list of project cards
 * - Navigation back to profile view
 * - Mobile-optimized layout and spacing
 */
import { PROJECTS_DATA } from "../../features/projects/data";
import { ProjectCard } from "../../features/projects/ProjectCard";
import { ArrowLeft } from "lucide-react";
import { useUIStore } from "../../store/useUIStore";

export const MobileProjectsView = () => {
  const { setShowMobileProjects } = useUIStore();

  const handleBack = () => {
    setShowMobileProjects(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-16 pb-12">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-lg border-b border-slate-800/50 px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Profile</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="terminal-text text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Projects_Vault
            </span>
            <span className="text-[9px] text-slate-600 font-mono">
              0{PROJECTS_DATA.length}
            </span>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="px-4 py-6">
        <div className="flex flex-col space-y-4">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} variant="mobile" />
          ))}
        </div>
      </div>
    </div>
  );
};
