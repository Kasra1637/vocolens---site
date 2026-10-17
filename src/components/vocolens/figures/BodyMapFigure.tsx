import { Scan } from "@phosphor-icons/react";
import { appGlass, appRadius, BODY_REGIONS } from "@/lib/appTheme";
import { AppIconTile } from "./AppCard";

type RegionId = (typeof BODY_REGIONS)[number]["id"];

const CX = 80;
const VW = 160;
const VH = 320;

type Shape =
  | { type: "ellipse"; cx: number; cy: number; rx: number; ry: number }
  | { type: "rect"; x: number; y: number; w: number; h: number; r: number };

const SHAPES: Record<RegionId, Shape[]> = {
  head: [{ type: "ellipse", cx: CX, cy: 22, rx: 20, ry: 22 }],
  face: [{ type: "ellipse", cx: CX, cy: 50, rx: 14, ry: 12 }],
  neck: [{ type: "rect", x: CX - 8, y: 64, w: 16, h: 14, r: 6 }],
  chest: [{ type: "ellipse", cx: CX, cy: 105, rx: 28, ry: 22 }],
  stomach: [{ type: "ellipse", cx: CX, cy: 148, rx: 22, ry: 18 }],
  arms: [
    { type: "rect", x: 8, y: 82, w: 20, h: 70, r: 10 },
    { type: "rect", x: 132, y: 82, w: 20, h: 70, r: 10 },
  ],
  hands: [
    { type: "ellipse", cx: 18, cy: 168, rx: 12, ry: 9 },
    { type: "ellipse", cx: 142, cy: 168, rx: 12, ry: 9 },
  ],
  legs: [
    { type: "rect", x: 52, y: 175, w: 24, h: 90, r: 12 },
    { type: "rect", x: 84, y: 175, w: 24, h: 90, r: 12 },
  ],
};

const heatFill = (heat: number) =>
  `rgba(167,139,250,${(0.1 + Math.max(heat, 0.05) * 0.75).toFixed(2)})`;
const heatStroke = (heat: number) =>
  `rgba(167,139,250,${(0.25 + Math.max(heat, 0.05) * 0.6).toFixed(2)})`;

/** Where the app places the white active-region marker. */
const TAP_CENTER: Record<RegionId, { x: number; y: number }> = {
  head: { x: 80, y: 22 },
  face: { x: 80, y: 50 },
  neck: { x: 80, y: 71 },
  chest: { x: 80, y: 105 },
  stomach: { x: 80, y: 148 },
  arms: { x: 70, y: 117 },
  hands: { x: 70, y: 168 },
  legs: { x: 68, y: 220 },
};

interface Props {
  counts: Partial<Record<RegionId, number>>;
  scanCount: number;
  selected?: RegionId;
  range?: "7D" | "14D" | "30D";
}

/**
 * The Insights tab's Body Sensation map, from BodyHeatmapCard.tsx. Heat is the
 * share of body scans in which a region was selected (frequency), not a
 * predicted stress score.
 */
export function BodyMapFigure({ counts, scanCount, selected = "chest", range = "30D" }: Props) {
  const max = Math.max(...Object.values(counts), 1);
  const ranked = (Object.entries(counts) as [RegionId, number][])
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1]);
  const selectedCount = counts[selected] ?? 0;

  return (
    <div className="px-5 py-6">
      <div
        style={{
          background: appGlass.cardBackground,
          border: appGlass.cardBorder,
          borderRadius: appRadius.xlarge,
          boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
          padding: 20,
        }}
      >
        <div className="flex items-center gap-3">
          <AppIconTile>
            <Scan size={24} />
          </AppIconTile>
          <div>
            <span className="block text-white text-[16px] font-semibold">Body sensation map</span>
            <span className="block text-white/50 text-[12px] leading-snug">
              {scanCount} body scans · tap a region to explore
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 mb-4">
          {(["7D", "14D", "30D"] as const).map((r) => (
            <span
              key={r}
              className="px-3.5 py-1.5 rounded-[10px] text-[12px]"
              style={
                r === range
                  ? {
                      background: "rgba(147,112,219,0.25)",
                      border: "1px solid rgba(147,112,219,0.60)",
                      color: "#FFFFFF",
                      fontWeight: 600,
                    }
                  : {
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 500,
                    }
              }
            >
              {r}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-5">
          <svg
            width={116}
            height={232}
            viewBox={`0 0 ${VW} ${VH}`}
            role="img"
            aria-label="Body sensation heatmap"
          >
            <g opacity={0.22} stroke="white" fill="none">
              <ellipse cx={CX} cy={22} rx={20} ry={22} />
              <rect x={CX - 8} y={64} width={16} height={14} rx={6} />
              <rect x={CX - 28} y={78} width={56} height={85} rx={14} />
              <rect x={8} y={82} width={20} height={70} rx={10} />
              <rect x={132} y={82} width={20} height={70} rx={10} />
              <ellipse cx={18} cy={168} rx={12} ry={9} />
              <ellipse cx={142} cy={168} rx={12} ry={9} />
              <rect x={52} y={175} width={24} height={90} rx={12} />
              <rect x={84} y={175} width={24} height={90} rx={12} />
            </g>
            {(Object.keys(SHAPES) as RegionId[]).map((region) => {
              const n = counts[region] ?? 0;
              const heat = n / max;
              const isActive = region === selected;
              const fill = n > 0 ? heatFill(heat) : "rgba(255,255,255,0.04)";
              const stroke = n > 0 ? heatStroke(heat) : "rgba(255,255,255,0.18)";
              return (
                <g key={region}>
                  {SHAPES[region].map((s, i) =>
                    s.type === "ellipse" ? (
                      <ellipse
                        key={i}
                        cx={s.cx}
                        cy={s.cy}
                        rx={s.rx}
                        ry={s.ry}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isActive ? 1.8 : 1}
                      />
                    ) : (
                      <rect
                        key={i}
                        x={s.x}
                        y={s.y}
                        width={s.w}
                        height={s.h}
                        rx={s.r}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={isActive ? 1.8 : 1}
                      />
                    ),
                  )}
                </g>
              );
            })}
            <circle
              cx={TAP_CENTER[selected].x}
              cy={TAP_CENTER[selected].y}
              r={4}
              fill="#FFFFFF"
              opacity={0.9}
            />
          </svg>

          <div className="flex-1 min-w-0">
            <div
              className="rounded-2xl mb-3"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${heatStroke((selectedCount || 0.05) / max)}`,
                padding: 14,
              }}
            >
              <span className="block text-white text-[14px] font-bold">
                {BODY_REGIONS.find((r) => r.id === selected)?.label}
              </span>
              <span className="block text-white text-[16px] font-bold mt-1">
                {selectedCount}× <span className="text-white/45 text-[10px]">Sessions</span>
              </span>
            </div>
            <div className="flex flex-col gap-0.5">
              {ranked.map(([region, n]) => (
                <div
                  key={region}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-[10px]"
                  style={region === selected ? { background: "rgba(147,112,219,0.12)" } : undefined}
                >
                  <span className="text-[14px] w-5 flex-shrink-0">
                    {BODY_REGIONS.find((r) => r.id === region)?.emoji}
                  </span>
                  <span className="text-white/75 text-[12px] font-medium flex-shrink-0 w-16">
                    {BODY_REGIONS.find((r) => r.id === region)?.label}
                  </span>
                  <span
                    className="flex-1 overflow-hidden"
                    style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.10)" }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: `${(n / max) * 100}%`,
                        height: "100%",
                        borderRadius: 3,
                        background: heatFill(n / max),
                      }}
                    />
                  </span>
                  <span className="text-white/45 text-[11px] font-semibold w-6 text-right">
                    {n}×
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
