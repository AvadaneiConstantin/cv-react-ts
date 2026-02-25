/**
 * CVHeader Component - Main header with profile information and contact details
 *
 * Key Dependencies:
 * - useIsMobile: Responsive design hook for mobile detection
 * - useState: Local state for clipboard functionality
 *
 * Core Functionality:
 * - Displays profile picture and personal information
 * - Shows contact details with copy functionality
 * - Responsive design optimized for mobile and desktop
 * - Interactive elements with hover states and transitions
 * - Clipboard copy with visual feedback
 */
import profilePic from "/img/cv.png";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "../../../hooks/useMediaQuery";
import { cvData } from "../data";

export const CVHeader = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const copyToClipboard = async (text: string, itemLabel: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemLabel);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedItem(itemLabel);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch (fallbackErr) {
        console.error("Failed to copy text: ", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const contactInfo = [
    {
      label: "LinkedIn",
      text: "My LinkedIn",
      action: () => window.open(cvData.profile.linkedin, "_blank"),
      showCopy: false,
    },
    {
      label: "Phone",
      text: cvData.profile.phone || "",
      action: () =>
        (window.location.href = `tel:+${(cvData.profile.phone || "").replace(/\s/g, "")}`),
      showCopy: true,
      copyText: (cvData.profile.phone || "").replace(/\s/g, ""),
    },
    {
      label: "Email",
      text: cvData.profile.email || "",
      action: () =>
        (window.location.href = `mailto:${cvData.profile.email || ""}`),
      showCopy: true,
      copyText: cvData.profile.email || "",
    },
  ];

  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        {/* ───────────────── HEADER ROW ───────────────── */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* --- STÂNGA: POZA (Structură originală neatinsă) --- */}
          <div className="relative group shrink-0">
            <div className="relative w-[280px] lg:w-[300px] transform group-hover:scale-[1.02] transition-all duration-500">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-slate-900 to-slate-950" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1/2 -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000 z-30 pointer-events-none" />

                <img
                  src={profilePic}
                  alt="Constantin Avădănei"
                  className="relative z-10 w-full object-cover object-top drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-20" />
              </div>
            </div>
          </div>

          {/* --- DREAPTA: TEXT + CONTACT --- */}
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-20 w-full">
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-[2px] text-white mb-3 leading-tight uppercase">
              <span className="block">CONSTANTIN</span>
              <span className="block mt-1 text-cyan-400">AVĂDĂNEI</span>
            </h1>

            <p className="text-indigo-400 uppercase text-[14px] font-extrabold tracking-[0.25em]">
              Frontend Developer
            </p>

            <p className="text-slate-500 text-[13px] font-mono tracking-widest mt-1">
              [React].[TypeScript]
            </p>

            {/* CONTACT LIST - Ajustat pt Mobile Best Practices */}
            <div
              className={`flex flex-col gap-0 border-l border-slate-900 mt-6 mb-6 ${isMobile ? "w-[75%] max-w-[400px] mx-auto border-l-2" : "text-left"}`}
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`group relative flex items-center gap-4 py-3 px-4 hover:bg-cyan-400/5 transition-colors ${isMobile ? "px-6" : "ml-1"}`}
                >
                  <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-transparent group-hover:bg-cyan-500 transition-colors" />

                  <button
                    onClick={item.action}
                    className="flex flex-col text-left flex-1"
                  >
                    <span
                      className={`uppercase tracking-[0.2em] text-slate-500 font-semibold ${isMobile ? "text-[9px]" : "text-[10px]"}`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`font-mono text-slate-300 group-hover:text-white ${isMobile ? "text-sm" : "text-sm"}`}
                    >
                      {isMobile && item.label === "Email"
                        ? "Email me"
                        : item.text}
                    </span>
                  </button>

                  {/* Copy Button - Permanent vizibil pe mobile pt UX */}
                  {item.showCopy && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(item.copyText!, item.label);
                      }}
                      className={`p-1.5 rounded transition-all ${isMobile ? "opacity-100 bg-slate-800/40" : "opacity-0 group-hover:opacity-100 hover:bg-slate-700/50"}`}
                    >
                      {copiedItem === item.label ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                      )}
                    </button>
                  )}

                  {!item.showCopy && (
                    <ArrowUpRight
                      className={`ml-auto w-4 h-4 text-slate-700 transition-all ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rezumat Profesional */}
        <div className="pt-6 ">
          <div
            className={`flex items-center gap-3 mb-4 ${isMobile ? "justify-center" : ""}`}
          >
            <div className="flex items-center gap-2">
              <span className="h-1 w-6 bg-cyan-400 rounded-full"></span>
              <span className="h-1 w-3 bg-cyan-400/50 rounded-full"></span>
              <span className="h-1 w-2 bg-cyan-400/30 rounded-full"></span>
            </div>
            <h2 className="text-lg font-semibold text-white">
              Personal Summary
            </h2>
          </div>
          <div className="relative">
            {/* MODIFICARE: Text mai mare pe mobile (text-lg) vs desktop (text-base) */}
            <p
              className={`text-slate-400 leading-relaxed ${isMobile ? "text-lg text-center px-2" : "text-base text-left"}`}
            >
              Frontend Developer with 3+ years of experience in React and
              TypeScript, creating clean, performant, and scalable user
              interfaces aligned with modern design and usability standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
