import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Map,
  Layers,
  CandlestickChart,
  Brain,
  BookOpen,
  Calculator,
  Wallet,
  Library,
  Settings as SettingsIcon,
  Flame,
} from "lucide-react";
import { useEffect } from "react";
import { useLocalState, initialProgress, type ProgressState } from "@/lib/storage";

const NAV = [
  { to: "/", label: "Today", icon: LayoutDashboard },
  { to: "/roadmap", label: "90-Day Roadmap", icon: Map },
  { to: "/levels", label: "5 Levels", icon: Layers },
  { to: "/charts", label: "Charts", icon: CandlestickChart },
  { to: "/flashcards", label: "Flashcards", icon: Brain },
  { to: "/journal", label: "Journal", icon: BookOpen },
  { to: "/calculator", label: "Risk Calc", icon: Calculator },
  { to: "/demo-accounts", label: "Demo Brokers", icon: Wallet },
  { to: "/books", label: "Books", icon: Library },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [progress] = useLocalState<ProgressState>("progress", initialProgress);

  // Force dark theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r border-border bg-sidebar sticky top-0 h-screen">
        <div className="p-5 border-b border-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-cyan-glow flex items-center justify-center font-display font-bold text-primary-foreground glow-primary">
              FX
            </div>
            <div>
              <div className="font-display font-bold text-base leading-tight">Forex Mastery</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                90-Day Pro Track
              </div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {NAV.map((item) => {
            const active =
              item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between rounded-lg bg-card p-3">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Streak
              </div>
              <div className="font-mono text-2xl font-bold text-warn">
                {progress.streak}d
              </div>
            </div>
            <Flame className="size-7 text-warn" />
          </div>
          <div className="mt-3 text-[10px] text-muted-foreground text-center">
            Day{" "}
            <span className="font-mono text-foreground">
              {Math.min(progress.currentDay, 90)}
            </span>{" "}
            of 90
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 border-b border-border bg-sidebar/95 backdrop-blur px-3 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-gradient-to-br from-primary to-cyan-glow flex items-center justify-center font-display font-bold text-xs text-primary-foreground">
            FX
          </div>
          <span className="font-display font-bold">Forex Mastery</span>
        </Link>
        <div className="flex items-center gap-1 font-mono text-xs">
          <Flame className="size-3 text-warn" />
          {progress.streak}d
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-sidebar/95 backdrop-blur flex overflow-x-auto">
        {NAV.slice(0, 6).map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex-1 min-w-[64px] flex flex-col items-center gap-1 py-2 text-[10px] ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <main className="flex-1 min-w-0 pt-14 pb-20 md:pt-0 md:pb-0">{children}</main>
    </div>
  );
}
