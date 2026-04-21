import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/session";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Newspaper, Map, ChevronRight } from "lucide-react";

export const metadata: Metadata = { title: "Dashboard" };

const tools = [
  {
    href: "/directory",
    icon: MapPin,
    name: "Business Directory",
    description: "Full contact info for trusted property managers, handymen, pool techs, cleaners, and more on the Caribbean coast.",
    badge: "Members Only",
    badgeVariant: "default" as const,
  },
  {
    href: "/spanish-training",
    icon: Globe,
    name: "Spanish Training",
    description: "AI-powered conversation practice for travel Spanish in Central America and the Caribbean.",
    badge: "Free",
    badgeVariant: "secondary" as const,
  },
  {
    href: "/local-news",
    icon: Newspaper,
    name: "Local News",
    description: "Live Caribbean coast and Costa Rica news, updated hourly from trusted sources.",
    badge: "Free",
    badgeVariant: "secondary" as const,
  },
  {
    href: "/things-to-do",
    icon: Map,
    name: "Things To Do",
    description: "Curated guide to restaurants, tours, surf spots, and hidden beaches in Limón.",
    badge: "Free",
    badgeVariant: "secondary" as const,
  },
];

export default async function DashboardPage() {
  const session = await getSession();
  if (!session.user) redirect("/login");

  const firstName = session.user.name.split(" ")[0];

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 pb-24">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">Welcome back, {firstName}</h1>
        <p className="mt-2 text-muted-foreground">Here's everything you have access to.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tools.map(tool => {
          const Icon = tool.icon;
          return (
            <Card key={tool.name} className="border-border/60 hover:shadow-md transition-all flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={tool.badgeVariant} className="text-xs">{tool.badge}</Badge>
                </div>
                <h2 className="font-bold text-foreground">{tool.name}</h2>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{tool.description}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  nativeButton={false}
                  render={<Link href={tool.href} />}
                  className="w-fit gap-1.5 px-0 hover:px-2 transition-all text-primary hover:bg-transparent"
                >
                  Open <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
