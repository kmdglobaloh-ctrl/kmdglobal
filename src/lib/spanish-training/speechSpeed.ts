const KEY = "speech-speed";
export const DEFAULT_SPEED = 0.65;
export const MIN_SPEED = 0.4;
export const MAX_SPEED = 1.2;
export const STEP = 0.05;

export function getSpeed(): number {
  if (typeof window === "undefined") return DEFAULT_SPEED;
  const stored = localStorage.getItem(KEY);
  return stored ? parseFloat(stored) : DEFAULT_SPEED;
}

export function setSpeed(val: number): void {
  const clamped = Math.min(MAX_SPEED, Math.max(MIN_SPEED, val));
  localStorage.setItem(KEY, String(clamped));
  window.dispatchEvent(new CustomEvent("speech-speed-change", { detail: clamped }));
}
