import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { PLACES, CATEGORIES } from "@/lib/things-to-do";
import { CategoryFilter } from "./CategoryFilter";

export const metadata: Metadata = {
  title: "Things To Do — Limón, Costa Rica",
  description:
    "Restaurants, adventures, tours, beaches, and nature in Limón and the Caribbean coast of Costa Rica. Curated guide for travelers to Puerto Viejo, Cahuita, Manzanillo, and beyond.",
  alternates: { canonical: "/things-to-do" },
};

export default function ThingsToDoPage() {
  const categoryCounts = CATEGORIES.slice(1).map((c) => ({
    ...c,
    count: PLACES.filter((p) => p.category === c.id).length,
  }));

  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Limón, Costa Rica
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Things To Do
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              A curated guide to the best restaurants, adventures, tours, beaches, and nature
              experiences across the Caribbean coast — Puerto Viejo, Cahuita, Manzanillo, and beyond.
            </p>

            {/* Category summary pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {categoryCounts.map((c) => (
                <span
                  key={c.id}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/60 border border-border/60 rounded-full px-3 py-1"
                >
                  {c.emoji} {c.count} {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter + cards */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryFilter />
        </div>
      </section>

      {/* Suggest a place */}
      <section className="pb-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-muted/40 border border-border/60 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-medium text-foreground">Know a great spot we missed?</p>
              <p className="text-sm text-muted-foreground mt-1">
                This guide is hand-curated and updated regularly. If you know a restaurant, beach, or
                activity worth adding,{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  send us a tip.
                </Link>
              </p>
            </div>
            <Badge variant="secondary" className="shrink-0">Community-driven</Badge>
          </div>
        </div>
      </section>
    </>
  );
}
