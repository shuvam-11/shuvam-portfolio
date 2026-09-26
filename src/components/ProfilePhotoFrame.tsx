import { useState, useRef } from 'react';
import { Upload, Sparkles, Database, BarChart2, ShieldCheck, Cpu } from 'lucide-react';
import { useProfilePhoto } from '../context/ProfilePhotoContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfilePhotoFrameProps {
  variant?: 'hero' | 'about';
  className?: string;
}

export default function ProfilePhotoFrame({ variant = 'hero', className = '' }: ProfilePhotoFrameProps) {
  const { photoSrc, updatePhoto, altText } = useProfilePhoto();
  const [loadFailed, setLoadFailed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          updatePhoto(result);
          setLoadFailed(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const isHero = variant === 'hero';

  return (
    <div className={`relative group ${className}`}>
      {/* Hidden file input for 1-click photo placement */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleFileChange}
        className="hidden"
        aria-label="Upload Shuvam's profile photo"
      />

      {/* Subtle outer tech aura & blue glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-sky-400/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Frame Container */}
      <div className="relative rounded-2xl md:rounded-3xl border border-sky-500/30 bg-slate-950/90 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden">
        {/* Top Tech status header on Hero variant */}
        {isHero && (
          <div className="px-4 py-2.5 bg-slate-950/95 border-b border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-slate-300 font-semibold tracking-wider">SHUVAM_JENA // DEV_ID</span>
            </div>
            <span className="text-cyan-400 font-semibold">DRIEMS CSE '28</span>
          </div>
        )}

        {/* Photo Canvas Area */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          {!loadFailed ? (
            <img
              src={photoSrc}
              alt={altText}
              referrerPolicy="no-referrer"
              onError={() => setLoadFailed(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              style={{
                imageRendering: 'auto',
              }}
            />
          ) : (
            /* Technical Fallback container requesting manual drop of shuvam.png without altering identity */
            <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 max-w-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-0.5 shadow-xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                    SJ
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-wide">{PERSONAL_INFO.fullName}</h4>
                <p className="text-xs text-cyan-400 font-medium">{PERSONAL_INFO.roleTitle}</p>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Click below to select your <code className="text-cyan-300">shuvam.png</code> or place it at{' '}
                <code className="text-cyan-300">/public/shuvam-profile.png</code>.
              </p>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all active:scale-95"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Select shuvam.png</span>
              </button>
            </div>
          )}

          {/* Quick Change / Re-upload button overlay (discreet and subtle in corner) */}
          <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => fileInputRef.current?.click()}
              aria-label="Upload or update profile photo"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/85 hover:bg-slate-900 text-slate-200 text-xs font-medium border border-slate-700/80 backdrop-blur-md shadow-lg"
            >
              <Upload className="w-3 h-3 text-cyan-400" />
              <span>Update Photo</span>
            </button>
          </div>

          {/* Subtle dark gradient scrim at bottom edge for contrast */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
        </div>

        {/* Floating Data & AI badges around portrait on Hero */}
        {isHero && !loadFailed && (
          <>
            {/* Top-Left: Data Analytics Badge */}
            <div className="absolute top-14 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-sky-500/30 backdrop-blur-md shadow-lg text-xs">
              <BarChart2 className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-semibold text-white">Data Analytics</span>
            </div>

            {/* Bottom-Left: AI & Full-Stack Badge */}
            <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-blue-500/30 backdrop-blur-md shadow-lg text-xs">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold text-white">AI & Full-Stack</span>
            </div>

            {/* Bottom-Right: University / Verification Badge */}
            <div className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3 h-3" />
              <span>Verified Profile</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
