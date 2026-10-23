import React from "react";

interface ArticleLivePreviewProps {
  section: string;
  kicker: string;
  headline: string;
  byline: string;
}

export default function ArticleLivePreview({
  section,
  kicker,
  headline,
  byline,
}: ArticleLivePreviewProps) {
  return (
    <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-[8px]">
      {/* Label */}
      <span className="font-bold text-[11px] text-[#6c5a61] tracking-[0.66px] uppercase">
        LIVE PREVIEW
      </span>

      {/* Story card (no borders, matches Figma 12:1606 exactly) */}
      <div className="flex flex-col gap-[8px] items-start w-full">
        {/* Photo with gradient and logo watermark */}
        <div
          className="h-[253px] w-full rounded-[4px] relative overflow-hidden shrink-0"
          style={{
            backgroundImage:
              "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.429%)",
          }}
        >
          <span className="absolute bottom-[12px] left-[12px] font-semibold text-[11px] text-white tracking-[0.66px]">
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

        <div className="h-[4px] w-[10px]" />

        {/* Kicker */}
        <p className="font-bold text-[11px] text-[#b51d42] tracking-[0.88px] uppercase">
          {section.toUpperCase()} ·{" "}
          {kicker.trim() ? kicker.toUpperCase() : "KICKER"}
        </p>

        {/* Headline */}
        <h4 className="font-bold text-[21px] text-[#2b2226] leading-[1.22] tracking-[-0.42px]">
          {headline.trim() ? headline : "Your headline appears here"}
        </h4>

        {/* Byline */}
        <p className="font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
          By {byline.trim() ? byline : "Writer"} · Today
        </p>
      </div>

      {/* Publishing Flow Info Box */}
      <div className="bg-[#fff4f5] rounded-[4px] p-[14px] flex flex-col gap-[6px] w-full leading-normal text-[13px] text-[#2b2226] mt-2">
        <span className="font-bold text-[11px] text-[#b51d42] tracking-[0.66px] uppercase">
          PUBLISHING FLOW
        </span>
        <p className="tracking-[-0.13px]">1 Writer drafts</p>
        <p className="tracking-[-0.13px]">2 Copy Reading checks</p>
        <p className="tracking-[-0.13px]">3 Section editor approves</p>
        <p className="tracking-[-0.13px]">4 EIC publishes</p>
      </div>
    </div>
  );
}
