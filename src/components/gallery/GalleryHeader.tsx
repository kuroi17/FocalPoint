import React from "react";
import Link from "next/link";

export default function GalleryHeader() {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-[40px] pb-[20px]"
      data-node-id="10:957"
      data-name="page head"
    >
      <div className="flex flex-col lg:flex-row gap-[24px] items-start lg:items-end justify-between w-full">
        {/* Left Column: Breadcrumbs, Title, Subtitle */}
        <div className="flex-1 flex flex-col gap-[14px] items-start min-w-0">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="font-sans font-normal text-[13px] tracking-[-0.13px]"
            data-node-id="10:960"
          >
            <Link
              href="/"
              className="text-[#b51d42] hover:underline transition-colors"
            >
              Home
            </Link>
            <span className="text-[#6c5a61]"> / Gallery</span>
          </nav>

          {/* Page Title: IMAGE BOARD */}
          <h1
            className="font-display font-black leading-[0.88] text-[56px] sm:text-[90px] md:text-[120px] lg:text-[160px] xl:text-[210px] text-[#b51d42] tracking-tight select-none"
            data-node-id="10:961"
          >
            IMAGE BOARD
          </h1>

          {/* Lead Paragraph */}
          <p
            className="font-sans font-normal text-[17px] sm:text-[19px] lg:text-[20px] text-[#2b2226] leading-[1.45] tracking-[-0.2px] max-w-[760px]"
            data-node-id="10:962"
          >
            Shots from the Photo Desk&apos;s photojourns and from every Focalcrew.{" "}
            <strong className="font-bold text-[#b51d42]">
              Each one comes with the story behind it.
            </strong>
          </p>
        </div>

        {/* Right Mascot: Fokie Illustration */}
        <div
          className="w-[180px] sm:w-[220px] h-[220px] sm:h-[271px] relative shrink-0 self-center lg:self-end"
          data-node-id="10:963"
          data-name="fokie"
        >
          <img
            src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
            alt="Fokie the Eagle mascot reading the paper"
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm select-none"
          />
        </div>
      </div>
    </div>
  );
}
