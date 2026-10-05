# Vocolens — Product & Change Log

## Overview
Vocolens is a marketing/waitlist site for an AI voice journaling app (React 19 + TanStack Start + Vite, Tailwind CSS, shadcn/radix UI components). Codebase lives at `/app` (not the standard `/app/frontend` + `/app/backend` split) — it's a single TanStack Start app (`src/routes`, `src/components/vocolens/*`).

Note: This project has no FastAPI/Mongo backend in use for the pages worked on so far — it's a static marketing site with `src/server.ts` for TanStack Start SSR only.

## Core Pages
- `/` — Home/landing
- `/features` — Features showcase (10 feature sections), component: `src/components/vocolens/FeaturesShowcase.tsx`
- `/use-cases`, `/resources/*`, `/privacy`, `/terms`, `/join` (waitlist)

## Change Log

### 2026-10 — New blog post: "Mixed Emotions" (next post after Emotional Granularity)
Request: pick the next-best post idea matching the previous one (SEO/AEO/GEO, structure, voice, keywords) and generate it. Anchor: `/resources/emotional-granularity`. Chosen idea: **mixed emotions** (the step after "how specific should the word be" is "what if it's two words"); maps to the product fact "Blended emotions and emotional tension are detected, not flattened."

Added:
- `src/components/vocolens/MixedEmotions.tsx` — article in the exact granularity template: breadcrumb → category pill → H1 "Mixed Emotions: Why Feeling Two Things at Once Is Information, Not Confusion" → dek → byline (8 min read, Oct 6 2026) → ListenToArticle → Key takeaways (3) → scene hook + bridge to the granularity post → 4 H2 sections (3 with verified research blockquote + "Read the research" link: Larsen/McGraw/Cacioppo 2001 PMID 11642354; Berrios et al. 2015 PMC4397957; Hershfield et al. 2013 PMID 24032072) + 4-item practical list → 5-question FAQ (one carries the "3 corrections across 2 weeks" product fact) → 3 related articles (granularity, science-of-reflection, alexithymia) → CTA "Hold both" with Google Play button. Article + FAQPage JSON-LD, microdata, speakable.
- `src/routes/resources.mixed-emotions.tsx` — title tag, meta description (152 chars), og tags, canonical.
- Hub card inserted first in `src/components/vocolens/Resources.tsx` (Intersect icon; RSD card now carries `mt-5 sm:mt-8`).
- `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt` updated; slug added to `scripts/generate-article-audio.cjs`; estimated chapter starts (150 wpm word-count model) added to `src/lib/articleSections.ts` under `mixed-emotions`.

Verified: prettier-clean, `eslint` clean for new/changed files, `vite build` passes, testing agent 100% (SSR head, JSON-LD validity, hub order, links, responsive 1920/390, regression on existing pages). Pre-existing and untouched: 1 tsc error in `src/routes/__root.tsx`, prettier lint errors in the RejectionSensitivity files.

Known gaps / follow-ups:
- **No narration MP3 yet** — Edge TTS is unreachable from this sandbox. Run `node scripts/generate-article-audio.cjs` locally (worker running, or `BASE_URL=https://vocolens.com` after deploy); the player hides itself until `public/audio/mixed-emotions.mp3` exists. After generating, re-measure the `mixed-emotions` chapter starts from the MP3 (current values are estimates).
- Publication date `2026-10-06` is an assumption (one week after the last post) — adjust in component, hub card and sitemap if publishing on another day.
- `plan/plan.md` (planning notes) was swept into the platform checkpoint commit; delete if it should not ship.

### 2026-02 — Features Page Section Titles Shortened (≤44 chars)
Request: Make each Features page section title relevant and ≤44 characters, same tone, titles only (not body copy).

Edited `headline` field for each of the 10 features in `src/components/vocolens/FeaturesShowcase.tsx`:
1. Journal calendar — "You showed up. That's the whole point." (38, unchanged — already compliant)
2. Weekly reflection — "Your week, told back to you as a story." (39, was 68)
3. Mood story — "See which emotion rules each day this week." (43, was 45)
4. Explore deeper — "Go as deep as you want. Or don't." (33, was 48)
5. Emotional landscape — "Plot yourself on the map of how humans feel." (44, unchanged)
6. Body sensation map — "Your body keeps score. Now you can read it." (43, was 51)
7. Deep insights — "An AI that studied you — not a textbook." (40, unchanged)
8. Emotional triggers — "Name the thing that keeps setting you off." (42, unchanged)
9. Emotional themes — "The story you keep telling on repeat." (37, was 46)
10. Time of day — "Morning you and evening you are different." (42, was 69)

All 10 titles verified ≤44 characters. Tone preserved (conversational, second-person). Body/description/outcome text untouched per user request.

Verified visually via local vite dev server (dependency install required `--ignore-engines` due to Node 20 vs required 22 for miniflare/cloudflare plugin — install succeeded, dev server runs fine on Node 20 for this task).

### 2026-02 — Follow-up: Specific Title Rewording + Remove Trailing Periods
User requested specific rewording of 7 titles and asked to NOT add trailing periods:
1. Journal calendar — "Easily track your progress" (was "You showed up. That's the whole point.")
2. Weekly reflection — "View your weekly mood story" (was "Your week, told back to you as a story.")
3. Mood story — "See which emotion dominates your days" (was "See which emotion rules each day this week.")
4. Explore deeper — "Go as deep as you want" (was "Go as deep as you want. Or don't.")
5. Emotional themes — "Your emotional narrative" (was "The story you keep telling on repeat.")
6. Emotional triggers — "Learn what keeps setting you off" (was "Name the thing that keeps setting you off.")
7. Time of day — "Track your mood by time of the day" (was "Morning you and evening you are different.")

Unchanged (not requested this round): Emotional landscape — still retains trailing period from earlier copy (user did not ask to change this in this iteration).

Verified visually via screenshot — all new titles render correctly, no trailing periods, no layout regressions.

### 2026-02 — Follow-up: 3 More Title Rewordings
1. Time of day — "Track your mood by the hour" (was "Track your mood by time of the day")
2. Deep insights — "Clear insights without any noise" (was "An AI that studied you — not a textbook.")
3. Body sensation map — "Track your emotions in your body" (was "Your body keeps score. Now you can read it.")

Only "Emotional landscape" ("Plot yourself on the map of how humans feel.") retains its original title/period, not requested to change yet. Verified visually via screenshot — renders correctly, no layout regressions.

### 2026-02 — Follow-up: Final 2 Titles Updated
1. Body sensation map — "Track your physical feelings" (was "Track your emotions in your body")
2. Emotional landscape — "Mapping your mood in one chart" (was "Plot yourself on the map of how humans feel.")

All 10 feature section titles are now finalized per user's exact wording, all ≤44 chars, no trailing periods on any of the newly-worded titles. Verified visually — no layout regressions.

Final title list (in order):
1. Journal calendar — "Easily track your progress"
2. Weekly reflection — "View your weekly mood story"
3. Mood story — "See which emotion dominates your days"
4. Explore deeper — "Go as deep as you want"
5. Emotional landscape — "Mapping your mood in one chart"
6. Body sensation map — "Track your physical feelings"
7. Deep insights — "Clear insights without any noise"
8. Emotional triggers — "Learn what keeps setting you off"
9. Emotional themes — "Your emotional narrative"
10. Time of day — "Track your mood by the hour"

## Environment Notes
- Supervisor config in this container expects `/app/frontend` + `/app/backend` (standard template) — does NOT match this project's structure. `frontend`/`backend` supervisor programs are in FATAL state (ENOENT) — this is pre-existing and unrelated to this change.
- To preview locally: `cd /app && yarn install --ignore-engines && node_modules/.bin/vite dev --port 3000 --host 0.0.0.0`

## Backlog / Next Steps
- P1: Generate `public/audio/mixed-emotions.mp3` and re-measure its chapter timestamps (see 2026-10 entry).
- P2: Add `rejection-sensitivity` to `SLUGS` in `scripts/generate-article-audio.cjs` and to the prettier-off block in `eslint.config.js` (its route/component currently fail `npm run lint` on formatting only).
- P2: Candidate next posts in the same arc: "The word under the word" (primary vs. secondary emotions) and "How to actually use an emotion wheel" (Plutchik ladders).
- P2: Consider reviewing OG/meta titles in `src/routes/features.tsx` for consistency with new shorter section titles (not requested this round).
- P2: Investigate supervisor/environment mismatch if live preview via managed process is needed going forward.
