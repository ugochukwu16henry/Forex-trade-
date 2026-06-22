import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { i as useLocalState, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
import { t as CURRICULUM } from "./curriculum-C2O4uvTU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flashcards-BSrbvDWc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FLASHCARDS = [
	{
		term: "Pip",
		definition: "The 4th decimal in most pairs (2nd in JPY pairs). Smallest standard price move."
	},
	{
		term: "Pipette",
		definition: "1/10 of a pip. The 5th decimal in most pairs."
	},
	{
		term: "Lot",
		definition: "Trade size. Standard = 100k units, Mini = 10k, Micro = 1k, Nano = 100."
	},
	{
		term: "Leverage",
		definition: "Borrowed buying power. 1:100 = $1 controls $100."
	},
	{
		term: "Margin",
		definition: "The deposit your broker locks to open a leveraged position."
	},
	{
		term: "Spread",
		definition: "Difference between Bid and Ask. The broker's fee per round-trip."
	},
	{
		term: "Bid",
		definition: "The price at which you can SELL. Always lower than Ask."
	},
	{
		term: "Ask",
		definition: "The price at which you can BUY. Always higher than Bid."
	},
	{
		term: "Drawdown",
		definition: "Peak-to-trough equity decline. The cruelest math in trading."
	},
	{
		term: "Risk-Reward Ratio",
		definition: "Reward in pips ÷ Risk in pips. Pros aim for 1:2 or better."
	},
	{
		term: "Stop Loss",
		definition: "Pre-set price to exit a losing trade. Placed where your idea is wrong."
	},
	{
		term: "Take Profit",
		definition: "Pre-set price to exit a winning trade. Usually next S/R."
	},
	{
		term: "Support",
		definition: "Price level where buyers historically step in (floor)."
	},
	{
		term: "Resistance",
		definition: "Price level where sellers historically step in (ceiling)."
	},
	{
		term: "Uptrend",
		definition: "Higher highs and higher lows."
	},
	{
		term: "Downtrend",
		definition: "Lower highs and lower lows."
	},
	{
		term: "Range",
		definition: "Sideways price action with no clear trend."
	},
	{
		term: "Pin Bar",
		definition: "Tiny body + long wick. Rejection candle. Powerful at S/R only."
	},
	{
		term: "Bullish Engulfing",
		definition: "Green candle's body fully covers prior red candle. Reversal signal."
	},
	{
		term: "Bearish Engulfing",
		definition: "Red candle fully engulfs prior green candle. Reversal signal."
	},
	{
		term: "Doji",
		definition: "Open ≈ Close. Indecision. Matters mainly at S/R or after a strong move."
	},
	{
		term: "BOS",
		definition: "Break of Structure — price breaks last swing high (or low) in trend direction."
	},
	{
		term: "CHoCH",
		definition: "Change of Character — break against the trend. Early reversal signal."
	},
	{
		term: "Supply Zone",
		definition: "Rectangle area where price dropped sharply from. Sellers live there."
	},
	{
		term: "Demand Zone",
		definition: "Rectangle area where price rallied sharply from. Buyers live there."
	},
	{
		term: "Confluence",
		definition: "Multiple reasons aligning at one price — fib + S/R + candle, etc."
	},
	{
		term: "Fibonacci Retracement",
		definition: "38.2 / 50 / 61.8 / 78.6% pullback levels."
	},
	{
		term: "Breakout",
		definition: "Close beyond a key level with follow-through. Watch for fakeouts."
	},
	{
		term: "Fakeout",
		definition: "Wick beyond a level, close back inside. A trap."
	},
	{
		term: "Expectancy",
		definition: "(Win% × AvgWin) − (Loss% × AvgLoss). > 0 = profitable system."
	},
	{
		term: "Position Size",
		definition: "(Account × Risk%) ÷ (SL pips × pip value). Master before trading."
	},
	{
		term: "Revenge Trading",
		definition: "Forcing trades after a loss to 'win it back'. Career killer."
	},
	{
		term: "Backtesting",
		definition: "Applying a system to past charts to test viability (30+ trades min)."
	},
	{
		term: "Trading System",
		definition: "Written rules for setup, entry, SL, TP, risk, exit. No exceptions."
	},
	{
		term: "Correlation",
		definition: "Pairs that move together (EUR/USD & GBP/USD). Hidden leverage."
	}
];
var seen = new Set(FLASHCARDS.map((f) => f.term.toLowerCase()));
for (const l of CURRICULUM) for (const t of l.keyTerms || []) if (!seen.has(t.toLowerCase())) {
	seen.add(t.toLowerCase());
	FLASHCARDS.push({
		term: t,
		definition: l.concept
	});
}
var INTERVAL_DAYS = [
	1,
	3,
	7,
	14,
	30
];
function FlashcardsPage() {
	const [states, setStates] = useLocalState("flashcards", {});
	const [showAnswer, setShowAnswer] = (0, import_react.useState)(false);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const due = (0, import_react.useMemo)(() => {
		const now = Date.now();
		return FLASHCARDS.filter((c) => {
			const s = states[c.term];
			if (!s) return true;
			return new Date(s.dueDate).getTime() <= now;
		});
	}, [states]);
	if (due.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-12 max-w-xl mx-auto text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-6xl mb-3",
				children: "🎯"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "All caught up"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "No flashcards due right now. Come back tomorrow — spaced repetition is doing its job."
			})
		]
	}) });
	const card = due[idx % due.length];
	const grade = (g) => {
		setStates((prev) => {
			const cur = prev[card.term] || {
				term: card.term,
				ease: 2,
				intervalDays: 0,
				dueDate: (/* @__PURE__ */ new Date()).toISOString(),
				reps: 0
			};
			let reps = cur.reps;
			let intervalDays = cur.intervalDays;
			if (g === "again") {
				reps = 0;
				intervalDays = 0;
			} else {
				reps += 1;
				if (reps - 1 < INTERVAL_DAYS.length) intervalDays = INTERVAL_DAYS[reps - 1];
				else intervalDays = Math.round(intervalDays * (g === "easy" ? 2 : g === "good" ? 1.5 : 1.2));
			}
			const due = /* @__PURE__ */ new Date();
			due.setDate(due.getDate() + intervalDays);
			return {
				...prev,
				[card.term]: {
					...cur,
					reps,
					intervalDays,
					dueDate: due.toISOString()
				}
			};
		});
		setShowAnswer(false);
		setIdx((i) => i + 1);
		if (g === "again") toast("Will see this again soon");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8 max-w-2xl mx-auto",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Flashcards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-sm text-muted-foreground",
					children: [due.length, " due"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "min-h-[280px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "font-mono text-primary",
					children: card.term
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: showAnswer ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed",
					children: card.definition
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setShowAnswer(true),
					variant: "secondary",
					className: "w-full",
					children: "Show answer"
				}) })]
			}),
			showAnswer && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-4 gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => grade("again"),
						variant: "destructive",
						size: "sm",
						children: "Again"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => grade("hard"),
						variant: "secondary",
						size: "sm",
						children: "Hard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => grade("good"),
						size: "sm",
						children: "Good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => grade("easy"),
						className: "bg-bull text-white hover:bg-bull/90",
						size: "sm",
						children: "Easy"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-6 text-center",
				children: "Spaced repetition: 1 → 3 → 7 → 14 → 30 days. Recall strengthens memory."
			})
		]
	}) });
}
//#endregion
export { FlashcardsPage as component };
