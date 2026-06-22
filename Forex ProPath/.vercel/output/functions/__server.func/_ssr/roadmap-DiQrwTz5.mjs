import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { b as Circle, p as Lock, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as useLocalState, r as initialProgress, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { n as LEVELS, t as CURRICULUM } from "./curriculum-C2O4uvTU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/roadmap-DiQrwTz5.js
var import_jsx_runtime = require_jsx_runtime();
function RoadmapPage() {
	const [progress, setProgress] = useLocalState("progress", initialProgress);
	const byMonth = [
		1,
		2,
		3
	].map((m) => CURRICULUM.filter((l) => l.month === m));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "90-Day Roadmap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1",
				children: "One focused 30-min session per day. Click any unlocked day to jump in."
			}),
			byMonth.map((days, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-3 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-xl font-bold",
						children: ["Month ", idx + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs text-muted-foreground uppercase tracking-widest",
						children: [
							idx === 0 && "Foundations + Candlesticks",
							idx === 1 && "Technical Analysis + Demo",
							idx === 2 && "Risk · Psychology · Backtest · Journal"
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3",
					children: days.map((l) => {
						const done = !!progress.days[l.day]?.completedAt;
						const unlocked = l.day <= progress.currentDay;
						const level = LEVELS.find((x) => x.id === l.level);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => {
								if (unlocked) setProgress((p) => ({
									...p,
									currentDay: l.day
								}));
							},
							disabled: !unlocked,
							className: `text-left rounded-xl border p-3 transition-all relative ${done ? "border-bull/50 bg-bull/5 hover:bg-bull/10" : unlocked ? "border-primary/40 bg-card hover:border-primary glow-primary" : "border-border bg-card/40 opacity-50 cursor-not-allowed"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: ["D", l.day]
									}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-bull" }) : unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "size-4 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3 text-muted-foreground" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs font-semibold line-clamp-2 leading-tight min-h-[2.4em]",
									children: l.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-[9px] font-mono uppercase tracking-wider",
									style: { color: `var(--${level.color})` },
									children: ["Lv ", level.id]
								})
							]
						}, l.day);
					})
				})]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-primary hover:underline",
					children: "← Back to today's session"
				})
			})
		]
	}) });
}
//#endregion
export { RoadmapPage as component };
