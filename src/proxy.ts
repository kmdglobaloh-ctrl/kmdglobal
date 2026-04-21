import { NextRequest, NextResponse } from "next/server";

const SUBSITE_MAP: Record<string, string> = {
  "spanish-training": "/spanish-training",
};

function getSubdomain(hostname: string): string | null {
  const parts = hostname.split(".");
  if (parts.length >= 2) {
    const sub = parts[0];
    if (sub !== "www" && sub !== "kmdglobal" && sub !== "localhost") {
      return sub;
    }
  }
  return null;
}

export function proxy(req: NextRequest) {
  const hostname = req.headers.get("host") ?? "";
  const { pathname } = req.nextUrl;

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
