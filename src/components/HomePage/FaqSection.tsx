"use client";

import * as React from "react";
import { FAQS } from "@/data/farmData";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import { HelpCircle, MessageCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            <span>Help &amp; Acclimation Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
            Clear, honest answers regarding live parcel safety, DOA warranty,
            tank acclimation steps, and Thrissur farm visits.
          </p>
        </div>

        <Accordion className="space-y-3">
          {FAQS.map((faq, idx) => (
            <AccordionItem
              key={idx}
              title={faq.q}
              defaultOpen={idx === 0}
              badge={idx === 0 ? "Essential" : undefined}
            >
              {faq.a}
            </AccordionItem>
          ))}
        </Accordion>

        {/* WhatsApp Direct Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">
              Have a question about water compatibility or breeding pairs?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Chat directly with Sajith on WhatsApp — we answer within minutes!
            </p>
          </div>

          <a
            href={generateWhatsAppLink(
              undefined,
              undefined,
              "Hi Sajith, I have a quick question about fish care / water parameters before ordering."
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="whatsapp" size="sm" className="gap-2 font-bold whitespace-nowrap shadow-sm">
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Ask on WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
