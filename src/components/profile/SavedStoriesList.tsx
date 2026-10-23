import React from "react";
import Link from "next/link";

export default function SavedStoriesList() {
  return (
    <div className="flex flex-col gap-[10px] w-full pt-1">
      {/* Title */}
      <h3 className="font-display font-black text-[56px] text-[#b51d42] leading-[0.88]">
        SAVED STORIES
      </h3>

      {/* Story row */}
      <Link
        href="/article/the-long-way-to-class"
        className="group border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full hover:opacity-95 transition"
      >
        {/* Photo with exact gradient and watermark */}
        <div
          className="size-[120px] rounded-[4px] shrink-0 relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.429%)",
          }}
        >
          <span className="absolute bottom-[12px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
            PHOTO
          </span>
          <div className="absolute bottom-[12px] right-[12px] size-[34px] opacity-85">
            <img
              src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
              alt="Logo"
              className="size-full object-contain pointer-events-none"
            />
          </div>
        </div>

        {/* Text information */}
        <div className="flex flex-1 flex-col gap-[6px] items-start min-w-0">
          <span className="font-bold text-[11px] text-[#b51d42] tracking-[0.88px] uppercase">
            NEWS · COMMUTE
          </span>
          <h4 className="font-bold text-[17px] text-[#2b2226] leading-[1.3] tracking-[-0.17px] group-hover:text-[#b51d42] transition-colors">
            The long way to class: students rethink the daily commute
          </h4>
          <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            By Bea Reyes · 7 min read
          </p>
        </div>
      </Link>
    </div>
  );
}
