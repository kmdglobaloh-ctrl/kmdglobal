import { NextRequest, NextResponse } from "next/server";

const SUBSITE_MAP: Record<string, string> = {
  "spanish-training": "/spanish-training",
  // Add future subsites here, e.g.:
  // "card-grading": "/card-grading",
};

function getSubdomain(hostname: string): string | null {
  // Handle local dev: spanish-training.localhost
  // Handle production: spanish-training.kmdglobal.com (or .ai)
  const parts = hostname.split(".");
  if (parts.length >= 2) {
    const sub = parts[0];
    if (sub !== "www" && sub !== "kmdglobal" && sub !== "localhost") {
      return sub;
    }
  }
  return null;
}

export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") ?? "";
  const { pathname } = req.nextUrl;

  // Skip static files, Next.js internals, and API routes that are already prefixed
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const subdomain = getSubdomain(hostname);

  if (subdomain && SUBSITE_MAP[subdomain]) {
    const prefix = SUBSITE_MAP[subdomain];

    // Don't double-prefix if the path already starts with the subsite prefix
    if (!pathname.startsWith(prefix)) {
      const rewriteUrl = req.nextUrl.clone();
      rewriteUrl.pathname = `${prefix}${pathname}`;
      return NextResponse.rewrite(rewriteUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
