import { useState } from 'react';
import {
  BarChart3,
  Sparkles,
  Layers,
  LineChart,
  User,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import CardTilt3D from './CardTilt3D';

export default function About() {
  const [photoError, setPhotoError] = useState(false);
  const storedPhoto = typeof window !== 'undefined' ? localStorage.getItem('shuvam_profile_photo') : null;
  const currentPhotoSrc = storedPhoto || '/shuvam-profile.png';

  const capabilities = [
    {
      number: '01',
      title: 'DATA ANALYTICS',
      description: 'Pattern discovery, structured querying, and exploratory data transformation.',
      icon: <BarChart3 className="w-4 h-4 text-cyan-400" />,
    },
    {
      number: '02',
      title: 'ARTIFICIAL INTELLIGENCE',
      description: 'Generative AI workflows, Google Gemini API integrations, and RAG pipelines.',
      icon: <Sparkles className="w-4 h-4 text-blue-400" />,
    },
    {
      number: '03',
      title: 'FULL-STACK DEVELOPMENT',
      description: 'Modern front-to-back engineering with React, Node.js, and TypeScript.',
      icon: <Layers className="w-4 h-4 text-sky-400" />,
    },
    {
      number: '04',
      title: 'DATA VISUALIZATION',
      description: 'Executive dashboards and visual storytelling via Power BI and Tableau.',
      icon: <LineChart className="w-4 h-4 text-cyan-300" />,
    },
  ];

  return (
    <section id="about" className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
            ABOUT ME
          </span>
        </div>

        {/* Editorial Layout: Left Large Portrait Card · Right Statement & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* LEFT: Large Portrait Card */}
          <div className="lg:col-span-5">
            <CardTilt3D maxTilt={2.5} scale={1.01} className="rounded-3xl">
              <div className="relative rounded-3xl border border-sky-500/25 bg-slate-900/80 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-2xl p-4 overflow-hidden group depth-card">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] border border-slate-800">
                  {!photoError ? (
                    <img
                      src={currentPhotoSrc}
                      alt="SHUVAM JENA - Data Analytics and AI & Full-Stack Developer"
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-3xl font-mono font-black text-cyan-400">SJ</span>
                      <p className="text-xs text-slate-400 mt-2">{PERSONAL_INFO.fullName}</p>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent pointer-events-none" />

                  {/* Identity Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                    <div>
                      <h3 className="font-bold text-white tracking-wide text-sm">{PERSONAL_INFO.fullName}</h3>
                      <p className="text-cyan-400 text-xs font-mono">{PERSONAL_INFO.roleTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          </div>

          {/* RIGHT: Statement, Description & 4 Capability Cards */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight uppercase">
                I BUILD WITH{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  DATA, AI & CODE.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutParagraph1}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutParagraph2}
              </p>
            </div>

            {/* 4 Compact Capability Cards with subtle connecting line */}
            <div className="relative pt-2">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/20 via-cyan-500/30 to-blue-500/10 pointer-events-none hidden sm:block" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {capabilities.map((cap) => (
                  <CardTilt3D
                    key={cap.number}
                    maxTilt={3}
                    scale={1.015}
                    className="h-full rounded-2xl"
                  >
                    <div
                      className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg group flex flex-col justify-between h-full depth-card"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs font-black text-cyan-400/90 tracking-wider">
                            {cap.number}
                          </span>
                          <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-sky-500/40 transition-colors">
                            {cap.icon}
                          </div>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase mb-1 group-hover:text-cyan-300 transition-colors">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </CardTilt3D>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL INFORMATION STRIP */}
        <div className="mt-12 sm:mt-16 rounded-3xl border border-sky-500/20 bg-slate-900/70 backdrop-blur-xl p-4 sm:p-6 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {/* 1. NAME */}
            <div className="min-w-0 p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-1.5 min-h-[88px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>NAME</span>
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                {PERSONAL_INFO.fullName}
              </p>
            </div>

            {/* 2. EDUCATION */}
            <div className="min-w-0 p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-1.5 min-h-[88px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>EDUCATION</span>
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {PERSONAL_INFO.degree} {PERSONAL_INFO.branch}
              </p>
            </div>

            {/* 3. UNIVERSITY */}
            <div className="min-w-0 p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-1.5 min-h-[88px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>UNIVERSITY</span>
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {PERSONAL_INFO.university}
              </p>
            </div>

            {/* 4. GRADUATION */}
            <div className="min-w-0 p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-1.5 min-h-[88px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>GRADUATION</span>
              </span>
              <p className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                {PERSONAL_INFO.graduationYear} (3rd Year)
              </p>
            </div>

            {/* 5. LOCATION */}
            <div className="min-w-0 p-3.5 sm:p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between space-y-1.5 min-h-[88px] sm:col-span-2 lg:col-span-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>LOCATION</span>
              </span>
              <p className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
