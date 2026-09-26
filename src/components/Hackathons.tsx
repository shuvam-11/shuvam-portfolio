import { Users, Lightbulb, Code } from 'lucide-react';
import { HACKATHON_DATA } from '../data/portfolioData';

export default function Hackathons() {
  const numberedHackathons = HACKATHON_DATA.map((h, i) => ({
    ...h,
    index: `0${i + 1}`,
  }));

  return (
    <section id="hackathons" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              HACKATHONS & INNOVATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            BUILD. COMPETE. INNOVATE.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Collaborative, high-velocity hackathons focused on turning complex problem statements into functional digital solutions.
          </p>
        </div>

        {/* Numbered Timeline Grid with Connecting Lines */}
        <div className="relative max-w-4xl border-l-2 border-slate-800 ml-2 xs:ml-4 sm:ml-8 pl-5 xs:pl-6 sm:pl-12 space-y-8 sm:space-y-10">
          {numberedHackathons.map((hackathon) => (
            <div key={hackathon.index} className="relative group">
              {/* Numbered Timeline Marker */}
              <div className="absolute -left-[31px] xs:-left-[35px] sm:-left-[61px] top-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center font-mono text-[9px] sm:text-[10px] font-black text-cyan-300 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                {hackathon.index}
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 group-hover:bg-slate-900/90 group-hover:border-sky-500/40 p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-xl depth-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold">
                        {hackathon.role}
                      </span>
                      {hackathon.year && (
                        <span className="text-xs font-mono text-slate-400">
                          {hackathon.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors uppercase">
                      {hackathon.title}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 self-start sm:self-auto">
                    {hackathon.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {hackathon.themes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Focus Triplets */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-cyan-400 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">TEAM COLLABORATION</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Engineering together under tight prototype deadlines.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">PRAGMATIC INNOVATION</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Translating societal friction into viable technical architecture.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-500/10 text-cyan-400 shrink-0">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase">RAPID SHIPMENT</h4>
              <p className="text-[11px] text-slate-400 mt-1">
                Building functional MVPs with real data ingestion and clean interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
