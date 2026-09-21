import { Mic } from 'lucide-react';
import { DemoTabBar } from './DemoTabBar';

interface Props {
  isActive: boolean;
}

/**
 * Recreates the app's Record tab (src/app/(tabs)/index.tsx) in its idle
 * state: "Speak your mind" title, rotating prompt line, the large gradient
 * mic button with sonar ripples + halo glow (MicButton.tsx) and the "Tap to
 * start" caption. Uses the app's actual
 * Midnight Glow theme colors (THEME_COLORS.darkMode in
 * lib/state/onboarding-store.ts) rather than the site's own brand purple.
 */
export function RecordingScreen({ isActive }: Props) {
  return (
    <div
      className="h-full flex flex-col"
      style={{
        // Midnight Glow background gradient: ["#181624", "#0F0E1A"]
        background: 'linear-gradient(180deg, #181624 0%, #0F0E1A 100%)',
      }}
    >
      <div className="flex flex-col items-center pt-11 px-5">
        <div className="text-center">
          <h3 className="text-white text-lg font-bold leading-tight" style={{ fontFamily: 'Fraunces, serif' }}>
            Speak your mind
          </h3>
          <p className="text-white/80 text-[10px] mt-1.5">What's on your mind today?</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-2">
        <div className="relative flex items-center justify-center">
          {isActive && (
            <>
              <div
                className="absolute rounded-full demo-mic-pulse"
                style={{ width: 108, height: 108, border: '1.5px solid rgba(167,139,250,0.35)' }}
              />
              <div
                className="absolute rounded-full demo-mic-pulse-delayed"
                style={{ width: 108, height: 108, border: '1.5px solid rgba(167,139,250,0.35)' }}
              />
            </>
          )}
          {/* Outer halo glow, matches Colors.buttonGlow */}
          <div
            className="absolute rounded-full"
            style={{
              width: 128,
              height: 128,
              background: 'rgba(167,139,250,0.5)',
              filter: 'blur(20px)',
              opacity: 0.3,
            }}
          />
          {/* Frosted bezel ring */}
          <div
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: 92,
              height: 92,
              background: 'rgba(167,139,250,0.18)',
              border: '1.5px solid rgba(167,139,250,0.3)',
            }}
          >
            {/* 3-stop sculpted gradient button, matches micButtonGradient */}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 76,
                height: 76,
                background: 'linear-gradient(180deg, #A78BFA 0%, #9370DB 45%, #6A3FC0 100%)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
              }}
            >
              <Mic className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>
        <p className="text-white text-[11px] mt-4">Tap to start</p>
      </div>

      <DemoTabBar active="Record" />
    </div>
  );
}
