export interface AdminUser {
  username: string;
  displayName: string;
  role: "super" | "admin" | "viewer";
}

// Users stored in env var ALFIERI_ADMIN_USERS as JSON:
// [{"username":"kevin","password":"yourpassword","displayName":"Kevin","role":"super"}, ...]
// Fallback defaults for local dev only — OVERRIDE IN PRODUCTION via env vars

export const SESSION_KEY = "alfieri_admin_session";
export const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

export interface Session {
  username: string;
  displayName: string;
  role: AdminUser["role"];
  expiresAt: number;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session: Session = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function clearSession() {
  if (typeof window !== "undefined") sessionStorage.removeItem(SESSION_KEY);
}
