"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 md:px-[100px] py-[60px] md:py-[80px] flex items-center justify-center">
        <div className="w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 404 text & actions */}
          <div className="md:col-span-7 flex flex-col items-start gap-4">
            <h1 className="text-[120px] md:text-[220px] lg:text-[280px] font-black leading-[0.88] text-[#b51d42] font-display select-none">
              404
            </h1>
            <h2 className="text-[26px] md:text-[34px] font-semibold leading-[1.08] text-[#2b2226] tracking-[-1.02px]">
              Fokie looked everywhere, but this page went off the beat.
            </h2>
            <p className="text-[15px] md:text-[17px] text-[#6c5a61] tracking-[-0.17px]">
              The link may be old, or the story moved to another section.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/"
                className="px-[18px] py-[12px] bg-[#b51d42] hover:bg-[#a8283f] text-white text-[14px] font-bold rounded-[4px] tracking-[-0.14px] transition-colors"
              >
                Back to the homepage
              </Link>
              <Link
                href="/news"
                className="px-[18px] py-[12px] border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#fff4f5] text-[14px] font-bold rounded-[4px] tracking-[-0.14px] transition-colors"
              >
                Search instead
              </Link>
            </div>
          </div>

          {/* Right Column: Confused tilted Fokie with question marks */}
          <div className="md:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[280px] md:w-[340px] aspect-[4/5]">
              {/* Question marks */}
              <span className="absolute -top-4 right-6 text-[70px] md:text-[90px] font-black text-[#e0506a] font-display select-none">
                ?
              </span>
              <span className="absolute top-16 -left-6 text-[50px] md:text-[62px] font-black text-[#e0506a] font-display select-none">
                ?
              </span>
              <span className="absolute -top-2 left-16 text-[40px] md:text-[50px] font-black text-[#e0506a] font-display select-none">
                ?
              </span>

              {/* Tilted Fokie */}
              <div className="-rotate-6 w-full h-full">
                <img
                  src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
                  alt="Confused Fokie"
                  className="w-full h-full object-contain pointer-events-none drop-shadow-md"
                />
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
