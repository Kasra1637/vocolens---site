import type React from 'react';

/**
 * Recreates the app's custom bottom tab bar (src/app/(tabs)/_layout.tsx +
 * src/components/TabIcons.tsx) for the hero phone mockup: same 5 tabs in the
 * same order with the same labels ("Record", "Entries", "Insights", "Awards",
 * "Settings" — not the generic "Journal"/"Milestones" used by the old demo),
 * the app's own hand-drawn icon shapes (not a generic icon library), and the
 * Midnight Glow theme's active-tab treatment: white icon/label + a small dot
 * above the icon, primary-tinted glass background.
 */

type TabId = 'Record' | 'Entries' | 'Insights' | 'Awards' | 'Settings';

const TABS: TabId[] = ['Record', 'Entries', 'Insights', 'Awards', 'Settings'];

/** Microphone — capsule + stand, matches MicTabIcon. */
function MicIcon({ active }: { active: boolean }) {
  const c = active ? '#FFFFFF' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="22" x2="16" y2="22" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Open book — matches BookTabIcon (used for "Entries"). */
function BookIcon({ active }: { active: boolean }) {
  const c = active ? '#FFFFFF' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M2 5a2 2 0 0 1 2-2h6v15H4a2 2 0 0 1-2-2V5Z" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
      <path d="M22 5a2 2 0 0 0-2-2h-6v15h6a2 2 0 0 0 2-2V5Z" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
      <path d="M10 18 Q12 21 14 18" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Three-bar chart — matches BarChartTabIcon (used for "Insights"). */
function BarChartIcon({ active }: { active: boolean }) {
  const c = active ? '#FFFFFF' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="14" width="5" height="7" rx="1.2" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
      <rect x="9.5" y="5" width="5" height="16" rx="1.2" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
      <rect x="16.5" y="9" width="5" height="12" rx="1.2" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
    </svg>
  );
}

/** Trophy — matches AwardTabIcon (used for "Awards"). */
function TrophyIcon({ active }: { active: boolean }) {
  const c = active ? '#FFFFFF' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M7 2h10v9a5 5 0 0 1-10 0V2Z" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} strokeLinejoin="round" />
      <path d="M7 4H4a2 2 0 0 0 0 4h3" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 4h3a2 2 0 0 1 0 4h-3" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="16" x2="12" y2="20" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="8" y1="20" x2="16" y2="20" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Settings sliders — matches SettingsTabIcon. */
function SettingsIcon({ active }: { active: boolean }) {
  const c = active ? '#FFFFFF' : 'rgba(255,255,255,0.45)';
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <line x1="3" y1="6" x2="21" y2="6" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="3" y1="18" x2="21" y2="18" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="15" cy="6" r="2.8" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} />
      <circle cx="9" cy="12" r="2.8" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} />
      <circle cx="15" cy="18" r="2.8" fill={active ? c : 'none'} stroke={c} strokeWidth={active ? 0 : 1.6} />
    </svg>
  );
}

const ICONS: Record<TabId, (p: { active: boolean }) => React.ReactElement> = {
  Record: MicIcon,
  Entries: BookIcon,
  Insights: BarChartIcon,
  Awards: TrophyIcon,
  Settings: SettingsIcon,
};

export function DemoTabBar({ active }: { active: TabId }) {
  return (
    <div
      className="px-3 py-2.5 flex justify-around items-center"
      style={{
        // Matches CustomTabBar: dark gradient-end background + primary tint
        // wash + blur, with a thin primary-tinted top separator line.
        background: 'rgba(15,14,26,0.85)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(147,112,219,0.3)',
      }}
    >
      {TABS.map((tab) => {
        const isActive = tab === active;
        const Icon = ICONS[tab];
        return (
          <div key={tab} className="flex flex-col items-center gap-1 relative" style={{ width: 32 }}>
            {isActive && (
              <div
                className="absolute rounded-full"
                style={{ top: -7, width: 4, height: 4, background: '#9370DB' }}
              />
            )}
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 20,
                height: 20,
                background: isActive ? 'rgba(147,112,219,0.25)' : 'transparent',
              }}
            >
              <Icon active={isActive} />
            </div>
            <span
              className="text-[6.5px] font-medium leading-none"
              style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.45)' }}
            >
              {tab}
            </span>
          </div>
        );
      })}
    </div>
  );
}
