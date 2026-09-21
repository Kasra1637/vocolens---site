import { Flame, Trophy, BookOpen } from 'lucide-react';
import { DemoTabBar } from './DemoTabBar';
import { BodyMapCard } from './BodyMapCard';

interface Props {
  isActive: boolean;
}

const GLASS_BG = 'rgba(255,255,255,0.08)';
const GLASS_BORDER = 'rgba(255,255,255,0.18)';

const CALENDAR_DAYS = [
  { n: 2 }, { n: 3, dot: true }, { n: 4 }, { n: 5 }, { n: 6, dot: true }, { n: 7 }, { n: 8 },
  { n: 9 }, { n: 10 }, { n: 11 }, { n: 12, dot: true }, { n: 13 }, { n: 14 }, { n: 15, dot: true },
  { n: 16 }, { n: 17 }, { n: 18, dot: true }, { n: 19 }, { n: 20, dot: true }, { n: 21 }, { n: 22, dot: true },
];

const CHART_POINTS = [
  { x: 4, y: 60 }, { x: 20, y: 55 }, { x: 36, y: 45 }, { x: 52, y: 32 },
  { x: 68, y: 26 }, { x: 84, y: 34 }, { x: 96, y: 40 },
];

function MoodChart({ isActive }: { isActive: boolean }) {
  const polyline = CHART_POINTS.map((p) => `${p.x},${p.y}`).join(' ');
  return (
    <svg viewBox="0 0 100 68" className="w-full" style={{ height: 44, overflow: 'visible' }}>
      <polyline
        fill="none"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polyline}
        style={{
          strokeDasharray: 200,
          strokeDashoffset: isActive ? 0 : 200,
          transition: 'stroke-dashoffset 1.3s ease',
        }}
      />
      {CHART_POINTS.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === 4 ? 3 : 1.8}
          fill={i === 4 ? '#FFFFFF' : 'rgba(255,255,255,0.45)'}
          style={{ opacity: isActive ? 1 : 0, transition: `opacity 0.4s ease ${0.5 + i * 0.08}s` }}
        />
      ))}
    </svg>
  );
}

/** Simplified stand-in for EmotionalCompanion — a soft glowing orb, matching
 * its circular, theme-tinted glow treatment without the full animation. */
function CompanionOrb() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 56, height: 56 }}>
      <div
        className="absolute rounded-full"
        style={{ width: 56, height: 56, background: 'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)' }}
      />
      <div
        className="rounded-full"
        style={{
          width: 34,
          height: 34,
          background: 'linear-gradient(180deg, #A78BFA 0%, #9370DB 100%)',
          boxShadow: '0 0 16px rgba(147,112,219,0.5)',
        }}
      />
    </div>
  );
}

export function InsightsScreen({ isActive }: Props) {
  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #181624 0%, #0F0E1A 100%)',
      }}
    >
      <div className="px-3.5 pt-9 pb-1 overflow-y-auto demo-screen-scroll flex-1">
        <div className="flex flex-col items-center mb-3">
          <CompanionOrb />
          <h3 className="text-white text-[15px] font-bold mt-1.5 text-center" style={{ fontFamily: 'Fraunces, serif' }}>
            Good morning, Alex!
          </h3>
          <p className="text-white/65 text-[8.5px] mt-0.5 text-center px-4 leading-snug">
            Here's what your voice revealed about you.
          </p>
        </div>

        {/* Streak & badge card */}
        <div className="rounded-xl p-3 mb-2.5" style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 30, height: 30, background: 'rgba(255,255,255,0.12)' }}
            >
              <Flame className="w-3.5 h-3.5" style={{ color: '#FBBF24' }} />
            </div>
            <div>
              <p className="text-white text-[12px] font-semibold leading-tight">7 days streak</p>
              <p className="text-white/75 text-[8.5px] leading-tight">Next: 14-day streak</p>
            </div>
          </div>
          <div style={{ height: 1, background: 'rgba(147,112,219,0.15)', margin: '8px 0' }} />
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 30, height: 30, background: 'rgba(255,255,255,0.12)' }}
            >
              <Trophy className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[10px] mb-1">Next: 30-Day Milestone</p>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(147,112,219,0.15)' }}>
                <div className="h-full rounded-full" style={{ width: '46%', background: '#FFFFFF' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Calendar strip */}
        <div className="grid grid-cols-7 gap-0.5 mb-2">
          {CALENDAR_DAYS.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-md"
              style={{ aspectRatio: '1', background: 'rgba(255,255,255,0.08)' }}
            >
              <span className="text-[6.5px] font-semibold leading-none text-white/65">{d.n}</span>
              {d.dot && <div className="rounded-full mt-0.5" style={{ width: 2.5, height: 2.5, background: 'rgba(255,255,255,0.5)' }} />}
            </div>
          ))}
        </div>

        {/* Mood story card */}
        <div className="rounded-xl p-2.5" style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <BookOpen className="w-2.5 h-2.5 text-white/60" />
            <span className="text-white text-[9.5px] font-semibold">Mood Story</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/45 text-[7px]">— Stable</span>
            <span className="text-white/35 text-[6.5px]">vs prior 4 days</span>
          </div>
          <MoodChart isActive={isActive} />
        </div>

        {/* Body sensation map — mirrors the app's BodyHeatmapCard section */}
        <BodyMapCard />
      </div>

      <DemoTabBar active="Insights" />
    </div>
  );
}
