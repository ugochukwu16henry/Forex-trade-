//#region node_modules/.nitro/vite/services/ssr/assets/curriculum-C2O4uvTU.js
var LEVELS = [
	{
		id: 1,
		name: "Market Foundations",
		color: "primary",
		desc: "Pips, lots, leverage, spreads — the language of Forex."
	},
	{
		id: 2,
		name: "Technical Analysis",
		color: "cyan-glow",
		desc: "Read charts: trend, structure, candles, support & resistance."
	},
	{
		id: 3,
		name: "Risk Management",
		color: "warn",
		desc: "Position size, stop loss, R:R. The pro's true edge."
	},
	{
		id: 4,
		name: "Trading Psychology",
		color: "bear",
		desc: "Discipline, patience, emotional control."
	},
	{
		id: 5,
		name: "Trading Systems",
		color: "bull",
		desc: "Entry/exit rules, backtesting, journaling."
	}
];
var L = (day, month, level, title, concept, learn, notes, practice, teach, keyTerms = []) => ({
	day,
	month,
	level,
	title,
	concept,
	learn,
	notes,
	practice,
	teach,
	keyTerms
});
var CURRICULUM = [
	L(1, 1, 1, "What Is Forex?", "Currencies traded in pairs, the world's largest market.", "Forex is the buying and selling of currencies — the largest financial market in the world (~$7T/day). When you trade EUR/USD, you predict whether the Euro will rise or fall against the US Dollar. The first currency is the BASE, the second is the QUOTE.", "Define Forex in 3 sentences. Then list 3 reasons it's the largest market.", "Open any chart of EUR/USD on TradingView. Just watch it move for 10 minutes. Note: does it move smoothly or in jumps?", "Explain to an imaginary beginner: 'What is Forex, and why do prices move?'", [
		"Forex",
		"Base currency",
		"Quote currency"
	]),
	L(2, 1, 1, "Currency Pairs: Majors, Minors, Exotics", "EUR/USD, GBP/USD, USD/JPY and friends.", "Majors = pairs with USD (EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, NZD/USD, USD/CAD). Minors = no USD but major currencies (EUR/GBP). Exotics = one major + one emerging-market currency (USD/TRY). Beginners trade majors only — lower spreads, more liquid.", "List all 7 majors from memory. Then write why majors are safer for beginners.", "On TradingView, open the 7 majors side by side. Spot the most volatile one today.", "Explain the difference between a major, minor and exotic pair.", [
		"Major pair",
		"Minor pair",
		"Exotic pair"
	]),
	L(3, 1, 1, "Pips and Pipettes", "The smallest unit of price movement.", "A PIP is the 4th decimal in most pairs (EUR/USD 1.0850 → 1.0851 = 1 pip). For JPY pairs it's the 2nd decimal (USD/JPY 150.10 → 150.11 = 1 pip). A PIPETTE = 1/10 of a pip (the 5th decimal). 'How many pips did I make?' is the trader's daily question.", "Write the pip rule for EUR/USD, GBP/JPY, and USD/CHF.", "Calculate: EUR/USD moves from 1.0820 to 1.0875 — how many pips? (Answer: 55).", "Teach a friend: 'What is a pip and why does it matter?'", ["Pip", "Pipette"]),
	L(4, 1, 1, "Lot Sizes: Standard, Mini, Micro, Nano", "How much money 1 pip is worth.", "Standard lot = 100,000 units (1 pip ≈ $10). Mini = 10,000 (1 pip ≈ $1). Micro = 1,000 (1 pip ≈ $0.10). Nano = 100 (1 pip ≈ $0.01). Beginners should start MICRO. Lot size + pip movement = your profit/loss.", "Make a table of lot sizes with pip value for EUR/USD.", "If you trade 0.5 mini lots (=0.05 standard) and gain 30 pips on EUR/USD, what's your profit? (Answer: ~$15)", "Explain lot size like you're explaining clothing sizes to a child.", [
		"Standard lot",
		"Mini lot",
		"Micro lot",
		"Pip value"
	]),
	L(5, 1, 1, "Leverage and Margin", "Borrowed power and the deposit it requires.", "Leverage (1:100, 1:500) lets you control a big position with a small deposit (margin). 1:100 means $1,000 controls $100,000. Leverage is a DOUBLE-EDGED SWORD — it amplifies gains AND losses. Pros use LOW leverage (1:10 to 1:30 effective).", "Write: 'Why high leverage destroys beginners.' Use 1 example with numbers.", "Calculate margin: trading 1 standard lot EUR/USD at 1:100 leverage. (Answer: $1,000)", "Teach: 'What is leverage? When is it dangerous?'", [
		"Leverage",
		"Margin",
		"Margin call"
	]),
	L(6, 1, 1, "Spread, Bid & Ask", "The hidden cost of every trade.", "BID = price you SELL at. ASK = price you BUY at. The difference = SPREAD (broker's fee). EUR/USD bid 1.0850, ask 1.0851 → spread = 1 pip. Trade only majors during London/NY session to get tight spreads.", "Define bid, ask, spread in your own words. Note: which is always higher?", "Open your broker's price ladder. Record spreads for EUR/USD, GBP/JPY, AUD/USD at 10am and at 2am local time. Compare.", "Teach: 'Why does the buy price differ from the sell price?'", [
		"Bid",
		"Ask",
		"Spread"
	]),
	L(7, 1, 1, "Review: Market Foundations", "Cement Level 1 with active recall.", "No new material today. Test yourself ruthlessly.", "Answer from memory: pip, lot, leverage, margin, spread, bid/ask, major pair.", "Take the Level 1 quiz. Then re-do flashcards.", "Record a 2-minute voice memo explaining Forex from scratch.", [
		"pip",
		"lot",
		"leverage",
		"margin",
		"spread"
	]),
	L(8, 1, 2, "How to Read a Candlestick", "OHLC in one bar.", "Each candle shows OPEN, HIGH, LOW, CLOSE for its timeframe. GREEN/bullish = close > open. RED/bearish = close < open. The BODY = open-to-close, the WICKS = high & low. A candle's story = 'who won this round, buyers or sellers?'", "Draw a bullish candle and a bearish candle. Label body, wicks, OHLC.", "On a 1H EUR/USD chart, pick 10 candles. For each, say: bullish or bearish, big body or small?", "Teach: 'What does a candlestick tell you that a line chart doesn't?'", [
		"OHLC",
		"Body",
		"Wick",
		"Bullish candle",
		"Bearish candle"
	]),
	L(9, 1, 2, "Timeframes: From M1 to MN", "Same market, different stories.", "Common timeframes: M1, M5, M15, M30, H1, H4, D1, W1, MN. Higher TF = stronger signal but slower. Pros use MULTI-TIMEFRAME analysis: trend on D1, entry on H1.", "List timeframes and what trader type each fits (scalper, day, swing, position).", "Open EUR/USD on D1, H4, H1, M15 side by side. Notice how the same move looks different.", "Explain: 'Why look at multiple timeframes before entering a trade?'", ["Timeframe", "Multi-timeframe analysis"]),
	L(10, 1, 2, "Pin Bar (Hammer / Shooting Star)", "A rejection signal at key levels.", "Pin bar = tiny body, long wick on one side. Long wick BELOW = bullish rejection (hammer). Long wick ABOVE = bearish rejection (shooting star). Only valuable at SUPPORT/RESISTANCE.", "Sketch a hammer and a shooting star. Note the wick must be 2x+ the body.", "Scroll back on EUR/USD D1 and mark 5 pin bars. Did price reverse after?", "Teach: 'Why is a pin bar at random price meaningless, but at support powerful?'", [
		"Pin bar",
		"Hammer",
		"Shooting star"
	]),
	L(11, 1, 2, "Engulfing Patterns", "When one candle eats the previous.", "BULLISH ENGULFING = green candle's body fully covers the prior red candle. BEARISH ENGULFING = the reverse. Strongest at end of a trend, at S/R, or after a pin bar.", "Draw bullish and bearish engulfing. Note: only the BODY must engulf, wicks don't count.", "Find 5 engulfing patterns on GBP/USD H4. Mark them on chart.", "Explain: 'What's the psychological story behind a bullish engulfing?'", ["Bullish engulfing", "Bearish engulfing"]),
	L(12, 1, 2, "Doji and Indecision", "The market pauses to breathe.", "DOJI = open ≈ close, very small body. Means buyers and sellers are balanced. After a strong move = possible reversal. In consolidation = nothing special. Context is king.", "Sketch doji, long-legged doji, dragonfly, gravestone.", "On any chart, find 3 doji. For each, note context (after rally? in chop?).", "Teach: 'A doji is not always a reversal. When does it matter?'", ["Doji", "Indecision"]),
	L(13, 1, 2, "Support and Resistance", "Where price has memory.", "SUPPORT = price level where buyers stepped in before (floor). RESISTANCE = where sellers stepped in (ceiling). Drawn on swing HIGHS and LOWS. Old resistance, once broken, often becomes new support (and vice-versa).", "Write 3 rules for drawing S/R. (Tip: at least 2 touches, on closing prices, higher TF first.)", "On EUR/USD D1, draw 5 horizontal S/R lines. Don't overcrowd the chart.", "Teach: 'Why do price levels matter? Why does the market 'remember'?'", [
		"Support",
		"Resistance",
		"Flip zone"
	]),
	L(14, 1, 2, "Review: Candles & S/R", "Lock in week 2.", "Recall every candle pattern and the S/R rules.", "Quiz yourself on each candlestick. No notes.", "Open 3 charts. Mark trend, S/R, and any candle signals at the levels.", "Voice-memo: 'How I read any forex chart in 60 seconds.'", []),
	L(15, 1, 2, "Uptrend, Downtrend, Range", "The three market states.", "UPTREND = higher highs + higher lows. DOWNTREND = lower highs + lower lows. RANGE/consolidation = no clear HH/HL or LH/LL. Trade WITH the trend; in ranges, trade the edges.", "Sketch each of the three states with HH/HL labels.", "Pick 5 random charts. Within 5 seconds, label: uptrend, downtrend, or range.", "Teach: 'Why is 'the trend is your friend' the most repeated rule in trading?'", [
		"Uptrend",
		"Downtrend",
		"Range",
		"Higher high",
		"Higher low"
	]),
	L(16, 1, 2, "Drawing Trendlines", "Connecting the swing points.", "Uptrend line = connect 2+ higher lows. Downtrend line = connect 2+ lower highs. 3 touches = validated. A break of the line = possible trend change. Don't force trendlines onto messy price.", "Write your trendline rules: minimum touches, body or wick, timeframe.", "Draw 5 valid trendlines across 3 charts. Mark any clean breakouts.", "Teach: 'When is a trendline valid, and when are you fooling yourself?'", ["Trendline", "Trendline break"]),
	L(17, 1, 2, "Market Structure: BOS & CHoCH", "How pros read trend shifts.", "BOS (Break of Structure) = price breaks the most recent swing high (uptrend continuation) or low (downtrend). CHoCH (Change of Character) = breaks AGAINST the trend = potential reversal.", "Diagram an uptrend with BOS, then a CHoCH that turns it into a downtrend.", "On any H4 chart, identify the last 5 BOS/CHoCH events.", "Teach: 'Difference between BOS and CHoCH.'", [
		"BOS",
		"CHoCH",
		"Market structure"
	]),
	L(18, 1, 2, "Supply & Demand Zones", "Where institutions enter.", "Supply zone = area price dropped from (sellers). Demand zone = area price rallied from (buyers). Draw as RECTANGLES, not lines. Fresh, untested zones are best.", "Note the difference between S/R lines and supply/demand zones.", "Mark 3 demand zones and 3 supply zones on GBP/USD H4.", "Teach: 'Why a ZONE, not a line, and why fresh zones work best.'", ["Supply zone", "Demand zone"]),
	L(19, 1, 2, "Fibonacci Retracement", "Where pullbacks like to end.", "Draw fib from swing low to swing high (uptrend). Key levels: 38.2%, 50%, 61.8%, 78.6%. Price often retraces to these, then continues the trend. Combine with S/R for confluence.", "Write the 4 key fib levels and what 'confluence' means.", "On a clear uptrend, draw fib. Did price respect 50% or 61.8%?", "Teach: 'What is a fib retracement and why use it with S/R?'", [
		"Fibonacci",
		"Retracement",
		"Confluence"
	]),
	L(20, 1, 2, "Breakouts and Fakeouts", "Real vs. trap.", "Real breakout = strong close BEYOND the level + follow-through. Fakeout = wick beyond, close back inside (= trap). Wait for retest of the broken level before entering.", "Define breakout vs fakeout. List 3 confirmation signs.", "Find 2 breakouts and 2 fakeouts in your history. Why did each happen?", "Teach: 'Why patience separates breakout traders from breakout victims.'", [
		"Breakout",
		"Fakeout",
		"Retest"
	]),
	L(21, 1, 2, "Review: Trend & Structure", "Compound week 3.", "Recall HH/HL, BOS, CHoCH, fib levels.", "Quiz: define each from memory.", "Take a screenshot of any chart and annotate fully.", "Teach a 3-minute lesson on 'reading a chart top-down'.", []),
	L(22, 1, 2, "Top-Down Analysis", "Pro process from D1 down.", "Start on Daily: trend? Key S/R? Then H4: pullbacks, zones. Then H1/M15: entry trigger. NEVER enter from a low TF if it conflicts with daily.", "Write your top-down checklist.", "Pick EUR/USD. Do full top-down. Note your bias.", "Teach: 'Why top-down stops you trading against the tide.'", ["Top-down analysis"]),
	L(23, 1, 2, "Sessions: Sydney, Tokyo, London, NY", "When the market actually moves.", "London open + NY overlap (8am–12pm EST) = highest volume, tightest spreads. Asian session = ranges, smaller moves. Trade your strategy during YOUR most reliable session.", "Note start/end times of each session in YOUR timezone.", "Watch EUR/USD for 1 hour during London open. Note volatility vs Asian session.", "Teach: 'Why a trader's edge can depend on what time they trade.'", [
		"Trading session",
		"London session",
		"NY session"
	]),
	L(24, 1, 2, "Economic Calendar & News", "Why your stop got hit at 2:30pm.", "NFP, CPI, FOMC, interest-rate decisions cause big moves. Use forexfactory.com or investing.com calendar. Don't hold trades through high-impact news unless your system handles it.", "List the top 5 high-impact news events.", "Open Forex Factory. Find tomorrow's red-flag events. Mark them on your chart.", "Teach: 'Why news can destroy a perfect technical setup.'", [
		"Economic calendar",
		"NFP",
		"CPI",
		"FOMC"
	]),
	L(25, 1, 2, "Chart Time: Identify 10 Setups", "Pure pattern reps.", "No new theory. Today is reps.", "Write what you saw on each chart in 1 sentence.", "Open 10 different charts. On each, identify trend + 1 candle pattern + nearest S/R.", "Pick your best setup of the 10 and explain why you'd take or skip it.", []),
	L(26, 1, 2, "Build Your Watchlist", "Quality over quantity.", "Pick 4–6 pairs. That's your watchlist. Mastering 5 pairs > spreading thin over 28.", "Choose 5 pairs and write WHY each (correlated to your session, low spread, you understand it).", "Mark daily S/R on each watchlist pair.", "Explain to a friend: 'Why I focus on only 5 pairs.'", []),
	L(27, 1, 2, "Open a Demo Account", "Train with no risk.", "Today's task: open a DEMO account. Recommended: OANDA, IG, Pepperstone. Fund with $1,000–$10,000 of virtual money. Use the same size you'd use real.", "Note your demo broker, balance, and login details.", "Open a demo account. Place 1 micro trade. Close it after 20 pips or 1 hour.", "Teach: 'Why demo first is non-negotiable.'", ["Demo account"]),
	L(28, 1, 2, "Month 1 Recap", "Self-test before Month 2.", "Review every flashcard.", "Re-take Level 1 & Level 2 quiz. Score yourself.", "Mark up 3 charts top-down. No mistakes allowed.", "Record a 5-min recap: 'What I learned in Month 1.'", []),
	L(29, 2, 2, "Confluence Trading", "Stack the odds.", "Confluence = 2+ reasons for a trade in same place. Example: daily resistance + 61.8% fib + bearish engulfing. The MORE aligned, the higher the win rate.", "List 5 things that can stack as confluence.", "Find 1 high-confluence setup on your watchlist. Screenshot it.", "Teach: 'Why 1 reason is a gamble, 3 reasons is a strategy.'", ["Confluence"]),
	L(30, 2, 2, "Reading Higher Highs Live", "Real-time structure reading.", "Practice calling structure as it forms. Don't predict — react.", "Write a structure update for 1 pair each session.", "Spend 30 min watching EUR/USD H1 form a swing. Did it become a HH or LH?", "Teach: 'Why patience to LET structure form beats prediction.'", []),
	L(31, 2, 2, "Trend Continuation Trades", "Pullback entries.", "In an uptrend, BUY the pullback to support/zone/fib. Don't chase the rip. Entry on bullish reversal candle at the zone.", "Define a trend continuation trade in your own words.", "Find 2 continuation setups on demo. Don't trade — just identify.", "Teach: 'Why entries should be on dips, not breakouts (most of the time).'", []),
	L(32, 2, 2, "Range Trading", "Buy support, sell resistance.", "In a clean range, sell near top, buy near bottom. SL beyond the range. Avoid trading the middle.", "List 3 rules to confirm a range is valid.", "Find 1 ranging pair today. Mark the buy and sell zones.", "Teach: 'How a range trader and trend trader see the same chart differently.'", []),
	L(33, 2, 2, "First Demo Trade Plan", "Plan it before you click.", "Every trade has: pair, direction, entry, SL, TP, R:R, reason. Write it BEFORE entering. If you can't fill all 7 — don't trade.", "Use the journal page to write your first trade plan.", "Take 1 trade on demo following the full plan.", "Teach: 'A trade without a plan is gambling.'", []),
	L(34, 2, 2, "Demo Trade Review", "Honest post-mortem.", "Win or lose, did you FOLLOW your plan? Plan + execution > outcome.", "Journal: trade screenshot, reason, mistakes, lesson.", "Review yesterday's trade. Grade plan A–F, execution A–F.", "Teach: 'Why grading process beats grading P&L.'", []),
	L(35, 2, 2, "Review: Week 5", "Compound.", "Recall confluence, continuation, range trade rules.", "Quiz.", "5 chart annotations.", "Voice memo.", []),
	L(36, 2, 3, "Position Sizing", "How much to trade.", "Position size depends on: account size, % risked, stop distance. Formula: position = (account * risk%) / (stop in pips * pip value). Use the calculator page.", "Calculate: $1,000 account, 1% risk, 30 pip SL on EUR/USD. (Answer: 0.033 lots, ~$10 risk)", "Use the calculator page for 3 hypothetical trades.", "Teach: 'Why position size matters more than entry.'", ["Position size"]),
	L(37, 2, 3, "Stop Loss: Where & Why", "Plan your exit before entry.", "SL goes WHERE YOUR IDEA IS WRONG (beyond S/R, beyond swing). NEVER move SL further from entry. Tight SL based on % is amateur — base it on STRUCTURE.", "Write 3 rules for SL placement.", "Plan SL for 3 setups based on structure.", "Teach: 'A stop loss isn't a loss — it's the price of finding out you were wrong.'", ["Stop loss"]),
	L(38, 2, 3, "Take Profit & R:R", "Asymmetric bets.", "Risk:Reward = (TP-entry) / (entry-SL). Minimum 1:2. Pros aim for 1:3+. With 1:3 you can lose 60% of trades and still profit.", "Calculate: SL 20 pips, TP 60 pips. R:R? (Answer: 1:3)", "Mark TPs on 3 setups based on next S/R.", "Teach: 'How a losing trader with 60% wins can lose money, and a winner with 30% wins can profit.'", ["Take profit", "Risk-reward ratio"]),
	L(39, 2, 3, "The 1–2% Rule", "Survive to thrive.", "Risk MAX 1–2% per trade. On $1k account = $10–20 per trade. After 10 consecutive losses you've lost 10–20%. With 5% per trade, 10 losses = 40% gone.", "Write: 'Why I will never risk more than 2%.'", "For your demo, set 1% max risk. Adjust positions accordingly.", "Teach: 'Why preservation of capital is the #1 job.'", []),
	L(40, 2, 3, "Drawdown & Recovery Math", "The cruel curve.", "Lose 10% → need 11% gain to recover. Lose 50% → need 100%. Big drawdowns kill careers, not bad trades.", "Make a table: 10/20/30/40/50% drawdown → % needed to recover.", "Calculate: if you lose 25%, what gain do you need?", "Teach: 'Why a $1k loss hurts more than a $1k gain helps.'", ["Drawdown"]),
	L(41, 2, 3, "Position Sizing Drills", "Reps.", "No new theory. Practice the formula until it's automatic.", "Solve 10 position-size problems by hand.", "Use calculator for 10 hypothetical trades varying account size & SL.", "Teach without notes.", []),
	L(42, 2, 3, "Review: Risk Management", "Lock it in.", "Recall all rules.", "Risk quiz.", "3 fully planned trades on demo.", "Teach risk to a beginner.", []),
	L(43, 2, 4, "Discipline & Patience", "The two pillars.", "Discipline = follow your plan even when it's boring. Patience = wait for A+ setups, skip B and C. Most days, the best trade is NO trade.", "Write your 5 trading rules. Print and keep visible.", "Today: skip every B-setup. Only take A+. Note how many you took.", "Teach: 'Why doing nothing is sometimes the most profitable action.'", []),
	L(44, 2, 4, "Emotional Control", "Master the inner game.", "Trading triggers fear (losing) and greed (winning). Common errors: cutting winners short, letting losers run, oversizing after a loss.", "List YOUR 3 biggest emotional triggers.", "Track emotion before/during/after each trade today.", "Teach: 'How emotions destroy a good system.'", []),
	L(45, 2, 4, "Revenge Trading", "The career killer.", "After a loss, the urge to 'win it back' = revenge trading. It leads to oversized, unplanned trades and bigger losses. RULE: after 2 losses, stop trading for the day.", "Write your post-loss protocol (e.g. 'walk away, journal, no chart for 1 hr').", "If you take a loss today, follow protocol. Log it.", "Teach: 'Why revenge trading turns a $50 loss into a $500 loss.'", ["Revenge trading"]),
	L(46, 2, 4, "Handling Losses", "A loss = data, not failure.", "Pros LOSE ~50% of trades and still profit. A loss within plan = good trade. A win outside plan = bad trade. Track PROCESS, not outcome.", "Reframe: write 'a loss within my rules is a successful trade.'", "Review 3 past losses. Were they within plan? If yes, you're fine.", "Teach: 'Why a loss can be a successful trade.'", []),
	L(47, 2, 4, "Mindfulness & Focus", "Sharpen the mind.", "Pros use breathing, walking breaks, journaling. The chart will be there in 10 min. Trading tired = trading bad.", "Note your routine: sleep, screen time, breaks.", "Trade only after 5 min of breathing/walking. Compare focus.", "Teach: 'How physical state determines trade quality.'", []),
	L(48, 2, 4, "The 'Trader's Brain'", "Probabilistic thinking.", "Every trade has UNCERTAIN outcome. Stop thinking 'this will work' — think 'over 100 trades, this has positive expectancy.' Outcome of any single trade is random.", "Read pages on probabilistic thinking. Write the 5 fundamental truths from Trading in the Zone.", "Take any trade. Detach from result. Note how it feels.", "Teach: 'Why thinking in probabilities frees you from emotion.'", ["Probabilistic thinking", "Expectancy"]),
	L(49, 2, 4, "Review: Psychology", "Lock it.", "Recall.", "Quiz.", "3 trades with emotion log.", "Teach.", []),
	L(50, 2, 5, "Building a Trading System", "Rules > feelings.", "A system: market filter, setup criteria, entry trigger, SL, TP, risk %, exit rules. WRITTEN. No exceptions.", "Draft your system v0.1 (1 page max).", "Apply your system to 3 charts. Does it give clear yes/no?", "Teach: 'What makes a system, and what makes wishful thinking.'", ["Trading system"]),
	L(51, 2, 5, "Entry Rules", "The trigger.", "Entry must be specific: e.g. 'bullish engulfing closes above demand zone on H4, RSI < 50.' If your friend reads it, they'd take the same trade.", "Write 3 specific entry triggers.", "Find 1 trigger fire on demo today.", "Teach: 'Specificity defeats discretion.'", []),
	L(52, 2, 5, "Exit Rules", "Where you GET OUT.", "Static (fixed TP), trailing stop, partial close, time-based exit. Pick ONE per system. Mixing destroys edge.", "Pick your exit method and justify.", "Apply to 2 demo trades.", "Teach: 'Why most traders nail the entry and ruin the exit.'", []),
	L(53, 2, 5, "Trade Management", "What you do AFTER entry.", "Options: leave alone, move SL to BE after +1R, partial TP at 1R let rest run, trail. Choose based on system, not feel.", "Decide your management rule.", "Manage 1 demo trade by the rule.", "Teach: 'Why micromanaging trades = death by a thousand cuts.'", []),
	L(54, 2, 5, "Demo Trading Day", "Pure execution.", "Today: only execute your system. No deviation.", "Plan each trade in the journal.", "Place every trade by the rulebook.", "Teach: 'What it felt like to follow rules vs improvise.'", []),
	L(55, 2, 5, "Demo Review", "Honest grades.", "Process > outcome.", "For each trade: plan grade A–F, execution grade A–F, outcome.", "Identify 1 fix for next week.", "Teach: 'A bad outcome from a good process is acceptable.'", []),
	L(56, 2, 5, "Month 2 Recap", "Self-test.", "Review levels 2 & 3.", "Mega-quiz.", "10 chart setups annotated.", "Record 'My Month 2 lessons' video.", []),
	L(57, 3, 5, "Backtesting Intro", "Test before you trust.", "Backtest = apply your system to past charts. Need 30+ trades minimum. Track: win rate, avg win, avg loss, R:R, expectancy, max drawdown.", "Define backtesting and list the stats to track.", "Backtest 5 setups on EUR/USD H4 last 3 months. Use the journal.", "Teach: 'Why backtesting beats opinion.'", ["Backtesting"]),
	L(58, 3, 5, "Expectancy Formula", "Is your system profitable?", "Expectancy = (Win% × Avg Win) − (Loss% × Avg Loss). If > 0, you make money long-term. If ≤ 0, system is broken.", "Calculate expectancy for: 40% win rate, avg win $150, avg loss $50. (Answer: $30/trade)", "Compute expectancy from your last 10 demo trades.", "Teach: 'How a 40% winning trader can still profit.'", ["Expectancy"]),
	L(59, 3, 5, "Journaling Properly", "What to log.", "For every trade: date, pair, direction, entry, SL, TP, lot, R:R, screenshot, reason for entry, emotion, mistake, lesson. Review WEEKLY.", "Write your journal checklist.", "Backfill journal for any missed trades.", "Teach: 'Why journaling 50 trades teaches more than reading 50 books.'", []),
	L(60, 3, 5, "Backtest Day 1", "30 trades on H4.", "Backtest your system on past data.", "Log each trade in journal.", "Run 10 backtests today.", "Teach: 'What I learned from backtesting.'", []),
	L(61, 3, 5, "Backtest Day 2", "Continue.", "More reps.", "10 more.", "Note patterns.", "Teach.", []),
	L(62, 3, 5, "Backtest Day 3", "Final 10.", "Last 10.", "Compute stats: win rate, expectancy, max DD.", "Decide: keep, tweak or kill the system.", "Teach.", []),
	L(63, 3, 5, "Review: Systems & Backtesting", "Lock it.", "Recall expectancy formula, drawdown math.", "Quiz.", "Annotate 5 setups.", "Teach.", []),
	L(64, 3, 4, "Trading in the Zone — Truths", "Book deep-dive.", "5 truths: anything can happen / you don't need to know what will happen / random distribution of wins & losses / edge = higher probability / every moment is unique.", "Memorize all 5. Write them out.", "Apply truth #3 to your last 10 trades: was the loss-win distribution random?", "Teach the 5 truths.", []),
	L(65, 3, 4, "The Disciplined Trader", "Mark Douglas part 2.", "Core idea: master FEELING THE FEAR and acting on plan anyway. Mechanical execution = freedom.", "Summarize the book's main idea.", "Take 1 trade despite feeling fear (if within plan).", "Teach: 'Discipline ≠ no emotion, it's acting despite emotion.'", []),
	L(66, 3, 4, "Sizing Down", "When in doubt, size down.", "After 2 losses, drop to half size. After 3, demo only. Protect your capital AND your psychology.", "Write your sizing-down rules.", "Apply: today trade at 0.5% risk instead of 1%.", "Teach: 'Why sizing down can save your career.'", []),
	L(67, 3, 4, "Building a Routine", "Daily ritual.", "Pre-market: check calendar, mark levels, set bias. Trading: plan-execute-log. Post-market: review, journal, prep tomorrow.", "Write your daily routine.", "Follow it exactly today.", "Teach: 'Why amateurs improvise, pros routine.'", []),
	L(68, 3, 4, "Weekly Review Process", "Compound by reviewing.", "Every Sunday: scroll all past-week trades, grade each, find 1 pattern, set 1 focus for next week.", "Build your weekly review template.", "Do a weekly review now.", "Teach the review process.", []),
	L(69, 3, 4, "Monthly Review Process", "Zoom out.", "Stats: # trades, win rate, R:R, expectancy, max DD, biggest mistake, biggest insight. Decide: keep system, tweak, kill.", "Build the monthly template.", "Do a monthly review.", "Teach.", []),
	L(70, 3, 4, "Review: Habits", "Lock.", "Recall.", "Quiz.", "Execute routine.", "Teach.", []),
	L(71, 3, 5, "Refine Your Edge", "Iterate the system.", "Use journal stats to tweak ONE variable at a time. Don't blow up a working system chasing perfection.", "Pick 1 variable to test for the next 30 trades.", "Implement, journal.", "Teach: 'Iterate, don't reinvent.'", []),
	L(72, 3, 5, "Correlation Awareness", "Don't double-bet.", "EUR/USD and GBP/USD move similarly. Long both = 2x risk on USD. Check correlations before stacking trades.", "List 3 highly correlated pairs.", "Audit demo: were you doubling exposure?", "Teach: 'Why correlation = hidden leverage.'", ["Correlation"]),
	L(73, 3, 5, "Trade Less, Profit More", "Sniper > shotgun.", "Pros take 1–3 trades per week, not per day. Quality > quantity.", "Aim for max 1 A+ trade per day this week.", "Track count.", "Teach: 'How fewer trades = more profit.'", []),
	L(74, 3, 5, "Demo Final Sprint Day 1", "Test live process.", "Trade your system at 1% risk for 1 week. No deviation.", "Plan, execute, log.", "Take A+ only.", "Teach.", []),
	L(75, 3, 5, "Demo Final Sprint Day 2", "Continue sprint.", "Same as Day 1.", "Plan.", "Execute A+ only.", "Teach."),
	L(76, 3, 5, "Demo Final Sprint Day 3", "Continue sprint.", "Same as Day 1.", "Plan.", "Execute A+ only.", "Teach."),
	L(77, 3, 5, "Demo Final Sprint Day 4", "Final sprint day.", "Same as Day 1.", "Plan.", "Execute A+ only.", "Teach."),
	L(78, 3, 5, "Live Account Prep", "When are you ready?", "Checklist: 60+ demo trades logged. Profitable on demo 2+ months. Following system 95%+. Drawdown < 10%. THEN consider live with $200–500 max.", "Write your readiness checklist.", "Score yourself honestly.", "Teach: 'When you should and shouldn't go live.'", []),
	L(79, 3, 5, "Sizing Down for Live", "Real money = real emotion.", "Start live with 0.25% risk. Tiny. The point is to feel real money, not to profit fast.", "Decide your live account size & risk.", "Plan first 5 live trades.", "Teach: 'Why your first live trades should be embarrassingly small.'", []),
	L(80, 3, 5, "Continuous Learning Plan", "After Day 90.", "Books, weekly review, monthly review, journal-quarterly. Trading is a forever-learning craft.", "Build your post-90-day learning routine.", "Schedule.", "Teach: 'Why pros never stop being students.'", []),
	L(81, 3, 5, "Final Quiz: Level 1", "", "", "Quiz.", "Annotate.", "Teach.", []),
	L(82, 3, 5, "Final Quiz: Level 2", "", "", "Quiz.", "Annotate.", "Teach.", []),
	L(83, 3, 5, "Final Quiz: Level 3", "", "", "Quiz.", "Annotate.", "Teach.", []),
	L(84, 3, 5, "Final Quiz: Level 4", "", "", "Quiz.", "Annotate.", "Teach.", []),
	L(85, 3, 5, "Final Quiz: Level 5", "", "", "Quiz.", "Annotate.", "Teach.", []),
	L(86, 3, 5, "Backtest 50 More Trades", "Final dataset.", "Run 50 historical setups, log all.", "", "Compute stats.", "Teach.", []),
	L(87, 3, 5, "Build Your Trading Bible", "1 doc, 1 page.", "Combine: system rules, risk rules, routine, post-loss protocol, daily checklist. PRINT.", "Write it.", "Read aloud.", "Teach.", []),
	L(88, 3, 5, "Teach a Beginner", "The ultimate test.", "Find someone curious. Explain forex from zero in 15 minutes.", "Prep your outline.", "Do it (live or recorded).", "Teach.", []),
	L(89, 3, 5, "Take 1 Week Off Charts", "Test your discipline.", "Closing this week, plan a 7-day break from charts AFTER day 90. Distance sharpens vision.", "Plan the week.", "Commit.", "Teach why breaks matter.", []),
	L(90, 3, 5, "Graduation: You Are A Trader", "Now the real work begins.", "You've built foundations 95% of retail never reach. The next 12 months = applying these daily. Welcome to the craft.", "Write your trader manifesto.", "Decide your next 90 days.", "Teach someone what 90 days of deliberate practice did for you.", [])
];
CURRICULUM.length;
var PHASES = [
	{
		id: "learn",
		label: "Learn",
		minutes: 10,
		desc: "Read the concept. Highlight what surprises you."
	},
	{
		id: "notes",
		label: "Notes",
		minutes: 20,
		desc: "Write notes IN YOUR OWN WORDS. No copy-paste."
	},
	{
		id: "practice",
		label: "Practice",
		minutes: 20,
		desc: "Open a chart. Apply. No trading — observation/analysis."
	},
	{
		id: "teach",
		label: "Teach Aloud",
		minutes: 10,
		desc: "Explain it to a beginner. If you can't, study again."
	}
];
//#endregion
export { LEVELS as n, PHASES as r, CURRICULUM as t };
