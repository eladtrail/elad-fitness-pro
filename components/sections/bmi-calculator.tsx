"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

const WA_MSG = encodeURIComponent(
  "היי אלעד, חישבתי את ה-BMI שלי באתר ואני רוצה להתייעץ איתך על התוצאה 💪",
);

const assistantFont: React.CSSProperties = {
  fontFamily: "var(--font-assistant), sans-serif",
};

type BmiStatus = {
  label: string;
  color: string;
  bg: string;
  border: string;
  glow: string;
};

function getBmiStatus(bmi: number): BmiStatus {
  if (bmi < 18.5)
    return { label: "תת משקל",   color: "#FBBF24", bg: "rgba(251,191,36,0.10)",  border: "rgba(251,191,36,0.35)", glow: "rgba(251,191,36,0.20)" };
  if (bmi < 25)
    return { label: "משקל תקין", color: "#22C55E", bg: "rgba(34,197,94,0.10)",   border: "rgba(34,197,94,0.35)",  glow: "rgba(34,197,94,0.20)" };
  if (bmi < 30)
    return { label: "משקל עודף", color: "#FF5733", bg: "rgba(255,87,51,0.10)",   border: "rgba(255,87,51,0.35)",  glow: "rgba(255,87,51,0.20)" };
  return   { label: "השמנה",     color: "#EF4444", bg: "rgba(239,68,68,0.10)",   border: "rgba(239,68,68,0.35)",  glow: "rgba(239,68,68,0.20)" };
}

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi,    setBmi]    = useState<number | null>(null);
  const [error,  setError]  = useState("");

  function calculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) {
      setError("אנא הכנס ערכים תקינים");
      setBmi(null);
      return;
    }
    setError("");
    const result = w / Math.pow(h / 100, 2);
    setBmi(Math.round(result * 10) / 10);
  }

  const status = bmi !== null ? getBmiStatus(bmi) : null;

  return (
    <section dir="rtl" className="bg-zinc-950 py-16">
      <div className="container mx-auto px-6">
        <div
          className="mx-auto max-w-2xl rounded-2xl border p-8 relative overflow-hidden"
          style={{
            borderColor: "rgba(255,87,51,0.50)",
            background: "linear-gradient(145deg, #18100a 0%, #1a1a1a 60%, #0f0f0f 100%)",
            boxShadow: "0 0 40px rgba(255,87,51,0.10), inset 0 0 60px rgba(255,87,51,0.03)",
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-[60px] pointer-events-none"
            style={{ background: "rgba(255,87,51,0.18)" }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="mb-7 flex items-center gap-3 text-right">
            <div
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
              style={{ background: "rgba(255,87,51,0.15)", border: "1px solid rgba(255,87,51,0.30)" }}
            >
              <Calculator className="h-5 w-5" style={{ color: "#FF5733" }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white" style={assistantFont}>
                מחשבון BMI
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5" style={assistantFont}>
                גלה את מדד מסת הגוף שלך
              </p>
            </div>
          </div>

          {/* Fields */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Weight */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-zinc-300" style={assistantFont}>
                משקל (ק&quot;ג)
              </label>
              <input
                type="number"
                inputMode="decimal"
                placeholder="75"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="h-11 w-full rounded-xl border bg-zinc-900/80 px-4 text-white text-base outline-none transition-all placeholder:text-zinc-600"
                style={{
                  borderColor: "rgba(255,87,51,0.30)",
                  ...assistantFont,
                  // focus handled via onFocus/onBlur below
                }}
                onFocus={(e) => (e.target.style.borderColor = "#FF5733")}
                onBlur={(e)  => (e.target.style.borderColor = "rgba(255,87,51,0.30)")}
              />
            </div>

            {/* Height */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-zinc-300" style={assistantFont}>
                גובה (ס&quot;מ)
              </label>
              <input
                type="number"
                inputMode="decimal"
                placeholder="175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="h-11 w-full rounded-xl border bg-zinc-900/80 px-4 text-white text-base outline-none transition-all placeholder:text-zinc-600"
                style={{
                  borderColor: "rgba(255,87,51,0.30)",
                  ...assistantFont,
                }}
                onFocus={(e) => (e.target.style.borderColor = "#FF5733")}
                onBlur={(e)  => (e.target.style.borderColor = "rgba(255,87,51,0.30)")}
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="mb-3 text-sm text-red-400 text-right" style={assistantFont}>
              {error}
            </p>
          )}

          {/* Calculate button */}
          <button
            onClick={calculate}
            className="w-full rounded-xl py-3 text-base font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "#FF5733",
              boxShadow: "0 4px 20px rgba(255,87,51,0.40)",
              ...assistantFont,
            }}
          >
            חשב BMI
          </button>

          {/* Result */}
          {bmi !== null && status && (
            <div
              className="mt-6 rounded-xl border p-5 text-center transition-all"
              style={{
                background: status.bg,
                borderColor: status.border,
                boxShadow: `0 0 30px ${status.glow}`,
              }}
            >
              {/* BMI number */}
              <p
                className="text-5xl font-extrabold leading-none"
                style={{ color: status.color, ...assistantFont }}
              >
                {bmi}
              </p>

              {/* Status label */}
              <p
                className="mt-2 text-lg font-bold"
                style={{ color: status.color, ...assistantFont }}
              >
                {status.label}
              </p>

              {/* Scale reference */}
              <div className="mt-3 flex justify-center gap-1 flex-wrap">
                {[
                  { range: "מתחת ל-18.5", label: "תת משקל", c: "#FBBF24" },
                  { range: "18.5–24.9",   label: "תקין",     c: "#22C55E" },
                  { range: "25–29.9",     label: "עודף",     c: "#FF5733" },
                  { range: "30+",         label: "השמנה",    c: "#EF4444" },
                ].map(({ range, label, c }) => (
                  <span
                    key={label}
                    className="rounded-full px-2 py-0.5 text-xs"
                    style={{ background: `${c}18`, color: c, ...assistantFont }}
                  >
                    {range} · {label}
                  </span>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/972526480383?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105"
                style={{
                  background: "#25D366",
                  boxShadow: "0 4px 16px rgba(37,211,102,0.30)",
                  ...assistantFont,
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                רוצה להתייעץ עם אלעד על התוצאה?
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
