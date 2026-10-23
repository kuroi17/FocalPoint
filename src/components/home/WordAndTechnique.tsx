"use client";

import React, { useState } from "react";

export default function WordAndTechnique() {
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(
    null,
  );

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-12 md:py-[64px]">
      <div className="flex flex-col md:flex-row gap-[24px] items-stretch w-full">
        {/* Word of the Day (Figma 5:265) */}
        <div className="bg-[#b51d42] text-white p-[24px] sm:p-[28px] rounded-[4px] flex-1 min-w-0 flex flex-col gap-[12px] overflow-hidden">
          <span className="text-[12px] font-bold text-white tracking-[0.96px] uppercase font-sans">
            WORD OF THE DAY
          </span>
          <h3 className="text-[40px] sm:text-[54px] md:text-[68px] xl:text-[96px] font-black leading-[0.88] font-display text-white whitespace-nowrap select-none">
            CORROBORATE
          </h3>
          <span className="text-[15px] text-white tracking-[-0.15px] font-sans">
            verb
          </span>
          <p className="text-[15px] font-semibold text-white tracking-[-0.15px] font-sans">
            What do you think it means? Guess right for +3 Fokie Points.
          </p>

          <div className="flex flex-col gap-[10px] pt-1">
            {[
              "To make a story longer",
              "To confirm a claim with another source",
              "To interview someone twice",
            ].map((opt, i) => (
              <button
                key={i}
                onClick={() => setSelectedQuizOption(i)}
                className={`w-full text-left px-[12px] py-[10px] rounded-[4px] border-[1.5px] text-[14px] tracking-[-0.14px] transition-colors font-sans ${
                  selectedQuizOption === i
                    ? i === 1
                      ? "bg-emerald-600 border-emerald-400 text-white font-bold"
                      : "bg-red-950 border-red-500 text-white"
                    : "bg-white/12 border-white/40 hover:bg-white/20 text-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Journalism Technique of the Day (Figma 5:276) */}
        <div className="bg-[#fce192] text-[#5a4410] p-[28px] rounded-[4px] flex-1 flex flex-col gap-[12px]">
          <span className="text-[12px] font-bold text-[#5a4410] tracking-[0.96px] uppercase font-sans">
            JOURNALISM TECHNIQUE OF THE DAY
          </span>
          <h3 className="text-[64px] lg:text-[106px] font-black leading-[0.88] font-display text-[#5a4410] whitespace-nowrap">
            INVERTED PYRAMID
          </h3>
          <p className="text-[16px] leading-[1.5] tracking-[-0.16px] text-[#5a4410] font-sans">
            Put the most important facts first, then details in order of
            importance, so readers get the story even if they stop early.
          </p>
          <p className="text-[15px] leading-[1.5] tracking-[-0.15px] text-[#5a4410] font-sans pt-2">
            Try it: write your lead in one sentence that answers who, what,
            when and where.
          </p>
        </div>
      </div>
    </section>
  );
}
