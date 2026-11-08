"use client";

import * as React from "react";
import Link from "next/link";
import { FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons";
import {
  MessageCircle,
} from "lucide-react";
import NavbarTopNews from "./NavbarTopNews";
import { generateWhatsAppLink } from "@/lib/utils";
import WebSidebar from "../sidebar/WebSidebar";
import { webNavLinks } from "../navItems";
import Image from "next/image";
import MainLogo from "../logos/MainLogo";

// =====ICONS ===
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

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
          <MainLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3">
            {webNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-xs font-semibold group uppercase relative text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
                <span className="w-0 group-hover:w-full transition-all duration-300 h-[1px]  bg-black absolute left-0 bottom-1"></span>
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href={FARM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              title="Instagram @midhula_farm_hut (28.7K)"
            >
              {/* <InstagramIcon className="w-5 h-5 text-pink-600" /> */}
             <FaInstagram />
            </Link>

            <Link
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <MessageCircle className="w-5 h-5 text-green-500  fill-green-500" /> */}
              <FaWhatsapp />
            </Link>

            {/* Mobile Menu Trigger */}
            <div className="">
              <WebSidebar />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
