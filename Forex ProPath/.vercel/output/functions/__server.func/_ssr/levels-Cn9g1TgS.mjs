import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Badge } from "./badge-Bs87oRp1.mjs";
import { n as LEVELS, t as CURRICULUM } from "./curriculum-C2O4uvTU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/levels-Cn9g1TgS.js
var import_jsx_runtime = require_jsx_runtime();
function LevelsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "The 5 Levels of Forex Mastery"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-1 max-w-2xl",
				children: "Most beginners jump to buying and selling. Experts master these levels in order."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: LEVELS.map((lvl) => {
					const lessons = CURRICULUM.filter((l) => l.level === lvl.id);
					const allTerms = Array.from(new Set(lessons.flatMap((l) => l.keyTerms || [])));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5",
								style: { background: `var(--${lvl.color})` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "size-8 rounded-md flex items-center justify-center font-mono text-sm font-bold",
									style: {
										background: `color-mix(in oklab, var(--${lvl.color}) 20%, transparent)`,
										color: `var(--${lvl.color})`
									},
									children: lvl.id
								}), lvl.name]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: lvl.desc
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground mb-2",
									children: [lessons.length, " lessons in this level"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "grid sm:grid-cols-2 gap-1.5 text-sm",
									children: lessons.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs text-muted-foreground",
											children: ["D", l.day]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-clamp-1",
											children: l.title
										})]
									}, l.day))
								}),
								allTerms.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground mt-5 mb-2",
									children: "Key terms to master"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-2",
									children: allTerms.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "secondary",
										className: "font-mono text-xs",
										children: t
									}, t))
								})] })
							] })
						]
					}, lvl.id);
				})
			})
		]
	}) });
}
//#endregion
export { LevelsPage as component };
