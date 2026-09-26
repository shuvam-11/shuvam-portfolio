import { Building, MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              PRACTICAL TRAINING
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            EXPERIENCE & LEARNING
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Professional coursework and technical skill development in modern Data Analytics.
          </p>
        </div>

        {/* Vertical Timeline Card */}
        <div className="max-w-4xl relative border-l-2 border-slate-800 ml-2 xs:ml-4 sm:ml-6 pl-5 xs:pl-6 sm:pl-10 space-y-6 sm:space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Node - centered exactly on the border line */}
              <div className="absolute -left-[28px] xs:-left-[32px] sm:-left-[49px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.4)]" />

              <div className="rounded-3xl border border-sky-500/25 bg-slate-900/70 backdrop-blur-xl p-4 sm:p-6 md:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300 depth-card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold shrink-0">
                        {exp.course} Course / Training
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2.5 pt-1">
                      <Building className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span>{exp.organization}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 self-start sm:self-auto shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Exact Verified Description */}
                <div className="pt-4 space-y-4">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    "{exp.description}"
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Data analysis techniques & dataset structuring</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Data visualization & analytical dashboard design</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Practical hands-on exposure to analytics tooling</span>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Real-world data problem exploration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
