import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers,
  Terminal,
  X,
} from 'lucide-react';
import {motion} from 'motion/react';
import {useEffect, useState} from 'react';

interface WorkPageProps {
  onBackHome: () => void;
  onOpenConnect: () => void;
}

type ProjectCategory = 'ALL' | 'WEB APPS' | 'DASHBOARDS' | 'SYSTEMS';

interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  year: string;
  summary: string;
  stack: string[];
  outcome: string;
  architecture: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'project-one',
    title: 'Pulse Commerce Engine',
    category: 'WEB APPS',
    year: '2026',
    summary:
      'High-conversion storefront and editorial product configurator built with zero-layout-shift transitions and instant search.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    outcome: 'Sub-180ms route transitions across 40+ product views',
    architecture:
      'Modular React SPA paired with optimistic cart state, keyboard-accessible filtering, and responsive asset pipelines.',
  },
  {
    id: 'project-two',
    title: 'Telemetry & Analytics Suite',
    category: 'DASHBOARDS',
    year: '2026',
    summary:
      'Real-time operational dashboard delivering live throughput metrics, anomaly filtering, and exportable cohort reports.',
    stack: ['React', 'Motion', 'PostgreSQL', 'REST API'],
    outcome: '99.98% uptime tracking across 120k daily events',
    architecture:
      'Streaming metric reducers with tabular-numeral data tables, responsive split panes, and role-scoped view controls.',
  },
  {
    id: 'project-three',
    title: 'Obsidian Design System',
    category: 'SYSTEMS',
    year: '2025',
    summary:
      'Dark-first component library and motion specification engineered for developer tools and creative portfolios.',
    stack: ['TypeScript', 'Tailwind v4', 'Figma', 'Storybook'],
    outcome: '38 accessible primitives adopted across 6 web products',
    architecture:
      'Token-driven surface contrast scale with WCAG AA focus states, reduced-motion fallbacks, and strict type contracts.',
  },
  {
    id: 'project-four',
    title: 'CloudBuild Deployment Portal',
    category: 'DASHBOARDS',
    year: '2025',
    summary:
      'Unified release console visualizing build pipelines, environment variables, and edge latency across regions.',
    stack: ['React', 'Express', 'Docker', 'AWS'],
    outcome: 'Reduced deployment triage time by 42%',
    architecture:
      'Event-driven status timeline with keyboard command palette and granular audit trails.',
  },
];

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'WEB APPS',
  'DASHBOARDS',
  'SYSTEMS',
];

export function WorkPage({onBackHome, onOpenConnect}: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>('ALL');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const scrollToProjects = () => {
    const el = document.getElementById('work-showcase');
    el?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="relative flex-1 bg-black text-white">
      {/* Subtle Ambient Background Radial Glows matching Hero color palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-[18%] h-[420px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(123,150,255,0.14)_0%,rgba(167,139,250,0.06)_45%,transparent_72%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.09)_0%,transparent_70%)] blur-2xl"
      />

      {/* Reference-Inspired Developer Intro Banner */}
      <section
        aria-label="Developer Introduction"
        className="relative z-10 mx-auto w-full max-w-[1220px] px-6 pb-16 pt-8 sm:px-10 sm:pt-12 lg:pb-24"
      >
        {/* Back to Hero Navigation */}
        <motion.div
          initial={{opacity: 0, y: 8}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.3, ease: [0.16, 1, 0.3, 1]}}
          className="mb-10 flex items-center justify-between"
        >
          <button
            type="button"
            onClick={onBackHome}
            className="group inline-flex cursor-pointer items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] rounded-sm"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            <span>BACK TO HOME</span>
          </button>

          <div className="hidden items-center gap-3 text-[11px] font-medium tracking-[0.24em] text-zinc-400 uppercase sm:flex">
            <span className="h-[1.5px] w-8 bg-white/75" aria-hidden="true" />
            <span>SELECTED WORK</span>
          </div>
        </motion.div>

        {/* Main Reference Layout adapted with Hero Typography & Palette */}
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-[820px]">
            {/* Line 1 & 2: "Hy friends" / "Im Akkuuu90" */}
            <motion.div
              initial={{opacity: 0, y: 14}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
            >
              <p className="font-display text-[30px] font-extrabold leading-[1.05] tracking-[-0.02em] text-zinc-200 sm:text-[42px] lg:text-[50px]">
                Hy friends
              </p>

              <h1 className="mt-1 font-display text-[46px] font-black leading-[0.96] tracking-[-0.025em] sm:text-[64px] lg:text-[82px]">
                <span className="bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent">
                  Im Akkuuu
                </span>
                <span className="bg-gradient-to-r from-[#7B96FF] via-[#8F9BFF] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(129,140,248,0.3)]">
                  90
                </span>
              </h1>
            </motion.div>

            {/* Line 3: Horizontal Rule — Website Developer — Horizontal Rule */}
            <motion.div
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
              className="mt-6 flex max-w-[600px] items-center gap-4 sm:gap-6"
            >
              <span
                aria-hidden="true"
                className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#7B96FF]/70 to-white/85"
              />
              <span className="whitespace-nowrap font-display text-[17px] font-bold tracking-[0.04em] text-white sm:text-[22px]">
                Website Developer
              </span>
              <span
                aria-hidden="true"
                className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#A78BFA]/70 to-white/85"
              />
            </motion.div>

            {/* Line 4: Spaced-out "c o d i n g   w e b" */}
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1]}}
              className="mt-5 flex flex-wrap items-center gap-6 text-[13px] font-semibold tracking-[0.42em] lowercase sm:text-[15px]"
            >
              <span className="text-zinc-300">coding</span>
              <span className="bg-gradient-to-r from-[#7B96FF] via-[#8F9BFF] to-[#A78BFA] bg-clip-text text-transparent">
                web
              </span>
            </motion.div>

            {/* Line 5: CTA Row matching Hero Button Styling & Reference Actions */}
            <motion.div
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1]}}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={onOpenConnect}
                className="group inline-flex cursor-pointer items-center gap-3 whitespace-nowrap shrink-0 rounded-full bg-white px-7 py-3.5 text-[11px] font-bold tracking-[0.14em] text-black uppercase transition-all duration-150 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>HIRE ME</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={scrollToProjects}
                className="group inline-flex cursor-pointer items-center gap-3 whitespace-nowrap shrink-0 rounded-full border border-white/25 bg-white/[0.03] px-6 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-150 hover:border-white/45 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              >
                <Code2
                  className="h-4 w-4 text-[#93A8FF] transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />
                <span>EXPLORE WORK</span>
              </button>
            </motion.div>
          </div>

          {/* Right Vertical Motif mirroring Hero Section */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.22}}
            className="hidden items-start gap-5 pr-2 pt-2 md:flex lg:pr-8"
          >
            <div
              aria-hidden="true"
              className="relative h-44 w-px bg-gradient-to-b from-white/15 via-white/30 to-transparent"
            >
              <span className="absolute left-1/2 top-7 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#A5B4FC] shadow-[0_0_12px_3px_rgba(129,140,248,0.85)]" />
            </div>
            <div className="flex flex-col gap-2.5 pt-11 text-[11px] font-medium tracking-[0.26em] text-zinc-400 uppercase">
              <span className="text-white">FRONTEND</span>
              <span>FULL STACK</span>
              <span>UI SYSTEMS</span>
              <span>DEPLOYMENT</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Showcase Below the Intro Banner */}
      <section
        id="work-showcase"
        aria-label="Featured Projects"
        className="relative z-10 border-t border-white/10 bg-black/95 py-16 lg:py-20"
      >
        <div className="mx-auto w-full max-w-[1220px] px-6 sm:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-[1.5px] w-9 bg-white/80"
                />
                <span className="text-[11px] font-medium tracking-[0.26em] text-zinc-400 uppercase">
                  PORTFOLIO ARCHIVE
                </span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
                CRAFTED{' '}
                <span className="bg-gradient-to-r from-[#7B96FF] via-[#8F9BFF] to-[#A78BFA] bg-clip-text text-transparent">
                  PROJECTS
                </span>
              </h2>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.02] p-1"
            >
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`cursor-pointer whitespace-nowrap shrink-0 rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.16em] uppercase transition-colors duration-150 ${
                      isActive
                        ? 'bg-white text-black'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.02] p-7 transition-colors duration-150 hover:border-white/30 hover:bg-white/[0.04]"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-medium tracking-[0.18em] text-zinc-400 uppercase">
                    <span>
                      {project.category} · {project.year}
                    </span>
                    <Terminal
                      className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-[#93A8FF]"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300/90">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="truncate text-xs text-zinc-400">
                    {project.stack.join(' · ')}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex cursor-pointer items-center gap-1.5 whitespace-nowrap shrink-0 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:text-[#93A8FF]"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#09090E] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[11px] font-medium tracking-[0.2em] text-[#93A8FF] uppercase">
                  {activeProject.category} · {activeProject.year}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close case study"
                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {activeProject.summary}
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
              <div className="flex items-start gap-3">
                <Layers
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#93A8FF]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                    Architecture
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                    {activeProject.architecture}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#93A8FF]"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                    Measured Outcome
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                    {activeProject.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="truncate text-xs text-zinc-400">
                {activeProject.stack.join(' · ')}
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveProject(null);
                  onOpenConnect();
                }}
                className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap shrink-0 rounded-full bg-white px-5 py-2 text-[11px] font-bold tracking-[0.14em] text-black uppercase hover:bg-zinc-200"
              >
                <span>REQUEST DEMO</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
