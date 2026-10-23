import React from "react";
import Link from "next/link";

export default function ExploreDesks() {
  const desks = [
    {
      name: "NEWS",
      desc: "Where the story begins. Timely issues told with accuracy and purpose.",
      href: "/news",
      color: "#c0304f",
      bg: "bg-[rgba(192,48,79,0.16)]",
      border: "border-[rgba(192,48,79,0.45)]",
      glyph: "N",
    },
    {
      name: "OPINION",
      desc: "Editorials and columns that take a stand and invite debate.",
      href: "/editorial",
      color: "#7d5ba6",
      bg: "bg-[rgba(125,91,166,0.16)]",
      border: "border-[rgba(125,91,166,0.45)]",
      glyph: "“",
    },
    {
      name: "FEATURE",
      desc: "The people and experiences behind the issues.",
      href: "/features",
      color: "#e0506a",
      bg: "bg-[rgba(224,80,106,0.16)]",
      border: "border-[rgba(224,80,106,0.45)]",
      glyph: "F",
    },
    {
      name: "SCIENCE",
      desc: "Discovery, technology and the science in everyday life.",
      href: "/sci-tech",
      color: "#2f8f83",
      bg: "bg-[rgba(47,143,131,0.16)]",
      border: "border-[rgba(47,143,131,0.45)]",
      glyph: "⚗",
    },
    {
      name: "LITERATURE",
      desc: "Poems, prose and the stories we imagine.",
      href: "/literary",
      color: "#a35a2a",
      bg: "bg-[rgba(163,90,42,0.16)]",
      border: "border-[rgba(163,90,42,0.45)]",
      glyph: "Lit",
    },
    {
      name: "SPORTS",
      desc: "The discipline, community and heart behind every game.",
      href: "/sports",
      color: "#2c6db5",
      bg: "bg-[rgba(44,109,181,0.16)]",
      border: "border-[rgba(44,109,181,0.45)]",
      glyph: "⚑",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pb-[64px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h2 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[78px] font-black text-[#b51d42] font-display leading-[0.88] tracking-wide">
          EXPLORE OUR DESKS
        </h2>
        <Link
          href="/about#desks"
          className="text-[14px] font-bold text-[#b51d42] hover:underline tracking-[-0.14px]"
        >
          See every desk →
        </Link>
      </div>
      <p className="text-[12px] font-bold text-[#6c5a61] tracking-[0.96px] uppercase mb-6 font-sans">
        CONTENT GROUP
      </p>

      <div className="overflow-x-auto flex gap-[16px] items-start w-full scrollbar-none pb-2">
        {desks.map((desk) => (
          <div
            key={desk.name}
            className={`${desk.bg} ${desk.border} border-[1.5px] w-[236px] h-[230px] shrink-0 p-[20px] rounded-[4px] flex flex-col justify-between relative overflow-hidden`}
          >
            <div className="flex flex-col gap-[10px] z-10">
              <span
                className="text-[56px] font-black font-display leading-[0.88]"
                style={{ color: desk.color }}
              >
                {desk.name}
              </span>
              <p className="text-[14px] leading-[1.45] text-[#2b2226] tracking-[-0.14px] font-sans">
                {desk.desc}
              </p>
            </div>
            <Link
              href={desk.href}
              className="text-[13px] font-bold text-[#2b2226] tracking-[-0.13px] z-10 transition-colors"
              style={{ color: "#2b2226" }}
            >
              Read the desk →
            </Link>
            <span
              className="absolute font-display text-[112px] opacity-15 right-[10px] top-[-16px] select-none pointer-events-none"
              style={{ color: desk.color }}
            >
              {desk.glyph}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
