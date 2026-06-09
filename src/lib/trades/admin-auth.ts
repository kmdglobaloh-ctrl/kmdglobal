const SESSION_KEY = "trades_admin_session";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;

export interface Session {
  username: string;
  displayName: string;
  role: "super" | "admin" | "viewer";
  expiresAt: number;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const s: Session = JSON.parse(raw);
    if (Date.now() > s.expiresAt) { sessionStorage.removeItem(SESSION_KEY); return null; }
    return s;
  } catch { return null; }
}

export function saveSession(session: Omit<Session, "expiresAt">) {
  const full: Session = { ...session, expiresAt: Date.now() + SESSION_DURATION_MS };
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(full));
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}
