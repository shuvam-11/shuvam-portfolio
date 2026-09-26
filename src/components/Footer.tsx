import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-slate-900">
          {/* Brand & Roles */}
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black tracking-widest text-white uppercase">
              {PERSONAL_INFO.displayName}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold tracking-wide">
              {PERSONAL_INFO.roleTitle}
            </p>
          </div>

          {/* Social Channels Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-white inline-flex items-center justify-center transition-colors shrink-0"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-white inline-flex items-center justify-center transition-colors shrink-0"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-white inline-flex items-center justify-center transition-colors shrink-0"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4 shrink-0" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-white inline-flex items-center justify-center transition-colors shrink-0"
              aria-label="Email Shuvam"
            >
              <Mail className="w-4 h-4 shrink-0" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-400 hover:text-white inline-flex items-center justify-center transition-colors ml-1 sm:ml-2 shrink-0"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400 shrink-0" />
            </button>
          </div>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <p>© 2026 SHUVAM JENA</p>
          <p>DRIEMS UNIVERSITY · CLASS OF 2028</p>
        </div>
      </div>
    </footer>
  );
}
