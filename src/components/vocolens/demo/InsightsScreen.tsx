import { Mic, BookOpen, BarChart2, Award, Settings } from 'lucide-react';

interface Props {
  isActive: boolean;
}

const CALENDAR_DAYS = [
  { n: 2 }, { n: 3, dot: true, today: false }, { n: 4 }, { n: 5 }, { n: 6, dot: true }, { n: 7 }, { n: 8 },
  { n: 9 }, { n: 10 }, { n: 11 }, { n: 12, dot: true }, { n: 13 }, { n: 14 }, { n: 15, dot: true },
  { n: 16 }, { n: 17 }, { n: 18, dot: true }, { n: 19 }, { n: 20, dot: true }, { n: 21 }, { n: 22, dot: true },
  { n: 23 }, { n: 24, dot: true }, { n: 25 }, { n: 26, dot: true }, { n: 27 }, { n: 28, dot: true }, { n: 29 },
  { n: 30, today: true, dot: true }, { n: 31 },
];

const CHART_POINTS = [
  { x: 4, y: 72 },
  { x: 18, y: 68 },
  { x: 32, y: 58 },
  { x: 46, y: 42 },
  { x: 60, y: 35 },
  { x: 74, y: 45 },
  { x: 88, y: 52 },
  { x: 96, y: 55 },
];

function MoodChart({ isActive }: { isActive: boolean }) {
  const w = 100;
  const h = 80;
  const pts = CHART_POINTS;
  const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: 52, overflow: 'visible' }}>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.6)" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={polyline}
        style={{
          strokeDasharray: 200,
          strokeDashoffset: isActive ? 0 : 200,
          transition: 'stroke-dashoffset 1.4s ease',
        }}
      />
      {pts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === 4 ? 3.5 : 2.2}
          fill={i === 4 ? 'white' : 'rgba(255,255,255,0.45)'}
          style={{
            opacity: isActive ? 1 : 0,
            transition: `opacity 0.4s ease ${0.6 + i * 0.08}s`,
          }}
        />
      ))}
    </svg>
  );
}

export function InsightsScreen({ isActive }: Props) {
  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(170deg, #8059F0 0%, #8B6BFF 35%, #9B7BFF 100%)',
      }}
    >
      <div className="px-3 pt-7 pb-1">
        <div className="grid grid-cols-7 gap-0.5 mb-2">
          {CALENDAR_DAYS.map((d, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-lg"
              style={{
                aspectRatio: '1',
                background: d.today
                  ? 'rgba(255,255,255,0.0)'
                  : 'rgba(255,255,255,0.10)',
                border: d.today ? '1.5px solid rgba(255,255,255,0.7)' : 'none',
              }}
            >
              <span
                className="text-[8px] font-semibold leading-none"
                style={{ color: d.today ? 'white' : 'rgba(255,255,255,0.65)' }}
              >
                {d.n}
              </span>
              {d.dot && (
                <div
                  className="rounded-full mt-0.5"
                  style={{ width: 3, height: 3, background: d.today ? 'white' : 'rgba(255,255,255,0.5)' }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-1.5 mb-2">
          <span className="text-white/30 text-[7px]">Less</span>
          {[0.15, 0.3, 0.5, 0.75].map((op, i) => (
            <div key={i} className="w-2 h-2 rounded-sm" style={{ background: `rgba(255,255,255,${op})` }} />
          ))}
          <span className="text-white/30 text-[7px]">More</span>
        </div>

        <div className="grid grid-cols-3 gap-1.5 mb-2.5">
          {[
            { value: '15', label: 'Days Journaled' },
            { value: '7d', label: 'Best Streak' },
            { value: '1d', label: 'Current' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl flex flex-col items-center justify-center py-2"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              <span className="text-white text-sm font-bold leading-tight">{value}</span>
              <span className="text-white/45 text-[7.5px] mt-0.5 text-center leading-tight">{label}</span>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-3"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <BookOpen className="w-3 h-3 text-white/50" />
            <span className="text-white text-[11px] font-bold">Mood Story</span>
          </div>

          <div className="flex gap-1.5 mb-2">
            {['This Week', 'Patterns', 'Emotions'].map((tab, i) => (
              <div
                key={tab}
                className="rounded-full px-2.5 py-1"
                style={{
                  background: i === 0 ? 'rgba(255,255,255,0.22)' : 'transparent',
                  border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span
                  className="text-[8px] font-medium"
                  style={{ color: i === 0 ? 'white' : 'rgba(255,255,255,0.5)' }}
                >
                  {tab}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-1">
            <span className="text-white/40 text-[8px]">— Stable</span>
            <span className="text-white/30 text-[7.5px]">vs prior 4 days</span>
          </div>

          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center gap-0.5">
              <span className="text-[7px]" style={{ color: 'rgba(255,150,150,0.8)' }}>▼</span>
              <span className="text-[7px]" style={{ color: 'rgba(255,150,150,0.8)' }}>Frustrating...</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-[7px]" style={{ color: 'rgba(150,255,180,0.8)' }}>▲</span>
              <span className="text-[7px]" style={{ color: 'rgba(150,255,180,0.8)' }}>Exciting News</span>
            </div>
          </div>

          <MoodChart isActive={isActive} />
        </div>
      </div>

      <div className="flex-1" />

      <div
        className="px-4 py-2 flex justify-around items-center"
        style={{ background: 'rgba(148,120,255,0.75)', backdropFilter: 'blur(12px)' }}
      >
        {[
          { icon: Mic, active: false, label: 'Record' },
          { icon: BookOpen, active: false, label: 'Journal' },
          { icon: BarChart2, active: true, label: 'Insights' },
          { icon: Award, active: false, label: 'Milestones' },
          { icon: Settings, active: false, label: 'Settings' },
        ].map(({ icon: Icon, active, label }) => (
          <div key={label} className="flex flex-col items-center gap-0.5">
            {active ? (
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.25)' }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: 'white' }} />
              </div>
            ) : (
              <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.35)' }} />
            )}
            <span
              className="text-[7px] font-medium"
              style={{ color: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)' }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
