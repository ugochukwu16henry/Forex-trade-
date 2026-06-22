import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { CandleChart } from "@/components/CandleChart";
import { SAMPLES, type SampleKey } from "@/lib/sample-charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Route = createFileRoute("/charts")({
  head: () => ({ meta: [{ title: "Chart Playground — Forex Mastery" }] }),
  component: ChartsPage,
});

function ChartsPage() {
  const [key, setKey] = useState<SampleKey>("uptrend");
  const sample = SAMPLES[key];

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Chart Playground</h1>
        <p className="text-muted-foreground mt-1">
          Practice reading candles, trend and support/resistance on real-looking data.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(Object.keys(SAMPLES) as SampleKey[]).map((k) => (
            <Button
              key={k}
              variant={key === k ? "default" : "secondary"}
              size="sm"
              onClick={() => setKey(k)}
            >
              {SAMPLES[k].name}
            </Button>
          ))}
        </div>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle>{sample.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{sample.desc}</p>
          </CardHeader>
          <CardContent>
            <CandleChart data={sample.data as any} levels={sample.levels as any} height={460} />
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Drill: Read this chart</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>1. What is the trend? (uptrend / downtrend / range)</p>
            <p>2. Where would you place your nearest support and resistance lines?</p>
            <p>3. Spot one candlestick pattern (pin bar, engulfing, doji).</p>
            <p>4. Where would you ENTER, place STOP LOSS, and TAKE PROFIT?</p>
            <p className="text-foreground pt-2">
              ✦ Repeat across many charts — pattern recognition only comes from reps.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Live charts (external)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
              Real-time charting tools to use alongside this app:
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://www.tradingview.com/chart/?symbol=FX%3AEURUSD" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">TradingView · EUR/USD</Button>
              </a>
              <a href="https://www.forexfactory.com/calendar" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">Forex Factory Calendar</Button>
              </a>
              <a href="https://www.investing.com/economic-calendar/" target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">Investing.com Calendar</Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
