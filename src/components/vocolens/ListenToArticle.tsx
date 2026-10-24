"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CaretDown as ChevronDown,
  Playlist as ListMusic,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  X,
} from "@phosphor-icons/react";
import { EXCLUDE_ATTR } from "../../lib/articleSpeech";
import { ARTICLE_SECTIONS, sectionAt } from "../../lib/articleSections";

const SPEEDS = [1, 1.25, 1.5, 2];



// Each chapter's audio is synthesized separately and concatenated in
// scripts/refresh-resource-audio.cjs, so sections[i].startSec is the exact
// boundary where that chapter's heading (H2/H3) begins (~0.15s of lead-in
// silence, then the heading). Seeks land directly on startSec so selecting a
// section starts at that section's title without bleeding into the previous
// section.
const HEADER_BACKOFF = 0; // seconds



/**
 * Article DOM blocks in ARTICLE_SECTIONS order: intro wrapper first, then each
 * narrated h2 section. FAQ / excluded blocks are never included.
 */
function articleBlocks(): HTMLElement[] {
  if (typeof document === "undefined") return [];
  const root = document.getElementById("article-root");
  if (!root) return [];
  const blocks: HTMLElement[] = [];
  const first = root.firstElementChild as HTMLElement | null;
  if (first) blocks.push(first);
  root
    .querySelectorAll('section[aria-labelledby]:not([aria-labelledby="section-faq"]):not([aria-labelledby="section-overview"])')
    .forEach((el) => blocks.push(el as HTMLElement));
  return blocks;
}

/**
 * ListenToArticle — human-narration audio player for resource articles.
 * Plays a pre-generated neural-voice MP3 (`/audio/<slug>.mp3`, voice
 * en-US-AndrewNeural). Features:
 * - the Listen button is the ONLY control that starts audio. The chapter
 *   list and the prev/next-section buttons only SELECT: the playhead moves
 *   to that chapter's header with the same small lead-in and the row lights
 *   up, but playback stays as it was (paused stays paused, playing keeps
 *   playing from the new chapter). Pressing Listen afterwards starts
 *   continuous playback from the selected chapter through the end of the
 *   file (seeks are verified across frames against element desync)
 * - every readout names the chapter the player is ON, and the title is read
 *   from the article itself (the narrated block's own H2/H3), never assumed
 *   from a list: the § label, the chapter list, the collapsed summary, the
 *   article highlight and prev/next all follow the selected chapter from the
 *   tap until its narration actually starts, then hand over to the live
 *   chapter — the seek target sits a lead-in before the mapped start, so a
 *   playhead-only readout would name the previous chapter for the whole
 *   lead-in
 * - every chapter narrates ONLY its own section title (H2/H3) and its body
 *   content — never the top H1 blog title
 * - an explicitly selected chapter highlights immediately in the blog content
 *   UI; playback continues across chapter boundaries until the end of the
 *   file unless the user pauses or selects another chapter
 * - a bottom-left sticky mini-bar mirrors the transport (play/pause,
 *   prev/next, chapter, time, speed) once narration has started, so the
 *   player stays reachable on long articles
 * - lock-screen / headset controls via Media Session (play/pause/prev/next)
 * - no scrub bar: the chapter list is the only chapter browser. Position
 *   feedback is the § chapter label plus elapsed / total time
 * - live soft-highlight of the section being narrated + auto-scroll that
 *   follows along as playback advances
 * Regenerate audio with: node scripts/refresh-resource-audio.cjs
 */
export function ListenToArticle({ slug }: { slug: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [missing, setMissing] = useState(false);
  const [showChapters, setShowChapters] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  // Chapter a tap landed on, held until its narration actually starts: the
  // seek goes a lead-in *before* the chapter's mapped start, so the playhead
  // alone would still name the previous chapter (pre-metadata estimate, the
  // play-promise gap, and the whole lead-in after Listen). It is not cleared
  // when playback starts — sectionIdx retires it on its own the moment the
  // playhead reaches the chapter's header.
  const [armedIdx, setArmedIdx] = useState<number | null>(null);
  // Chapter titles read from the article itself (each narrated block's own
  // H2/H3), so the player can never name a chapter differently from the
  // heading on the page. Null until the DOM is read; the mapped titles stand
  // in for SSR and the first paint.
  const [articleTitles, setArticleTitles] = useState<string[] | null>(null);

  const src = `/audio/${slug}.mp3`;
  const sections = ARTICLE_SECTIONS[slug] ?? [];

  // Header-resolved start for a section: the mapped timestamp pulled earlier
  // by HEADER_BACKOFF. The chapter clocks and the chapter list always show the
  // raw mapped times; only seek targets use this earlier start — and the
  // readout resolves the current chapter with the same lead-in so a tap names
  // the chapter it selected (see sectionIdx).
  const headerStart = useCallback(
    (i: number) => (i === 0 ? 0 : Math.max(0, sections[i].startSec - HEADER_BACKOFF)),
    [sections],
  );

  // Latest known file duration for seeks when the element transiently
  // reports nothing usable, plus stable mirrors so play/seek stay dep-stable
  // (sections is a module-level lookup; the rule can't see that).
  const durationRef = useRef(0);
  durationRef.current = duration;
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;
  const currentTimeRef = useRef(0);
  currentTimeRef.current = currentTime;

  // Seek parked while audio metadata is missing (slow networks): applied
  // the moment duration becomes known, so pre-load taps never strand
  // playback at 0. Either an absolute time or a track ratio. idx is the
  // chapter the tap resolved to (when known); shouldPlay replays the
  // intent (arm-only timeline tap vs explicit play) once metadata lands.
  const pendingRef = useRef<
    | { kind: "time"; t: number; idx: number | null; shouldPlay: boolean }
    | { kind: "ratio"; r: number; shouldPlay: boolean }
    | null
  >(null);

  // Force metadata load on mount so duration is available before play.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
  }, [src]);

  // Reset per-article state on slug change (SPA navigation reuses the component).
  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setHasStarted(false);
    setArmedIdx(null);
    setShowChapters(false);
    setDismissed(false);
  }, [slug]);

  // Titles come from the article, not from the chapter map: read each narrated
  // block's own heading so the player always names the section the user is
  // looking at, even if the mapped title ever drifts from the page. Read in an
  // effect rather than during render so the hydration pass still matches the
  // server-rendered (mapped) titles.
  useEffect(() => {
    const list = ARTICLE_SECTIONS[slug] ?? [];
    const blocks = articleBlocks();
    if (list.length === 0 || blocks.length !== list.length) {
      setArticleTitles(null);
      return;
    }
    setArticleTitles(
      blocks.map((block, i) => block.querySelector("h2, h3")?.textContent?.trim() || list[i].title),
    );
  }, [slug]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      // Self-heal a seek parked while metadata was missing that onMeta never
      // drained (its load-event/heal-race ran before the park): once the
      // element actually has data, apply it instead of stranding playback
      // at 0 under a chapter label.
      const pending = pendingRef.current;
      if (pending?.kind === "time") {
        try {
          if (
            Number.isFinite(audio.duration) &&
            audio.duration > 0 &&
            !audio.seeking &&
            !audio.ended
          ) {
            const t = Math.min(Math.max(pending.t, 0), audio.duration);
            if (Math.abs(audio.currentTime - t) > 1.0) {
              audio.currentTime = t;
            }
            setCurrentTime(t);
            pendingRef.current = null;
            if (pending.shouldPlay && audio.paused) {
              setHasStarted(true);
              void audio.play().then(
                () => setPlaying(true),
                () => setPlaying(false),
              );
            }
          }
        } catch {
          /* non-fatal */
        }
      }
    };
    const onMeta = () => {
      const d = audio.duration || 0;
      setDuration(d);
      // Seeks that arrived before metadata was ready: resolve them now
      // against the real duration instead of stranding playback at 0.
      // Replays the tap intent: arm-only taps highlight, play taps resume.
      const pending = pendingRef.current;
      pendingRef.current = null;
      if (pending === null || !(d > 0)) return;
      const list = ARTICLE_SECTIONS[slug] ?? [];
      if (list.length === 0) return;
      let target = 0;
      let idx: number | null = null;
      if (pending.kind === "time") {
        target = Math.min(Math.max(pending.t, 0), d);
        idx = pending.idx ?? sectionAt(list, target);
      } else {
        idx = sectionAt(list, pending.r * d);
        target = idx === 0 ? 0 : Math.max(0, list[idx].startSec - HEADER_BACKOFF);
      }
      if (!pending.shouldPlay) setArmedIdx(idx);
      try {
        audio.currentTime = target;
      } catch {
        /* non-fatal */
      }
      setCurrentTime(target);
      if (pending.shouldPlay && audio.paused) {
        setHasStarted(true);
        void audio.play().then(
          () => setPlaying(true),
          () => setPlaying(false),
        );
      }
    };
    const onEnd = () => {
      setPlaying(false);
      setHasStarted(false);
    };
    const onError = () => setMissing(true);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", onError);
    // If metadata already landed before the listener attached (fast cache),
    // loadedmetadata won't fire again and duration would stay 0 forever —
    // leaving every seek parked in pendingRef while the element sits at 0.
    // Heal that race by running the same handler off the live element state.
    try {
      if (audio.readyState >= 1 && Number.isFinite(audio.duration) && audio.duration > 0) {
        onMeta();
      }
    } catch {
      /* non-fatal */
    }
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
      audio.removeEventListener("error", onError);
    };
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.playbackRate = SPEEDS[speedIdx];
  }, [speedIdx]);

  // Tell floating controls (BackToTop) when the mini-bar is on screen so
  // they can get out of its way on narrow viewports.
  const minibarVisible = hasStarted && !dismissed && !missing;
  useEffect(() => {
    try {
      window.dispatchEvent(
        new CustomEvent("vocolens:minibar", { detail: { visible: minibarVisible } }),
      );
    } catch {
      /* non-fatal */
    }
  }, [minibarVisible]);

  // Clear any lingering highlight on unmount / slug change.
  useEffect(
    () => () => {
      document
        .querySelectorAll(".vocolens-reading")
        .forEach((el) => el.classList.remove("vocolens-reading"));
    },
    [slug],
  );

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setHasStarted(true);
    // A dismissed mini-bar reopens on the next explicit Listen: dismiss is
    // a per-pause hiding, not a permanent opt-out for the page.
    setDismissed(false);
    // The highlight (React state) and the element can diverge: a seek parked
    // while metadata was missing, a missed loadedmetadata event, or a
    // pre-playback seek the element ignored all leave audio.currentTime at 0
    // while the UI names the selected chapter — so Listen would read the
    // overview. Re-assert the selected chapter's start before playing, unless
    // playback is already inside it (pause/resume must not rewind, and
    // continuous playback must never jump back to an older selection).
    const effD =
      Number.isFinite(audio.duration) && audio.duration > 0
        ? audio.duration
        : Number.isFinite(duration) && duration > 0
          ? duration
          : 0;
    if (effD > 0 && sections.length > 0) {
      if (effD !== duration) setDuration(effD);
      const pending = pendingRef.current;
      if (pending !== null && pending.kind === "time") {
        const t = Math.min(Math.max(pending.t, 0), effD);
        pendingRef.current = null;
        try {
          audio.currentTime = t;
        } catch {
          /* non-fatal */
        }
        setCurrentTime(t);
      } else if (armedIdx !== null && armedIdx < sections.length) {
        const target = headerStart(armedIdx);
        let cur = 0;
        try {
          cur = audio.currentTime;
        } catch {
          cur = 0;
        }
        if (cur < target - 0.35) {
          const t = Math.min(Math.max(target, 0), effD);
          try {
            audio.currentTime = t;
          } catch {
            /* non-fatal */
          }
          setCurrentTime(t);
        }
        if (pendingRef.current) pendingRef.current.shouldPlay = true;
      } else if (pendingRef.current) {
        pendingRef.current.shouldPlay = true;
      }
    } else if (pendingRef.current) {
      // A tap parked before metadata landed: carry the play intent into
      // onMeta so Listen pressed after arming still starts playback.
      pendingRef.current.shouldPlay = true;
    }
    if (
      !(effD > 0) &&
      Number.isFinite(duration) &&
      duration > 0 &&
      sections.length > 0
    ) {
      // The element lost its data (mobile backgrounding / evicted decoder):
      // it reports no duration and sits at 0 while the UI still names the
      // selected chapter. Reload and park the visible chapter as pending so
      // onMeta seeks and starts it — never blind-play the element from 0
      // (the overview) under a chapter label.
      const list = sectionsRef.current;
      const idx =
        armedIdx !== null && armedIdx < list.length
          ? armedIdx
          : sectionAt(list, currentTimeRef.current);
      const t = Math.min(Math.max(headerStart(idx), 0), duration);
      pendingRef.current = { kind: "time", t, idx, shouldPlay: true };
      setCurrentTime(t);
      try {
        audio.load();
      } catch {
        /* non-fatal */
      }
      return;
    }
    void audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [armedIdx, headerStart, duration, sections.length]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      play();
    }
  };

  const seek = useCallback((t: number, idx: number | null = null, shouldPlay = false) => {
    const audio = audioRef.current;
    if (!audio) return;
    // Prefer the element's live duration, falling back to the known file
    // duration: the element can transiently report nothing usable (evicted
    // media data after backgrounding, or loadedmetadata racing the listener)
    // while the file length is already known. Gating only on the element
    // would park every seek in pendingRef while the element sits at 0 —
    // highlight moves, audio doesn't.
    let effD = durationRef.current;
    try {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        effD = audio.duration;
        if (effD !== durationRef.current) setDuration(effD);
      }
    } catch {
      /* non-fatal */
    }
    if (!Number.isFinite(effD) || effD <= 0) {
      // Metadata not ready yet (slow networks): park the absolute target
      // for onMeta (which replays the arm/play intent) and update the UI
      // optimistically. Only kick off the fetch when nothing started yet —
      // never load() after setting currentTime, which discards the seek
      // and aborts a subsequent play().
      pendingRef.current = { kind: "time", t: Math.max(0, t), idx, shouldPlay };
      setCurrentTime(Math.max(0, t));
      try {
        if (audio.networkState === 0) audio.load();
      } catch {
        /* not ready — non-fatal */
      }
      return;
    }
    const clamped = Math.min(Math.max(t, 0), effD);
    try {
      audio.currentTime = clamped;
    } catch {
      /* non-fatal */
    }
    setCurrentTime(clamped);
    // Verify-and-repair: if the element didn't take the seek (observed on
    // some mobile browsers pre-playback), re-apply across a few frames.
    let attempts = 0;
    const repair = () => {
      const el = audioRef.current;
      if (!el) return;
      attempts += 1;
      try {
        if (Math.abs(el.currentTime - clamped) > 1.0) {
          el.currentTime = clamped;
          if (attempts < 4) requestAnimationFrame(repair);
        }
      } catch {
        if (attempts < 4) requestAnimationFrame(repair);
      }
    };
    requestAnimationFrame(repair);
  }, []);

  // Every chapter selection — list row, prev/next, or keyboard — selects
  // only: the playhead moves to that chapter's header and the row lights up,
  // but playback is never started or stopped. The Listen button (or the
  // mini-bar transport) is the only control that starts audio; once started,
  // playback continues across chapter boundaries to the end of the file.
  const selectChapter = useCallback(
    (target: number) => {
      setArmedIdx(target);
      seek(headerStart(target), target, false);
    },
    [seek, headerStart],
  );

  // The chapter the player is ON — the one index every readout names: the
  // chapter list, the § label, the collapsed summary, the article highlight
  // and prev/next all read it. It is the selection while the playhead is still
  // inside that chapter's lead-in, because a tap parks the playhead a lead-in
  // *before* the chapter's mapped start: resolving from the playhead alone
  // would name the previous chapter for the whole lead-in, and again for the
  // first 1.5 s after Listen. From the moment the narration reaches the
  // selected chapter's header the live, time-derived chapter owns it again.
  const liveIdx = sections.length > 0 ? sectionAt(sections, currentTime) : -1;
  const sectionIdx =
    armedIdx !== null && armedIdx < sections.length && currentTime < sections[armedIdx].startSec
      ? armedIdx
      : liveIdx;

  // Chapter title for display, read from the article itself once mounted
  // (articleTitles) with the mapped title as the SSR / pre-mount fallback.
  const titleAt = (i: number) =>
    articleTitles && articleTitles.length === sections.length
      ? articleTitles[i]
      : sections[i].title;

  const prevSection = useCallback(() => {
    if (sections.length === 0) return;
    const intoSection = sectionIdx >= 0 ? currentTime - sections[sectionIdx].startSec : 0;
    const target = intoSection > 3 ? sectionIdx : Math.max(0, sectionIdx - 1);
    selectChapter(target);
  }, [sections, currentTime, sectionIdx, selectChapter]);

  const nextSection = useCallback(() => {
    if (sections.length === 0) return;
    const target = Math.min(sections.length - 1, sectionIdx + 1);
    selectChapter(target);
  }, [sections, sectionIdx, selectChapter]);

  // Lock-screen / headset metadata: article chapter + share art.
  useEffect(() => {
    try {
      const nav = navigator as Navigator & { mediaSession?: MediaSession };
      if (!nav.mediaSession || sections.length === 0) return;
      const idx = sectionIdx >= 0 ? sectionIdx : 0;
      const title =
        articleTitles && articleTitles.length === sections.length
          ? articleTitles[idx]
          : sections[idx].title;
      nav.mediaSession.metadata = new MediaMetadata({
        title,
        artist: "Vocolens",
        album: "Vocolens blog narration",
        artwork: [{ src: `/og/${slug}.png`, sizes: "1200x630", type: "image/png" }],
      });
    } catch {
      /* non-fatal */
    }
  }, [slug, sectionIdx, sections, articleTitles]);

  // Lock-screen / headset transport.
  useEffect(() => {
    try {
      const nav = navigator as Navigator & { mediaSession?: MediaSession };
      if (!nav.mediaSession) return;
      nav.mediaSession.setActionHandler("play", () => {
        play();
      });
      nav.mediaSession.setActionHandler("pause", () => {
        try {
          audioRef.current?.pause();
        } catch {
          /* non-fatal */
        }
        setPlaying(false);
      });
      nav.mediaSession.setActionHandler("previoustrack", () => {
        prevSection();
      });
      nav.mediaSession.setActionHandler("nexttrack", () => {
        nextSection();
      });
    } catch {
      /* non-fatal */
    }
  }, [play, prevSection, nextSection]);

  if (missing) return null;

  const speed = SPEEDS[speedIdx];
  const miniTitle = sectionIdx >= 0 ? titleAt(sectionIdx) : null;

  return (
    <>
      <div
        className="mt-4 mb-8 card-app rounded-3xl p-6 sm:p-8"
        role="region"
        aria-label="Listen to this article"
        {...{ [EXCLUDE_ATTR]: true }}
      >
        <audio key={src} ref={audioRef} src={src} preload="metadata" className="hidden" aria-hidden="true" />
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1 basis-32">
            <p className="font-fraunces text-[15px] font-semibold text-text-primary leading-tight">Listen to this article</p>
            <p className="text-xs text-text-muted mt-0.5">
              Human narration
              {duration > 0 ? ` · ${formatClock(duration)}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0" role="group" aria-label="Narration section controls">
            <button
              type="button"
              onClick={prevSection}
              disabled={sections.length === 0}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/15 text-[#6A3FC0] hover:bg-primary/15 transition-colors disabled:opacity-40"
              aria-label="Previous section"
              title="Previous section"
            >
              <SkipBack className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center gap-2 group bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-4 py-2.5 rounded-full text-sm font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
              aria-label={(playing ? "Pause" : "Play") + " article narration"}
            >
              {playing ? (
                <Pause className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              ) : (
                <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              )}
              {playing ? "Pause" : "Listen"}
            </button>
            <button
              type="button"
              onClick={nextSection}
              disabled={sections.length === 0}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/15 text-[#6A3FC0] hover:bg-primary/15 transition-colors disabled:opacity-40"
              aria-label="Next section"
              title="Next section"
            >
              <SkipForward className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => setSpeedIdx((i) => (i + 1) % SPEEDS.length)}
            className="inline-flex items-center justify-center h-7 px-3 rounded-full bg-primary/10 border border-primary/15 text-xs font-semibold text-[#6A3FC0] hover:bg-primary/15 transition-colors flex-shrink-0"
            aria-label={`Playback speed ${speed}x, activate to change`}
            title="Playback speed"
          >
            {speed}x
          </button>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-2 text-xs text-text-muted mt-2">
            <span className="min-w-0 truncate">
              {sectionIdx >= 0 ? <span className="text-primary font-medium">§ {titleAt(sectionIdx)}</span> : <span>&nbsp;</span>}
            </span>
            <span className="tabular-nums flex-shrink-0">
              {formatClock(currentTime)} / {duration > 0 ? formatClock(duration) : "--:--"}
            </span>
          </div>

          {sections.length > 0 && (
            <div className="mt-2 border-t border-primary/10 pt-1">
              <button
                type="button"
                onClick={() => setShowChapters((v) => !v)}
                aria-expanded={showChapters}
                className="flex w-full items-center gap-2 rounded-lg px-2 min-h-[44px] py-2 text-left text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                <ListMusic className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="flex-shrink-0">Chapters · {sections.length}</span>
                <span className="flex-1 truncate text-xs font-normal text-text-muted text-right">
                  {sectionIdx >= 0 ? titleAt(sectionIdx) : ""}
                </span>
                <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${showChapters ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {showChapters && (
                <ol className="mt-1 space-y-1 rounded-2xl bg-[#F4F1FB] border border-primary/15 p-1.5">
                  {sections.map((s, i) => {
                    const active = i === sectionIdx;
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => selectChapter(i)}
                          aria-current={active ? "true" : undefined}
                          className={
                            active
              ? "flex w-full items-center gap-3 rounded-2xl px-3 min-h-[44px] py-2 text-left text-sm bg-white border-2 border-primary text-[#6A3FC0] font-semibold shadow-clay-sm transition-colors"
              : "flex w-full items-center gap-3 rounded-2xl px-3 min-h-[44px] py-2 text-left text-sm text-text-secondary hover:bg-white transition-colors"
                          }
                        >
                          <span className={`tabular-nums text-xs flex-shrink-0 ${active ? "text-[#6A3FC0]" : "text-text-muted"}`}>
                            {formatClock(s.startSec)}
                          </span>
                          <span className="flex-1 truncate">{titleAt(i)}</span>
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              )}
            </div>
          )}
        </div>
        <ReadingHighlighter
          slug={slug}
          sectionIdx={sectionIdx}
          active={hasStarted || armedIdx !== null}
          follow={playing || armedIdx !== null}
        />
      </div>
      {hasStarted && !dismissed && (
        <div
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 max-w-[calc(100vw-2rem)]"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
          {...{ [EXCLUDE_ATTR]: true }}
        >
          <div
            className="card-app rounded-3xl shadow-lg flex items-center gap-1.5 sm:gap-2 p-3 sm:p-4"
            role="region"
            aria-label="Blog narration mini player"
          >
            <button
              type="button"
              onClick={prevSection}
              disabled={sections.length === 0}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/15 text-[#6A3FC0] hover:bg-primary/15 transition-colors disabled:opacity-40 flex-shrink-0"
              aria-label="Mini player: previous section"
              title="Previous section"
            >
              <SkipBack className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={toggle}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] btn-app-glow transition-all duration-300 hover:-translate-y-0.5 flex-shrink-0"
              aria-label={(playing ? "Pause" : "Play") + " article narration from mini player"}
              title={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <Pause className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Play className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={nextSection}
              disabled={sections.length === 0}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 border border-primary/15 text-[#6A3FC0] hover:bg-primary/15 transition-colors disabled:opacity-40 flex-shrink-0"
              aria-label="Mini player: next section"
              title="Next section"
            >
              <SkipForward className="w-4 h-4" aria-hidden="true" />
            </button>
            <div className="min-w-0 w-24 sm:w-48">
              <div className="truncate text-xs font-semibold text-text-primary">
                {miniTitle ? `§ ${miniTitle}` : "Narration"}
              </div>
              <div className="tabular-nums text-[11px] text-text-muted">
                {formatClock(currentTime)} / {duration > 0 ? formatClock(duration) : "--:--"}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSpeedIdx((i) => (i + 1) % SPEEDS.length)}
              className="inline-flex items-center justify-center h-7 px-2.5 rounded-full bg-primary/10 border border-primary/15 text-xs font-semibold text-[#6A3FC0] hover:bg-primary/15 transition-colors flex-shrink-0"
              aria-label={`Mini player playback speed ${speed}x, activate to change`}
              title="Playback speed"
            >
              {speed}x
            </button>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-text-muted hover:bg-primary/5 hover:text-text-secondary transition-colors flex-shrink-0"
              aria-label="Dismiss mini player"
              title="Dismiss"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * ReadingHighlighter — syncs the article's soft section highlight with
 * narration. Renders nothing; toggles `.vocolens-reading` on the matching
 * article block and, while playing, auto-scrolls it into view on change.
 */
function ReadingHighlighter({
  slug,
  sectionIdx,
  active,
  follow,
}: {
  slug: string;
  sectionIdx: number;
  active: boolean;
  follow: boolean;
}) {
  const lastElRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const blocks = articleBlocks();
    const prev = lastElRef.current;
    if (prev) {
      prev.classList.remove("vocolens-reading");
      lastElRef.current = null;
    }
    if (!active || sectionIdx < 0 || sectionIdx >= blocks.length) return;
    const el = blocks[sectionIdx];
    el.classList.add("vocolens-reading");
    lastElRef.current = el;
    if (follow) {
      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      try {
        el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
      } catch {
        /* non-fatal */
      }
    }
    return () => {
      el.classList.remove("vocolens-reading");
      if (lastElRef.current === el) lastElRef.current = null;
    };
  }, [slug, sectionIdx, active, follow]);

  return null;
}

function formatClock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + String(s).padStart(2, "0");
}
