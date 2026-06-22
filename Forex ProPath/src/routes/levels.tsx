import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { LEVELS, CURRICULUM } from "@/lib/curriculum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/levels")({
  head: () => ({ meta: [{ title: "5 Levels of Mastery — Forex" }] }),
  component: LevelsPage,
});

function LevelsPage() {
  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">The 5 Levels of Forex Mastery</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">
          Most beginners jump to buying and selling. Experts master these levels in order.
        </p>

        <div className="mt-8 space-y-5">
          {LEVELS.map((lvl) => {
            const lessons = CURRICULUM.filter((l) => l.level === lvl.id);
            const allTerms = Array.from(
              new Set(lessons.flatMap((l) => l.keyTerms || []))
            );
            return (
              <Card key={lvl.id} className="overflow-hidden">
                <div
                  className="h-1.5"
                  style={{ background: `var(--${lvl.color})` }}
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span
                      className="size-8 rounded-md flex items-center justify-center font-mono text-sm font-bold"
                      style={{
                        background: `color-mix(in oklab, var(--${lvl.color}) 20%, transparent)`,
                        color: `var(--${lvl.color})`,
                      }}
                    >
                      {lvl.id}
                    </span>
                    {lvl.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{lvl.desc}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {lessons.length} lessons in this level
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-1.5 text-sm">
                    {lessons.map((l) => (
                      <li key={l.day} className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-muted-foreground">D{l.day}</span>
                        <span className="line-clamp-1">{l.title}</span>
                      </li>
                    ))}
                  </ul>
                  {allTerms.length > 0 && (
                    <>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-5 mb-2">
                        Key terms to master
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {allTerms.map((t) => (
                          <Badge key={t} variant="secondary" className="font-mono text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
