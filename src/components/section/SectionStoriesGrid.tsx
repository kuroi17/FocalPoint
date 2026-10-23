import React from "react";
import Link from "next/link";

export interface SectionStoryItem {
  id: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  photoGradient: string;
  href?: string;
}

interface SectionStoriesGridProps {
  stories: SectionStoryItem[];
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function SectionStoriesGrid({
  stories,
  currentPage = 1,
  totalPages = 3,
  onPageChange,
}: SectionStoriesGridProps) {
  return (
    <div
      className="flex-1 w-full flex flex-col gap-[28px] items-start"
      data-node-id="6:410"
      data-name="story grid"
    >
      {/* 2x2 Story Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] w-full">
        {stories.map((story) => (
          <article
            key={story.id}
            className="flex flex-col gap-[8px] items-start w-full group"
            data-name="story card"
          >
            {/* Photo Card */}
            <div
              className="h-[253px] w-full rounded-[4px] overflow-hidden relative"
              style={{ backgroundImage: story.photoGradient }}
              data-name="photo"
            >
              <span className="absolute bottom-[12px] left-[12px] font-sans font-semibold text-[11px] text-white tracking-[0.66px]">
                PHOTO
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-[12px] right-[12px] size-[34px] opacity-85 object-contain pointer-events-none"
              />
            </div>

            {/* Spacer */}
            <div className="h-[4px]" />

            {/* Category / Sub-tag */}
            <p className="font-sans font-bold text-[11px] text-[#b51d42] tracking-[0.88px] uppercase">
              {story.tag}
            </p>

            {/* Title */}
            <h3 className="font-sans font-bold text-[21px] text-[#2b2226] tracking-[-0.42px] leading-[1.22] group-hover:text-[#b51d42] transition-colors">
              <Link href={story.href || `/article/${story.id}`}>
                {story.title}
              </Link>
            </h3>

            {/* Byline / Date */}
            <p className="font-sans text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              {story.author} · {story.date}
            </p>
          </article>
        ))}
      </div>

      {/* Pager / Pagination */}
      <nav
        aria-label="Story pagination"
        className="w-full flex items-center justify-center gap-[8px] pt-[28px]"
        data-node-id="6:445"
        data-name="pager"
      >
        <button
          type="button"
          onClick={() => onPageChange && onPageChange(Math.max(1, currentPage - 1))}
          className="size-[44px] rounded-[4px] border-[1.5px] border-[#f1c9d0] bg-white text-[#2b2226] font-bold text-[15px] flex items-center justify-center hover:bg-[#fff4f5] transition-colors"
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              type="button"
              onClick={() => onPageChange && onPageChange(page)}
              className={`size-[44px] rounded-[4px] border-[1.5px] font-bold text-[15px] flex items-center justify-center transition-colors ${
                isActive
                  ? "bg-[#b51d42] border-[#b51d42] text-white"
                  : "bg-white border-[#f1c9d0] text-[#2b2226] hover:bg-[#fff4f5]"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange && onPageChange(Math.min(totalPages, currentPage + 1))}
          className="size-[44px] rounded-[4px] border-[1.5px] border-[#f1c9d0] bg-white text-[#2b2226] font-bold text-[15px] flex items-center justify-center hover:bg-[#fff4f5] transition-colors"
        >
          →
        </button>
      </nav>
    </div>
  );
}
