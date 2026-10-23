"use client";

import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1440px] px-5 md:px-[100px] pt-6 md:pt-[32px] pb-10 md:pb-[56px]">
      <div className="flex flex-col lg:flex-row gap-[32px] items-start justify-between w-full">
        {/* Lead Column (449px desktop width, order 2 on mobile) */}
        <div className="order-2 lg:order-1 w-full lg:w-[449px] shrink-0 flex flex-col gap-[20px] items-start">
          {/* Main Story Box (Figma 5:55) */}
          <div
            className="relative w-full border-[1.5px] border-[#e0506a] p-[26px] md:px-[26px] md:py-[34px] flex flex-col gap-[22px] overflow-hidden bg-white shrink-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%),
                radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%)
              `,
            }}
          >
            {/* Decorative corner brackets (Figma 5:81, 5:82, 5:83, 5:84) */}
            <span className="absolute -top-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
            <span className="absolute -top-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
            <span className="absolute -bottom-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
            <span className="absolute -bottom-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />

            {/* Pub corner seal watermark (Figma 5:68 - full 100% saturation) */}
            <div className="absolute right-0 top-[-11px] w-[190px] md:w-[192px] h-[584px] pointer-events-none overflow-hidden z-0">
              <img
                src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
                alt="Watermark Seal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Section kicker (Figma 5:56: Psilograph Black 154px) */}
            <h1 className="text-[100px] md:text-[154px] font-black leading-[0.86] text-[#a8283f] font-display whitespace-nowrap z-10">
              NEWS
            </h1>

            {/* SVG rule (Figma 5:57) */}
            <div className="w-[180px] md:w-[241px] h-px z-10">
              <img
                src="/assets/92a21ca24cbed2a95862c1cbce300e569cabf21b.svg"
                alt="Divider"
                className="w-full h-full block"
              />
            </div>

            {/* Headline (Figma 4005:1703: SF Pro Semibold 34px, 241px wide) */}
            <h2 className="text-[26px] md:text-[34px] font-semibold leading-[1.04] tracking-[-1.02px] max-w-[241px] z-10 font-sans">
              <span className="text-[#5f5a5c]">The long way </span>
              <span className="text-[#a8283f]">to class</span>
            </h2>

            {/* Horizontal rule (Figma 5:59) */}
            <div className="w-[180px] md:w-[241px] h-px bg-[#6b6467]/75 z-10" />

            {/* Excerpt (Figma 5:60: SF Pro Regular 16.5px, 241px wide) */}
            <p className="text-[15px] md:text-[16.5px] leading-[1.5] text-[#5f5a5c] tracking-[-0.165px] max-w-[241px] z-10 font-sans">
              Between the first jeepney ride and the last walk to campus,
              students are counting what the commute really costs them.
            </p>

            {/* Byline (Figma 5:61: SF Pro Regular 13px) */}
            <p className="text-[13px] text-[#7a7275] tracking-[-0.13px] max-w-[241px] z-10 font-sans">
              By Bea Reyes · 19 Oct 2026 · 7 min read
            </p>

            {/* Logo lockup (Figma 5:62) */}
            <div className="flex items-center gap-[8px] pt-1 z-10">
              <div className="w-[30px] h-[30px] opacity-60 shrink-0">
                <img
                  src="/assets/e664502cc413a3343a7e044f4c1bca0d4ab24e10.png"
                  alt="Logo"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
              <div className="flex flex-col text-[#8d8689] font-sans">
                <span className="text-[16px] font-black tracking-[-0.48px] leading-none">
                  FOCALPOINT
                </span>
                <span className="text-[9px] font-medium leading-[1.25]">
                  Bringing Stories into Focus,
                  <br />
                  Amplifying Voices with Purpose.
                </span>
              </div>
            </div>
          </div>

          {/* Read button (Figma 5:85: 157x41px) */}
          <Link
            href="/article/the-long-way-to-class"
            className="inline-flex items-center justify-center w-[157px] h-[41px] bg-[#b51d42] hover:bg-[#961735] text-white text-[14px] font-bold rounded-[4px] tracking-[-0.14px] transition-colors"
          >
            Read the story  →
          </Link>
        </div>

        {/* Lead Photo Column (Figma 5:87: 427x534px, order 1 on mobile) */}
        <div
          className="order-1 lg:order-2 w-full lg:w-[427px] h-[240px] md:h-[380px] lg:h-[534px] rounded-[4px] overflow-hidden relative shrink-0"
          style={{
            backgroundImage:
              "linear-gradient(128.65deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
          }}
        >
          <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
            LEAD PHOTO · 4:5
          </span>
          <img
            src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
            alt="Badge"
            className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
          />
        </div>

        {/* Top Stories Column (Figma 5:90: 300px width with red top line) */}
        <div className="order-3 w-full lg:w-[300px] shrink-0 border-t-[3px] border-[#b51d42] pt-[12px] flex flex-col">
          <h3 className="text-[39px] font-black text-[#2b2226] font-display leading-[0.88] whitespace-nowrap mb-1">
            TOP STORIES
          </h3>

          <div className="flex flex-col">
            {/* 1 */}
            <div className="border-b border-[#f1c9d0] flex gap-[12px] items-start py-[14px] w-full">
              <span className="text-[48px] font-black text-[#e0506a] font-display leading-[0.88] w-[28px] shrink-0">
                1
              </span>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0 font-sans">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-[0.88px]">
                  SCI-TECH
                </span>
                <Link
                  href="#"
                  className="text-[16px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.16px] transition-colors"
                >
                  Mapping the heat, one campus corner at a time
                </Link>
              </div>
            </div>

            {/* 2 */}
            <div className="border-b border-[#f1c9d0] flex gap-[12px] items-start py-[14px] w-full">
              <span className="text-[48px] font-black text-[#e0506a] font-display leading-[0.88] w-[28px] shrink-0">
                2
              </span>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0 font-sans">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-[0.88px]">
                  OPINION
                </span>
                <Link
                  href="#"
                  className="text-[16px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.16px] transition-colors"
                >
                  A seat at the table means little if no one is listening
                </Link>
              </div>
            </div>

            {/* 3 */}
            <div className="border-b border-[#f1c9d0] flex gap-[12px] items-start py-[14px] w-full">
              <span className="text-[48px] font-black text-[#e0506a] font-display leading-[0.88] w-[28px] shrink-0">
                3
              </span>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0 font-sans">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-[0.88px]">
                  FEATURE
                </span>
                <Link
                  href="#"
                  className="text-[16px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.16px] transition-colors"
                >
                  Small repairs, lasting stories
                </Link>
              </div>
            </div>

            {/* 4 */}
            <div className="border-b border-[#f1c9d0] flex gap-[12px] items-start py-[14px] w-full">
              <span className="text-[48px] font-black text-[#e0506a] font-display leading-[0.88] w-[28px] shrink-0">
                4
              </span>
              <div className="flex flex-col gap-[4px] flex-1 min-w-0 font-sans">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-[0.88px]">
                  SPORTS
                </span>
                <Link
                  href="#"
                  className="text-[16px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.16px] transition-colors"
                >
                  Before the whistle, the work no one sees
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
