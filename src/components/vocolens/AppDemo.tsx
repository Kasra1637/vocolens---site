import { useState, useEffect, useCallback } from 'react';

const SCREEN_DURATION = 4500;

const screens = [
  { src: '/vocolens - demo3.jpg', alt: 'Recording screen with microphone button' },
  { src: '/vocolens - demo2.jpg', alt: 'AI emotion detection screen' },
  { src: '/vocolens - demo1.jpg', alt: 'Entry screen with emotion breakdown details' },
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
            {screens.map((screen, index) => (
              <div
                key={index}
                className={`demo-screen-layer ${activeScreen === index ? 'active' : ''}`}
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -inset-12 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => goToScreen(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeScreen === index
                ? 'w-8 bg-primary'
                : 'w-2 bg-primary/20 hover:bg-primary/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
