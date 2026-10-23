import React from "react";
import Link from "next/link";

interface DeskItem {
  name: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glyph: string;
  slug: string;
}

export default function AboutDesks() {
  const contentDesks: DeskItem[] = [
    {
      name: "NEWS",
      description: "Where the story begins.",
      color: "#c0304f",
      bgColor: "rgba(192,48,79,0.16)",
      borderColor: "rgba(192,48,79,0.45)",
      glyph: "N",
      slug: "/news",
    },
    {
      name: "OPINION",
      description: "Editorials and columns that take a stand.",
      color: "#7d5ba6",
      bgColor: "rgba(125,91,166,0.16)",
      borderColor: "rgba(125,91,166,0.45)",
      glyph: "“",
      slug: "/editorial",
    },
    {
      name: "FEATURE",
      description: "The people behind the issues.",
      color: "#e0506a",
      bgColor: "rgba(224,80,106,0.16)",
      borderColor: "rgba(224,80,106,0.45)",
      glyph: "F",
      slug: "/feature",
    },
    {
      name: "SCIENCE",
      description: "The science in everyday life.",
      color: "#2f8f83",
      bgColor: "rgba(47,143,131,0.16)",
      borderColor: "rgba(47,143,131,0.45)",
      glyph: "⚗",
      slug: "/sci-tech",
    },
    {
      name: "LITERATURE",
      description: "Poems, prose and imagined stories.",
      color: "#a35a2a",
      bgColor: "rgba(163,90,42,0.16)",
      borderColor: "rgba(163,90,42,0.45)",
      glyph: "Lit",
      slug: "/literary",
    },
    {
      name: "SPORTS",
      description: "The heart behind every game.",
      color: "#2c6db5",
      bgColor: "rgba(44,109,181,0.16)",
      borderColor: "rgba(44,109,181,0.45)",
      glyph: "⚑",
      slug: "/sports",
    },
    {
      name: "RESEARCH",
      description: "Data, documents and deeper digging.",
      color: "#5b6b2f",
      bgColor: "rgba(91,107,47,0.16)",
      borderColor: "rgba(91,107,47,0.45)",
      glyph: "R",
      slug: "/research",
    },
    {
      name: "CARTOONING",
      description: "Editorial cartoons in one frame.",
      color: "#d9a441",
      bgColor: "rgba(217,164,65,0.16)",
      borderColor: "rgba(217,164,65,0.45)",
      glyph: "✎",
      slug: "/gallery",
    },
  ];

  const technicalDesks: DeskItem[] = [
    {
      name: "CIRCULATION",
      description: "Gets every story to readers.",
      color: "#c0304f",
      bgColor: "rgba(192,48,79,0.16)",
      borderColor: "rgba(192,48,79,0.45)",
      glyph: "C",
      slug: "#",
    },
    {
      name: "LAYOUT",
      description: "Graphics and page design.",
      color: "#e0506a",
      bgColor: "rgba(224,80,106,0.16)",
      borderColor: "rgba(224,80,106,0.45)",
      glyph: "L",
      slug: "#",
    },
    {
      name: "COPY READING",
      description: "Checks facts, grammar and style.",
      color: "#2f8f83",
      bgColor: "rgba(47,143,131,0.16)",
      borderColor: "rgba(47,143,131,0.45)",
      glyph: "✓",
      slug: "#",
    },
    {
      name: "PHOTO",
      description: "Campus life through the lens.",
      color: "#d9a441",
      bgColor: "rgba(217,164,65,0.16)",
      borderColor: "rgba(217,164,65,0.45)",
      glyph: "◉",
      slug: "/gallery",
    },
    {
      name: "WEBDEV",
      description: "Builds and runs this website.",
      color: "#7d5ba6",
      bgColor: "rgba(125,91,166,0.16)",
      borderColor: "rgba(125,91,166,0.45)",
      glyph: "</>",
      slug: "#",
    },
  ];

  return (
    <section
      id="desks"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-[64px] flex flex-col gap-[24px]"
      data-node-id="8:994"
      data-name="our desks"
    >
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-b border-transparent pb-1">
        <h2 className="font-display font-black text-[52px] sm:text-[68px] lg:text-[78px] text-[#b51d42] leading-[0.88] tracking-wide">
          OUR DESKS
        </h2>
        <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
          Every desk has its own beat and its own look
        </p>
      </div>

      {/* CONTENT GROUP */}
      <p className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase pt-2">
        CONTENT GROUP
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
        {contentDesks.map((desk) => (
          <div
            key={desk.name}
            className="p-[20px] rounded-[4px] relative overflow-hidden flex flex-col gap-[8px] items-start border-[1.5px] transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: desk.bgColor,
              borderColor: desk.borderColor,
            }}
          >
            {/* Watermark Glyph */}
            <span
              className="absolute font-display font-black text-[100px] lg:text-[112px] opacity-15 select-none pointer-events-none -top-[15.5px] right-[10px] leading-none"
              style={{ color: desk.color }}
            >
              {desk.glyph}
            </span>

            <h3
              className="font-display font-black text-[46px] lg:text-[56px] leading-[0.88] tracking-wide z-10"
              style={{ color: desk.color }}
            >
              {desk.name}
            </h3>
            <p className="font-sans font-normal text-[14px] text-[#2b2226] leading-[1.45] tracking-[-0.14px] z-10">
              {desk.description}
            </p>
            <Link
              href={desk.slug}
              className="font-sans font-bold text-[12.5px] text-[#2b2226] tracking-[-0.125px] hover:underline z-10 pt-1"
            >
              Read the desk →
            </Link>
          </div>
        ))}
      </div>

      {/* TECHNICAL GROUP */}
      <p className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase pt-6">
        TECHNICAL GROUP
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] w-full">
        {technicalDesks.map((desk) => (
          <div
            key={desk.name}
            className="p-[20px] rounded-[4px] relative overflow-hidden flex flex-col gap-[8px] items-start border-[1.5px] transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: desk.bgColor,
              borderColor: desk.borderColor,
            }}
          >
            {/* Watermark Glyph */}
            <span
              className="absolute font-display font-black text-[100px] lg:text-[112px] opacity-15 select-none pointer-events-none -top-[15.5px] right-[10px] leading-none"
              style={{ color: desk.color }}
            >
              {desk.glyph}
            </span>

            <h3
              className="font-display font-black text-[46px] lg:text-[56px] leading-[0.88] tracking-wide z-10"
              style={{ color: desk.color }}
            >
              {desk.name}
            </h3>
            <p className="font-sans font-normal text-[14px] text-[#2b2226] leading-[1.45] tracking-[-0.14px] z-10">
              {desk.description}
            </p>
            <Link
              href={desk.slug}
              className="font-sans font-bold text-[12.5px] text-[#2b2226] tracking-[-0.125px] hover:underline z-10 pt-1"
            >
              Read the desk →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
