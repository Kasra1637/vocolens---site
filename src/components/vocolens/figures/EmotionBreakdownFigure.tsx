import { CaretUp, ChartBar } from "@phosphor-icons/react";
import {
  appGlass,
  appRankOpacity,
  plutchikIntensity,
  PLUTCHIK_LADDERS,
  type PlutchikFamily,
} from "@/lib/appTheme";
import { AppCard } from "./AppCard";

export type EmotionRow = { family: PlutchikFamily; score: number };

interface Props {
  rows: EmotionRow[];
}

/**
 * The app's Emotion Breakdown card, from entry-detail.tsx. Ranks the top
 * detected families under "Top Emotions — Plutchik Intensity", marks the
 * leading one with a PRIMARY badge, and resolves each score to the app's own
 * three-step intensity word with the base family beneath it.
 */
export function EmotionBreakdownFigure({ rows }: Props) {
  return (
    <div className="px-5 py-6">
      <AppCard
        icon={<ChartBar size={16} />}
        title="Emotion Breakdown"
        trailing={<CaretUp size={18} className="text-white/70" />}
      >
        <div className="mt-4">
          <span className="block text-white/50 text-[10px] font-semibold uppercase tracking-[0.08em]">
            Top Emotions — Plutchik Intensity
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {rows.map(({ family, score }, rank) => {
            const ladder = PLUTCHIK_LADDERS[family];
            const intensity = plutchikIntensity(family, score);
            const isPrimary = rank === 0;
            return (
              <div key={family}>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-white text-[13px] ${isPrimary ? "font-semibold" : ""}`}
                      >
                        {intensity}
                      </span>
                      {isPrimary && (
                        <span
                          className="px-2 py-0.5 text-[9px] rounded-full font-semibold"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.13)",
                            color: "#FFFFFF",
                          }}
                        >
                          PRIMARY
                        </span>
                      )}
                    </div>
                    {intensity !== ladder.label && (
                      <span className="block mt-0.5 text-white/40 text-[9px] uppercase tracking-[0.05em]">
                        {ladder.label}
                      </span>
                    )}
                  </div>
                  <span className="text-white/80 text-[13px] font-bold">{score}</span>
                </div>
                <div
                  className="mt-1.5 overflow-hidden"
                  style={{ height: 6, borderRadius: 3, background: appGlass.track }}
                >
                  <div
                    style={{
                      width: `${score}%`,
                      height: "100%",
                      borderRadius: 3,
                      background: "#FFFFFF",
                      opacity: appRankOpacity[rank] ?? 0.4,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </AppCard>
    </div>
  );
}
