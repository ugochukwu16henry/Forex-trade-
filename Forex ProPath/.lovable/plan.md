
## Forex Mastery — 90-Day Daily Training App

A focused, study-first app that walks you through Forex from beginner to pro in 90 days, with ≥30 min/day of structured work, charts, a trading journal, demo broker links, and laptop notification reminders.

### Core experience

- **Today's Session** (home): the current day's lesson with a 30-min timer broken into the 90% Retention Formula — 10 min Learn → 20 min Notes → 20 min Practice → 10 min Teach Aloud.
- **90-Day Roadmap**: visual progress tracker grouped by Month 1 (Foundations + Candlesticks), Month 2 (Technical Analysis + Demo), Month 3 (Risk, Psychology, Backtesting, Journal). Day cards show locked / available / completed states.
- **5 Levels of Mastery hub**: Market Foundations, Technical Analysis, Risk Management, Psychology, Trading Systems. Each level = concept pages + flashcards + quiz.
- **Chart playground**: interactive candlestick charts (lightweight-charts) with drawing tools for support/resistance + trendlines, plus pre-loaded example charts for each lesson (uptrend, downtrend, consolidation, pin bar, engulfing, etc.).
- **Active recall flashcards**: spaced repetition (1/3/7/14/30 day intervals) over all key terms — pip, lot, leverage, margin, spread, bid/ask, drawdown, R:R, etc.
- **Trading journal**: log demo trades (pair, direction, entry, SL, TP, lot, R:R, screenshot URL, emotions, notes); auto-calc risk %, R:R, win rate, expectancy; equity curve chart.
- **Risk calculator**: position size from account balance, risk %, pip distance.
- **Teach-it-back prompts** (Feynman): daily "explain this in your own words" textarea saved to the journal.
- **Demo account links**: dedicated page with vetted broker demo signups — OANDA (primary CTA), plus IG, Pepperstone, Forex.com, FXCM, IC Markets — short pros/cons for each.
- **Recommended reading**: the 4 books, with summaries.

### Reminders / notifications (laptop)

- **Browser push** via the Web Notifications API + a service worker: daily session reminder at a user-chosen time, spaced-repetition review nudges, streak warnings. Works whenever the browser is running (even if the tab is closed, via the SW).
- **Email reminders** as backup (daily summary + missed-day nudge) using Lovable's built-in email infrastructure. We'll prompt for an email address and send via a scheduled server route.
- Settings page to pick reminder time, toggle channels, and send a test notification.

### Visual design — "brain-catches-fast" palette

Optimized for fast scanning and meaning-by-color (green = bullish/done, red = bearish/risk, amber = caution/review, electric blue = focus/CTAs) on a deep near-black canvas like a trading terminal.

- Background: `#0A0E1A` (near-black navy)
- Surface: `#111827`
- Primary CTA / focus: `#3B82F6` (electric blue)
- Bullish / success: `#10B981` (emerald)
- Bearish / danger: `#EF4444` (red)
- Warning / review-due: `#F59E0B` (amber)
- Text: `#F8FAFC` / muted `#94A3B8`
- Accent highlight: `#22D3EE` (cyan) for progress arcs and chart drawings

Typography: **Space Grotesk** (headings, slightly technical) + **Inter** (body) + **JetBrains Mono** (prices, pip counts, timers). Generous spacing, large numerals for stats, candlestick motifs in empty states.

### Data & persistence

- **Local only** (no login) per your choice. All progress, journal entries, flashcard schedules, settings, and notes stored in `localStorage` (with JSON export/import button so you don't lose data).
- Email reminders require entering your email in Settings; only the email and reminder time are stored server-side for the cron.

### Tech stack

- TanStack Start (existing template), Tailwind v4, shadcn/ui.
- `lightweight-charts` for candlestick charts.
- `framer-motion` for subtle transitions.
- Service worker (`/public/sw.js`) + Notifications API for laptop push.
- Lovable Cloud + built-in Emails for the email reminder cron (only piece that needs the cloud — everything else is local).

### Route structure

```text
/                       Today's session (home)
/roadmap                90-day grid
/levels/$levelId        Concept pages + flashcards + quiz per level
/charts                 Interactive chart playground + example library
/flashcards             Spaced-repetition review queue
/journal                Trade log + stats + equity curve
/calculator             Position-size / risk calculator
/demo-accounts          Broker demo signup links
/books                  Recommended reading
/settings               Reminder time, notifications, email, data export
```

### Build order

1. Design system tokens + layout shell (sidebar nav, top bar with streak + timer).
2. Curriculum data file: 90 days of lessons mapped to the 5 levels, with learn/notes/practice/teach prompts.
3. Today's Session page with 4-phase timer.
4. Roadmap + Levels pages.
5. Flashcards engine (SM-2-lite spaced repetition).
6. Chart playground with `lightweight-charts` + example datasets.
7. Journal + risk calculator + stats.
8. Demo accounts + Books pages.
9. Settings + service worker + browser notifications.
10. Enable Lovable Cloud + email infra, wire daily email reminder cron.
11. JSON export/import for local data.

Once you approve, I'll start building.
