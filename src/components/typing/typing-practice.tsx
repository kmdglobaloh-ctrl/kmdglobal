"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { KeyboardDiagram } from "./keyboard-diagram";
import type { Lesson } from "@/lib/typing/data";

interface Props {
  lesson: Lesson;
}

type CharState = "pending" | "correct" | "incorrect";

interface CharData {
  char: string;
  state: CharState;
}

const PRAISE = ["🎉 Amazing!", "⭐ Great job!", "🚀 Awesome!", "🏆 Excellent!", "🔥 On fire!"];

export function TypingPractice({ lesson }: Props) {
  const fullText = lesson.lines.join(" ");
  const [chars, setChars] = useState<CharData[]>(
    fullText.split("").map((c) => ({ char: c, state: "pending" }))
  );
  const [cursor, setCursor] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [, setEndTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalKeystrokes, setTotalKeystrokes] = useState(0);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  const isDone = cursor >= fullText.length;

  // Keep live WPM updating
  useEffect(() => {
    if (!startTime || isDone) return;
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 60000;
      const wordsTyped = cursor / 5;
      setWpm(Math.round(wordsTyped / elapsed));
    }, 500);
    return () => clearInterval(interval);
  }, [startTime, cursor, isDone]);

  // Scroll cursor into view — scroll within the display box only, not the page
  useEffect(() => {
    const box = displayRef.current;
    const el = box?.querySelector<HTMLElement>("[data-cursor]");
    if (!box || !el) return;
    const boxTop = box.scrollTop;
    const boxBottom = boxTop + box.clientHeight;
    const elTop = el.offsetTop;
    const elBottom = elTop + el.offsetHeight;
    if (elTop < boxTop || elBottom > boxBottom) {
      box.scrollTop = elTop - box.clientHeight / 2;
    }
  }, [cursor]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (isDone) return;
      if (e.key === "Tab") { e.preventDefault(); return; }

      const expected = fullText[cursor];

      if (e.key === "Backspace") {
        if (cursor === 0) return;
        setCursor((c) => c - 1);
        setChars((prev) => {
          const next = [...prev];
          next[cursor - 1] = { ...next[cursor - 1], state: "pending" };
          return next;
        });
        return;
      }

      if (e.key.length !== 1) return;

      if (!startTime) setStartTime(Date.now());
      setTotalKeystrokes((t) => t + 1);

      const isCorrect = e.key === expected;

      if (!isCorrect) {
        setErrors((err) => err + 1);
        setShake(true);
        setTimeout(() => setShake(false), 300);
      }

      setChars((prev) => {
        const next = [...prev];
        next[cursor] = { ...next[cursor], state: isCorrect ? "correct" : "incorrect" };
        return next;
      });
      setCursor((c) => {
        const next = c + 1;
        if (next >= fullText.length) {
          const now = Date.now();
          setEndTime(now);
          if (startTime) {
            const elapsed = (now - startTime) / 60000;
            setWpm(Math.round((fullText.length / 5) / elapsed));
          }
        }
        return next;
      });
    },
    [cursor, fullText, isDone, startTime]
  );

  function reset() {
    setChars(fullText.split("").map((c) => ({ char: c, state: "pending" })));
    setCursor(0);
    setStartTime(null);
    setEndTime(null);
    setWpm(0);
    setErrors(0);
    setTotalKeystrokes(0);
    inputRef.current?.focus();
  }

  const accuracy = totalKeystrokes > 0
    ? Math.round(((totalKeystrokes - errors) / totalKeystrokes) * 100)
    : 100;

  const beatGoal = wpm >= lesson.wpmGoal;
  const nextLesson = String(Number(lesson.id) + 1);

  // Find which lesson index to determine next href
  const praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];

  return (
    <div className="space-y-6">
      {/* Stats bar */}
      <div className="flex items-center justify-between bg-slate-800 rounded-xl px-5 py-3 border border-slate-700">
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{wpm}</p>
            <p className="text-xs text-slate-400">WPM</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{accuracy}%</p>
            <p className="text-xs text-slate-400">Accuracy</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">{errors}</p>
            <p className="text-xs text-slate-400">Errors</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">Goal: <strong className="text-white">{lesson.wpmGoal} WPM</strong></span>
          <button
            onClick={() => setShowKeyboard((v) => !v)}
            className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 px-3 py-1.5 rounded-lg transition-colors"
          >
            {showKeyboard ? "Hide" : "Show"} Keyboard
          </button>
        </div>
      </div>

      {/* Text display */}
      <div
        ref={displayRef}
        onClick={() => inputRef.current?.focus()}
        className={`bg-slate-800 rounded-xl p-6 border-2 cursor-text min-h-32 max-h-52 overflow-auto transition-all ${
          shake ? "border-red-500 animate-[wiggle_0.3s_ease]" : "border-slate-700 focus-within:border-blue-500"
        }`}
      >
        <div className="font-mono text-xl sm:text-2xl leading-relaxed tracking-wide flex flex-wrap">
          {chars.map((c, i) => {
            const isCursor = i === cursor;
            return (
              <span
                key={i}
                data-cursor={isCursor ? true : undefined}
                className={`relative ${
                  c.state === "correct"
                    ? "text-green-400"
                    : c.state === "incorrect"
                    ? "text-red-400 bg-red-900/30 rounded"
                    : "text-slate-400"
                } ${
                  isCursor
                    ? "after:absolute after:left-0 after:top-0 after:w-0.5 after:h-full after:bg-blue-400 after:animate-pulse"
                    : ""
                } ${c.char === " " ? "pr-[0.5ch]" : ""}`}
              >
                {c.char === " " ? " " : c.char}
              </span>
            );
          })}
        </div>
        {/* Hidden input captures keystrokes */}
        <input
          ref={inputRef}
          autoFocus
          onKeyDown={handleKeyDown}
          className="opacity-0 absolute w-0 h-0"
          readOnly
          aria-label="Type here"
        />
      </div>

      <p className="text-center text-slate-500 text-xs">Click the text area and start typing · Backspace to correct mistakes</p>

      {/* Keyboard */}
      {showKeyboard && (
        <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
          <KeyboardDiagram
            nextChar={!isDone ? fullText[cursor] : null}
            focusKeys={lesson.focusKeys}
          />
        </div>
      )}

      {/* Completion overlay */}
      {isDone && (
        <div className="bg-slate-800 rounded-2xl border-2 border-green-500 p-8 text-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <div className="text-5xl mb-3">{beatGoal ? "🏆" : "✅"}</div>
          <h2 className="text-2xl font-bold text-white mb-1">{praise}</h2>
          <p className="text-slate-400 mb-6">You finished the lesson!</p>

          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <p className={`text-4xl font-bold ${beatGoal ? "text-green-400" : "text-yellow-400"}`}>{wpm}</p>
              <p className="text-slate-400 text-sm">WPM {beatGoal ? "🎯 Goal beat!" : `(goal: ${lesson.wpmGoal})`}</p>
            </div>
            <div className="text-center">
              <p className={`text-4xl font-bold ${accuracy >= 95 ? "text-green-400" : accuracy >= 80 ? "text-yellow-400" : "text-red-400"}`}>
                {accuracy}%
              </p>
              <p className="text-slate-400 text-sm">Accuracy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-slate-300">{errors}</p>
              <p className="text-slate-400 text-sm">Errors</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              🔁 Try Again
            </button>
            <Link
              href={`/typing/lesson/${nextLesson}`}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-400 hover:to-teal-400 text-white font-bold px-6 py-3 rounded-xl transition-all"
            >
              Next Lesson →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
