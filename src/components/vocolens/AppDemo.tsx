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
// Scripted record-to-saved story inside the Record slot: the mic button presses
// itself, the screen walks the app's real states (recording with a live timer →
// processing with the transcribe/analyze text swap), then the reflection review
// where the entry is actually stored, then the saved entry detail, then
// Insights. Recording starts the instant the press ends, with no listening
// pause; the recording itself is compressed to 7 demo seconds. The idle
// "Speak your mind" screen holds 1.2s so it reads before anything happens.
// Each press occupies the tail of the state it acts on, so it bottoms out
// exactly as that state changes. Auto-advances and loops forever; pauses on
// mouse hover, manually switchable via the dots. No ambient loops.
const PRESS_MS = 350;
const T = {
  micTapStart: 1200,
  recordStart: 1200 + PRESS_MS,
  recordEnd: 8600,
  saveTapStart: 8600 - PRESS_MS,
  transcribeEnd: 10600,
  analyzeEnd: 12600,
  reflectSaveTapStart: 14500,
  reflectSaveTapEnd: 14500 + PRESS_MS,
  savingEnd: 16600,
  journalEnd: 20100,
  total: 23600,
} as const;

const DOT_STARTS = [0, T.analyzeEnd, T.savingEnd, T.journalEnd];
const DOT_LABELS = ["Record", "Reflection", "Entry", "Insights"];

function recordPhaseAt(t: number): RecordPhase {
  if (t < T.recordStart) return "idle";
  if (t < T.recordEnd) return "recording";
  if (t < T.transcribeEnd) return "transcribing";
  return "analyzing";
}

export function AppDemo() {
  const [clock, setClock] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const clockRef = useRef(0);
  const lastTickRef = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    lastTickRef.current = performance.now();
    const id = setInterval(() => {
      const now = performance.now();
      const elapsed = now - lastTickRef.current;
      lastTickRef.current = now;
      const next = clockRef.current + elapsed;
      if (next >= T.total) {
        setCycle((k) => k + 1);
        clockRef.current = next % T.total;
      } else {
        clockRef.current = next;
      }
      setClock(clockRef.current);
    }, 100);
    return () => clearInterval(id);
  }, [isPaused]);

  const goToScreen = (index: number) => {
    clockRef.current = DOT_STARTS[index];
    lastTickRef.current = performance.now();
    setClock(clockRef.current);
    setCycle((k) => k + 1);
  };

  const dotIndex =
    clock < T.analyzeEnd ? 0 : clock < T.savingEnd ? 1 : clock < T.journalEnd ? 2 : 3;
  const showRecord = clock < T.analyzeEnd;
  const showReflection = clock >= T.analyzeEnd && clock < T.savingEnd;
  const showJournal = clock >= T.savingEnd && clock < T.journalEnd;
  const showInsights = clock >= T.journalEnd;

  const phase = recordPhaseAt(clock);
  const recSeconds = Math.min(7, Math.max(0, Math.floor((clock - T.recordStart) / 1000)));

  return (
    <div className={`flex flex-col items-center isolate mt-8 ${isPaused ? "demo-paused" : ""}`}>
      <div
        className="relative"
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setIsPaused(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setIsPaused(false);
        }}
      >
        <div className="demo-phone-frame">
          <div className="demo-phone-screen">
            <div className="demo-phone-notch" />
            <div
              className={`demo-screen-layer ${showRecord ? "active" : ""}`}
              role="img"
              aria-label="Record tab: the microphone button presses, recording runs, then the entry is analyzed"
            >
              <RecordingScreen
                isActive={showRecord}
                phase={phase}
                recSeconds={recSeconds}
                pressKey={`${cycle}-press`}
                showMicPress={showRecord && clock >= T.micTapStart && clock < T.recordStart}
                showSavePress={showRecord && clock >= T.saveTapStart && clock < T.recordEnd}
              />
            </div>
            <div
              className={`demo-screen-layer ${showReflection ? "active" : ""}`}
              role="img"
              aria-label="Reflection screen with detected emotions and Save button"
            >
              <ReflectionScreen
                phase={clock < T.reflectSaveTapEnd ? "review" : "saving"}
                pressKey={`${cycle}-press`}
                showSavePress={
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
              <InsightsScreen isActive={showInsights} isPaused={isPaused} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="card-app rounded-full px-2 py-1.5 flex gap-1.5 mt-6"
        role="tablist"
        aria-label="Demo screens"
      >
        {DOT_STARTS.map((start, index) => (
          <button
            key={start}
            role="tab"
            aria-selected={dotIndex === index}
            onClick={() => goToScreen(index)}
            aria-label={DOT_LABELS[index]}
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
