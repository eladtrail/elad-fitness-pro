import { Hero }           from "@/components/sections/hero";
import { Services }       from "@/components/sections/services";
import { About }          from "@/components/sections/about";
import { ContactForm }    from "@/components/sections/contact-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Dumbbell, MapPin } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <ContactForm />

      {/* Footer */}
      <footer dir="rtl" className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4" style={{ color: "#FF5733" }} />
            <span>אלעד דוייטש — מאמן כושר ומדריך תזונה</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" style={{ color: "#FF5733" }} />
            <span>קריית מוצקין</span>
            <span className="mx-2">·</span>
            <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </>
  );
}
