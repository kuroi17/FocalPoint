import React from "react";

export default function BadgesList() {
  const badges = [
    { label: "★ First visit", unlocked: true },
    { label: "★ 3-day streak", unlocked: true },
    { label: "☆ 7-day streak", unlocked: false },
    { label: "★ Word nerd", unlocked: true },
    { label: "☆ Contributor", unlocked: false },
    { label: "★ Reactor", unlocked: true },
    { label: "☆ Finished a story", unlocked: false },
  ];

  return (
    <div className="flex flex-col gap-[10px] w-full pt-1">
      {/* Title */}
      <h3 className="font-display font-black text-[56px] text-[#b51d42] leading-[0.88]">
        BADGES
      </h3>

      {/* Badges pills */}
      <div className="flex flex-wrap gap-[10px] items-start w-full">
        {badges.map((badge, idx) =>
          badge.unlocked ? (
            <div
              key={idx}
              className="bg-[#fdefc6] border-[1.5px] border-[#fce192] rounded-[4px] px-[12px] py-[9px] flex items-center shrink-0"
            >
              <span className="font-semibold text-[13px] text-[#2b2226] tracking-[-0.13px]">
                {badge.label}
              </span>
            </div>
          ) : (
            <div
              key={idx}
              className="border-[1.5px] border-dashed border-[#f1c9d0] opacity-50 rounded-[4px] px-[12px] py-[9px] flex items-center shrink-0"
            >
              <span className="font-semibold text-[13px] text-[#2b2226] tracking-[-0.13px]">
                {badge.label}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
