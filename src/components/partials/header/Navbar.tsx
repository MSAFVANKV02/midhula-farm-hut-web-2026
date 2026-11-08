"use client";

import * as React from "react";
import Link from "next/link";
import { FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons";
import {
  MessageCircle,
  Menu,
  X,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import NavbarTopNews from "./NavbarTopNews";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Live Stock", href: "#live-stock" },
    { label: "Instagram Reels", href: "#reels" },
    { label: "Delivery Guarantee", href: "#guarantee" },
    { label: "Kerala Farm Story", href: "#story" },
    { label: "Customer Reviews", href: "#reviews" },
    { label: "Price Estimator", href: "#calculator" },
  ];

  return (
    <>
      {/* Top Notification Bar - Clean, subtle slate & blue */}
      <NavbarTopNews />

      {/* Main Sticky Header - Clean White with soft shadow */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          scrolled
            ? "border-b border-slate-200/90 shadow-sm py-3"
            : "border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center p-1 shadow-sm border border-slate-800 group-hover:border-blue-600 transition-colors">
              <span className="font-black text-sm tracking-tighter text-white font-mono">
                MFH
              </span>
            </div>

            {/* <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 font-display">
                  MIDHULA
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  FARM HUT
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Exotic Fish &amp; Crayfish Breeder • Thrissur
              </p>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={FARM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title="Instagram @midhula_farm_hut (28.7K)"
            >
              <InstagramIcon className="w-5 h-5 text-pink-600" />
            </a>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="whatsapp"
                size="sm"
                className="gap-2 font-bold px-4 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Order</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-950 text-white font-mono font-bold text-xs flex items-center justify-center">
                    MFH
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Midhula Farm Hut
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Nedupuzha, Thrissur
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-slate-100">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full gap-2 font-bold"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Chat with Sajith</span>
                </Button>
              </a>

              <p className="text-[11px] text-center text-slate-500">
                +91 8129120437 • 28.7K Instagram Followers
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
