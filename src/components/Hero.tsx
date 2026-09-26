import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ExternalLink,
  Upload,
  Database,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
  Github,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import CardTilt3D from './CardTilt3D';
import shuvamProfilePic from '../profilepic/shuvam.png';

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCustomPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          try {
            localStorage.setItem('shuvam_profile_photo', result);
            window.location.reload();
          } catch {
            // ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const storedPhoto = typeof window !== 'undefined' ? localStorage.getItem('shuvam_profile_photo') : null;
  const currentPhotoSrc = (storedPhoto && storedPhoto !== '/shuvam-profile.png') ? storedPhoto : shuvamProfilePic;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex flex-col justify-between overflow-hidden bg-slate-950 w-full"
    >
      {/* Subtle moving radial gradient auras */}
      <div className="absolute top-1/4 -left-32 w-[34rem] h-[34rem] bg-blue-600/12 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      {/* Abstract glowing SVG data graph line running behind content */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="heroGraphGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="heroGraphArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d="M 0,550 Q 240,510 460,420 T 920,440 T 1440,320 L 1440,800 L 0,800 Z"
          fill="url(#heroGraphArea)"
        />
        {/* Main glowing line */}
        <path
          d="M 0,550 Q 240,510 460,420 T 920,440 T 1440,320"
          fill="none"
          stroke="url(#heroGraphGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 4"
        />

        {/* Floating Data Points */}
        <circle cx="460" cy="420" r="4" fill="#38bdf8" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="460" cy="420" r="3" fill="#38bdf8" />
        <circle cx="920" cy="440" r="3" fill="#06b6d4" />
        <circle cx="1200" cy="360" r="4" fill="#38bdf8" />
      </svg>

      {/* Main Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE: Typography & Identity */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Status / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-cyan-300">
                HELLO, I'M SHUVAM
              </span>
            </div>

            {/* Display Role & Titles */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight uppercase">
                <span className="bg-gradient-to-r from-white via-slate-100 to-sky-300 bg-clip-text text-transparent">
                  DATA ANALYTICS
                </span>
              </h1>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-cyan-400 leading-tight">
                + AI & FULL-STACK DEVELOPER
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase pt-1">
                Data & Technology Enthusiast
              </p>
            </div>

            {/* Tagline Card */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border-l-2 border-l-cyan-400 border-y border-r border-sky-500/10 backdrop-blur-md">
              <p className="text-sm sm:text-base font-medium italic text-slate-200">
                "{PERSONAL_INFO.tagline}"
              </p>
            </div>

            {/* Short Professional Description */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300 active:scale-95 group shrink-0"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl border border-sky-500/30 hover:border-cyan-400/80 bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-sm active:scale-95 shrink-0"
              >
                <span>GET IN TOUCH</span>
              </Link>
            </div>

            {/* Social Channels Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold shrink-0">
                CHANNELS:
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white text-xs font-medium transition-colors shrink-0"
              >
                <Github className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white text-xs font-medium transition-colors shrink-0"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 text-slate-300 hover:text-white text-xs font-medium transition-colors shrink-0"
              >
                <Instagram className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Sophisticated Glass Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[270px] xs:max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mr-0">
              {/* Subtle Cyan Glow & Depth Shadow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/35 via-cyan-500/25 to-sky-400/30 blur-2xl opacity-80 pointer-events-none" />

              <CardTilt3D maxTilt={3} scale={1.012} className="rounded-3xl">
                {/* Glass Frame Container - overflow visible so floating badges do not get clipped */}
                <div className="relative rounded-3xl border border-sky-500/30 bg-slate-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl p-2.5 xs:p-3 sm:p-4 group depth-card">
                  {/* Subtle animated light sweep across top */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 animate-pulse-slow" />

                  {/* Portrait Canvas */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[3/4] flex items-center justify-center border border-slate-800/80">
                    {!photoError ? (
                      <img
                        src={currentPhotoSrc}
                        alt="SHUVAM JENA - Data Analytics and AI & Full-Stack Developer"
                        onError={() => setPhotoError(true)}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="p-6 text-center space-y-3">
                        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-xl shadow-cyan-500/20">
                          <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center font-mono font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            SJ
                          </div>
                        </div>
                        <h3 className="text-sm font-bold text-white tracking-wide">{PERSONAL_INFO.fullName}</h3>
                        <p className="text-xs text-slate-400">
                          Place <code className="text-cyan-300">shuvam-profile.png</code> in <code className="text-cyan-300">/public</code>
                        </p>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-md inline-flex items-center gap-1.5"
                        >
                          <Upload className="w-3 h-3 shrink-0" />
                          <span>Select Photo</span>
                        </button>
                      </div>
                    )}

                    {/* Hidden file input for emergency photo select */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleCustomPhoto}
                      className="hidden"
                    />

                    {/* Subtle dark gradient scrim at bottom edge for contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent pointer-events-none" />

                    {/* Top-Right Badge: Identity */}
                    <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-slate-950/80 border border-sky-500/25 text-[9px] sm:text-[10px] font-mono text-cyan-300 backdrop-blur-md">
                      DRIEMS CSE '28
                    </div>
                  </div>

                  {/* Subtle Floating Badges around the portrait with organic floating depth */}
                  <div className="absolute -top-2.5 left-2 sm:left-6 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/95 border border-cyan-500/40 text-[9px] sm:text-[11px] font-mono font-bold text-cyan-300 shadow-xl backdrop-blur-md inline-flex items-center gap-1.5 shrink-0 z-20 animate-float-slow">
                    <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                    <span>DATA ANALYTICS</span>
                  </div>

                  <div className="absolute top-16 sm:top-24 -left-1 sm:-left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-900/95 border border-blue-500/40 text-[9px] sm:text-[11px] font-mono font-bold text-blue-300 shadow-xl backdrop-blur-md inline-flex items-center gap-1.5 shrink-0 z-20 animate-float-slow [animation-delay:1.5s]">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                    <span>AI</span>
                  </div>

                  <div className="absolute top-28 sm:top-36 -right-1 sm:-right-3 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/95 border border-sky-500/40 text-[9px] sm:text-[11px] font-mono font-bold text-sky-300 shadow-xl backdrop-blur-md inline-flex items-center gap-1.5 shrink-0 z-20 animate-float-slow [animation-delay:3s]">
                    <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 shrink-0" />
                    <span>FULL-STACK</span>
                  </div>

                  <div className="absolute -bottom-2.5 left-2 sm:left-6 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-900/95 border border-cyan-500/40 text-[9px] sm:text-[11px] font-mono font-bold text-cyan-300 shadow-xl backdrop-blur-md inline-flex items-center gap-1.5 shrink-0 z-20 animate-float-slow [animation-delay:2s]">
                    <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
                    <span>SQL</span>
                  </div>

                  <div className="absolute -bottom-2.5 right-2 sm:right-6 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/95 border border-amber-500/40 text-[9px] sm:text-[11px] font-mono font-bold text-amber-300 shadow-xl backdrop-blur-md inline-flex items-center gap-1.5 shrink-0 z-20 animate-float-slow [animation-delay:4s]">
                    <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
                    <span>POWER BI</span>
                  </div>
                </div>
              </CardTilt3D>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL TO EXPLORE Indicator with Minimal Animated Arrow */}
      <div className="relative z-10 pb-4 text-center">
        <Link
          to="/about"
          className="inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors group"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-cyan-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
