"use client";

import * as React from "react";
import { LIVE_STOCK } from "@/data/farmData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatINR, generateWhatsAppLink } from "@/lib/utils";
import {
  Calculator,
  MessageCircle,
  Truck,
  Box,
  CheckCircle2,
} from "lucide-react";

export function WhatsAppOrderCalculator() {
  const [selectedBreedId, setSelectedBreedId] = React.useState(
    LIVE_STOCK[0].id,
  );
  const [pairCount, setPairCount] = React.useState(1);
  const [shippingZone, setShippingZone] = React.useState("kerala");
  const [pincode, setPincode] = React.useState("");

  const currentBreed =
    LIVE_STOCK.find((b) => b.id === selectedBreedId) || LIVE_STOCK[0];

  const zonePricing: Record<
    string,
    { label: string; courier: number; days: string }
  > = {
    kerala: {
      label: "Kerala (Next Day Express Delivery)",
      courier: 180,
      days: "1 Day (Overnight)",
    },
    south: {
      label: "South India (Tamil Nadu, Karnataka, AP, Telangana)",
      courier: 290,
      days: "1 - 2 Days",
    },
    rest: {
      label: "Rest of India (Maharashtra, Delhi NCR, Bengal, Punjab, etc.)",
      courier: 420,
      days: "2 - 3 Days (Express Air Cargo)",
    },
  };

  const currentZone = zonePricing[shippingZone];
  const breedSubtotal = currentBreed.price * pairCount;
  const thermocolBoxFee = 150;
  const grandTotal = breedSubtotal + currentZone.courier + thermocolBoxFee;

  const handleWhatsAppOrder = () => {
    const formattedMessage = `Hi Sajith! 👋 I used your Midhula Farm Hut Order Estimator:

🐟 *Selected Breed:* ${currentBreed.name}
📦 *Quantity:* ${pairCount} Pair(s) / Unit(s)
📍 *Delivery Zone:* ${currentZone.label} ${pincode ? `(Pincode: ${pincode})` : ""}
⏱️ *Expected Transit:* ${currentZone.days}

💰 *Estimated Total:*
• Breed Total: ₹${breedSubtotal}
• Thermocol & 72h Pure Oxygen Box: ₹${thermocolBoxFee}
• Courier / Cargo: ₹${currentZone.courier}
*Total Estimated:* ₹${grandTotal}

Please confirm live availability and send payment / dispatch details!`;

    window.open(
      generateWhatsAppLink(undefined, undefined, formattedMessage),
      "_blank",
    );
  };

  return (
    <section
      id="calculator"
      className="py-14 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl relative">
          {/* Title Header */}
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Calculator className="w-3.5 h-3.5 mr-1" />
              <span>Transparent Pricing Calculator</span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
                Calculate Your Order &amp; Delivery Cost
              </h2>
              <p className="text-slate-600 text-xs mt-2 max-w-2xl leading-relaxed">
                Select your strain and destination to generate a real-time price
                estimate and instant WhatsApp booking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Inputs */}
            <div className="md:col-span-7 space-y-5">
              {/* Select Breed */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>1. Choose Fish or Crayfish Breed</span>
                  <span className="text-blue-600 font-mono text-[11px] font-bold">
                    {formatINR(currentBreed.price)} / unit
                  </span>
                </label>
                <select
                  value={selectedBreedId}
                  onChange={(e) => setSelectedBreedId(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white cursor-pointer"
                >
                  {LIVE_STOCK.map((breed) => (
                    <option key={breed.id} value={breed.id}>
                      {breed.name} ({breed.categoryLabel}) -{" "}
                      {formatINR(breed.price)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Select Quantity (Pairs / Units)
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-slate-50 rounded-xl border border-slate-300 p-1">
                    <button
                      onClick={() => setPairCount(Math.max(1, pairCount - 1))}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-slate-200 text-slate-900 font-bold flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-14 text-center font-bold text-slate-900 text-base">
                      {pairCount}
                    </span>
                    <button
                      onClick={() => setPairCount(pairCount + 1)}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-slate-200 text-slate-900 font-bold flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {pairCount} {currentBreed.unit}
                  </span>
                </div>
              </div>

              {/* Destination Zone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Select Delivery Location
                </label>
                <select
                  value={shippingZone}
                  onChange={(e) => setShippingZone(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:bg-white cursor-pointer"
                >
                  <option value="kerala">
                    Kerala (Overnight Express - 24 hrs)
                  </option>
                  <option value="south">
                    South India (Karnataka, Tamil Nadu, AP, Telangana)
                  </option>
                  <option value="rest">
                    Rest of India (Mumbai, Delhi, Kolkata, Punjab, etc.)
                  </option>
                </select>
              </div>

              {/* Pincode optional */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Your Delivery Pincode (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 680007 or 400050"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  maxLength={6}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between space-y-6 shadow-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Live Order Breakdown
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                    Estimated
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="truncate pr-2">
                      {currentBreed.name} × {pairCount}
                    </span>
                    <span className="font-mono text-white font-semibold shrink-0">
                      {formatINR(breedSubtotal)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-blue-400" />
                      Thermocol &amp; Pure Oxygen
                    </span>
                    <span className="font-mono text-white font-semibold">
                      {formatINR(thermocolBoxFee)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-blue-400" />
                      Express Courier / Cargo
                    </span>
                    <span className="font-mono text-white font-semibold">
                      {formatINR(currentZone.courier)}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300 space-y-1">
                  <p className="flex items-center gap-1.5 text-blue-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Expected Transit: {currentZone.days}
                  </p>
                  <p className="text-slate-400">
                    Includes 100% Dead-on-Arrival (DOA) replacement warranty.
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-3 flex items-baseline justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">
                      Total Estimated
                    </p>
                    <p className="text-2xl font-black text-blue-400 font-mono">
                      {formatINR(grandTotal)}
                    </p>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    INR Incl. Packing
                  </span>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppOrder}
                className="w-full gap-2 font-bold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Submit Order via WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
