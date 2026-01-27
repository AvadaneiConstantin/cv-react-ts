import { useEffect } from "react";
import { Shell } from "./components/layout/Shell";
import { ProjectDock } from "./features/projects/ProjectDock";
import { CVView } from "./features/cv/CVView";
import { ProjectDetails } from "./features/projects/ProjectDetails";
import { ProjectInspector } from "./features/projects/projectInspector/ProjectInspector";
import { MobileTabNavigation } from "./components/mobile/MobileTabNavigation";
import { MobileProjectsView } from "./components/mobile/MobileProjectsView";
import { useUIStore } from "./store/useUIStore";
import { useIsMobile } from "./hooks";

function App() {
  const setIsMobile = useUIStore((state) => state.setIsMobile);
  const isMobile = useIsMobile();

  // Update global mobile state when hook changes
  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  const selectedProject = useUIStore((state) => state.selectedProject);
  const isProjectDetailsOpen = useUIStore(
    (state) => state.isProjectDetailsOpen,
  );
  const showMobileProjects = useUIStore((state) => state.showMobileProjects);

  // Main content rendering
  const renderMainContent = () => {
    if (selectedProject && isProjectDetailsOpen) {
      return (
        <section className="flex-1 overflow-y-auto custom-scroll p-6 md:p-12 bg-slate-950/20 pt-16">
          <ProjectDetails project={selectedProject} />
        </section>
      );
    }

    // Mobile: Show projects view when projects tab is active
    if (isMobile && showMobileProjects) {
      return <MobileProjectsView />;
    }

    // Default: Show CV view
    return (
      <section className="flex-1 overflow-y-auto custom-scroll p-6 md:p-12 bg-slate-950/20 pt-16">
        <CVView />
      </section>
    );
  };

  return (
    <Shell>
      {/* Left Column - Projects Sidebar (Desktop Only) */}
      <ProjectDock />

      {/* Main Content - CV or Project Details */}
      {renderMainContent()}

      {/* Right Column - Project Inspector Panel (Desktop Only) */}
      <ProjectInspector />

      {/* Mobile Tab Navigation */}
      <MobileTabNavigation />
    </Shell>
  );
}

export default App;
