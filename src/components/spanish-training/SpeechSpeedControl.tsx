"use client";

import { useState, useEffect } from "react";
import { getSpeed, setSpeed, MIN_SPEED, MAX_SPEED, STEP } from "@/lib/spanish-training/speechSpeed";

export default function SpeechSpeedControl() {
  const [speed, setLocalSpeed] = useState(getSpeed);

  useEffect(() => {
    function onSpeedChange(e: Event) {
      setLocalSpeed((e as CustomEvent<number>).detail);
    }
    window.addEventListener("speech-speed-change", onSpeedChange);
    return () => window.removeEventListener("speech-speed-change", onSpeedChange);
  }, []);

  function adjust(delta: number) {
    const next = Math.round((speed + delta) * 100) / 100;
    setSpeed(next);
    setLocalSpeed(next);
  }

  const label = speed <= 0.5 ? "Very slow" : speed <= 0.7 ? "Slow" : speed <= 0.9 ? "Normal" : "Fast";

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 border border-white/10">
      <span className="text-green-300 text-xs hidden sm:block">🔊 Speed</span>
      <button
        onClick={() => adjust(-STEP)}
        disabled={speed <= MIN_SPEED}
        className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-bold text-sm flex items-center justify-center transition-colors"
        title="Slower"
      >
        −
      </button>
      <span className="text-white text-xs w-16 text-center tabular-nums">
        {label} <span className="text-white/40">({speed.toFixed(2)}x)</span>
      </span>
      <button
        onClick={() => adjust(STEP)}
        disabled={speed >= MAX_SPEED}
        className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white font-bold text-sm flex items-center justify-center transition-colors"
        title="Faster"
      >
        +
      </button>
    </div>
  );
}
