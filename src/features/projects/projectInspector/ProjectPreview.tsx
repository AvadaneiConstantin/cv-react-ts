/**
 * ProjectPreview Component - Shows project preview on hover
 *
 * Key Dependencies:
 * - framer-motion: Smooth animations and transitions
 * - ProjectData interface: Type-safe project information
 *
 * Core Functionality:
 * - Displays essential project information when hovered in project list
 * - Shows project title, subtitle, and tech stack
 * - Displays preview image with fallback UI
 * - Provides project summary description
 * - Clean, minimal design optimized for quick preview
 */

import { motion } from "framer-motion";
import { Cpu, Monitor } from "lucide-react";
import type { ProjectData } from "../types";

interface Props {
  project: ProjectData;
}

export const ProjectPreview = ({ project }: Props) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {/* 1. PROJECT TITLE */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-white leading-tight">
          {project.name}
        </h3>
        <p className="text-[11px] text-indigo-400 font-mono uppercase tracking-[0.1em]">
          {project.title}
        </p>
      </section>

      {/* 2. TECH STACK */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
          <Cpu className="w-3 h-3" /> Tech_Stack
        </div>
        <div className="flex flex-wrap gap-1">
          {project.stack && Array.isArray(project.stack)
            ? project.stack.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[8px] font-mono rounded uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))
            : project.tech && (
                <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[8px] font-mono rounded uppercase tracking-wider">
                  {project.tech}
                </span>
              )}
        </div>
      </section>

      {/* 3. PREVIEW IMAGE */}
      <section className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-cyan-400 font-bold uppercase tracking-widest">
          Preview
        </div>
        <div className="relative overflow-hidden rounded-sm border border-slate-800/50 bg-slate-950/60">
          {project.previewImages && project.previewImages.length > 0 ? (
            <img
              src={project.previewImages[0].src}
              alt={project.previewImages[0].alt || project.name}
              className="w-full aspect-video object-cover opacity-80"
            />
          ) : (
            <div className="w-full aspect-video flex items-center justify-center text-slate-600">
              <Monitor className="w-8 h-8" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* 4. PROJECT SUMMARY */}
      <section className="space-y-2">
        <div className="p-3 bg-slate-900/30 border border-slate-800/50 rounded-sm">
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {project.description ||
              `A modern ${project.category || "web"} application built with ${project.tech || "cutting-edge technologies"}, focusing on performance and user experience.`}
          </p>
        </div>
      </section>
    </motion.div>
  );
};
