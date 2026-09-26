import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              RECOGNITION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            CERTIFICATIONS & ACHIEVEMENTS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Formal industry accreditations, job simulations, and competitive participation records.
          </p>
        </div>

        {/* Premium Horizontal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 max-w-5xl">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className="group relative flex items-center justify-between p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-900/95 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg depth-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all flex items-center justify-center">
                  <Award className="w-5 h-5 shrink-0" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
                    {cert.issuer}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Category: <span className="text-slate-300 font-medium">{cert.category}</span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-[10px] font-mono text-emerald-400 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
