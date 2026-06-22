import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/calculator")({
  head: () => ({ meta: [{ title: "Position Size Calculator — Forex Mastery" }] }),
  component: CalcPage,
});

const PIP_VALUE_PER_LOT: Record<string, number> = {
  "EUR/USD": 10, "GBP/USD": 10, "AUD/USD": 10, "NZD/USD": 10, "USD/CAD": 7.5,
  "USD/CHF": 11.0, "USD/JPY": 6.7, "EUR/JPY": 6.7, "GBP/JPY": 6.7,
};

function CalcPage() {
  const [account, setAccount] = useState(1000);
  const [risk, setRisk] = useState(1);
  const [slPips, setSlPips] = useState(20);
  const [pair, setPair] = useState("EUR/USD");
  const [rr, setRr] = useState(2);

  const calc = useMemo(() => {
    const riskUsd = (account * risk) / 100;
    const pipValPerLot = PIP_VALUE_PER_LOT[pair] || 10;
    const lots = +(riskUsd / (slPips * pipValPerLot)).toFixed(3);
    const units = Math.round(lots * 100000);
    const potentialWin = +(riskUsd * rr).toFixed(2);
    return { riskUsd: +riskUsd.toFixed(2), lots, units, potentialWin };
  }, [account, risk, slPips, pair, rr]);

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">Position Size Calculator</h1>
        <p className="text-muted-foreground">Size every trade in seconds. Never risk more than 1–2%.</p>

        <Card className="mt-6">
          <CardHeader><CardTitle>Inputs</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <div><Label>Account balance ($)</Label><Input type="number" value={account} onChange={(e) => setAccount(+e.target.value)} /></div>
            <div><Label>Risk per trade (%)</Label><Input type="number" step="0.1" value={risk} onChange={(e) => setRisk(+e.target.value)} /></div>
            <div><Label>Stop loss (pips)</Label><Input type="number" value={slPips} onChange={(e) => setSlPips(+e.target.value)} /></div>
            <div>
              <Label>Pair</Label>
              <Select value={pair} onValueChange={setPair}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{Object.keys(PIP_VALUE_PER_LOT).map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2"><Label>Reward : Risk target</Label><Input type="number" step="0.1" value={rr} onChange={(e) => setRr(+e.target.value)} /></div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader><CardTitle>Result</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <Out label="Risk amount" value={`$${calc.riskUsd}`} tone="bear" />
            <Out label="Position size" value={`${calc.lots} lots`} tone="primary" />
            <Out label="Units" value={calc.units.toLocaleString()} />
            <Out label={`Potential reward (1:${rr})`} value={`$${calc.potentialWin}`} tone="bull" />
          </CardContent>
        </Card>

        <p className="text-xs text-muted-foreground mt-6">
          Approximation. Pip values vary slightly with the USD quote price. Use your broker's exact figure for real trades.
        </p>
      </div>
    </AppShell>
  );
}

function Out({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-lg bg-secondary p-4">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="font-mono text-2xl font-bold mt-1" style={tone ? { color: `var(--${tone})` } : undefined}>{value}</div>
    </div>
  );
}
