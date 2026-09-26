import { useState, useEffect } from 'react';
import { Github, ExternalLink, GitBranch, Star, Code2, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.github.com/users/shuvam-11/repos?sort=updated&per_page=6');
        if (!res.ok) {
          throw new Error('API unavailable or rate limited');
        }
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
          setFetchError(false);
        } else {
          setFetchError(true);
        }
      } catch {
        setFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <section id="github" className="py-14 sm:py-16 lg:py-20 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
                PUBLIC REPOSITORIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              OPEN SOURCE & DEVELOPMENT
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Building, experimenting and learning through code.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 hover:border-cyan-400 text-white font-mono text-xs font-bold uppercase shadow-lg transition-all self-start md:self-auto hover:-translate-y-0.5 active:scale-95 shrink-0"
          >
            <Github className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>VIEW MY GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </a>
        </div>

        {/* Repositories Display or Clean Profile Card */}
        {loading ? (
          <div className="p-12 text-center rounded-3xl border border-slate-800 bg-slate-900/40">
            <div className="inline-flex items-center gap-2 text-sm font-mono text-slate-400">
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-400 shrink-0" />
              <span>Fetching verified public repos for @shuvam-11...</span>
            </div>
          </div>
        ) : !fetchError && repos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between h-full p-4 xs:p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 hover:bg-slate-900/90 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl depth-card"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Code2 className="w-3.5 h-3.5 shrink-0" />
                      <span>REPO</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors shrink-0" />
                  </div>

                  <h3 className="text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors mb-2 font-mono truncate">
                    {repo.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {repo.description || 'Public software engineering and data analytics repository.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-slate-300 font-semibold">{repo.language || 'Code'}</span>
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{repo.forks_count}</span>
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-sky-500/25 bg-slate-900/80 p-8 sm:p-10 text-center max-w-xl mx-auto shadow-2xl space-y-5">
            <div className="inline-flex p-4 rounded-3xl bg-slate-950 border border-slate-800 text-cyan-400 shadow-md">
              <Github className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                shuvam-11 on GitHub
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                Explore open source repositories, Data Analytics pipelines, and full-stack applications directly on GitHub.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs uppercase shadow-md shadow-cyan-500/20 active:scale-95 transition-all shrink-0"
              >
                <span>VIEW MY GITHUB</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
