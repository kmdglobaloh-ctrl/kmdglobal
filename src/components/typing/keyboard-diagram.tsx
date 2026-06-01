"use client";

import { KEYBOARD_ROWS, KEY_FINGER, FINGER_INFO } from "@/lib/typing/data";

interface Props {
  nextChar: string | null;
  focusKeys?: string[];
}

export function KeyboardDiagram({ nextChar, focusKeys }: Props) {
  const nextKey = nextChar?.toLowerCase() ?? null;

  function keyClass(key: string) {
    const finger = KEY_FINGER[key];
    const fi = finger ? FINGER_INFO[finger] : null;
    const isNext = key === nextKey;
    const isFocus = focusKeys && focusKeys.length > 0 ? focusKeys.includes(key) : true;
    const isHome = ["f", "j"].includes(key);

    if (isNext) {
      return "bg-white text-slate-900 scale-110 shadow-[0_0_12px_3px_rgba(255,255,255,0.6)] z-10";
    }
    if (isFocus && fi) {
      return `${fi.color} text-white opacity-100`;
    }
    return "bg-slate-700 text-slate-400 opacity-40";
  }

  return (
    <div className="space-y-1.5 overflow-x-auto pb-1 select-none">
      {KEYBOARD_ROWS.map(({ row, keys }) => (
        <div
          key={row}
          className={`flex gap-1 sm:gap-1.5 justify-center ${
            row === "top" ? "ml-3 sm:ml-5" :
            row === "home" ? "" :
            row === "bottom" ? "ml-6 sm:ml-10" : ""
          }`}
        >
          {keys.map((key) => {
            const isHome = ["f", "j"].includes(key);
            return (
              <div
                key={key}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center text-xs sm:text-sm font-bold uppercase transition-all duration-100 border-b-2 border-black/30 relative ${keyClass(key)}`}
              >
                {key.toUpperCase()}
                {isHome && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-60" />
                )}
              </div>
            );
          })}
        </div>
      ))}
      {/* Spacebar */}
      <div className="flex justify-center mt-0.5">
        <div
          className={`w-48 sm:w-64 h-8 sm:h-10 rounded-md flex items-center justify-center text-xs font-bold transition-all duration-100 border-b-2 border-black/30 ${
            nextKey === " " ? "bg-white text-slate-900 scale-105 shadow-[0_0_12px_3px_rgba(255,255,255,0.6)]" : "bg-gray-300 text-gray-600"
          }`}
        >
          SPACE
        </div>
      </div>

      {/* Next key callout */}
      {nextKey && nextKey !== "\n" && (
        <div className="flex justify-center mt-2">
          {(() => {
            const finger = KEY_FINGER[nextKey];
            const fi = finger ? FINGER_INFO[finger] : null;
            if (!fi) return null;
            return (
              <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white ${fi.color}`}>
                <span>Press</span>
                <span className="bg-white/20 px-2 py-0.5 rounded font-mono uppercase">{nextKey === " " ? "Space" : nextKey}</span>
                <span>with your {fi.label}</span>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
