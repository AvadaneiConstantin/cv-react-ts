/**
 * ProjectDetails Component - Comprehensive project information view
 *
 * Key Bindings:
 * - useUIStore: Global state management (selection, mobile, details)
 * - framer-motion: Smooth page transitions and animations
 * - FullscreenModal: Image gallery with keyboard navigation
 * - ProjectData interface: Type-safe project information
 *
 * Functionality:
 * - Full project information display (metrics, stack, decisions)
 * - Mobile fullscreen mode with close button
 * - Image gallery with modal viewer
 * - External link handling
 * - Responsive layout adaptation
 * - Smooth animations and transitions
 */

import { motion } from "framer-motion";
import { useUIStore } from "../../store/useUIStore";
import type { ProjectData } from "./types";
import { ArrowLeft, ExternalLink, Maximize2 } from "lucide-react";
import FullscreenModal from "../../components/ui/FullscreenModal";
import { useState } from "react";

export const ProjectDetails = ({
  project,
}: {
  project: ProjectData | null;
}) => {
  // Early return if no project is selected
  if (!project) {
    return (
      <div className="flex-1 flex items-center justify-center text-slate-500">
        <p className="terminal-text">No project selected</p>
      </div>
    );
  }

  // All hooks must be INSIDE the component
  const setSelectedProject = useUIStore((state) => state.setSelectedProject);
  const setHoveredProject = useUIStore((state) => state.setHoveredProject);
  const isMobile = useUIStore((state) => state.isMobile);
  const [fullscreenIdx, setFullscreenIdx] = useState<number | null>(null);

  const handleClose = () => {
    setSelectedProject(null);
    setHoveredProject(null);
  };

  return (
    <div className="relative flex-1">
      {/* --- STICKY CLOSE BUTTON --- */}
      <div className="sticky top-4 left-0 ml-[38px] z-[100]">
        <button
          onClick={handleClose}
          className="group flex items-center gap-2 px-3 py-1.5 
             bg-indigo-500/10 backdrop-blur-md 
             border border-indigo-500/30 hover:border-indigo-400 
             rounded-full transition-all duration-300
             shadow-xl shadow-black/20 hover:shadow-indigo-500/10"
        >
          <ArrowLeft
            className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white 
               group-hover:-translate-x-1 transition-all duration-300"
          />

          <span
            className="text-indigo-400 group-hover:text-white 
                   text-[10px] font-mono uppercase tracking-[0.2em] 
                   transition-colors duration-300"
          >
            Close
          </span>
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`flex-1 relative overflow-y-auto custom-scroll bg-slate-950/40 ${
          isMobile ? "fixed inset-0 z-[60] bg-slate-950" : "p-10"
        }`}
      >
        <div className={`${isMobile ? "p-6" : "max-w-4xl mx-auto"}`}>
          {/* HEADER SECTION */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-3xl md:text-3xl font-black text-slate-100 uppercase tracking-tighter leading-none">
                {project.name}
              </h4>
              <p className="text-indigo-400 terminal-text text-sm md:text-base font-medium">
                // {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-950 text-xs font-bold rounded uppercase hover:bg-white transition-colors"
                >
                  Live_Demo <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* 1. METRICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            {project.metrics &&
              Array.isArray(project.metrics) &&
              project.metrics.map((m) => (
                <div
                  key={m.label || m.value}
                  className="bg-slate-900/30 border border-slate-800/50 px-4 py-2 rounded-sm hover:bg-slate-900/50 transition-colors"
                >
                  <div className="text-2xl font-black text-white leading-none">
                    {m.value}
                    <span className="text-xs text-cyan-500 ml-0.5">
                      {m.unit}
                    </span>
                  </div>
                  <div className="terminal-text text-[9px] text-slate-500 uppercase font-bold mt-2 tracking-tighter">
                    {m.label}
                  </div>
                </div>
              ))}
          </div>

          {/* 2. TECH STACK */}
          <div className="mb-12">
            <h3 className="terminal-text text-[11px] text-slate-500 uppercase font-bold mb-4 border-b border-slate-800/50 pb-2">
              Technologies_Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack &&
                Array.isArray(project.stack) &&
                project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-mono rounded-full uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>

          {/* 3. CONTENT SPLIT */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-3 space-y-6">
              <h3 className="terminal-text text-[11px] text-slate-500 uppercase font-bold border-b border-slate-800/50 pb-2">
                Execution_Highlights
              </h3>
              <ul className="space-y-4">
                {project.cvHighlights &&
                  project.cvHighlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-slate-300 leading-relaxed"
                    >
                      <span className="text-cyan-400 font-mono text-sm">
                        0{i + 1}
                      </span>
                      <span className="text-sm md:text-base">{h}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="lg:col-span-2 bg-slate-900/20 p-4 border-l-2 border-indigo-500/30">
              <h3 className="terminal-text text-[11px] text-indigo-400 uppercase font-bold mb-6 italic">
                // Architectural_Decisions
              </h3>
              <div className="space-y-6">
                {project.technicalDecisions &&
                  project.technicalDecisions.map((d, i) => (
                    <div
                      key={i}
                      className="relative pl-4 border-l border-slate-800"
                    >
                      <p className="text-[11px] text-slate-400 font-mono leading-relaxed">
                        {typeof d === "string" ? d : d.challenge}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* 4. VISUAL ASSETS */}
          <div className="space-y-6 mb-20">
            <div className="flex items-center gap-4">
              <h3 className="terminal-text text-[11px] text-slate-500 uppercase font-bold shrink-0">
                System_Captures
              </h3>
              <div className="h-[1px] w-full bg-slate-800/50" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.previewImages &&
                project.previewImages.map((img, idx) => (
                  <div
                    key={img.label || idx}
                    onClick={() => setFullscreenIdx(idx)}
                    className="group relative overflow-hidden rounded-sm border border-slate-800 cursor-pointer bg-slate-950 transition-all hover:border-cyan-400/30"
                  >
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-10 bg-[length:100%_2px,3px_100%]" />
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 -top-2 -left-2 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-start p-3">
                      <div className="bg-slate-950/90 p-2 rounded-sm border border-cyan-400/40 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                        <Maximize2 className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-slate-950/90 border-t border-slate-800">
                      <div className="terminal-text text-[6px] text-cyan-400 flex items-center justify-between py-1">
                        <span>INDEX_0{idx + 1}</span>
                        <span className="uppercase tracking-tighter opacity-70">
                          {img.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <FullscreenModal
          isOpen={fullscreenIdx !== null}
          onClose={() => setFullscreenIdx(null)}
          images={project.previewImages}
          initialIndex={fullscreenIdx ?? 0}
          productName={project.name}
        />
      </motion.div>
    </div>
  );
};
