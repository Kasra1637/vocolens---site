import {
  ArrowLeft,
  Pencil,
  Trash2,
  Calendar,
  Clock,
  Activity,
  ChevronUp,
  ChevronDown,
  MessageSquareText,
  ChartBar,
} from 'lucide-react';
import { DemoTabBar } from './DemoTabBar';

interface Props {
  isActive: boolean;
}

// Glass-card treatment used throughout the real entry-detail screen
// (src/app/entry-detail.tsx): translucent white fill + a visible 2px border,
// not a flat borderless tint.
const GLASS_BG = 'rgba(255,255,255,0.08)';
const GLASS_BORDER = 'rgba(255,255,255,0.18)';

function EmotionBar({
  label,
  score,
  isPrimary,
  isActive,
  delay,
}: {
  label: string;
  score: number;
  isPrimary?: boolean;
  isActive: boolean;
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <span className={`text-white text-[10px] ${isPrimary ? 'font-semibold' : ''}`}>{label}</span>
          {isPrimary && (
            <span
              className="px-1.5 py-px text-[6.5px] rounded-full font-semibold"
              style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}
            >
              PRIMARY
            </span>
          )}
        </div>
        <span className="text-white/80 text-[10px] font-bold">{score}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: isActive ? `${score}%` : '0%',
            background: '#FFFFFF',
            opacity: isPrimary ? 1 : 0.55,
            transitionDuration: '1.1s',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function JournalScreen({ isActive }: Props) {
  return (
    <div
      className="h-full flex flex-col overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #181624 0%, #0F0E1A 100%)',
      }}
    >
      <div className="flex items-center justify-between px-4 pt-10 pb-2">
        <ArrowLeft className="w-3.5 h-3.5 text-white/75" />
        <div className="flex items-center gap-3">
          <Pencil className="w-3 h-3 text-white/55" />
          <Trash2 className="w-3 h-3 text-white/55" />
        </div>
      </div>

      <div className="px-4 mb-1.5">
        <h3 className="text-white text-[15px] font-bold leading-tight" style={{ fontFamily: 'Fraunces, serif' }}>
          Morning Reflections
        </h3>
        <p className="text-white/70 text-[9px] mt-1">Wednesday, February 4, 2026</p>
      </div>

      {/* Meta chips row — matches the Time / Duration / Intensity strip */}
      <div className="px-3 mb-2.5">
        <div
          className="rounded-xl flex items-center justify-around py-2.5"
          style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}
        >
          <div className="flex flex-col items-center gap-0.5">
            <Calendar className="w-3 h-3 text-white/90" />
            <span className="text-white text-[8.5px] font-medium">9:10 PM</span>
            <span className="text-white/40 text-[6.5px]">Time</span>
          </div>
          <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.15)' }} />
          <div className="flex flex-col items-center gap-0.5">
            <Clock className="w-3 h-3 text-white/90" />
            <span className="text-white text-[8.5px] font-medium">2m</span>
            <span className="text-white/40 text-[6.5px]">Duration</span>
          </div>
          <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.15)' }} />
          <div className="flex flex-col items-center gap-0.5">
            <Activity className="w-3 h-3 text-white/90" />
            <span className="text-white text-[8.5px] font-medium">85%</span>
            <span className="text-white/40 text-[6.5px]">Intensity</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 space-y-2">
        <div className="rounded-xl p-3" style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-1.5">
            <MessageSquareText className="w-3 h-3 text-white/85" />
            <h4 className="text-white text-[10.5px] font-semibold">Full Transcript</h4>
          </div>
          <p className="text-white/60 text-[9px] leading-relaxed">
            Started my day with a great workout. Feeling energized and ready to tackle the day.
            The sunrise was beautiful and I feel grateful for this moment of peace.
          </p>
        </div>

        <div className="rounded-xl p-3" style={{ background: GLASS_BG, border: `1.5px solid ${GLASS_BORDER}` }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <ChartBar className="w-3 h-3 text-white/85" />
              <h4 className="text-white text-[10.5px] font-semibold">Emotion Breakdown</h4>
            </div>
            <ChevronUp className="w-3 h-3 text-white/40" />
          </div>
          <p className="text-white/35 text-[6.5px] uppercase tracking-widest mb-2">
            Top Emotions — Plutchik Intensity
          </p>
          <div className="space-y-2">
            <EmotionBar label="Happiness" score={85} isPrimary isActive={isActive} delay={0} />
            <EmotionBar label="Trust" score={51} isActive={isActive} delay={180} />
            <EmotionBar label="Anticipation" score={42} isActive={isActive} delay={360} />
          </div>
        </div>

        <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.06)', border: `1.5px solid rgba(255,255,255,0.14)` }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <MessageSquareText className="w-3 h-3 text-white/40" />
              <h4 className="text-white text-[10.5px] font-semibold">AI Analysis</h4>
            </div>
            <ChevronDown className="w-3 h-3 text-white/40" />
          </div>
        </div>

        <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.06)', border: `1.5px solid rgba(255,255,255,0.14)` }}>
          <h4 className="text-white text-[10.5px] font-semibold mb-2">Topics</h4>
          <div className="flex flex-wrap gap-1.5">
            {['Exercise', 'Gratitude'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[8px] rounded-full"
                style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.78)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <DemoTabBar active="Entries" />
    </div>
  );
}
