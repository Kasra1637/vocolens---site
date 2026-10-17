import { CaretLeft, CaretRight, Fire, Trophy } from "@phosphor-icons/react";
import { appCardShadow, appGlass, appRadius } from "@/lib/appTheme";
import { AppIconTile } from "./AppCard";

/**
 * The Insights tab's streak surfaces, from StreakCalendar.tsx and the
 * "Streak & Badge" card in insights.tsx. Vocolens has no timer or estimate
 * features, so articles about time use show this instead — the caption says
 * plainly that it is the nearest time-shaped surface, not the article's subject.
 *
 * Static data: 18 consecutive days ending Oct 17 2026 (17 in October, plus
 * 8 September days behind the current month view). Tiers follow
 * StreakCalendar.tsx: <=2 entries at 0.35 alpha, <=4 at 0.65, 5+ at 0.95.
 */

const PRIMARY_RGB = "147,112,219";
const TIER = (count: number) =>
  `rgba(${PRIMARY_RGB},${count <= 2 ? 0.35 : count <= 4 ? 0.65 : 0.95})`;

const DAY_HEADERS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type Cell =
  | { kind: "empty" }
  | { kind: "future"; d: number }
  | { kind: "day"; d: number; count: number; today: boolean };

/** October 2026 — the 1st is a Thursday; the 18th onward is future. */
const GRID: Cell[][] = [
  [
    { kind: "empty" },
    { kind: "empty" },
    { kind: "empty" },
    { kind: "day", d: 1, count: 1, today: false },
    { kind: "day", d: 2, count: 1, today: false },
    { kind: "day", d: 3, count: 1, today: false },
    { kind: "day", d: 4, count: 1, today: false },
  ],
  [5, 6, 7, 8, 9, 10, 11].map((d) => ({
    kind: "day" as const,
    d,
    count: d === 8 || d === 11 ? 2 : 1,
    today: false,
  })),
  [12, 13, 14, 15, 16, 17, 18].map((d) =>
    d <= 17
      ? { kind: "day" as const, d, count: d === 14 ? 5 : 1, today: d === 17 }
      : { kind: "future" as const, d },
  ),
  [19, 20, 21, 22, 23, 24, 25].map((d) => ({ kind: "future" as const, d })),
  [
    ...[26, 27, 28, 29, 30, 31].map((d) => ({ kind: "future" as const, d })),
    { kind: "empty" } as Cell,
  ],
];

const STATS: { value: string; label: string; highlight?: boolean }[] = [
  { value: "17", label: "This Month", highlight: true },
  { value: "26", label: "Total Days" },
  { value: "18d", label: "Longest Run" },
];

export function StreakCalendarFigure() {
  return (
    <div className="px-5 py-6">
      {/* ── Streak & Badge card (insights.tsx:1580) ── */}
      <div
        style={{
          background: appGlass.cardBackground,
          border: appGlass.cardBorder,
          borderRadius: appRadius.xlarge,
          boxShadow: appCardShadow,
          padding: 20,
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center flex-shrink-0"
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
            }}
          >
            <Fire size={22} />
          </span>
          <div>
            <span className="block text-white text-[20px] font-semibold leading-tight">
              18 days streak
            </span>
            <span className="block text-white/80 text-[14px]">Next: 30-day streak</span>
          </div>
        </div>

        <div className="my-3" style={{ height: 1, background: `rgba(${PRIMARY_RGB},0.15)` }} />

        <div className="flex items-center gap-3">
          <AppIconTile>
            <Trophy size={24} />
          </AppIconTile>
          <div className="flex-1 min-w-0">
            <span className="block text-white text-[16px] font-medium mb-2">
              Next: 30-Day Streak
            </span>
            <div
              className="overflow-hidden"
              style={{ height: 8, borderRadius: 4, background: `rgba(${PRIMARY_RGB},0.15)` }}
            >
              <div
                style={{ height: "100%", width: "60%", borderRadius: 4, background: "#FFFFFF" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── StreakCalendar (StreakCalendar.tsx) — sits directly on the screen ── */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <CaretLeft size={18} color="rgba(255,255,255,0.8)" />
          </span>
          <span className="text-center">
            <span className="block text-white text-[18px] font-bold leading-snug">October</span>
            <span className="block text-white/45 text-[12px]">2026</span>
          </span>
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <CaretRight size={18} color="rgba(255,255,255,0.2)" />
          </span>
        </div>

        <div className="flex mb-1.5">
          {DAY_HEADERS.map((d) => (
            <span
              key={d}
              className="flex-1 text-center text-white/35 text-[11px] font-semibold"
              style={{ letterSpacing: 0.3 }}
            >
              {d}
            </span>
          ))}
        </div>

        <div>
          {GRID.map((week, wi) => (
            <div key={wi} className="flex" style={{ marginBottom: wi === GRID.length - 1 ? 0 : 5 }}>
              {week.map((cell, di) => {
                if (cell.kind === "empty") {
                  return <span key={di} className="flex-1" />;
                }
                if (cell.kind === "future") {
                  return (
                    <span key={di} className="flex-1" style={{ padding: 2 }}>
                      <span
                        className="flex items-center justify-center"
                        style={{
                          aspectRatio: "1 / 1",
                          borderRadius: 8,
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.15)",
                          fontSize: 13,
                        }}
                      >
                        {cell.d}
                      </span>
                    </span>
                  );
                }
                const filled = cell.count > 0;
                return (
                  <span key={di} className="flex-1" style={{ padding: 2 }}>
                    <span
                      className="relative flex items-center justify-center"
                      style={{
                        aspectRatio: "1 / 1",
                        borderRadius: 8,
                        background: TIER(cell.count),
                        border: `${cell.today ? 1.5 : 1}px solid rgba(255,255,255,${cell.today ? 0.95 : 0.35})`,
                        color: "#FFFFFF",
                        fontWeight: cell.today ? 700 : 400,
                        fontSize: 13,
                      }}
                    >
                      {cell.d}
                      {filled && (
                        <span
                          className="absolute"
                          style={{
                            bottom: 3,
                            width: 4,
                            height: 4,
                            borderRadius: 2,
                            background: "rgba(255,255,255,0.7)",
                          }}
                        />
                      )}
                    </span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-2.5 mt-3.5">
          <span className="text-white/30 text-[10px]">Less</span>
          {[0.35, 0.65, 0.95].map((a) => (
            <span
              key={a}
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                background: `rgba(${PRIMARY_RGB},${a})`,
              }}
            />
          ))}
          <span className="text-white/30 text-[10px]">More</span>
        </div>

        <div className="flex gap-2.5 mt-3.5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex-1 text-center"
              style={{
                padding: "12px 8px",
                borderRadius: 16,
                background: s.highlight ? `rgba(${PRIMARY_RGB},0.18)` : "rgba(255,255,255,0.07)",
                border: `1px solid ${s.highlight ? `rgba(${PRIMARY_RGB},0.35)` : "rgba(255,255,255,0.12)"}`,
              }}
            >
              <span className="block text-white text-[18px] font-bold leading-snug">{s.value}</span>
              <span className="block text-white/50 text-[10px] mt-[3px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
