import type { Metadata } from "next";
import Link from "next/link";
import { LESSONS, FINGER_INFO, KEYBOARD_ROWS, KEY_FINGER } from "@/lib/typing/data";

export const metadata: Metadata = { title: "Typing Trainer" };

export default function TypingHomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-6xl mb-3">⌨️</div>
        <h1 className="text-4xl font-bold text-white mb-2">Typing Trainer</h1>
        <p className="text-slate-400 text-lg">
          Learn the right fingers for every key. Start slow, build speed!
        </p>
      </div>

      {/* Keyboard guide */}
      <div className="bg-slate-800 rounded-2xl p-6 mb-10 border border-slate-700">
        <h2 className="text-center text-white font-bold text-lg mb-4">
          🎨 Color Guide — Which Finger Hits Which Key?
        </h2>

        {/* Finger legend */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {(Object.values(FINGER_INFO)).map((fi) => (
            <div key={fi.finger} className="flex items-center gap-1.5 bg-slate-700 rounded-full px-3 py-1">
              <span className={`w-3 h-3 rounded-full ${fi.color}`} />
              <span className="text-xs text-slate-200 font-medium">{fi.label}</span>
            </div>
          ))}
        </div>

        {/* Visual keyboard */}
        <div className="space-y-1.5 overflow-x-auto pb-2">
          {KEYBOARD_ROWS.map(({ row, keys }) => (
            <div key={row} className={`flex gap-1.5 justify-center ${row === "home" ? "" : row === "top" ? "ml-4" : row === "bottom" ? "ml-8" : ""}`}>
              {keys.map((key) => {
                const finger = KEY_FINGER[key];
                const fi = finger ? FINGER_INFO[finger] : null;
                const isHome = ["f", "j"].includes(key);
                return (
                  <div
                    key={key}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold uppercase shadow-md border-b-2 border-black/20 ${fi?.color ?? "bg-slate-600"} ${isHome ? "ring-2 ring-white ring-offset-1 ring-offset-slate-800" : ""}`}
                    title={fi?.label}
                  >
                    {key === " " ? "⎵" : key.toUpperCase()}
                  </div>
                );
              })}
            </div>
          ))}
          {/* Space bar */}
          <div className="flex justify-center mt-1">
            <div className="w-64 h-10 rounded-lg flex items-center justify-center text-sm font-bold bg-gray-300 text-gray-700 shadow-md border-b-2 border-black/20">
              SPACE — Thumb
            </div>
          </div>
        </div>

        <p className="text-center text-slate-400 text-xs mt-4">
          ⚡ F and J have a little bump so you can feel home row without looking!
        </p>
      </div>

      {/* Lessons grid */}
      <h2 className="text-white font-bold text-xl mb-4">📚 Choose a Lesson</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {LESSONS.map((lesson, i) => (
          <Link
            key={lesson.id}
            href={`/typing/lesson/${lesson.id}`}
            className="group bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-xl p-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${lesson.color} flex items-center justify-center text-xl shadow-sm`}>
                {lesson.emoji}
              </div>
              <span className="text-xs text-slate-500 font-medium">Lesson {i + 1}</span>
            </div>
            <h3 className="font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
              {lesson.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">{lesson.subtitle}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {lesson.focusKeys.slice(0, 6).map((k) => {
                  const finger = KEY_FINGER[k];
                  const fi = finger ? FINGER_INFO[finger] : null;
                  return (
                    <span key={k} className={`w-5 h-5 rounded text-xs font-bold flex items-center justify-center uppercase ${fi?.color ?? "bg-slate-600"} text-white`}>
                      {k}
                    </span>
                  );
                })}
                {lesson.focusKeys.length > 6 && (
                  <span className="text-xs text-slate-500">+{lesson.focusKeys.length - 6}</span>
                )}
              </div>
              <span className="text-xs text-slate-500">Goal: {lesson.wpmGoal} WPM</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "👀", tip: "Look at the screen, not your hands", desc: "This is the hardest part at first, but it's the most important habit to build." },
          { icon: "🐢", tip: "Slow is smooth — smooth is fast", desc: "Type correctly at a slow pace first. Speed comes naturally with practice." },
          { icon: "🏠", tip: "Always return to home row", desc: "After every keystroke, bring your fingers back to A S D F / J K L ;." },
        ].map((t) => (
          <div key={t.icon} className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <div className="text-2xl mb-2">{t.icon}</div>
            <p className="font-semibold text-white text-sm mb-1">{t.tip}</p>
            <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-slate-600 text-xs mt-8">
        <Link href="/" className="hover:text-slate-400 transition-colors">← Back to KMD Global</Link>
      </p>
    </div>
  );
}
