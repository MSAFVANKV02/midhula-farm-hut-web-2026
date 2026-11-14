"use client";

import * as React from "react";
import Link from "next/link";
import { FARM_INFO } from "@/data/farmData";
import { generateWhatsAppLink } from "@/lib/utils";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import {
  MessageCircle,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";
import MainLogo from "../logos/MainLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <MainLogo />
              <div>
                <span className="text-lg font-extrabold text-white! tracking-tight font-display">
                  MIDHULA FARM HUT
                </span>
                <p className="text-[11px] text-blue-400 font-medium">
                  Nedupuzha, Thrissur, Kerala
                </p>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              South India&apos;s trusted captive breeder of championship Albino
              Guppies, Electric Blue Crayfish, and exotic freshwater fish.
              Dispatched Pan-India in insulated thermocol vaults with 72-hour
              pure medical oxygen.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={FARM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                title="Instagram @midhula_farm_hut (28.7K)"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
              </a>

              <a
                href={FARM_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                title="YouTube @midhula_farm_hut (75K)"
              >
                <YoutubeIcon className="w-4 h-4 text-red-500" />
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 flex items-center justify-center transition-colors"
                title="WhatsApp Direct Contact"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Live Stock Catalog
                </a>
              </li>
              <li>
                <a href="#reels" className="hover:text-white transition-colors">
                  Instagram Video Reels
                </a>
              </li>
              <li>
                <a href="#guarantee" className="hover:text-white transition-colors">
                  Live Delivery Guarantee
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Kerala Farm Story
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Unboxing Proofs
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Price &amp; Courier Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Strains & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Strains
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Albino Full Red Dumbo Ear
                </a>
              </li>
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Cherax Pulcher Electric Blue
                </a>
              </li>
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Black Moscow Velvet Line
                </a>
              </li>
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Australian Redclaw Lobster
                </a>
              </li>
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Green Terror Show Cichlids
                </a>
              </li>
              <li>
                <a href="#live-stock" className="hover:text-white transition-colors">
                  Java Moss on Ceramic Caves
                </a>
              </li>
            </ul>
          </div>

          {/* Farm Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Farm &amp; Dispatch
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Nedupuzha, Thrissur, Kerala, India - 680007
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href={`tel:${FARM_INFO.whatsappDigits}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {FARM_INFO.whatsappNumber}
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-900">
                <span className="font-semibold text-slate-300">Live Dispatches: </span>
                Every Monday &amp; Tuesday via Express Cargo.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Midhula Farm Hut. Founded by Midhun. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
