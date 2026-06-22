import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { useLocalState, initialProgress, type ProgressState } from "@/lib/storage";

export const Route = createFileRoute("/demo-accounts")({
  head: () => ({ meta: [{ title: "Demo Account Brokers — Forex Mastery" }] }),
  component: DemoPage,
});

const BROKERS = [
  {
    name: "OANDA",
    url: "https://www.oanda.com/apply/demo/",
    primary: true,
    pros: ["Beginner-friendly", "No min deposit", "Great mobile app", "Regulated (US/UK/AU)"],
    cons: ["Slightly higher spreads than ECN brokers"],
    blurb: "The recommended starting point. Clean platform, instant demo signup.",
  },
  {
    name: "IG",
    url: "https://www.ig.com/en/demo-account",
    pros: ["FCA / ASIC regulated", "Solid charting", "Wide market access"],
    cons: ["Platform feels older"],
    blurb: "Global heavyweight with a polished demo.",
  },
  {
    name: "Pepperstone",
    url: "https://pepperstone.com/en/trading-accounts/demo/",
    pros: ["Tight spreads", "MT4 / MT5 / cTrader", "Fast execution"],
    cons: ["More features can overwhelm beginners"],
    blurb: "Great if you want to learn MetaTrader from day one.",
  },
  {
    name: "Forex.com",
    url: "https://www.forex.com/en-us/account-types/demo-account/",
    pros: ["US-regulated", "MT4/MT5 support", "Mature platform"],
    cons: ["Spreads vary by account type"],
    blurb: "Long-standing US broker.",
  },
  {
    name: "IC Markets",
    url: "https://www.icmarkets.com/global/en/open-trading-account/demo",
    pros: ["Razor-tight spreads", "Multiple platforms", "Strong execution"],
    cons: ["Mainly aimed at active traders"],
    blurb: "ECN-style broker popular with day traders.",
  },
  {
    name: "FXCM",
    url: "https://www.fxcm.com/markets/forex-trading-demo/",
    pros: ["TradingView integration", "Solid education", "MT4 / Trading Station"],
    cons: ["Not available to US retail"],
    blurb: "Strong educational ecosystem alongside trading.",
  },
];

function DemoPage() {
  const [progress] = useLocalState<ProgressState>("progress", initialProgress);
  const readiness = (() => {
    const day = progress.currentDay;
    if (day < 7) return { ok: false, msg: "Finish Week 1 (Foundations) first — at least Day 7." };
    if (day < 27) return { ok: false, msg: "Recommended on Day 27 of the roadmap." };
    return { ok: true, msg: "You're ready — open a demo today." };
  })();

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Open a Demo Account</h1>
        <p className="text-muted-foreground mt-1 max-w-2xl">
          Practice with virtual money — same platforms, real prices, zero risk. Demo first is non-negotiable.
        </p>

        <Card className="mt-6 border-primary/40 bg-primary/5">
          <CardContent className="p-4 flex items-center gap-3">
            {readiness.ok ? (
              <CheckCircle2 className="size-6 text-bull shrink-0" />
            ) : (
              <div className="size-6 rounded-full border-2 border-warn shrink-0" />
            )}
            <div>
              <div className="font-semibold">
                {readiness.ok ? "Ready to open a demo" : "Not quite yet"}
              </div>
              <div className="text-sm text-muted-foreground">{readiness.msg}</div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {BROKERS.map((b) => (
            <Card key={b.name} className={b.primary ? "border-primary glow-primary" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{b.name}</span>
                  {b.primary && <Badge>Recommended</Badge>}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{b.blurb}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-xs">
                  <div className="text-bull font-mono uppercase tracking-widest mb-1">Pros</div>
                  <ul className="space-y-0.5">
                    {b.pros.map((p) => <li key={p}>✓ {p}</li>)}
                  </ul>
                </div>
                <div className="text-xs">
                  <div className="text-bear font-mono uppercase tracking-widest mb-1">Cons</div>
                  <ul className="space-y-0.5">
                    {b.cons.map((p) => <li key={p}>– {p}</li>)}
                  </ul>
                </div>
                <a href={b.url} target="_blank" rel="noreferrer" className="block">
                  <Button className="w-full gap-2" variant={b.primary ? "default" : "secondary"}>
                    Open {b.name} Demo <ExternalLink className="size-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader><CardTitle className="text-base">After signing up</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>1. Set your demo balance to what you'd realistically deposit live ($500–$2,000).</p>
            <p>2. Use the <strong className="text-foreground">Risk Calculator</strong> for every trade.</p>
            <p>3. Log EVERY trade in your <strong className="text-foreground">Journal</strong>.</p>
            <p>4. Trade demo for 2+ months profitably before going live.</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
