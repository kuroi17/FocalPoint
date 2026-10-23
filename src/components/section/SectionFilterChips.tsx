import React from "react";

interface SectionFilterChipsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function SectionFilterChips({
  filters,
  activeFilter,
  onFilterChange,
}: SectionFilterChipsProps) {
  return (
    <div
      className="w-full max-w-[1240px] mx-auto flex gap-[8px] items-center overflow-x-auto scrollbar-none py-1"
      data-node-id="6:370"
      data-name="filters"
    >
      {filters.map((chip) => {
        const isActive = activeFilter === chip;
        return (
          <button
            key={chip}
            type="button"
            onClick={() => onFilterChange(chip)}
            className={`px-[14px] py-[7px] rounded-[99px] text-[13px] font-semibold tracking-[-0.13px] whitespace-nowrap transition-colors border-[1.5px] border-solid ${
              isActive
                ? "bg-[#b51d42] border-[#b51d42] text-white"
                : "bg-white border-[#f1c9d0] text-[#2b2226] hover:border-[#b51d42]"
            }`}
          >
            {chip}
          </button>
        );
      })}
    </div>
  );
}
