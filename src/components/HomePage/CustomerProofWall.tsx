"use client";

import * as React from "react";
import Image from "next/image";
import { CUSTOMER_REVIEWS, FARM_INFO } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import { InstagramIcon } from "@/components/icons";
import {
  MessageCircle,
  Star,
  CheckCircle,
  Package,
} from "lucide-react";

export function CustomerProofWall() {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <span>Verified Unboxings • 15,000+ Hobbyists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Real Customer Love from Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Read direct feedback from aquarists and breeders who ordered live
            fish and crayfish to their doorsteps in Mumbai, Kolkata, Bangalore,
            Kochi, and beyond.
          </p>
        </div>

        {/* Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CUSTOMER_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                {/* Review Top Bar */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-300">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-950 text-base">
                        {review.name}
                      </h4>
                      <p className="text-xs text-slate-500">{review.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Ordered Strain Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs font-medium text-blue-700">
                  <Package className="w-3.5 h-3.5 text-blue-600" />
                  <span>Ordered: {review.breedOrdered}</span>
                </div>

                {/* Review Comment */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Review Footer Verification Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  Verified WhatsApp Delivery
                </span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Real Chat Callout Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Join Our 28.7K+ Instagram Community
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Check out our Instagram Story Highlights &ldquo;Happy Cust&rdquo; &amp; &ldquo;🚚 2&rdquo; to see daily unboxing videos and WhatsApp messages from customers receiving live fish across India.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={FARM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="md" className="gap-2 text-xs font-semibold text-slate-900">
                <InstagramIcon className="w-4 h-4 text-pink-600" />
                <span>Instagram Highlights</span>
              </Button>
            </a>

            <a
              href={generateWhatsAppLink(
                undefined,
                undefined,
                "Hi Sajith, I'd like to ask a quick question before placing my first live fish order."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="md" className="gap-2 font-bold shadow-sm">
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Message Sajith</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
