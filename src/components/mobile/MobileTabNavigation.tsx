/**
 * MobileTabNavigation Component - Bottom navigation for mobile devices
 *
 * Key Dependencies:
 * - useUIStore: Global state management (mobile projects view state)
 *
 * Core Functionality:
 * - Fixed bottom navigation bar for mobile devices only
 * - Two tabs: PROFILE (CV view) and PROJECTS (projects list)
 * - Visual indicators for active tab with cyan accent
 * - Handles project details cleanup when switching tabs
 * - Responsive design (hidden on desktop)
 */
import { User, Briefcase } from "lucide-react";
import { useUIStore } from "../../store/useUIStore";

export const MobileTabNavigation = () => {
  const { showMobileProjects, setShowMobileProjects, setSelectedProject } =
    useUIStore();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30">
      <div className="flex items-center h-10">
        {/* PROFILE Tab */}
        <button
          onClick={() => {
            setShowMobileProjects(false);
            setSelectedProject(null); // Close project details when switching to profile
          }}
          // Am adăugat 'relative' aici pentru a ancora linia de sus
          className={`relative flex items-center justify-center gap-2 flex-1 h-full transition-all duration-300 border-r border-slate-800/30 ${
            !showMobileProjects
              ? "text-cyan-400 bg-cyan-400/5"
              : "text-slate-500"
          }`}
        >
          <User
            className={`w-4 h-4 ${!showMobileProjects ? "animate-pulse" : ""}`}
          />
          <span className="text-[14px] font-bold tracking-tighter uppercase whitespace-nowrap font-mono">
            CV <span className="opacity-30 mx-0.5">//</span> PROFILE
          </span>

          {/* Linia activă - limitată acum la lățimea butonului */}
          {!showMobileProjects && (
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_12px_#22d3ee] z-10" />
          )}
        </button>

        {/* PROJECTS Tab */}
        <button
          onClick={() => setShowMobileProjects(true)}
          className={`relative flex items-center justify-center gap-2 flex-1 h-full transition-all duration-300 ${
            showMobileProjects
              ? "text-cyan-400 bg-cyan-400/5"
              : "text-slate-500"
          }`}
        >
          <Briefcase
            className={`w-4 h-4 ${showMobileProjects ? "animate-pulse" : ""}`}
          />
          <span className="text-[14px] font-bold tracking-tighter uppercase whitespace-nowrap font-mono">
            Projects <span className="opacity-30 mx-0.5">//</span> VAULT
          </span>

          {/* Linia activă - limitată acum la lățimea butonului */}
          {showMobileProjects && (
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_12px_#22d3ee] z-10" />
          )}
        </button>
      </div>
    </div>
  );
};
