"use client";

import React, { useState } from "react";

export default function AboutJoinUs() {
  const [q1, setQ1] = useState<number>(0); // 0: Finding out what happened first (default active in Figma)
  const [q2, setQ2] = useState<number | null>(null);
  const [recommendedDesk, setRecommendedDesk] = useState<string | null>(null);

  const q1Options = [
    { text: "Finding out what happened first", desk: "News Desk" },
    { text: "Arguing for what I believe", desk: "Opinion Desk" },
    { text: "Hearing people's stories", desk: "Feature Desk" },
    { text: "Drawing or designing", desk: "Layout or Cartooning Desk" },
  ];

  const q2Options = [
    { text: "At a game or a court", desk: "Sports Desk" },
    { text: "Testing how something works", desk: "Sci-Tech or WebDev Desk" },
    { text: "Writing poems or short stories", desk: "Literary Desk" },
    { text: "Fixing every typo I see", desk: "Copy Reading Desk" },
  ];

  const handleShowDesk = () => {
    let desk = "News Desk";
    if (q2 !== null) {
      desk = q2Options[q2].desk;
    } else {
      desk = q1Options[q1].desk;
    }
    setRecommendedDesk(desk);
  };

  return (
    <section
      id="join-us"
      className="w-full bg-gradient-to-r from-[#ffe1e5] to-[#fff4f5] py-[64px]"
      data-node-id="8:1061"
      data-name="join the focalcrews"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] flex flex-col gap-[24px]">
        {/* Section Head */}
        <div className="flex flex-col gap-2">
          <h2 className="font-display font-black text-[40px] sm:text-[56px] md:text-[68px] lg:text-[78px] text-[#b51d42] leading-[0.88] tracking-wide">
            JOIN THE FOCALCREWS
          </h2>
          <p className="font-sans font-normal text-[16px] sm:text-[17px] text-[#6c5a61] tracking-[-0.17px]">
            Every desk above is open. Send these to apply, or let Fokie point you to a desk first.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] items-start w-full">
          {/* Requirements Box */}
          <div
            className="bg-white border-[1.5px] border-[#e0506a] border-solid flex flex-col items-start overflow-hidden w-full shadow-sm"
            data-node-id="8:1066"
            data-name="requirements"
          >
            <div className="bg-[#b51d42] px-[14px] py-[10px] w-full">
              <span className="font-sans font-bold text-[13px] text-white tracking-[1.04px] uppercase whitespace-nowrap">
                REQUIREMENTS
              </span>
            </div>
            <div className="p-[20px] flex flex-col gap-[10px] items-start w-full">
              <p className="font-sans font-bold text-[20px] text-[#2b2226] tracking-[-0.2px]">
                Portfolio
              </p>
              <p className="font-sans font-bold text-[20px] text-[#2b2226] tracking-[-0.2px]">
                Curriculum Vitae
              </p>
              <p className="font-sans font-bold text-[20px] text-[#2b2226] tracking-[-0.2px]">
                Letter of Intent
              </p>
              <a
                href="mailto:contact@focalpoint.ph"
                className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px] pt-3 hover:text-[#b51d42] underline"
              >
                Application form link goes here.
              </a>
            </div>
          </div>

          {/* Let Fokie Help You Decide Quiz */}
          <div
            className="bg-white p-[24px] rounded-[4px] flex flex-col gap-[12px] items-start w-full shadow-sm"
            data-node-id="8:1074"
            data-name="desk quiz"
          >
            <h3 className="font-display font-black text-[42px] sm:text-[50px] lg:text-[56px] text-[#b51d42] leading-[0.88] whitespace-nowrap">
              LET FOKIE HELP YOU DECIDE
            </h3>

            {/* Question 1 */}
            <p className="font-sans font-bold text-[15px] text-[#2b2226] tracking-[-0.15px] pt-2">
              1. What do you enjoy most?
            </p>
            <div className="flex flex-col gap-[8px] w-full">
              {q1Options.map((opt, idx) => {
                const isSelected = q1 === idx;
                return (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={() => setQ1(idx)}
                    className={`border-[1.5px] px-[12px] py-[10px] rounded-[4px] w-full flex items-center gap-[10px] text-left transition-colors ${
                      isSelected
                        ? "border-[#b51d42] bg-[#fff4f5]"
                        : "border-[#f1c9d0] hover:border-[#b51d42]"
                    }`}
                  >
                    <span
                      className={`size-[14px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${
                        isSelected ? "border-[#b51d42]" : "border-[#6c5a61]"
                      }`}
                    >
                      {isSelected && (
                        <span className="size-[7px] rounded-full bg-[#b51d42]" />
                      )}
                    </span>
                    <span className="font-sans font-normal text-[14px] text-[#2b2226] tracking-[-0.14px]">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Question 2 */}
            <p className="font-sans font-bold text-[15px] text-[#2b2226] tracking-[-0.15px] pt-2">
              2. Your perfect Saturday?
            </p>
            <div className="flex flex-col gap-[8px] w-full">
              {q2Options.map((opt, idx) => {
                const isSelected = q2 === idx;
                return (
                  <button
                    key={opt.text}
                    type="button"
                    onClick={() => setQ2(idx)}
                    className={`border-[1.5px] px-[12px] py-[10px] rounded-[4px] w-full flex items-center gap-[10px] text-left transition-colors ${
                      isSelected
                        ? "border-[#b51d42] bg-[#fff4f5]"
                        : "border-[#f1c9d0] hover:border-[#b51d42]"
                    }`}
                  >
                    <span
                      className={`size-[14px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${
                        isSelected ? "border-[#b51d42]" : "border-[#6c5a61]"
                      }`}
                    >
                      {isSelected && (
                        <span className="size-[7px] rounded-full bg-[#b51d42]" />
                      )}
                    </span>
                    <span className="font-sans font-normal text-[14px] text-[#2b2226] tracking-[-0.14px]">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Recommended Desk Toast */}
            {recommendedDesk && (
              <div className="w-full bg-[#ffe1e5] border border-[#e0506a] p-3 rounded-[4px] text-[#b51d42] font-sans text-[14px] flex items-center justify-between mt-2">
                <span>
                  🦅 <strong>Fokie recommends:</strong> You belong at the{" "}
                  <strong>{recommendedDesk}</strong>!
                </span>
                <button
                  type="button"
                  onClick={() => setRecommendedDesk(null)}
                  className="text-xs font-bold underline"
                >
                  Clear
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleShowDesk}
              className="bg-[#b51d42] hover:bg-[#961836] text-white px-[18px] py-[12px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors mt-2"
              data-node-id="8:1102"
              data-name="button"
            >
              Show my desk →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
