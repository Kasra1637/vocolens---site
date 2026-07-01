# Vocolens — Product & Change Log

## Overview
Vocolens is a marketing/waitlist site for an AI voice journaling app (React 19 + TanStack Start + Vite, Tailwind CSS, shadcn/radix UI components). Codebase lives at `/app` (not the standard `/app/frontend` + `/app/backend` split) — it's a single TanStack Start app (`src/routes`, `src/components/vocolens/*`).

Note: This project has no FastAPI/Mongo backend in use for the pages worked on so far — it's a static marketing site with `src/server.ts` for TanStack Start SSR only.

## Core Pages
- `/` — Home/landing
- `/features` — Features showcase (10 feature sections), component: `src/components/vocolens/FeaturesShowcase.tsx`
- `/use-cases`, `/resources/*`, `/privacy`, `/terms`, `/join` (waitlist)

## Change Log

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

Unchanged (not requested this round): Emotional landscape, Body sensation map, Deep insights — still retain trailing periods from earlier copy (user did not ask to change these in this iteration).

Verified visually via screenshot — all new titles render correctly, no trailing periods, no layout regressions.

## Environment Notes
- Supervisor config in this container expects `/app/frontend` + `/app/backend` (standard template) — does NOT match this project's structure. `frontend`/`backend` supervisor programs are in FATAL state (ENOENT) — this is pre-existing and unrelated to this change.
- To preview locally: `cd /app && yarn install --ignore-engines && node_modules/.bin/vite dev --port 3000 --host 0.0.0.0`

## Backlog / Next Steps
- P2: Consider reviewing OG/meta titles in `src/routes/features.tsx` for consistency with new shorter section titles (not requested this round).
- P2: Investigate supervisor/environment mismatch if live preview via managed process is needed going forward.
