import { CURRICULUM } from "./curriculum";

export interface FlashcardDef {
  term: string;
  definition: string;
}

export const FLASHCARDS: FlashcardDef[] = [
  { term: "Pip", definition: "The 4th decimal in most pairs (2nd in JPY pairs). Smallest standard price move." },
  { term: "Pipette", definition: "1/10 of a pip. The 5th decimal in most pairs." },
  { term: "Lot", definition: "Trade size. Standard = 100k units, Mini = 10k, Micro = 1k, Nano = 100." },
  { term: "Leverage", definition: "Borrowed buying power. 1:100 = $1 controls $100." },
  { term: "Margin", definition: "The deposit your broker locks to open a leveraged position." },
  { term: "Spread", definition: "Difference between Bid and Ask. The broker's fee per round-trip." },
  { term: "Bid", definition: "The price at which you can SELL. Always lower than Ask." },
  { term: "Ask", definition: "The price at which you can BUY. Always higher than Bid." },
  { term: "Drawdown", definition: "Peak-to-trough equity decline. The cruelest math in trading." },
  { term: "Risk-Reward Ratio", definition: "Reward in pips ÷ Risk in pips. Pros aim for 1:2 or better." },
  { term: "Stop Loss", definition: "Pre-set price to exit a losing trade. Placed where your idea is wrong." },
  { term: "Take Profit", definition: "Pre-set price to exit a winning trade. Usually next S/R." },
  { term: "Support", definition: "Price level where buyers historically step in (floor)." },
  { term: "Resistance", definition: "Price level where sellers historically step in (ceiling)." },
  { term: "Uptrend", definition: "Higher highs and higher lows." },
  { term: "Downtrend", definition: "Lower highs and lower lows." },
  { term: "Range", definition: "Sideways price action with no clear trend." },
  { term: "Pin Bar", definition: "Tiny body + long wick. Rejection candle. Powerful at S/R only." },
  { term: "Bullish Engulfing", definition: "Green candle's body fully covers prior red candle. Reversal signal." },
  { term: "Bearish Engulfing", definition: "Red candle fully engulfs prior green candle. Reversal signal." },
  { term: "Doji", definition: "Open ≈ Close. Indecision. Matters mainly at S/R or after a strong move." },
  { term: "BOS", definition: "Break of Structure — price breaks last swing high (or low) in trend direction." },
  { term: "CHoCH", definition: "Change of Character — break against the trend. Early reversal signal." },
  { term: "Supply Zone", definition: "Rectangle area where price dropped sharply from. Sellers live there." },
  { term: "Demand Zone", definition: "Rectangle area where price rallied sharply from. Buyers live there." },
  { term: "Confluence", definition: "Multiple reasons aligning at one price — fib + S/R + candle, etc." },
  { term: "Fibonacci Retracement", definition: "38.2 / 50 / 61.8 / 78.6% pullback levels." },
  { term: "Breakout", definition: "Close beyond a key level with follow-through. Watch for fakeouts." },
  { term: "Fakeout", definition: "Wick beyond a level, close back inside. A trap." },
  { term: "Expectancy", definition: "(Win% × AvgWin) − (Loss% × AvgLoss). > 0 = profitable system." },
  { term: "Position Size", definition: "(Account × Risk%) ÷ (SL pips × pip value). Master before trading." },
  { term: "Revenge Trading", definition: "Forcing trades after a loss to 'win it back'. Career killer." },
  { term: "Backtesting", definition: "Applying a system to past charts to test viability (30+ trades min)." },
  { term: "Trading System", definition: "Written rules for setup, entry, SL, TP, risk, exit. No exceptions." },
  { term: "Correlation", definition: "Pairs that move together (EUR/USD & GBP/USD). Hidden leverage." },
];

// All curriculum terms add to flashcards too
const seen = new Set(FLASHCARDS.map((f) => f.term.toLowerCase()));
for (const l of CURRICULUM) {
  for (const t of l.keyTerms || []) {
    if (!seen.has(t.toLowerCase())) {
      seen.add(t.toLowerCase());
      FLASHCARDS.push({ term: t, definition: l.concept });
    }
  }
}
