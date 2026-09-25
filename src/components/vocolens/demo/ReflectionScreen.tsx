import { DemoTabBar } from "./DemoTabBar";

export type ReflectionPhase = "review" | "saving";

interface Props {
  phase: ReflectionPhase;
  pressKey: string | number;
  showSavePress: boolean;
}

const DETECTED = [
  { label: "Happiness", score: 85, primary: true },
  { label: "Trust", score: 51, primary: false },
  { label: "Anticipation", score: 42, primary: false },
];

function Slider({
  label,
  minLabel,
  maxLabel,
  knobPct,
}: {
  label: string;
  minLabel: string;
  maxLabel: string;
  knobPct: number;
}) {
  return (
    <div className="mb-3">
      <p className="text-white/80 text-[10px] font-semibold mb-1.5">{label}</p>
      <div className="relative h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }}>
        <div
          className="absolute rounded-full bg-white"
          style={{ width: 14, height: 14, left: `calc(${knobPct}% - 7px)`, top: -4 }}
        />
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-white/40 text-[8px]">{minLabel}</span>
        <span className="text-white/40 text-[8px]">{maxLabel}</span>
      </div>
    </div>
  );
}

/**
 * Compact mirror of the app's reflection screen (src/app/reflection.tsx) for
 * the hero demo's record-to-saved story: the "AI detected these emotions"
 * summary, the "Adjust how it felt" sliders, and Save. Copy is app-verbatim;
 * layout is compressed to demo scale. The fullscreen "Saving..." overlay
 * matches reflection.tsx:709.
 */
export function ReflectionScreen({ phase, pressKey, showSavePress }: Props) {
  return (
    <div
      className="h-full flex flex-col overflow-hidden relative"
      style={{
        background: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)",
      }}
    >
      <div className="px-4 pt-10 pb-2">
        <p className="text-white/80 text-[10px] font-semibold">AI detected these emotions</p>
      </div>

      <div className="flex-1 overflow-hidden px-3 space-y-2">
        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.18)",
          }}
        >
          <div className="space-y-2">
            {DETECTED.map(({ label, score, primary }) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-white text-[10px] ${primary ? "font-semibold" : ""}`}>
                      {label}
                    </span>
                    {primary && (
                      <span
                        className="px-1.5 py-px text-[6.5px] rounded-full font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.14)",
                          border: "1px solid rgba(255,255,255,0.2)",
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        PRIMARY
                      </span>
                    )}
                  </div>
                  <span className="text-white/80 text-[10px] font-bold">{score}</span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${score}%`,
                      background: "#FFFFFF",
                      opacity: primary ? 1 : 0.55,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/50 text-[8px] mt-2">Not quite right? Tap to edit</p>
        </div>

        <div
          className="rounded-xl p-3"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1.5px solid rgba(255,255,255,0.18)",
          }}
        >
          <p className="text-white/80 text-[10px] font-semibold mb-2">Adjust how it felt</p>
          <Slider
            label="Unpleasant ↔ Pleasant"
            minLabel="Unpleasant"
            maxLabel="Pleasant"
            knobPct={62}
          />
          <Slider label="Calm ↔ Activated" minLabel="Calm" maxLabel="Activated" knobPct={54} />
        </div>

        <div className="flex flex-col items-center gap-1.5 pt-1">
          <div className="relative">
            <div
              key={showSavePress ? pressKey : "rsave-idle"}
              className={`flex items-center justify-center rounded-full ${showSavePress ? "demo-mic-press" : ""}`}
              style={{
                background: "linear-gradient(180deg, #A78BFA 0%, #9370DB 45%, #6A3FC0 100%)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              }}
            >
              <span className="text-white text-[11px] font-semibold px-8 py-2.5">Save</span>
            </div>
            {showSavePress && (
              <div
                key={`ripple-${pressKey}`}
                className="demo-tap-ripple"
                style={{ width: 64, height: 64 }}
              />
            )}
          </div>
          <span className="text-white/50 text-[9px]">Skip this step</span>
        </div>
      </div>

      {phase === "saving" && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <span className="text-white text-sm font-medium">Saving...</span>
        </div>
      )}

      <DemoTabBar active="Record" />
    </div>
  );
}
