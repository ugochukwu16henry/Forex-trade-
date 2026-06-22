import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { M as ArrowRight, T as ChartLine, a as RotateCcw, c as PenLine, k as BookOpen, l as Pause, s as Play, u as Mic, w as Check, x as CircleCheck } from "../_libs/lucide-react.mjs";
import { i as useLocalState, r as initialProgress, t as AppShell } from "./AppShell-TFGriqpL.mjs";
import { i as CardTitle, n as CardContent, r as CardHeader, t as Card } from "./card-BU7ReKAs.mjs";
import { t as Badge } from "./badge-Bs87oRp1.mjs";
import { t as Button } from "./button-BOpLNEL2.mjs";
import { n as LEVELS, r as PHASES, t as CURRICULUM } from "./curriculum-C2O4uvTU.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Textarea } from "./textarea-Cr2ATv-x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ClhSFDYn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SessionTimer({ totalSeconds, onComplete, label }) {
	const [remaining, setRemaining] = (0, import_react.useState)(totalSeconds);
	const [running, setRunning] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setRemaining(totalSeconds);
		setRunning(false);
	}, [totalSeconds]);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		ref.current = window.setInterval(() => {
			setRemaining((r) => {
				if (r <= 1) {
					window.clearInterval(ref.current);
					setRunning(false);
					try {
						if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") new Notification("Phase complete: " + label, { body: "Move to the next phase 🎯" });
					} catch {}
					onComplete?.();
					return 0;
				}
				return r - 1;
			});
		}, 1e3);
		return () => {
			if (ref.current) window.clearInterval(ref.current);
		};
	}, [
		running,
		label,
		onComplete
	]);
	const m = Math.floor(remaining / 60).toString().padStart(2, "0");
	const s = (remaining % 60).toString().padStart(2, "0");
	const pct = (totalSeconds - remaining) / totalSeconds * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-card border border-border p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-3xl font-bold tabular-nums",
					children: [
						m,
						":",
						s
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-2 bg-secondary rounded-full overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-gradient-to-r from-primary to-cyan-glow transition-all",
					style: { width: `${pct}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: running ? "secondary" : "default",
						onClick: () => setRunning((r) => !r),
						children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), running ? "Pause" : "Start"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => {
							setRunning(false);
							setRemaining(totalSeconds);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Reset"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "ghost",
						onClick: () => {
							setRunning(false);
							setRemaining(0);
							onComplete?.();
						},
						className: "ml-auto text-bull",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), " Mark done"]
					})
				]
			})
		]
	});
}
var PHASE_ICONS = {
	learn: BookOpen,
	notes: PenLine,
	practice: ChartLine,
	teach: Mic
};
function TodayPage() {
	const [progress, setProgress] = useLocalState("progress", initialProgress);
	const day = Math.min(progress.currentDay, 90);
	const lesson = CURRICULUM.find((l) => l.day === day) || CURRICULUM[0];
	const dp = progress.days[day] || { completedPhases: {} };
	const [active, setActive] = (0, import_react.useState)("learn");
	const [notes, setNotes] = (0, import_react.useState)(dp.notes || "");
	const [teach, setTeach] = (0, import_react.useState)(dp.teach || "");
	const level = LEVELS.find((l) => l.id === lesson.level);
	const completePhase = (p) => {
		setProgress((prev) => {
			const days = { ...prev.days };
			const cur = days[day] || { completedPhases: {} };
			const completedPhases = {
				...cur.completedPhases,
				[p]: true
			};
			const allDone = PHASES.every((ph) => completedPhases[ph.id]);
			days[day] = {
				...cur,
				completedPhases,
				notes,
				teach,
				completedAt: allDone ? (/* @__PURE__ */ new Date()).toISOString() : cur.completedAt
			};
			const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
			let streak = prev.streak;
			let currentDay = prev.currentDay;
			if (allDone && prev.lastSessionDate !== today) {
				streak += 1;
				currentDay = Math.min(prev.currentDay + 1, 90);
				toast.success(`Day ${day} complete! 🎯`, { description: `Streak: ${streak} days` });
			}
			return {
				...prev,
				days,
				streak,
				currentDay,
				lastSessionDate: allDone ? today : prev.lastSessionDate
			};
		});
	};
	const saveText = () => {
		setProgress((prev) => {
			const days = { ...prev.days };
			days[day] = {
				...days[day] || { completedPhases: {} },
				notes,
				teach
			};
			return {
				...prev,
				days
			};
		});
		toast.success("Saved");
	};
	const phaseDef = PHASES.find((p) => p.id === active);
	const phaseDone = (id) => !!dp.completedPhases[id];
	const allPhases = (0, import_react.useMemo)(() => PHASES.every((p) => phaseDone(p.id)), [dp]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-grid",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 md:px-10 pt-8 pb-6 border-b border-border bg-gradient-to-b from-card/60 to-transparent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "secondary",
									className: "font-mono",
									children: [
										"DAY ",
										day,
										"/90"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									variant: "outline",
									children: ["Month ", lesson.month]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									style: {
										color: `var(--${level.color})`,
										borderColor: `var(--${level.color})`
									},
									variant: "outline",
									children: [
										"Level ",
										level.id,
										": ",
										level.name
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl md:text-4xl font-bold",
							children: lesson.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground max-w-2xl",
							children: lesson.concept
						})
					] }), allPhases && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						onClick: () => {},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							className: "gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-bull" }), " Day complete · Next →"]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-3",
				children: PHASES.map((p) => {
					const Icon = PHASE_ICONS[p.id];
					const done = phaseDone(p.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setActive(p.id),
						className: `text-left rounded-xl border p-4 transition-all ${active === p.id ? "border-primary bg-primary/10 glow-primary" : done ? "border-bull/50 bg-bull/5" : "border-border bg-card hover:border-primary/50"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" }), done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-5 text-bull" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-xs uppercase tracking-widest text-muted-foreground",
								children: [p.minutes, " min"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display font-bold mt-0.5",
								children: p.label
							})
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 md:px-10 pb-12 grid lg:grid-cols-3 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: phaseDef.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							className: "font-mono",
							children: [phaseDef.minutes, " min"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: phaseDef.desc
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "space-y-4",
						children: [
							active === "learn" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "prose-invert",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base leading-relaxed",
									children: lesson.learn
								}), lesson.keyTerms && lesson.keyTerms.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs uppercase tracking-widest text-muted-foreground mb-2",
										children: "Key terms"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: lesson.keyTerms.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											className: "font-mono",
											children: t
										}, t))
									})]
								})]
							}),
							active === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed mb-3",
									children: lesson.notes
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 10,
									placeholder: "Write your notes in YOUR OWN words…",
									value: notes,
									onChange: (e) => setNotes(e.target.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "mt-2",
									onClick: saveText,
									children: "Save notes"
								})
							] }),
							active === "practice" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed mb-3",
								children: lesson.practice
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/charts",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "secondary",
									className: "gap-2",
									children: ["Open Chart Playground ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})] }),
							active === "teach" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed mb-3",
									children: lesson.teach
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									rows: 8,
									placeholder: "Explain it as if teaching a beginner (Feynman technique)…",
									value: teach,
									onChange: (e) => setTeach(e.target.value)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "outline",
									className: "mt-2",
									onClick: saveText,
									children: "Save explanation"
								})
							] })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionTimer, {
							totalSeconds: phaseDef.minutes * 60,
							label: phaseDef.label,
							onComplete: () => completePhase(active)
						}, active),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-sm",
							children: "Session checklist"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
							className: "space-y-2",
							children: PHASES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: phaseDone(p.id) ? "text-bull" : "text-muted-foreground",
									children: [
										phaseDone(p.id) ? "✓ " : "○ ",
										p.label,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-mono text-xs",
											children: [
												"(",
												p.minutes,
												"m)"
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "sm",
									className: "h-7 px-2 text-xs",
									onClick: () => completePhase(p.id),
									disabled: phaseDone(p.id),
									children: "Mark"
								})]
							}, p.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "text-sm",
							children: "Why this works"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "text-xs text-muted-foreground space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The 90% Retention Formula — Learn → Notes → Practice → Teach — uses",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "active recall"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "deliberate practice"
								}),
								" and the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Feynman technique"
								}),
								"."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If you can't teach it, you don't know it yet." })]
						})] })
					]
				})]
			})
		]
	}) });
}
//#endregion
export { TodayPage as component };
