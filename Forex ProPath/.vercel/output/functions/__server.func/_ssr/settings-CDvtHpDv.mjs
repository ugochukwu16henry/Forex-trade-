import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { A as Bell, f as Mail, j as BellRing, n as Upload, y as Download } from "../_libs/lucide-react.mjs";
import { i as useLocalState, n as defaultSettings, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { a as cn, i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { n as Label, t as Input } from "./label-Cd0C5hjZ.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Thumb, t as Root } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CDvtHpDv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Root.displayName;
function SettingsPage() {
	const [settings, setSettings] = useLocalState("settings", defaultSettings);
	const [permission, setPermission] = (0, import_react.useState)("default");
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined" && "Notification" in window) setPermission(Notification.permission);
	}, []);
	const requestNotif = async () => {
		if (!("Notification" in window)) {
			toast.error("Browser notifications are not supported here");
			return;
		}
		const res = await Notification.requestPermission();
		setPermission(res);
		if (res === "granted") {
			setSettings({
				...settings,
				browserNotif: true
			});
			new Notification("Forex Mastery", { body: "Notifications enabled. Daily nudge incoming." });
			toast.success("Notifications enabled");
		} else toast.error("Permission denied");
	};
	const testNotif = () => {
		if (permission !== "granted") {
			toast.error("Enable notifications first");
			return;
		}
		new Notification("Forex Mastery — Test", { body: "Time for your daily session 🎯" });
	};
	(0, import_react.useEffect)(() => {
		if (!settings.browserNotif || permission !== "granted") return;
		const [hh, mm] = settings.reminderTime.split(":").map(Number);
		const now = /* @__PURE__ */ new Date();
		const next = /* @__PURE__ */ new Date();
		next.setHours(hh, mm, 0, 0);
		if (next <= now) next.setDate(next.getDate() + 1);
		const ms = next.getTime() - now.getTime();
		const t = window.setTimeout(() => {
			new Notification("Forex Mastery — Daily Session", { body: "Open the app and start today's 30-min session." });
		}, ms);
		return () => window.clearTimeout(t);
	}, [
		settings.browserNotif,
		settings.reminderTime,
		permission
	]);
	const exportData = () => {
		const data = {};
		for (let i = 0; i < localStorage.length; i++) {
			const k = localStorage.key(i);
			if (k.startsWith("forex_mastery_v1_")) data[k] = localStorage.getItem(k);
		}
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `forex-mastery-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
		a.click();
		URL.revokeObjectURL(url);
	};
	const importData = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				const data = JSON.parse(reader.result);
				for (const k of Object.keys(data)) localStorage.setItem(k, data[k]);
				toast.success("Imported. Reload the page.");
			} catch {
				toast.error("Invalid file");
			}
		};
		reader.readAsText(file);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 md:px-10 py-8 max-w-3xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl md:text-4xl font-bold",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-5" }), " Laptop Notifications"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-sm",
							children: "Browser push reminder"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: ["Fires while this browser is open. Permission: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: permission
							})]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: settings.browserNotif && permission === "granted",
							onCheckedChange: (v) => {
								if (v && permission !== "granted") requestNotif();
								else setSettings({
									...settings,
									browserNotif: v
								});
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[1fr_auto] gap-2 items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "text-xs",
							children: "Daily reminder time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "time",
							value: settings.reminderTime,
							onChange: (e) => setSettings({
								...settings,
								reminderTime: e.target.value
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							onClick: testNotif,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "size-4" }), " Test"]
						})]
					}),
					permission !== "granted" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: requestNotif,
						className: "w-full",
						children: "Enable browser notifications"
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-5" }), " Email reminders (optional)"]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "text-xs",
					children: "Email address"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "email",
					placeholder: "you@example.com",
					value: settings.email,
					onChange: (e) => setSettings({
						...settings,
						email: e.target.value
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						className: "text-sm",
						children: "Send me a daily reminder by email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Saved locally. Backend email scheduling can be wired up later — for now you'll see the browser push."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: settings.emailNotif,
						onCheckedChange: (v) => setSettings({
							...settings,
							emailNotif: v
						})
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Data backup" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: exportData,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export all data"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent cursor-pointer",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "application/json",
							className: "hidden",
							onChange: importData
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
						" Import backup"
					]
				})]
			})] })
		]
	}) });
}
//#endregion
export { SettingsPage as component };
