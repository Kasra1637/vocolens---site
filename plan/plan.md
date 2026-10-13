# Next Post — the next Vocolens resource, briefed to match "Emotional Granularity"

A web tool that reads a blog's recent posts and returns the next-best post idea with a full SEO/AEO/GEO brief in the blog's own voice and structure. Built pre-loaded with vocolens.com/resources and anchored on the Emotional Granularity article, so the first run is the actual deliverable: the next Vocolens post, ready to write.

## Who it's for

- The Vocolens team (first user): a research-backed, voice-matched brief for the post that follows "Emotional Granularity: Why Specific Words Change What You Feel".
- Any blogger, content marketer or agency writer who wants each new post to continue the previous one in topic, voice and search strategy rather than start from a blank page.

## Core features and experience

**1. Feed it the blog**
- Paste a blog index URL; the tool discovers recent posts (RSS → sitemap → page links) and pulls up to the 10 newest. Vocolens's Resources page is the default so the first run needs no setup.
- Pick the **anchor post** — the one the next post must be "similar to" (Emotional Granularity by default). The other posts inform voice, structure and coverage so nothing already published gets re-proposed.
- Alternative input: paste text or upload .txt / .md / .docx / .pdf for blogs that block fetching.

**2. Blog DNA profile** — what the tool must read from Vocolens and reproduce
Shown to the user as a one-screen profile; also drives the brief. For Vocolens it should capture:
- *Audience*: adults who want to understand their feelings, with a neurodivergent emphasis (ADHD, autism, alexithymia); people whose minds move faster than they type.
- *Voice*: second person, warm and direct; opens with a lived, concrete scene ("Someone asks how you are…"); explains science in plain metaphors (hammer/toolbox, weather system, targeting system); hedged, honest claims ("associated with", "this is worth being honest about: a better word does not delete the feeling"); anti-hype about the product; short, declarative "Takeaway:" lines.
- *Structure template* (every section the next post must have): category tag → title in the form "Topic: Why/How X" → one-paragraph dek → "By Vocolens · N min read · date" → **Key takeaways** (3 bold-lead bullets) → scene-based hook → explicit bridge to the previous article ("The alexithymia article is about X. This one is about Y") → 4 H2 sections, each with a peer-reviewed pull-quote, a "Takeaway:" line and a "Read the research — PubMed/journal" link → one practical list section (4 items) → FAQ (5 Q&As in prose, one containing a concrete product fact such as "3 corrections across 2 weeks") → "Explore related articles" (3) → closing CTA block (short headline + one line + Google Play).
- *Length*: ~1,400–1,700 words, 7-minute read.
- *SEO habits*: title tag "{Headline} | Vocolens"; ~155-char meta; three tag keywords ("Emotional Granularity · Affect Labeling · Voice Journaling"); internal links to 3 related resources; citations to primary research.
- *Topic map already covered*: alexithymia; emotional granularity; affect labeling/science of reflection; interoception/distress detection; pattern recognition/emotional awareness; overthinking/rumination; burnout/allostatic load; ADHD time blindness; ADHD rejection sensitivity; autism and emotional regulation.
- *Product facts the brief may use*: 8 Plutchik emotions with intensity ladders; valence/arousal 2-D map; blended emotions and emotional tension detected, not flattened; body-sensation map; distress notes; corrections stay on-device, pattern needs 3 corrections across 2 weeks, 45-day half-life; no accounts, no cloud.

**3. Top 3 next-post ideas, ranked**
Each with: headline in the Vocolens pattern, one-line pitch, why it is the natural next step after the anchor, primary keyword and search intent, and a 0–100 fit score split into Topic continuity / Search opportunity / Voice fit / Answer-engine potential.

*Editorial direction the research points to* (the tool's ranking will confirm or challenge this; the user can veto any before the brief is written):
1. **Mixed emotions** — "Excited and Terrified: Why Feeling Two Things at Once Isn't Confusion — It's Information." The granularity post ends on "apprehensively braced *and* resentfully tired"; the next question after *how specific* is *what if it's more than one*. Maps directly to Vocolens's "blended emotions detected, not flattened" and the homepage example "excited about the promotion, but terrified of failing." Research available: Larsen, McGraw & Cacioppo (2001); Berrios et al. meta-analysis (2015); Hershfield et al. (2013) on mixed emotions and health. Keywords: "mixed emotions", "can you feel two emotions at once", "emotional ambivalence", "conflicting emotions".
2. **The word under the word** — primary vs. secondary emotions ("anger is a secondary emotion"); matches the tagline "Understand what's underneath" and the testimonial "it wasn't anger — it was decision fatigue." Keywords: "secondary emotions", "primary and secondary emotions", "why am I angry".
3. **How to actually use an emotion wheel** — Plutchik's 8 families and intensity ladders, framed against the granularity post's warning about memorising wheels. Highest raw search volume ("emotion wheel", "Plutchik wheel of emotions"); strongest product match; more of a reference/pillar piece.

**4. Deep brief for the chosen idea**, in the Vocolens template
- 3 headline options (recommended one flagged), dek, category tag, 3 tag keywords
- Keywords: primary, 4–6 secondary, 6–10 long-tail/question phrases, related terms to use naturally (AI-reasoned; no live volume data in this phase)
- SEO: title tag ≤60 chars, meta ≤155 chars, slug, H1, the 3 related-article links from the existing library, the bridge sentence to Emotional Granularity
- AEO: the question the first 40–60 words must answer, a snippet-ready definition block, 5 FAQ pairs in the blog's voice (one carrying a product fact), People-Also-Ask questions to cover
- GEO: a quotable one-paragraph summary, named entities/researchers/concepts to include, 3–5 citable research findings with source links, schema types (Article, FAQPage)
- Structure: the 3 Key takeaways, the hook scene, 4 H2s each with suggested pull-quote source, "Takeaway:" line and research link, the practical list, word-count targets per section
- Voice guide: do/don't list for this post and a sample opening paragraph written in the Vocolens voice
- CTA block headline and line matching the existing pattern ("Find the exact word → Vocolens sharpens your vocabulary")

**5. Take it with you**: copy as Markdown / download .md; all runs saved in a history panel.

**6. Streaming output** with a step tracker (Fetching posts → Reading voice → Mapping coverage → Ranking ideas → Writing brief) so a 30–60 s run never feels stalled.

## User flow

1. Land on the tool with vocolens.com/resources pre-filled; click Fetch. The 10 resources appear; Emotional Granularity is pre-selected as the anchor.
2. Click Analyze. The Blog DNA profile streams in, then the 3 ranked ideas.
3. Pick an idea (default #1) → the deep brief streams in.
4. Copy or download the brief; reopen later from history. Repeat for any other blog or anchor post.

## UI/UX feel

- "Editor's desk", not a dashboard: generous whitespace, a distinctive serif display face with a clean text face, restrained palette with one strong accent for scores and the recommended pick.
- The brief reads like a typeset document: clear section headings, pull-quote styling for the sample opening and GEO summary, monospace for title tag / meta / slug with live character counts.
- Two-column desktop layout (inputs + history left, results right); stacks on mobile. Staggered reveal as sections stream in; animated score rings.

## Implementation phases

**Phase 1 — MVP (built now)**
- URL fetch with recent-post discovery (up to 10), anchor-post selection, paste/upload fallback
- Blog DNA profile, 3 ranked ideas, deep brief for the chosen idea in the blog's own template
- Streaming with step tracker; copy/download Markdown; local run history
- First run executed on vocolens.com/resources anchored on Emotional Granularity, delivering the next Vocolens post brief

**Phase 2 — Steer and deepen**
- "Regenerate with direction" (e.g., "more clinical", "target ADHD readers", "avoid the emotion-wheel topic")
- Full-sitemap ingestion so ideas never collide with anything published
- Optional competitor blog URL for gap analysis
- Optional live keyword volume/difficulty when a keyword-API key is supplied

**Phase 3 — From brief to published**
- Full first draft in the brand voice from the brief, including FAQ and related-articles blocks
- Editorial calendar: the next 5 posts as a connected arc (e.g., alexithymia → granularity → mixed emotions → what's underneath → intensity)
- Export to WordPress / Ghost / Webflow / Google Docs; accounts and team sharing

## Assumptions

- The deliverable is both the reusable tool and its first run on Vocolens; the Vocolens brief is the priority outcome.
- "Similar to" means same category family (neuroscience & emotional intelligence), same template, same voice, same length, and a topic that is the logical next step after granularity — not a rewrite of the same topic.
- Mixed emotions is the expected #1; the tool's ranking is shown first and the user can pick #2 or #3 instead before the brief is written.
- AI model: Claude Sonnet 5.5 via the Emergent universal key; no API key needed from the user.
- Keywords are AI-reasoned; no live search-volume data in Phase 1.
- Research citations in the brief are limited to real, linkable peer-reviewed sources (PubMed/journal links), matching the blog's "Read the research" pattern.
- Fetching is plain HTTP; JavaScript-only or bot-blocking sites fall back to paste/upload. Vocolens pages fetch cleanly today.
- No login; history is kept per browser.
- English only for the first run; other languages handled best-effort.
