import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Badge } from "./badge-Bs87oRp1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/books-5xWXCXPS.js
var import_jsx_runtime = require_jsx_runtime();
var BOOKS = [
	{
		title: "Trading in the Zone",
		author: "Mark Douglas",
		topic: "Trading Psychology",
		blurb: "The bible of trading psychology. Teaches probabilistic thinking — every trade outcome is random; only over hundreds of trades does edge show. Read 3x.",
		color: "primary"
	},
	{
		title: "The Disciplined Trader",
		author: "Mark Douglas",
		topic: "Emotional Control",
		blurb: "Mark Douglas's earlier work. Identifies the mental habits that destroy traders and shows how to rebuild them with discipline.",
		color: "warn"
	},
	{
		title: "Japanese Candlestick Charting Techniques",
		author: "Steve Nison",
		topic: "Candlestick Mastery",
		blurb: "The book that brought candlesticks to the West. Every reversal and continuation pattern, with hundreds of chart examples.",
		color: "bull"
	},
	{
		title: "Technical Analysis of the Financial Markets",
		author: "John J. Murphy",
		topic: "Technical Analysis Foundation",
		blurb: "The definitive textbook. Covers trend, support/resistance, indicators, intermarket analysis, Elliott waves. Reference for life.",
		color: "cyan-glow"
	}
];
function BooksPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Recommended Reading"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 max-w-2xl",
				children: "The four books every serious forex trader should own. Read slowly, take notes, apply."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid md:grid-cols-2 gap-4",
				children: BOOKS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5",
							style: { background: `var(--${b.color})` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: b.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm text-muted-foreground mt-0.5",
								children: ["by ", b.author]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								children: b.topic
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed",
							children: b.blurb
						}) })
					]
				}, b.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground mt-6 text-center",
				children: "Tip: Read 1 chapter per week and journal the takeaways using the Feynman technique."
			})
		]
	}) });
}
//#endregion
export { BooksPage as component };
