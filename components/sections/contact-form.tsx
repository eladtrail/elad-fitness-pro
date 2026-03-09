"use client";

import { useState } from "react";
import { Send, CheckCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const goalOptions = [
  "ירידה במשקל",
  "בניית מסת שריר",
  "שיפור כושר גופני",
  "תזונה בריאה",
  "הכנה לאירוע ספורטיבי",
  "אחר",
];

export function ContactForm() {
  const [form, setForm]           = useState({ name: "", phone: "", goal: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" dir="rtl" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* Left column — info */}
          <div>
            <span
              className="mb-3 inline-block rounded-full border px-4 py-1 text-sm font-medium"
              style={{ borderColor: "rgba(255,87,51,0.25)", background: "rgba(255,87,51,0.08)", color: "#FF7A5C" }}
            >
              בואו נדבר
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
              צור קשר
            </h2>
            <p className="mt-4 text-zinc-400 text-lg leading-relaxed">
              השאר פרטים ואחזור אליך תוך 24 שעות לתיאום שיחת היכרות חינמית.
            </p>

            {/* Contact details */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(255,87,51,0.12)" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#FF5733" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">מיקום</p>
                  <p className="text-sm text-zinc-400">קריית מוצקין, מרכז הקריות</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0"
                  style={{ background: "rgba(255,87,51,0.12)" }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#FF5733" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">טלפון</p>
                  <a
                    href="tel:0526480383"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                    dir="ltr"
                  >
                    052-6480383
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/972526480383?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9C%D7%A2%D7%93%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A2%D7%9C%20%D7%90%D7%99%D7%9E%D7%95%D7%A0%D7%99%20%D7%9B%D7%95%D7%A9%D7%A8%20%D7%95%D7%AA%D7%96%D7%95%D7%A0%D7%94"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שלח הודעה בוואטסאפ
            </a>
          </div>

          {/* Right column — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-700 bg-zinc-800/50 p-10 text-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h3 className="text-2xl font-bold text-white">קיבלתי את פנייתך!</h3>
                <p className="text-zinc-400">
                  אחזור אליך בהקדם האפשרי. מחכה לדבר איתך 💪
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", goal: "" }); }}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "mt-2 border-zinc-600 text-zinc-300 hover:border-[#FF5733] hover:text-[#FF5733] bg-transparent",
                  )}
                >
                  שלח פנייה נוספת
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 shadow-xl shadow-black/30 backdrop-blur"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                    שם מלא <span style={{ color: "#FF5733" }}>*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="ישראל ישראלי"
                    value={form.name}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-300">
                    טלפון <span style={{ color: "#FF5733" }}>*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="050-0000000"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-600"
                  />
                </div>

                {/* Goal */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="goal" className="text-sm font-medium text-zinc-300">
                    מה המטרה שלך? <span style={{ color: "#FF5733" }}>*</span>
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    required
                    value={form.goal}
                    onChange={handleChange}
                    className="h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2"
                    style={{ "--tw-ring-color": "#FF5733" } as React.CSSProperties}
                  >
                    <option value="" disabled>בחר מטרה...</option>
                    {goalOptions.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-2 text-white font-bold text-base py-6 transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ background: "#FF5733", boxShadow: "0 4px 24px rgba(255,87,51,0.35)" }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      שולח...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      שלח פנייה
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-zinc-600">
                  הפרטים שלך שמורים אצלנו בסודיות מוחלטת.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
