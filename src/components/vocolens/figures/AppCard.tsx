import type { ReactNode } from "react";
import { appCardShadow, appGlass, appGradients, appRadius } from "@/lib/appTheme";

interface Props {
  icon: ReactNode;
  title: string;
  trailing?: ReactNode;
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * The app's glass card: rgba(255,255,255,0.12) fill, a visible 2px border and a
 * soft black shadow, radius 24. Repeated verbatim on every app screen.
 */
export function AppCard({ icon, title, trailing, children, className, style }: Props) {
  return (
    <div
      className={className}
      style={{
        background: appGlass.cardBackground,
        border: appGlass.cardBorder,
        borderRadius: appRadius.xlarge,
        boxShadow: appCardShadow,
        padding: 20,
        ...style,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center justify-center flex-shrink-0"
            style={{
              background: appGlass.pillBackground,
              border: appGlass.nestedBorder,
              borderRadius: 8,
              padding: 6,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {icon}
          </span>
          <span className="text-white text-[15px] font-semibold">{title}</span>
        </div>
        {trailing}
      </div>
      {children}
    </div>
  );
}

/**
 * The 44px gradient icon tile used by the app's larger card headers.
 */
export function AppIconTile({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center flex-shrink-0"
      style={{
        width: 44,
        height: 44,
        borderRadius: 22,
        overflow: "hidden",
        background: appGradients.iconTile,
        color: "#FFFFFF",
      }}
    >
      {children}
    </span>
  );
}
