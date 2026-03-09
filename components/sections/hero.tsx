import Link from "next/link";
import { ChevronDown, Flame, Trophy, Users } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const BG_IMAGE =
  "https://res.cloudinary.com/dcenbexvc/image/upload/v1773046819/HERO_tymv8p.jpg";

const stats = [
  { icon: Trophy, value: "7+",   label: "שנות ניסיון" },
  { icon: Users,  value: "500+", label: "לקוחות מרוצים" },
  { icon: Flame,  value: "100%", label: "מחויבות לתוצאות" },
];

export function Hero() {
  return (
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Full-screen background image ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${BG_IMAGE}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* ── Gradient overlay — lighter so the photo shows through ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(10,10,10,0.62) 0%, rgba(10,10,10,0.38) 55%, rgba(10,10,10,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Orange glow behind headline ── */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[110px] pointer-events-none"
        style={{ background: "rgba(255,87,51,0.18)" }}
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 pt-28 pb-24">
        {/*
          In dir="rtl" a block-level div naturally starts from the right.
          max-w-2xl constrains width; text-right aligns text to the right.
        */}
        <div className="max-w-2xl text-right">

          {/* Badge */}
          <span
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
            style={{
              borderColor: "rgba(255,87,51,0.45)",
              background:  "rgba(255,87,51,0.12)",
              color:       "#FF7A5C",
            }}
          >
            <Flame className="h-3.5 w-3.5 flex-shrink-0" />
            מאמן כושר ומדריך תזונה אישי • קריות
          </span>

          {/* ── H1 ── */}
          <h1
            className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg"
            style={{ fontFamily: "var(--font-heebo), sans-serif" }}
          >
            אלעד דוייטש –{" "}
            <span
              className="whitespace-nowrap"
              style={{ color: "#FF5733" }}
            >
              הופך את המטרות שלך
            </span>
            <br />
            <span style={{ color: "#FF5733" }}>למציאות בקריות</span>
          </h1>

          {/* ── Sub-text ── */}
          <p
            className="mt-5 text-lg leading-relaxed text-white/80"
            style={{ fontFamily: "var(--font-heebo), sans-serif" }}
          >
            אימוני כושר אישיים, קבוצתיים וליווי תזונתי מותאם אישית בקריית מוצקין.
          </p>

          {/* ── CTA buttons ── */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Primary */}
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "font-bold text-base px-10 shadow-xl transition-all hover:scale-105 hover:brightness-110",
              )}
              style={{
                background:  "#FF5733",
                color:       "#fff",
                boxShadow:   "0 8px 32px rgba(255,87,51,0.45)",
                fontFamily:  "var(--font-heebo), sans-serif",
              }}
            >
              תיאום אימון היכרות
            </Link>

            {/* Secondary */}
            <Link
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-white/30 text-white hover:border-white hover:text-white bg-white/8 backdrop-blur-sm font-semibold text-base px-10",
              )}
              style={{ fontFamily: "var(--font-heebo), sans-serif" }}
            >
              השירותים שלי
            </Link>
          </div>

          {/* ── Stats row ── */}
          <div className="mt-12 flex flex-row gap-8 sm:gap-12">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center">
                <Icon className="h-5 w-5 mb-1" style={{ color: "#FF5733" }} />
                <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow">
                  {value}
                </span>
                <span className="text-xs sm:text-sm text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-[#FF5733] transition-colors"
        aria-label="גלול למטה"
      >
        <span className="text-xs" style={{ fontFamily: "var(--font-heebo), sans-serif" }}>
          גלול למטה
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>

      {/* ── Bottom fade to section below ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #09090b, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
