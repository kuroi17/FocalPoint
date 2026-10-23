import React from "react";
import Link from "next/link";

export default function CommunityHeader() {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] pt-[40px] pb-[20px]"
      data-node-id="11:1239"
      data-name="page head"
    >
      <div className="flex flex-col lg:flex-row gap-[24px] items-start lg:items-end justify-between w-full">
        {/* Left Column: Breadcrumbs, Title, Subtitle */}
        <div
          className="flex-1 flex flex-col gap-[14px] items-start min-w-0"
          data-node-id="11:1241"
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="font-sans font-normal text-[13px] tracking-[-0.13px]"
            data-node-id="11:1242"
          >
            <Link
              href="/"
              className="text-[#b51d42] hover:underline transition-colors"
            >
              Home
            </Link>
            <span className="text-[#6c5a61]"> / Community</span>
          </nav>

          {/* Page Title: COMMUNITY */}
          <h1
            className="font-display font-black leading-[0.88] text-[68px] sm:text-[110px] md:text-[150px] lg:text-[210px] text-[#b51d42] tracking-tight select-none"
            data-node-id="11:1243"
          >
            COMMUNITY
          </h1>

          {/* Lead Copy */}
          <p
            className="font-sans font-normal text-[17px] sm:text-[19px] lg:text-[20px] text-[#2b2226] leading-[1.45] tracking-[-0.2px] max-w-[760px]"
            data-node-id="11:1244"
          >
            Talk about your favorite stories, ask Focalpoint anything, and say hi
            to other readers.{" "}
            <strong className="font-bold text-[#b51d42]">
              Be kind. Moderators are watching.
            </strong>
          </p>
        </div>

        {/* Right Mascot: Fokie Illustration */}
        <div
          className="w-[180px] sm:w-[220px] h-[220px] sm:h-[271px] relative shrink-0 self-center lg:self-end"
          data-node-id="11:1245"
          data-name="fokie"
        >
          <img
            src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
            alt="Fokie mascot with newspaper"
            className="w-full h-full object-contain pointer-events-none drop-shadow-sm select-none"
          />
        </div>
      </div>
    </div>
  );
}
