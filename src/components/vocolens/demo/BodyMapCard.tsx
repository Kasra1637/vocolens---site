import { useState } from 'react';
import { Scan } from '@phosphor-icons/react';

/**
 * Faithful recreation of the mobile app's Body Sensation Heatmap section
 * (BodyHeatmapCard on the Insights tab) for the homepage phone mock.
 *
 * Same structure and styling language as the app — glass card, Scan-icon
 * header, 7D/14D/30D pills, the verbatim 160×320 SVG anatomy with heat
 * fills from the app's own formula, selected-region tooltip, and ranked
 * region list — scaled to the mock width and fed static demo data.
 * Tapping a region moves the tooltip/highlight; range pills are visual.
 */

type BodyRegion = 'head' | 'face' | 'neck' | 'chest' | 'stomach' | 'arms' | 'hands' | 'legs';

const LABELS: Record<BodyRegion, string> = {
  head: 'Head',
  face: 'Face',
  neck: 'Neck',
  chest: 'Chest',
  stomach: 'Stomach',
  arms: 'Arms',
  hands: 'Hands',
  legs: 'Legs',
};

const EMOJIS: Record<BodyRegion, string> = {
  head: '🧠',
  face: '😶',
  neck: '🗣',
  chest: '🫁',
  stomach: '🫃',
  arms: '💪',
  hands: '🤲',
  legs: '🦵',
};

// Static demo data mirroring the app's RegionStat shape (count → heat).
const STATS: { region: BodyRegion; count: number; heat: number }[] = [
  { region: 'chest', count: 5, heat: 1 },
  { region: 'stomach', count: 3, heat: 0.6 },
  { region: 'head', count: 2, heat: 0.4 },
];

const PRIMARY = '167,139,250'; // #A78BFA — app's heat color
const CX = 80;

function heatFill(heat: number): string {
  return `rgba(${PRIMARY},${(0.1 + Math.max(heat, 0.05) * 0.75).toFixed(2)})`;
}

function heatStroke(heat: number): string {
  return `rgba(${PRIMARY},${(0.25 + Math.max(heat, 0.05) * 0.6).toFixed(2)})`;
}

// Verbatim anatomy from the app's SHAPES table (viewport 160×320).
function RegionShapes({ region, heat, isActive }: { region: BodyRegion; heat: number; isActive: boolean }) {
  const fill = heatFill(heat);
  const stroke = isActive ? '#FFFFFF' : heatStroke(heat);
  const strokeWidth = isActive ? 1.8 : 1;
  switch (region) {
    case 'head':
      return <ellipse cx={CX} cy={22} rx={20} ry={22} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
    case 'face':
      return <ellipse cx={CX} cy={50} rx={14} ry={12} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
    case 'neck':
      return <rect x={CX - 8} y={64} width={16} height={14} rx={6} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
    case 'chest':
      return <ellipse cx={CX} cy={105} rx={28} ry={22} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
    case 'stomach':
      return <ellipse cx={CX} cy={148} rx={22} ry={18} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />;
    case 'arms':
      return (
        <>
          <rect x={8} y={82} width={20} height={70} rx={10} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x={132} y={82} width={20} height={70} rx={10} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        </>
      );
    case 'hands':
      return (
        <>
          <ellipse cx={18} cy={168} rx={12} ry={9} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          <ellipse cx={142} cy={168} rx={12} ry={9} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        </>
      );
    case 'legs':
      return (
        <>
          <rect x={52} y={175} width={24} height={90} rx={12} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
          <rect x={84} y={175} width={24} height={90} rx={12} fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
        </>
      );
  }
}

const TAP_CENTER: Record<BodyRegion, { x: number; y: number }> = {
  head: { x: CX, y: 22 },
  face: { x: CX, y: 50 },
  neck: { x: CX, y: 71 },
  chest: { x: CX, y: 105 },
  stomach: { x: CX, y: 148 },
  arms: { x: CX, y: 117 },
  hands: { x: CX, y: 168 },
  legs: { x: CX, y: 220 },
};

const HEAT_OF: Record<string, number> = { chest: 1, stomach: 0.6, head: 0.4 };

export function BodyMapCard() {
  const [selected, setSelected] = useState<BodyRegion | null>('chest');
  const selectedStat = STATS.find((s) => s.region === selected) ?? null;

  const toggle = (region: BodyRegion) => {
    setSelected((prev) => (prev === region ? null : region));
  };

  return (
    <div
      className="rounded-2xl p-3 mb-2"
      style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.20)' }}
    >
      {/* Header — Scan badge + title + subtitle, like the app */}
      <div className="flex items-center mb-2.5">
        <div
          className="relative flex items-center justify-center rounded-full overflow-hidden flex-shrink-0"
          style={{ width: 26, height: 26, marginRight: 8 }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 100%)' }}
          />
          <Scan className="w-3.5 h-3.5 text-white relative" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white text-[11px] font-semibold leading-tight">Body sensation map</p>
          <p className="text-[8px] mt-0.5 leading-snug" style={{ color: 'rgba(255,255,255,0.50)' }}>
            5 body scans · tap a region to explore
          </p>
        </div>
      </div>

      {/* Time range pills — 30D active, visual state like the app */}
      <div className="flex gap-1.5 mb-2.5" aria-hidden="true">
        {(['7D', '14D', '30D'] as const).map((r) => {
          const active = r === '30D';
          return (
            <span
              key={r}
              className="text-[8px] rounded-lg"
              style={{
                padding: '4px 8px',
                fontWeight: active ? 600 : 500,
                color: active ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                background: active ? 'rgba(167,139,250,0.25)' : 'rgba(255,255,255,0.07)',
                border: `1px solid ${active ? 'rgba(167,139,250,0.6)' : 'rgba(255,255,255,0.12)'}`,
              }}
            >
              {r}
            </span>
          );
        })}
      </div>

      {/* Silhouette + heat zones — app's exact anatomy */}
      <div className="flex justify-center mb-2.5">
        <svg width={104} height={208} viewBox="0 0 160 320" role="img" aria-label="Body sensation heatmap">
          <g opacity={0.22} stroke="white" strokeWidth={1} fill="none">
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
          {(Object.keys(HEAT_OF) as BodyRegion[]).map((region) => (
            <g
              key={region}
              onClick={() => toggle(region)}
              style={{ cursor: 'pointer' }}
            >
              <RegionShapes region={region} heat={HEAT_OF[region]} isActive={selected === region} />
            </g>
          ))}
          {selected && (
            <circle cx={TAP_CENTER[selected].x} cy={TAP_CENTER[selected].y} r={4} fill="#FFFFFF" opacity={0.9} />
          )}
        </svg>
      </div>

      {/* Selected-region tooltip */}
      {selected && selectedStat && (
        <div
          className="rounded-xl p-2.5 mb-2"
          style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${heatStroke(selectedStat.heat)}` }}
        >
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[13px]" aria-hidden="true">{EMOJIS[selected]}</span>
            <span className="text-white text-[10px] font-bold flex-1">{LABELS[selected]}</span>
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Clear region selection"
              className="text-[10px] px-1"
              style={{ color: 'rgba(255,255,255,0.40)' }}
            >
              ✕
            </button>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center flex-1">
              <span className="text-white text-[12px] font-bold">{selectedStat.count}</span>
              <span className="text-[8px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Sessions</span>
            </div>
          </div>
        </div>
      )}

      {/* Ranked region list with mini heat bars */}
      <div className="flex flex-col gap-0.5">
        {STATS.map(({ region, count, heat }) => (
          <button
            key={region}
            type="button"
            onClick={() => toggle(region)}
            className="flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-left transition-colors"
            style={selected === region ? { background: 'rgba(167,139,250,0.12)' } : undefined}
            aria-pressed={selected === region}
          >
            <span className="text-[10px] w-4 text-center" aria-hidden="true">{EMOJIS[region]}</span>
            <span className="text-[9px] font-medium flex-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {LABELS[region]}
            </span>
            <span
              className="h-[5px] rounded-full overflow-hidden"
              style={{ width: 40, background: 'rgba(255,255,255,0.10)' }}
              aria-hidden="true"
            >
              <span className="block h-full rounded-full" style={{ width: `${heat * 100}%`, background: heatFill(heat) }} />
            </span>
            <span className="text-[8px] font-semibold w-5 text-right tabular-nums" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {count}×
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
