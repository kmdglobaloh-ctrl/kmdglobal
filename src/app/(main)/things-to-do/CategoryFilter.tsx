"use client";

import { useState } from "react";
import { CATEGORIES, PLACES, type Category } from "@/lib/things-to-do";
import { PlaceCard } from "./PlaceCard";

export function CategoryFilter() {
  const [active, setActive] = useState<Category | "All">("All");

  const filtered = active === "All"
    ? PLACES
    : PLACES.filter((p) => p.category === active);

  const cat = CATEGORIES.find((c) => c.id === active)!;

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all border
              ${active === c.id
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
          >
            <span>{c.emoji}</span>
            {c.label}
            <span className={`text-xs ml-0.5 ${active === c.id ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
              {c.id === "All" ? PLACES.length : PLACES.filter((p) => p.category === c.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Section heading */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {active === "All"
            ? `Showing all ${filtered.length} places`
            : `${cat.emoji} ${filtered.length} ${cat.label.toLowerCase()}`}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((place) => (
          <PlaceCard key={place.name} place={place} />
        ))}
      </div>
    </>
  );
}
