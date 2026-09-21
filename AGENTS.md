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
- Verify with `npx tsc --noEmit` (only pre-existing `UseCases.tsx` errors are
  acceptable) and `npm run build` for anything user-visible, then commit to
  `main` and push to `origin/main` without asking.
- Copy changes are content edits: never alter wording unless asked.

## Durable facts

- Brand: primary `#9370DB`, deep `#6A3FC0`; Fraunces 700 headings, Inter body.
- Icons: `@phosphor-icons/react` everywhere (lucide fully removed). Emblem
  tier: 56 display / 44 standard / 48 rows / 36 pills / 28 dense.
- Surfaces: `card-app` (white, hairline primary border, soft primary shadow),
  `chip-app` (diagonal gradient), `btn-app-glow` glass CTAs.
- Blog narration: pre-generated MP3s (`public/audio/<slug>.mp3`); section
  timestamps in `src/lib/articleSections.ts` are word-count estimates —
  player code compensates with a 3s header lead-in, do not "fix" by editing
  timestamps by hand.
- `src/routeTree.gen.ts` is auto-generated (rebuild regenerates it).
- `/join` was removed; `src/server.ts` 301s it to `/`. `site.webmanifest`
  512 icon is `public/vocolens-512.png` (keep in sync with the favicon).
