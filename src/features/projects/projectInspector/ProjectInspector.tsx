/**
 * ProjectInspector Component - Main wrapper for right panel
 *
 * Key Dependencies:
 * - useUIStore: Global state management (hoveredProject, selectedProject, mobile detection)
 * - Conditional rendering: SystemStatus vs ProjectPreview vs ProjectStatus
 *
 * Core Functionality:
 * - Decides what content to display based on hover and selection state
 * - Shows SystemStatus when no project is hovered/selected
 * - Shows ProjectPreview when project is hovered (short preview info)
 * - Shows ProjectStatus when project is selected (full telemetry data)
 * - Responsive design (completely hidden on mobile devices)
 */

import { useUIStore } from "../../../store/useUIStore";
import { SystemStatus } from "./SystemStatus";
import { ProjectPreview } from "./ProjectPreview";
import { ProjectStatus } from "./ProjectStatus";

export const ProjectInspector = () => {
  const hoveredProject = useUIStore((state) => state.hoveredProject);
  const selectedProject = useUIStore((state) => state.selectedProject);
  const isMobile = useUIStore((state) => state.isMobile);

  if (isMobile) return null;

  return (
    <aside className="w-[260px] border-l border-slate-800/50 p-6 hidden xl:block mt-8 pt-10 mb-8 overflow-hidden">
      <div className="mb-8">
        <h2 className="terminal-text text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
          {hoveredProject
            ? "Project_Preview"
            : selectedProject
              ? "Project_Telemetry"
              : "System_Status"}
        </h2>
      </div>

      {hoveredProject ? (
        <ProjectPreview project={hoveredProject} />
      ) : selectedProject ? (
        <ProjectStatus project={selectedProject} />
      ) : (
        <SystemStatus />
      )}
    </aside>
  );
};
