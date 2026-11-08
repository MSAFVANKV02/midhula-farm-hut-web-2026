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
import { generateWhatsAppLink } from "@/lib/utils";
import WebSidebar from "../sidebar/WebSidebar";
import { webNavLinks } from "../navItems";
import Image from "next/image";
import MainLogo from "../logos/MainLogo";

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

  return (
    <>
      {/* Top Notification Bar - Clean, subtle slate & blue */}
      <NavbarTopNews />

      {/* Main Sticky Header - Clean White with soft shadow */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          scrolled
            ? "border-b border-slate-200/90 shadow-sm py-3"
            : "border-b border-slate-100 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Monogram */}
        <MainLogo/>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {webNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
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
                variant="default"
                size="sm"
                className="gap-2 font-bold px-4 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp Order</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="sm:block block">
            <WebSidebar />
          </div>
        </div>
      </header>
    </>
  );
}
