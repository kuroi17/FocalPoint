"use client";

import React, { useState, useEffect } from "react";

interface SubNavProps {
  activeSection?: string;
}

export default function AboutSubNav({ activeSection: initialActive }: SubNavProps) {
  const [active, setActive] = useState(initialActive || "mission");

  const items = [
    { id: "mission", label: "MISSION" },
    { id: "our-journey", label: "OUR JOURNEY" },
    { id: "meet-the-team", label: "MEET THE TEAM" },
    { id: "desks", label: "DESKS" },
    { id: "join-us", label: "JOIN US" },
  ];

  const scrollToSection = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-0 bg-white/95 backdrop-blur-md border-[#f1c9d0] border-b border-solid w-full z-40 px-5 sm:px-8 md:px-[92px] overflow-x-auto scrollbar-none"
      data-node-id="8:819"
      data-name="about menu"
    >
      <div className="max-w-[1240px] mx-auto flex items-center gap-[6px] sm:gap-[12px] whitespace-nowrap">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`font-display font-black text-[26px] sm:text-[34px] lg:text-[40px] leading-[0.88] pt-[14px] pb-[10px] px-[12px] transition-colors select-none tracking-wide ${
                isActive
                  ? "text-[#b51d42] border-[#b51d42] border-b-3 border-solid"
                  : "text-[#6c5a61] hover:text-[#b51d42]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
