/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useRef, useState} from 'react';
import {
  ConnectModal,
  SectionDrawer,
  ShowreelModal,
} from './components/HeroModals';
import {type DisciplinePillar, HeroSection} from './components/HeroSection';
import {type NavSection, Navbar} from './components/Navbar';
import {WorkPage} from './components/WorkPage';

const HERO_VIDEO_URL =
  'https://res.cloudinary.com/xd7ujrtw/video/upload/hero-video.mp4';

type PageRoute = 'home' | 'work';

export default function App() {
  const [page, setPage] = useState<PageRoute>(() =>
    window.location.hash === '#work' ? 'work' : 'home',
  );
  const [activeNav, setActiveNav] = useState<NavSection>(() =>
    window.location.hash === '#work' ? 'PROJECTS' : 'HOME',
  );
  const [activePillar, setActivePillar] = useState<DisciplinePillar>('CODE');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      const isWork = window.location.hash === '#work';
      setPage(isWork ? 'work' : 'home');
      setActiveNav(isWork ? 'PROJECTS' : 'HOME');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (page !== 'home') return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay fallback handled silently if blocked by user agent
    });
  }, [page]);

  const navigateTo = (target: PageRoute) => {
    setPage(target);
    setActiveNav(target === 'work' ? 'PROJECTS' : 'HOME');
    const nextHash = target === 'work' ? '#work' : '#home';
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
  };

  const activeDrawerSection: Exclude<
    NavSection,
    'HOME' | 'CONTACT' | 'PROJECTS'
  > | null =
    activeNav !== 'HOME' &&
    activeNav !== 'CONTACT' &&
    activeNav !== 'PROJECTS'
      ? activeNav
      : null;

  const handleSelectNav = (section: NavSection) => {
    if (section === 'CONTACT') {
      setConnectOpen(true);
      return;
    }
    if (section === 'HOME') {
      navigateTo('home');
      return;
    }
    if (section === 'PROJECTS') {
      navigateTo('work');
      return;
    }
    setActiveNav(section);
  };

  const handleSelectPillar = (pillar: DisciplinePillar) => {
    setActivePillar(pillar);
    setShowreelOpen(true);
  };

  return (
    <div
      className={`relative flex min-h-screen flex-col overflow-x-hidden text-white ${
        page === 'work' ? 'bg-black' : ''
      }`}
    >
      {/* Full-bleed Looping Muted Cloudinary Background Video on Home Hero */}
      {page === 'home' && (
        <video
          ref={videoRef}
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        />
      )}

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar
          activeNav={activeNav}
          onSelectNav={handleSelectNav}
          onOpenConnect={() => setConnectOpen(true)}
        />

        <main className="flex flex-1 flex-col justify-center">
          {page === 'home' ? (
            <HeroSection
              activePillar={activePillar}
              onSelectPillar={handleSelectPillar}
              onExploreWork={() => navigateTo('work')}
              onWatchShowreel={() => setShowreelOpen(true)}
            />
          ) : (
            <WorkPage
              onBackHome={() => navigateTo('home')}
              onOpenConnect={() => setConnectOpen(true)}
            />
          )}
        </main>
      </div>

      <ShowreelModal
        open={showreelOpen}
        initialPillar={activePillar}
        onClose={() => setShowreelOpen(false)}
      />

      <ConnectModal
        open={connectOpen}
        onClose={() => setConnectOpen(false)}
      />

      <SectionDrawer
        section={activeDrawerSection}
        onClose={() => setActiveNav(page === 'work' ? 'PROJECTS' : 'HOME')}
        onOpenConnect={() => setConnectOpen(true)}
      />
    </div>
  );
}
