"use client";

import * as React from "react";
import Image from "next/image";
import { LIVE_STOCK, BreedItem } from "@/data/farmData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { QuickViewModal } from "./QuickViewModal";
import { formatINR, generateWhatsAppLink } from "@/lib/utils";
import {
  MessageCircle,
  Eye,
  Search,
  Droplets,
  Star,
} from "lucide-react";

export function LiveStockSection({
  selectedBreedId,
}: {
  selectedBreedId?: string | null;
}) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [modalBreed, setModalBreed] = React.useState<BreedItem | null>(null);

  React.useEffect(() => {
    if (selectedBreedId) {
      const found = LIVE_STOCK.find((b) => b.id === selectedBreedId);
      if (found) setModalBreed(found);
    }
  }, [selectedBreedId]);

  const categories = [
    { id: "all", label: "All Live Stock", count: LIVE_STOCK.length },
    {
      id: "guppy",
      label: "Champion Guppies",
      count: LIVE_STOCK.filter((b) => b.category === "guppy").length,
    },
    {
      id: "crayfish",
      label: "Crayfish & Lobsters",
      count: LIVE_STOCK.filter((b) => b.category === "crayfish").length,
    },
    {
      id: "cichlid",
      label: "Exotic Cichlids",
      count: LIVE_STOCK.filter((b) => b.category === "cichlid").length,
    },
    {
      id: "plants",
      label: "Aquatic Flora",
      count: LIVE_STOCK.filter((b) => b.category === "plants").length,
    },
    {
      id: "feed",
      label: "Farm Feed & Care",
      count: LIVE_STOCK.filter((b) => b.category === "feed").length,
    },
  ];

  const filteredBreeds = LIVE_STOCK.filter((breed) => {
    const matchesCategory =
      activeCategory === "all" || breed.category === activeCategory;
    const matchesSearch =
      breed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      breed.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      breed.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="live-stock" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span>Captive Outdoor Bred • Nedupuzha Farm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
              Hand-Selected Live Stock Catalog
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Every specimen is cultured in bio-balanced natural outdoor ponds in
              Nedupuzha, Thrissur. Shipped directly from the breeder with pure
              medical oxygen.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search guppy, crayfish, cichlid..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10">
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
            variant="pills"
          />
        </div>

        {/* Live Stock Grid */}
        {filteredBreeds.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <p className="text-lg font-bold text-slate-900">No breeds matched your search</p>
            <p className="text-sm text-slate-500 mt-1">
              Try searching for &quot;Albino&quot;, &quot;Crayfish&quot;, or &quot;Guppy&quot;, or clear your filters.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBreeds.map((breed) => (
              <div
                key={breed.id}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col shadow-sm"
              >
                {/* Image Showcase */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
                  onClick={() => setModalBreed(breed)}
                >
                  <Image
                    src={breed.image}
                    alt={breed.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                  {/* Badge top-left */}
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant={breed.badgeColor}>
                      {breed.badge}
                    </Badge>
                  </div>

                  {/* Quick View Hover Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-950/30 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      Quick Specs
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-blue-600 font-bold uppercase tracking-wider text-[11px]">
                        {breed.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500" />
                        {breed.rating} ({breed.reviewsCount})
                      </span>
                    </div>

                    <h3
                      onClick={() => setModalBreed(breed)}
                      className="font-bold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {breed.name}
                    </h3>

                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {breed.description}
                    </p>
                  </div>

                  {/* Specs Snippet */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                    <span className="flex items-center gap-1 text-slate-700">
                      <Droplets className="w-3.5 h-3.5 text-blue-600" />
                      pH {breed.waterSpecs.ph}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span>{breed.waterSpecs.temp}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-blue-700 font-semibold">
                      {breed.stockStatus}
                    </span>
                  </div>

                  {/* Price & Action Footer */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">
                        Price / {breed.unit.split(" ")[0]}
                      </p>
                      <p className="text-lg font-black text-blue-600 font-mono">
                        {formatINR(breed.price)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setModalBreed(breed)}
                        className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                        title="View Full Specifications"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <a
                        href={generateWhatsAppLink(breed.name, breed.unit)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="whatsapp"
                          size="sm"
                          className="gap-1.5 font-bold h-9 px-3 text-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-black" />
                          <span>Order</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        breed={modalBreed}
        isOpen={!!modalBreed}
        onClose={() => setModalBreed(null)}
      />
    </section>
  );
}
