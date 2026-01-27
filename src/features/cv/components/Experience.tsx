/**
 * Experience Component - Professional experience timeline
 *
 * Key Dependencies:
 * - cvData: Centralized CV data source
 * - Lucide icons: Visual indicators for experience details
 *
 * Core Functionality:
 * - Displays professional experience in timeline format
 * - Shows company, position, duration, and achievements
 * - Interactive expandable cards for detailed information
 * - External links to company websites
 * - Responsive design for mobile and desktop
 */
import { Award, Clock, ChevronRight, ExternalLink } from "lucide-react";
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

export const Experience = () => {
  const { experience } = cvData;

  return (
    <section>
      <SectionTitle icon={Award} title="Professional Experience" color="cyan" />
      <div className="bg-slate-900/20 border border-slate-800/50 rounded-2xl px-8 pt-4 pb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[2.5px] h-full bg-cyan-500/50"></div>

        {experience.map((exp: any, index: number) => (
          <div
            key={exp.id}
            className={
              index > 0 ? "mt-8 pt-8 border-t border-slate-800/50" : ""
            }
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
              <div>
                <h4 className="text-[20px] font-bold text-slate-100">
                  {exp.position || exp.company}
                  {exp.position && (
                    <span className="text-slate-400 font-medium">
                      {" "}
                      (Full-time)
                    </span>
                  )}
                </h4>
                {exp.company && exp.position && (
                  <p className="text-cyan-400 font-semibold flex items-center gap-2">
                    {exp.company}{" "}
                    {exp.location && <span className="text-slate-600">•</span>}{" "}
                    <span className="text-slate-400">{exp.location}</span>
                  </p>
                )}
              </div>
              <div className="bg-slate-800/80 px-4 mt-3 py-1.5 rounded-full border border-slate-700 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-300">
                  {exp.period}
                </span>
              </div>
            </div>

            <ul className="space-y-4 text-slate-300 text-[15px]">
              {exp.description.map((item: any, i: number) => (
                <li key={i} className="flex gap-4 items-start">
                  <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.technologies.map((tech: any, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Open Repository Button for exp2 */}
            {exp.id === "exp2" && (
              <div className="mt-4 px-4 py-2 border border-slate-800/60 rounded-lg group transition-colors bg-transparent">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Legacy HTML/CSS Portfolio showcasing fundamental
                      core-logic applications and early React integration.
                    </p>
                  </div>

                  <a
                    href="https://avadaneiprofilepage.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-cyan-400 border border-slate-800 hover:border-cyan-900/50 rounded text-[11px] font-mono uppercase tracking-tighter transition-all group-hover:bg-slate-900/50"
                  >
                    Open_Repository <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
