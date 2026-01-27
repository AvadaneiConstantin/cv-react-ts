/**
 * Education Component - Academic background and languages
 *
 * Key Dependencies:
 * - cvData: Centralized CV data source
 * - Lucide icons: Visual indicators for education and languages
 *
 * Core Functionality:
 * - Displays academic qualifications and institutions
 * - Shows language proficiency levels
 * - Timeline format for educational background
 * - Visual language skill indicators
 * - Responsive design for different screen sizes
 */
import { Award, Globe } from "lucide-react";
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

export const Education = () => {
  const { education, languages } = cvData;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Education */}
      <div>
        <SectionTitle icon={Award} title="Education" color="cyan" />
        <div className="space-y-4">
          {education.map((edu: any) => (
            <div
              key={edu.id}
              className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl group hover:border-cyan-500/20 transition-all"
            >
              <h4 className="text-slate-200 font-bold text-sm uppercase mb-1">
                {edu.institution}
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-indigo-400 text-xs font-medium">
                  {edu.degree} | {edu.location}
                </p>
                <span className="text-[12px] font-mono text-slate-500">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <SectionTitle icon={Globe} title="Languages" color="green" />
        <div className="space-y-2">
          {languages.map((lang: any) => (
            <div
              key={lang.code}
              className="p-2.5 bg-slate-900/20 border border-slate-800/40 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-1.5 ${lang.code === "RO" ? "bg-green-500/10" : "bg-cyan-500/10"} rounded-md`}
                >
                  <span
                    className={`text-xs font-semibold ${lang.code === "RO" ? "text-green-400" : "text-cyan-400"}`}
                  >
                    {lang.code}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 leading-none">
                    {lang.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">{lang.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
