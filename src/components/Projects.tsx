import { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  CheckCircle2,
  Sparkles,
  BarChart3,
  PieChart,
  Navigation,
  Activity,
  Layers,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import CardTilt3D from './CardTilt3D';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'ALL', value: 'All' },
    { label: 'DATA ANALYTICS', value: 'Data Analytics' },
    { label: 'AI', value: 'AI' },
    { label: 'FULL-STACK', value: 'Full-Stack' },
    { label: 'POWER BI', value: 'Power BI' },
    { label: 'TABLEAU', value: 'Tableau' },
  ];

  // Close modal on Escape key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalProject(null);
      }
    };
    if (activeModalProject) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject]);

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.categories.includes(selectedCategory);
  });

  const featuredProject = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const nonFeaturedProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id);

  const getAbstractPreview = (project: Project) => {
    switch (project.type) {
      case 'AI Platform':
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between p-5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>URBAN_TELEMETRY_ENGINE</span>
              </span>
              <span className="text-emerald-400">ACTIVE</span>
            </div>
            {/* Abstract animated transit grid lines */}
            <div className="space-y-2 py-4">
              <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent rounded-full w-4/5 animate-pulse" />
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-transparent rounded-full w-3/5" />
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-transparent rounded-full w-full" />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>GPS/GIS INGESTION</span>
              <span>SMART CITY</span>
            </div>
          </div>
        );
      case 'AI Assistant':
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between p-5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-blue-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>RAG_STANDARDS_CORE</span>
              </span>
              <span className="text-cyan-400">GEMINI_API</span>
            </div>
            <div className="space-y-1.5 py-4">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300">
                &gt; Query: Bureau of Indian Standards
              </div>
              <div className="p-2 rounded-lg bg-blue-950/40 border border-blue-800/40 text-[10px] font-mono text-cyan-300">
                &gt; Verified Certification Guidance
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">ASSISTANT ARCHITECTURE</span>
          </div>
        );
      case 'Learning Platform':
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between p-5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-teal-400">
              <span>SKILL_PATHWAY_ENGINE</span>
              <span>GENAI</span>
            </div>
            <div className="flex items-center justify-between gap-2 py-4">
              <div className="flex-1 p-2 rounded-lg bg-slate-900 text-center text-[10px] font-mono text-slate-300">
                Assess
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
              <div className="flex-1 p-2 rounded-lg bg-teal-950/50 text-center text-[10px] font-mono text-teal-300">
                Recommend
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">LEARNING MATRIX</span>
          </div>
        );
      case 'Power BI Dashboard':
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between p-5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-amber-400" />
                <span>POWER_BI_ANALYTICS</span>
              </span>
              <span>DAX</span>
            </div>
            <div className="h-16 flex items-end justify-between gap-1.5 px-2 py-2">
              {[60, 85, 45, 95, 70, 80].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-amber-500/80 rounded-t-sm" />
              ))}
            </div>
            <span className="text-[10px] font-mono text-slate-500">MULTI-DIMENSIONAL DASHBOARD</span>
          </div>
        );
      case 'Tableau Dashboard':
        return (
          <div className="relative w-full h-full bg-slate-950 flex flex-col justify-between p-5 overflow-hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-sky-400">
              <span className="flex items-center gap-1.5">
                <PieChart className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>COVID19_INDIA_TABLEAU_TRACKER</span>
              </span>
              <span className="px-1.5 py-0.5 rounded bg-sky-500/10 text-[9px] text-sky-300 font-mono">INDIA_ANALYTICS</span>
            </div>
            <div className="flex items-end justify-between gap-2 py-1 px-1">
              <div className="space-y-1 w-24">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>CASES</span>
                  <span className="text-cyan-300">ACTIVE</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full w-4/5" />
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                  <span>RECOVERY</span>
                  <span className="text-emerald-400">TREND</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[90%]" />
                </div>
              </div>
              <div className="flex items-end gap-1 h-12">
                {[35, 50, 85, 95, 70, 80, 55, 45].map((val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val}%` }}
                    className={`w-2 rounded-t-sm ${idx >= 5 ? 'bg-cyan-400' : 'bg-sky-500/70'}`}
                  />
                ))}
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500">TIME-SERIES & STATEWISE STORY POINTS</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                APPLIED PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              SELECTED PROJECTS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              From data dashboards to AI-powered platforms.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold tracking-wider rounded-xl transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED PROJECT (Large Horizontal Layout) */}
        {featuredProject && (selectedCategory === 'All' || featuredProject.categories.includes(selectedCategory)) && (
          <div className="mb-12 sm:mb-14">
            <CardTilt3D maxTilt={2} scale={1.008} className="rounded-3xl">
              <div className="relative rounded-3xl border border-sky-500/35 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden group depth-card">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left: Project Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-gradient-to-r from-blue-600 to-cyan-500 text-white shrink-0">
                        FEATURED PROJECT · 01
                      </span>
                      <span className="text-xs font-mono text-cyan-400">
                        {featuredProject.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                        {featuredProject.name}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-cyan-300 italic mt-1">
                        "{featuredProject.tagline}"
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {featuredProject.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                        CORE TECHNOLOGIES:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95 shrink-0"
                        >
                          <span>VIEW LIVE PROJECT</span>
                          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      )}
                      <button
                        onClick={() => setActiveModalProject(featuredProject)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-850 hover:bg-slate-800 text-slate-200 text-xs font-bold tracking-wider uppercase transition-colors shrink-0"
                      >
                        <span>DETAILS & ARCHITECTURE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Architecture & Data Simulation Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl border border-sky-500/25 bg-slate-950 p-6 shadow-2xl space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                        <span className="text-cyan-400 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>RAG_STANDARDS_CORE</span>
                        </span>
                        <span className="text-emerald-400 font-bold">ONLINE</span>
                      </div>

                      {/* Animated Assistant Graphic Simulation */}
                      <div className="relative h-44 rounded-xl bg-slate-900/60 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <span>Bureau of Indian Standards Retrieval</span>
                            <span className="text-cyan-400">Gemini API</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                            <span className="text-cyan-400 font-bold">&gt;</span> Verification: Hallmarking & HUID Standards
                          </div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <div className="flex items-center justify-between text-slate-300 font-mono text-[11px]">
                            <span>Active Knowledge Base</span>
                            <span className="text-emerald-400 font-bold">Verified Directives</span>
                          </div>
                          <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                            <span>Query Latency</span>
                            <span className="text-cyan-300">&lt; 320ms Real-time</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
                        <span className="truncate pr-2">{featuredProject.tagline || featuredProject.name}</span>
                        <span className="text-cyan-400 shrink-0">Vercel Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          </div>
        )}

        {/* OTHER PROJECTS (Editorial Cards Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {nonFeaturedProjects.map((project, idx) => {
            const projectNumber = `0${idx + 2}`;

            return (
              <CardTilt3D
                key={project.id}
                maxTilt={4}
                className="h-full rounded-2xl sm:rounded-3xl"
                onClick={() => setActiveModalProject(project)}
              >
                <div
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-900/90 hover:border-sky-500/40 p-4 xs:p-5 sm:p-6 transition-all duration-300 shadow-xl cursor-pointer h-full depth-card"
                >
                  <div>
                    {/* Top Bar with Number & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-black text-cyan-400 tracking-wider">
                        PROJECT {projectNumber}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-400 shrink-0">
                        {project.type}
                      </span>
                    </div>

                    {/* Abstract Preview Placeholder */}
                    <div className="mb-5 rounded-2xl overflow-hidden border border-slate-800 aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.02]">
                      {getAbstractPreview(project)}
                    </div>

                    {/* Title & Arrow */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-black text-white tracking-wide uppercase group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all">
                        {project.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div
                    className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="font-mono text-[11px] font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>INSPECT DETAILS</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg inline-flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
                          aria-label={`GitHub for ${project.name}`}
                        >
                          <Github className="w-3.5 h-3.5 shrink-0" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/30 hover:bg-blue-600/50 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-bold transition-colors shrink-0"
                        >
                          <span>LIVE</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>

      {/* PROJECT DETAILS INTERACTION MODAL */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl border border-sky-500/30 bg-slate-900/95 p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 w-9 h-9 inline-flex items-center justify-center text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5 shrink-0" />
            </button>

            {/* Header */}
            <div className="space-y-1 mb-5">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                {activeModalProject.type}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                {activeModalProject.name}
              </h3>
              {activeModalProject.tagline && (
                <p className="text-sm font-semibold italic text-cyan-300">
                  "{activeModalProject.tagline}"
                </p>
              )}
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
              {activeModalProject.description}
            </p>

            {/* Features */}
            {activeModalProject.features && (
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  KEY FEATURES & ARCHITECTURE:
                </span>
                <div className="space-y-2">
                  {activeModalProject.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                TECHNOLOGY STACK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold transition-colors shrink-0"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>REPOSITORY</span>
                </a>
              )}
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-mono font-bold shadow-md shadow-cyan-500/25 transition-all active:scale-95 shrink-0"
                >
                  <span>LAUNCH LIVE PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
