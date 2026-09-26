import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  const edu = EDUCATION_DATA[0];

  return (
    <section id="education" className="py-14 sm:py-16 lg:pb-24 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      {/* Large "2028" Typographic Background Visual Element as requested */}
      <div className="absolute right-0 bottom-4 text-[12rem] sm:text-[18rem] md:text-[22rem] font-black font-mono tracking-tighter text-slate-800/10 pointer-events-none select-none z-0 leading-none overflow-hidden">
        2028
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              ACADEMIC FOUNDATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            EDUCATION
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Undergraduate Computer Science & Engineering curriculum with focus on Data Analytics & Modern Computing.
          </p>
        </div>

        {/* Minimal & Elegant Timeline Card */}
        <div className="max-w-4xl relative border-l-2 border-slate-800 ml-2 xs:ml-4 sm:ml-8 pl-5 xs:pl-6 sm:pl-12">
          <div className="relative group">
            {/* Timeline Marker Node */}
            <div className="absolute -left-[28px] xs:-left-[32px] sm:-left-[57px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />

            <div className="rounded-3xl border border-sky-500/25 bg-slate-900/70 backdrop-blur-xl p-4 sm:p-6 md:p-9 shadow-2xl space-y-5 sm:space-y-6 depth-card">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold">
                      CURRENTLY: 3rd YEAR
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      CLASS OF 2028
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight uppercase">
                    {edu.institution}
                  </h3>

                  <p className="text-base sm:text-lg font-bold text-cyan-300">
                    {edu.degree} – {edu.branch}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>2024 — 2028</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Focus */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  ACADEMIC SPECIALIZATIONS & INITIATIVES:
                </span>
                <div className="space-y-2">
                  {edu.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-300 font-normal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
