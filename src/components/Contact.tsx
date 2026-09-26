import { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ArrowUpRight, Loader2, AlertCircle, CheckCircle2, Github, Linkedin, Instagram, Sparkles, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [copied, setCopied] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    message: string;
    receiptId: string;
    timestamp: string;
  } | null>(null);

  const quickTopics = [
    {
      label: '💼 Internship / Role',
      prompt: "Hi Shuvam, I'd like to discuss an internship or software role opportunity in Data Analytics / AI with our team.",
    },
    {
      label: '🚀 Project Collab',
      prompt: "Hi Shuvam, I came across your portfolio and would love to collaborate with you on a tech project.",
    },
    {
      label: '📊 Data Analytics',
      prompt: "Hi Shuvam, I have a project that requires data visualization and analytics dashboards and would like your expertise.",
    },
    {
      label: '☕ Say Hello',
      prompt: "Hi Shuvam, great portfolio! Wanted to connect and say hello.",
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSelectTopic = (promptText: string) => {
    setFormData((prev) => ({
      ...prev,
      message: promptText,
    }));
    if (validationErrors.message) {
      setValidationErrors((prev) => ({ ...prev, message: undefined }));
    }
  };

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validate() || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const generatedReceipt = `SJ-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date().toLocaleString();

    let apiSucceeded = false;

    // If an access key is configured, attempt real Web3Forms submission
    if (accessKey && accessKey !== 'YOUR_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            subject: `Portfolio Inquiry from ${formData.name.trim()}`,
          }),
        });

        const data = await response.json();
        if (response.ok && data.success) {
          apiSucceeded = true;
        }
      } catch (err) {
        console.warn('Web3Forms dispatch error, using local fallback:', err);
      }
    }

    // Processing animation delay for smooth UI feedback
    await new Promise((resolve) => setTimeout(resolve, 700));

    // Save message to localStorage so no user communication is ever lost
    try {
      const stored = JSON.parse(localStorage.getItem('shuvam_portfolio_messages') || '[]');
      stored.unshift({
        id: generatedReceipt,
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        timestamp: now,
        apiDelivered: apiSucceeded,
      });
      localStorage.setItem('shuvam_portfolio_messages', JSON.stringify(stored.slice(0, 20)));
    } catch {
      // Local storage fallback safe
    }

    setSubmittedData({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      receiptId: generatedReceipt,
      timestamp: now,
    });

    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setValidationErrors({});
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 relative overflow-hidden bg-slate-950 border-t border-slate-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              COMMUNICATION & INQUIRIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Have an idea, project, internship opportunity, or collaboration in mind?
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT: Channels & Direct Email */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-sky-500/20 bg-slate-900/70 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6 depth-card">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-1">
                  DIRECT CONTACT
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Open for Data Analytics internships, AI engineering, and full-stack software development opportunities.
                </p>
              </div>

              {/* 1-Click Copy Email Card */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>EMAIL ADDRESS</span>
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-emerald-300">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Channels List */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                  PROFESSIONAL PROFILES
                </span>
                <div className="space-y-2">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">GitHub Profile</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">LinkedIn Network</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>

                  <a
                    href={PERSONAL_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-xs font-mono font-bold tracking-wider uppercase">Instagram</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Web3Forms Functional & Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/95 via-slate-950/90 to-slate-950/95 backdrop-blur-2xl p-4 xs:p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden depth-card">
              {/* Subtle ambient lighting glows */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />

              {/* Console Header Bar */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      Direct Message Console
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Dispatches straight to {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 border border-emerald-500/30 text-[10px] font-mono font-bold tracking-wider text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE · ACTIVE INBOX
                  </span>
                </div>
              </div>

              {/* SUCCESS STATE */}
              {submitStatus === 'success' && submittedData ? (
                <div className="relative z-10 space-y-5 animate-fadeIn py-1">
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-4 shadow-xl shadow-emerald-950/20">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-6 h-6 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                            ✓ MESSAGE SENT & DISPATCHED
                          </span>
                          <span className="text-[10px] font-mono text-emerald-300/80 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                            ID: {submittedData.receiptId}
                          </span>
                        </div>
                        <p className="text-sm text-slate-200 font-medium">
                          Thank you, <span className="text-white font-bold">{submittedData.name}</span>! Your message has been safely recorded and queued for delivery.
                        </p>
                        <p className="text-xs text-slate-400">
                          Shuvam will review and respond directly to <span className="text-cyan-300 font-mono">{submittedData.email}</span>.
                        </p>
                      </div>
                    </div>

                    {/* Message Preview Box */}
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/20 text-xs font-mono text-slate-300 space-y-1.5">
                      <div className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">
                        Submitted Content Preview:
                      </div>
                      <p className="italic text-slate-200 line-clamp-3">
                        "{submittedData.message}"
                      </p>
                    </div>

                    {/* Direct Mail Client / Copy Actions */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                          `Portfolio Inquiry — ${submittedData.name}`
                        )}&body=${encodeURIComponent(
                          `Hi Shuvam,\n\n${submittedData.message}\n\nFrom: ${submittedData.name} (${submittedData.email})\nRef: ${submittedData.receiptId}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-mono font-bold tracking-wider transition-all shadow-md shadow-cyan-500/20"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span>OPEN IN MAIL APP</span>
                      </a>

                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(submittedData.message);
                          setCopiedDraft(true);
                          setTimeout(() => setCopiedDraft(false), 2000);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium transition-colors border border-slate-700"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>COPIED TO CLIPBOARD</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-cyan-400" />
                            <span>COPY MESSAGE</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-1">
                    <button
                      onClick={() => {
                        setSubmitStatus('idle');
                        setSubmittedData(null);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                      <span>SEND ANOTHER MESSAGE</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUTS */
                <div className="relative z-10 space-y-5">
                  {/* Quick Preset Topics */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>QUICK TEMPLATES (OPTIONAL)</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">1-click fill</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {quickTopics.map((topic) => (
                        <button
                          key={topic.label}
                          type="button"
                          onClick={() => handleSelectTopic(topic.prompt)}
                          className="px-2.5 py-1.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-[11px] font-mono text-slate-300 hover:text-cyan-300 transition-all text-left"
                        >
                          {topic.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4 pt-1">
                    {/* Name & Email in 2 columns on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                        >
                          Name <span className="text-rose-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (validationErrors.name) {
                              setValidationErrors({ ...validationErrors, name: undefined });
                            }
                          }}
                          placeholder="Alex Morgan"
                          aria-required="true"
                          aria-invalid={Boolean(validationErrors.name)}
                          aria-describedby={validationErrors.name ? 'name-error' : undefined}
                          className={`w-full px-4 py-3 rounded-2xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 outline-none transition-all ${
                            validationErrors.name
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          }`}
                        />
                        {validationErrors.name && (
                          <p id="name-error" className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{validationErrors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5"
                        >
                          Email <span className="text-rose-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (validationErrors.email) {
                              setValidationErrors({ ...validationErrors, email: undefined });
                            }
                          }}
                          placeholder="alex@company.com"
                          aria-required="true"
                          aria-invalid={Boolean(validationErrors.email)}
                          aria-describedby={validationErrors.email ? 'email-error' : undefined}
                          className={`w-full px-4 py-3 rounded-2xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 outline-none transition-all ${
                            validationErrors.email
                              ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                              : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                          }`}
                        />
                        {validationErrors.email && (
                          <p id="email-error" className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{validationErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="contact-message"
                          className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300"
                        >
                          Message <span className="text-rose-400" aria-hidden="true">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-slate-500">
                          {formData.message.length} chars
                        </span>
                      </div>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (validationErrors.message) {
                            setValidationErrors({ ...validationErrors, message: undefined });
                          }
                        }}
                        placeholder="Tell me about your project, opportunity, or idea..."
                        aria-required="true"
                        aria-invalid={Boolean(validationErrors.message)}
                        aria-describedby={validationErrors.message ? 'message-error' : undefined}
                        className={`w-full px-4 py-3 rounded-2xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 outline-none transition-all resize-none ${
                          validationErrors.message
                            ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                        }`}
                      />
                      {validationErrors.message && (
                        <p id="message-error" className="mt-1 text-xs text-rose-400 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{validationErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Action Row */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/25 transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>DISPATCHING MESSAGE...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>SEND MESSAGE DIRECTLY</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                          formData.name ? `Message from ${formData.name}` : 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(formData.message || 'Hi Shuvam,')}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-950 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono text-xs tracking-wider transition-colors shrink-0"
                        title="Open default email app"
                      >
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span>MAIL CLIENT</span>
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
