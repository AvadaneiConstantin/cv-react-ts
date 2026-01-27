/**
 * ProjectStatus Component - Full telemetry display for selected project
 *
 * Key Dependencies:
 * - framer-motion: Smooth animations and transitions
 * - ProjectData.pulseData: Waveform visualization data array
 *
 * Core Functionality:
 * - Displays comprehensive project telemetry when project is selected
 * - Shows project quote with styled quotation design
 * - Displays core challenge description with warning icon
 * - Animated waveform visualization using pulseData array
 * - Full project metrics and analysis display
 */

import { motion } from "framer-motion";
import { Quote, AlertTriangle } from "lucide-react";
import type { ProjectData } from "../types";

interface Props {
  project: ProjectData;
}

export const ProjectStatus = ({ project }: Props) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      {/* 1. PROJECT NAME */}
      <section className="space-y-1">
        <h3 className="text-[15px] font-bold text-white leading-tight">
          {project.name}
        </h3>
      </section>

      {/* 2. QUOTE */}
      <section className="relative">
        <Quote className="absolute -top-2 -left-2 w-4 h-4 text-slate-800" />
        <p className="text-[12px] italic text-slate-400 leading-relaxed pl-4 border-l border-cyan-500/30">
          "{project.quote || "Simplicity is the soul of efficiency."}"
        </p>
      </section>

      {/* 2. CHALLENGE */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
          <AlertTriangle className="w-3 h-3" /> Core_Challenge
        </div>
        <p className="text-[12px] text-slate-500 leading-relaxed font-mono">
          {project.challenge || "Building scalable, maintainable solutions."}
        </p>
      </section>

      {/* 3. DIGITAL OSCILLOSCOPE */}
      {project.pulseData && (
        <div className="pt-4 border-t border-slate-800/50">
          <div className="flex justify-between items-center text-[8px] font-mono mb-3">
            <span className="text-slate-500 uppercase tracking-[0.2em]">
              Signal_Analysis
            </span>
            <span className="text-cyan-400 font-bold">
              {Array.isArray(project.metrics)
                ? project.metrics[0]?.value || 0
                : 0}{" "}
              MHz
            </span>
          </div>
          <div className="relative h-16 bg-slate-950/60 border border-slate-800/80 rounded-sm overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full p-1"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.polyline
                key={`pulse-${project.id}`}
                points={project.pulseData
                  .map(
                    (val, i) =>
                      `${
                        i * (100 / (project.pulseData!.length - 1))
                      },${100 - val}`,
                  )
                  .join(" ")}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="1.5"
                pathLength="100"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 4px #22d3ee)" }}
              />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
};
