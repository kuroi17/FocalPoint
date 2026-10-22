"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            1. HERO SECTION (Desktop node 5:52 / Mobile node 5:436)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-8 md:py-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mobile Lead Photo (Order 1 on mobile, hidden on lg desktop) */}
            <div className="lg:hidden w-full aspect-[4/3] rounded-[4px] overflow-hidden relative"
                 style={{ backgroundImage: "linear-gradient(128.65deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)" }}>
              <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                LEAD PHOTO · 4:5
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
              />
            </div>

            {/* Main Story Box (449px width on desktop) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div
                className="relative border-[1.5px] border-[#e0506a] p-[26px] md:p-[34px] flex flex-col gap-[22px] overflow-hidden bg-white"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%),
                    radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%)
                  `
                }}
              >
                {/* Decorative corner brackets (Figma 5:81, 5:82, 5:83, 5:84) */}
                <span className="absolute -top-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
                <span className="absolute -top-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
                <span className="absolute -bottom-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
                <span className="absolute -bottom-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />

                {/* Pub corner seal watermark (Figma 5:68) */}
                <div className="absolute right-0 top-0 w-[192px] h-full pointer-events-none opacity-40 overflow-hidden">
                  <img
                    src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
                    alt="Watermark"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Section kicker */}
                <h1 className="text-[96px] md:text-[140px] font-black leading-[0.86] text-[#a8283f] font-display tracking-tight z-10">
                  NEWS
                </h1>

                {/* SVG rule */}
                <div className="w-[241px] h-px z-10">
                  <img
                    src="/assets/92a21ca24cbed2a95862c1cbce300e569cabf21b.svg"
                    alt="Divider"
                    className="w-full h-full"
                  />
                </div>

                {/* Headline */}
                <h2 className="text-[26px] md:text-[34px] font-semibold leading-[1.05] tracking-[-1.02px] max-w-[280px] z-10">
                  <span className="text-[#5f5a5c]">The long way </span>
                  <span className="text-[#a8283f]">to class</span>
                </h2>

                {/* Horizontal rule */}
                <div className="w-[241px] h-px bg-[#6b6467]/75 z-10" />

                {/* Excerpt */}
                <p className="text-[15px] md:text-[16.5px] leading-[1.5] text-[#5f5a5c] tracking-[-0.165px] max-w-[260px] z-10">
                  Between the first jeepney ride and the last walk to campus, students are counting what the commute really costs them.
                </p>

                {/* Byline */}
                <p className="text-[13px] text-[#7a7275] tracking-[-0.13px] z-10">
                  By Bea Reyes · 19 Oct 2026 · 7 min read
                </p>

                {/* Logo lockup */}
                <div className="flex items-center gap-[8px] pt-2 z-10">
                  <div className="w-[30px] h-[30px] opacity-60 shrink-0">
                    <img
                      src="/assets/e664502cc413a3343a7e044f4c1bca0d4ab24e10.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col text-[#8d8689]">
                    <span className="text-[16px] font-black tracking-[-0.48px] font-display leading-none">
                      FOCALPOINT
                    </span>
                    <span className="text-[9px] font-medium leading-tight">
                      Bringing Stories into Focus, Amplifying Voices with Purpose.
                    </span>
                  </div>
                </div>
              </div>

              {/* Read button */}
              <Link
                href="/article/the-long-way-to-class"
                className="inline-flex items-center justify-center w-[157px] h-[41px] bg-[#b51d42] hover:bg-[#a8283f] text-white text-[14px] font-medium rounded-[4px] transition-colors"
              >
                Read the story →
              </Link>
            </div>

            {/* Desktop Hero Photo (427px width, hidden on mobile) */}
            <div className="hidden lg:block lg:col-span-4 h-[534px] rounded-[4px] overflow-hidden relative"
                 style={{ backgroundImage: "linear-gradient(128.65deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)" }}>
              <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                LEAD PHOTO · 4:5
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
              />
            </div>

            {/* Top Stories (300px width on desktop) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h3 className="text-[28px] font-black text-[#2b2226] font-display tracking-tight">
                TOP STORIES
              </h3>

              <div className="flex flex-col divide-y divide-[#f1c9d0]">
                {/* 1 */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[28px] font-black text-[#b51d42] font-display leading-none">
                    1
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wide">
                      SCI-TECH
                    </span>
                    <Link href="#" className="text-[15px] font-semibold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                      Mapping the heat, one campus corner at a time
                    </Link>
                  </div>
                </div>

                {/* 2 */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[28px] font-black text-[#b51d42] font-display leading-none">
                    2
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wide">
                      OPINION
                    </span>
                    <Link href="#" className="text-[15px] font-semibold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                      A seat at the table means little if no one is listening
                    </Link>
                  </div>
                </div>

                {/* 3 */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[28px] font-black text-[#b51d42] font-display leading-none">
                    3
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wide">
                      FEATURE
                    </span>
                    <Link href="#" className="text-[15px] font-semibold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                      Small repairs, lasting stories
                    </Link>
                  </div>
                </div>

                {/* 4 */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[28px] font-black text-[#b51d42] font-display leading-none">
                    4
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wide">
                      SPORTS
                    </span>
                    <Link href="#" className="text-[15px] font-semibold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                      Before the whistle, the work no one sees
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider rule */}
        <div className="w-full max-w-[1240px] px-5 h-[1.5px] bg-[#f1c9d0] my-2" />

        {/* ==========================================================
            2. LATEST BY SECTION (Desktop node 5:112 / Mobile node 5:496)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-8">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-[32px] md:text-[44px] font-black text-[#b51d42] font-display tracking-tight">
              LATEST BY SECTION
            </h2>
            <span className="hidden md:inline text-[13px] text-[#6c5a61]">
              Tap a section name to open it
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 880px: News, Feature, Sci-Tech blocks */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              
              {/* NEWS BLOCK */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-[#f1c9d0] pb-2">
                  <h3 className="text-[28px] font-black text-[#b51d42] font-display">
                    NEWS
                  </h3>
                  <Link href="/news" className="text-[14px] font-semibold text-[#b51d42] hover:underline">
                    See all →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Story Card */}
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden relative"
                         style={{ backgroundImage: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)" }}>
                      <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white tracking-widest">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-2 right-2 w-5 h-5 opacity-75 object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#b51d42] tracking-wider uppercase">
                      NEWS · CANTEEN
                    </span>
                    <Link href="#" className="text-[18px] md:text-[20px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                      What a hundred pesos buys at the campus canteen
                    </Link>
                    <span className="text-[13px] text-[#7a7275]">
                      By Bea Reyes · 17 Oct 2026
                    </span>
                  </div>

                  {/* Story Rows */}
                  <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#b51d42] tracking-wider uppercase">
                          STUDY SPACES
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-tight">
                          When the library closes before the studying ends
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Migs Dela Cruz · 4 min read
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#b51d42] tracking-wider uppercase">
                          NEWS · FARES
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-tight">
                          The long way to class: students rethink the daily commute
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Bea Reyes · 18 Oct 2026
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FEATURE BLOCK */}
              <div className="flex flex-col gap-4 border-t border-[#f1c9d0] pt-8">
                <div className="flex items-center justify-between border-b border-[#f1c9d0] pb-2">
                  <h3 className="text-[28px] font-black text-[#e0506a] font-display">
                    FEATURE
                  </h3>
                  <Link href="/features" className="text-[14px] font-semibold text-[#e0506a] hover:underline">
                    See all →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden relative"
                         style={{ backgroundImage: "linear-gradient(135deg, #fcebe8 0%, #e86348 80%)" }}>
                      <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white tracking-widest">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-2 right-2 w-5 h-5 opacity-75 object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#e0506a] tracking-wider uppercase">
                      FEATURE · ARTS
                    </span>
                    <Link href="#" className="text-[18px] md:text-[20px] font-bold text-[#2b2226] hover:text-[#e0506a] leading-snug">
                      A little paper, a little courage: inside the campus zine scene
                    </Link>
                    <span className="text-[13px] text-[#7a7275]">
                      By Kat Mendoza · 19 Oct 2026
                    </span>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #fcebe8 0%, #e86348 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#e0506a] tracking-wider uppercase">
                          FEATURE · WORKSHOP
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#e0506a] leading-tight">
                          Small repairs, lasting stories
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Allen Gomez · 5 min read
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #fcebe8 0%, #e86348 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#e0506a] tracking-wider uppercase">
                          FEATURE · BOOKSWAP
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#e0506a] leading-tight">
                          The second life of a course book
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Jessica Tan · 3 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCI-TECH BLOCK */}
              <div className="flex flex-col gap-4 border-t border-[#f1c9d0] pt-8">
                <div className="flex items-center justify-between border-b border-[#f1c9d0] pb-2">
                  <h3 className="text-[28px] font-black text-[#2e8b83] font-display">
                    SCI-TECH
                  </h3>
                  <Link href="/sci-tech" className="text-[14px] font-semibold text-[#2e8b83] hover:underline">
                    See all →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-7 flex flex-col gap-3">
                    <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden relative"
                         style={{ backgroundImage: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)" }}>
                      <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white tracking-widest">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-2 right-2 w-5 h-5 opacity-75 object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#2e8b83] tracking-wider uppercase">
                      SCI-TECH · HEAT MAP
                    </span>
                    <Link href="#" className="text-[18px] md:text-[20px] font-bold text-[#2b2226] hover:text-[#2e8b83] leading-snug">
                      Mapping the heat, one campus corner at a time
                    </Link>
                    <span className="text-[13px] text-[#7a7275]">
                      By Dan Navarro · 18 Oct 2026
                    </span>
                  </div>

                  <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#2e8b83] tracking-wider uppercase">
                          SCI-TECH · OPEN SOURCE
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#2e8b83] leading-tight">
                          Before you trust the answer, check the source
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Rio Santos · 4 min read
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-[100px] h-[100px] rounded-[4px] shrink-0 overflow-hidden relative"
                           style={{ backgroundImage: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)" }}>
                        <img
                          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                          alt="Badge"
                          className="absolute bottom-1 right-1 w-4 h-4 opacity-75 object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10.5px] font-bold text-[#2e8b83] tracking-wider uppercase">
                          SCI-TECH · WEATHER
                        </span>
                        <Link href="#" className="text-[14px] font-bold text-[#2b2226] hover:text-[#2e8b83] leading-tight">
                          What the rain gauge on the roof is telling us
                        </Link>
                        <span className="text-[12px] text-[#7a7275]">
                          By Andrei Tan · 4 min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 320px: CATCH UP card */}
            <div className="lg:col-span-4 border border-[#e0506a] rounded-[8px] p-5 flex flex-col gap-4 bg-[#fff9fa]">
              <h3 className="text-[26px] font-black text-[#b51d42] font-display">
                CATCH UP
              </h3>
              <p className="text-[13px] text-[#6c5a61] leading-snug">
                The stories that matter this week, in one line each.
              </p>

              <div className="flex flex-col divide-y divide-[#f1c9d0]/60">
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[20px] font-bold text-[#b51d42] font-display">1</span>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-[#2b2226]">The long way to class</span>
                    <span className="text-[12.5px] text-[#6c5a61]">Commutes take up to two hours for some students.</span>
                  </div>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[20px] font-bold text-[#b51d42] font-display">2</span>
                  <span className="text-[14px] font-bold text-[#2b2226]">A seat at the table</span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[20px] font-bold text-[#b51d42] font-display">3</span>
                  <span className="text-[14px] font-bold text-[#2b2226]">Mapping the heat</span>
                </div>
                <div className="py-3 flex items-start gap-3">
                  <span className="text-[20px] font-bold text-[#b51d42] font-display">4</span>
                  <span className="text-[14px] font-bold text-[#2b2226]">Student councils open the floor</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================
            3. OPINION SECTION (Desktop node 5:231 / Mobile node 5:614)
        ========================================================== */}
        <section className="w-full bg-[#fdf5f6] py-12 px-5 md:px-[100px] flex justify-center">
          <div className="w-full max-w-[1240px] flex flex-col gap-8">
            <div className="inline-block">
              <span className="bg-[#b51d42] text-white text-[11px] font-bold tracking-widest px-3 py-1 rounded-[4px] uppercase">
                OPINION
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Editorial quote */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <span className="text-[60px] font-black text-[#b51d42] leading-none">“</span>
                <blockquote className="text-[24px] md:text-[34px] font-bold text-[#2b2226] leading-tight tracking-tight">
                  A seat at the table means little if no one is listening to the person sitting in it.
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#ffe1e5]">
                      <img src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-bold text-[#2b2226]">The Editorial Board</span>
                      <span className="text-[12px] text-[#7a7275]">Our collective stand · 19 Oct 2026</span>
                    </div>
                  </div>

                  <Link
                    href="/editorial"
                    className="inline-flex items-center px-4 py-2 border border-[#b51d42] text-[#b51d42] hover:bg-[#b51d42] hover:text-white text-[14px] font-medium rounded-[4px] transition-colors"
                  >
                    Read the editorial →
                  </Link>
                </div>
              </div>

              {/* Editorial Cartoon */}
              <div className="lg:col-span-5 flex flex-col gap-2">
                <div className="w-full aspect-[4/3] rounded-[4px] overflow-hidden relative"
                     style={{ backgroundImage: "linear-gradient(136.33deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)" }}>
                  <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                    EDITORIAL CARTOON
                  </span>
                  <img
                    src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                    alt="Badge"
                    className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                  />
                </div>
                <span className="text-[12px] text-[#7a7275]">
                  Editorial cartoon by the Cartooning Desk
                </span>
              </div>
            </div>

            {/* More columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#f1c9d0]">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wider">COLUMN</span>
                <Link href="#" className="text-[15px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                  The quiet courage of asking the first question
                </Link>
                <span className="text-[12.5px] text-[#7a7275]">By Kat Mendoza</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wider">COLUMN</span>
                <Link href="#" className="text-[15px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                  Public information should not be a scavenger hunt
                </Link>
                <span className="text-[12.5px] text-[#7a7275]">By Paolo Garcia</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wider">COLUMN</span>
                <Link href="#" className="text-[15px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                  The language I bring to the classroom
                </Link>
                <span className="text-[12.5px] text-[#7a7275]">By Kat Mendoza</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================
            4. WORD AND TECHNIQUE SECTION (Figma 5:263 / 5:644)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Word of the Day */}
            <div className="bg-[#b51d42] text-white p-7 rounded-[8px] flex flex-col gap-4">
              <span className="text-[12px] font-bold text-white/80 tracking-widest uppercase">
                WORD OF THE DAY
              </span>
              <h3 className="text-[48px] md:text-[64px] font-black leading-none font-display text-white">
                CORROBORATE
              </h3>
              <span className="text-[14px] italic text-white/80">verb</span>
              <p className="text-[14px] text-white/90">
                What do you think it means? Guess right for +3 Fokie Points.
              </p>

              <div className="flex flex-col gap-2 pt-2">
                {[
                  "To make a story longer",
                  "To confirm a claim with another source",
                  "To interview someone twice"
                ].map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedQuizOption(i)}
                    className={`text-left px-4 py-3 rounded-[4px] border text-[13.5px] transition-colors ${
                      selectedQuizOption === i
                        ? i === 1
                          ? "bg-emerald-600 border-emerald-400 text-white font-bold"
                          : "bg-red-900 border-red-500 text-white"
                        : "border-white/30 hover:border-white/70 text-white bg-white/5"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Journalism Technique of the Day */}
            <div className="bg-[#f7d665] text-[#2b2226] p-7 rounded-[8px] flex flex-col gap-4">
              <span className="text-[12px] font-bold text-[#6c5a61] tracking-widest uppercase">
                JOURNALISM TECHNIQUE OF THE DAY
              </span>
              <h3 className="text-[44px] md:text-[56px] font-black leading-none font-display text-[#2b2226]">
                INVERTED PYRAMID
              </h3>
              <p className="text-[15px] font-medium leading-relaxed text-[#2b2226]">
                Put the most important facts first, then details in order of importance, so readers get the story even if they stop early.
              </p>
              <div className="mt-4 p-4 bg-white/50 rounded-[4px] border border-[#2b2226]/10 text-[13.5px] text-[#2b2226] font-medium">
                Try it: write your lead in one sentence that answers who, what, when and where.
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================
            5. EXPLORE OUR DESKS (Figma 5:281 / 5:674)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-10">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-[32px] md:text-[44px] font-black text-[#b51d42] font-display tracking-tight">
              EXPLORE OUR DESKS
            </h2>
            <Link href="/about#desks" className="text-[14px] font-semibold text-[#b51d42] hover:underline">
              See every desk →
            </Link>
          </div>
          <p className="text-[12px] font-bold text-[#7a7275] tracking-widest uppercase mb-6">
            CONTENT GROUP
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* News */}
            <div className="bg-[#fbeff0] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#f1c9d0]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#b51d42] font-display">NEWS</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  Where the story begins. Timely issues told with accuracy and purpose.
                </p>
              </div>
              <Link href="/news" className="text-[13px] font-bold text-[#b51d42] hover:underline">
                Read the desk →
              </Link>
            </div>

            {/* Opinion */}
            <div className="bg-[#f2edf8] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#d6c7e8]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#7d5ba6] font-display">OPINION</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  Editorials and columns that take a stand and invite debate.
                </p>
              </div>
              <Link href="/editorial" className="text-[13px] font-bold text-[#7d5ba6] hover:underline">
                Read the desk →
              </Link>
            </div>

            {/* Feature */}
            <div className="bg-[#fdf0ec] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#f3cbbe]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#e86348] font-display">FEATURE</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  The people and experiences behind the issues.
                </p>
              </div>
              <Link href="/features" className="text-[13px] font-bold text-[#e86348] hover:underline">
                Read the desk →
              </Link>
            </div>

            {/* Science */}
            <div className="bg-[#e6f6f3] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#b8e4dc]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#2e8b83] font-display">SCIENCE</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  Discovery, technology and the science in everyday life.
                </p>
              </div>
              <Link href="/sci-tech" className="text-[13px] font-bold text-[#2e8b83] hover:underline">
                Read the desk →
              </Link>
            </div>

            {/* Literature */}
            <div className="bg-[#fdf3e8] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#f4dac1]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#a66d3b] font-display">LITERATURE</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  Poems, prose and the stories we imagine.
                </p>
              </div>
              <Link href="/literary" className="text-[13px] font-bold text-[#a66d3b] hover:underline">
                Read the desk →
              </Link>
            </div>

            {/* Sports */}
            <div className="bg-[#fcf4e6] p-5 rounded-[6px] flex flex-col justify-between h-[210px] border border-[#f2ddba]/40">
              <div className="flex flex-col gap-2">
                <span className="text-[20px] font-black text-[#c28427] font-display">SPORTS</span>
                <p className="text-[12.5px] text-[#5f5a5c] leading-snug">
                  The discipline, community and heart behind every game.
                </p>
              </div>
              <Link href="/sports" className="text-[13px] font-bold text-[#c28427] hover:underline">
                Read the desk →
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================================
            6. COMMUNITY LENS & LISTEN (Figma 5:317 / 5:733)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Community lens */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#f1c9d0] pb-2">
                <h3 className="text-[26px] font-black text-[#b51d42] font-display">
                  COMMUNITY LENS
                </h3>
                <Link href="/gallery" className="text-[14px] font-semibold text-[#b51d42] hover:underline">
                  Image board →
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  "linear-gradient(135deg, #fcebe8 0%, #e0506a 80%)",
                  "linear-gradient(135deg, #fef4dc 0%, #d89f28 80%)",
                  "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)",
                  "linear-gradient(135deg, #f2edf8 0%, #7d5ba6 80%)"
                ].map((grad, i) => (
                  <div
                    key={i}
                    className="w-full h-[180px] rounded-[4px] relative overflow-hidden"
                    style={{ backgroundImage: grad }}
                  >
                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white tracking-widest">
                      PHOTO
                    </span>
                    <img
                      src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                      alt="Badge"
                      className="absolute bottom-2 right-2 w-4 h-4 opacity-75 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Listen / Podcasts */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-[#f1c9d0] pb-2">
                <h3 className="text-[26px] font-black text-[#b51d42] font-display">
                  LISTEN
                </h3>
                <Link href="/podcasts" className="text-[14px] font-semibold text-[#b51d42] hover:underline">
                  All episodes →
                </Link>
              </div>

              <div className="flex flex-col divide-y divide-[#f1c9d0]">
                {[
                  { title: "Ep. 4: The commute, out loud", desk: "News Desk", duration: "21 min" },
                  { title: "Ep. 3: Who decides what counts as news?", desk: "News Desk", duration: "18 min" },
                  { title: "Ep. 2: Writing columns without shouting", desk: "Opinion Desk", duration: "22 min" }
                ].map((ep, i) => (
                  <div key={i} className="py-3 flex items-center gap-3 group cursor-pointer">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#b51d42] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-[13px] ml-0.5">▶</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14.5px] font-bold text-[#2b2226] group-hover:text-[#b51d42] leading-snug">
                        {ep.title}
                      </span>
                      <span className="text-[12px] text-[#7a7275]">
                        {ep.desk} · {ep.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================
            7. CALL FOR FOCALCREWS (Figma 5:358 / 5:772)
        ========================================================== */}
        <section className="w-full bg-[#b51d42] text-white py-12 px-5 md:px-[100px] flex justify-center">
          <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 flex flex-col gap-4">
              <h2 className="text-[44px] md:text-[68px] font-black leading-none font-display text-white tracking-tight">
                CALL FOR FOCALCREWS
              </h2>
              <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed max-w-[600px]">
                Content group, technical group, photo and web. Let Fokie help you find the desk that fits you.
              </p>
              <div>
                <Link
                  href="/about#join"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#b51d42] hover:bg-[#ffe1e5] font-bold text-[14px] rounded-[4px] transition-colors mt-2"
                >
                  Find your desk →
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="w-[280px] md:w-[320px] aspect-[4/5] relative">
                <img
                  src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
                  alt="Fokie Mascot"
                  className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
