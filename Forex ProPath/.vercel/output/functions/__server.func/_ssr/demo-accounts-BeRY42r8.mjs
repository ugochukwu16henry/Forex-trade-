import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { v as ExternalLink, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as useLocalState, r as initialProgress, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Badge } from "./badge-Bs87oRp1.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-accounts-BeRY42r8.js
var import_jsx_runtime = require_jsx_runtime();
var BROKERS = [
	{
		name: "OANDA",
		url: "https://www.oanda.com/apply/demo/",
		primary: true,
		pros: [
			"Beginner-friendly",
			"No min deposit",
			"Great mobile app",
			"Regulated (US/UK/AU)"
		],
		cons: ["Slightly higher spreads than ECN brokers"],
		blurb: "The recommended starting point. Clean platform, instant demo signup."
	},
	{
		name: "IG",
		url: "https://www.ig.com/en/demo-account",
		pros: [
			"FCA / ASIC regulated",
			"Solid charting",
			"Wide market access"
		],
		cons: ["Platform feels older"],
		blurb: "Global heavyweight with a polished demo."
	},
	{
		name: "Pepperstone",
		url: "https://pepperstone.com/en/trading-accounts/demo/",
		pros: [
			"Tight spreads",
			"MT4 / MT5 / cTrader",
			"Fast execution"
		],
		cons: ["More features can overwhelm beginners"],
		blurb: "Great if you want to learn MetaTrader from day one."
	},
	{
		name: "Forex.com",
		url: "https://www.forex.com/en-us/account-types/demo-account/",
		pros: [
			"US-regulated",
			"MT4/MT5 support",
			"Mature platform"
		],
		cons: ["Spreads vary by account type"],
		blurb: "Long-standing US broker."
	},
	{
		name: "IC Markets",
		url: "https://www.icmarkets.com/global/en/open-trading-account/demo",
		pros: [
			"Razor-tight spreads",
			"Multiple platforms",
			"Strong execution"
		],
		cons: ["Mainly aimed at active traders"],
		blurb: "ECN-style broker popular with day traders."
	},
	{
		name: "FXCM",
		url: "https://www.fxcm.com/markets/forex-trading-demo/",
		pros: [
			"TradingView integration",
			"Solid education",
			"MT4 / Trading Station"
		],
		cons: ["Not available to US retail"],
		blurb: "Strong educational ecosystem alongside trading."
	}
];
function DemoPage() {
	const [progress] = useLocalState("progress", initialProgress);
	const readiness = (() => {
		const day = progress.currentDay;
		if (day < 7) return {
			ok: false,
			msg: "Finish Week 1 (Foundations) first — at least Day 7."
		};
		if (day < 27) return {
			ok: false,
			msg: "Recommended on Day 27 of the roadmap."
		};
		return {
			ok: true,
			msg: "You're ready — open a demo today."
		};
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Open a Demo Account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 max-w-2xl",
				children: "Practice with virtual money — same platforms, real prices, zero risk. Demo first is non-negotiable."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mt-6 border-primary/40 bg-primary/5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "p-4 flex items-center gap-3",
					children: [readiness.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-6 text-bull shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-6 rounded-full border-2 border-warn shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: readiness.ok ? "Ready to open a demo" : "Not quite yet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: readiness.msg
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid md:grid-cols-2 gap-4",
				children: BROKERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: b.primary ? "border-primary glow-primary" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.name }), b.primary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Recommended" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: b.blurb
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-bull font-mono uppercase tracking-widest mb-1",
									children: "Pros"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-0.5",
									children: b.pros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", p] }, p))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-bear font-mono uppercase tracking-widest mb-1",
									children: "Cons"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-0.5",
									children: b.cons.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["– ", p] }, p))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: b.url,
								target: "_blank",
								rel: "noreferrer",
								className: "block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									className: "w-full gap-2",
									variant: b.primary ? "default" : "secondary",
									children: [
										"Open ",
										b.name,
										" Demo ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
									]
								})
							})
						]
					})]
				}, b.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
					className: "text-base",
					children: "After signing up"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "text-sm text-muted-foreground space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "1. Set your demo balance to what you'd realistically deposit live ($500–$2,000)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"2. Use the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Risk Calculator"
							}),
							" for every trade."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"3. Log EVERY trade in your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Journal"
							}),
							"."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "4. Trade demo for 2+ months profitably before going live." })
					]
				})]
			})
		]
	}) });
}
//#endregion
export { DemoPage as component };
