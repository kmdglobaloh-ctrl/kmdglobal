"use client";

import { MapPin, ExternalLink, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { type Place, CATEGORIES } from "@/lib/things-to-do";

const PRICE_LABEL: Record<string, string> = {
  "$": "Budget",
  "$$": "Mid-range",
  "$$$": "Splurge",
};

const PRICE_COLOR: Record<string, string> = {
  "$": "text-green-600 dark:text-green-400",
  "$$": "text-amber-600 dark:text-amber-400",
  "$$$": "text-rose-600 dark:text-rose-400",
};

export function PlaceCard({ place }: { place: Place }) {
  const cat = CATEGORIES.find((c) => c.id === place.category);

  return (
    <Card className="group h-full border-border/60 hover:border-border hover:shadow-md transition-all flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="text-xs gap-1">
              {cat?.emoji} {place.category}
            </Badge>
            <span className={`text-xs font-semibold ${PRICE_COLOR[place.price]}`} title={PRICE_LABEL[place.price]}>
              {place.price} · {PRICE_LABEL[place.price]}
            </span>
          </div>
        </div>
        <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
          {place.name}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0" />
          {place.location}
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col flex-1 gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {place.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>
        {(place.mapsUrl || place.websiteUrl) && (
          <div className="flex gap-3 pt-1">
            {place.mapsUrl && (
              <a
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                View on Maps
              </a>
            )}
            {place.websiteUrl && (
              <a
                href={place.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
                Website
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
