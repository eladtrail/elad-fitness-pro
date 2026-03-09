import { TikTokIcon } from "@/components/ui/tiktok-icon";
import { Star } from "lucide-react";

const assistantFont: React.CSSProperties = {
  fontFamily: "var(--font-assistant), sans-serif",
};

const stories = [
  {
    name: "יוסי כהן",
    age: 32,
    result: "ירד 14 ק\"ג ב-3 חודשים",
    quote:
      "אלעד שינה לי את הגישה לאימון לחלוטין. הוא לא רק מאמן – הוא מנטור שמלווה אותך בכל שלב. מעולם לא הרגשתי כל כך טוב עם עצמי.",
    initials: "יכ",
    color: "#FF5733",
    bg: "rgba(255,87,51,0.12)",
  },
  {
    name: "מיכל לוי",
    age: 27,
    result: "בנתה מסת שריר ועיצבה גוף",
    quote:
      "חשבתי שאי אפשר לשלב אימוני כוח עם חיים עמוסים. אלעד הוכיח לי שאפשר! התוכנית שלו גמישה, מותאמת אישית וממש עובדת.",
    initials: "מל",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.12)",
  },
  {
    name: "דני אברהם",
    age: 45,
    result: "שיפר כושר לב-ריאה ב-60%",
    quote:
      "בגיל 45 התחלתי מאפס. אלעד סבלני, מקצועי ויודע בדיוק איך לדחוף אותך בלי להגזים. היום אני רץ 10 ק\"מ בלי בעיה.",
    initials: "דא",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.12)",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#FF5733] text-[#FF5733]" />
      ))}
    </div>
  );
}

export function SuccessStories() {
  return (
    <section dir="rtl" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <span
            className="mb-3 inline-block rounded-full border px-4 py-1 text-sm font-medium"
            style={{
              borderColor: "rgba(255,87,51,0.25)",
              background: "rgba(255,87,51,0.08)",
              color: "#FF7A5C",
              ...assistantFont,
            }}
          >
            סיפורי הצלחה
          </span>
          <h2
            className="mt-2 text-4xl md:text-5xl font-extrabold text-white"
            style={assistantFont}
          >
            תוצאות אמיתיות של{" "}
            <span style={{ color: "#FF5733" }}>לקוחות אמיתיים</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-lg" style={assistantFont}>
            אלה לא סיסמאות – אלה שינויים אמיתיים שקרו בקריית מוצקין
          </p>

          {/* TikTok CTA */}
          <a
            href="https://www.tiktok.com/@eladtrail"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition-all hover:scale-105"
            style={{
              borderColor: "rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              ...assistantFont,
            }}
          >
            <TikTokIcon className="h-4 w-4" />
            ראה עוד תוצאות בטיקטוק
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <div
              key={s.name}
              className="relative flex flex-col gap-4 rounded-2xl border p-6 transition-all hover:scale-[1.02]"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "linear-gradient(145deg, #111315 0%, #0f0f0f 100%)",
                boxShadow: "0 4px 30px rgba(0,0,0,0.30)",
              }}
            >
              {/* Top row: avatar + name + stars */}
              <div className="flex items-center gap-3">
                {/* CSS Avatar */}
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-base font-extrabold text-white"
                  style={{ background: s.bg, border: `1px solid ${s.color}40` }}
                >
                  <span style={{ color: s.color }}>{s.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-white" style={assistantFont}>
                    {s.name}
                  </p>
                  <p className="text-xs text-zinc-500" style={assistantFont}>
                    גיל {s.age}
                  </p>
                </div>
                <div className="mr-auto">
                  <Stars />
                </div>
              </div>

              {/* Result badge */}
              <div
                className="inline-block self-start rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: s.bg, color: s.color, ...assistantFont }}
              >
                {s.result}
              </div>

              {/* Quote */}
              <p
                className="text-sm text-zinc-400 leading-relaxed flex-1"
                style={assistantFont}
              >
                &ldquo;{s.quote}&rdquo;
              </p>

              {/* Bottom glow accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}40, transparent)` }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
