import { useState, useEffect, useCallback } from 'react';
import { RecordingScreen } from './demo/RecordingScreen';
import { JournalScreen } from './demo/JournalScreen';
import { InsightsScreen } from './demo/InsightsScreen';

const SCREEN_DURATION = 3500;

// Live-coded recreations of the app's current screens (Record, Entries,
// Insights — see src/app/(tabs)/*.tsx and entry-detail.tsx in the mobile
// app repo), styled with the Midnight Glow theme. Replaces the old static
// screenshots, which were out of date with the shipped app UI.
const screens = [
  { Component: RecordingScreen, alt: 'Record tab with the voice recording button' },
  { Component: JournalScreen, alt: 'Journal entry with AI emotion breakdown' },
  { Component: InsightsScreen, alt: 'Insights tab with streak, mood story, and body sensation map' },
];

export function AppDemo() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToScreen = useCallback((index: number) => {
    setActiveScreen(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, SCREEN_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, activeScreen]);

  return (
    <div className="flex flex-col items-center isolate mt-8">
      <div
        className="relative demo-phone-float"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="demo-phone-frame">
          <div className="demo-phone-screen">
            <div className="demo-phone-notch" />
            {screens.map(({ Component, alt }, index) => (
              <div
                key={index}
                className={`demo-screen-layer ${activeScreen === index ? 'active' : ''}`}
                role="img"
                aria-label={alt}
              >
                <Component isActive={activeScreen === index} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -inset-12 rounded-full blur-3xl -z-10 pointer-events-none animate-app-glow bg-[rgba(167,139,250,0.12)]" />
      </div>

      <div className="card-app rounded-full px-2 py-1.5 flex gap-1.5 mt-6" role="tablist" aria-label="Demo screens">
        {screens.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeScreen === index}
            onClick={() => goToScreen(index)}
            aria-label={`Go to step ${index + 1}`}
            className="min-h-[28px] min-w-[28px] flex items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-full transition-all duration-500 ${
                activeScreen === index
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/20 hover:bg-primary/40'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
