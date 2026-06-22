import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
import { n as Ge, r as ae, t as $i } from "../_libs/lightweight-charts.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/charts-D-0-1UUs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CandleChart({ data, height = 380, levels }) {
	const ref = (0, import_react.useRef)(null);
	const chartRef = (0, import_react.useRef)(null);
	const seriesRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const chart = ae(ref.current, {
			height,
			width: ref.current.clientWidth || 800,
			autoSize: true,
			layout: {
				background: {
					type: $i.Solid,
					color: "transparent"
				},
				textColor: "#94a3b8",
				fontFamily: "JetBrains Mono, monospace"
			},
			grid: {
				vertLines: { color: "rgba(148, 163, 184, 0.06)" },
				horzLines: { color: "rgba(148, 163, 184, 0.06)" }
			},
			timeScale: {
				borderColor: "rgba(148, 163, 184, 0.15)",
				timeVisible: false
			},
			rightPriceScale: { borderColor: "rgba(148, 163, 184, 0.15)" },
			crosshair: { mode: 1 },
			localization: { locale: "en-US" }
		});
		const series = chart.addSeries(Ge, {
			upColor: "#10b981",
			downColor: "#ef4444",
			borderUpColor: "#10b981",
			borderDownColor: "#ef4444",
			wickUpColor: "#10b981",
			wickDownColor: "#ef4444"
		});
		series.setData(data);
		chartRef.current = chart;
		seriesRef.current = series;
		if (levels) for (const l of levels) series.createPriceLine({
			price: l.price,
			color: l.color || "#22d3ee",
			lineWidth: 1,
			lineStyle: 2,
			axisLabelVisible: true,
			title: l.label || ""
		});
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
	}, [data, height]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "w-full"
	});
}
function gen(seed, count, startPrice, drift, vol, startDate = "2024-01-01") {
	let s = seed;
	const rand = () => {
		s = (s * 9301 + 49297) % 233280;
		return s / 233280;
	};
	const out = [];
	let price = startPrice;
	const start = new Date(startDate).getTime() / 1e3;
	for (let i = 0; i < count; i++) {
		const open = price;
		const close = +(open + ((rand() - .5) * vol + drift)).toFixed(5);
		const high = +Math.max(open, close, open + Math.abs(rand() * vol)).toFixed(5);
		const low = +Math.min(open, close, open - Math.abs(rand() * vol)).toFixed(5);
		out.push({
			time: start + i * 86400,
			open,
			high,
			low,
			close
		});
		price = close;
	}
	return out;
}
var SAMPLES = {
	uptrend: {
		name: "Clean Uptrend",
		desc: "Higher highs and higher lows. Trade pullbacks to support.",
		data: gen(7, 80, 1.08, 6e-4, .005),
		levels: [{
			price: 1.085,
			color: "#10b981",
			label: "Support"
		}]
	},
	downtrend: {
		name: "Strong Downtrend",
		desc: "Lower highs and lower lows. Sell rallies into resistance.",
		data: gen(13, 80, 1.3, -7e-4, .005),
		levels: [{
			price: 1.295,
			color: "#ef4444",
			label: "Resistance"
		}]
	},
	range: {
		name: "Consolidation / Range",
		desc: "No trend. Buy near range low, sell near range high.",
		data: gen(21, 70, 150, 0, .6),
		levels: [{
			price: 151.5,
			color: "#ef4444",
			label: "Range High"
		}, {
			price: 148.5,
			color: "#10b981",
			label: "Range Low"
		}]
	},
	breakout: {
		name: "Breakout & Retest",
		desc: "Price breaks resistance, retests, then continues up.",
		data: (() => {
			const a = gen(2, 40, .65, 1e-4, .003);
			const b = gen(5, 30, a[a.length - 1].close, 8e-4, .004);
			return [...a, ...b];
		})(),
		levels: [{
			price: .659,
			color: "#22d3ee",
			label: "Broken Resistance → Support"
		}]
	},
	pinbar: {
		name: "Pin Bar at Support",
		desc: "Long lower wick at known support = rejection of lower prices.",
		data: (() => {
			const base = gen(33, 50, 1.25, -3e-4, .004);
			const last = base[base.length - 1];
			base.push({
				time: last.time + 86400,
				open: last.close,
				high: +(last.close + .001).toFixed(5),
				low: +(last.close - .012).toFixed(5),
				close: +(last.close + 5e-4).toFixed(5)
			});
			base[base.length - 1];
			for (let i = 0; i < 10; i++) {
				const prev = base[base.length - 1];
				const open = prev.close;
				const close = +(open + .002 + Math.random() * .001).toFixed(5);
				base.push({
					time: prev.time + 86400,
					open,
					high: +(Math.max(open, close) + .001).toFixed(5),
					low: +(Math.min(open, close) - 5e-4).toFixed(5),
					close
				});
			}
			return base;
		})(),
		levels: [{
			price: 1.235,
			color: "#10b981",
			label: "Support"
		}]
	}
};
function ChartsPage() {
	const [key, setKey] = (0, import_react.useState)("uptrend");
	const sample = SAMPLES[key];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Chart Playground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1",
				children: "Practice reading candles, trend and support/resistance on real-looking data."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: Object.keys(SAMPLES).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: key === k ? "default" : "secondary",
					size: "sm",
					onClick: () => setKey(k),
					children: SAMPLES[k].name
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: sample.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: sample.desc
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CandleChart, {
					data: sample.data,
					levels: sample.levels,
					height: 460
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Drill: Read this chart"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "text-sm text-muted-foreground space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1. What is the trend? (uptrend / downtrend / range)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2. Where would you place your nearest support and resistance lines?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3. Spot one candlestick pattern (pin bar, engulfing, doji)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "4. Where would you ENTER, place STOP LOSS, and TAKE PROFIT?" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground pt-2",
							children: "✦ Repeat across many charts — pattern recognition only comes from reps."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "Live charts (external)"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mb-3",
					children: "Real-time charting tools to use alongside this app:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.tradingview.com/chart/?symbol=FX%3AEURUSD",
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								children: "TradingView · EUR/USD"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.forexfactory.com/calendar",
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								children: "Forex Factory Calendar"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.investing.com/economic-calendar/",
							target: "_blank",
							rel: "noreferrer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								children: "Investing.com Calendar"
							})
						})
					]
				})] })]
			})
		]
	}) });
}
//#endregion
export { ChartsPage as component };
