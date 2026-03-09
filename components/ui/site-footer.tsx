import { Dumbbell, MapPin } from "lucide-react";

const assistantFont: React.CSSProperties = {
  fontFamily: "var(--font-assistant), sans-serif",
};

export function SiteFooter() {
  return (
    <footer dir="rtl" className="bg-zinc-950 border-t border-zinc-800 py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-5">

        {/* Top row — brand + location */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-zinc-500">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4 flex-shrink-0" style={{ color: "#FF5733" }} />
            <span style={assistantFont}>אלעד דוייטש — מאמן כושר ומדריך תזונה</span>
          </div>
          <div className="flex items-center gap-1.5" style={assistantFont}>
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" style={{ color: "#FF5733" }} />
            <span>קריית מוצקין</span>
            <span className="mx-2 text-zinc-700">·</span>
            <span>© {new Date().getFullYear()} כל הזכויות שמורות</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-zinc-800/60" />

        {/* Credit line */}
        <p className="text-sm text-zinc-600 text-center" style={assistantFont}>
          נבנה באהבה ע&quot;י{" "}
          <a
            href="https://slavx.site"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors hover:text-[#FF5733]"
            style={{ color: "#FF7A5C" }}
          >
            SLAVX.SITE
          </a>
        </p>

      </div>
    </footer>
  );
}
