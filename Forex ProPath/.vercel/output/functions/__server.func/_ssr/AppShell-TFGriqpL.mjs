import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as Link, i as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as Calculator, E as ChartCandlestick, O as Brain, _ as Flame, d as Map, g as Layers, h as LayoutDashboard, i as Settings, k as BookOpen, m as Library, t as Wallet } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-TFGriqpL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PREFIX = "forex_mastery_v1_";
function loadJSON(key, fallback) {
	if (typeof window === "undefined") return fallback;
	try {
		const raw = localStorage.getItem(PREFIX + key);
		if (!raw) return fallback;
		return JSON.parse(raw);
	} catch {
		return fallback;
	}
}
function saveJSON(key, value) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(PREFIX + key, JSON.stringify(value));
	} catch {}
}
function useLocalState(key, initial) {
	const [state, setState] = (0, import_react.useState)(initial);
	(0, import_react.useEffect)(() => {
		setState(loadJSON(key, initial));
	}, []);
	return [state, (0, import_react.useCallback)((v) => {
		setState((prev) => {
			const next = typeof v === "function" ? v(prev) : v;
			saveJSON(key, next);
			return next;
		});
	}, [key])];
}
var initialProgress = {
	startedAt: (/* @__PURE__ */ new Date()).toISOString(),
	currentDay: 1,
	days: {},
	streak: 0
};
var defaultSettings = {
	email: "",
	reminderTime: "08:00",
	browserNotif: false,
	emailNotif: false
};
var NAV = [
	{
		to: "/",
		label: "Today",
		icon: LayoutDashboard
	},
	{
		to: "/roadmap",
		label: "90-Day Roadmap",
		icon: Map
	},
	{
		to: "/levels",
		label: "5 Levels",
		icon: Layers
	},
	{
		to: "/charts",
		label: "Charts",
		icon: ChartCandlestick
	},
	{
		to: "/flashcards",
		label: "Flashcards",
		icon: Brain
	},
	{
		to: "/journal",
		label: "Journal",
		icon: BookOpen
	},
	{
		to: "/calculator",
		label: "Risk Calc",
		icon: Calculator
	},
	{
		to: "/demo-accounts",
		label: "Demo Brokers",
		icon: Wallet
	},
	{
		to: "/books",
		label: "Books",
		icon: Library
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [progress] = useLocalState("progress", initialProgress);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.add("dark");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hidden md:flex w-64 flex-col border-r border-border bg-sidebar sticky top-0 h-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-5 border-b border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-9 rounded-lg bg-gradient-to-br from-primary to-cyan-glow flex items-center justify-center font-display font-bold text-primary-foreground glow-primary",
								children: "FX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold text-base leading-tight",
								children: "Forex Mastery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: "90-Day Pro Track"
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 p-3 space-y-1 overflow-y-auto",
						children: NAV.map((item) => {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-lg bg-card p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: "Streak"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-2xl font-bold text-warn",
								children: [progress.streak, "d"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-7 text-warn" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 text-[10px] text-muted-foreground text-center",
							children: [
								"Day",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-foreground",
									children: Math.min(progress.currentDay, 90)
								}),
								" ",
								"of 90"
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:hidden fixed top-0 inset-x-0 z-50 border-b border-border bg-sidebar/95 backdrop-blur px-3 py-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "size-8 rounded-md bg-gradient-to-br from-primary to-cyan-glow flex items-center justify-center font-display font-bold text-xs text-primary-foreground",
						children: "FX"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display font-bold",
						children: "Forex Mastery"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 font-mono text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "size-3 text-warn" }),
						progress.streak,
						"d"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-sidebar/95 backdrop-blur flex overflow-x-auto",
				children: NAV.slice(0, 6).map((item) => {
					const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: `flex-1 min-w-[64px] flex flex-col items-center gap-1 py-2 text-[10px] ${active ? "text-primary" : "text-muted-foreground"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), item.label]
					}, item.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 min-w-0 pt-14 pb-20 md:pt-0 md:pb-0",
				children
			})
		]
	});
}
//#endregion
export { useLocalState as i, defaultSettings as n, initialProgress as r, AppShell as t };
