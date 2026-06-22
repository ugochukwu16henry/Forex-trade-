import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/books")({
  head: () => ({ meta: [{ title: "Recommended Books — Forex Mastery" }] }),
  component: BooksPage,
});

const BOOKS = [
  {
    title: "Trading in the Zone",
    author: "Mark Douglas",
    topic: "Trading Psychology",
    blurb: "The bible of trading psychology. Teaches probabilistic thinking — every trade outcome is random; only over hundreds of trades does edge show. Read 3x.",
    color: "primary",
  },
  {
    title: "The Disciplined Trader",
    author: "Mark Douglas",
    topic: "Emotional Control",
    blurb: "Mark Douglas's earlier work. Identifies the mental habits that destroy traders and shows how to rebuild them with discipline.",
    color: "warn",
  },
  {
    title: "Japanese Candlestick Charting Techniques",
    author: "Steve Nison",
    topic: "Candlestick Mastery",
    blurb: "The book that brought candlesticks to the West. Every reversal and continuation pattern, with hundreds of chart examples.",
    color: "bull",
  },
  {
    title: "Technical Analysis of the Financial Markets",
    author: "John J. Murphy",
    topic: "Technical Analysis Foundation",
    blurb: "The definitive textbook. Covers trend, support/resistance, indicators, intermarket analysis, Elliott waves. Reference for life.",
    color: "cyan-glow",
  },
];

function BooksPage() {
  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Recommended Reading</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">
          The four books every serious forex trader should own. Read slowly, take notes, apply.
        </p>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {BOOKS.map((b) => (
            <Card key={b.title} className="overflow-hidden">
              <div className="h-1.5" style={{ background: `var(--${b.color})` }} />
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle>{b.title}</CardTitle>
                    <div className="text-sm text-muted-foreground mt-0.5">by {b.author}</div>
                  </div>
                  <Badge variant="outline">{b.topic}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{b.blurb}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          Tip: Read 1 chapter per week and journal the takeaways using the Feynman technique.
        </p>
      </div>
    </AppShell>
  );
}
