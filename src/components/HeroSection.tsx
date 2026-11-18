import {ArrowRight, Box, Play, Star, User, Users} from 'lucide-react';
import {motion} from 'motion/react';

export type DisciplinePillar = 'CODE' | 'DESIGN' | 'CREATE' | 'EXPLORE';

interface HeroSectionProps {
  activePillar: DisciplinePillar;
  onSelectPillar: (pillar: DisciplinePillar) => void;
  onExploreWork: () => void;
  onWatchShowreel: () => void;
}

const DISCIPLINES: DisciplinePillar[] = [
  'CODE',
  'DESIGN',
  'CREATE',
  'EXPLORE',
];

const METRICS = [
  {
    id: 'learning',
    value: '3+',
    label: 'YEARS OF LEARNING',
    Icon: User,
  },
  {
    id: 'projects',
    value: '15+',
    label: 'PROJECTS COMPLETED',
    Icon: Box,
  },
  {
    id: 'technologies',
    value: '10+',
    label: 'TECHNOLOGIES',
    Icon: Users,
  },
  {
    id: 'passion',
    value: '100%',
    label: 'PASSION FOR DEVELOPMENT',
    Icon: Star,
  },
];

export function HeroSection({
  activePillar,
  onSelectPillar,
  onExploreWork,
  onWatchShowreel,
}: HeroSectionProps) {
  return (
    <section
      aria-label="Creative Developer Hero"
      className="relative flex flex-1 flex-col justify-center overflow-hidden bg-transparent pb-12 pt-6 sm:pt-10 lg:pb-16 lg:pt-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1220px] px-6 sm:px-10">
        {/* Kicker Line */}
        <motion.div
          initial={{opacity: 0, y: 10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
          className="mb-5 flex items-center gap-5"
        >
          <span
            aria-hidden="true"
            className="h-[1.5px] w-11 bg-white/85"
          />
          <span className="text-[11px] font-medium tracking-[0.28em] text-zinc-300 uppercase">
            CREATIVE DEVELOPER
          </span>
        </motion.div>

        {/* Main Hero Row: Left Headline + CTAs | Right Vertical Discipline Motif */}
        <div className="flex items-start justify-between gap-8">
          <div className="max-w-[780px]">
            {/* Display Headline */}
            <motion.h1
              initial={{opacity: 0, y: 14}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1]}}
              className="font-display text-[44px] font-black uppercase leading-[0.94] tracking-[-0.02em] sm:text-[62px] lg:text-[78px]"
            >
              <span className="block">
                <span className="bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent">
                  IDEAS{' '}
                </span>
                <span className="bg-gradient-to-r from-[#7B96FF] via-[#8F9BFF] to-[#A78BFA] bg-clip-text text-transparent drop-shadow-[0_0_32px_rgba(129,140,248,0.28)]">
                  INTO
                </span>
              </span>
              <span className="block bg-gradient-to-b from-white via-white to-zinc-300 bg-clip-text text-transparent">
                REAL SOLUTIONS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
              className="mt-5 max-w-[460px] text-[16px] font-normal leading-[1.55] text-zinc-300/90 sm:text-[18px]"
            >
              Designing and developing modern web applications that are clean,
              scalable and impactful.
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1]}}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={onExploreWork}
                className="group inline-flex cursor-pointer items-center gap-3 whitespace-nowrap shrink-0 rounded-full bg-white px-7 py-3.5 text-[11px] font-bold tracking-[0.14em] text-black uppercase transition-all duration-150 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onWatchShowreel}
                className="group inline-flex cursor-pointer items-center gap-3 whitespace-nowrap shrink-0 rounded-full border border-white/25 bg-white/[0.03] py-2 pl-2.5 pr-6 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-150 hover:border-white/45 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:border-white/70">
                  <Play
                    className="ml-0.5 h-2.5 w-2.5 fill-white text-white"
                    aria-hidden="true"
                  />
                </span>
                <span>WATCH SHOWREEL</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side Vertical Timeline & Discipline Stack */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}}
            className="hidden items-start gap-5 pr-2 pt-1 md:flex lg:pr-8"
          >
            {/* Vertical Hairline with Glowing Node */}
            <div
              aria-hidden="true"
              className="relative h-44 w-px bg-gradient-to-b from-white/15 via-white/30 to-transparent"
            >
              <span className="absolute left-1/2 top-7 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#A5B4FC] shadow-[0_0_12px_3px_rgba(129,140,248,0.85)]" />
            </div>

            {/* Stacked Discipline Labels */}
            <div className="flex flex-col gap-2.5 pt-11">
              {DISCIPLINES.map((pillar) => {
                const isSelected = activePillar === pillar;
                return (
                  <button
                    key={pillar}
                    type="button"
                    onClick={() => onSelectPillar(pillar)}
                    className={`cursor-pointer text-left text-[11px] font-medium tracking-[0.26em] uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#818CF8] rounded-sm ${
                      isSelected
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {pillar}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* 4-Column Metrics / KPI Strip */}
        <motion.div
          initial={{opacity: 0, y: 12}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.45, delay: 0.22, ease: [0.16, 1, 0.3, 1]}}
          className="mt-14 grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:divide-x lg:divide-white/15"
        >
          {METRICS.map((metric, idx) => {
            const Icon = metric.Icon;
            return (
              <div
                key={metric.id}
                className={`flex items-center gap-4 py-1 ${
                  idx === 0
                    ? 'lg:pr-8'
                    : idx === METRICS.length - 1
                      ? 'lg:pl-8'
                      : 'lg:px-8'
                }`}
              >
                <Icon
                  className="h-7 w-7 shrink-0 text-zinc-400"
                  strokeWidth={1.35}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <div className="font-display text-[24px] font-bold leading-none tracking-tight text-white tabular-nums sm:text-[26px]">
                    {metric.value}
                  </div>
                  <div className="mt-2 whitespace-nowrap text-[10px] font-medium tracking-[0.18em] text-zinc-400 uppercase">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
