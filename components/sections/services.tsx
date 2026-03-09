import type { LucideIcon } from "lucide-react";
import { Dumbbell, Users, Apple, Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const WA_NUMBER = "972526480383";

function waLink(serviceName: string) {
  const msg = `היי אלעד, אני מעוניין לשמוע פרטים נוספים על ${serviceName}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ── Per-service visual theme ── */
type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  perks: string[];
  highlight: boolean;
  badge: string | null;
  /** CSS gradient for the card header banner */
  bannerBg: string;
  /** Colour of the large decorative icon + glow */
  accentColor: string;
  /** Glow blob colour */
  glowColor: string;
};

const services: Service[] = [
  {
    icon: Dumbbell,
    title: "אימון אישי",
    description:
      "תוכנית אימון מותאמת אישית לפי היעדים, הרמה והגוף שלך. אני איתך בכל צעד.",
    perks: [
      "תוכנית מותאמת אישית",
      "ליווי וניטור שוטף",
      "מעקב התקדמות שבועי",
      "זמינות לשאלות 24/7",
    ],
    highlight: true,
    badge: "הפופולרי ביותר",
    bannerBg:
      "linear-gradient(135deg, #1c0800 0%, #3b1100 45%, #5c2000 75%, #7a2e00 100%)",
    accentColor: "#FF5733",
    glowColor: "rgba(255,87,51,0.55)",
  },
  {
    icon: Users,
    title: "אימון קבוצתי",
    description:
      "אנרגיה קבוצתית, תמיכה הדדית ותוצאות מדהימות. מועדים קבועים בשבוע.",
    perks: [
      "קבוצות קטנות עד 10 אנשים",
      "מגוון סגנונות אימון",
      "אווירה מוטיבציונית",
      "תשלום נגיש",
    ],
    highlight: false,
    badge: null,
    bannerBg:
      "linear-gradient(135deg, #080020 0%, #140040 45%, #240060 75%, #350085 100%)",
    accentColor: "#9B59B6",
    glowColor: "rgba(128,0,255,0.45)",
  },
  {
    icon: Apple,
    title: "ייעוץ תזונה",
    description:
      "תפריט אכילה מאוזן ומותאם לאורח חייך — ללא רעב, ללא ויתור על הנאות.",
    perks: [
      "תפריט אישי מלא",
      "מעקב ושינויים שוטפים",
      "חינוך תזונתי",
      "תמיכה בוואטסאפ",
    ],
    highlight: false,
    badge: null,
    bannerBg:
      "linear-gradient(135deg, #001500 0%, #002800 45%, #004000 75%, #005500 100%)",
    accentColor: "#27AE60",
    glowColor: "rgba(39,174,96,0.50)",
  },
];

/* ── Shared font helper ── */
const assistantFont: React.CSSProperties = {
  fontFamily: "var(--font-assistant), sans-serif",
};

/* ── Card banner (replaces broken <Image>) ── */
function ServiceBanner({
  Icon,
  bannerBg,
  accentColor,
  glowColor,
  highlight,
}: {
  Icon: LucideIcon;
  bannerBg: string;
  accentColor: string;
  glowColor: string;
  highlight: boolean;
}) {
  return (
    <div
      className="relative h-48 w-full overflow-hidden rounded-t-xl flex-shrink-0"
      style={{ background: bannerBg }}
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Corner glow blob */}
      <div
        className="absolute -top-6 -right-6 h-36 w-36 rounded-full blur-[55px]"
        style={{ background: glowColor }}
        aria-hidden="true"
      />

      {/* Large decorative icon — centred, very faint */}
      <Icon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32"
        style={{ color: accentColor, opacity: 0.14 }}
        aria-hidden="true"
      />

      {/* Bottom fade so card body feels seamless */}
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(24,24,27,1) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Small icon badge pinned bottom-right */}
      <div
        className={cn(
          "absolute bottom-3 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg",
          highlight ? "bg-[#FF5733]" : "bg-zinc-800/90 backdrop-blur-sm",
        )}
      >
        <Icon
          className="h-5 w-5"
          style={{ color: highlight ? "#fff" : accentColor }}
        />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" dir="rtl" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <span
            className="mb-3 inline-block rounded-full border px-4 py-1 text-sm font-medium"
            style={{
              borderColor: "rgba(255,87,51,0.25)",
              background: "rgba(255,87,51,0.08)",
              color: "#FF7A5C",
              ...assistantFont,
            }}
          >
            מה אני מציע
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white"
            style={assistantFont}
          >
            השירותים שלי
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto text-zinc-400 text-lg"
            style={assistantFont}
          >
            בחר את המסלול המתאים לך — כל שירות בנוי ממש בשבילך.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map(
            ({ icon: Icon, title, description, perks, highlight, badge, bannerBg, accentColor, glowColor }) => (
              <Card
                key={title}
                className={cn(
                  "relative flex flex-col border transition-all duration-300 hover:-translate-y-1 overflow-hidden rounded-xl",
                  highlight
                    ? "border-[#FF5733]/60 bg-zinc-900 shadow-xl shadow-[#FF5733]/15"
                    : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600",
                )}
              >
                {/* Badge */}
                {badge && (
                  <span
                    className="absolute top-3 right-3 z-20 rounded-full px-3 py-0.5 text-xs font-bold text-white shadow-md"
                    style={{ background: "#FF5733", ...assistantFont }}
                  >
                    {badge}
                  </span>
                )}

                {/* Banner — CSS-only, never breaks */}
                <ServiceBanner
                  Icon={Icon}
                  bannerBg={bannerBg}
                  accentColor={accentColor}
                  glowColor={glowColor}
                  highlight={highlight}
                />

                {/* Body */}
                <CardHeader className="pb-3 pt-4 text-right">
                  <CardTitle className="text-xl text-white" style={assistantFont}>
                    {title}
                  </CardTitle>
                  <CardDescription
                    className="text-zinc-400 text-sm leading-relaxed text-right"
                    style={assistantFont}
                  >
                    {description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 text-right">
                  <ul className="space-y-2.5">
                    {perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                        style={assistantFont}
                      >
                        <Check
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: "#FF5733" }}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* WhatsApp CTA */}
                <CardFooter className="pt-6">
                  <a
                    href={waLink(title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200",
                      highlight
                        ? "bg-[#FF5733] hover:bg-[#E64A19] text-white shadow-md shadow-[#FF5733]/30"
                        : "bg-zinc-800 hover:bg-[#FF5733] border border-zinc-700 hover:border-[#FF5733] text-zinc-100 hover:text-white",
                    )}
                    style={assistantFont}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 flex-shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    צור קשר
                  </a>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
