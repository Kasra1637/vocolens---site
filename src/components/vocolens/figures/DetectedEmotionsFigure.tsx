import { appGlass, appRadius, PLUTCHIK_LADDERS, type PlutchikFamily } from "@/lib/appTheme";

type Chip = { family: PlutchikFamily; score: number; selected: boolean };

interface Props {
  chips: Chip[];
}

/**
 * The reflection screen's emotion grid from src/app/reflection.tsx: one tile per
 * detected family with its emoji, the Plutchik label, and a confidence bar,
 * with the app's disagree toggle beneath.
 */
export function DetectedEmotionsFigure({ chips }: Props) {
  return (
    <div className="px-5 py-6">
      <span
        className="block text-white text-[22px] font-bold"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        AI detected these emotions
      </span>

      <div
        className="mt-4"
        style={{
          background: appGlass.cardBackground,
          border: appGlass.cardBorder,
          borderRadius: appRadius.xlarge,
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
          padding: 20,
        }}
      >
        <div className="flex flex-wrap gap-2.5">
          {chips.map(({ family, score, selected }) => {
            const ladder = PLUTCHIK_LADDERS[family];
            return (
              <span
                key={family}
                className="flex flex-col items-center px-3.5 py-3"
                style={{
                  minWidth: 76,
                  background: selected ? `${ladder.color}22` : appGlass.nestedBackground,
                  border: `2px solid ${selected ? ladder.color : "rgba(255,255,255,0.20)"}`,
                  borderRadius: appRadius.xlarge,
                  opacity: selected ? 1 : 0.45,
                }}
              >
                <span className="text-[22px] leading-none">{ladder.emoji}</span>
                <span
                  className={`block mt-1.5 text-[12px] capitalize ${selected ? "text-white font-semibold" : "text-white/65 font-semibold"}`}
                >
                  {ladder.label}
                </span>
                {score > 0 && (
                  <span
                    className="mt-1.5 overflow-hidden"
                    style={{
                      width: 40,
                      height: 3,
                      borderRadius: 2,
                      background: "rgba(255,255,255,0.14)",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: `${score}%`,
                        height: "100%",
                        borderRadius: 2,
                        background: selected ? ladder.color : "rgba(255,255,255,0.45)",
                      }}
                    />
                  </span>
                )}
              </span>
            );
          })}
        </div>

        <span
          className="flex items-center justify-center gap-2 mx-auto mt-4 px-4 py-2.5 rounded-[20px] text-[13px] font-semibold"
          style={{
            alignSelf: "center",
            width: "fit-content",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.20)",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Not quite right? Tap to edit
        </span>
        <span className="block text-center text-white/40 text-[11px] mt-2">
          These are the emotions the AI detected · Long-press any for its Plutchik definition
        </span>
      </div>
    </div>
  );
}
