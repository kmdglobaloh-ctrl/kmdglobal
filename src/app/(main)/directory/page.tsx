import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Globe, Star, Lock } from "lucide-react";
import { getApprovedListings } from "@/lib/store";
import { getSession } from "@/lib/session";
import { LISTING_CATEGORIES } from "@/lib/store";

export const metadata: Metadata = {
  title: "Local Business Directory — Limón, Costa Rica",
  description: "Find trusted property managers, handymen, pool & AC techs, cleaners, and more on Costa Rica's Caribbean coast.",
  alternates: { canonical: "/directory" },
};

const CATEGORY_EMOJI: Record<string, string> = {
  "Property Management": "🏠", "Handyman": "🔧", "Pool & AC": "🏊", "Cleaning": "🧹",
  "Landscaping": "🌿", "Transportation": "🚗", "Tours & Activities": "🏄", "Other": "📌",
};

export default async function DirectoryPage() {
  const session = await getSession();
  const isLoggedIn = !!session.user;
  const listings = getApprovedListings();

  const byCategory = LISTING_CATEGORIES.reduce<Record<string, typeof listings>>((acc, cat) => {
    const items = listings.filter(l => l.category === cat);
    if (items.length > 0) acc[cat] = items;
    return acc;
  }, {});

  return (
    <>
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 dark:from-primary/15 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />Limón, Costa Rica
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Local Business Directory</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Trusted property managers, handymen, cleaners, pool techs, and more on the Caribbean coast.
              {!isLoggedIn && " Create a free account to see contact details."}
            </p>
            {!isLoggedIn && (
              <div className="mt-6 flex gap-3">
                <Button nativeButton={false} render={<Link href="/register" />}>Create Free Account</Button>
                <Button variant="outline" nativeButton={false} render={<Link href="/login" />}>Sign In</Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 pb-24">
        {!isLoggedIn && (
          <div className="flex items-center gap-3 bg-primary/5 border border-primary/15 rounded-xl px-5 py-4 mb-10">
            <Lock className="h-4 w-4 text-primary shrink-0" />
            <p className="text-sm text-foreground">
              <strong>Phone numbers and email addresses</strong> are visible to registered users only.{" "}
              <Link href="/register" className="text-primary hover:underline">Create a free account</Link> to unlock contact info.
            </p>
          </div>
        )}

        {Object.entries(byCategory).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <span>{CATEGORY_EMOJI[category] ?? "📌"}</span> {category}
              <Badge variant="secondary" className="text-xs ml-1">{items.length}</Badge>
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(listing => (
                <Card key={listing.id} className={`border-border/60 hover:shadow-md transition-all flex flex-col ${listing.featured ? "ring-1 ring-amber-500/30" : ""}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      {listing.featured && (
                        <span className="inline-flex items-center gap-1 text-xs bg-amber-500/15 text-amber-600 border border-amber-500/20 rounded-full px-2 py-0.5 font-medium">
                          <Star className="h-3 w-3" /> Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-foreground">{listing.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {listing.location}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-1 gap-4">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{listing.description}</p>

                    {isLoggedIn ? (
                      <div className="flex flex-col gap-1.5 pt-1 border-t border-border">
                        <p className="text-xs text-muted-foreground font-medium">{listing.contactPerson}</p>
                        <a href={`tel:${listing.phone}`} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                          <Phone className="h-3.5 w-3.5" />{listing.phone}
                        </a>
                        <a href={`mailto:${listing.email}`} className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                          <Mail className="h-3.5 w-3.5" />{listing.email}
                        </a>
                        {listing.website && (
                          <a href={listing.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                            <Globe className="h-3.5 w-3.5" />Website
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="pt-1 border-t border-border">
                        <Link href="/register" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <Lock className="h-3.5 w-3.5" />Sign in to see contact info
                        </Link>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-xl bg-muted/40 border border-border/60 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-medium text-foreground">Want to list your business?</p>
            <p className="text-sm text-muted-foreground mt-1">
              We&apos;re adding local service providers to the directory.{" "}
              <Link href="/contact" className="text-primary hover:underline">Get in touch</Link> to discuss a listing.
            </p>
          </div>
          <Badge variant="secondary" className="shrink-0">Free to start</Badge>
        </div>
      </div>
    </>
  );
}
