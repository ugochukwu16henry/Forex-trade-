import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { CURRICULUM, LEVELS } from "@/lib/curriculum";
import { useLocalState, initialProgress, type ProgressState } from "@/lib/storage";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle2, Circle } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({ meta: [{ title: "90-Day Roadmap — Forex Mastery" }] }),
  component: RoadmapPage,
});

function RoadmapPage() {
  const [progress, setProgress] = useLocalState<ProgressState>("progress", initialProgress);

  const byMonth = [1, 2, 3].map((m) => CURRICULUM.filter((l) => l.month === m));

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">90-Day Roadmap</h1>
        <p className="text-muted-foreground mt-1">
          One focused 30-min session per day. Click any unlocked day to jump in.
        </p>

        {byMonth.map((days, idx) => (
          <div key={idx} className="mt-10">
            <div className="flex items-baseline gap-3 mb-4">
              <h2 className="text-xl font-bold">Month {idx + 1}</h2>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                {idx === 0 && "Foundations + Candlesticks"}
                {idx === 1 && "Technical Analysis + Demo"}
                {idx === 2 && "Risk · Psychology · Backtest · Journal"}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
              {days.map((l) => {
                const dp = progress.days[l.day];
                const done = !!dp?.completedAt;
                const unlocked = l.day <= progress.currentDay;
                const level = LEVELS.find((x) => x.id === l.level)!;
                return (
                  <button
                    key={l.day}
                    onClick={() => {
                      if (unlocked) {
                        setProgress((p) => ({ ...p, currentDay: l.day }));
                      }
                    }}
                    disabled={!unlocked}
                    className={`text-left rounded-xl border p-3 transition-all relative ${
                      done
                        ? "border-bull/50 bg-bull/5 hover:bg-bull/10"
                        : unlocked
                          ? "border-primary/40 bg-card hover:border-primary glow-primary"
                          : "border-border bg-card/40 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">D{l.day}</span>
                      {done ? (
                        <CheckCircle2 className="size-4 text-bull" />
                      ) : unlocked ? (
                        <Circle className="size-4 text-primary" />
                      ) : (
                        <Lock className="size-3 text-muted-foreground" />
                      )}
                    </div>
                    <div className="mt-1 text-xs font-semibold line-clamp-2 leading-tight min-h-[2.4em]">
                      {l.title}
                    </div>
                    <div
                      className="mt-2 text-[9px] font-mono uppercase tracking-wider"
                      style={{ color: `var(--${level.color})` }}
                    >
                      Lv {level.id}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-10 text-center">
          <Link to="/" className="text-primary hover:underline">
            ← Back to today's session
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
