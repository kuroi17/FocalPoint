"use client";

import React from "react";

interface PodcastMiniPlayerProps {
  currentTrackTitle?: string;
  isPlaying?: boolean;
  onTogglePlay?: () => void;
  onClose?: () => void;
}

export default function PodcastMiniPlayer({
  currentTrackTitle = "Ep. 4: The commute, out loud · sample",
  isPlaying = true,
  onTogglePlay,
  onClose,
}: PodcastMiniPlayerProps) {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pb-[40px] flex flex-col items-start"
      data-node-id="10:1176"
      data-name="mini player"
    >
      <div
        className="bg-[#2b2226] text-white flex items-center gap-[12px] h-[64px] px-[14px] py-[10px] rounded-[4px] w-full max-w-[560px] shadow-lg relative select-none"
        data-node-id="10:1177"
        data-name="player bar"
      >
        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={onTogglePlay}
          className="size-[40px] rounded-[20px] bg-[#e0506a] hover:bg-[#b51d42] transition-colors flex items-center justify-center shrink-0 cursor-pointer focus:outline-hidden"
          data-node-id="10:1178"
        >
          <span className="font-sans font-bold text-[12px] text-white tracking-[-0.12px]">
            {isPlaying ? "❚❚" : "▶"}
          </span>
        </button>

        {/* Track Title & Progress Bar */}
        <div className="flex-1 flex flex-col gap-[6px] items-start min-w-0">
          <p
            className="font-sans font-bold text-[14px] text-white tracking-[-0.14px] truncate w-full"
            data-node-id="10:1181"
          >
            {currentTrackTitle}
          </p>
          <div
            className="w-full bg-white/25 h-[4px] rounded-[2px] relative overflow-hidden"
            data-node-id="10:1182"
          >
            <div
              className={`h-[4px] bg-[#e0506a] rounded-[2px] transition-all duration-300 ${
                isPlaying ? "w-[40%]" : "w-[20%]"
              }`}
              data-node-id="10:1183"
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-white/80 hover:text-white font-sans text-[22px] leading-none px-1.5 cursor-pointer focus:outline-hidden transition-colors"
          data-node-id="10:1184"
        >
          ×
        </button>
      </div>
    </div>
  );
}
