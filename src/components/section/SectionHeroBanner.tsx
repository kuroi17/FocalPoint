import React from "react";
import Link from "next/link";

interface SectionHeroBannerProps {
  categoryName: string;
  categorySlug: string;
  descriptionPrefix?: string;
  descriptionHighlight?: string;
  descriptionSuffix?: string;
  accentColor?: string;
}

export default function SectionHeroBanner({
  categoryName,
  categorySlug,
  descriptionPrefix = "For those who want to be ",
  descriptionHighlight = "where the story begins. Ti",
  descriptionSuffix = "mely campus issues, reported with accuracy, speed and purpose.",
  accentColor = "#c0304f",
}: SectionHeroBannerProps) {
  return (
    <section
      className="w-full bg-[rgba(192,48,79,0.12)] border-[#c0304f] border-b-4 border-solid px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-6 sm:py-8 md:py-[40px]"
      data-node-id="6:362"
      data-name="section header"
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-col md:flex-row gap-6 md:gap-[24px] items-start md:items-end justify-between overflow-hidden">
        {/* Left Column: Breadcrumb, Heading, Tagline */}
        <div className="flex-1 min-w-0 flex flex-col gap-[14px] items-start">
          {/* Breadcrumb */}
          <nav className="font-sans text-[13px] text-[#6c5a61] tracking-[-0.13px] whitespace-nowrap">
            <Link href="/" className="text-[#b51d42] hover:underline">
              Home
            </Link>
            <span>{` / ${categoryName}`}</span>
          </nav>

          {/* Large Section Display Title */}
          <h1 className="font-display font-black leading-[0.88] not-italic text-[#c0304f] text-[52px] sm:text-[90px] md:text-[130px] lg:text-[180px] xl:text-[240px] tracking-wide select-none">
            {categoryName.toUpperCase()}
          </h1>

          {/* Description Tagline */}
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] text-[#2b2226] tracking-[-0.2px] leading-[1.45] max-w-[996px]">
            <span>{descriptionPrefix}</span>
            <span className="font-bold text-[#c0304f]">
              {descriptionHighlight}
            </span>
            <span>{descriptionSuffix}</span>
          </p>
        </div>

        {/* Right Column: Fokie Mascot */}
        <div className="w-[150px] sm:w-[180px] lg:w-[220px] h-[180px] sm:h-[220px] lg:h-[271px] shrink-0 relative self-center md:self-end">
          <img
            src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
            alt="Fokie Mascot"
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
