"use client";

import * as React from "react";
import Image from "next/image";
import { BreedItem } from "@/data/farmData";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatINR, generateWhatsAppLink } from "@/lib/utils";
import {
  MessageCircle,
  Droplets,
  Thermometer,
  ShieldCheck,
  Package,
  Utensils,
} from "lucide-react";

export interface QuickViewModalProps {
  breed: BreedItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ breed, isOpen, onClose }: QuickViewModalProps) {
  const [selectedPairCount, setSelectedPairCount] = React.useState(1);

  React.useEffect(() => {
    setSelectedPairCount(1);
  }, [breed]);

  if (!breed) return null;

  const totalPrice = breed.price * selectedPairCount;
  const quantityString = `${selectedPairCount} ${
    breed.unit.includes("Pair")
      ? selectedPairCount > 1
        ? "Pairs"
        : "Pair"
      : selectedPairCount > 1
      ? "Units"
      : "Unit"
  }`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="3xl"
      className="p-0 overflow-hidden bg-white border border-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
        {/* Left Side: Breed Photography */}
        <div className="md:col-span-5 relative bg-slate-950 min-h-[260px] md:min-h-full">
          <Image
            src={breed.image}
            alt={breed.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute top-4 left-4 z-10">
            <Badge variant={breed.badgeColor} pulse>
              {breed.badge}
            </Badge>
          </div>
        </div>

        {/* Right Side: Specifications & Order Form */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white text-slate-900">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                <span className="text-blue-600 font-bold">{breed.categoryLabel}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">{breed.stockStatus}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-950 mt-1 font-display">
                {breed.name}
              </h2>
              {breed.scientificName && (
                <p className="text-xs text-slate-500 italic font-mono mt-0.5">
                  {breed.scientificName}
                </p>
              )}
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-500 uppercase font-semibold">
                  Unit Price ({breed.unit})
                </p>
                <p className="text-2xl font-black text-blue-600 font-mono mt-0.5">
                  {formatINR(breed.price)}
                </p>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                <button
                  onClick={() => setSelectedPairCount(Math.max(1, selectedPairCount - 1))}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 text-center font-bold text-sm text-slate-900">
                  {selectedPairCount}
                </span>
                <button
                  onClick={() => setSelectedPairCount(selectedPairCount + 1)}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed">
              {breed.description}
            </p>

            {/* Water Parameters Grid */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Ideal Water Parameters &amp; Diet
              </h4>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Thermometer className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                  <p className="text-[10px] text-slate-500">Temperature</p>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {breed.waterSpecs.temp}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Droplets className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                  <p className="text-[10px] text-slate-500">Water pH</p>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {breed.waterSpecs.ph}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 mx-auto text-blue-600 mb-1" />
                  <p className="text-[10px] text-slate-500">Hardness</p>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {breed.waterSpecs.hardness}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700">
                <Utensils className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-900">Recommended Diet: </span>
                  <span>{breed.diet}</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Order Subtotal:</span>
              <span className="text-base font-black text-blue-600 font-mono">
                {formatINR(totalPrice)}
              </span>
            </div>

            <a
              href={generateWhatsAppLink(breed.name, quantityString)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full gap-2.5 font-bold shadow-md"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Order {quantityString} on WhatsApp</span>
              </Button>
            </a>

            <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-blue-600" />
              <span>Ships in insulated thermocol box with 72h pure oxygen</span>
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
