"use client";

import React from "react";

interface GalleryControlsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onSubmitClick: () => void;
}

export default function GalleryControls({
  activeFilter,
  onFilterChange,
  onSubmitClick,
}: GalleryControlsProps) {
  const filterOptions = ["All", "Photojourn board", "Community"];

  return (
    <div
      className="w-full flex flex-col gap-[16px] items-start"
      data-node-id="10:965"
    >
      {/* Filters & Submit Action Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        {/* Chips */}
        <div
          className="flex items-center gap-[8px] overflow-x-auto scrollbar-none w-full sm:w-auto"
          data-node-id="10:966"
        >
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                className={`px-[14px] py-[7px] rounded-[99px] text-[13px] font-semibold tracking-[-0.13px] border-[1.5px] whitespace-nowrap transition-colors select-none ${
                  isActive
                    ? "bg-[#b51d42] border-[#b51d42] text-white"
                    : "bg-white border-[#f1c9d0] text-[#2b2226] hover:border-[#b51d42]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={onSubmitClick}
          className="bg-[#b51d42] hover:bg-[#961836] text-white px-[18px] py-[12px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-sm"
          data-node-id="10:973"
          data-name="button"
        >
          Submit your photo →
        </button>
      </div>

      {/* Helper sub-notice */}
      <p
        className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px] w-full"
        data-node-id="10:975"
      >
        Every photo is reviewed by Circulation and WebDev before it goes up. Tap
        a photo to read its story.
      </p>
    </div>
  );
}
