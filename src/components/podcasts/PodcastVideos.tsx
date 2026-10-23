"use client";

import React from "react";

export interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  duration: string;
}

interface PodcastVideosProps {
  onVideoClick?: (video: VideoItem) => void;
}

export default function PodcastVideos({ onVideoClick }: PodcastVideosProps) {
  const videos: VideoItem[] = [
    {
      id: "fact-checked",
      title: "60 seconds: how a story gets fact-checked",
      subtitle: "Copy Reading · 1 min",
      gradient:
        "linear-gradient(150.64deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
      duration: "1 min",
    },
    {
      id: "intramurals",
      title: "Intramurals day in one minute",
      subtitle: "Sports · 1 min",
      gradient:
        "linear-gradient(150.64deg, rgb(255, 225, 229) 0%, rgb(44, 109, 181) 71.43%)",
      duration: "1 min",
    },
    {
      id: "behind-the-lens",
      title: "Behind the lens with the Photo Desk",
      subtitle: "Photo · 3 min",
      gradient:
        "linear-gradient(150.64deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
      duration: "3 min",
    },
  ];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-[64px] pb-[24px] flex flex-col gap-[24px]"
      data-node-id="10:1151"
      data-name="videos"
    >
      {/* Section Head */}
      <div className="flex items-end justify-between overflow-clip w-full">
        <h2
          className="font-display font-black leading-[0.88] text-[52px] sm:text-[68px] lg:text-[78px] text-[#b51d42] tracking-wide"
          data-node-id="10:1153"
        >
          VIDEOS
        </h2>
      </div>

      {/* 3 Video Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full"
        data-node-id="10:1154"
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onVideoClick?.(video)}
            className="flex flex-col gap-[8px] items-start w-full group cursor-pointer"
          >
            {/* Video Cover */}
            <div
              className="h-[225px] overflow-hidden relative rounded-[4px] w-full select-none shadow-xs transition-transform duration-200 group-hover:-translate-y-0.5"
              style={{ backgroundImage: video.gradient }}
              data-name="video"
            >
              {/* Logo Watermark */}
              <div className="absolute top-[12px] right-[12px] w-[28px] h-[29px] opacity-85 pointer-events-none">
                <img
                  src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                  alt=""
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[56px] rounded-[28px] bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <span className="font-sans text-[20px] text-[#b51d42] ml-0.5">
                  ▶
                </span>
              </div>
            </div>

            {/* Video Title */}
            <p className="font-sans font-bold text-[16px] text-[#2b2226] tracking-[-0.16px] leading-[1.3] group-hover:text-[#b51d42] transition-colors pt-1">
              {video.title}
            </p>

            {/* Video Meta */}
            <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              {video.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
