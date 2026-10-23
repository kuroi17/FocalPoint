import React from "react";
import Link from "next/link";

export default function OpinionSection() {
  return (
    <section className="w-full bg-[#fff4f5] py-[64px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col gap-[24px]">
        <div className="inline-block">
          <span className="bg-[#b51d42] text-white text-[11px] font-bold tracking-[0.88px] px-[8px] py-[6px] uppercase font-sans">
            EDITORIAL
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px] items-center justify-between w-full">
          {/* Editorial quote */}
          <div className="flex flex-col gap-[4px] flex-1 min-w-0 pt-[12px]">
            <span className="text-[130px] font-black text-[#e0506a] opacity-55 leading-none font-display select-none -mb-6">
              “
            </span>
            <blockquote className="text-[30px] md:text-[44px] font-black text-[#2b2226] leading-[1.12] tracking-[-0.88px] font-sans">
              A seat at the table means little if no one is listening to the
              person sitting in it.
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-full border-2 border-[#e0506a] bg-[#ffe1e5] overflow-hidden shrink-0">
                  <img
                    src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] tracking-[-0.15px]">
                    The Editorial Board
                  </span>
                  <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                    Our collective stand · 19 Oct 2026
                  </span>
                </div>
              </div>

              <Link
                href="/editorial"
                className="inline-flex items-center px-[18px] py-[12px] border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#b51d42] hover:text-white text-[14px] font-bold rounded-[4px] tracking-[-0.14px] transition-colors"
              >
                Read the editorial  →
              </Link>
            </div>
          </div>

          {/* Editorial Cartoon (440x420px) */}
          <div className="w-full lg:w-[440px] shrink-0 flex flex-col gap-[8px]">
            <div
              className="w-full h-[320px] md:h-[420px] rounded-[4px] overflow-hidden relative"
              style={{
                backgroundImage:
                  "linear-gradient(136.33deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
              }}
            >
              <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                EDITORIAL CARTOON
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
              />
            </div>
            <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px] font-sans">
              Editorial cartoon by the Cartooning Desk
            </p>
          </div>
        </div>

        {/* More columns (Figma 5:250) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] pt-[24px] border-t border-[#f1c9d0]">
          <div className="flex flex-col gap-[6px] font-sans">
            <span className="text-[11px] font-bold text-[#7d5ba6] uppercase tracking-[0.88px]">
              COLUMN
            </span>
            <Link
              href="#"
              className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
            >
              The quiet courage of asking the first question
            </Link>
            <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              By Kat Mendoza
            </span>
          </div>

          <div className="flex flex-col gap-[6px] font-sans">
            <span className="text-[11px] font-bold text-[#7d5ba6] uppercase tracking-[0.88px]">
              COLUMN
            </span>
            <Link
              href="#"
              className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
            >
              Public information should not be a scavenger hunt
            </Link>
            <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              By Paolo Garcia
            </span>
          </div>

          <div className="flex flex-col gap-[6px] font-sans">
            <span className="text-[11px] font-bold text-[#7d5ba6] uppercase tracking-[0.88px]">
              COLUMN
            </span>
            <Link
              href="#"
              className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
            >
              The language I bring to the classroom
            </Link>
            <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              By Kat Mendoza
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
