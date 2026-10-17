import {
  ArrowLeft,
  Calendar,
  CaretUp,
  ChartBar,
  Clock,
  Pencil,
  Pulse,
  Trash,
} from "@phosphor-icons/react";
import { DemoTabBar } from "../demo/DemoTabBar";
import { appGlass, plutchikIntensity, PLUTCHIK_LADDERS, type PlutchikFamily } from "@/lib/appTheme";
import { PhoneFrame } from "./PhoneFrame";

type Row = { family: PlutchikFamily; score: number };

interface Props {
  title: string;
  date: string;
  time: string;
  duration: string;
  intensity: string;
  rows: Row[];
  topics: string[];
}

/**
 * A saved entry from src/app/entry-detail.tsx: the Time / Duration / Intensity
 * strip and the Emotion Breakdown with its rank-decaying bars. Frozen — the
 * app animates the bars on open, the figure renders them filled.
 */
export function EntryDetailFigure({ title, date, time, duration, intensity, rows, topics }: Props) {
  return (
    <PhoneFrame>
      <div
        className="h-full flex flex-col overflow-hidden"
        style={{ background: "linear-gradient(180deg, #181624 0%, #0F0E1A 100%)" }}
      >
        <div className="flex items-center justify-between px-4 pt-10 pb-2">
          <ArrowLeft size={14} className="text-white/75" />
          <div className="flex items-center gap-3">
            <Pencil size={12} className="text-white/55" />
            <Trash size={12} className="text-white/55" />
          </div>
        </div>

        <div className="px-4 mb-2">
          <span
            className="block text-white text-[15px] font-bold leading-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            {title}
          </span>
          <span className="block text-white/70 text-[9px] mt-1">{date}</span>
        </div>

        <div className="px-3 mb-2.5">
          <div
            className="rounded-xl flex items-center justify-around py-2.5"
            style={{
              background: appGlass.nestedBackground,
              border: `1.5px solid rgba(255,255,255,0.18)`,
            }}
          >
            {[
              { icon: <Calendar size={12} />, value: time, label: "Time" },
              { icon: <Clock size={12} />, value: duration, label: "Duration" },
              { icon: <Pulse size={12} />, value: intensity, label: "Intensity" },
            ].map((cell, i) => (
              <div key={cell.label} className="contents">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    style={{ width: 1, height: 22, background: "rgba(255,255,255,0.15)" }}
                  />
                )}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-white/90">{cell.icon}</span>
                  <span className="text-white text-[8.5px] font-medium">{cell.value}</span>
                  <span className="text-white/40 text-[6.5px]">{cell.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden px-3">
          <div
            className="rounded-xl p-3"
            style={{
              background: appGlass.nestedBackground,
              border: "1.5px solid rgba(255,255,255,0.18)",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1.5">
                <ChartBar size={12} className="text-white/85" />
                <span className="text-white text-[10.5px] font-semibold">Emotion Breakdown</span>
              </span>
              <CaretUp size={12} className="text-white/40" />
            </div>
            <span className="block text-white/35 text-[6.5px] uppercase tracking-widest mb-2">
              Top Emotions — Plutchik Intensity
            </span>
            <div className="space-y-2">
              {rows.map(({ family, score }, rank) => {
                const ladder = PLUTCHIK_LADDERS[family];
                const intensity = plutchikIntensity(family, score);
                const isPrimary = rank === 0;
                return (
                  <div key={family}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-white text-[10px] ${isPrimary ? "font-semibold" : ""}`}
                          >
                            {intensity}
                          </span>
                          {isPrimary && (
                            <span
                              className="px-1.5 py-px text-[6px] rounded-full font-semibold"
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
                        {intensity !== ladder.label && (
                          <span className="block text-white/40 text-[6.5px] uppercase tracking-[0.05em] mt-px">
                            {ladder.label}
                          </span>
                        )}
                      </div>
                      <span className="text-white/80 text-[10px] font-bold">{score}</span>
                    </div>
                    <div
                      className="overflow-hidden mt-1"
                      style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.08)" }}
                    >
                      <span
                        style={{
                          display: "block",
                          width: `${score}%`,
                          height: "100%",
                          borderRadius: 3,
                          background: "#FFFFFF",
                          opacity: [1, 0.75, 0.55, 0.4][rank] ?? 0.4,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-xl p-3 mt-2"
            style={{
              background: appGlass.nestedBackground,
              border: "1.5px solid rgba(255,255,255,0.18)",
            }}
          >
            <span className="text-white text-[10.5px] font-semibold mb-2">Topics</span>
            <div className="flex flex-wrap gap-1.5">
              {topics.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[8px] rounded-full"
                  style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.78)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <DemoTabBar active="Entries" />
      </div>
    </PhoneFrame>
  );
}
