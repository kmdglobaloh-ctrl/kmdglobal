"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { getSpeed } from "@/lib/spanish-training/speechSpeed";

interface Props {
  text: string;
  lang?: string;
}

function cleanForSpeech(raw: string): string {
  return raw
    .replace(/[¿¡]/g, "")                  // Spanish inverted punctuation
    .replace(/[!?.,;:"""''()[\]{}…]/g, "") // standard punctuation
    .replace(/\.\.\./g, "")                 // ellipsis
    .replace(/\s+/g, " ")
    .trim();
}

// Ordered preference: Latin American female voices first, then Spain, then any Spanish
const VOICE_PREFERENCE = [
  "Paulina",   // macOS es-MX female — best for Latin American
  "Mónica",    // macOS es-ES female
  "Monica",
  "Jimena",
  "Alejandra",
  "Rocío",
  "Soledad",
  "Carmen",
];

function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  for (const name of VOICE_PREFERENCE) {
    const match = voices.find((v) => v.name.includes(name));
    if (match) return match;
  }
  return (
    voices.find((v) => v.lang === "es-MX") ||
    voices.find((v) => v.lang === "es-419") ||
    voices.find((v) => v.lang.startsWith("es-")) ||
    voices.find((v) => v.lang.startsWith("es")) ||
    null
  );
}

export default function PronounceButton({ text, lang = "es-MX" }: Props) {
  const [playing, setPlaying] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const speedRef = useRef<number>(getSpeed());

  // Voices load asynchronously — grab them once they're ready
  useEffect(() => {
    function loadVoices() {
      voiceRef.current = pickVoice(window.speechSynthesis.getVoices());
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, []);

  // Keep speed ref in sync with the shared speed control
  useEffect(() => {
    function onSpeedChange(e: Event) {
      speedRef.current = (e as CustomEvent<number>).detail;
    }
    window.addEventListener("speech-speed-change", onSpeedChange);
    return () => window.removeEventListener("speech-speed-change", onSpeedChange);
  }, []);

  const speak = useCallback(() => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const cleaned = cleanForSpeech(text);
    if (!cleaned) return;

    // Re-attempt voice selection at speak time in case voices weren't ready on mount
    if (!voiceRef.current) {
      voiceRef.current = pickVoice(window.speechSynthesis.getVoices());
    }

    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = lang;
    utterance.rate = speedRef.current;
    utterance.pitch = 1.0;
    utterance.volume = 1;

    if (voiceRef.current) utterance.voice = voiceRef.current;

    utterance.onstart = () => setPlaying(true);
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);

    // Chrome on HTTPS can pause speechSynthesis — resume before speaking
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }, [text, lang]);

  return (
    <button
      onClick={speak}
      title={`Hear pronunciation: ${text}`}
      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all
        ${playing
          ? "bg-green-400/30 text-green-300 scale-110"
          : "bg-white/10 text-white/50 hover:bg-green-500/20 hover:text-green-300 hover:scale-110"
        }`}
    >
      {playing ? (
        // Animated speaker waves
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .93.165 1.824.468 2.52.116.28.38.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75zM15.95 5.05a.75.75 0 00-1.06 1.06A6.5 6.5 0 0116.5 10a6.5 6.5 0 01-1.61 4.39.75.75 0 001.06 1.06A8 8 0 0018 10a8 8 0 00-2.05-4.95z"/>
          <path d="M13.78 7.22a.75.75 0 00-1.06 1.06 3.5 3.5 0 010 4.95.75.75 0 001.06 1.06 5 5 0 000-7.07z"/>
        </svg>
      ) : (
        // Static speaker
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M10 3.75a.75.75 0 00-1.264-.546L4.703 7H3.167a.75.75 0 00-.7.48A6.985 6.985 0 002 10c0 .93.165 1.824.468 2.52.116.28.38.48.7.48h1.535l4.033 3.796A.75.75 0 0010 16.25V3.75z"/>
          <path d="M13.78 7.22a.75.75 0 00-1.06 1.06 3.5 3.5 0 010 4.95.75.75 0 001.06 1.06 5 5 0 000-7.07zM15.95 5.05a.75.75 0 00-1.06 1.06A6.5 6.5 0 0116.5 10a6.5 6.5 0 01-1.61 4.39.75.75 0 001.06 1.06A8 8 0 0018 10a8 8 0 00-2.05-4.95z"/>
        </svg>
      )}
    </button>
  );
}
