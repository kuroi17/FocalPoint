"use client";

import React from "react";

export interface PhotoItem {
  id: string;
  title: string;
  category: "COMMUNITY" | "PHOTO DESK";
  height: number;
  gradient: string;
  author: string;
  story: string;
  type: "community" | "photojourn";
}

interface GalleryMasonryProps {
  photos: PhotoItem[];
  selectedPhotoId?: string;
  onPhotoClick: (photo: PhotoItem) => void;
}

export default function GalleryMasonry({
  photos,
  selectedPhotoId,
  onPhotoClick,
}: GalleryMasonryProps) {
  // Distribute into 4 columns matching Figma desktop layout
  // Col 1: idx 0, 1
  // Col 2: idx 2, 3
  // Col 3: idx 4, 5
  // Col 4: idx 6, 7
  const col1 = photos.slice(0, 2);
  const col2 = photos.slice(2, 4);
  const col3 = photos.slice(4, 6);
  const col4 = photos.slice(6, 8);

  const columns = [col1, col2, col3, col4];

  return (
    <div
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] items-start"
      data-node-id="10:976"
      data-name="masonry"
    >
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-[12px] w-full">
          {col.map((photo) => {
            const isSelected = selectedPhotoId === photo.id;
            return (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className={`w-full overflow-hidden relative rounded-[4px] shrink-0 cursor-pointer group transition-all duration-200 select-none ${
                  isSelected
                    ? "ring-2 ring-[#b51d42] scale-[1.01]"
                    : "hover:scale-[1.015] hover:shadow-md"
                }`}
                style={{
                  height: `${photo.height}px`,
                  backgroundImage: photo.gradient,
                }}
                data-name={`photo · ${photo.title.toLowerCase()}`}
              >
                {/* Top-Right Logo/Watermark Icon */}
                <div
                  className="absolute top-[12px] right-[12px] w-[28px] h-[29px] opacity-85 z-10 pointer-events-none"
                  data-name="logo"
                >
                  <img
                    src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                    alt=""
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>

                {/* Top-Left Tag Pill */}
                <div
                  className="absolute top-[10px] left-[10px] bg-white px-[7px] py-[5px] rounded-[3px] shadow-xs z-10"
                  data-name="who"
                >
                  <span className="font-sans font-bold text-[#5a1428] text-[10px] tracking-[0.6px] uppercase leading-none block">
                    {photo.category}
                  </span>
                </div>

                {/* Bottom Photo Title */}
                <p className="absolute left-[12px] bottom-[14px] right-[12px] font-sans font-semibold text-[13px] text-white tracking-[-0.13px] leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] z-10">
                  {photo.title}
                </p>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
