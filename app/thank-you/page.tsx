import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SiteFooter } from "@/components/ui/site-footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const WA_MSG = encodeURIComponent(
  "היי אלעד, אני רוצה לשמוע עוד על אימוני כושר ותזונה",
);

const heeboFont: React.CSSProperties  = { fontFamily: "var(--font-heebo), sans-serif" };
const assistantFont: React.CSSProperties = { fontFamily: "var(--font-assistant), sans-serif" };

export const metadata = {
  title: "תודה רבה! | אלעד דוייטש",
  description: "הפרטים שלך התקבלו בהצלחה. אלעד יחזור אליך בהקדם.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950" dir="rtl">

      {/* ── Main content ── */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">

        {/* Orange radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: "rgba(255,87,51,0.13)" }}
          aria-hidden="true"
        />

        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-xl">

          {/* Animated checkmark */}
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full"
            style={{ background: "rgba(255,87,51,0.12)", boxShadow: "0 0 60px rgba(255,87,51,0.25)" }}
          >
            <CheckCircle
              className="h-14 w-14"
              style={{ color: "#FF5733" }}
              strokeWidth={1.5}
            />
          </div>

          {/* Badge */}
          <span
            className="rounded-full border px-4 py-1.5 text-sm font-semibold"
            style={{
              borderColor: "rgba(255,87,51,0.35)",
              background: "rgba(255,87,51,0.10)",
              color: "#FF7A5C",
              ...assistantFont,
            }}
          >
            הפנייה התקבלה בהצלחה ✓
          </span>

          {/* H1 */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            style={heeboFont}
          >
            הצעד הראשון לשינוי{" "}
            <span style={{ color: "#FF5733" }}>נעשה!</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg text-zinc-400 leading-relaxed"
            style={assistantFont}
          >
            הפרטים שלך הגיעו אליי אלעד. אני כבר עובר עליהם ואחזור אליך בהקדם
            לתיאום אימון היכרות בקריית מוצקין.
          </p>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            {/* Back home */}
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-zinc-700 text-zinc-300 hover:border-zinc-400 hover:text-white bg-transparent font-semibold px-8",
              )}
              style={assistantFont}
            >
              ← חזרה לדף הבית
            </Link>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/972526480383?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "font-bold px-8 text-white transition-all hover:scale-105 hover:brightness-110",
              )}
              style={{
                background: "#25D366",
                boxShadow: "0 6px 24px rgba(37,211,102,0.30)",
                ...assistantFont,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 flex-shrink-0 ml-2"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שלח לי הודעה בוואטסאפ
            </a>

          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
