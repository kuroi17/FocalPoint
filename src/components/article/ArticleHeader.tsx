"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ArticleHeaderProps {
  breadcrumbCategory?: string;
  categoryTag?: string;
  topicTitle?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  dek?: string;
  authorName?: string;
  authorDate?: string;
  authorAvatar?: string;
}

export default function ArticleHeader({
  breadcrumbCategory = "News",
  categoryTag = "NEWS",
  topicTitle = "COMMUTE",
  headlinePrefix = "The long way to class:",
  headlineHighlight = " students rethink the daily commute",
  dek = "Between the first jeepney ride and the last walk to campus, students are counting what the commute really costs them.",
  authorName = "Bea Reyes",
  authorDate = "19 Oct 2026 · 7 min read",
  authorAvatar = "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png",
}: ArticleHeaderProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] lg:px-[280px] pt-[40px] pb-[24px] flex flex-col gap-[12px] items-start"
      data-node-id="6:552"
      data-name="article head"
    >
      {/* Breadcrumb */}
      <nav className="font-sans text-[13px] text-[#b51d42] tracking-[-0.13px] whitespace-nowrap">
        <Link href="/" className="hover:underline">Home</Link>
        <span> / </span>
        <Link href="/news" className="hover:underline">{breadcrumbCategory}</Link>
      </nav>

      {/* Pill Tag */}
      <div
        className="bg-[#b51d42] px-[8px] py-[6px] shrink-0"
        data-node-id="6:554"
        data-name="tag"
      >
        <span className="font-sans font-bold text-[11px] text-white tracking-[0.88px] uppercase select-none">
          {categoryTag}
        </span>
      </div>

      {/* Topic Title in Psilograph Black */}
      <p
        className="font-display font-black leading-[0.88] not-italic text-[#c0304f] text-[40px] sm:text-[48px] lg:text-[53px] whitespace-nowrap select-none tracking-wide"
        data-node-id="6:556"
      >
        {topicTitle}
      </p>

      {/* Two-Tone Headline */}
      <h1
        className="font-sans font-semibold leading-[1.04] text-[32px] sm:text-[44px] lg:text-[56px] tracking-[-1.68px] w-full"
        data-node-id="4005:1706"
      >
        <span className="text-[#5f5a5c]">{headlinePrefix}</span>
        <span className="text-[#a8283f]">{headlineHighlight}</span>
      </h1>

      {/* Dek / Subtitle */}
      <p
        className="font-sans font-normal leading-[1.45] text-[18px] sm:text-[21px] text-[#6c5a61] tracking-[-0.21px] w-full"
        data-node-id="6:558"
      >
        {dek}
      </p>

      {/* Meta Bar */}
      <div
        className="border-[#f1c9d0] border-t border-b border-solid py-[12px] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between w-full mt-2"
        data-node-id="6:559"
        data-name="meta"
      >
        {/* Author info */}
        <div className="flex gap-[10px] items-center shrink-0">
          <div className="border-2 border-[#e0506a] border-solid rounded-full overflow-hidden size-[40px] bg-[#ffe1e5] shrink-0">
            <img
              src={authorAvatar}
              alt={authorName}
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-normal whitespace-nowrap">
            <span className="font-sans font-bold text-[15px] text-[#2b2226] tracking-[-0.15px]">
              By {authorName}
            </span>
            <span className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              {authorDate}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-[8px] items-center shrink-0">
          <button
            type="button"
            onClick={() => setSaved(!saved)}
            className={`border-[1.5px] border-solid px-[18px] py-[10px] rounded-[4px] font-sans font-bold text-[14px] tracking-[-0.14px] transition-colors ${
              saved
                ? "bg-[#b51d42] text-white border-[#b51d42]"
                : "border-[#b51d42] text-[#b51d42] bg-white hover:bg-[#fff4f5]"
            }`}
          >
            {saved ? "Saved" : "Save"}
          </button>
          <button
            type="button"
            onClick={handleCopyLink}
            className="border-[1.5px] border-[#b51d42] border-solid px-[18px] py-[10px] rounded-[4px] font-sans font-bold text-[14px] text-[#b51d42] tracking-[-0.14px] bg-white hover:bg-[#fff4f5] transition-colors"
          >
            {copied ? "Copied!" : "Copy link"}
          </button>
        </div>
      </div>
    </header>
  );
}
