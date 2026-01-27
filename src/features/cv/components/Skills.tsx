/**
 * Skills Component - Technical skills with progress bars and categories
 *
 * Key Dependencies:
 * - cvData: Centralized CV data source
 * - Lucide icons: Visual indicators for skill categories
 *
 * Core Functionality:
 * - Displays technical skills with progress bars and categories
 * - Shows soft skills with icon-based cards
 * - Responsive grid layout for different screen sizes
 * - Visual skill categorization with color coding
 * - Interactive hover states and transitions
 */
import {
  Cpu,
  Monitor,
  Database,
  Brain,
  Zap,
  Users,
  Layers,
  Target,
  Briefcase,
  Heart,
  Search,
  Lightbulb,
  ShieldCheck,
  Clock,
  ScanEye,
  Code,
} from "lucide-react";
import { cvData } from "../data";

const SectionTitle = ({
  icon: Icon,
  title,
  color = "cyan",
}: {
  icon: any;
  title: string;
  color?: string;
}) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`p-2 rounded-lg bg-slate-800/50 text-${color}-400`}>
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-xl font-bold text-slate-100 tracking-tight uppercase">
      {title}
    </h3>
    <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent ml-4"></div>
  </div>
);

export const Skills = () => {
  const { skills } = cvData;

  return (
    <div className="space-y-16">
      {/* Technical Stack & Key Skills */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Technical Stack */}
        <div>
          <SectionTitle icon={Cpu} title="Technical Stack" color="blue" />
          <div className="space-y-6">
            {/* Core Frontend */}
            <div className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-4 h-4 text-cyan-400" />
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Core Frontend
                </h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.categories
                  .find((c: any) => c.name === "Core Frontend")
                  ?.technologies.map((s: any) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-md"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            </div>

            {/* UI & Styling */}
            <div className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-4 h-4 text-indigo-400" />
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  UI & Styling
                </h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.categories
                  .find((c: any) => c.name === "UI & Styling")
                  ?.technologies.map((s: any) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium rounded-md"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            </div>

            {/* Backend & Environment */}
            <div className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-4 h-4 text-emerald-400" />
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Backend & Environment
                </h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.categories
                  .find((c: any) => c.name === "Backend & Environment")
                  ?.technologies.map((s: any) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium rounded-md"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Skills */}
        <div>
          <SectionTitle icon={Brain} title="Key Skills" color="yellow" />
          <div className="space-y-3">
            {skills.keySkills.map((skill: any, i: number) => {
              const iconMap: Record<string, any> = {
                yellow: Zap,
                blue: Users,
                cyan: Layers,
                rose: Target,
                slate: Briefcase,
              };
              const Icon = iconMap[skill.color] || Zap;

              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-slate-900/20 border border-slate-800/30 rounded-lg hover:bg-slate-900/40 transition-all group"
                >
                  <div
                    className={`p-1.5 bg-${skill.color}-500/10 rounded text-${skill.color}-400 shrink-0 group-hover:bg-${skill.color}-500/20 transition-colors`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h6 className="text-slate-300 font-semibold text-xs mb-0.5">
                      {skill.title}
                    </h6>
                    <p className="text-[11px] text-slate-500 leading-tight">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soft Skills - Separate Section */}
      <section>
        <SectionTitle icon={Heart} title="Soft Skills" color="pink" />
        <div className="grid grid-cols-3 gap-3">
          {skills.softSkills.map((skill: any, i: number) => {
            const iconMap: Record<string, any> = {
              purple: Search,
              yellow: Lightbulb,
              green: ShieldCheck,
              orange: Clock,
              pink: Heart,
              emerald: ScanEye,
            };
            const Icon = iconMap[skill.color] || Heart;

            return (
              <div
                key={i}
                className="flex items-start gap-3 p-2.5 bg-slate-900/20 border border-slate-800/30 rounded-lg hover:bg-slate-900/40 transition-all group"
              >
                <div
                  className={`p-1.5 bg-${skill.color}-500/10 rounded text-${skill.color}-400 shrink-0 group-hover:bg-${skill.color}-500/20 transition-colors`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h6 className="text-slate-200 font-bold text-[12px] mb-1 tracking-tight leading-none">
                    {skill.title}
                  </h6>
                  <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
                    {skill.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
