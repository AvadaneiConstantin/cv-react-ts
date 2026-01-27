/**
 * Shell Component - Main layout wrapper with responsive design
 *
 * Key Dependencies:
 * - useUIStore: Global state for mobile detection and active sections
 *
 * Core Functionality:
 * - Responsive layout switching (mobile/desktop)
 * - Header and footer labels (hidden on mobile)
 * - Max-width container for desktop (1300px)
 * - Background gradient with radial effects
 * - Conditional rendering based on screen size
 */
import { useUIStore } from "../../store/useUIStore";

export const Shell = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useUIStore();

  return (
    // <div className="h-screen w-full bg-slate-950 flex flex-col overflow-hidden text-slate-400 font-sans relative">

    // <div className="
    // h-screen w-full flex flex-col overflow-hidden text-slate-400 font-sans relative
    // bg-gradient-to-br
    // from-slate-950
    // via-slate-900
    // to-slate-950">

    <div
      className="
    h-screen w-full flex flex-col overflow-hidden text-slate-400 font-sans relative
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
    from-slate-800/20
    via-slate-950
    to-slate-950"
    >
      {!isMobile && (
        <>
          <div className="fixed top-8 left-0 w-full h-[1px] bg-slate-800/30 z-0" />
          <div className="fixed bottom-8 left-0 w-full h-[1px] bg-slate-800/30 z-0" />
        </>
      )}

      <main className="flex-1 flex overflow-hidden relative z-10">
        <div className="flex-1 flex justify-center">
          <div className="flex w-full max-w-[1300px] [@media(min-width:1900px)]:max-w-[1600px] relative">
            {children}
          </div>
        </div>
      </main>

      {/* STRAT 3: ETICHETELE UI (Cele mai de sus) */}
      {!isMobile && (
        <div className="pointer-events-none fixed inset-0">
          {/* Header Labels */}
          <div className="absolute top-0 left-0 right-0 h-8 flex justify-center z-20">
            <div className="w-full max-w-[1900px] flex justify-between items-center px-6">
              <div className="bg-slate-950 px-2 py-1 flex items-center gap-2 pointer-events-auto group">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                <span className="terminal-text text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-slate-500">
                    SYSTEM_CORE // C_AVADANEI
                  </span>
                </span>
              </div>

              <div className="bg-slate-950 px-2 py-1 pointer-events-auto">
                <span className="terminal-text text-[12px] opacity-60 font-mono">
                  TS_STRICT_INIT
                </span>
              </div>
            </div>
          </div>

          {/* Footer Labels */}
          <div className="absolute bottom-0 left-0 right-0 h-8 flex justify-center z-20">
            <div className="w-full max-w-[1900px] flex items-center px-4 justify-between pointer-events-auto">
              <div className="bg-slate-950/60 backdrop-blur-md px-2 py-1 flex gap-4 items-center rounded-t-sm">
                <div className="flex items-center gap-2 font-bold">
                  {/* Indicatorul care pulsează */}
                  <div className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
                  </div>

                  <span className="text-cyan-400 uppercase tracking-tighter text-[13px]">
                    Status: Active
                  </span>
                </div>
                <span className="opacity-20 text-[10px]">|</span>
                <span className="text-slate-500 text-[13px] font-mono">
                  IAȘI // RO
                </span>
              </div>

              {/* Info Right */}
              <div className="bg-slate-950/60 backdrop-blur-md px-2 py-1 flex gap-6 items-center opacity-60 rounded-t-sm">
                <div className="flex items-center gap-1 text-[11px] font-medium tracking-tight uppercase">
                  <span>COMMIT_#</span>

                  <div className="ticker-wrapper inline-block  -ml-[2px]">
                    <div className="animate-commit-ticker">
                      <span>PERFORMANCE</span>
                      <span>RESPONSIVENESS</span>
                      <span>SCALABILITY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
