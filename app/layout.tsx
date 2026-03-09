import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "אלעד דוייטש | מאמן כושר ומדריך תזונה",
  description: "אימוני כושר אישיים, קבוצתיים וליווי תזונתי מותאם אישית בקריית מוצקין.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${assistant.variable} font-[family-name:var(--font-heebo)] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
