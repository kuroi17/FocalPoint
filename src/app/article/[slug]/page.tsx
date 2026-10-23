"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleLeadPhoto from "@/components/article/ArticleLeadPhoto";
import ArticlePullQuote from "@/components/article/ArticlePullQuote";
import ArticleReactions from "@/components/article/ArticleReactions";
import ArticleComments from "@/components/article/ArticleComments";
import ArticleKeepReading from "@/components/article/ArticleKeepReading";
import SectionImportantSidebar from "@/components/section/SectionImportantSidebar";

export default function ArticlePage() {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setReadingProgress(
          Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
        );
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      {/* Reading Progress Indicator (Figma 6:551) */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#b51d42] z-50 transition-all duration-150 ease-out"
        style={{ width: `${readingProgress}%` }}
        data-node-id="6:551"
        data-name="reading progress"
      />

      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            1. ARTICLE HEAD (Figma 6:552)
        ========================================================== */}
        <ArticleHeader
          breadcrumbCategory="News"
          categoryTag="NEWS"
          topicTitle="COMMUTE"
          headlinePrefix="The long way to class:"
          headlineHighlight=" students rethink the daily commute"
          dek="Between the first jeepney ride and the last walk to campus, students are counting what the commute really costs them."
          authorName="Bea Reyes"
          authorDate="19 Oct 2026 · 7 min read"
          authorAvatar="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
        />

        {/* ==========================================================
            2. LEAD PHOTO & CAPTION (Figma 6:570)
        ========================================================== */}
        <ArticleLeadPhoto
          label="LEAD PHOTO · 16:9"
          gradient="linear-gradient(150.62deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)"
          caption="Caption and photo credit go here. Photo by the Photo Desk."
        />

        {/* ==========================================================
            3. STORY BODY & IMPORTANT SIDEBAR (Figma 6:575)
        ========================================================== */}
        <section
          className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[60px] lg:px-[202px] pb-[64px]"
          data-node-id="6:575"
          data-name="story body"
        >
          <div
            className="flex flex-col lg:flex-row gap-[48px] lg:gap-[56px] items-start w-full justify-between"
            data-node-id="6:576"
          >
            {/* Left Reading Column (680px) */}
            <div
              className="flex-1 w-full max-w-full lg:max-w-[680px] flex flex-col gap-[20px] items-start text-[#2b2226]"
              data-node-id="6:577"
              data-name="text column"
            >
              {/* Drop Cap First Paragraph */}
              <div
                className="font-sans text-[19px] leading-[1.75] tracking-[-0.19px] w-full text-justify sm:text-left"
                data-node-id="6:578"
              >
                <span
                  className="font-display font-black leading-[0.8] text-[#b51d42] text-[100px] sm:text-[118px] float-left mr-3.5 mt-1 select-none"
                  style={{ lineHeight: "0.8" }}
                >
                  A
                </span>
                <span>
                  t 5:40 in the morning, the notebook in Lia&apos;s bag is still
                  closed. Before she can open it in class, she has to walk to
                  the main road, wait for a jeepney and make one more transfer.
                  The distance looks short on a map. The journey feels different
                  on the pavement.
                </span>
              </div>

              {/* Second Paragraph */}
              <p
                className="font-sans text-[19px] leading-[1.75] tracking-[-0.19px] w-full"
                data-node-id="6:579"
              >
                Lia is a composite character for this sample, but the question
                behind her trip is real for many campuses: what does it take to
                arrive ready to learn? A week of travel diaries tells part of the
                answer.
              </p>

              {/* Subheading */}
              <h2
                className="font-sans font-semibold leading-[1.04] text-[26px] sm:text-[28px] text-[#2b2226] tracking-[-0.84px] pt-3"
                data-node-id="4005:1707"
              >
                The costs a fare cannot capture
              </h2>

              {/* Third Paragraph */}
              <p
                className="font-sans text-[19px] leading-[1.75] tracking-[-0.19px] w-full"
                data-node-id="6:581"
              >
                A fare is the easiest part of a commute to count. Harder to see
                is the price of leaving early to absorb an uncertain wait, or
                paying more for a ride because a laboratory session cannot be
                missed.
              </p>

              {/* Mid-article Pull Quote Box (Figma 6:582) */}
              <ArticlePullQuote
                categoryTitle="NEWS"
                quotePrefix="The route has not changed. "
                quoteHighlight="The room left in her day has."
              />

              {/* Fourth Paragraph */}
              <p
                className="font-sans text-[19px] leading-[1.75] tracking-[-0.19px] w-full"
                data-node-id="6:605"
              >
                For students balancing classes with part-time work or family
                duties, that uncertainty narrows an already tight schedule.
              </p>

              {/* Technique note callout box (Figma 6:606) */}
              <div
                className="bg-[#fff4f5] p-[20px] rounded-[4px] flex flex-col gap-[6px] w-full my-2 border border-[#f1c9d0]"
                data-node-id="6:606"
                data-name="technique note"
              >
                <span
                  className="font-sans font-bold text-[12px] text-[#b51d42] tracking-[0.96px] uppercase"
                  data-node-id="6:607"
                >
                  TECHNIQUE USED IN THIS STORY
                </span>
                <p
                  className="font-sans font-normal text-[16px] text-[#2b2226] tracking-[-0.16px] leading-[1.6]"
                  data-node-id="6:608"
                >
                  A composite character helps readers follow a pattern without
                  exposing one student&apos;s real route. Newsrooms label it
                  clearly, as this story does.
                </p>
              </div>

              {/* Story End Mark (Figma 6:609) */}
              <div
                className="size-[14px] bg-[#b51d42] shrink-0 my-1"
                data-node-id="6:609"
                data-name="end mark"
              />

              {/* Interactive Reactions (Figma 6:610) */}
              <ArticleReactions />

              {/* Writer Bio (Figma 6:620) */}
              <div
                className="flex gap-[16px] items-center w-full py-4"
                data-node-id="6:620"
                data-name="writer"
              >
                <div className="border-2 border-[#e0506a] border-solid rounded-full overflow-hidden size-[64px] bg-[#ffe1e5] shrink-0">
                  <img
                    src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                    alt="Bea Reyes"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[4px] leading-normal min-w-0">
                  <span
                    className="font-sans font-bold text-[16px] text-[#2b2226] tracking-[-0.16px]"
                    data-node-id="6:623"
                  >
                    Bea Reyes
                  </span>
                  <p
                    className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]"
                    data-node-id="6:624"
                  >
                    Writes for the News desk. See the team →
                  </p>
                </div>
              </div>

              {/* Comments Section (Figma 6:625) */}
              <ArticleComments />
            </div>

            {/* Right Column: IMPORTANT Stories Sidebar (Figma 6:649) */}
            <SectionImportantSidebar />
          </div>
        </section>

        {/* ==========================================================
            4. KEEP READING SECTION (Figma 6:669)
        ========================================================== */}
        <ArticleKeepReading
          categorySlug="news"
          categoryName="News"
        />
      </main>

      <Footer />
    </div>
  );
}
