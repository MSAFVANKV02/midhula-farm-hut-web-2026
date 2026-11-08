"use client";

import * as React from "react";
import Image from "next/image";
import { FARM_INFO, LIVE_STOCK } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateWhatsAppLink, formatINR } from "@/lib/utils";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import {
  MessageCircle,
  ShieldCheck,
  Truck,
  ArrowRight,
  Droplets,
  Users,
  CheckCircle2,
  Star,
} from "lucide-react";

export function HeroSection({
  onSelectBreed,
}: {
  onSelectBreed?: (breedId: string) => void;
}) {
  const featuredBreed = LIVE_STOCK[0]; // Albino Full Red

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/20 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Origin Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs text-slate-700">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="font-bold text-slate-900">Kerala Fish Farm</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-700 font-semibold">
                Captive Bred in Nedupuzha, Thrissur
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.15] font-display">
              Exotic Breeds Raised with Passion in{" "}
              <span className="text-blue-600">Thrissur</span>,{" "}
              <span className="text-red-600">Kerala.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              South India&apos;s celebrated captive breeder of championship
              Albino Full Red Guppies, Electric Blue Crayfish, and exotic
              freshwater fish. Dispatched Pan-India with 72-Hour Pure Medical
              Oxygen in insulated thermocol vaults and our 100% Live Arrival
              Guarantee.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={generateWhatsAppLink(
                  featuredBreed.name,
                  featuredBreed.unit
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto gap-2.5 font-bold shadow-sm text-base px-6"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Order on WhatsApp (+91 8129120437)</span>
                </Button>
              </a>

              <a href="#live-stock" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-semibold text-base group px-6"
                >
                  <span>Explore Live Stock</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            {/* Core Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    100% Live Arrival
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Same-day DOA refund
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    72h Pure Oxygen
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Thermocol insulated
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Spring Fed Vats
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Pure captive genetics
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Live Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
              {/* Card Top Banner */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
                    Breed Spotlight
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-600 text-white">
                  Available for Dispatch
                </span>
              </div>

              {/* Real Fish Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 group">
                <Image
                  src={featuredBreed.image}
                  alt={featuredBreed.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                      {featuredBreed.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 drop-shadow-sm">
                      {featuredBreed.name}
                    </h3>
                  </div>

                  <div className="text-right bg-white/95 text-slate-900 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[10px] uppercase font-bold text-slate-500">
                      Price / Pair
                    </p>
                    <p className="text-lg font-black text-blue-600 font-mono">
                      {formatINR(featuredBreed.price)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Body & Specs */}
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Water pH
                    </p>
                    <p className="font-bold text-slate-900 mt-0.5">
                      {featuredBreed.waterSpecs.ph}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Temperature
                    </p>
                    <p className="font-bold text-slate-900 mt-0.5">
                      {featuredBreed.waterSpecs.temp}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">
                      Unit
                    </p>
                    <p className="font-bold text-slate-900 mt-0.5">
                      Pair (1M+1F)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={generateWhatsAppLink(
                      featuredBreed.name,
                      featuredBreed.unit
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="whatsapp"
                      size="md"
                      className="w-full gap-2 font-bold"
                    >
                      <MessageCircle className="w-4 h-4 fill-black" />
                      <span>Book on WhatsApp</span>
                    </Button>
                  </a>

                  {onSelectBreed && (
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => onSelectBreed(featuredBreed.id)}
                    >
                      Details
                    </Button>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-500">
                      ★★★★★
                    </div>
                    <span className="font-medium text-slate-700">128+ Reviews</span>
                  </div>
                  <span className="text-slate-400">100% Live Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Key Stats Bar - Clean white cards */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              {FARM_INFO.stats.instagramFollowers}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center justify-center gap-1.5 font-medium">
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              Instagram Followers
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              {FARM_INFO.stats.youtubeSubscribers}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center justify-center gap-1.5 font-medium">
              <YoutubeIcon className="w-4 h-4 text-red-600" />
              YouTube Subscribers
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-blue-600 font-display">
              {FARM_INFO.stats.satisfiedHobbyists}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center justify-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-blue-600" />
              Parcels Dispatched
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-red-600 font-display">
              {FARM_INFO.stats.liveArrivalRate}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center justify-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              Live Arrival Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
