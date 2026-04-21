import Link from "next/link";
import { Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Products: [
    { href: "/spanish-training", label: "Spanish Training" },
    { href: "/local-news", label: "Local News" },
    { href: "/things-to-do", label: "Things To Do" },
    { href: "/services", label: "Features" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/local-news", label: "Local News" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 dark:bg-white/[0.03]">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Globe className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">KMD Global</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building focused AI tools for real-world use. Our first product: Spanish Training for travelers.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{section}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} KMD Global. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Building AI that changes industries.
          </p>
        </div>
      </div>
    </footer>
  );
}
