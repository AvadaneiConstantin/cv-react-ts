/**
 * ProjectCard Component - Reusable project card for desktop and mobile
 *
 * Key Dependencies:
 * - useUIStore: Global state management (project selection, hover state)
 * - ProjectData interface: Type-safe project information
 *
 * Core Functionality:
 * - Displays project information in card format for both desktop and mobile
 * - Handles project selection for detailed view
 * - Opens external project site in new tab
 * - Shows active state with visual indicators
 * - Responsive design with different behaviors per variant
 */
import { BookOpen, Book, ArrowUpRight } from "lucide-react";
import { useUIStore } from "../../store/useUIStore";
import type { ProjectData } from "./types";

interface Props {
  project: ProjectData;
  variant: "desktop" | "mobile";
}

export const ProjectCard = ({ project, variant }: Props) => {
  const setSelectedProject = useUIStore((state) => state.setSelectedProject);
  const selectedProject = useUIStore((state) => state.selectedProject);
  const isDetailsOpen = useUIStore((state) => state.isProjectDetailsOpen);
  const setHovered = useUIStore((state) => state.setHoveredProject);

  const isActive = selectedProject?.id === project.id && isDetailsOpen;

  const handleOpenSite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.url && project.url !== "#") {
      window.open(project.url, "_blank", "noopener,noreferrer");
    }
  };

  const toggleDetails = () => {
    if (isActive) setSelectedProject(null);
    else setSelectedProject(project);
  };

  return (
    <div
      className={`group relative transition-all duration-300 border rounded-sm overflow-hidden ${
        isActive
          ? "border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.05)]"
          : "border-slate-800 hover:border-slate-700 bg-slate-900/40"
      }`}
    >
      {/* Active Side Indicator */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
      )}

      <div className="flex items-stretch h-11">
        {/* LEFT SECTION: Click for External Site - HOVER TRIGGER */}
        <button
          onClick={handleOpenSite}
          onMouseEnter={() => variant === "desktop" && setHovered(project)}
          onMouseLeave={() => variant === "desktop" && setHovered(null)}
          className="flex-[4] flex items-center gap-3 px-3 cursor-pointer hover:bg-slate-800/50 transition-colors min-w-0 text-left"
          title="Open Project Site"
        >
          <div className="flex-shrink-0">
            <ArrowUpRight
              size={14}
              className={`${
                isActive ? "text-cyan-400" : "text-slate-500"
              } group-hover:text-white transition-colors`}
            />
          </div>

          <div className="flex flex-col min-w-0">
            <h4
              className={`text-[11px] mt-2 font-bold truncate tracking-tight uppercase ${
                isActive ? "text-white" : "text-slate-300"
              } group-hover:text-cyan-400 transition-colors`}
            >
              {project.name}
            </h4>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tighter truncate">
              {project.tech}
            </span>
          </div>
        </button>

        {/* SUBTLE SEPARATOR */}
        <div className="w-[1px] bg-slate-800/50 my-2" />

        {/* RIGHT SECTION: Details Button (Book) - NO HOVER */}
        <button
          onClick={toggleDetails}
          title="Project Details"
          className={`flex-1 flex items-center justify-center transition-all ${
            isActive
              ? "text-cyan-400 bg-cyan-400/10"
              : "text-slate-500 hover:text-cyan-400 hover:bg-slate-800"
          }`}
        >
          {isActive ? (
            <BookOpen className="w-4 h-4" />
          ) : (
            <Book className="w-3.5 h-3.5" />
          )}
        </button>
      </div>
    </div>
  );
};
