import { Microphone as Mic } from "@phosphor-icons/react";
import { DemoTabBar } from "../demo/DemoTabBar";
import { PhoneFrame } from "./PhoneFrame";

/**
 * The app's Record tab at rest, from src/app/(tabs)/index.tsx. Frozen in the
 * idle pose — the sonar ripples and halo are the app's own geometry, held
 * static rather than looping, because articles ship no animation.
 */
export function RecordingIdleFigure() {
  return (
    <PhoneFrame>
      <div
        className="h-full flex flex-col"
        style={{ background: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)" }}
      >
        <div className="flex flex-col items-center pt-11 px-5">
          <span
            className="block text-center text-white text-lg font-bold leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Speak your mind
          </span>
          <span className="block text-center text-white/80 text-[10px] mt-1.5">
            What&apos;s on your mind today?
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div className="relative flex items-center justify-center">
            <span
              className="absolute rounded-full"
              style={{
                width: 76,
                height: 76,
                border: "1.5px solid rgba(167,139,250,0.35)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                width: 100,
                height: 100,
                border: "1.5px solid rgba(167,139,250,0.20)",
              }}
            />
            <span
              className="absolute rounded-full"
              style={{
                width: 128,
                height: 128,
                background: "rgba(167,139,250,0.5)",
                filter: "blur(20px)",
                opacity: 0.3,
              }}
            />
            <span
              className="relative z-10 flex items-center justify-center rounded-full"
              style={{
                width: 100,
                height: 100,
                background: "rgba(167,139,250,0.18)",
                border: "1.5px solid rgba(167,139,250,0.3)",
              }}
            >
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 76,
                  height: 76,
                  background: "linear-gradient(180deg, #A78BFA 0%, #9370DB 45%, #6A3FC0 100%)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
                }}
              >
                <Mic size={32} className="text-white" weight="bold" />
              </span>
            </span>
          </div>

          <span className="block text-white text-xs mt-5">Tap to start</span>
          <span className="block text-center text-white/45 text-[9px] mt-5 leading-relaxed px-3">
            Record for at least 50s for accurate emotional insights
          </span>
        </div>

        <DemoTabBar active="Record" />
      </div>
    </PhoneFrame>
  );
}
