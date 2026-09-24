# Vocolens Site — Agent Brief

Static marketing + blog site (TanStack Start, React 19, Tailwind v4) deployed on
Cloudflare Workers. Production: https://vocolens.com.

## Cross-repo map

- This session lives here (`vocolens---site`). The mobile app lives at
  `../Vocolens-app` (Expo React Native, remote `Kasra1637/Vocolens-app`,
  attached via `opencode.jsonc` `references.vocolens-app`).
- Read both repos freely in one session. The app is the UI source of truth;
  the site mirrors it (never the reverse).

## Standing rules (every change)

- One repo = one commit. Never mix site + app changes in a commit.
- Before committing: show `git status` + `git diff` for that folder first.
- Never `--force` push, never `git add -A` blindly, never commit secrets,
  `.env` files, or build output (`.output/`).
- Verify with all three gates before committing: `npx tsc --noEmit` (currently
  0 errors), `npm run lint` (currently 0 errors, 11 known warnings — see
  Lint baseline), and `npm run build` for anything user-visible, then commit to
  `main` and push to `origin/main` without asking.
- Dual lockfiles: Cloudflare installs with `bun install --frozen-lockfile`,
  so every `npm install/uninstall` must be followed by `bun install` to
  re-sync `bun.lock` — commit both lockfiles together or the deploy dies
  at install (twice bitten: embla/vaul removal, motion install).
- Copy changes are content edits: never alter wording unless asked.

## Durable facts

- Brand: primary `#9370DB`, deep `#6A3FC0`; Fraunces 700 headings, Inter body.
- Icons: `@phosphor-icons/react` everywhere (lucide fully removed). Emblem
  tier: 56 display / 44 standard / 48 rows / 36 pills / 28 dense.
- Surfaces: `card-app` (white, hairline primary border, soft primary shadow),
  `chip-app` (diagonal gradient), `btn-app-glow` glass CTAs.
- Blog narration: pre-generated MP3s (`public/audio/<slug>.mp3`); section
  timestamps in `src/lib/articleSections.ts` are word-count estimates —
  player code compensates with a 1.5s header lead-in, do not "fix" by editing
  timestamps by hand. The player has **no scrub bar**: the chapter list plus
  the prev/next buttons are the only chapter browsers, and the Listen button
  is the only control that starts audio (every other gesture just selects a
  chapter, leaving playback as it was). Position feedback is the `§ chapter`
  label plus elapsed / total time.
- `src/routeTree.gen.ts` is auto-generated (rebuild regenerates it).
- `/join` was removed; `src/server.ts` 301s it to `/`. `site.webmanifest`
  512 icon is `public/vocolens-512.png` (keep in sync with the favicon).

## Design system (settled — reuse, don't reinvent)

- **One card radius: 24px.** Every primary card is `card-app rounded-3xl
  p-6 sm:p-8`. Compact inner rows/tiles use `rounded-2xl`; never `rounded-2xl`
  or `rounded-[28px]` on a primary card, and never `bg-white` + a custom hex
  border where `card-app` already supplies surface + hairline + shadow.
- **Spacing ramp:** sections are `py-12 sm:py-16 lg:py-20` (→ 96 / 128 / 160px
  between sections). Hero-style tops stay `pt-24 sm:pt-32 lg:pt-40` to clear the
  fixed header. Header → content is `mb-12 lg:mb-16`. Full-bleed dark panel
  (privacy) sits one notch above at `py-16 sm:py-20 lg:py-24`. One deliberate
  exception: the homepage download section (`#download`) runs
  `pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20` so it sits closer to
  EmotionScienceSuite above it (80 / 104 / 128px) — don't restore the full
  ramp there.
- **Nested panel:** `bg-primary/[0.04] border border-primary/15 rounded-2xl
  p-5`. Micro-labels: `text-[10px] font-semibold uppercase tracking-[0.08em]`,
  `rounded-full`, `bg-primary/8`, `border border-primary/15`.
- **Chips:** 56 / 44 / 28px tiers, always `rounded-full chip-app` +
  `shadow-clay`, glyphs `w-5 h-5` or `w-6 h-6` in `text-[#6A3FC0]`.
- **Primary CTA:** `inline-flex items-center gap-3 bg-primary/15 border-2
  border-primary/60 text-[#6A3FC0] px-6 py-4 sm:px-10 sm:py-5 rounded-full
  font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5
  hover:shadow-lg hover:shadow-primary/30`. Secondary links: `text-primary
  font-semibold hover:underline`.
- **Text colors:** only `text-text-primary` / `-secondary` / `-muted`, plus
  `#1e293b` for headings on light surfaces. `text-gray-*` / `text-slate-*` /
  arbitrary text hex are off-system.
- **No decorative glows:** no blurred radial blobs, no gradient text
  (`bg-clip-text`), no `animate-*` keyframe classes, no `hover:scale-*` on
  cards, no `hover-lift`.
- **One scoped exception to the no-keyframes rule:** `.btn-app-float`
  (`src/styles.css`) gives the 4px / 3.2s vertical bob to the 12 store CTAs
  labelled **"Get it on Google Play"** (9 blog articles + homepage,
  `/features`, `/use-cases`), frozen in place on hover/focus. It is
  deliberately the site's only looping animation. Apply it by **label**, not
  by `btn-app-glow`: "Get the App" (fixed header — a bob there is a
  permanent on-screen distraction), "Explore all 13 features", "Explore
  deeper", "Share with therapist", the Listen/Pause transport and the 404
  CTAs are all excluded. Two details are load-bearing: the keyframe animates
  `transform`, not `translate`, so it composes with Tailwind's
  `hover:-translate-y-0.5` instead of overriding the lift; and it uses
  `animation-play-state: paused` rather than `animation: none`, which would
  snap the button to the 0% keyframe.

## Motion

- House system in `src/lib/motion.ts` (EASE_SOFT `[0.22,1,0.36,1]`, 0.7s
  reveals, 80ms stagger), primitives in `src/components/vocolens/Reveal.tsx`,
  reduced motion governed globally by `MotionConfig` in `routes/__root`.
- **Rule: card grids stagger, single cards don't.** A grid of 3+ cards is a
  `RevealGroup` with one `RevealItem` per card (card classes move ONTO the
  `RevealItem`); headers, lone panels and accordions are a plain `Reveal`.
  Use a tighter `stagger` (0.05) for long lists — 9 items at 80ms is sluggish.
- **`AnimatedSection` / `AnimatedGrid` are static passthroughs** and only the
  blog components still use them. Never use them on a non-blog page; their
  `animation` / `delay` props are silently ignored.
- Never render Reveal under `/resources*` — blog pages stay fully static.

## Product truth (verified against app code)

- **Streaks are real and they reset.** `user-stats-store.ts` counts consecutive
  local-calendar days and resets `currentStreak` to 1 after any gap of 2+ days.
  Never claim Vocolens "avoids streaks", that "a missed day never punishes",
  or that streaks are opt-in (no such setting exists). `longestStreak`, total
  entries and the calendar dots are all retained across a gap.
- **The therapist report is an HTML file, not a PDF.** `insights.tsx` writes
  `vocolens-insights-*.html` and shares it via the native share sheet; the
  function is *named* `generateInsightsPDF` but expo-print is deliberately not
  used (it would crash older OTA builds). The report itself tells users to print
  from a browser. Never promise direct PDF output.
- **Weekly Reflection is a card of 5 generated fields**, not free-form prose:
  narrative summary, Emotional Journey, Key Themes, Highlight (`growthMoment`),
  Looking Ahead (`weekAhead`).
- Verified feature constants: **8 body regions** (head, face, neck, chest,
  stomach, arms, hands, legs); **4 time-of-day buckets** (Morning 05–11,
  Afternoon 12–16, Evening 17–20, Night 21–04); **7 / 14 / 30-day** trigger
  windows; **21 badges**; Insights shows **3 core sections** and 6 behind
  "Explore deeper"; Deep Insights shows **1 insight, up to 5 on expand**.
- **Refine Analysis corrects the emotion label and the valence/arousal dials
  only** — not distress, which is derived. The AI's original values are kept in
  the correction log beside the user's.
- The body heatmap is **frequency-based**, not a predictive "stress signature",
  and trigger insights use fixed templates, not the user's own wording.
- The "learning loop" is: correction stored on device → recency-weighted local
  aggregation → a generated personalization string appended to the next
  `/api/analyze` system prompt. **No model is ever retrained or fine-tuned.**
- A pattern needs **≥3 corrections across ≥2 distinct weeks**; corrections
  from the last 14 days carry a 3× boost; half-life 45 days. "Context"
  corrections are excluded from learning. The `0.80` figure is a heuristic
  personalization-strength ceiling, **not an accuracy measurement** — the real
  accuracy metric is the "How well AI reads you" confirmation rate.
- Therefore never write that the app "learns from every entry", has an
  "accuracy ceiling", or builds a phrase→emotion "dictionary" from your words.
  It learns from *corrections*, and stores labels + numbers, not transcripts.
- App's own wording to mirror: "Top Emotions — Plutchik Intensity",
  `PRIMARY` badge, "You selected", "Adjusted", "Wrong label / Wrong intensity /
  Context", "Unpleasant ↔ Pleasant" / "Calm ↔ Activated", "Adjust how it
  felt". Intensity is expressed as Plutchik intensity words (Interest /
  Anticipation / Vigilance), never as HIGH/MEDIUM pills.
- Distress notice (exact): "High distress detected — take a moment if you
  need" / "Moderate distress — take a moment if you need".

## Lint baseline

- `.prettierrc` sets `endOfLine: "auto"` **on purpose** — the repo is checked
  out CRLF (`core.autocrlf=true`) and without it Prettier flags every line of
  every file (~10k phantom errors). Do not remove it.
- `eslint.config.js` turns `prettier/prettier` OFF for the 9 blog article
  routes, the 10 blog article components and `src/routeTree.gen.ts` (frozen /
  auto-generated). That block must stay **after** `eslintPluginPrettier` — flat
  config applies later entries last.
- The 10 remaining warnings are the accepted baseline: 5 `react-refresh` in
  unused `src/components/ui/*` shadcn files (0 imports — dead code) and 5
  `react-hooks/exhaustive-deps` in `ListenToArticle.tsx` that are false
  positives (`sections` is a stable module-level lookup; `[src]` already
  tracks `slug`). Fixing them changes nothing — don't churn them for a clean
  count. (Was 11/6 until the scrub bar was removed, which deleted the last
  `sections`-dependent callback that omitted a dep.)

## Process lessons

- **Verify visually after any component-conversion edit.** Rewrapping
  testimonial/story cards into `RevealItem` once silently dropped their
  `card-app` classes — the card surfaces vanished while `tsc` and the build
  stayed green. Compiler-green is not visual-green; a screenshot is the gate.
- Consequence check: if prettier/formatting touched a file, confirm meta tags
  and JSON-LD kept identical *values* (`git diff -w` shows quoting/wrapping
  only, and object-shorthand serializes to the same JSON).
- When piping UTF-8 files through PowerShell in a tool call, the console can
  mangle em-dashes into `?` — re-read with a UTF-8 reader before reporting
  encoding corruption. It has already produced one false alarm.
- **Balanced JSX is not correct JSX.** A stray `</div>` once closed the
  `space-y-*` body container early in one article, orphaning its store CTA
  outside the rhythm container (the card lost its section gap and rendered
  flush against the previous block) while every gate stayed green. After any
  structural edit, diff the ancestor chain of the affected block against a
  sibling file that is known-good, and check the block's depth is unchanged.
