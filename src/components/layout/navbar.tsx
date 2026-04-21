"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/local-news", label: "Local News" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Globe className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">KMD Global</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button size="sm" nativeButton={false} render={<Link href="/spanish-training" />}>
            Try Spanish Training
          </Button>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                    <Globe className="h-4 w-4 text-primary-foreground" />
                  </div>
                  KMD Global
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button nativeButton={false} render={<Link href="/spanish-training" onClick={() => setOpen(false)} />}>
                  Try Spanish Training
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
