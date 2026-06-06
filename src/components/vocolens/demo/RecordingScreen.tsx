import { Mic, BookOpen, BarChart2, Award, Settings, ChevronDown } from 'lucide-react';

interface Props {
  isActive: boolean;
}

export function RecordingScreen({ isActive }: Props) {
  return (
    <div
      className="h-full flex flex-col"
      style={{
        background: 'linear-gradient(170deg, #8059F0 0%, #8B6BFF 35%, #9B7BFF 100%)',
      }}
    >
      <div className="flex flex-col items-center pt-10 px-5">
        <div className="text-center mt-4 mb-1">
          <h3 className="text-white text-lg font-bold font-comfortaa leading-tight">
            Speak your mind
          </h3>
          <p className="text-white/55 text-[10px] mt-0.5 text-base leading-relaxed">What's on your mind today?</p>
        </div>
      </div>

      <div className="px-4 mt-5">
        <div className="flex items-center justify-between bg-white/15 backdrop-blur-sm rounded-2xl px-3.5 py-3 border border-white/10">
          <span className="text-white/40 text-[9px] font-semibold tracking-widest uppercase">
            Warm-up Question
          </span>
          <div className="flex items-center gap-1 bg-white/15 rounded-lg px-2 py-1">
            <span className="text-white/70 text-[9px]">Select Topic</span>
            <ChevronDown className="w-2.5 h-2.5 text-white/50" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-4">
        <div className="relative flex items-center justify-center">
          {isActive && (
            <>
              <div
                className="absolute rounded-full bg-white/10 demo-mic-pulse"
                style={{ width: 100, height: 100 }}
              />
              <div
                className="absolute rounded-full bg-white/07 demo-mic-pulse-delayed"
                style={{ width: 130, height: 130 }}
              />
            </>
          )}
          <div
            className="relative z-10 flex items-center justify-center rounded-full"
            style={{
              width: 72,
              height: 72,
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            }}
          >
            <Mic className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      <div
        className="px-4 py-2 flex justify-around items-center"
        style={{ background: 'rgba(148,120,255,0.75)', backdropFilter: 'blur(12px)' }}
      >
        {[
          { icon: Mic, active: true, label: 'Record' },
          { icon: BookOpen, active: false, label: 'Journal' },
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
