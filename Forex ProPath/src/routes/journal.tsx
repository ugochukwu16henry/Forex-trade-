import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { useLocalState, type Trade } from "@/lib/storage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Trash2, Plus } from "lucide-react";

export const Route = createFileRoute("/journal")({
  head: () => ({ meta: [{ title: "Trading Journal — Forex Mastery" }] }),
  component: JournalPage,
});

const PAIRS = ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD", "USD/CAD", "GBP/JPY", "EUR/JPY", "NZD/USD"];

function JournalPage() {
  const [trades, setTrades] = useLocalState<Trade[]>("trades", []);
  const [form, setForm] = useState<Partial<Trade>>({
    pair: "EUR/USD",
    direction: "long",
    date: new Date().toISOString().slice(0, 10),
  });

  const addTrade = () => {
    if (!form.entry || !form.sl || !form.tp || !form.lots) {
      toast.error("Fill entry, SL, TP, lots");
      return;
    }
    const entry = Number(form.entry), sl = Number(form.sl), tp = Number(form.tp);
    const risk = Math.abs(entry - sl);
    const reward = Math.abs(tp - entry);
    const rr = +(reward / risk).toFixed(2);
    const t: Trade = {
      id: crypto.randomUUID(),
      date: form.date || new Date().toISOString().slice(0, 10),
      pair: form.pair || "EUR/USD",
      direction: (form.direction as any) || "long",
      entry,
      sl,
      tp,
      lots: Number(form.lots),
      result: "open",
      rr,
      reason: form.reason,
      emotion: form.emotion,
    };
    setTrades((prev) => [t, ...prev]);
    setForm({ pair: "EUR/USD", direction: "long", date: new Date().toISOString().slice(0, 10) });
    toast.success("Trade logged");
  };

  const setResult = (id: string, result: Trade["result"]) => {
    setTrades((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        let pnl = 0;
        if (result === "win") pnl = +(Math.abs(t.tp - t.entry) * t.lots * 10000).toFixed(2);
        if (result === "loss") pnl = -+(Math.abs(t.entry - t.sl) * t.lots * 10000).toFixed(2);
        return { ...t, result, pnl };
      })
    );
  };

  const remove = (id: string) => setTrades((prev) => prev.filter((t) => t.id !== id));

  const stats = useMemo(() => {
    const closed = trades.filter((t) => t.result && t.result !== "open");
    const wins = closed.filter((t) => t.result === "win");
    const losses = closed.filter((t) => t.result === "loss");
    const totalPnl = closed.reduce((a, t) => a + (t.pnl || 0), 0);
    const winRate = closed.length ? (wins.length / closed.length) * 100 : 0;
    const avgWin = wins.length ? wins.reduce((a, t) => a + (t.pnl || 0), 0) / wins.length : 0;
    const avgLoss = losses.length ? Math.abs(losses.reduce((a, t) => a + (t.pnl || 0), 0) / losses.length) : 0;
    const expectancy = closed.length
      ? (winRate / 100) * avgWin - (1 - winRate / 100) * avgLoss
      : 0;
    return { total: trades.length, closed: closed.length, wins: wins.length, losses: losses.length, winRate, avgWin, avgLoss, totalPnl, expectancy };
  }, [trades]);

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8">
        <h1 className="text-3xl md:text-4xl font-bold">Trading Journal</h1>
        <p className="text-muted-foreground">Log every trade. Process &gt; outcome.</p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Total Trades" value={stats.total.toString()} />
          <Stat label="Win Rate" value={`${stats.winRate.toFixed(1)}%`} tone={stats.winRate >= 50 ? "bull" : "bear"} />
          <Stat label="Net P&L" value={`$${stats.totalPnl.toFixed(2)}`} tone={stats.totalPnl >= 0 ? "bull" : "bear"} />
          <Stat label="Expectancy / trade" value={`$${stats.expectancy.toFixed(2)}`} tone={stats.expectancy >= 0 ? "bull" : "bear"} />
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader><CardTitle>New Trade</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label className="text-xs">Pair</Label>
                  <Select value={form.pair} onValueChange={(v) => setForm({ ...form, pair: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{PAIRS.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs">Direction</Label>
                  <Select value={form.direction} onValueChange={(v) => setForm({ ...form, direction: v as any })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="long">Long</SelectItem>
                      <SelectItem value="short">Short</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div><Label className="text-xs">Entry</Label><Input type="number" step="0.00001" value={form.entry || ""} onChange={(e) => setForm({ ...form, entry: +e.target.value })} /></div>
                <div><Label className="text-xs">Stop Loss</Label><Input type="number" step="0.00001" value={form.sl || ""} onChange={(e) => setForm({ ...form, sl: +e.target.value })} /></div>
                <div><Label className="text-xs">Take Profit</Label><Input type="number" step="0.00001" value={form.tp || ""} onChange={(e) => setForm({ ...form, tp: +e.target.value })} /></div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div><Label className="text-xs">Lots</Label><Input type="number" step="0.01" value={form.lots || ""} onChange={(e) => setForm({ ...form, lots: +e.target.value })} /></div>
                <div><Label className="text-xs">Date</Label><Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div>
              </div>
              <div><Label className="text-xs">Reason for entry</Label><Textarea rows={2} value={form.reason || ""} onChange={(e) => setForm({ ...form, reason: e.target.value })} /></div>
              <div><Label className="text-xs">Emotion / mindset</Label><Input value={form.emotion || ""} onChange={(e) => setForm({ ...form, emotion: e.target.value })} /></div>
              <Button onClick={addTrade} className="w-full"><Plus className="size-4" /> Log Trade</Button>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>All Trades</CardTitle></CardHeader>
            <CardContent>
              {trades.length === 0 ? (
                <p className="text-muted-foreground text-sm">No trades yet. Start logging on demo first.</p>
              ) : (
                <div className="space-y-2 max-h-[600px] overflow-y-auto">
                  {trades.map((t) => (
                    <div key={t.id} className="rounded-lg border border-border p-3">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold">{t.pair}</span>
                          <Badge variant={t.direction === "long" ? "default" : "destructive"}>{t.direction.toUpperCase()}</Badge>
                          <span className="text-xs text-muted-foreground font-mono">{t.date}</span>
                          {t.rr && <Badge variant="outline" className="font-mono">1:{t.rr}</Badge>}
                        </div>
                        <div className="flex items-center gap-2">
                          {t.result === "open" ? (
                            <>
                              <Button size="sm" variant="ghost" className="h-7 text-bull" onClick={() => setResult(t.id, "win")}>Win</Button>
                              <Button size="sm" variant="ghost" className="h-7 text-bear" onClick={() => setResult(t.id, "loss")}>Loss</Button>
                              <Button size="sm" variant="ghost" className="h-7" onClick={() => setResult(t.id, "be")}>BE</Button>
                            </>
                          ) : (
                            <Badge className={t.result === "win" ? "bg-bull" : t.result === "loss" ? "bg-bear" : ""}>
                              {t.result?.toUpperCase()} {t.pnl != null && `· $${t.pnl}`}
                            </Badge>
                          )}
                          <Button size="sm" variant="ghost" onClick={() => remove(t.id)}><Trash2 className="size-4" /></Button>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-muted-foreground mt-1">
                        Entry {t.entry} · SL {t.sl} · TP {t.tp} · {t.lots} lots
                      </div>
                      {t.reason && <div className="text-xs mt-1"><span className="text-muted-foreground">Why:</span> {t.reason}</div>}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "bull" | "bear" }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div
        className="font-mono text-2xl font-bold mt-1"
        style={tone ? { color: `var(--${tone})` } : undefined}
      >
        {value}
      </div>
    </div>
  );
}
