/**
 * Realistic pressing hand for the hero phone demo.
 *
 * Dorsal view of a right hand with the index finger extended down onto its
 * tap target: sleeve cuff, hand back with knuckle creases, curled
 * middle/ring/pinky fingers, thumb braced on the side, nail with highlight,
 * fingertip pad shading, and a contact shadow. One-shot choreography driven
 * by React `key` remounts from the AppDemo clock — not an ambient loop.
 * Hidden under prefers-reduced-motion via the .demo-finger-layer guard.
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
      <div key={tapKey} className="demo-finger-tap" style={{ width: 90, height: 116 }}>
        <svg width="90" height="116" viewBox="0 0 90 116" fill="none">
          <defs>
            <linearGradient id="demo-hand-skin" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e0a172" />
              <stop offset="0.45" stopColor="#f4c6a0" />
              <stop offset="1" stopColor="#d39468" />
            </linearGradient>
            <radialGradient id="demo-hand-pad" cx="0.5" cy="0.8" r="0.75">
              <stop offset="0" stopColor="#f7d3ae" />
              <stop offset="1" stopColor="#e2a276" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="demo-hand-cuff" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#23262f" />
              <stop offset="0.5" stopColor="#343945" />
              <stop offset="1" stopColor="#20232c" />
            </linearGradient>
          </defs>
          {/* contact shadow */}
          <ellipse cx="45" cy="109" rx="17" ry="4.5" fill="rgba(0,0,0,0.35)" />
          {/* sleeve cuff */}
          <rect x="21" y="0" width="48" height="16" rx="4" fill="url(#demo-hand-cuff)" />
          <rect x="21" y="13" width="48" height="3" fill="rgba(255,255,255,0.08)" />
          {/* hand back */}
          <path
            d="M22 12 L22 44 C22 56 30 62 45 62 C60 62 68 56 68 44 L68 12 Z"
            fill="url(#demo-hand-skin)"
          />
          {/* curled fingers (right edge bumps) */}
          <circle cx="68" cy="52" r="9.5" fill="url(#demo-hand-skin)" />
          <circle cx="69" cy="66" r="9" fill="url(#demo-hand-skin)" />
          <circle cx="66" cy="79" r="8" fill="url(#demo-hand-skin)" />
          {/* curled-finger creases */}
          <path
            d="M62 50 Q66 54 64 59"
            stroke="#c08055"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
          <path
            d="M63 64 Q67 68 65 73"
            stroke="#c08055"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
          {/* thumb braced on the left */}
          <path
            d="M22 48 C14 54 10 64 12 76 C13 83 18 86 23 84 C29 81 31 70 30 58 Z"
            fill="url(#demo-hand-skin)"
          />
          <path
            d="M17 62 Q20 70 19 78"
            stroke="#c08055"
            strokeWidth="1.2"
            fill="none"
            opacity="0.6"
            strokeLinecap="round"
          />
          {/* index finger, extended down */}
          <path
            d="M34 54 L34 92 C34 102 38 108 45 108 C52 108 56 102 56 92 L56 54 Z"
            fill="url(#demo-hand-skin)"
          />
          {/* fingertip pad shading */}
          <ellipse cx="45" cy="99" rx="9.5" ry="8" fill="url(#demo-hand-pad)" />
          {/* nail */}
          <ellipse cx="45" cy="80" rx="8" ry="12.5" fill="#f6d3b8" />
          <ellipse
            cx="45"
            cy="80"
            rx="8"
            ry="12.5"
            fill="none"
            stroke="#d39468"
            strokeWidth="1"
            opacity="0.5"
          />
          {/* nail highlight */}
          <ellipse cx="42" cy="74" rx="2.8" ry="5.5" fill="#ffffff" opacity="0.55" />
          {/* index knuckle crease */}
          <path
            d="M36 58 Q45 62 54 58"
            stroke="#c08055"
            strokeWidth="1.2"
            fill="none"
            opacity="0.65"
            strokeLinecap="round"
          />
          {/* hand-back shading */}
          <ellipse cx="45" cy="30" rx="20" ry="14" fill="#ffffff" opacity="0.12" />
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
