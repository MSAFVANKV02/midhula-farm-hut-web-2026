"use client";

import * as React from "react";
import { FARM_INFO } from "@/data/farmData";
import { generateWhatsAppLink } from "@/lib/utils";
import { MessageCircle, X } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = React.useState(false);

  const quickMessages = [
    {
      label: "🐟 Check Live Stock Availability",
      text: "Hi Midhun, what live fish and crayfish pairs are currently ready for immediate dispatch from Thrissur?",
    },
    {
      label: "🚚 Check Shipping to My Pincode",
      text: "Hi Midhun, what are the shipping charges and delivery timeframe for my pincode?",
    },
    {
      label: "🌿 Farm Visit in Nedupuzha",
      text: "Hi Midhun, I'd like to visit your breeding farm in Nedupuzha, Thrissur. What is the best time?",
    },
  ];

  return (
    <>
      {/* Mobile Sticky Bottom Floating Order Bar */}
      <div className="sm:hidden fixed bottom-1 left-0 right-0 z-40 ">
        <Link
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-[90%] mx-auto flex items-center justify-center gap-2 h-11 bg-[#25D366] text-black text-sm active:scale-[0.98] transition-all">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat </span>
          </Button>
        </Link>
      </div>

      {/* Desktop Floating Widget */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-50">
        {/* Expanded Quick Options Menu */}
        {isOpen && (
          <div className="mb-3 w-80 rounded-2xl bg-white border border-slate-200 p-4 shadow-2xl text-slate-900 animate-in slide-in-from-bottom-5 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Midhun is Online
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    Midhula Farm Hut, Thrissur
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 my-3 leading-relaxed">
              Have questions about live shipping, water acclimation, or stock?
              Tap a quick option:
            </p>

            <div className="space-y-2">
              {quickMessages.map((item, i) => (
                <a
                  key={i}
                  href={generateWhatsAppLink(undefined, undefined, item.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-xs text-slate-800 transition-all font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-100">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-[#25D366] text-black font-bold text-xs hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Open Custom WhatsApp Chat</span>
              </a>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white cursor-pointer"
          aria-label="Toggle WhatsApp assistant"
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <MessageCircle className="w-7 h-7 fill-black stroke-[1.5]" />
          )}
        </button>
      </div>
    </>
  );
}
