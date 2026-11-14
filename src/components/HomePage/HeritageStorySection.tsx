"use client";

import * as React from "react";
import Image from "next/image";
import { FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import {
  MapPin,
  Heart,
  Droplets,
  Sun,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

export function HeritageStorySection() {
  return (
    <section id="story" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual of the Kerala Farm */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=1000&q=80"
                alt="Midhula Farm Hut breeding ponds in Nedupuzha, Thrissur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-transparent" />


              <div className="absolute top-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Nedupuzha, Thrissur, Kerala
                </span>
                <h3 className="text-xl font-bold text-white! mt-1">
                  60+ Bio-Filtered Outdoor Vats Reared Under Tropical Sunshine
                </h3>
              </div>
            </div>

            {/* Overlap Card: The Inspiration behind the name */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-right-6 p-5 rounded-2xl bg-white border border-slate-200 shadow-xl sm:max-w-xs">
              <div className="flex items-center gap-2 mb-2 text-red-600">
                <Heart className="w-4 h-4 fill-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Named After Midhula
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Founded by Sajith out of a deep personal passion for pure
                aquatic genetics and named with love after Midhula. Built on
                honesty and uncompromised care.
              </p>
            </div>
          </div>

          {/* Right Column: Founder's Philosophy & Heritage */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span>Hatchery Heritage • Thrissur, Kerala</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
              Raised in Real Water. Cultured with Pure Care.
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                What began as a handful of breeding ponds in Nedupuzha,
                Thrissur has grown into one of India&apos;s most respected
                ornamental fish hatcheries, trusted by over 28,700 Instagram
                enthusiasts and 91,000 YouTube subscribers nationwide.
              </p>
              <p>
                Unlike commercial industrial hatcheries that rely on chemical
                growth boosters and artificial hormones, Midhula Farm Hut cultures
                its stock in natural mineral-rich Kerala water, conditioned with
                live moina, daphnia, artemia, and tropical sunlight.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Sun className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Natural Green-Water Nursery
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fry feed continuously on natural infusoria and rotifers,
                    building robust disease resistance and natural vibrant color.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Droplets className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Biological Filtration Only
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our outdoor tanks use biological sponges, volcanic gravel,
                    and living oxygen plants to sustain pure, mature aquatic
                    ecosystems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Farm Visits Welcome in Thrissur
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Located in Nedupuzha, Thrissur. Aquarists can message Sajith
                    on WhatsApp to arrange a personal walk-in farm tour and pick
                    strains on the spot.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={generateWhatsAppLink(
                  undefined,
                  undefined,
                  "Hi Sajith, I'd like to plan a visit to your Nedupuzha, Thrissur farm. What are your visiting hours?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg" className="gap-2 font-bold shadow-sm">
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Plan a Farm Visit on WhatsApp</span>
                </Button>
              </a>

              <a
                href={FARM_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2 text-xs font-semibold">
                  <span>Watch Farm Vlogs (75K Subs)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
