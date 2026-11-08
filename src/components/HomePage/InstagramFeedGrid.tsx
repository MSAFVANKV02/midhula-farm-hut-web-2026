"use client";

import * as React from "react";
import Image from "next/image";
import { INSTAGRAM_HIGHLIGHT_IMAGES, FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons";
import {
  Heart,
  ExternalLink,
  Camera,
} from "lucide-react";

export function InstagramFeedGrid() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Camera className="w-3.5 h-3.5 mr-1" />
              <span>@midhula_farm_hut • 1,968+ Posts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
              Live from the Hatchery Feed
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real moments captured daily at Midhula Farm Hut in Nedupuzha,
              Thrissur. Tap any post to view high-resolution photography on our
              Instagram.
            </p>
          </div>

          <a
            href={FARM_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="md" className="gap-2 text-xs font-semibold shadow-sm">
              <InstagramIcon className="w-4 h-4 text-pink-600" />
              <span>Follow @midhula_farm_hut</span>
            </Button>
          </a>
        </div>

        {/* 6-Photo Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_HIGHLIGHT_IMAGES.map((item, idx) => (
            <a
              key={idx}
              href={item.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-3 flex flex-col justify-between" />

              {/* Tag Top-Left */}
              <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Hover Footer */}
              <div className="absolute bottom-2 left-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white">
                <p className="text-[11px] font-semibold line-clamp-2 leading-snug drop-shadow-sm">
                  {item.caption}
                </p>
                <div className="flex items-center justify-between text-[10px] text-slate-300 mt-1 pt-1 border-t border-white/20">
                  <span className="flex items-center gap-1 font-medium">
                    <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                    {item.likes}
                  </span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
