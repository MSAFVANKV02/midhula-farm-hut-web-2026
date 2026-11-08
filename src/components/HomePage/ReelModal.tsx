"use client";

import * as React from "react";
import Image from "next/image";
import { ReelItem } from "@/data/farmData";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateWhatsAppLink } from "@/lib/utils";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ExternalLink,
  MessageCircle,
  Heart,
  Eye,
} from "lucide-react";

export interface ReelModalProps {
  reel: ReelItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ReelModal({ reel, isOpen, onClose }: ReelModalProps) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setLiked(false);
    }
  }, [isOpen]);

  if (!reel) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="2xl"
      className="p-0 overflow-hidden bg-white border border-slate-200"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px]">
        {/* Left Side: Reel Preview Simulation */}
        <div className="md:col-span-7 relative bg-slate-950 flex items-center justify-center min-h-[360px] sm:min-h-[440px] overflow-hidden group">
          <Image
            src={reel.thumbnail}
            alt={reel.title}
            fill
            className={`object-cover transition-transform duration-500 ${
              isPlaying ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

          {/* Top Video Overlay Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
              Instagram Reel
            </span>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 cursor-pointer"
              aria-label="Toggle mute"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4 text-blue-400" />
              )}
            </button>
          </div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-20"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-slate-900" />
            ) : (
              <Play className="w-7 h-7 fill-slate-900 ml-1" />
            )}
          </button>

          {/* Bottom Live Pulse Simulation */}
          <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
            <div className="flex items-center gap-3 text-xs text-slate-200 mb-1.5 font-medium">
              <span className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                {reel.views} Views
              </span>
              <button
                onClick={() => setLiked(!liked)}
                className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-sm hover:text-red-400 cursor-pointer transition-colors"
              >
                <Heart
                  className={`w-3.5 h-3.5 ${
                    liked ? "fill-red-500 text-red-500" : "text-white"
                  }`}
                />
                {liked ? "Liked" : reel.likes}
              </button>
            </div>
            <p className="font-bold text-sm drop-shadow">{reel.title}</p>
          </div>
        </div>

        {/* Right Side: Reel Details & Actions */}
        <div className="md:col-span-5 p-6 flex flex-col justify-between bg-white text-slate-900">
          <div className="space-y-4">
            <div>
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
                {reel.category}
              </span>
              <h3 className="text-lg font-bold text-slate-950 mt-1 leading-snug font-display">
                {reel.title}
              </h3>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
              <p className="line-clamp-4">{reel.caption}</p>
            </div>

            <div className="space-y-1 text-xs">
              <p className="text-slate-500">Featured Subject:</p>
              <p className="font-semibold text-slate-900">
                {reel.featuredBreed}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-6 border-t border-slate-100">
            <a
              href={generateWhatsAppLink(undefined, undefined, reel.whatsappInquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="whatsapp" size="md" className="w-full gap-2 font-bold">
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Inquire on WhatsApp</span>
              </Button>
            </a>

            <a
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="outline" size="md" className="w-full gap-2 text-xs">
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}
