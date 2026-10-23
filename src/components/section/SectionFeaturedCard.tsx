import React from "react";
import Link from "next/link";

interface SectionFeaturedCardProps {
  photoLabel?: string;
  photoGradient?: string;
  badgeSrc?: string;
  cardTitle?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  byline?: string;
  buttonText?: string;
  href?: string;
}

export default function SectionFeaturedCard({
  photoLabel = "FEATURED PHOTO · 3:2",
  photoGradient = "linear-gradient(146.31deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
  badgeSrc = "/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png",
  cardTitle = "FEATURED",
  headlinePrefix = "The long way to class: ",
  headlineHighlight = "students rethink the daily commute",
  byline = "By Bea Reyes · 19 Oct 2026",
  buttonText = "Read the story  →",
  href = "/article/the-long-way-to-class",
}: SectionFeaturedCardProps) {
  return (
    <div
      className="border-[#f1c9d0] border-b border-solid flex flex-col lg:flex-row gap-[32px] items-stretch lg:items-center pb-[40px] w-full max-w-[1240px] mx-auto"
      data-node-id="6:379"
      data-name="featured"
    >
      {/* Lead Photo Column (3:2 ratio) */}
      <div
        className="w-full lg:w-[720px] h-[320px] sm:h-[400px] lg:h-[480px] shrink-0 rounded-[4px] relative overflow-hidden"
        style={{ backgroundImage: photoGradient }}
        data-node-id="6:380"
        data-name="photo"
      >
        <span className="absolute bottom-[16px] left-[16px] font-sans font-semibold text-[11px] text-white tracking-[0.66px]">
          {photoLabel}
        </span>
        <img
          src={badgeSrc}
          alt="Badge"
          className="absolute bottom-[14px] right-[14px] size-[34px] opacity-85 object-contain pointer-events-none"
        />
      </div>

      {/* Pub Box Column */}
      <div
        className="w-full lg:w-[488px] min-h-[465px] lg:h-[480px] shrink-0 relative border-[1.5px] border-[#e0506a] border-solid px-[26px] py-[34px] flex flex-col justify-between overflow-hidden bg-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%), radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%), #ffffff",
        }}
        data-node-id="6:383"
        data-name="pub box"
      >
        {/* Full saturated watermark seal on the right */}
        <div
          className="absolute top-[-9px] right-0 w-[158px] h-[480px] overflow-hidden pointer-events-none z-0"
          data-node-id="6:391"
        >
          <img
            src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
            alt="Watermark Seal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 Corner decorative brackets */}
        <span className="absolute -top-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
        <span className="absolute -top-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
        <span className="absolute -bottom-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
        <span className="absolute -bottom-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />

        {/* Top & middle content */}
        <div className="flex flex-col gap-[14px] items-start z-10">
          {/* Card Title */}
          <h2
            className="font-display font-black leading-[0.86] text-[72px] sm:text-[110px] lg:text-[167px] text-[#a8283f] not-italic whitespace-nowrap tracking-wide select-none"
            data-node-id="6:384"
          >
            {cardTitle}
          </h2>

          <div className="bg-[rgba(107,100,103,0.75)] h-px w-[303px] max-w-full shrink-0" />

          {/* Two-Tone Headline */}
          <h3
            className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.78px] leading-[1.08] w-[303px] max-w-full"
            data-node-id="4005:1705"
          >
            <span className="text-[#5f5a5c]">{headlinePrefix}</span>
            <span className="text-[#a8283f]">{headlineHighlight}</span>
          </h3>

          <div className="bg-[rgba(107,100,103,0.75)] h-px w-[303px] max-w-full shrink-0" />

          {/* Byline */}
          <p
            className="font-sans text-[13px] text-[#7a7275] tracking-[-0.13px] w-[303px] max-w-full"
            data-node-id="6:388"
          >
            {byline}
          </p>
        </div>

        {/* Read the story button */}
        <div className="pt-4 z-10" data-node-id="6:389">
          <Link
            href={href}
            className="inline-flex items-center justify-center px-[18px] py-[12px] bg-[#b51d42] hover:bg-[#a8283f] text-white text-[14px] font-bold rounded-[4px] tracking-[-0.14px] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
