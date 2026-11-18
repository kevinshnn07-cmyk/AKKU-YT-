import {ArrowUpRight, Check, Copy, Pause, Play, Send, X} from 'lucide-react';
import {FormEvent, useEffect, useState} from 'react';
import type {NavSection} from './Navbar';
import type {DisciplinePillar} from './HeroSection';

interface ShowreelModalProps {
  open: boolean;
  initialPillar: DisciplinePillar;
  onClose: () => void;
}

const REEL_CHAPTERS: {
  id: DisciplinePillar;
  title: string;
  duration: string;
  summary: string;
}[] = [
  {
    id: 'CODE',
    title: 'Clean TypeScript & Full-Stack Architecture',
    duration: '00:18',
    summary:
      'Modular React applications backed by resilient REST APIs, relational data modeling, and sub-50ms interactions.',
  },
  {
    id: 'DESIGN',
    title: 'Glassmorphism & Precision Interface Systems',
    duration: '00:24',
    summary:
      'High-contrast dark surfaces, deliberate typographic hierarchy, and fluid 60fps micro-interactions.',
  },
  {
    id: 'CREATE',
    title: 'End-to-End Product Delivery',
    duration: '00:22',
    summary:
      'From initial discovery wireframes to production cloud deployments with automated CI/CD pipelines.',
  },
  {
    id: 'EXPLORE',
    title: 'Interactive Web Experiences',
    duration: '00:16',
    summary:
      'Experimental motion choreography, real-time analytics visualizations, and adaptive multi-device layouts.',
  },
];

export function ShowreelModal({
  open,
  initialPillar,
  onClose,
}: ShowreelModalProps) {
  const [activeChapter, setActiveChapter] =
    useState<DisciplinePillar>(initialPillar);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(28);

  useEffect(() => {
    setActiveChapter(initialPillar);
  }, [initialPillar]);

  useEffect(() => {
    if (!open || !isPlaying) return;
    const timer = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 150);
    return () => window.clearInterval(timer);
  }, [open, isPlaying]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const currentChapter =
    REEL_CHAPTERS.find((c) => c.id === activeChapter) ?? REEL_CHAPTERS[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Developer Showreel"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/15 bg-[#09090E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#818CF8]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-zinc-300 uppercase">
              DEVELOPER SHOWREEL · 2026
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close showreel"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Simulated Reel Viewport */}
        <div className="relative flex aspect-video flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0B0D18] via-[#06060A] to-[#0D0A1A] p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B96FF]/15 blur-3xl"
          />
          <div className="relative z-10 flex items-center justify-between text-[11px] tracking-[0.2em] text-zinc-400 uppercase">
            <span>CHAPTER · {currentChapter.id}</span>
            <span className="tabular-nums">{currentChapter.duration}</span>
          </div>

          <div className="relative z-10 max-w-lg">
            <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {currentChapter.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {currentChapter.summary}
            </p>
          </div>

          {/* Playback Controls */}
          <div className="relative z-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="ml-0.5 h-4 w-4 fill-black" />
              )}
            </button>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7B96FF] to-[#A78BFA] transition-all duration-150"
                style={{width: `${progress}%`}}
              />
            </div>
          </div>
        </div>

        {/* Chapter Switcher */}
        <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 sm:grid-cols-4">
          {REEL_CHAPTERS.map((chapter) => {
            const active = chapter.id === activeChapter;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => {
                  setActiveChapter(chapter.id);
                  setProgress(12);
                }}
                className={`cursor-pointer px-4 py-3.5 text-left transition-colors ${
                  active
                    ? 'bg-white/[0.06] text-white'
                    : 'text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200'
                }`}
              >
                <div className="text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {chapter.id}
                </div>
                <div className="mt-1 truncate text-xs text-zinc-400">
                  {chapter.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface ConnectModalProps {
  open: boolean;
  onClose: () => void;
}

export function ConnectModal({open, onClose}: ConnectModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('hello@creativedev.studio');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Connect with Creative Developer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border border-white/15 bg-[#09090E] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#93A8FF] uppercase">
              GET IN TOUCH
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
              Let&apos;s build something great together.
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
          <span className="text-xs text-zinc-300">hello@creativedev.studio</span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex cursor-pointer items-center gap-1.5 text-[11px] font-medium tracking-[0.12em] text-zinc-300 uppercase hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-[#93A8FF]" />
                <span>COPIED</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>COPY</span>
              </>
            )}
          </button>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#818CF8]/20 text-[#93A8FF]">
              <Check className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-white">
              Message Received
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Thanks, {name}. Your project note has been queued and I&apos;ll
              follow up at {email}.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-full bg-white px-6 py-2.5 text-[11px] font-bold tracking-[0.14em] text-black uppercase hover:bg-zinc-200"
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="connect-name"
                className="block text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase"
              >
                Your Name
              </label>
              <input
                id="connect-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-[#818CF8] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="connect-email"
                className="block text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase"
              >
                Email Address
              </label>
              <input
                id="connect-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-[#818CF8] focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="connect-message"
                className="block text-[11px] font-medium tracking-[0.16em] text-zinc-400 uppercase"
              >
                Project Brief
              </label>
              <textarea
                id="connect-message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your product goals, timeline, and scope..."
                className="mt-1.5 w-full resize-none rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-[#818CF8] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-[11px] font-bold tracking-[0.14em] text-black uppercase transition-colors hover:bg-zinc-200"
            >
              <span>SEND MESSAGE</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

interface SectionDrawerProps {
  section: Exclude<NavSection, 'HOME' | 'CONTACT'> | null;
  onClose: () => void;
  onOpenConnect: () => void;
}

const SECTION_DATA: Record<
  Exclude<NavSection, 'HOME' | 'CONTACT'>,
  {
    kicker: string;
    title: string;
    description: string;
    items: {title: string; subtitle: string; meta: string}[];
  }
> = {
  ABOUT: {
    kicker: 'WHAT I DO',
    title: 'Crafting Digital Experiences',
    description:
      'From concept to deployment, I focus on building user-friendly and visually engaging solutions that deliver real impact.',
    items: [
      {
        title: 'Web Development',
        subtitle:
          'Building responsive, fast, and accessible web applications with modern frontend architecture.',
        meta: 'React · TypeScript · Tailwind CSS',
      },
      {
        title: 'UI/UX Design',
        subtitle:
          'Designing intuitive and engaging user experiences rooted in clear hierarchy and visual restraint.',
        meta: 'Design Systems · Figma · Prototyping',
      },
      {
        title: 'Full Stack Solutions',
        subtitle:
          'End-to-end engineering across APIs, databases, and scalable cloud infrastructure.',
        meta: 'Node.js · PostgreSQL · Docker',
      },
      {
        title: 'Problem Solving',
        subtitle:
          'Turning complex product ideas into practical, maintainable, and high-performance software.',
        meta: 'Architecture · Testing · Optimization',
      },
    ],
  },
  PROJECTS: {
    kicker: 'FEATURED PROJECTS',
    title: 'Selected Work',
    description:
      'Production web applications engineered for clarity, speed, and enduring user engagement.',
    items: [
      {
        title: 'Project One',
        subtitle:
          'A modern web application with powerful workflow features and sleek dark interface design.',
        meta: 'React · Redux · Tailwind CSS',
      },
      {
        title: 'Project Two',
        subtitle:
          'A robust telemetry dashboard with real-time analytics, streaming charts, and actionable insights.',
        meta: 'React · Framer Motion · MySQL',
      },
      {
        title: 'Project Three',
        subtitle:
          'An immersive web platform built with a sharp focus on Core Web Vitals and responsive UX.',
        meta: 'React · Tailwind CSS · REST API',
      },
    ],
  },
  SKILLS: {
    kicker: 'TECH STACK',
    title: 'Core Technologies',
    description:
      'A focused, battle-tested toolkit spanning frontend craft, backend services, and cloud tooling.',
    items: [
      {
        title: 'Frontend & Motion',
        subtitle: 'Component architecture, state management, and smooth motion.',
        meta: 'React · JavaScript · Tailwind CSS · Figma',
      },
      {
        title: 'Backend & Languages',
        subtitle: 'Type-safe APIs, microservices, and concurrent application logic.',
        meta: 'Node.js · Java · Spring Boot',
      },
      {
        title: 'Databases & Cloud',
        subtitle: 'Relational schema design, containerization, and cloud delivery.',
        meta: 'PostgreSQL · MySQL · Docker · AWS · Git',
      },
    ],
  },
  EXPERIENCE: {
    kicker: 'MY PROCESS',
    title: 'How Ideas Become Reality',
    description:
      'A structured four-phase delivery workflow built around clarity, iteration, and reliability.',
    items: [
      {
        title: '01. Discover',
        subtitle: 'Understand goals, audience needs, and the strategic big picture.',
        meta: 'Research · Scoping',
      },
      {
        title: '02. Design',
        subtitle: 'Craft user-centered UI systems and map out the architecture.',
        meta: 'Wireframes · Systems',
      },
      {
        title: '03. Develop',
        subtitle: 'Build, iterate, and test with modern full-stack engineering tools.',
        meta: 'Implementation · QA',
      },
      {
        title: '04. Deliver',
        subtitle: 'Optimize performance, verify accessibility, and launch to production.',
        meta: 'Deployment · Monitoring',
      },
    ],
  },
};

export function SectionDrawer({
  section,
  onClose,
  onOpenConnect,
}: SectionDrawerProps) {
  useEffect(() => {
    if (!section) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [section, onClose]);

  if (!section) return null;

  const content = SECTION_DATA[section];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={content.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#09090E] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-[11px] font-medium tracking-[0.22em] text-[#93A8FF] uppercase">
              {content.kicker}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {content.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {content.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close section overview"
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/25"
            >
              <h3 className="font-display text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {item.subtitle}
              </p>
              <div className="mt-3 text-[11px] font-medium text-zinc-500">
                {item.meta}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full border border-white/15 px-5 py-2 text-[11px] font-semibold tracking-[0.14em] text-zinc-300 uppercase hover:border-white/35 hover:text-white"
          >
            BACK TO HERO
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConnect();
            }}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2 text-[11px] font-bold tracking-[0.14em] text-black uppercase hover:bg-zinc-200"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
