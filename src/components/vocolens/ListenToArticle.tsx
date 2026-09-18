"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Square, Volume2 } from "lucide-react";
import {
  DEFAULT_MAX_CHUNK,
  EXCLUDE_ATTR,
  currentArticleText,
  estimateMinutes,
  orderVoices,
  pickEnglishVoice,
  splitArticleText,
} from "../../lib/articleSpeech";

type PlayerStatus = "idle" | "playing" | "paused";

/**
 * ListenToArticle — text-to-speech player for resource articles.
 * Reads the article's visible text via the Web Speech API (nothing leaves
 * the device), preferring an English female voice when one is installed.
 */
export function ListenToArticle({ articleRootId = "article-root" }: { articleRootId?: string }) {
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const [supported, setSupported] = useState(true);
  const [voiceOptions, setVoiceOptions] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceLabel, setVoiceLabel] = useState("Female voice");
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [chunkIndex, setChunkIndex] = useState(0);
  const [chunkTotal, setChunkTotal] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const chunksRef = useRef<string[]>([]);
  const indexRef = useRef(0);
  const playingRef = useRef(false);
  const stopRequestedRef = useRef(false);
  const startedAtRef = useRef(0);
  const accumulatedRef = useRef(0);
  const estSecondsRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  const FEMALE = /samantha|zira|aria|jenny|female|woman|emma|olivia|sofia|anna|joanna|tessa|fiona|google us english/i;

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    const load = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        const ordered = orderVoices(voices) as unknown as SpeechSynthesisVoice[];
        setVoiceOptions(ordered);
        const picked = pickEnglishVoice(voices);
        setVoiceLabel(picked && FEMALE.test(picked.name) ? "Female voice" : "Default voice");
        if (picked) {
          const idx = ordered.findIndex((v) => v.name === picked.name && v.lang === picked.lang);
          setVoiceIndex(idx >= 0 ? idx : 0);
        }
      }
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  useEffect(() => {
    return () => {
      stopRequestedRef.current = true;
      if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  const buildChunks = (): string[] => {
    const root = document.getElementById(articleRootId);
    if (!root) return [];
    const text = currentArticleText(root as unknown as Parameters<typeof currentArticleText>[0]);
    estSecondsRef.current = estimateMinutes(text) * 60;
    return splitArticleText(text, { maxLen: DEFAULT_MAX_CHUNK });
  };

  const startTimer = () => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      if (playingRef.current) {
        const sec = accumulatedRef.current + (Date.now() - startedAtRef.current) / 1000;
        setElapsed(sec);
        const total = estSecondsRef.current || 1;
        setProgress(Math.min(100, (sec / total) * 100));
      }
    }, 500);
  };

  const speakChunk = (i: number) => {
    if (stopRequestedRef.current) return;
    const chunks = chunksRef.current;
    if (i >= chunks.length) {
      playingRef.current = false;
      setStatus("idle");
      setProgress(100);
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
      return;
    }
    indexRef.current = i;
    setChunkIndex(i + 1);
    const utterance = new SpeechSynthesisUtterance(chunks[i]);
    const voice = voiceOptions[voiceIndex];
    if (voice) utterance.voice = voice;
    utterance.onend = () => speakChunk(i + 1);
    utterance.onerror = () => {
      if (!stopRequestedRef.current && i + 1 < chunks.length) speakChunk(i + 1);
      else if (!stopRequestedRef.current) {
        playingRef.current = false;
        setStatus("idle");
        if (timerRef.current !== null) window.clearInterval(timerRef.current);
      }
    };
    window.speechSynthesis.speak(utterance);
  };
  const play = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    stopRequestedRef.current = false;
    if (chunksRef.current.length === 0) {
      chunksRef.current = buildChunks();
      setChunkTotal(chunksRef.current.length);
    }
    if (chunksRef.current.length === 0) return;
    window.speechSynthesis.cancel();
    playingRef.current = true;
    startedAtRef.current = Date.now();
    setStatus("playing");
    startTimer();
    speakChunk(indexRef.current);
  };

  const pause = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.pause();
    playingRef.current = false;
    accumulatedRef.current += (Date.now() - startedAtRef.current) / 1000;
    setStatus("paused");
  };

  const resume = () => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.resume();
    playingRef.current = true;
    startedAtRef.current = Date.now();
    setStatus("playing");
  };

  const stop = () => {
    stopRequestedRef.current = true;
    if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
    playingRef.current = false;
    indexRef.current = 0;
    chunksRef.current = [];
    accumulatedRef.current = 0;
    setChunkIndex(0);
    setProgress(0);
    setElapsed(0);
    setStatus("idle");
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
  };

  if (!supported) return null;

  const primaryLabel = status === "playing" ? "Pause" : status === "paused" ? "Resume" : "Listen";

  return (
    <div
      className="mt-4 mb-8 rounded-2xl border border-primary/15 bg-primary/3 p-4 lg:p-5"
      role="region"
      aria-label="Listen to this article"
      {...{ [EXCLUDE_ATTR]: true }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
          <Volume2 className="w-5 h-5 text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-text-primary">Listen to this article</p>
          <p className="text-xs text-text-muted">
            {voiceLabel}
            {chunkTotal > 0 && status !== "idle" ? ` · ${chunkIndex} of ${chunkTotal}` : ""}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={status === "playing" ? pause : status === "paused" ? resume : play}
            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors"
            aria-label={primaryLabel + " article"}
          >
            {status === "playing" ? (
              <Pause className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Play className="w-4 h-4" aria-hidden="true" />
            )}
            {primaryLabel}
          </button>
          {status !== "idle" && (
            <button
              type="button"
              onClick={stop}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
              aria-label="Stop"
            >
              <Square className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {status !== "idle" && (
        <div className="mt-3">
          <div
            className="h-1.5 w-full rounded-full bg-primary/10 overflow-hidden"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Listening progress"
          >
            <div
              className="h-full rounded-full bg-gradient-primary transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs text-text-muted">
            <span>{formatClock(elapsed)}</span>
            {voiceOptions.length > 1 && (
              <select
                className="rounded-lg border border-primary/15 bg-white px-2 py-1 text-xs text-text-secondary"
                value={voiceIndex}
                onChange={(e) => {
                  const idx = Number(e.target.value);
                  setVoiceIndex(idx);
                  const v = voiceOptions[idx];
                  setVoiceLabel(v && FEMALE.test(v.name) ? "Female voice" : "Default voice");
                  if (status !== "idle" && typeof window !== "undefined") {
                    window.speechSynthesis.cancel();
                    playingRef.current = true;
                    speakChunk(indexRef.current);
                  }
                }}
                aria-label="Choose voice"
              >
                {voiceOptions.slice(0, 24).map((v, i) => (
                  <option key={v.name + i} value={i}>
                    {v.name} ({v.lang})
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      )}

      <p className="mt-3 text-[11px] leading-relaxed text-text-muted">
        Read aloud on your device using your browser's text-to-speech. Nothing is sent anywhere.
      </p>
    </div>
  );
}

function formatClock(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + String(s).padStart(2, "0");
}

