import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useLocalState, defaultSettings, type Settings } from "@/lib/storage";
import { Bell, Mail, Download, Upload, BellRing } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Forex Mastery" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const [settings, setSettings] = useLocalState<Settings>("settings", defaultSettings);
  const [permission, setPermission] = useState<NotificationPermission>("default");

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestNotif = async () => {
    if (!("Notification" in window)) {
      toast.error("Browser notifications are not supported here");
      return;
    }
    const res = await Notification.requestPermission();
    setPermission(res);
    if (res === "granted") {
      setSettings({ ...settings, browserNotif: true });
      new Notification("Forex Mastery", { body: "Notifications enabled. Daily nudge incoming." });
      toast.success("Notifications enabled");
    } else {
      toast.error("Permission denied");
    }
  };

  const testNotif = () => {
    if (permission !== "granted") {
      toast.error("Enable notifications first");
      return;
    }
    new Notification("Forex Mastery — Test", {
      body: "Time for your daily session 🎯",
    });
  };

  // Schedule a daily reminder via setTimeout while tab is open (best-effort browser reminder)
  useEffect(() => {
    if (!settings.browserNotif || permission !== "granted") return;
    const [hh, mm] = settings.reminderTime.split(":").map(Number);
    const now = new Date();
    const next = new Date();
    next.setHours(hh, mm, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    const ms = next.getTime() - now.getTime();
    const t = window.setTimeout(() => {
      new Notification("Forex Mastery — Daily Session", {
        body: "Open the app and start today's 30-min session.",
      });
    }, ms);
    return () => window.clearTimeout(t);
  }, [settings.browserNotif, settings.reminderTime, permission]);

  const exportData = () => {
    const data: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)!;
      if (k.startsWith("forex_mastery_v1_")) data[k] = localStorage.getItem(k);
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `forex-mastery-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        for (const k of Object.keys(data)) {
          localStorage.setItem(k, data[k]);
        }
        toast.success("Imported. Reload the page.");
      } catch {
        toast.error("Invalid file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <AppShell>
      <div className="px-6 md:px-10 py-8 max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Bell className="size-5" /> Laptop Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Browser push reminder</Label>
                <p className="text-xs text-muted-foreground">
                  Fires while this browser is open. Permission: <span className="font-mono">{permission}</span>
                </p>
              </div>
              <Switch
                checked={settings.browserNotif && permission === "granted"}
                onCheckedChange={(v) => {
                  if (v && permission !== "granted") requestNotif();
                  else setSettings({ ...settings, browserNotif: v });
                }}
              />
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-2 items-end">
              <div>
                <Label className="text-xs">Daily reminder time</Label>
                <Input
                  type="time"
                  value={settings.reminderTime}
                  onChange={(e) => setSettings({ ...settings, reminderTime: e.target.value })}
                />
              </div>
              <Button variant="secondary" onClick={testNotif}>
                <BellRing className="size-4" /> Test
              </Button>
            </div>
            {permission !== "granted" && (
              <Button variant="outline" onClick={requestNotif} className="w-full">
                Enable browser notifications
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Mail className="size-5" /> Email reminders (optional)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Label className="text-xs">Email address</Label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm">Send me a daily reminder by email</Label>
                <p className="text-xs text-muted-foreground">
                  Saved locally. Backend email scheduling can be wired up later — for now you'll see the browser push.
                </p>
              </div>
              <Switch
                checked={settings.emailNotif}
                onCheckedChange={(v) => setSettings({ ...settings, emailNotif: v })}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data backup</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={exportData}>
              <Download className="size-4" /> Export all data
            </Button>
            <label className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent cursor-pointer">
              <input type="file" accept="application/json" className="hidden" onChange={importData} />
              <Upload className="size-4" /> Import backup
            </label>

          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
