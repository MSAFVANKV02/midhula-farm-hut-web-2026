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
import { FaInstagram, FaYoutube } from "react-icons/fa";

export function HeroSection({
  onSelectBreed,
}: {
  onSelectBreed?: (breedId: string) => void;
}) {
  const featuredBreed = LIVE_STOCK[0]; // Albino Full Red

  const statusCards = [
    {
      id: 1,
      title: "Live Arrival Guarantee",
      count: FARM_INFO.stats.liveArrivalRate,
      description: "100% safe delivery or same-day DOA refund",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      id: 2,
      title: "Happy Hobbyists",
      count: FARM_INFO.stats.satisfiedHobbyists,
      description: "Satisfied fish keepers who trust our farm",
      icon: <Users className="w-5 h-5 text-red-600" />,
    },
    {
      id: 3,
      title: "Instagram Community",
      count: FARM_INFO.stats.instagramFollowers,
      description: "Join our growing fishkeeping community",
      icon: <FaInstagram className="w-5 h-5 text-pink-600" />,
    },
    {
      id: 4,
      title: "YouTube Community",
      count: FARM_INFO.stats.youtubeSubscribers,
      description: "Follow our farm journey and fishkeeping tips",
      icon: <FaYoutube className="w-5 h-5 text-red-600" />,
    },
  ];

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Left Column: Core Value Proposition */}
        <div className="flex gap-3 text-center flex-col items-center justify-center">
          {/* Origin Pill */}
          <div className="flex items-center gap-1 sm:flex-row flex-col px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs text-slate-700">
           <div className="flex items-center gap-1">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-bold text-slate-900">Kerala Fish Farm</span>
           </div>
            <span className="text-slate-300 sm:block hidden">•</span>
            <span className="text-gray-600 text-xs font-semibold">
              Captive Bred in Nedupuzha, Thrissur
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl uppercase font-medium tracking-tight text-slate-950 leading-[1.15] font-display">
            {/* Exotic Breeds Raised with Passion  */}
            Living Jewels from Our Family to Your Home.
            {/* <span className="">Thrissur</span>,{" "}
            <span className="">Kerala.</span> */}
          </h1>

          {/* Subtitle */}
          <p className="text-xs text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
            South India&apos;s celebrated captive breeder of championship Albino
            Full Red Guppies, Electric Blue Crayfish, and exotic freshwater
            fish. Dispatched Pan-India with 72-Hour Pure Medical Oxygen in
            insulated thermocol vaults and our 100% Live Arrival Guarantee.
          </p>

          {/* Core Trust Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6">
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

            <div className="flex items-center gap-3 p-3 max-sm:col-span-2 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
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

        {/* Global Key Stats Bar - Clean white cards */}
        <div className=" pt-10  grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {statusCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
            >
              <p className="text-3xl font-black text-slate-950 font-display">
                {card.count}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center justify-center gap-1.5 font-medium">
                {card.icon}
                {card.title}
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// =============
{
  /* Right Column: Featured Live Spotlight Card */
}
// <div className="lg:col-span-5">
//   <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
//     {/* Card Top Banner */}
//     <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
//       <div className="flex items-center gap-2">
//         <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
//         <span className="text-xs font-bold tracking-wider uppercase text-slate-200">
//           Breed Spotlight
//         </span>
//       </div>
//       <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-600 text-white">
//         Available for Dispatch
//       </span>
//     </div>

//     {/* Real Fish Image */}
//     <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 group">
//       <Image
//         src={featuredBreed.image}
//         alt={featuredBreed.name}
//         fill
//         className="object-cover group-hover:scale-105 transition-transform duration-500"
//         priority
//         sizes="(max-width: 768px) 100vw, 500px"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

//       <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
//         <div>
//           <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
//             {featuredBreed.categoryLabel}
//           </span>
//           <h3 className="text-lg font-bold text-white mt-1 drop-shadow-sm">
//             {featuredBreed.name}
//           </h3>
//         </div>

//         <div className="text-right bg-white/95 text-slate-900 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm">
//           <p className="text-[10px] uppercase font-bold text-slate-500">
//             Price / Pair
//           </p>
//           <p className="text-lg font-black text-blue-600 font-mono">
//             {formatINR(featuredBreed.price)}
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Card Body & Specs */}
//     <div className="p-5 space-y-4">
//       <div className="grid grid-cols-3 gap-2 text-center text-xs">
//         <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
//           <p className="text-[10px] text-slate-500 uppercase font-semibold">
//             Water pH
//           </p>
//           <p className="font-bold text-slate-900 mt-0.5">
//             {featuredBreed.waterSpecs.ph}
//           </p>
//         </div>

//         <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
//           <p className="text-[10px] text-slate-500 uppercase font-semibold">
//             Temperature
//           </p>
//           <p className="font-bold text-slate-900 mt-0.5">
//             {featuredBreed.waterSpecs.temp}
//           </p>
//         </div>

//         <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
//           <p className="text-[10px] text-slate-500 uppercase font-semibold">
//             Unit
//           </p>
//           <p className="font-bold text-slate-900 mt-0.5">
//             Pair (1M+1F)
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center gap-2 pt-1">
//         <a
//           href={generateWhatsAppLink(
//             featuredBreed.name,
//             featuredBreed.unit
//           )}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1"
//         >
//           <Button
//             variant="outline"
//             size="lg"
//             className="w-full gap-2 font-bold"
//           >
//             <MessageCircle className="w-4 h-4 fill-black" />
//             <span>Book on WhatsApp</span>
//           </Button>
//         </a>

//         {onSelectBreed && (
//           <Button
//             variant="secondary"
//             size="lg"
//             onClick={() => onSelectBreed(featuredBreed.id)}
//           >
//             Details
//           </Button>
//         )}
//       </div>

//       <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
//         <div className="flex items-center gap-1.5">
//           <div className="flex text-amber-500">
//             ★★★★★
//           </div>
//           <span className="font-medium text-slate-700">128+ Reviews</span>
//         </div>
//         <span className="text-slate-400">100% Live Guarantee</span>
//       </div>
//     </div>
//   </div>
// </div>
