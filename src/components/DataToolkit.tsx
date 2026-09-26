import { useState } from 'react';
import {
  Database,
  FileSpreadsheet,
  BarChart,
  PieChart,
  Terminal,
  ArrowRight,
  TrendingUp,
  Layers,
  Sparkles,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export default function DataToolkit() {
  const [activeTool, setActiveTool] = useState<'sql' | 'excel' | 'powerbi' | 'tableau' | 'python'>('powerbi');

  const tools = [
    {
      id: 'sql' as const,
      name: 'SQL',
      title: 'Relational Query Engine',
      description: 'Querying, filtering and analyzing structured datasets with complex window joins and aggregations.',
      icon: <Database className="w-5 h-5 text-blue-400" />,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'excel' as const,
      name: 'Excel',
      title: 'Spreadsheet Modeling',
      description: 'Data cleaning, advanced formulas, multi-dimensional pivot tables and analytical reporting.',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-400" />,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      id: 'powerbi' as const,
      name: 'Power BI',
      title: 'Business Intelligence',
      description: 'Interactive dashboards, DAX calculated measures, cross-filtering, and executive visual models.',
      icon: <BarChart className="w-5 h-5 text-amber-400" />,
      color: 'from-amber-600 to-yellow-600',
    },
    {
      id: 'tableau' as const,
      name: 'Tableau',
      title: 'Visual Analytics & Storytelling',
      description: 'Interactive visual analytics, cohort scatter plots, parameter actions, and dashboard storytelling.',
      icon: <PieChart className="w-5 h-5 text-sky-400" />,
      color: 'from-sky-600 to-cyan-600',
    },
    {
      id: 'python' as const,
      name: 'Python',
      title: 'Data Wrangling & Automation',
      description: 'Pandas & NumPy data transformations, script automation, statistical logic, and API workflows.',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      color: 'from-cyan-600 to-blue-600',
    },
  ];

  const pipelineStages = [
    { label: 'RAW DATA', sub: 'Ingestion' },
    { label: 'CLEAN', sub: 'Structuring' },
    { label: 'ANALYZE', sub: 'Modeling' },
    { label: 'VISUALIZE', sub: 'Dashboarding' },
    { label: 'INSIGHT', sub: 'Decision Impact' },
  ];

  const currentTool = tools.find((t) => t.id === activeTool) || tools[0];

  return (
    <section id="toolkit" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              ANALYTICS COMMAND CENTER
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            DATA INTO INSIGHT
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            From raw structured datasets to actionable visual intelligence—exploring the analytical pipeline.
          </p>
        </div>

        {/* ANIMATED PIPELINE FLOW STRIP */}
        <div className="mb-10 sm:mb-12 p-4 sm:p-6 rounded-3xl bg-slate-900/60 border border-sky-500/20 backdrop-blur-xl shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>THE ANALYTIC TRANSFORMATION FLOW</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
              END-TO-END PIPELINE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {pipelineStages.map((stage, idx) => (
              <div
                key={stage.label}
                className={`relative group/step ${idx === 4 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''}`}
              >
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-400/50 transition-all text-center h-full flex flex-col justify-center hover:-translate-y-0.5 hover:shadow-md hover:shadow-cyan-950/20">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 block mb-0.5">
                    STAGE 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-black tracking-wider text-white">
                    {stage.label}
                  </p>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    {stage.sub}
                  </span>
                </div>
                {idx < pipelineStages.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-slate-900 border border-slate-700 items-center justify-center text-slate-400">
                    <ArrowRight className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* COMMAND CENTER INTERACTIVE SHELL */}
        <div className="rounded-3xl border border-sky-500/30 bg-slate-900/85 backdrop-blur-2xl shadow-2xl overflow-hidden depth-card">
          {/* Top Console Bar */}
          <div className="px-3.5 sm:px-6 py-3 sm:py-3.5 bg-slate-950 border-b border-slate-800/90 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider sm:tracking-widest uppercase truncate">
                ANALYTICS_COMMAND_CENTER // ARCHITECTURE
              </span>
            </div>

            {/* Five Tool Selector Buttons */}
            <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs w-full sm:w-auto justify-start">
              {tools.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTool(t.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono font-bold text-xs transition-all ${
                    activeTool === t.id
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tool Showcase Grid */}
          <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Tool Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center shrink-0">
                  {currentTool.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    {currentTool.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold text-cyan-400 uppercase">
                    {currentTool.title}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {currentTool.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold block">
                  CORE ANALYTICAL DISCIPLINE:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">DATA MODELING</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">AGGREGATION</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">EXPLORATION</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">INSIGHT ENGINE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Abstract Mini Visualizations (Design Elements Only: Bar Chart, Line Chart, Donut Chart, Data Table, KPI Cards) */}
            <div className="lg:col-span-7 space-y-4">
              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">METRIC ALPHA</span>
                  <p className="text-sm sm:text-base font-black text-cyan-400 font-mono mt-0.5">DATA</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Ingestion Flow</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">METRIC BETA</span>
                  <p className="text-sm sm:text-base font-black text-blue-400 font-mono mt-0.5">ANALYSIS</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Pattern Discovery</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">METRIC GAMMA</span>
                  <p className="text-sm sm:text-base font-black text-emerald-400 font-mono mt-0.5">INSIGHT</p>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Decision Matrix</span>
                </div>
              </div>

              {/* Multi-Panel Visualizations Container */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="font-mono text-slate-400 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>VISUALIZATION WORKBENCH</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">DESIGN SPECIFICATION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Abstract Bar Chart */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">BAR CHART DENSITY</span>
                    <div className="h-24 flex items-end justify-between gap-2 pt-2 px-1">
                      {[40, 75, 55, 90, 65, 80].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div
                            style={{ height: `${h}%` }}
                            className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 opacity-80 hover:opacity-100 transition-opacity"
                          />
                          <span className="text-[8px] font-mono text-slate-500">D{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Abstract Line / Area Chart & Donut Preview */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">DONUT & LINE INDICATORS</span>
                    <div className="flex items-center justify-around py-1">
                      {/* Abstract Donut */}
                      <div className="relative w-16 h-16 rounded-full border-4 border-cyan-400/80 border-t-blue-600 border-r-indigo-500 flex items-center justify-center">
                        <span className="text-[9px] font-mono font-bold text-white">INSIGHT</span>
                      </div>

                      {/* Sparkline Lines */}
                      <div className="space-y-1.5 w-1/2">
                        <div className="h-1.5 rounded-full bg-cyan-400 w-full" />
                        <div className="h-1.5 rounded-full bg-blue-500 w-3/4" />
                        <div className="h-1.5 rounded-full bg-indigo-500 w-1/2" />
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 text-center block">
                      VISUAL SPECTRUM
                    </span>
                  </div>
                </div>

                {/* Abstract Data Table */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-x-auto text-[11px] font-mono">
                  <div className="min-w-[340px]">
                    <div className="grid grid-cols-4 px-3 py-2 bg-slate-900 font-bold text-slate-400 border-b border-slate-800">
                      <div>DATASET</div>
                      <div>ANALYSIS</div>
                      <div>VISUALIZATION</div>
                      <div className="text-right">INSIGHT</div>
                    </div>
                    <div className="divide-y divide-slate-800/60">
                      <div className="grid grid-cols-4 px-3 py-2 text-slate-300">
                        <span className="text-white font-semibold">Structured</span>
                        <span className="text-cyan-400">DAX Measure</span>
                        <span className="text-slate-400">Cohort Grid</span>
                        <span className="text-right text-emerald-400">Aligned</span>
                      </div>
                      <div className="grid grid-cols-4 px-3 py-2 text-slate-300">
                        <span className="text-white font-semibold">Relational</span>
                        <span className="text-cyan-400">Window Query</span>
                        <span className="text-slate-400">Heatmap</span>
                        <span className="text-right text-emerald-400">Modeled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
