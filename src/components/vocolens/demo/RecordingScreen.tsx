import { Microphone as Mic, Trash, Pause, Check, Sparkle } from "@phosphor-icons/react";
import { DemoTabBar } from "./DemoTabBar";
import { FingerTap } from "./FingerTap";

export type RecordPhase = "idle" | "listening" | "recording" | "transcribing" | "analyzing";

interface Props {
  isActive: boolean;
  phase: RecordPhase;
  /** Whole seconds elapsed in the demo recording (drives timer + goal bar). */
  recSeconds: number;
  micTapKey: string | number;
  showMicTap: boolean;
  saveTapKey: string | number;
  showSaveTap: boolean;
}

/**
 * Recreates the app's Record tab (src/app/(tabs)/index.tsx) through its real
 * states: idle ("Speak your mind" + prompt + mic + "Tap to start" + 50s hint),
 * listening/recording ("Listening..." + status card + M:SS timer + 50s goal bar
 * + Discard/Pause/Save), and processing ("Transcribing..."/"Processing..." +
 * pulsing dots + "Transcribing your voice..."/"Analyzing emotions..." +
 * "Please wait..."). Strings, sizes, and colors mirror the app source; the
 * finger choreography is driven by AppDemo's clock via tap keys.
 */
export function RecordingScreen({
  isActive,
  phase,
  recSeconds,
  micTapKey,
  showMicTap,
  saveTapKey,
  showSaveTap,
}: Props) {
  const isRecording = phase === "listening" || phase === "recording";
  const isProcessing = phase === "transcribing" || phase === "analyzing";
  const title =
    phase === "transcribing"
      ? "Transcribing..."
      : phase === "analyzing"
        ? "Processing..."
        : isRecording
          ? "Listening..."
          : "Speak your mind";
  const mins = Math.floor(recSeconds / 60);
  const secs = String(recSeconds % 60).padStart(2, "0");

  return (
    <div
      className="h-full flex flex-col"
      style={{
        // Midnight Glow background gradient: ["#181624", "#0F0E1A"]
        background: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)",
      }}
    >
      <div className="flex flex-col items-center pt-11 px-5">
        <div className="text-center">
          <h3
            className="text-white text-lg font-bold leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            {title}
          </h3>
          {phase === "idle" && (
            <p className="text-white/80 text-[10px] mt-1.5">What's on your mind today?</p>
          )}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center -mt-2 px-5">
        {!isRecording && !isProcessing && (
          <div className="relative flex items-center justify-center">
            {isActive && (
              <>
                <div
                  className="absolute rounded-full demo-mic-pulse"
                  style={{ width: 108, height: 108, border: "1.5px solid rgba(167,139,250,0.35)" }}
                />
                <div
                  className="absolute rounded-full demo-mic-pulse-delayed"
                  style={{ width: 108, height: 108, border: "1.5px solid rgba(167,139,250,0.35)" }}
                />
              </>
            )}
            <div
              className="absolute rounded-full"
              style={{
                width: 128,
                height: 128,
                background: "rgba(167,139,250,0.5)",
                filter: "blur(20px)",
                opacity: 0.3,
              }}
            />
            <div
              className="relative z-10 flex items-center justify-center rounded-full"
              style={{
                width: 92,
                height: 92,
                background: "rgba(167,139,250,0.18)",
                border: "1.5px solid rgba(167,139,250,0.3)",
              }}
            >
              <div
                className={`flex items-center justify-center rounded-full ${showMicTap ? "demo-mic-press" : ""}`}
                style={{
                  width: 76,
                  height: 76,
                  background: "linear-gradient(180deg, #A78BFA 0%, #9370DB 45%, #6A3FC0 100%)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                }}
              >
                <Mic className="w-8 h-8 text-white" weight="bold" />
              </div>
            </div>
            {showMicTap && <FingerTap tapKey={micTapKey} rippleSize={76} />}
          </div>
        )}

        {isRecording && (
          <>
            <div className="w-full" style={{ maxWidth: 220 }}>
              <div className="flex items-center gap-1.5 mb-2">
                <Sparkle className="w-4 h-4 text-white" weight="fill" />
                <span className="text-white text-[11px] font-semibold">Recording</span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: "#EF4444",
                    marginLeft: 6,
                  }}
                />
              </div>
              <p className="text-white/70 italic text-[11px] leading-relaxed mb-3">
                Speak freely. Your words will be transcribed when you stop.
              </p>
              <p className="text-white text-3xl font-semibold text-center tabular-nums">
                {mins}:{secs}
              </p>
              <div className="mt-3">
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.16)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min(100, (recSeconds / 50) * 100)}%`,
                      backgroundColor: "#9370DB",
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-white/35 text-[10px]">0s</span>
                  <span className="text-white/80 text-[10px] font-semibold">
                    {50 - recSeconds}s to go
                  </span>
                  <span className="text-white/35 text-[10px]">50s</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5" style={{ gap: 24 }}>
              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 64,
                    height: 64,
                    background: "rgba(255,255,255,0.10)",
                    border: "1.5px solid rgba(255,255,255,0.22)",
                  }}
                >
                  <Trash className="w-6 h-6" style={{ color: "rgba(255,255,255,0.9)" }} />
                </div>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Discard
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: 88,
                    height: 88,
                    background: "rgba(147,112,219,0.18)",
                    border: "1.5px solid rgba(147,112,219,0.3)",
                  }}
                >
                  <Pause className="w-7 h-7 text-white" weight="fill" />
                </div>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Pause
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="relative">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 88,
                      height: 88,
                      background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
                    }}
                  >
                    <Check className="w-9 h-9 text-white" weight="bold" />
                  </div>
                  {showSaveTap && <FingerTap tapKey={saveTapKey} rippleSize={88} />}
                </div>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Save
                </span>
              </div>
            </div>
          </>
        )}

        {isProcessing && (
          <>
            <div
              className="relative flex items-center justify-center rounded-full"
              style={{
                width: 92,
                height: 92,
                background: "rgba(167,139,250,0.18)",
                border: "1.5px solid rgba(167,139,250,0.3)",
                opacity: 0.55,
              }}
            >
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 76,
                  height: 76,
                  background: "linear-gradient(180deg, #A78BFA 0%, #9370DB 45%, #6A3FC0 100%)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                }}
              >
                <Mic className="w-8 h-8 text-white" weight="bold" />
              </div>
            </div>
            <div
              className="flex items-center gap-3 mt-5 px-6 py-4 rounded-[20px]"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="demo-proc-dot"
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              ))}
              <span className="text-white/70 text-sm font-medium">
                {phase === "transcribing" ? "Transcribing your voice..." : "Analyzing emotions..."}
              </span>
            </div>
          </>
        )}

        {!isRecording && !isProcessing && (
          <>
            <p className="text-white text-[11px] mt-4">Tap to start</p>
            <p
              className="text-center text-[11px] mt-1.5 px-6"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Record for at least 50s for accurate emotional insights
            </p>
          </>
        )}
        {isProcessing && <p className="text-white text-[11px] mt-4">Please wait...</p>}
      </div>

      <DemoTabBar active="Record" />
    </div>
  );
}
