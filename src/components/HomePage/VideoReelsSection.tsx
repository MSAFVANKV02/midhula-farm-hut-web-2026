"use client";

import * as React from "react";
import Image from "next/image";
import { REELS_DATA, ReelItem, FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { ReelModal } from "./ReelModal";
import { generateWhatsAppLink } from "@/lib/utils";
import { InstagramIcon } from "@/components/icons";
import {
  Play,
  Eye,
  Heart,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export function VideoReelsSection() {
  const [selectedReel, setSelectedReel] = React.useState<ReelItem | null>(null);

  return (
    <section id="reels" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
              <span>@midhula_farm_hut • Reels in Action</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Watch Our Live Stock in Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real unfiltered footage straight from our breeding vats and
              packaging station in Thrissur, Kerala. Tap any reel to watch or
              inquire directly on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                id="reel-prev-btn"
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                aria-label="Previous reel"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="reel-next-btn"
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 flex items-center justify-center transition-all shadow-sm cursor-pointer"
                aria-label="Next reel"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <a
              href={FARM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="gap-2 text-xs font-semibold shadow-sm">
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>Visit Instagram (28.7K)</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative pb-6">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: "#reel-prev-btn",
              nextEl: "#reel-next-btn",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="reels-swiper !pb-12"
          >
            {REELS_DATA.map((reel) => (
              <SwiperSlide key={reel.id}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full shadow-sm">
                  {/* Vertical 9:16 Video Thumbnail Container */}
                  <div
                    onClick={() => setSelectedReel(reel)}
                    className="relative aspect-[9/13] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  >
                    <Image
                      src={reel.thumbnail}
                      alt={reel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                        {reel.category}
                      </span>
                      <span className="text-[10px] font-mono font-medium text-white bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        {reel.duration}
                      </span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 fill-slate-900 ml-1" />
                      </div>
                    </div>

                    {/* Bottom Stats Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                      <div className="flex items-center gap-3 text-xs mb-1 font-medium">
                        <span className="flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          <Eye className="w-3 h-3 text-blue-400" />
                          {reel.views}
                        </span>
                        <span className="flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                          <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                          {reel.likes}
                        </span>
                      </div>
                      <h3 className="font-bold text-white text-sm line-clamp-2 leading-snug drop-shadow-sm">
                        {reel.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2 mt-auto">
                    <a
                      href={generateWhatsAppLink(
                        undefined,
                        undefined,
                        reel.whatsappInquiry
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="whatsapp"
                        size="sm"
                        className="w-full text-xs font-bold gap-1.5 h-9"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-black" />
                        <span>Inquire</span>
                      </Button>
                    </a>

                    <a
                      href={reel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
                      title="Open in Instagram"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Reel Playback Modal */}
      <ReelModal
        reel={selectedReel}
        isOpen={!!selectedReel}
        onClose={() => setSelectedReel(null)}
      />
    </section>
  );
}
