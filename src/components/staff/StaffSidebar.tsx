"use client";

import React from "react";

export type ActiveTab =
  | "overview"
  | "write"
  | "articles"
  | "gallery"
  | "feedback";

interface StaffSidebarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export default function StaffSidebar({
  activeTab,
  onTabChange,
}: StaffSidebarProps) {
  return (
    <aside className="bg-[#2b2226] text-white shrink-0 w-full lg:w-[230px] p-[10px] lg:p-[18px] flex lg:flex-col gap-[4px] items-center lg:items-start self-stretch overflow-x-auto lg:overflow-x-visible">
      {/* Title (Desktop only) */}
      <p className="hidden lg:block font-bold text-[15px] text-white tracking-[-0.3px] whitespace-nowrap mb-1">
        FOCALPOINT · STAFF
      </p>

      {/* Nav items */}
      <button
        type="button"
        onClick={() => onTabChange("overview")}
        className={`flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition whitespace-nowrap cursor-pointer shrink-0 lg:w-full ${
          activeTab === "overview"
            ? "bg-[#e0506a]/35 text-white"
            : "text-white hover:bg-white/5"
        }`}
      >
        <span>Overview</span>
      </button>

      <button
        type="button"
        onClick={() => onTabChange("write")}
        className={`flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition whitespace-nowrap cursor-pointer shrink-0 lg:w-full ${
          activeTab === "write"
            ? "bg-[#e0506a]/35 text-white"
            : "text-white hover:bg-white/5"
        }`}
      >
        <span>Write article</span>
      </button>

      <button
        type="button"
        onClick={() => onTabChange("articles")}
        className={`flex items-center justify-between gap-2 px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition whitespace-nowrap cursor-pointer shrink-0 lg:w-full ${
          activeTab === "articles"
            ? "bg-[#e0506a]/35 text-white"
            : "text-white hover:bg-white/5"
        }`}
      >
        <span>Articles</span>
        <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] rounded-full">
          1
        </span>
      </button>

      <button
        type="button"
        onClick={() => onTabChange("gallery")}
        className={`flex items-center justify-between gap-2 px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition whitespace-nowrap cursor-pointer shrink-0 lg:w-full ${
          activeTab === "gallery"
            ? "bg-[#e0506a]/35 text-white"
            : "text-white hover:bg-white/5"
        }`}
      >
        <span>Gallery queue</span>
        <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] rounded-full">
          3
        </span>
      </button>

      <button
        type="button"
        onClick={() => onTabChange("feedback")}
        className={`flex items-center justify-between gap-2 px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition whitespace-nowrap cursor-pointer shrink-0 lg:w-full ${
          activeTab === "feedback"
            ? "bg-[#e0506a]/35 text-white"
            : "text-white hover:bg-white/5"
        }`}
      >
        <span>Feedback &amp; Q&amp;A</span>
        <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] rounded-full">
          4
        </span>
      </button>
    </aside>
  );
}
