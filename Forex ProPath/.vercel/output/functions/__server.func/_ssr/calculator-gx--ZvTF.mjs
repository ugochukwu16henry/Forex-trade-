import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { n as Label, t as Input } from "./label-Cd0C5hjZ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-6xDwQKcO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calculator-gx--ZvTF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PIP_VALUE_PER_LOT = {
	"EUR/USD": 10,
	"GBP/USD": 10,
	"AUD/USD": 10,
	"NZD/USD": 10,
	"USD/CAD": 7.5,
	"USD/CHF": 11,
	"USD/JPY": 6.7,
	"EUR/JPY": 6.7,
	"GBP/JPY": 6.7
};
function CalcPage() {
	const [account, setAccount] = (0, import_react.useState)(1e3);
	const [risk, setRisk] = (0, import_react.useState)(1);
	const [slPips, setSlPips] = (0, import_react.useState)(20);
	const [pair, setPair] = (0, import_react.useState)("EUR/USD");
	const [rr, setRr] = (0, import_react.useState)(2);
	const calc = (0, import_react.useMemo)(() => {
		const riskUsd = account * risk / 100;
		const lots = +(riskUsd / (slPips * (PIP_VALUE_PER_LOT[pair] || 10))).toFixed(3);
		const units = Math.round(lots * 1e5);
		const potentialWin = +(riskUsd * rr).toFixed(2);
		return {
			riskUsd: +riskUsd.toFixed(2),
			lots,
			units,
			potentialWin
		};
	}, [
		account,
		risk,
		slPips,
		pair,
		rr
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8 max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Position Size Calculator"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Size every trade in seconds. Never risk more than 1–2%."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Inputs" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Account balance ($)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: account,
							onChange: (e) => setAccount(+e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Risk per trade (%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							step: "0.1",
							value: risk,
							onChange: (e) => setRisk(+e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Stop loss (pips)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							value: slPips,
							onChange: (e) => setSlPips(+e.target.value)
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Pair" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: pair,
							onValueChange: setPair,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: Object.keys(PIP_VALUE_PER_LOT).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: p,
								children: p
							}, p)) })]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Reward : Risk target" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								step: "0.1",
								value: rr,
								onChange: (e) => setRr(+e.target.value)
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Result" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							label: "Risk amount",
							value: `$${calc.riskUsd}`,
							tone: "bear"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							label: "Position size",
							value: `${calc.lots} lots`,
							tone: "primary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							label: "Units",
							value: calc.units.toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Out, {
							label: `Potential reward (1:${rr})`,
							value: `$${calc.potentialWin}`,
							tone: "bull"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-6",
				children: "Approximation. Pip values vary slightly with the USD quote price. Use your broker's exact figure for real trades."
			})
		]
	}) });
}
function Out({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-secondary p-4",
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
export { CalcPage as component };
