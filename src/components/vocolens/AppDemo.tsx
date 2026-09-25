import { useState, useEffect, useRef } from "react";
import { RecordingScreen, type RecordPhase } from "./demo/RecordingScreen";
import { ReflectionScreen } from "./demo/ReflectionScreen";
import { JournalScreen } from "./demo/JournalScreen";
import { InsightsScreen } from "./demo/InsightsScreen";

// Live-coded recreations of the app's current screens (Record, Entries,
// Insights — see src/app/(tabs)/*.tsx and entry-detail.tsx in the mobile
// app repo), styled with the Midnight Glow theme. Replaces the old static
// screenshots, which were out of date with the shipped app UI.
//
// Scripted record-to-saved story inside the Record slot: a fingertip taps the
// mic, the screen walks the app's real states (listening → recording with a
// live timer → processing with the transcribe/analyze text swap), then the
// reflection review where the entry is actually stored, then the saved entry
// detail. Timings mirror the app where it matters (500ms listening beat);
// the recording itself is compressed to 6 demo seconds. Pauses on hover,
// manually switchable via the dots. No ambient loops.
const T = {
  micTapStart: 700,
  micTapEnd: 1900,
  listenStart: 1600,
  listenEnd: 2100,
  recordEnd: 8100,
  saveTapStart: 7100,
  saveTapEnd: 8300,
  transcribeEnd: 10100,
  analyzeEnd: 12100,
  reflectSaveTapStart: 14000,
  reflectSaveTapEnd: 15200,
  savingEnd: 16100,
  journalEnd: 19600,
  total: 23100,
} as const;

const DOT_STARTS = [0, T.savingEnd, T.journalEnd];

function recordPhaseAt(t: number): RecordPhase {
  if (t < T.listenStart) return "idle";
  if (t < T.listenEnd) return "listening";
  if (t < T.recordEnd) return "recording";
  if (t < T.transcribeEnd) return "transcribing";
  return "analyzing";
}

export function AppDemo() {
  const [clock, setClock] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const clockRef = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      clockRef.current += 100;
      if (clockRef.current >= T.total) {
        clockRef.current -= T.total;
        setCycle((k) => k + 1);
      }
      setClock(clockRef.current);
    }, 100);
    return () => clearInterval(id);
  }, [isPaused]);

  const goToScreen = (index: number) => {
    clockRef.current = DOT_STARTS[index];
    setClock(clockRef.current);
    setCycle((k) => k + 1);
  };

  const dotIndex = clock < T.savingEnd ? 0 : clock < T.journalEnd ? 1 : 2;
  const showRecord = clock < T.analyzeEnd;
  const showReflection = clock >= T.analyzeEnd && clock < T.savingEnd;
  const showJournal = clock >= T.savingEnd && clock < T.journalEnd;
  const showInsights = clock >= T.journalEnd;

  const phase = recordPhaseAt(clock);
  const recSeconds = Math.min(6, Math.max(0, Math.floor((clock - T.listenEnd) / 1000)));

  return (
    <div className={`flex flex-col items-center isolate mt-8 ${isPaused ? "demo-paused" : ""}`}>
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="demo-phone-frame">
          <div className="demo-phone-screen">
            <div className="demo-phone-notch" />
            <div
              className={`demo-screen-layer ${showRecord ? "active" : ""}`}
              role="img"
              aria-label="Record tab: fingertip taps the microphone, recording runs, then the entry is analyzed"
            >
              <RecordingScreen
                isActive={showRecord}
                phase={phase}
                recSeconds={recSeconds}
                micTapKey={`${cycle}-mic`}
                showMicTap={showRecord && clock >= T.micTapStart && clock < T.micTapEnd}
                saveTapKey={`${cycle}-save`}
                showSaveTap={showRecord && clock >= T.saveTapStart && clock < T.saveTapEnd}
              />
            </div>
            <div
              className={`demo-screen-layer ${showReflection ? "active" : ""}`}
              role="img"
              aria-label="Reflection screen with detected emotions and Save button"
            >
              <ReflectionScreen
                phase={clock < T.reflectSaveTapEnd ? "review" : "saving"}
                saveTapKey={`${cycle}-rsave`}
                showSaveTap={
                  showReflection && clock >= T.reflectSaveTapStart && clock < T.reflectSaveTapEnd
                }
              />
            </div>
            <div
              className={`demo-screen-layer ${showJournal ? "active" : ""}`}
              role="img"
              aria-label="Journal entry with AI emotion breakdown"
            >
              <JournalScreen isActive={showJournal} />
            </div>
            <div
              className={`demo-screen-layer ${showInsights ? "active" : ""}`}
              role="img"
              aria-label="Insights tab with streak, mood story, and body sensation map"
            >
              <InsightsScreen isActive={showInsights} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="card-app rounded-full px-2 py-1.5 flex gap-1.5 mt-6"
        role="tablist"
        aria-label="Demo screens"
      >
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            role="tab"
            aria-selected={dotIndex === index}
            onClick={() => goToScreen(index)}
            aria-label={`Go to step ${index + 1}`}
            className="min-h-[28px] min-w-[28px] flex items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-full transition-all duration-500 ${
                dotIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
