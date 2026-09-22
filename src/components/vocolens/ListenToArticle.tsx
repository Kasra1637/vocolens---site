"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CaretDown as ChevronDown,
  Playlist as ListMusic,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  SpeakerHigh as Volume2,
} from "@phosphor-icons/react";
import { EXCLUDE_ATTR } from "../../lib/articleSpeech";
import { ARTICLE_SECTIONS, sectionAt } from "../../lib/articleSections";

const SPEEDS = [1, 1.25, 1.5, 2];

// Small lead-in before each section start so taps land on the section's
// H2/H3 headline instead of mid-paragraph. Section timestamps are estimated
// from word counts (accurate within a few seconds either way), so the
// lead-in stays small: large enough to catch the headline, small enough to
// never drag playback back into the previous section. Intro starts at 0.
const HEADER_BACKOFF = 1.5; // seconds



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
    .querySelectorAll('section[aria-labelledby]:not([aria-labelledby="section-faq"])')
    .forEach((el) => blocks.push(el as HTMLElement));
  return blocks;
}

/**
 * ListenToArticle — human-narration audio player for resource articles.
 * Plays a pre-generated neural-voice MP3 (`/audio/<slug>.mp3`, voice
 * en-US-AriaNeural). Features:
 * - chapter-only timeline: taps/drags resolve to section starts with a
 *   small lead-in so playback opens on the H2/H3 headline; display (ticks,
 *   highlight, hover, chapters) always uses the mapped times directly
 * - chapter taps always switch instantly and play from the header;
 *   transport buttons/keys jump-and-play while playing, or arm the position
 *   while paused so Listen starts from the selection; pre-metadata taps of
 *   any kind are parked and applied once duration loads
 * - tap-to-seek chapter list + prev/next-section buttons (mobile friendly),
 *   all resolving to header starts with the same lead-in
 * - live soft-highlight of the section being narrated + auto-scroll that
 *   follows along as playback advances
 * Regenerate audio with: node scripts/generate-article-audio.cjs
 */
export function ListenToArticle({ slug }: { slug: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [missing, setMissing] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [showChapters, setShowChapters] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const src = `/audio/${slug}.mp3`;
  const sections = ARTICLE_SECTIONS[slug] ?? [];

  // Header-resolved start for a section: the mapped timestamp pulled
  // earlier by HEADER_BACKOFF. Display (ticks, highlight, hover, chapters)
  // always uses the raw mapped times; only seek targets use this.
  const headerStart = useCallback(
    (i: number) => (i === 0 ? 0 : Math.max(0, sections[i].startSec - HEADER_BACKOFF)),
    [sections],
  );

  // Seek parked while audio metadata is missing (slow networks): applied
  // the moment duration becomes known, so pre-load taps never strand
  // playback at 0. Either an absolute time or a track ratio.
  const pendingRef = useRef<{ kind: "time"; t: number } | { kind: "ratio"; r: number } | null>(null);

  // Force metadata load on mount so duration is available before play.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => {
      const d = audio.duration || 0;
      setDuration(d);
      // Seeks that arrived before metadata was ready: resolve them now
      // against the real duration instead of stranding playback at 0.
      const pending = pendingRef.current;
      pendingRef.current = null;
      if (pending === null || !(d > 0)) return;
      const list = ARTICLE_SECTIONS[slug] ?? [];
      let target = 0;
      if (pending.kind === "time") {
        target = Math.min(Math.max(pending.t, 0), d);
      } else {
        if (list.length === 0) return;
        const idx = sectionAt(list, pending.r * d);
        target = idx === 0 ? 0 : Math.max(0, list[idx].startSec - HEADER_BACKOFF);
      }
      try {
        audio.currentTime = target;
      } catch {
        /* non-fatal */
      }
      setCurrentTime(target);
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
    void audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, []);

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

  const seek = useCallback((t: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!Number.isFinite(duration) || duration <= 0) {
      // Metadata not ready yet (slow networks): park the absolute target
      // for onMeta AND try the element optimistically — one of the two
      // always lands instead of silently playing from 0.
      pendingRef.current = { kind: "time", t: Math.max(0, t) };
      try {
        audio.currentTime = Math.max(0, t);
        audio.load();
      } catch {
        /* not ready — non-fatal */
      }
      setCurrentTime(Math.max(0, t));
      return;
    }
    const clamped = Math.min(Math.max(t, 0), duration);
    audio.currentTime = clamped;
    setCurrentTime(clamped);
  }, [duration]);

  const seekAndPlay = useCallback((t: number) => {
    seek(t);
    play();
  }, [seek, play]);

  // Chapter navigation supports both orders: while playing it jumps and
  // keeps playing; while paused it only arms the position (select first),
  // and Listen starts from there. Track taps always arm without playing.
  const selectSection = useCallback(
    (target: number) => {
      seek(headerStart(target));
    },
    [seek, headerStart],
  );

  const goToSection = useCallback(
    (target: number) => {
      if (playing) {
        seekAndPlay(headerStart(target));
      } else {
        selectSection(target);
      }
    },
    [playing, seekAndPlay, selectSection, headerStart],
  );

  const prevSection = useCallback(() => {
    if (sections.length === 0) return;
    const idx = sectionAt(sections, currentTime);
    const intoSection = currentTime - sections[idx].startSec;
    const target = intoSection > 3 ? idx : Math.max(0, idx - 1);
    goToSection(target);
  }, [sections, currentTime, goToSection]);

  const nextSection = useCallback(() => {
    if (sections.length === 0) return;
    const idx = sectionAt(sections, currentTime);
    const target = Math.min(sections.length - 1, idx + 1);
    goToSection(target);
  }, [sections, currentTime, goToSection]);

  const getTimeFromPointer = useCallback((clientX: number): number | null => {
    const track = trackRef.current;
    if (!track || !Number.isFinite(duration) || duration <= 0) return null;
    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return null;
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    return ratio * duration;
  }, [duration]);

  // Chapter-only timeline: every gesture resolves to a section header —
  // there is no arbitrary scrubbing. Taps jump straight to the enclosing
  // section; drags step across boundaries as the pointer crosses them.
  // (A legacy mouse fallback was removed earlier: touch browsers replay
  // emulated mouse events after gestures, which double-seeked on mobile.)
  const scrubbingRef = useRef(false);
  const snappedIdxRef = useRef<number | null>(null);

  const ratioFromPointer = useCallback((clientX: number): number | null => {
    const track = trackRef.current;
    if (!track) return null;
    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return null;
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  }, []);

  const snapToSectionAt = useCallback(
    (clientX: number) => {
      const ratio = ratioFromPointer(clientX);
      if (ratio === null || sections.length === 0) return;
      if (!Number.isFinite(duration) || duration <= 0) {
        // Metadata pending: park the tap and resolve it in onMeta.
        pendingRef.current = { kind: "ratio", r: ratio };
        audioRef.current?.load();
        return;
      }
      const idx = sectionAt(sections, ratio * duration);
      if (idx !== snappedIdxRef.current) {
        snappedIdxRef.current = idx;
        seek(headerStart(idx));
      }
    },
    [ratioFromPointer, duration, sections, headerStart, seek],
  );

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Ignore emulated extra buttons; primary button / touch contact only.
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if (getTimeFromPointer(e.clientX) === null) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* already released — non-fatal */
    }
    scrubbingRef.current = true;
    setScrubbing(true);
    snapToSectionAt(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const t = getTimeFromPointer(e.clientX);
    if (t === null) return;
    if (scrubbingRef.current) {
      snapToSectionAt(e.clientX);
    } else if (e.pointerType === "mouse") {
      setHoverTime(t);
    }
  };

  const endScrub = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (e && e.currentTarget.hasPointerCapture?.(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        /* already released — non-fatal */
      }
    }
    snappedIdxRef.current = null;
    scrubbingRef.current = false;
    setScrubbing(false);
    setHoverTime(null);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevSection();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      nextSection();
    } else if (e.key === "Home") {
      e.preventDefault();
      if (sections.length > 0) goToSection(0);
    } else if (e.key === "End") {
      e.preventDefault();
      if (sections.length > 0) {
        goToSection(sections.length - 1);
      }
    }
  };

  if (missing) return null;

  const fraction = duration > 0 ? Math.min(Math.max(currentTime / duration, 0), 1) : 0;
  const speed = SPEEDS[speedIdx];
  const sectionIdx = sections.length > 0 ? sectionAt(sections, currentTime) : -1;

  const tipTime = scrubbing ? currentTime : hoverTime;
  const tipSection = tipTime !== null && sections.length > 0 ? sections[sectionAt(sections, tipTime)].title : null;

  return (
    <div
      className="mt-4 mb-8 card-app rounded-2xl p-4"
      role="region"
      aria-label="Listen to this article"
      {...{ [EXCLUDE_ATTR]: true }}
    >
      <audio key={src} ref={audioRef} src={src} preload="metadata" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-3">
        <div className="w-9 h-9 rounded-full chip-app flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <Volume2 className="w-4 h-4 text-[#6A3FC0]" />
        </div>
        <div className="min-w-0 flex-1 basis-32">
          <p className="font-fraunces text-[15px] font-semibold text-text-primary leading-tight">Listen to this article</p>
          <p className="text-xs text-text-muted mt-0.5">
            Human narration
            {duration > 0 ? ` · ${formatClock(duration)}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0" role="group" aria-label="Narration section controls">
          <button
            type="button"
            onClick={prevSection}
            disabled={sections.length === 0}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#6A3FC0] hover:bg-primary/10 transition-colors disabled:opacity-40"
            aria-label="Previous section"
            title="Previous section"
          >
            <SkipBack className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-2 bg-primary/15 border-2 border-primary/60 text-[#6A3FC0] px-4 py-2.5 rounded-full text-sm font-semibold btn-app-glow transition-all duration-300 hover:-translate-y-0.5"
            aria-label={(playing ? "Pause" : "Play") + " article narration"}
          >
            {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
            {playing ? "Pause" : "Listen"}
          </button>
          <button
            type="button"
            onClick={nextSection}
            disabled={sections.length === 0}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#6A3FC0] hover:bg-primary/10 transition-colors disabled:opacity-40"
            aria-label="Next section"
            title="Next section"
          >
            <SkipForward className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => setSpeedIdx((i) => (i + 1) % SPEEDS.length)}
          className="inline-flex items-center justify-center h-8 px-2.5 rounded-full text-xs font-semibold text-[#6A3FC0] hover:bg-primary/10 transition-colors flex-shrink-0"
          aria-label={`Playback speed ${speed}x, activate to change`}
          title="Playback speed"
        >
          {speed}x
        </button>
      </div>

      <div className="mt-3">
        <div
          ref={trackRef}
          role="slider"
          tabIndex={0}
          aria-label="Seek narration"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration || 0)}
          aria-valuenow={Math.round(currentTime)}
          aria-valuetext={
            sectionIdx >= 0
              ? `Chapter ${sectionIdx + 1} of ${sections.length}: ${sections[sectionIdx].title}, ${formatClock(currentTime)} of ${duration > 0 ? formatClock(duration) : "unknown"}`
              : `${formatClock(currentTime)} of ${duration > 0 ? formatClock(duration) : "unknown"}`
          }
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endScrub}
          onPointerCancel={endScrub}
          onLostPointerCapture={endScrub}
          onPointerLeave={() => { if (!scrubbingRef.current) setHoverTime(null); }}
          onKeyDown={onKeyDown}
          className="relative py-4 cursor-pointer touch-none select-none outline-none rounded-md focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <div className="relative w-full h-2 rounded-full bg-primary/10" aria-hidden="true">
            <div className="absolute left-0 top-0 h-full rounded-full bg-primary transition-none" style={{ width: `${fraction * 100}%` }} />
            {sections.slice(1).map((s, i) => {
              const isCurrent = i + 1 === sectionIdx;
              return (
                <span
                  key={i}
                  title={s.title}
                  className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full ring-2 ring-white pointer-events-none ${
                    isCurrent ? "w-2.5 h-5 bg-primary" : "w-2 h-4 bg-primary/60"
                  }`}
                  style={{ left: `${duration > 0 ? (s.startSec / duration) * 100 : 0}%` }}
                  aria-hidden="true"
                />
              );
            })}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-[3px] border-white shadow-md pointer-events-none"
              style={{ left: `${fraction * 100}%` }}
            />
          </div>
          {tipTime !== null && (
            <div
              className="absolute -top-1 -translate-y-full pointer-events-none max-w-[220px] truncate rounded-lg bg-text-primary text-white text-[11px] font-medium px-2 py-1 shadow-md"
              style={{ left: `clamp(56px, ${(tipTime / duration) * 100}%, calc(100% - 56px))`, transform: "translate(-50%, -100%)" }}
              aria-hidden="true"
            >
              {formatClock(tipTime)}
              {tipSection ? ` · ${tipSection}` : ""}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-text-muted mt-0.5">
          <span className="min-w-0 truncate">
            {sectionIdx >= 0 ? <span className="text-primary font-medium">§ {sections[sectionIdx].title}</span> : <span>&nbsp;</span>}
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
                {sectionIdx >= 0 ? sections[sectionIdx].title : ""}
              </span>
              <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${showChapters ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {showChapters && (
              <ol className="mt-1 space-y-0.5">
                {sections.map((s, i) => {
                  const active = i === sectionIdx;
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => seekAndPlay(headerStart(i))}
                        aria-current={active ? "true" : undefined}
                        className={
                          active
                            ? "flex w-full items-center gap-3 rounded-xl px-3 min-h-[44px] py-2 text-left text-sm bg-primary/10 font-semibold text-text-primary transition-colors"
                            : "flex w-full items-center gap-3 rounded-xl px-3 min-h-[44px] py-2 text-left text-sm text-text-secondary hover:bg-primary/5 transition-colors"
                        }
                      >
                        <span className={`tabular-nums text-xs flex-shrink-0 ${active ? "text-primary" : "text-text-muted"}`}>
                          {formatClock(s.startSec)}
                        </span>
                        <span className="flex-1 truncate">{s.title}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse flex-shrink-0" aria-hidden="true" />}
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
        active={hasStarted}
        follow={playing}
      />
    </div>
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
