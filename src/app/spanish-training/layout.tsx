import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanish Training",
  description: "Learn practical Spanish for Central America and the Caribbean coast with AI conversation practice",
};

export default function SpanishTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen flex flex-col">{children}</div>;
}
