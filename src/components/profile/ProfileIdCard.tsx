"use client";

import React from "react";

interface ProfileIdCardProps {
  activeFrame?: string;
  points?: number;
}

export default function ProfileIdCard({
  activeFrame = "rose",
  points = 26,
}: ProfileIdCardProps) {
  const getBorderColor = () => {
    switch (activeFrame) {
      case "gold":
        return "#e3b94a";
      case "press":
        return "#2b2226";
      case "eagle":
        return "#2f8f83";
      case "rose":
      default:
        return "#e0506a";
    }
  };

  return (
    <div className="w-full lg:w-[320px] shrink-0 border-[1.5px] border-[#e0506a] rounded-[4px] p-[24px] flex flex-col items-center gap-[10px] bg-white">
      {/* Avatar (132px circle with 5px border) */}
      <div
        className="relative size-[132px] rounded-[66px] shrink-0 overflow-hidden"
        style={{ border: `5px solid ${getBorderColor()}` }}
      >
        <div className="absolute inset-0 bg-[#ffe1e5] rounded-[66px]" />
        <img
          src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
          alt="Avatar"
          className="absolute inset-0 size-full object-cover rounded-[66px]"
        />
      </div>

      {/* User Name */}
      <h1 className="text-[22px] font-bold text-[#2b2226] tracking-[-0.22px] whitespace-nowrap text-center">
        Your name
      </h1>

      {/* Subtitle */}
      <p className="text-[13px] text-[#6c5a61] text-center tracking-[-0.13px] leading-normal min-w-full">
        Reader since today · Fokie is your default photo
      </p>

      {/* Stats row */}
      <div className="flex gap-[10px] items-start w-full whitespace-nowrap">
        {/* Day streak */}
        <div className="bg-[#fff4f5] flex-1 flex flex-col items-center p-[10px] rounded-[4px] min-w-0">
          <span className="font-display font-black text-[56px] text-[#b51d42] leading-[0.88]">
            3
          </span>
          <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] leading-normal mt-[2px]">
            day streak
          </span>
        </div>

        {/* Fokie Points */}
        <div className="bg-[#fff4f5] flex-1 flex flex-col items-center p-[10px] rounded-[4px] min-w-0">
          <span className="font-display font-black text-[56px] text-[#b51d42] leading-[0.88]">
            {points}
          </span>
          <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] leading-normal mt-[2px]">
            Fokie Points
          </span>
        </div>
      </div>
    </div>
  );
}
