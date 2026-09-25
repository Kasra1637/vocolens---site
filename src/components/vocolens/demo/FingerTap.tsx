/**
 * Realistic fingertip tap indicator for the hero phone demo.
 *
 * A shaded fingertip (skin-tone gradient, nail highlight, crease, contact
 * shadow) that descends onto its tap target, holds the press while a ripple
 * ring expands, then lifts and fades. One-shot choreography driven by React
 * `key` remounts from the AppDemo clock — not an ambient loop. Hidden under
 * prefers-reduced-motion via the .demo-finger-layer guard in styles.css.
 */
export function FingerTap({
  tapKey,
  rippleSize = 76,
}: {
  /** Change to replay the tap (AppDemo passes a per-cycle key). */
  tapKey: string | number;
  /** Diameter of the ripple ring; match the tapped button. */
  rippleSize?: number;
}) {
  return (
    <div className="demo-finger-layer" aria-hidden="true">
      <div key={tapKey} className="demo-finger-tap" style={{ width: 48, height: 66 }}>
        <svg width="48" height="66" viewBox="0 0 48 66" fill="none">
          <defs>
            <linearGradient id="demo-finger-skin" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e2a276" />
              <stop offset="0.5" stopColor="#f4c9a2" />
              <stop offset="1" stopColor="#d39468" />
            </linearGradient>
            <radialGradient id="demo-finger-pad" cx="0.5" cy="0.85" r="0.7">
              <stop offset="0" stopColor="#f7d3ae" />
              <stop offset="1" stopColor="#e2a276" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* contact shadow */}
          <ellipse cx="24" cy="60" rx="15" ry="4.5" fill="rgba(0,0,0,0.35)" />
          {/* finger body, tip down */}
          <path
            d="M10 0 L10 32 C10 49 16 59 24 59 C32 59 38 49 38 32 L38 0 Z"
            fill="url(#demo-finger-skin)"
          />
          {/* fingertip pad shading */}
          <ellipse cx="24" cy="50" rx="12" ry="9" fill="url(#demo-finger-pad)" />
          {/* nail */}
          <ellipse cx="24" cy="40" rx="8.5" ry="12" fill="#f6d3b8" />
          <ellipse
            cx="24"
            cy="40"
            rx="8.5"
            ry="12"
            fill="none"
            stroke="#d39468"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* nail highlight */}
          <ellipse cx="21" cy="35" rx="3" ry="5.5" fill="#ffffff" opacity="0.5" />
          {/* knuckle crease */}
          <path
            d="M15 13 Q24 17.5 33 13"
            stroke="#c98d64"
            strokeWidth="1.2"
            fill="none"
            opacity="0.65"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        key={`ripple-${tapKey}`}
        className="demo-tap-ripple"
        style={{ width: rippleSize, height: rippleSize }}
      />
    </div>
  );
}
