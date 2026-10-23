"use client";

import React from "react";
import { VideoItem } from "./PodcastVideos";

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border-[1.5px] border-[#e0506a] rounded-[6px] max-w-[640px] w-full p-6 flex flex-col gap-4 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-[#f1c9d0] pb-3">
          <div>
            <span className="font-sans font-bold text-[11px] text-[#b51d42] uppercase tracking-wider">
              {video.subtitle}
            </span>
            <h3 className="font-sans font-bold text-[20px] text-[#2b2226] leading-snug pt-1">
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6c5a61] hover:text-[#b51d42] font-bold text-xl p-1"
          >
            ✕
          </button>
        </div>

        {/* Video Simulation Screen */}
        <div
          className="w-full aspect-video rounded-[4px] relative overflow-hidden flex items-center justify-center shadow-inner"
          style={{ backgroundImage: video.gradient }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="size-[64px] rounded-full bg-white/90 text-[#b51d42] flex items-center justify-center text-2xl font-bold shadow-lg z-10 animate-pulse">
            ▶
          </div>
          <span className="absolute bottom-3 right-3 text-white text-xs font-semibold bg-black/60 px-2 py-0.5 rounded">
            {video.duration}
          </span>
        </div>

        <p className="font-sans text-[13.5px] text-[#5f5a5c] leading-relaxed">
          Multimedia short explainer produced by student journalists from the
          desk. Follow along with key points and field perspectives.
        </p>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-[#b51d42] hover:bg-[#961836] text-white px-4 py-2 rounded-[4px] font-sans font-bold text-[13px] transition-colors"
          >
            Done Watching
          </button>
        </div>
      </div>
    </div>
  );
}
