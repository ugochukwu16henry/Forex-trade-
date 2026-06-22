import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Check } from "lucide-react";

interface Props {
  totalSeconds: number;
  onComplete?: () => void;
  label: string;
}

export function SessionTimer({ totalSeconds, onComplete, label }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    setRemaining(totalSeconds);
    setRunning(false);
  }, [totalSeconds]);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          window.clearInterval(ref.current!);
          setRunning(false);
          try {
            if (
              typeof window !== "undefined" &&
              "Notification" in window &&
              Notification.permission === "granted"
            ) {
              new Notification("Phase complete: " + label, {
                body: "Move to the next phase 🎯",
              });
            }
          } catch {}
          onComplete?.();
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (ref.current) window.clearInterval(ref.current);
    };
  }, [running, label, onComplete]);

  const m = Math.floor(remaining / 60).toString().padStart(2, "0");
  const s = (remaining % 60).toString().padStart(2, "0");
  const pct = ((totalSeconds - remaining) / totalSeconds) * 100;

  return (
    <div className="rounded-xl bg-card border border-border p-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="font-mono text-3xl font-bold tabular-nums">
          {m}:{s}
        </span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-cyan-glow transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="flex gap-2 mt-3">
        <Button
          size="sm"
          variant={running ? "secondary" : "default"}
          onClick={() => setRunning((r) => !r)}
        >
          {running ? <Pause className="size-4" /> : <Play className="size-4" />}
          {running ? "Pause" : "Start"}
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setRunning(false);
            setRemaining(totalSeconds);
          }}
        >
          <RotateCcw className="size-4" /> Reset
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setRunning(false);
            setRemaining(0);
            onComplete?.();
          }}
          className="ml-auto text-bull"
        >
          <Check className="size-4" /> Mark done
        </Button>
      </div>
    </div>
  );
}
