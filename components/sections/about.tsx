import { MapPin, Award, Heart, Target } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "הסמכות מקצועיות",
    text: "מאמן כושר מוסמך עם הכשרות בתחומי אימון אישי, אימון קבוצתי ותזונה ספורטיבית.",
  },
  {
    icon: Target,
    title: "גישה מותאמת אישית",
    text: "כל לקוח מקבל תוכנית ייחודית שבנויה בדיוק לפי המטרות, הגוף והאורח-חיים שלו.",
  },
  {
    icon: Heart,
    title: "מחויבות לתוצאות",
    text: "אני מאמין שכל אחד יכול להשיג את המטרות שלו — ואני כאן לוודא שזה יקרה.",
  },
];

export function About() {
  return (
    <section id="about" dir="rtl" className="bg-zinc-900 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Text side */}
          <div>
            <span
              className="mb-3 inline-block rounded-full border px-4 py-1 text-sm font-medium"
              style={{ borderColor: "rgba(255,87,51,0.25)", background: "rgba(255,87,51,0.08)", color: "#FF7A5C" }}
            >
              קצת עלי
            </span>

            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              אלעד דוייטש
              <br />
              <span style={{ color: "#FF5733" }}>מאמן כושר ותזונה</span>
            </h2>

            {/* Location badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-800 px-4 py-2">
              <MapPin className="h-4 w-4" style={{ color: "#FF5733" }} />
              <span className="text-sm font-medium text-zinc-300">
                קריית מוצקין, מרכז הקריות
              </span>
            </div>

            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              אני אלעד דוייטש, מאמן כושר ומדריך תזונה אישי מ<strong className="text-white">קריית מוצקין</strong>.
              עם למעלה מ-7 שנות ניסיון, אני מלווה מאות לקוחות בקריות ובסביבה בדרכם לגוף בריא,
              כושר גופני ואורח חיים מאוזן — ומשיג איתם תוצאות אמיתיות ומתמשכות.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              הגישה שלי משלבת אימונים אינטנסיביים ומדויקים עם הנחיית תזונה פרקטית — כי גוף חזק
              בנוי גם בחדר הכושר וגם בצלחת.
            </p>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "rgba(255,87,51,0.12)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#FF5733" }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="text-sm text-zinc-400 mt-0.5">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — decorative stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "7+",   label: "שנות ניסיון",        sub: "בתחום הכושר והתזונה" },
              { value: "500+", label: "לקוחות מרוצים",      sub: "בקריות ובסביבה" },
              { value: "100%", label: "מחויבות",             sub: "לכל לקוח בנפרד" },
              { value: "24/7", label: "זמינות",              sub: "לשאלות ותמיכה" },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-800/40 p-6 text-center"
              >
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: "#FF5733" }}
                >
                  {value}
                </span>
                <span className="mt-1 font-semibold text-white">{label}</span>
                <span className="text-xs text-zinc-500 mt-0.5">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
