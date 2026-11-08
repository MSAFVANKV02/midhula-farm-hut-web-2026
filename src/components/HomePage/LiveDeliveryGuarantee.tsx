"use client";

import * as React from "react";
import { PACKING_STEPS } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import {
  ShieldCheck,
  PackageCheck,
  Wind,
  HeartHandshake,
  PlaneTakeoff,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export function LiveDeliveryGuarantee() {
  const iconMap: Record<string, React.ReactNode> = {
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    Wind: <Wind className="w-6 h-6 text-blue-600" />,
    PackageCheck: <PackageCheck className="w-6 h-6 text-red-600" />,
    PlaneTakeoff: <PlaneTakeoff className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="guarantee" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <span>Safe Transit Protocol • 99.8% Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            How We Safely Ship Live Fish Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Shipping live aquatic animals over 2,500 kilometers requires medical
            precision. Over the past 6 years, we have perfected our 4-stage
            packaging protocol with an extraordinary 99.8% live arrival success
            rate.
          </p>
        </div>

        {/* 4-Step Packaging Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {PACKING_STEPS.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[step.icon]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-950 mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-blue-700 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Verified Quality Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* The DOA Warranty Box - High Contrast Deep Slate */}
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-red-500" />
                <span>Zero-Risk Customer Warranty</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Complete Replacement or 100% Refund Policy
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                If, in the rarest scenario, any fish or crayfish arrives dead in
                transit: simply record a continuous 30-second unboxing video of
                the unopened sealed oxygen bag within 2 hours of delivery and
                WhatsApp it to Sajith (+91 8129120437). We will dispatch a free
                replacement pair or initiate a full refund on the same day.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  No complicated claims
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Same-day dispatch replacement
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Direct breeder support via WhatsApp
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <a
                href={generateWhatsAppLink(
                  undefined,
                  undefined,
                  "Hi Sajith, I would like to know how live shipping works for my city/pincode, and confirm current dispatch days."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-bold shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Check Shipping to My Pincode</span>
                </Button>
              </a>
              <p className="text-[11px] text-slate-400 mt-2">
                Dispatches every Monday &amp; Tuesday from Thrissur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
