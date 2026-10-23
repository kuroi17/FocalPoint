"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226] font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-[40px] lg:pt-[72px] pb-[48px] lg:pb-[80px] flex items-center">
        <div className="flex flex-col lg:flex-row gap-[32px] items-center justify-between w-full">
          {/* Left Column: 404, Heading, Description, Buttons */}
          <div className="flex-1 flex flex-col gap-[14px] items-start w-full min-w-0">
            {/* Giant 404 display text */}
            <h1 className="font-display font-black text-[140px] sm:text-[196px] md:text-[240px] xl:text-[336px] text-[#b51d42] leading-[0.88] select-none whitespace-nowrap">
              404
            </h1>

            {/* Heading */}
            <h2 className="font-semibold text-[26px] lg:text-[34px] text-[#2b2226] leading-[1.04] tracking-[-0.78px] lg:tracking-[-1.02px]">
              Fokie looked everywhere, but this page went off the beat.
            </h2>

            {/* Description */}
            <p className="font-normal text-[17px] text-[#6c5a61] tracking-[-0.17px] leading-normal">
              The link may be old, or the story moved to another section.
            </p>

            {/* Action buttons */}
            <div className="flex gap-[10px] items-start pt-2">
              <Link
                href="/"
                className="bg-[#b51d42] hover:bg-[#a8283f] text-white px-[18px] py-[12px] rounded-[4px] font-bold text-[14px] tracking-[-0.14px] transition whitespace-nowrap inline-block"
              >
                Back to the homepage
              </Link>
              <Link
                href="/news"
                className="border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#fff4f5] px-[18px] py-[12px] rounded-[4px] font-bold text-[14px] tracking-[-0.14px] transition whitespace-nowrap inline-block"
              >
                Search instead
              </Link>
            </div>
          </div>

          {/* Right Column: Confused Fokie with question marks */}
          {/* Desktop Version */}
          <div className="hidden lg:block w-[340px] h-[420px] relative shrink-0">
            {/* Tilted Fokie */}
            <div className="absolute flex h-[432.35px] items-center justify-center left-[-48px] top-[23px] w-[379.84px]">
              <div className="-rotate-6 flex-none">
                <div className="h-[399px] w-[340px] relative">
                  <img
                    src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
                    alt="Confused Fokie"
                    className="absolute inset-0 size-full object-contain pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Question Marks in Desktop positions */}
            <span className="absolute font-display font-black text-[90px] text-[#e0506a] leading-[0.88] left-[261px] top-[32px] select-none">
              ?
            </span>
            <span className="absolute font-display font-black text-[62px] text-[#e0506a] leading-[0.88] left-[-11px] top-[88px] select-none">
              ?
            </span>
            <span className="absolute font-display font-black text-[50px] text-[#e0506a] leading-[0.88] left-[133px] top-[18px] select-none">
              ?
            </span>
          </div>

          {/* Mobile Version */}
          <div className="lg:hidden flex flex-col items-center pt-4">
            <span className="font-display font-black text-[50px] text-[#e0506a] leading-[0.88] select-none mb-1">
              ?
            </span>
            <div className="h-[300px] w-[240px] relative shrink-0">
              <div className="absolute flex h-[308.53px] items-center justify-center left-[-17px] top-0 w-[268.48px]">
                <div className="-rotate-6 flex-none">
                  <div className="h-[285px] w-[240px] relative">
                    <img
                      src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
                      alt="Confused Fokie"
                      className="absolute inset-0 size-full object-contain pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Question Marks */}
              <span className="absolute font-display font-black text-[90px] text-[#e0506a] leading-[0.88] left-[190px] top-[-10px] select-none">
                ?
              </span>
              <span className="absolute font-display font-black text-[62px] text-[#e0506a] leading-[0.88] left-[-10px] top-[40px] select-none">
                ?
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
