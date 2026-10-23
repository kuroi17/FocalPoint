"use client";

import React, { useState } from "react";

interface Milestone {
  id: string;
  year: string;
  dateBadge: string;
  title: string;
  description: string;
}

export default function AboutJourney() {
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const milestones: Milestone[] = [
    {
      id: "founding",
      year: "2025",
      dateBadge: "FOUNDING DATE",
      title: "Focalpoint begins",
      description: "Conceived as an independent platform for student storytelling.",
    },
    {
      id: "first-issue",
      year: "2025",
      dateBadge: "2025",
      title: "First issue",
      description: "Our inaugural publication covering campus and youth issues.",
    },
    {
      id: "focalcrews",
      year: "2026",
      dateBadge: "2026",
      title: "Call for Focalcrews",
      description: "Opening recruitment for writers, artists, and photographers across schools.",
    },
    {
      id: "meet-fokie",
      year: "2026",
      dateBadge: "2026",
      title: "Meet Fokie",
      description: "Unveiling our official mascot, the brave baby Philippine Eagle.",
    },
    {
      id: "webdev-brainstorm",
      year: "2026",
      dateBadge: "18 OCT 2026",
      title: "WebDev brainstorm",
      description: "Planning the digital publication engine and interactive features.",
    },
    {
      id: "testing",
      year: "2026",
      dateBadge: "27–29 OCT 2026",
      title: "Testing and admin accounts",
      description: "Final stress testing, QA workflows, and staff onboarding.",
    },
    {
      id: "launch",
      year: "2026",
      dateBadge: "1 NOV 2026",
      title: "Website launch",
      description: "Focalpoint goes live online.",
    },
  ];

  const [activeMilestoneId, setActiveMilestoneId] = useState<string>("launch");

  const activeMilestone =
    milestones.find((m) => m.id === activeMilestoneId) || milestones[6];

  const filteredMilestones =
    selectedYear === "All"
      ? milestones
      : milestones.filter((m) => m.year === selectedYear);

  return (
    <section
      id="our-journey"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-[64px] flex flex-col gap-[24px]"
      data-node-id="8:844"
      data-name="our journey"
    >
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-b border-transparent pb-1">
        <h2 className="font-display font-black text-[52px] sm:text-[68px] lg:text-[78px] text-[#b51d42] leading-[0.88] tracking-wide">
          OUR JOURNEY
        </h2>
        <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
          Tap a milestone to read its story
        </p>
      </div>

      {/* Stats Row */}
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-[16px] w-full"
        data-node-id="8:848"
        data-name="stats"
      >
        <div className="border-t-3 border-[#b51d42] pt-[10px] flex flex-col gap-[4px]">
          <span className="font-display font-black text-[60px] sm:text-[76px] lg:text-[90px] text-[#b51d42] leading-[0.88]">
            120
          </span>
          <span className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            Stories published (sample)
          </span>
        </div>
        <div className="border-t-3 border-[#b51d42] pt-[10px] flex flex-col gap-[4px]">
          <span className="font-display font-black text-[60px] sm:text-[76px] lg:text-[90px] text-[#b51d42] leading-[0.88]">
            60
          </span>
          <span className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            Focalcrews (sample)
          </span>
        </div>
        <div className="border-t-3 border-[#b51d42] pt-[10px] flex flex-col gap-[4px]">
          <span className="font-display font-black text-[60px] sm:text-[76px] lg:text-[90px] text-[#b51d42] leading-[0.88]">
            13
          </span>
          <span className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            Desks
          </span>
        </div>
        <div className="border-t-3 border-[#b51d42] pt-[10px] flex flex-col gap-[4px]">
          <span className="font-display font-black text-[60px] sm:text-[76px] lg:text-[90px] text-[#b51d42] leading-[0.88]">
            1
          </span>
          <span className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            Mascot named Fokie
          </span>
        </div>
      </div>

      {/* Year Filter Chips */}
      <div className="flex items-center gap-[8px] pt-2" data-name="years">
        {["All", "2025", "2026"].map((yr) => (
          <button
            key={yr}
            type="button"
            onClick={() => setSelectedYear(yr)}
            className={`px-[14px] py-[7px] rounded-[99px] text-[13px] font-semibold tracking-[-0.13px] border-[1.5px] transition-colors ${
              selectedYear === yr
                ? "bg-[#b51d42] border-[#b51d42] text-white"
                : "bg-white border-[#f1c9d0] text-[#2b2226] hover:border-[#b51d42]"
            }`}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Timeline Milestones */}
      <div
        className="w-full overflow-x-auto pb-4 pt-[24px] scrollbar-thin"
        data-name="timeline"
      >
        <div className="flex items-start min-w-[900px] w-full">
          {filteredMilestones.map((milestone) => {
            const isSelected = activeMilestoneId === milestone.id;
            return (
              <button
                key={milestone.id}
                type="button"
                onClick={() => setActiveMilestoneId(milestone.id)}
                className={`relative flex-1 flex flex-col gap-[6px] items-start pr-[18px] pt-[26px] border-t-2 border-[#e0506a] text-left transition-opacity ${
                  isSelected ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {/* Diamond Marker */}
                <span
                  className={`absolute -top-[8px] left-0 size-[14px] -rotate-45 border-2 border-[#b51d42] transition-colors ${
                    isSelected ? "bg-[#b51d42]" : "bg-white"
                  }`}
                />
                <span className="font-sans font-extrabold text-[12px] text-[#b51d42] tracking-[0.48px] uppercase whitespace-nowrap">
                  {milestone.dateBadge}
                </span>
                <span className="font-sans font-bold text-[16px] lg:text-[17px] text-[#2b2226] leading-[1.25] tracking-[-0.17px]">
                  {milestone.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Milestone Box */}
      <div
        className="w-full border-[1.5px] border-[#e0506a] border-solid p-5 sm:p-[24px] relative rounded-[2px] flex flex-col md:flex-row gap-[24px] md:gap-[28px] items-center"
        style={{
          background:
            "radial-gradient(circle at 95% 95%, rgba(253,240,207,0.85) 0%, rgba(253,240,207,0) 60%), radial-gradient(circle at 5% 5%, rgba(251,225,230,0.85) 0%, rgba(251,225,230,0) 60%), #ffffff",
        }}
        data-node-id="8:898"
        data-name="milestone box"
      >
        {/* Corner Accents */}
        <span className="absolute -top-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a]" />
        <span className="absolute -top-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a]" />
        <span className="absolute -bottom-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a]" />
        <span className="absolute -bottom-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a]" />

        {/* Milestone Photo Card */}
        <div
          className="w-full md:w-[520px] h-[220px] sm:h-[260px] md:h-[292px] rounded-[4px] relative overflow-hidden shrink-0 flex items-end p-3"
          style={{
            backgroundImage:
              "linear-gradient(150.68deg, rgb(255, 225, 229) 0%, rgb(163, 90, 42) 71.43%)",
          }}
          data-node-id="8:899"
          data-name="photo"
        >
          <span className="font-sans font-semibold text-[11px] text-white tracking-[0.66px] uppercase select-none">
            MILESTONE PHOTO
          </span>
          <div className="absolute bottom-[12px] right-[12px] size-[34px] opacity-85">
            <img
              src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
              alt="Logo watermark"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        </div>

        {/* Milestone Text Details */}
        <div className="flex-1 flex flex-col gap-[14px] items-start w-full">
          <h3 className="font-display font-black text-[60px] sm:text-[76px] lg:text-[90px] leading-[0.8] text-[#a8283f] whitespace-nowrap">
            MILESTONE
          </h3>
          <div className="h-px bg-[rgba(107,100,103,0.75)] w-full" />
          <p className="font-sans font-semibold text-[22px] sm:text-[26px] tracking-[-0.78px] leading-tight">
            <span className="text-[#a8283f]">{activeMilestone.dateBadge}</span>{" "}
            <span className="text-[#5f5a5c]">{activeMilestone.title}</span>
          </p>
          <div className="h-px bg-[rgba(107,100,103,0.75)] w-full" />
          <p className="font-sans font-normal text-[15px] sm:text-[16px] text-[#5f5a5c] tracking-[-0.16px]">
            {activeMilestone.description}
          </p>
        </div>
      </div>
    </section>
  );
}
