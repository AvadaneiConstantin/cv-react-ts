/**
 * SystemStatus Component - Default state with system metrics
 *
 * Key Dependencies:
 * - framer-motion: Smooth fade animations
 *
 * Core Functionality:
 * - Shows system ready state when no project is hovered or selected
 * - Displays career experience and architecture statistics
 * - Provides motivational quote about development philosophy
 * - Clean minimal design with consistent styling
 */

import { motion } from "framer-motion";
import { Quote, Cpu, Layout } from "lucide-react";

export const SystemStatus = () => {
  return (
    <motion.div
      key="default-stats"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <div className="space-y-4 pb-4">
        <div className="p-3 bg-slate-900/30 border border-slate-800/50 rounded flex items-center gap-3">
          <Cpu className="w-4 h-4 text-cyan-500" />
          <div>
            <div className="text-[8px] text-slate-500 uppercase">
              Experience
            </div>
            <div className="text-[12px] font-mono text-slate-200 font-bold">
              3+ YEARS
            </div>
          </div>
        </div>

        <div className="p-3 bg-slate-900/30 border border-slate-800/50 rounded flex items-center gap-3">
          <Layout className="w-4 h-4 text-indigo-500" />
          <div>
            <div className="text-[8px] text-slate-500 uppercase">
              Architecture
            </div>
            <div className="text-[12px] font-mono text-slate-200 font-bold">
              COMPONENT_DRIVEN
            </div>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 w-4 h-4 text-slate-800" />
        <p className="text-[12px] italic text-slate-400 leading-relaxed pl-4 border-l border-cyan-500/30">
          "A dark background is a null state, waiting for an architect to commit
          order and logic."
        </p>
      </div>
    </motion.div>
  );
};
