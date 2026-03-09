import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    value: "beginners",
    question: "האם האימונים מתאימים גם למתחילים?",
    answer:
      "בהחלט. כל תוכנית אימון נבנית בהתאמה אישית לרמה הנוכחית שלך, עם דגש על טכניקה נכונה ומניעת פציעות.",
  },
  {
    value: "location",
    question: "איפה מתבצעים האימונים בקריית מוצקין?",
    answer:
      "האימונים מתקיימים בסטודיו מאובזר או באוויר הפתוח (תלוי בסוג האימון שנבחר), במיקומים מרכזיים ונוחים בעיר.",
  },
  {
    value: "results",
    question: "תוך כמה זמן רואים תוצאות?",
    answer:
      "זה משתנה מאדם לאדם, אך עם התמדה בתוכנית האימונים ובתפריט התזונה המותאם, לרוב מתחילים להרגיש בשינוי כבר בשבועות הראשונים.",
  },
  {
    value: "commitment",
    question: "האם חייבים להתחייב לתקופה ארוכה?",
    answer:
      "המטרה שלי היא לבנות לך אורח חיים בריא. ישנן חבילות שונות וגמישות שמתאימות לצרכים וליעדים שלך.",
  },
];

const assistantFont: React.CSSProperties = {
  fontFamily: "var(--font-assistant), sans-serif",
};

export function FAQ() {
  return (
    <section id="faq" dir="rtl" className="py-24" style={{ background: "#111315" }}>
      <div className="container mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-14 text-center">
          <span
            className="mb-3 inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm font-medium"
            style={{
              borderColor: "rgba(255,87,51,0.25)",
              background: "rgba(255,87,51,0.08)",
              color: "#FF7A5C",
              ...assistantFont,
            }}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            שאלות נפוצות
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white"
            style={assistantFont}
          >
            יש לך שאלות?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-lg" style={assistantFont}>
            הנה התשובות לשאלות הכי נפוצות.
          </p>
        </div>

        {/* ── Accordion ── */}
        <div className="mx-auto max-w-3xl">
          <Accordion
            className="flex w-full flex-col gap-3"
            multiple={false}
          >
            {faqs.map(({ value, question, answer }) => (
              <AccordionItem
                key={value}
                value={value}
                className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 transition-colors hover:border-zinc-700 not-last:border-b-0"
              >
                <AccordionTrigger
                  className="w-full py-5 text-right text-base font-semibold text-white hover:no-underline hover:text-[#FF5733] transition-colors [&>svg]:text-[#FF5733] [&>svg]:flex-shrink-0"
                  style={assistantFont}
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  <p
                    className="pb-5 text-zinc-400 leading-relaxed text-right text-[15px]"
                    style={assistantFont}
                  >
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
