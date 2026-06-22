import { useEffect, useRef } from "react";
import { createChart, CandlestickSeries, ColorType, type IChartApi, type ISeriesApi, type Time } from "lightweight-charts";

export interface Candle {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface Props {
  data: Candle[];
  height?: number;
  markers?: { time: Time; price: number; text: string; color?: string }[];
  /** horizontal price levels (support/resistance) */
  levels?: { price: number; color?: string; label?: string }[];
}

export function CandleChart({ data, height = 380, levels }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chart = createChart(ref.current, {
      height,
      width: ref.current.clientWidth || 800,
      autoSize: true,

      layout: {
        background: { type: ColorType.Solid, color: "transparent" },
        textColor: "#94a3b8",
        fontFamily: "JetBrains Mono, monospace",
      },
      grid: {
        vertLines: { color: "rgba(148, 163, 184, 0.06)" },
        horzLines: { color: "rgba(148, 163, 184, 0.06)" },
      },
      timeScale: { borderColor: "rgba(148, 163, 184, 0.15)", timeVisible: false },
      rightPriceScale: { borderColor: "rgba(148, 163, 184, 0.15)" },
      crosshair: { mode: 1 },
      localization: { locale: "en-US" },

    });
    const series = chart.addSeries(CandlestickSeries, {
      upColor: "#10b981",
      downColor: "#ef4444",
      borderUpColor: "#10b981",
      borderDownColor: "#ef4444",
      wickUpColor: "#10b981",
      wickDownColor: "#ef4444",
    });
    series.setData(data as any);
    chartRef.current = chart;
    seriesRef.current = series;

    if (levels) {
      for (const l of levels) {
        series.createPriceLine({
          price: l.price,
          color: l.color || "#22d3ee",
          lineWidth: 1,
          lineStyle: 2,
          axisLabelVisible: true,
          title: l.label || "",
        });
      }
    }

    chart.timeScale().fitContent();

    const ro = new ResizeObserver(() => {
      if (ref.current) chart.applyOptions({ width: ref.current.clientWidth });
    });
    ro.observe(ref.current);

    return () => {
      ro.disconnect();
      chart.remove();
      chartRef.current = null;
      seriesRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, height]);

  return <div ref={ref} className="w-full" />;
}
