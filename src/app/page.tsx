"use client";

import * as React from "react";
import { Navbar } from "@/components/partials/header/Navbar";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { VideoReelsSection } from "@/components/HomePage/VideoReelsSection";
import { LiveStockSection } from "@/components/HomePage/LiveStockSection";
import { LiveDeliveryGuarantee } from "@/components/HomePage/LiveDeliveryGuarantee";
import { WhatsAppOrderCalculator } from "@/components/HomePage/WhatsAppOrderCalculator";
import { HeritageStorySection } from "@/components/HomePage/HeritageStorySection";
import { CustomerProofWall } from "@/components/HomePage/CustomerProofWall";
import { InstagramFeedGrid } from "@/components/HomePage/InstagramFeedGrid";
import { FaqSection } from "@/components/HomePage/FaqSection";
import { Footer } from "@/components/partials/footer/Footer";
import { FloatingWhatsApp } from "@/components/HomePage/FloatingWhatsApp";

export default function HomePage() {
  const [selectedBreedId, setSelectedBreedId] = React.useState<string | null>(null);

  const handleHeroSelectBreed = (breedId: string) => {
    setSelectedBreedId(breedId);
    const elem = document.getElementById("live-stock");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Stats & Featured Strain */}
        <HeroSection onSelectBreed={handleHeroSelectBreed} />

        {/* 2. Instagram Video Reels Carousel (Swiper) */}
        <VideoReelsSection />

        {/* 3. Filterable Live Stock & Breed Catalog */}
        <LiveStockSection selectedBreedId={selectedBreedId} />

        {/* 4. 100% Live Delivery Guarantee & Medical Oxygen Packing */}
        <LiveDeliveryGuarantee />

        {/* 5. Interactive WhatsApp Order & Shipping Estimator */}
        <WhatsAppOrderCalculator />

        {/* 6. Kerala Farm Heritage & Breeding Philosophy */}
        <HeritageStorySection />

        {/* 7. Real Customer Love & WhatsApp Proofs */}
        <CustomerProofWall />

        {/* 8. Hatchery Instagram Photo Grid */}
        <InstagramFeedGrid />

        {/* 9. Comprehensive FAQ & Care Guide */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom / Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
