import {ArrowRight, Menu, X} from 'lucide-react';
import {useState} from 'react';

export type NavSection =
  | 'HOME'
  | 'ABOUT'
  | 'PROJECTS'
  | 'SKILLS'
  | 'EXPERIENCE'
  | 'CONTACT';

interface NavbarProps {
  activeNav: NavSection;
  onSelectNav: (section: NavSection) => void;
  onOpenConnect: () => void;
}

const NAV_ITEMS: NavSection[] = [
  'HOME',
  'ABOUT',
  'PROJECTS',
  'SKILLS',
  'EXPERIENCE',
  'CONTACT',
];

export function Navbar({activeNav, onSelectNav, onOpenConnect}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: NavSection) => {
    onSelectNav(item);
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex h-20 max-w-[1220px] items-center justify-between gap-8 px-6 sm:px-10">
        {/* Brand Logo Mark */}
        <button
          type="button"
          onClick={() => handleNavClick('HOME')}
          aria-label="Creative Developer Home"
          className="group flex shrink-0 cursor-pointer items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm"
        >
          <svg
            width="40"
            height="30"
            viewBox="0 0 44 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-200 group-hover:scale-[1.03]"
            aria-hidden="true"
          >
            {/* Left main ascending prism blade */}
            <polygon points="18,2 23,2 10,30 3,30" fill="#FFFFFF" />
            {/* Center angled dark-cut / inner facet */}
            <polygon points="21,6 27,18 20,24 15,24" fill="#FFFFFF" />
            {/* Right lower diagonal chevron leg */}
            <polygon points="28,17 34,30 27,30 22,22" fill="#FFFFFF" />
            {/* Sharp upper peak accent */}
            <polygon points="21,2 25,2 30,13 26,13" fill="#D4D4D8" />
          </svg>
        </button>

        {/* Center Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-8 md:flex lg:gap-10"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`relative cursor-pointer whitespace-nowrap shrink-0 py-1.5 text-[11px] font-medium tracking-[0.16em] uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8] rounded-sm ${
                  isActive
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#93A8FF] shadow-[0_0_8px_rgba(147,168,255,0.9)]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Primary Action */}
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenConnect}
            className="hidden sm:inline-flex cursor-pointer items-center gap-2.5 whitespace-nowrap shrink-0 rounded-full border border-white/25 bg-white/[0.02] px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-150 hover:border-white/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#818CF8]"
          >
            <span>LET&apos;S CONNECT</span>
            <ArrowRight className="h-3.5 w-3.5 text-zinc-300" aria-hidden="true" />
          </button>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/[0.03] text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-black/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNav === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center justify-between py-2 text-left text-xs font-medium tracking-[0.16em] uppercase transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{item}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#93A8FF]" />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/[0.04] px-5 py-3 text-[11px] font-semibold tracking-[0.14em] text-white uppercase"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
