"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { EXCLUDE_ATTR } from "../../lib/articleSpeech";
import { ARTICLE_SECTIONS, sectionAt, sectionStarts } from "../../lib/articleSections";

const SPEEDS = [1, 1.25, 1.5, 2];

/**
 * ListenToArticle — human-narration audio player for resource articles.
 * Plays a pre-generated neural-voice MP3 (`/audio/<slug>.mp3`, voice
 * en-US-AriaNeural). The scrubber supports click + drag seeking with
 * estimated section ticks (see src/lib/articleSections.ts).
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

  const src = `/audio/${slug}.mp3`;
  const sections = ARTICLE_SECTIONS[slug] ?? [];
  const starts = sectionStarts(sections);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => setPlaying(false);
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

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      void audio.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    }
  };

  const seek = (t: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(duration) || duration <= 0) return;
    const clamped = Math.min(Math.max(t, 0), duration);
    audio.currentTime = clamped;
    setCurrentTime(clamped);
  };

  const timeFromClientX = (clientX: number): number | null => {
    const track = trackRef.current;
    if (!track || !Number.isFinite(duration) || duration <= 0) return null;
    const rect = track.getBoundingClientRect();
    if (rect.width <= 0) return null;
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    return ratio * duration;
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const t = timeFromClientX(e.clientX);
    if (t === null) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setScrubbing(true);
    seek(t);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (scrubbing) {
      const t = timeFromClientX(e.clientX);
      if (t !== null) seek(t);
    } else if (e.pointerType === "mouse") {
      setHoverTime(timeFromClientX(e.clientX));
    }
  };

  const endScrub = () => {
    setScrubbing(false);
    setHoverTime(null);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      seek(currentTime - 5);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      seek(currentTime + 5);
    } else if (e.key === "Home") {
      e.preventDefault();
      seek(0);
    } else if (e.key === "End") {
      e.preventDefault();
      if (Number.isFinite(duration)) seek(duration);
    }
  };

  if (missing) return null;

  const fraction = duration > 0 ? Math.min(Math.max(currentTime / duration, 0), 1) : 0;
  const speed = SPEEDS[speedIdx];
  const sectionIdx = sections.length > 0 ? sectionAt(sections, fraction) : -1;

  const tipTime = scrubbing ? currentTime : hoverTime;
  const tipFraction = tipTime !== null && duration > 0 ? Math.min(Math.max(tipTime / duration, 0), 1) : null;
  const tipSection = tipFraction !== null && sections.length > 0 ? sections[sectionAt(sections, tipFraction)].title : null;

  return (
    <div
      className="mt-4 mb-8 rounded-2xl border border-primary/15 bg-primary/[0.04] p-4"
      role="region"
      aria-label="Listen to this article"
      {...{ [EXCLUDE_ATTR]: true }}
    >
      <audio ref={audioRef} src={src} preload="metadata" className="hidden" aria-hidden="true" />
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <Volume2 className="w-4 h-4 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-fraunces text-[15px] font-semibold text-text-primary leading-tight">Listen to this article</p>
          <p className="text-xs text-text-muted mt-0.5">
            Human narration
            {duration > 0 ? ` · ${formatClock(duration)}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors flex-shrink-0"
          aria-label={(playing ? "Pause" : "Play") + " article narration"}
        >
          {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
          {playing ? "Pause" : "Listen"}
        </button>
        <button
          type="button"
          onClick={() => setSpeedIdx((i) => (i + 1) % SPEEDS.length)}
          className="inline-flex items-center justify-center h-8 px-2.5 rounded-full text-xs font-semibold text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
          aria-label={`Playback speed ${speed}x, activate to change`}
          title="Playback speed"
        >
          {speed}x
        </button>
      </div>

      <div className="mt-2">
        <div
          ref={trackRef}
          role="slider"
          tabIndex={0}
          aria-label="Seek narration"
          aria-valuemin={0}
          aria-valuemax={Math.round(duration || 0)}
          aria-valuenow={Math.round(currentTime)}
          aria-valuetext={`${formatClock(currentTime)} of ${duration > 0 ? formatClock(duration) : "unknown"}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endScrub}
          onPointerCancel={endScrub}
          onPointerLeave={() => {
            if (!scrubbing) setHoverTime(null);
          }}
          onKeyDown={onKeyDown}
          className="relative flex items-center h-7 cursor-pointer touch-none select-none outline-none rounded-md focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <div className="relative w-full h-1.5 rounded-full bg-primary/10" aria-hidden="true">
            <div className="absolute left-0 top-0 h-full rounded-full bg-primary" style={{ width: `${fraction * 100}%` }} />
            {starts.slice(1).map((s, i) => (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                onPointerDown={(e) => {
                  e.stopPropagation();
                  if (duration > 0) seek(s * duration);
                }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-3 rounded-full bg-primary/50 hover:bg-primary hover:h-4 transition-all"
                style={{ left: `${s * 100}%` }}
                aria-hidden="true"
                title={sections[i + 1]?.title}
              />
            ))}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-[2.5px] border-primary shadow-sm"
              style={{ left: `${fraction * 100}%` }}
            />
          </div>
          {tipFraction !== null && tipTime !== null && (
            <div
              className="absolute -top-1 -translate-y-full pointer-events-none whitespace-nowrap rounded-lg bg-text-primary text-white text-[11px] font-medium px-2 py-1 shadow-md"
              style={{ left: `clamp(56px, ${tipFraction * 100}%, calc(100% - 56px))`, transform: "translate(-50%, -100%)" }}
              aria-hidden="true"
            >
              {formatClock(tipTime)}
              {tipSection ? ` · ${tipSection}` : ""}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-text-muted">
          <span className="min-w-0 truncate">
            {sectionIdx >= 0 ? <span className="text-primary font-medium">§ {sections[sectionIdx].title}</span> : <span>&nbsp;</span>}
          </span>
          <span className="tabular-nums flex-shrink-0">
            {formatClock(currentTime)} / {duration > 0 ? formatClock(duration) : "--:--"}
          </span>
        </div>
      </div>
    </div>
  );
}

function formatClock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + String(s).padStart(2, "0");
}
