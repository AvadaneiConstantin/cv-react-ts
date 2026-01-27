/**
 * ProjectDock Component - Projects list sidebar
 * Rol: Afișează lista completă de proiecte în sidebar-ul stânga
 * Importanță: Navigare principală între proiecte, desktop-only
 *
 * ADĂUGAT: Componentă nouă modularizată din components/left/ProjectDock.tsx
 * ȘTERS: Cod duplicat din components/left/ProjectDock.tsx
 */
import { PROJECTS_DATA } from "./data";
import { ProjectCard } from "./ProjectCard";

export const ProjectDock = () => {
  return (
    <aside className="w-64 border-r border-slate-800/50 hidden lg:flex flex-col mt-8 pt-4 mb-8 h-[calc(100vh-65px)] overflow-hidden">
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 custom-scroll">
        {/* SECTION: PROJECTS VAULT */}
        <div className="flex items-center justify-between mb-4 px-1 sticky top-0 bg-slate-950/50 backdrop-blur-sm z-10 py-1">
          <span className="terminal-text text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            Projects_Vault
          </span>
          <span className="text-[9px] text-slate-600 font-mono">
            0{PROJECTS_DATA.length}
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} variant="desktop" />
          ))}
        </div>
      </div>
    </aside>
  );
};
