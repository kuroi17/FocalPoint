"use client";

import React from "react";
import { PhotoItem } from "./GalleryMasonry";

interface GalleryStoryDetailProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export default function GalleryStoryDetail({
  photo,
  onClose,
}: GalleryStoryDetailProps) {
  if (!photo) return null;

  return (
    <section
      id="photo-detail"
      className="w-full bg-[#fff4f5] py-[64px] border-t border-[#f1c9d0]/60"
      data-node-id="10:1021"
      data-name="photo story (tapped state)"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] flex flex-col gap-[16px]">
        {/* Section Label */}
        <p
          className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase"
          data-node-id="10:1022"
        >
          WHEN YOU TAP A PHOTO
        </p>

        {/* Story Card Container */}
        <div
          className="bg-white border-[1.5px] border-[#e0506a] border-solid rounded-[4px] p-5 sm:p-[24px] flex flex-col xl:flex-row gap-[24px] items-start w-full shadow-sm"
          data-node-id="10:1023"
        >
          {/* Photo Large Preview */}
          <div
            className="w-full xl:w-[640px] h-[260px] sm:h-[340px] lg:h-[400px] rounded-[4px] relative overflow-hidden shrink-0 flex items-end p-3 select-none"
            style={{ backgroundImage: photo.gradient }}
            data-node-id="10:1024"
            data-name="photo"
          >
            <span
              className="font-sans font-semibold text-[11px] text-white tracking-[0.66px] uppercase select-none drop-shadow-sm"
              data-node-id="I10:1024;3:16"
            >
              PHOTO
            </span>
            <div
              className="absolute bottom-[12px] right-[12px] size-[34px] opacity-85"
              data-name="logo"
            >
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt=""
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
          </div>

          {/* Details Column */}
          <div
            className="flex-1 flex flex-col gap-[10px] items-start w-full"
            data-node-id="10:1027"
          >
            {/* Category Pill Tag */}
            <div
              className="bg-[#b51d42] px-[8px] py-[6px] rounded-[2px]"
              data-node-id="10:1028"
              data-name="tag"
            >
              <span className="font-sans font-bold text-[11px] text-white tracking-[0.88px] uppercase">
                {photo.category}
              </span>
            </div>

            {/* Photo Title */}
            <h2
              className="font-sans font-semibold text-[22px] sm:text-[26px] text-[#2b2226] tracking-[-0.78px] leading-[1.04]"
              data-node-id="4005:1714"
            >
              {photo.title}
            </h2>

            {/* Subtitle / Author Attribution */}
            <p
              className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]"
              data-node-id="10:1031"
            >
              {photo.author}
            </p>

            {/* The Story Behind The Shot Box */}
            <div
              className="bg-[#fff4f5] p-[18px] rounded-[4px] w-full flex flex-col gap-[6px] my-1"
              data-node-id="10:1032"
            >
              <span
                className="font-sans font-bold text-[12px] text-[#b51d42] tracking-[0.96px] uppercase"
                data-node-id="10:1033"
              >
                THE STORY BEHIND THE SHOT
              </span>
              <p
                className="font-sans font-normal text-[15px] text-[#2b2226] leading-[1.55] tracking-[-0.15px]"
                data-node-id="10:1034"
              >
                {photo.story}
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#fff4f5] active:bg-[#ffe1e5] px-[18px] py-[12px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors cursor-pointer mt-1"
              data-node-id="10:1035"
              data-name="button/line"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
