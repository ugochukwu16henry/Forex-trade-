// localStorage helpers
import { useEffect, useState, useCallback } from "react";

const PREFIX = "forex_mastery_v1_";

export function loadJSON<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveJSON<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    /* quota */
  }
}

export function useLocalState<T>(key: string, initial: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(initial);
  // hydrate on mount (avoid SSR mismatch)
  useEffect(() => {
    setState(loadJSON<T>(key, initial));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const set = useCallback(
    (v: T | ((prev: T) => T)) => {
      setState((prev) => {
        const next = typeof v === "function" ? (v as (p: T) => T)(prev) : v;
        saveJSON(key, next);
        return next;
      });
    },
    [key]
  );
  return [state, set];
}

// --- Domain types ---

export interface DayProgress {
  completedPhases: Record<string, boolean>; // phaseId -> done
  completedAt?: string; // ISO when all 4 phases done
  notes?: string;
  teach?: string;
}

export interface ProgressState {
  startedAt: string; // ISO date
  currentDay: number; // 1..90
  days: Record<number, DayProgress>;
  streak: number;
  lastSessionDate?: string; // YYYY-MM-DD
}

export const initialProgress: ProgressState = {
  startedAt: new Date().toISOString(),
  currentDay: 1,
  days: {},
  streak: 0,
};

export interface Trade {
  id: string;
  date: string;
  pair: string;
  direction: "long" | "short";
  entry: number;
  sl: number;
  tp: number;
  lots: number;
  result?: "win" | "loss" | "be" | "open";
  pnl?: number;
  rr?: number;
  emotion?: string;
  reason?: string;
  lesson?: string;
  screenshotUrl?: string;
}

export interface FlashcardState {
  term: string;
  ease: number; // 1.3–2.5
  intervalDays: number;
  dueDate: string; // ISO
  reps: number;
}

export interface Settings {
  email: string;
  reminderTime: string; // HH:MM 24h
  browserNotif: boolean;
  emailNotif: boolean;
}

export const defaultSettings: Settings = {
  email: "",
  reminderTime: "08:00",
  browserNotif: false,
  emailNotif: false,
};
