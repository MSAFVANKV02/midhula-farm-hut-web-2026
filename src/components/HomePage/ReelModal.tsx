"use client";

import * as React from "react";
import Link from "next/link";
import { ReelItem } from "@/data/farmData";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
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

/**
 * Helper to check if the URL is an Instagram page link vs a direct video file (.mp4, etc.)
 * and format it for iframe embedding if needed.
 */
function getInstagramEmbedUrl(url: string): string | null {
  if (!url.includes("instagram.com/")) return null;
  try {
    const parsed = new URL(url);
    const cleanPath = parsed.pathname.replace(/\/$/, "");
    return `https://www.instagram.com${cleanPath}/embed/`;
  } catch {
    return null;
  }
}

export function ReelModal({ reel, isOpen, onClose }: ReelModalProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setLiked(false);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen, reel]);

  if (!reel) return null;

  const instagramEmbedUrl = getInstagramEmbedUrl(reel.instagramUrl);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      classNames={{
        content:
          "p-0 gap-0 overflow-hidden w-[95vw] sm:max-w-3xl lg:max-w-4xl max-h-[92dvh] md:h-[600px] border border-slate-200 flex flex-col",
        body: "flex-1 h-full overflow-y-auto md:overflow-hidden",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 h-full">
        {/* Left Side: Real Video Player */}
        <div className="md:col-span-7 relative bg-slate-950  md:min-h-0 md:h-full flex items-center justify-center overflow-hidden group">
          {instagramEmbedUrl ? (
            /* Case 1: Official Instagram Reel URL (https://www.instagram.com/reel/...) */
            <iframe
              src={instagramEmbedUrl}
              title={reel.title}
              className="w-full h-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            /* Case 2: Direct Video File URL (.mp4, .webm, etc.) */
            <>
              <video
                ref={videoRef}
                src={reel.instagramUrl}
                poster={reel.thumbnail}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                className="w-full h-full object-cover cursor-pointer"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Top Video Overlay Controls */}
              <div className="absolute top-4 left-4 right-12 md:right-4 flex items-center justify-between z-20">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-sm">
                  Instagram Reel
                </span>

                <button
                  onClick={toggleMute}
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

              {/* Center Play/Pause button (shows when paused or on hover) */}
              <button
                onClick={togglePlay}
                className={`w-16 h-16 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer z-20 ${
                  isPlaying
                    ? "opacity-0 group-hover:opacity-100"
                    : "opacity-100"
                }`}
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
            </>
          )}
        </div>

        {/* Right Side: Reel Details & Actions */}
        <div className="md:col-span-5 p-5 sm:p-6 flex flex-col justify-between text-slate-900 bg-white md:h-full md:overflow-y-auto">
          <div className="space-y-4">
            <div className="pr-6">
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

          <div className="space-y-2.5 pt-6 mt-6 md:mt-0 border-t border-slate-100">
            <a
              href={generateWhatsAppLink(
                undefined,
                undefined,
                reel.whatsappInquiry
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button size="lg" className="w-full gap-2 font-bold">
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Inquire on WhatsApp</span>
              </Button>
            </a>

            <Link
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 text-xs"
              >
                <span>View on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
}