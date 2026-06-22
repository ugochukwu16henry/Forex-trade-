import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { o as Plus, r as Trash2 } from "../_libs/lucide-react.mjs";
import { i as useLocalState, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Badge } from "./badge-Bs87oRp1.mjs";
import { n as Label, t as Input } from "./label-Cd0C5hjZ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-6xDwQKcO.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-Cr2ATv-x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-CXxWQRJp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAIRS = [
	"EUR/USD",
	"GBP/USD",
	"USD/JPY",
	"AUD/USD",
	"USD/CAD",
	"GBP/JPY",
	"EUR/JPY",
	"NZD/USD"
];
function JournalPage() {
	const [trades, setTrades] = useLocalState("trades", []);
	const [form, setForm] = (0, import_react.useState)({
		pair: "EUR/USD",
		direction: "long",
		date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
	});
	const addTrade = () => {
		if (!form.entry || !form.sl || !form.tp || !form.lots) {
			toast.error("Fill entry, SL, TP, lots");
			return;
		}
		const entry = Number(form.entry), sl = Number(form.sl), tp = Number(form.tp);
		const risk = Math.abs(entry - sl);
		const rr = +(Math.abs(tp - entry) / risk).toFixed(2);
		const t = {
			id: crypto.randomUUID(),
			date: form.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
			pair: form.pair || "EUR/USD",
			direction: form.direction || "long",
			entry,
			sl,
			tp,
			lots: Number(form.lots),
			result: "open",
			rr,
			reason: form.reason,
			emotion: form.emotion
		};
		setTrades((prev) => [t, ...prev]);
		setForm({
			pair: "EUR/USD",
			direction: "long",
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		});
		toast.success("Trade logged");
	};
	const setResult = (id, result) => {
		setTrades((prev) => prev.map((t) => {
			if (t.id !== id) return t;
			let pnl = 0;
			if (result === "win") pnl = +(Math.abs(t.tp - t.entry) * t.lots * 1e4).toFixed(2);
			if (result === "loss") pnl = -+(Math.abs(t.entry - t.sl) * t.lots * 1e4).toFixed(2);
			return {
				...t,
				result,
				pnl
			};
		}));
	};
	const remove = (id) => setTrades((prev) => prev.filter((t) => t.id !== id));
	const stats = (0, import_react.useMemo)(() => {
		const closed = trades.filter((t) => t.result && t.result !== "open");
		const wins = closed.filter((t) => t.result === "win");
		const losses = closed.filter((t) => t.result === "loss");
		const totalPnl = closed.reduce((a, t) => a + (t.pnl || 0), 0);
		const winRate = closed.length ? wins.length / closed.length * 100 : 0;
		const avgWin = wins.length ? wins.reduce((a, t) => a + (t.pnl || 0), 0) / wins.length : 0;
		const avgLoss = losses.length ? Math.abs(losses.reduce((a, t) => a + (t.pnl || 0), 0) / losses.length) : 0;
		const expectancy = closed.length ? winRate / 100 * avgWin - (1 - winRate / 100) * avgLoss : 0;
		return {
			total: trades.length,
			closed: closed.length,
			wins: wins.length,
			losses: losses.length,
			winRate,
			avgWin,
			avgLoss,
			totalPnl,
			expectancy
		};
	}, [trades]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Trading Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Log every trade. Process > outcome."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total Trades",
						value: stats.total.toString()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Win Rate",
						value: `${stats.winRate.toFixed(1)}%`,
						tone: stats.winRate >= 50 ? "bull" : "bear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Net P&L",
						value: `$${stats.totalPnl.toFixed(2)}`,
						tone: stats.totalPnl >= 0 ? "bull" : "bear"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Expectancy / trade",
						value: `$${stats.expectancy.toFixed(2)}`,
						tone: stats.expectancy >= 0 ? "bull" : "bear"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "New Trade" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Pair"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: form.pair,
									onValueChange: (v) => setForm({
										...form,
										pair: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PAIRS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: p,
										children: p
									}, p)) })]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Direction"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: form.direction,
									onValueChange: (v) => setForm({
										...form,
										direction: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "long",
										children: "Long"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "short",
										children: "Short"
									})] })]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs",
										children: "Entry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										step: "0.00001",
										value: form.entry || "",
										onChange: (e) => setForm({
											...form,
											entry: +e.target.value
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs",
										children: "Stop Loss"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										step: "0.00001",
										value: form.sl || "",
										onChange: (e) => setForm({
											...form,
											sl: +e.target.value
										})
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs",
										children: "Take Profit"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										type: "number",
										step: "0.00001",
										value: form.tp || "",
										onChange: (e) => setForm({
											...form,
											tp: +e.target.value
										})
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Lots"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									step: "0.01",
									value: form.lots || "",
									onChange: (e) => setForm({
										...form,
										lots: +e.target.value
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs",
									children: "Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: form.date,
									onChange: (e) => setForm({
										...form,
										date: e.target.value
									})
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs",
								children: "Reason for entry"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								rows: 2,
								value: form.reason || "",
								onChange: (e) => setForm({
									...form,
									reason: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-xs",
								children: "Emotion / mindset"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.emotion || "",
								onChange: (e) => setForm({
									...form,
									emotion: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: addTrade,
								className: "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Log Trade"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "All Trades" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: trades.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-sm",
						children: "No trades yet. Start logging on demo first."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 max-h-[600px] overflow-y-auto",
						children: trades.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono font-bold",
												children: t.pair
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: t.direction === "long" ? "default" : "destructive",
												children: t.direction.toUpperCase()
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground font-mono",
												children: t.date
											}),
											t.rr && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
												variant: "outline",
												className: "font-mono",
												children: ["1:", t.rr]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [t.result === "open" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-7 text-bull",
												onClick: () => setResult(t.id, "win"),
												children: "Win"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-7 text-bear",
												onClick: () => setResult(t.id, "loss"),
												children: "Loss"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												size: "sm",
												variant: "ghost",
												className: "h-7",
												onClick: () => setResult(t.id, "be"),
												children: "BE"
											})
										] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											className: t.result === "win" ? "bg-bull" : t.result === "loss" ? "bg-bear" : "",
											children: [
												t.result?.toUpperCase(),
												" ",
												t.pnl != null && `· $${t.pnl}`
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "sm",
											variant: "ghost",
											onClick: () => remove(t.id),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-xs text-muted-foreground mt-1",
									children: [
										"Entry ",
										t.entry,
										" · SL ",
										t.sl,
										" · TP ",
										t.tp,
										" · ",
										t.lots,
										" lots"
									]
								}),
								t.reason && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Why:"
										}),
										" ",
										t.reason
									]
								})
							]
						}, t.id))
					}) })]
				})]
			})
		]
	}) });
}
function Stat({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-2xl font-bold mt-1",
			style: tone ? { color: `var(--${tone})` } : void 0,
			children: value
		})]
	});
}
//#endregion
export { JournalPage as component };
