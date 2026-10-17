import { Minus, Plus } from "@phosphor-icons/react";
import { appCardShadow, appGlass, appRadius } from "@/lib/appTheme";

type Dial = {
  label: string;
  minLabel: string;
  maxLabel: string;
  /** 0-100 position along the track. */
  knobPct: number;
  /** Signed score behind the bubble: -100..100 for valence, 0..100 for arousal. */
  valueNum: number;
  value: string;
  bipolar: boolean;
};

interface Props {
  title: string;
  dials: Dial[];
}

function StepButton({ icon }: { icon: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: 34,
        height: 34,
        borderRadius: 17,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.22)",
        color: "#FFFFFF",
      }}
    >
      {icon}
    </span>
  );
}

/**
 * One AdjustmentSliderCard from the app's shared/AdjustmentSliderCard.tsx: the
 * stepper buttons, the 6px track with its centre mark, the 28px thumb straddling
 * the track, and the value bubble floating above it.
 */
function AdjustmentSlider({ dial }: { dial: Dial }) {
  const magnitude = Math.abs(dial.valueNum);
  // Bipolar tracks are centred on 0, so the fill grows out from the middle mark;
  // the arousal track starts at its left edge.
  const fillLeftPct = dial.bipolar ? 50 - magnitude / 2 : 0;
  const fillWidthPct = dial.bipolar ? magnitude / 2 : magnitude;
  return (
    <div>
      <span className="block text-white/80 text-[14px] font-medium">{dial.label}</span>
      <div className="relative flex items-center gap-2.5" style={{ marginTop: 26 }}>
        <StepButton icon={<Minus size={16} weight="bold" />} />
        <div className="relative flex-1" style={{ height: 28 }}>
          <div
            className="absolute left-0 right-0 overflow-hidden"
            style={{ top: 11, height: 6, borderRadius: 3, background: appGlass.sliderTrack }}
          >
            <div
              className="absolute top-0 h-full"
              style={{
                left: `${fillLeftPct}%`,
                width: `${fillWidthPct}%`,
                background: appGlass.sliderFill,
              }}
            />
            {dial.bipolar && (
              <span
                className="absolute top-0 h-full"
                style={{ left: "50%", width: 2, background: appGlass.sliderCenterMark }}
              />
            )}
          </div>
          <span
            className="absolute flex items-center justify-center text-white text-[12px] font-bold"
            style={{
              left: `calc(${dial.knobPct}% - 28px)`,
              bottom: "calc(100% + 6px)",
              width: 56,
              minWidth: 36,
              padding: "3px 8px",
              borderRadius: 9,
              background: appGlass.bubbleBackground,
              border: appGlass.bubbleBorder,
            }}
          >
            {dial.value}
          </span>
          <span
            className="absolute flex items-center justify-center"
            style={{
              left: `calc(${dial.knobPct}% - 14px)`,
              top: 0,
              width: 28,
              height: 28,
              borderRadius: 14,
              background: appGlass.sliderThumb,
              border: `1.5px solid ${appGlass.sliderThumbBorder}`,
              boxShadow: "0 2px 4px rgba(0,0,0,0.18)",
            }}
          />
        </div>
        <StepButton icon={<Plus size={16} weight="bold" />} />
      </div>
      <div
        className="flex items-center justify-between"
        style={{ marginTop: 2, paddingInline: 44 }}
      >
        <span className="text-white/35 text-[11px]">{dial.minLabel}</span>
        <span className="text-white/35 text-[11px]">{dial.maxLabel}</span>
      </div>
    </div>
  );
}

/**
 * The app's reflection step titled "Adjust how it felt" — the only
 * valence/arousal control in the product (src/app/reflection.tsx).
 */
export function AdjustHowItFeltFigure({ title, dials }: Props) {
  return (
    <div className="px-5 py-6">
      <span
        className="block text-white text-[22px] font-bold"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        {title}
      </span>
      <div
        className="mt-4"
        style={{
          background: appGlass.cardBackground,
          border: appGlass.cardBorder,
          borderRadius: appRadius.xlarge,
          boxShadow: appCardShadow,
          padding: 20,
        }}
      >
        <div className="space-y-7">
          {dials.map((dial) => (
            <AdjustmentSlider key={dial.label} dial={dial} />
          ))}
        </div>
      </div>
    </div>
  );
}
