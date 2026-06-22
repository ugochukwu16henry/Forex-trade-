import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { FLASHCARDS } from "@/lib/flashcards";
import { useLocalState, type FlashcardState } from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/flashcards")({
  head: () => ({ meta: [{ title: "Flashcards — Forex Mastery" }] }),
  component: FlashcardsPage,
});

const INTERVAL_DAYS = [1, 3, 7, 14, 30];

function FlashcardsPage() {
  const [states, setStates] = useLocalState<Record<string, FlashcardState>>(
    "flashcards",
    {}
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [idx, setIdx] = useState(0);

  const due = useMemo(() => {
    const now = Date.now();
    return FLASHCARDS.filter((c) => {
      const s = states[c.term];
      if (!s) return true;
      return new Date(s.dueDate).getTime() <= now;
    });
  }, [states]);

  if (due.length === 0) {
    return (
      <AppShell>
        <div className="px-6 md:px-10 py-12 max-w-xl mx-auto text-center">
          <div className="text-6xl mb-3">🎯</div>
          <h1 className="text-2xl font-bold">All caught up</h1>
          <p className="text-muted-foreground mt-2">
            No flashcards due right now. Come back tomorrow — spaced repetition is doing its job.
          </p>
        </div>
      </AppShell>
    );
  }

  const card = due[idx % due.length];

  const grade = (g: "again" | "hard" | "good" | "easy") => {
    setStates((prev) => {
      const cur = prev[card.term] || { term: card.term, ease: 2.0, intervalDays: 0, dueDate: new Date().toISOString(), reps: 0 };
      let reps = cur.reps;
      let intervalDays = cur.intervalDays;
      if (g === "again") {
        reps = 0;
        intervalDays = 0; // due immediately again later today
      } else {
        reps += 1;
        if (reps - 1 < INTERVAL_DAYS.length) {
          intervalDays = INTERVAL_DAYS[reps - 1];
        } else {
          intervalDays = Math.round(intervalDays * (g === "easy" ? 2.0 : g === "good" ? 1.5 : 1.2));
        }
      }
      const due = new Date();
      due.setDate(due.getDate() + intervalDays);
      return {
        ...prev,
        [card.term]: { ...cur, reps, intervalDays, dueDate: due.toISOString() },
      };
    });
    setShowAnswer(false);
    setIdx((i) => i + 1);
    if (g === "again") toast("Will see this again soon");
  };

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-2xl font-bold">Flashcards</h1>
          <span className="font-mono text-sm text-muted-foreground">
            {due.length} due
          </span>
        </div>

        <Card className="min-h-[280px]">
          <CardHeader>
            <CardTitle className="font-mono text-primary">{card.term}</CardTitle>
          </CardHeader>
          <CardContent>
            {showAnswer ? (
              <p className="text-base leading-relaxed">{card.definition}</p>
            ) : (
              <Button onClick={() => setShowAnswer(true)} variant="secondary" className="w-full">
                Show answer
              </Button>
            )}
          </CardContent>
        </Card>

        {showAnswer && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            <Button onClick={() => grade("again")} variant="destructive" size="sm">Again</Button>
            <Button onClick={() => grade("hard")} variant="secondary" size="sm">Hard</Button>
            <Button onClick={() => grade("good")} size="sm">Good</Button>
            <Button onClick={() => grade("easy")} className="bg-bull text-white hover:bg-bull/90" size="sm">Easy</Button>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Spaced repetition: 1 → 3 → 7 → 14 → 30 days. Recall strengthens memory.
        </p>
      </div>
    </AppShell>
  );
}
