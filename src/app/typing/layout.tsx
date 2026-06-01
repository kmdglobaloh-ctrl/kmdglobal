import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Typing Trainer",
    template: "%s | Typing Trainer",
  },
  description: "Learn to type fast and correctly with color-coded finger guides and fun lessons.",
};

export default function TypingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white" style={{ colorScheme: "dark" }}>
      {children}
    </div>
  );
}
