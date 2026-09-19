"use client";

import { useEffect, useRef, useState } from "react";
import { Download, Pause, Play, Volume2 } from "lucide-react";
import { EXCLUDE_ATTR } from "../../lib/articleSpeech";

const SPEEDS = [1, 1.25, 1.5, 2];

/**
 * ListenToArticle — human-narration audio player for resource articles.
 * Plays a pre-generated neural-voice MP3 (`/audio/<slug>.mp3`, voice
 * en-US-AriaNeural) instead of the robotic on-device browser TTS.
 * Regenerate with: node scripts/generate-article-audio.cjs
 */
export function ListenToArticle({ slug }: { slug: string }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [missing, setMissing] = useState(false);

  const src = `/audio/${slug}.mp3`;

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

  const seek = (v: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = v;
    setCurrentTime(v);
  };

  if (missing) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const speed = SPEEDS[speedIdx];

  return (
    <div
      className="mt-4 mb-8 rounded-2xl border border-primary/15 bg-primary/3 p-4 lg:p-5"
      role="region"
      aria-label="Listen to this article"
      {...{ [EXCLUDE_ATTR]: true }}
    >
      <audio ref={audioRef} src={src} preload="metadata" className="hidden" aria-hidden="true" />
      <div className="flex flex-wrap items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <Volume2 className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-text-primary">Listen to this article</p>
          <p className="text-xs text-text-muted">
            Human narration
            {duration > 0 ? ` · ${formatClock(duration)}` : ""}
            {speed !== 1 ? ` · ${speed}x` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
            aria-label={(playing ? "Pause" : "Play") + " article narration"}
          >
            {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4" aria-hidden="true" />}
            {playing ? "Pause" : "Listen"}
          </button>
          <button
            type="button"
            onClick={() => setSpeedIdx((i) => (i + 1) % SPEEDS.length)}
            className="inline-flex items-center justify-center h-9 px-3 rounded-full border border-primary/20 text-primary text-xs font-semibold hover:bg-primary/5 transition-colors"
            aria-label={`Playback speed ${speed}x, activate to change`}
            title="Playback speed"
          >
            {speed}x
          </button>
          <a
            href={src}
            download={`${slug}.mp3`}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
            aria-label="Download narration"
            title="Download"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mt-3">
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.5}
          value={Math.min(currentTime, duration || 0)}
          onChange={(e) => seek(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Seek narration"
        />
        <div
          className="h-1.5 w-full rounded-full bg-primary/10 overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Listening progress"
        >
          <div className="h-full rounded-full bg-gradient-primary transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-text-muted">
          <span>{formatClock(currentTime)}</span>
          <span>{duration > 0 ? formatClock(duration) : "--:--"}</span>
        </div>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-text-muted">
        Narrated with a human-like neural voice. Press play to stream the audio for this article.
      </p>
    </div>
  );
}

function formatClock(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + String(s).padStart(2, "0");
}
