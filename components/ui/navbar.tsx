"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { TikTokIcon } from "@/components/ui/tiktok-icon";

const navLinks = [
  { href: "#home",     label: "בית" },
  { href: "#services", label: "שירותים" },
  { href: "#contact",  label: "צור קשר" },
  { href: "#about",    label: "אודות" },
];

export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      dir="rtl"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-zinc-800"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 group-hover:bg-orange-400 transition-colors">
            <Dumbbell className="h-4 w-4 text-white" />
          </span>
          <span className="text-lg font-bold text-white tracking-tight">
            אלעד <span className="text-orange-400">דוייטש</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* TikTok + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@eladtrail"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-orange-500 hover:bg-orange-400 text-white font-semibold shadow-md shadow-orange-900/30",
            )}
          >
            התחל עכשיו
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-orange-400 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-zinc-950/98 border-t border-zinc-800 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4 mb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base font-medium text-zinc-300 hover:text-orange-400 transition-colors py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-full justify-center bg-orange-500 hover:bg-orange-400 text-white font-semibold",
            )}
          >
            התחל עכשיו
          </Link>
          <a
            href="https://www.tiktok.com/@eladtrail"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mt-2"
          >
            <TikTokIcon className="h-4 w-4" />
            TikTok
          </a>
        </div>
      )}
    </nav>
  );
}
