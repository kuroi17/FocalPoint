"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeroBanner from "./section/SectionHeroBanner";
import SectionFilterChips from "./section/SectionFilterChips";
import SectionFeaturedCard from "./section/SectionFeaturedCard";
import SectionStoriesGrid, { SectionStoryItem } from "./section/SectionStoriesGrid";
import SectionImportantSidebar, { ImportantStoryItem } from "./section/SectionImportantSidebar";

interface SectionTemplateProps {
  categorySlug: string;
  categoryName: string;
  description?: string;
  descriptionPrefix?: string;
  descriptionHighlight?: string;
  descriptionSuffix?: string;
  accentColor?: string;
  filters?: string[];
  featuredHeadlinePrefix?: string;
  featuredHeadlineHighlight?: string;
  featuredByline?: string;
  featuredPhotoLabel?: string;
  stories?: SectionStoryItem[];
  importantStories?: ImportantStoryItem[];
}

export default function SectionTemplate({
  categorySlug,
  categoryName,
  description,
  descriptionPrefix,
  descriptionHighlight,
  descriptionSuffix,
  accentColor = "#c0304f",
  filters = ["All", "Campus", "Policy", "Community"],
  featuredHeadlinePrefix = "The long way to class: ",
  featuredHeadlineHighlight = "students rethink the daily commute",
  featuredByline = "By Bea Reyes · 19 Oct 2026",
  featuredPhotoLabel = "FEATURED PHOTO · 3:2",
  stories,
  importantStories,
}: SectionTemplateProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] || "All");
  const [currentPage, setCurrentPage] = useState(1);

  // Default news stories matching Figma node 6:409
  const defaultStories: SectionStoryItem[] = [
    {
      id: "1",
      tag: `${categoryName.toUpperCase()} · STUDY SPACES`,
      title: "When the library closes before the studying ends",
      author: "By Migs Dela Cruz",
      date: "18 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
      href: "/article/when-the-library-closes",
    },
    {
      id: "2",
      tag: `${categoryName.toUpperCase()} · CANTEEN`,
      title: "What a hundred pesos buys at the campus canteen",
      author: "By Bea Reyes",
      date: "17 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
      href: "/article/what-a-hundred-pesos-buys",
    },
    {
      id: "3",
      tag: `${categoryName.toUpperCase()} · AFTER THE STORM`,
      title: "After the rain, a closer look at the paths we share",
      author: "By Ana Villanueva",
      date: "16 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
      href: "/article/after-the-rain",
    },
    {
      id: "4",
      tag: `${categoryName.toUpperCase()} · STUDENT COUNCIL`,
      title: "Student councils open the floor to everyday concerns",
      author: "By Migs Dela Cruz",
      date: "15 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
      href: "/article/student-councils-open-floor",
    },
  ];

  // If a simple description was passed instead of prefix/highlight/suffix, parse or default it
  const prefix =
    descriptionPrefix ??
    (categorySlug === "news"
      ? "For those who want to be "
      : description ?? "");
  const highlight =
    descriptionHighlight ??
    (categorySlug === "news" ? "where the story begins. Ti" : "");
  const suffix =
    descriptionSuffix ??
    (categorySlug === "news"
      ? "mely campus issues, reported with accuracy, speed and purpose."
      : "");

  const searchParams = useSearchParams();
  const searchQ = searchParams ? searchParams.get("q") : null;

  // Filter stories if search query or active filter is set
  const allStories = stories ?? defaultStories;
  const filteredStories = allStories.filter((item) => {
    if (searchQ && searchQ.trim()) {
      const q = searchQ.toLowerCase().trim();
      return (
        item.title.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.author.toLowerCase().includes(q)
      );
    }
    if (activeFilter && activeFilter !== "All") {
      return item.tag.toLowerCase().includes(activeFilter.toLowerCase());
    }
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            1. SECTION HERO BANNER (Figma 6:362)
        ========================================================== */}
        <SectionHeroBanner
          categoryName={categoryName}
          categorySlug={categorySlug}
          descriptionPrefix={prefix}
          descriptionHighlight={highlight}
          descriptionSuffix={suffix}
          accentColor={accentColor}
        />

        {/* ==========================================================
            2. BODY CONTENT: FILTERS, FEATURED & STORIES (Figma 6:369)
        ========================================================== */}
        <div
          className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] py-8 md:py-[40px] flex flex-col gap-6 md:gap-[32px]"
          data-node-id="6:369"
          data-name="stories"
        >
          {/* Active Search Notification Banner */}
          {searchQ && (
            <div className="flex items-center justify-between bg-[#fff4f5] border border-[#f1c9d0] px-4 py-3 rounded-[6px]">
              <span className="text-[14px] text-[#2b2226]">
                Showing search results for: <strong className="text-[#b51d42]">"{searchQ}"</strong> ({filteredStories.length} found)
              </span>
              <Link
                href={`/${categorySlug}`}
                className="text-[13px] font-bold text-[#b51d42] hover:underline"
              >
                Clear filter ✕
              </Link>
            </div>
          )}

          {/* Category Filter Chips (Figma 6:370) */}
          <SectionFilterChips
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          {/* Lead Featured Section (Figma 6:379) */}
          {!searchQ && (
            <SectionFeaturedCard
              photoLabel={featuredPhotoLabel}
              cardTitle="FEATURED"
              headlinePrefix={featuredHeadlinePrefix}
              headlineHighlight={featuredHeadlineHighlight}
              byline={featuredByline}
              buttonText="Read the story  →"
              href="/article/the-long-way-to-class"
            />
          )}

          {/* Story Grid & Important Sidebar (Figma 6:409) */}
          <div
            className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[40px] items-start pt-[10px]"
            data-node-id="6:409"
          >
            {/* Left 2x2 Story Cards + Pager */}
            <SectionStoriesGrid
              stories={filteredStories}
              currentPage={currentPage}
              totalPages={3}
              onPageChange={setCurrentPage}
            />

            {/* Right IMPORTANT Stories Box */}
            <SectionImportantSidebar items={importantStories} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
