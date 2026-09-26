import { useState } from 'react';
import {
  BarChart3,
  Code2,
  Database,
  Globe,
  Cpu,
  Wrench,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import CardTilt3D from './CardTilt3D';

interface SkillItem {
  name: string;
  detail: string;
}

interface SkillCategoryData {
  title: string;
  categoryTag: string;
  skills: SkillItem[];
  icon: (className?: string) => React.ReactNode;
  borderAccent: string;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: SkillCategoryData[] = [
    {
      title: 'DATA ANALYTICS',
      categoryTag: 'PRIMARY SPECIALIZATION',
      borderAccent: 'hover:border-cyan-400/50',
      icon: (c = 'w-5 h-5 text-cyan-400') => <BarChart3 className={c} />,
      skills: [
        { name: 'Power BI', detail: 'DAX modeling, cross-filtering & business intelligence' },
        { name: 'Tableau', detail: 'Story points, multi-dimensional charts & visual analytics' },
        { name: 'Excel', detail: 'Pivot tables, analytical reporting & statistical modeling' },
        { name: 'Data Analysis', detail: 'Exploratory data analysis & statistical pattern discovery' },
        { name: 'Data Visualization', detail: 'Translating multi-metric data into clear visual narratives' },
        { name: 'Dashboard Development', detail: 'End-to-end interactive dashboard design & deployment' },
      ],
    },
    {
      title: 'PROGRAMMING',
      categoryTag: 'CORE LOGIC & ENGINEERING',
      borderAccent: 'hover:border-blue-400/50',
      icon: (c = 'w-5 h-5 text-blue-400') => <Code2 className={c} />,
      skills: [
        { name: 'Python', detail: 'Pandas, NumPy, data manipulation & pipeline automation' },
        { name: 'C', detail: 'Foundational memory management & algorithm engineering' },
        { name: 'JavaScript', detail: 'Modern ES6+ asynchronous web programming & tooling' },
      ],
    },
    {
      title: 'DATABASE',
      categoryTag: 'PERSISTENCE & SCHEMAS',
      borderAccent: 'hover:border-indigo-400/50',
      icon: (c = 'w-5 h-5 text-indigo-400') => <Database className={c} />,
      skills: [
        { name: 'SQL', detail: 'Complex joins, window functions, aggregations & query tuning' },
        { name: 'MongoDB', detail: 'Document data modeling, aggregations & NoSQL persistence' },
      ],
    },
    {
      title: 'FULL-STACK',
      categoryTag: 'WEB ARCHITECTURE',
      borderAccent: 'hover:border-sky-400/50',
      icon: (c = 'w-5 h-5 text-sky-400') => <Globe className={c} />,
      skills: [
        { name: 'React', detail: 'Functional components, hooks, state management & SPAs' },
        { name: 'Node.js', detail: 'Server-side runtime & asynchronous microservices' },
        { name: 'Express.js', detail: 'RESTful API architecture & backend routing middleware' },
        { name: 'HTML', detail: 'Semantic structuring, accessibility & web standards' },
        { name: 'CSS', detail: 'Tailwind CSS, responsive fluid layouts & glassmorphism' },
      ],
    },
    {
      title: 'AI & TECHNOLOGY',
      categoryTag: 'INTELLIGENT SYSTEMS',
      borderAccent: 'hover:border-teal-400/50',
      icon: (c = 'w-5 h-5 text-teal-400') => <Cpu className={c} />,
      skills: [
        { name: 'Generative AI', detail: 'Prompt orchestration, LLM grounding & synthetic reasoning' },
        { name: 'Google Gemini API', detail: 'Multimodal model integrations & structured outputs' },
        { name: 'RAG', detail: 'Retrieval-Augmented Generation with contextual embeddings' },
        { name: 'Machine Learning Basics', detail: 'Supervised classification, regression & evaluation' },
      ],
    },
    {
      title: 'TOOLS',
      categoryTag: 'DEVELOPMENT WORKFLOW',
      borderAccent: 'hover:border-amber-400/50',
      icon: (c = 'w-5 h-5 text-amber-400') => <Wrench className={c} />,
      skills: [
        { name: 'Git', detail: 'Version control branching, merges & commit hygiene' },
        { name: 'GitHub', detail: 'Collaborative code reviews, pull requests & repositories' },
        { name: 'VS Code', detail: 'Custom productivity setups, extensions & debugging workflows' },
      ],
    },
  ];

  return (
    <section id="skills" className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                TECHNOLOGY STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              TOOLS I BUILD WITH
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl">
              Hover over any tool to inspect technical capabilities. Zero fake percentages—grounded entirely in practical development.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 shrink-0">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Interactive Stack Matrix</span>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => {
            const isPrimary = category.title === 'DATA ANALYTICS';

            return (
              <CardTilt3D
                key={category.title}
                maxTilt={3}
                scale={1.01}
                className="h-full rounded-2xl sm:rounded-3xl"
              >
                <div
                  className={`relative rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 transition-all duration-300 border bg-slate-900/60 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full depth-card ${
                    isPrimary
                      ? 'border-cyan-500/40 shadow-cyan-950/20'
                      : 'border-slate-800/80 hover:border-sky-500/40'
                  }`}
                >
                  <div>
                    {/* Header of Category Card */}
                    <div className="flex items-start justify-between gap-2 mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center shrink-0">
                          {category.icon()}
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wider uppercase">
                            {category.title}
                          </h3>
                          <span className="text-[10px] font-mono font-semibold text-cyan-400/90 block">
                            {category.categoryTag}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Skill Items */}
                    <div className="space-y-2">
                      {category.skills.map((skill) => {
                        const isHovered = hoveredSkill === skill.name;

                        return (
                          <div
                            key={skill.name}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            className={`group p-3 rounded-xl transition-all duration-200 border cursor-pointer ${
                              isHovered
                                ? 'bg-slate-950 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)] -translate-x-0.5'
                                : 'bg-slate-950/60 border-slate-800/70 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                                    isHovered ? 'text-cyan-400' : 'text-slate-500'
                                  }`}
                                />
                                <span
                                  className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                                    isHovered ? 'text-white' : 'text-slate-200'
                                  }`}
                                >
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors shrink-0">
                                {isHovered ? 'Active' : '•'}
                              </span>
                            </div>

                            {/* Description Reveal on Hover */}
                            <div
                              className={`grid transition-all duration-300 ease-in-out ${
                                isHovered ? 'grid-rows-[1fr] opacity-100 pt-2' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <p className="overflow-hidden text-[11px] text-cyan-300/90 leading-relaxed font-mono">
                                {skill.detail}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
