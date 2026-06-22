import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { CURRICULUM, PHASES, LEVELS, type Lesson, type Phase } from "@/lib/curriculum";
import { useLocalState, initialProgress, type ProgressState } from "@/lib/storage";
import { SessionTimer } from "@/components/SessionTimer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import { CheckCircle2, ArrowRight, BookOpen, PenLine, LineChart, Mic } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Today's Session — Forex Mastery" },
      { name: "description", content: "Your daily 30-minute Forex training session." },
    ],
  }),
  component: TodayPage,
});

const PHASE_ICONS: Record<Phase, any> = {
  learn: BookOpen,
  notes: PenLine,
  practice: LineChart,
  teach: Mic,
};

function TodayPage() {
  const [progress, setProgress] = useLocalState<ProgressState>("progress", initialProgress);
  const day = Math.min(progress.currentDay, 90);
  const lesson = CURRICULUM.find((l) => l.day === day) || CURRICULUM[0];
  const dp = progress.days[day] || { completedPhases: {} };
  const [active, setActive] = useState<Phase>("learn");
  const [notes, setNotes] = useState(dp.notes || "");
  const [teach, setTeach] = useState(dp.teach || "");

  const level = LEVELS.find((l) => l.id === lesson.level)!;

  const completePhase = (p: Phase) => {
    setProgress((prev) => {
      const days = { ...prev.days };
      const cur = days[day] || { completedPhases: {} };
      const completedPhases = { ...cur.completedPhases, [p]: true };
      const allDone = PHASES.every((ph) => completedPhases[ph.id]);
      days[day] = {
        ...cur,
        completedPhases,
        notes,
        teach,
        completedAt: allDone ? new Date().toISOString() : cur.completedAt,
      };
      const today = new Date().toISOString().slice(0, 10);
      let streak = prev.streak;
      let currentDay = prev.currentDay;
      if (allDone && prev.lastSessionDate !== today) {
        streak += 1;
        currentDay = Math.min(prev.currentDay + 1, 90);
        toast.success(`Day ${day} complete! 🎯`, { description: `Streak: ${streak} days` });
      }
      return {
        ...prev,
        days,
        streak,
        currentDay,
        lastSessionDate: allDone ? today : prev.lastSessionDate,
      };
    });
  };

  const saveText = () => {
    setProgress((prev) => {
      const days = { ...prev.days };
      const cur = days[day] || { completedPhases: {} };
      days[day] = { ...cur, notes, teach };
      return { ...prev, days };
    });
    toast.success("Saved");
  };

  const phaseDef = PHASES.find((p) => p.id === active)!;
  const phaseDone = (id: Phase) => !!dp.completedPhases[id];
  const allPhases = useMemo(() => PHASES.every((p) => phaseDone(p.id)), [dp]);

  return (
    <AppShell>
      <div className="bg-grid">
        {/* Hero */}
        <div className="px-6 md:px-10 pt-8 pb-6 border-b border-border bg-gradient-to-b from-card/60 to-transparent">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 text-xs">
                <Badge variant="secondary" className="font-mono">
                  DAY {day}/90
                </Badge>
                <Badge variant="outline">Month {lesson.month}</Badge>
                <Badge style={{ color: `var(--${level.color})`, borderColor: `var(--${level.color})` }} variant="outline">
                  Level {level.id}: {level.name}
                </Badge>
              </div>
              <h1 className="mt-2 text-3xl md:text-4xl font-bold">{lesson.title}</h1>
              <p className="mt-1 text-muted-foreground max-w-2xl">{lesson.concept}</p>
            </div>
            {allPhases && (
              <Link to="/" onClick={() => {}}>
                <Button variant="secondary" className="gap-2">
                  <CheckCircle2 className="size-4 text-bull" /> Day complete · Next →
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Phase tabs */}
        <div className="px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {PHASES.map((p) => {
            const Icon = PHASE_ICONS[p.id];
            const done = phaseDone(p.id);
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`text-left rounded-xl border p-4 transition-all ${
                  isActive
                    ? "border-primary bg-primary/10 glow-primary"
                    : done
                      ? "border-bull/50 bg-bull/5"
                      : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className="size-5" />
                  {done && <CheckCircle2 className="size-5 text-bull" />}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {p.minutes} min
                </div>
                <div className="font-display font-bold mt-0.5">{p.label}</div>
              </button>
            );
          })}
        </div>

        {/* Active phase content */}
        <div className="px-6 md:px-10 pb-12 grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{phaseDef.label}</span>
                <Badge variant="outline" className="font-mono">{phaseDef.minutes} min</Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{phaseDef.desc}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {active === "learn" && (
                <div className="prose-invert">
                  <p className="text-base leading-relaxed">{lesson.learn}</p>
                  {lesson.keyTerms && lesson.keyTerms.length > 0 && (
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Key terms
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {lesson.keyTerms.map((t) => (
                          <Badge key={t} variant="secondary" className="font-mono">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {active === "notes" && (
                <div>
                  <p className="text-sm leading-relaxed mb-3">{lesson.notes}</p>
                  <Textarea
                    rows={10}
                    placeholder="Write your notes in YOUR OWN words…"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <Button size="sm" variant="outline" className="mt-2" onClick={saveText}>
                    Save notes
                  </Button>
                </div>
              )}
              {active === "practice" && (
                <div>
                  <p className="text-sm leading-relaxed mb-3">{lesson.practice}</p>
                  <Link to="/charts">
                    <Button variant="secondary" className="gap-2">
                      Open Chart Playground <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              )}
              {active === "teach" && (
                <div>
                  <p className="text-sm leading-relaxed mb-3">{lesson.teach}</p>
                  <Textarea
                    rows={8}
                    placeholder="Explain it as if teaching a beginner (Feynman technique)…"
                    value={teach}
                    onChange={(e) => setTeach(e.target.value)}
                  />
                  <Button size="sm" variant="outline" className="mt-2" onClick={saveText}>
                    Save explanation
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4">
            <SessionTimer
              key={active}
              totalSeconds={phaseDef.minutes * 60}
              label={phaseDef.label}
              onComplete={() => completePhase(active)}
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Session checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {PHASES.map((p) => (
                  <div key={p.id} className="flex items-center justify-between text-sm">
                    <span className={phaseDone(p.id) ? "text-bull" : "text-muted-foreground"}>
                      {phaseDone(p.id) ? "✓ " : "○ "}
                      {p.label} <span className="font-mono text-xs">({p.minutes}m)</span>
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs"
                      onClick={() => completePhase(p.id)}
                      disabled={phaseDone(p.id)}
                    >
                      Mark
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Why this works</CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground space-y-2">
                <p>
                  The 90% Retention Formula — Learn → Notes → Practice → Teach — uses{" "}
                  <strong className="text-foreground">active recall</strong>,{" "}
                  <strong className="text-foreground">deliberate practice</strong> and the{" "}
                  <strong className="text-foreground">Feynman technique</strong>.
                </p>
                <p>If you can't teach it, you don't know it yet.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
