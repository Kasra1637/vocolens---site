import {
  ArrowLeft,
  Pencil,
  Trash2,
  Calendar,
  Clock,
  TrendingUp,
  ChevronUp,
  ChevronDown,
  Lightbulb,
  CircleDot,
  Mic,
  BookOpen,
  BarChart2,
  Award,
  Settings,
} from 'lucide-react';

interface Props {
  isActive: boolean;
}

function EmotionBar({
  label,
  value,
  color,
  badge,
  isActive,
  delay,
}: {
  label: string;
  value: number;
  color: string;
  badge?: string;
  isActive: boolean;
  delay: number;
}) {
  return (
    <div className="mb-2.5 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <span className="text-white text-[10px] font-medium">{label}</span>
          {badge && (
            <span
              className="px-1.5 py-px text-[7px] rounded-full font-semibold"
              style={{ background: 'rgba(255,255,255,0.22)', color: 'rgba(255,255,255,0.9)' }}
            >
              {badge}
            </span>
          )}
        </div>
        <span className="text-white text-[10px] font-bold">{value}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
        <div
          className="h-full rounded-full transition-all ease-out"
          style={{
            width: isActive ? `${value}%` : '0%',
            backgroundColor: color,
            transitionDuration: '1.2s',
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
        background: 'linear-gradient(170deg, #8059F0 0%, #8B6BFF 35%, #9B7BFF 100%)',
      }}
    >
      <div className="flex items-center justify-between px-4 pt-9 pb-2">
        <ArrowLeft className="w-4 h-4 text-white/75" />
        <div className="flex items-center gap-3">
          <Pencil className="w-3.5 h-3.5 text-white/55" />
          <Trash2 className="w-3.5 h-3.5 text-white/55" />
        </div>
      </div>

      <div className="px-4 mb-1">
        <h3 className="text-white text-[17px] font-bold font-comfortaa leading-tight">
          Morning Reflections
        </h3>
        <p className="text-white/40 text-[9.5px] mt-0.5 text-base leading-relaxed">Wednesday, February 4, 2026</p>
      </div>

      <div className="flex items-center gap-3.5 px-4 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-white/30" />
          <span className="text-white/30 text-[8.5px]">9:10 PM</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-white/30" />
          <span className="text-white/30 text-[8.5px]">2m</span>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-white/30" />
          <span className="text-white/30 text-[8.5px]">85%</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 space-y-2">
        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          <h4 className="text-white text-[11px] font-bold mb-1.5">Full Transcript</h4>
          <p className="text-white/60 text-[9.5px] text-base leading-relaxed">
            Started my day with a great workout. Feeling energized and ready to tackle the day.
            The sunrise was beautiful and I feel grateful for this moment of peace.
          </p>
        </div>

        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.12)' }}
        >
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white text-[11px] font-bold">Emotion Breakdown</h4>
            <ChevronUp className="w-3.5 h-3.5 text-white/35" />
          </div>
          <p className="text-white/25 text-[7px] uppercase tracking-widest mb-2.5 text-base leading-relaxed">
            Detected Emotions
          </p>
          <EmotionBar
            label="Happiness"
            value={85}
            color="#FBBF24"
            badge="PRIMARY"
            isActive={isActive}
            delay={0}
          />
          <EmotionBar
            label="Trust"
            value={51}
            color="#34D399"
            isActive={isActive}
            delay={200}
          />
          <EmotionBar
            label="Anticipation"
            value={42}
            color="#FB923C"
            isActive={isActive}
            delay={400}
          />
        </div>

        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.10)' }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Lightbulb className="w-3 h-3 text-white/35" />
              <h4 className="text-white text-[11px] font-bold">AI Analysis</h4>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-white/35" />
          </div>
        </div>

        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.10)' }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <CircleDot className="w-3 h-3 text-white/35" />
            <h4 className="text-white text-[11px] font-bold">Topics</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Exercise', 'Gratitude'].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-[8.5px] rounded-full"
                style={{ background: 'rgba(255,255,255,0.16)', color: 'rgba(255,255,255,0.78)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        className="px-4 py-2 flex justify-around items-center"
        style={{ background: 'rgba(148,120,255,0.75)', backdropFilter: 'blur(12px)' }}
      >
        {[
          { icon: Mic, active: false, label: 'Record' },
          { icon: BookOpen, active: true, label: 'Journal' },
          { icon: BarChart2, active: false, label: 'Insights' },
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
