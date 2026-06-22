import type { Candle } from "@/components/CandleChart";

// Deterministic OHLC sample data generators
function gen(seed: number, count: number, startPrice: number, drift: number, vol: number, startDate = "2024-01-01"): Candle[] {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const out: Candle[] = [];
  let price = startPrice;
  const start = new Date(startDate).getTime() / 1000;
  for (let i = 0; i < count; i++) {
    const open = price;
    const change = (rand() - 0.5) * vol + drift;
    const close = +(open + change).toFixed(5);
    const high = +Math.max(open, close, open + Math.abs(rand() * vol)).toFixed(5);
    const low = +Math.min(open, close, open - Math.abs(rand() * vol)).toFixed(5);
    out.push({ time: (start + i * 86400) as any, open, high, low, close });
    price = close;
  }
  return out;
}

export const SAMPLES = {
  uptrend: {
    name: "Clean Uptrend",
    desc: "Higher highs and higher lows. Trade pullbacks to support.",
    data: gen(7, 80, 1.08, 0.0006, 0.005),
    levels: [{ price: 1.085, color: "#10b981", label: "Support" }],
  },
  downtrend: {
    name: "Strong Downtrend",
    desc: "Lower highs and lower lows. Sell rallies into resistance.",
    data: gen(13, 80, 1.3, -0.0007, 0.005),
    levels: [{ price: 1.295, color: "#ef4444", label: "Resistance" }],
  },
  range: {
    name: "Consolidation / Range",
    desc: "No trend. Buy near range low, sell near range high.",
    data: gen(21, 70, 150, 0, 0.6),
    levels: [
      { price: 151.5, color: "#ef4444", label: "Range High" },
      { price: 148.5, color: "#10b981", label: "Range Low" },
    ],
  },
  breakout: {
    name: "Breakout & Retest",
    desc: "Price breaks resistance, retests, then continues up.",
    data: (() => {
      const a = gen(2, 40, 0.65, 0.0001, 0.003);
      const b = gen(5, 30, a[a.length - 1].close, 0.0008, 0.004);
      return [...a, ...b];
    })(),
    levels: [{ price: 0.659, color: "#22d3ee", label: "Broken Resistance → Support" }],
  },
  pinbar: {
    name: "Pin Bar at Support",
    desc: "Long lower wick at known support = rejection of lower prices.",
    data: (() => {
      const base = gen(33, 50, 1.25, -0.0003, 0.004);
      // inject a pin bar near support
      const last = base[base.length - 1];
      base.push({
        time: ((last.time as number) + 86400) as any,
        open: last.close,
        high: +(last.close + 0.001).toFixed(5),
        low: +(last.close - 0.012).toFixed(5),
        close: +(last.close + 0.0005).toFixed(5),
      });
      const lastP = base[base.length - 1];
      for (let i = 0; i < 10; i++) {
        const prev = base[base.length - 1];
        const open = prev.close;
        const close = +(open + 0.002 + Math.random() * 0.001).toFixed(5);
        base.push({
          time: ((prev.time as number) + 86400) as any,
          open,
          high: +(Math.max(open, close) + 0.001).toFixed(5),
          low: +(Math.min(open, close) - 0.0005).toFixed(5),
          close,
        });
      }
      void lastP;
      return base;
    })(),
    levels: [{ price: 1.235, color: "#10b981", label: "Support" }],
  },
} as const;

export type SampleKey = keyof typeof SAMPLES;
