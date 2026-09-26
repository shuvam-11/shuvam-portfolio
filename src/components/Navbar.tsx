import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  theme?: 'dark' | 'light';
  toggleTheme?: () => void;
}

export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'CONTACT', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2.5 sm:py-3.5 px-2.5 sm:px-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto">
        <div
          className={`pointer-events-auto flex items-center justify-between px-3 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-950/85 backdrop-blur-2xl border border-sky-500/20 shadow-[0_8px_30px_rgb(0,0,0,0.35)]'
              : 'bg-slate-950/45 backdrop-blur-md border border-white/5 shadow-sm'
          }`}
        >
          {/* Left Corner Brand / Monogram: Sleek & Compact */}
          <Link
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 py-1 px-1.5 sm:px-2 rounded-xl hover:bg-slate-900/60 transition-colors group shrink-0"
            aria-label="Go to homepage"
          >
            <span className="font-mono font-bold text-xs sm:text-sm tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              &lt;SJ.DEV /&gt;
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] xs:text-[9px] font-mono font-bold tracking-wider text-cyan-400 bg-sky-500/10 border border-sky-500/20 uppercase shrink-0">
              DATA & AI
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-3 py-1.5 text-[11px] lg:text-xs font-semibold tracking-wider transition-all duration-200 rounded-full inline-flex items-center justify-center ${
                    isActive
                      ? 'text-cyan-400 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-2.5 -bottom-0.5 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Contact CTA */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-cyan-500/20 transition-all duration-200 active:scale-95 shrink-0"
            >
              <span>CONNECT</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-full text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400 shrink-0" /> : <Menu className="w-5 h-5 shrink-0" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden w-full max-w-sm mx-auto mt-2 rounded-3xl border border-sky-500/20 bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wider transition-colors ${
                    isActive
                      ? 'text-cyan-400 bg-sky-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </Link>
              );
            })}

            <div className="pt-2 border-t border-slate-800/80">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md shadow-cyan-500/20 active:scale-95 transition-all"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
