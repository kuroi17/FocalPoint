"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [reactions, setReactions] = useState([
    { emoji: "💡", count: 24, active: false },
    { emoji: "❤️", count: 12, active: false },
    { emoji: "🔥", count: 9, active: false },
    { emoji: "👏", count: 17, active: false },
  ]);

  const toggleReaction = (index: number) => {
    setReactions((prev) =>
      prev.map((r, i) =>
        i === index
          ? { ...r, count: r.active ? r.count - 1 : r.count + 1, active: !r.active }
          : r
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            ARTICLE HEADER (Figma 6:505 & 6:908)
        ========================================================== */}
        <article className="w-full max-w-[1440px] px-5 md:px-[100px] py-10 flex flex-col items-center">
          
          <div className="w-full max-w-[880px] flex flex-col gap-4">
            {/* Category tag */}
            <div className="flex items-center gap-2">
              <Link
                href="/news"
                className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider hover:underline"
              >
                NEWS · CANTEEN
              </Link>
            </div>

            {/* Headline */}
            <h1 className="text-[34px] md:text-[50px] lg:text-[56px] font-extrabold leading-[1.08] text-[#2b2226] tracking-[-1px]">
              The long way to class: students rethink the daily commute
            </h1>

            {/* Excerpt */}
            <p className="text-[18px] md:text-[22px] leading-[1.4] text-[#5f5a5c] tracking-[-0.2px]">
              Between the first jeepney ride and the last walk to campus, students are counting what the commute really costs them.
            </p>

            {/* Meta bar */}
            <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-t border-b border-[#f1c9d0] my-2">
              <div className="flex items-center gap-3">
                <div className="w-[44px] h-[44px] rounded-full overflow-hidden bg-[#ffe1e5] border-2 border-[#e0506a]">
                  <img
                    src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                    alt="Bea Reyes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-[#2b2226]">Bea Reyes</span>
                  <span className="text-[12px] text-[#7a7275]">Published 19 Oct 2026 · 7 min read</span>
                </div>
              </div>

              {/* Share pill buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Link copied to clipboard!")}
                  className="px-3 py-1.5 rounded-full border border-[#f1c9d0] hover:bg-[#fff4f5] text-[12.5px] font-semibold text-[#2b2226] flex items-center gap-1.5 transition-colors"
                >
                  🔗 Share
                </button>
                <button
                  className="px-3 py-1.5 rounded-full border border-[#f1c9d0] hover:bg-[#fff4f5] text-[12.5px] font-semibold text-[#2b2226] flex items-center gap-1.5 transition-colors"
                >
                  🔖 Save
                </button>
              </div>
            </div>
          </div>

          {/* Lead Photo with Caption */}
          <div className="w-full max-w-[1000px] my-6 flex flex-col gap-2">
            <div
              className="w-full aspect-[16/9] rounded-[4px] overflow-hidden relative"
              style={{ backgroundImage: "linear-gradient(128.65deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)" }}
            >
              <span className="absolute bottom-3 left-4 text-[11px] font-semibold text-white tracking-widest">
                LEAD PHOTO · 16:9
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-3 right-3 w-6 h-6 opacity-85 object-contain"
              />
            </div>
            <p className="text-[12.5px] text-[#7a7275] italic leading-snug">
              Students wait for northbound jeepneys along the campus perimeter during the Monday morning rush. Photo by Photography Desk.
            </p>
          </div>

          {/* Article Body (680px width) */}
          <div className="w-full max-w-[680px] flex flex-col gap-6 text-[17px] md:text-[18.5px] leading-[1.65] text-[#2b2226]">
            <p className="first-letter:text-[54px] first-letter:font-black first-letter:font-display first-letter:text-[#b51d42] first-letter:mr-2 first-letter:float-left">
              The alarm sounds before the sun breaks over the eastern terminal. For hundreds of students travelling into campus from neighbouring towns, the academic day does not begin in a lecture hall or laboratory; it begins with the calculated gamble of finding a seat on the first connecting route.
            </p>

            <p>
              Fare increases across the region over the past academic term have steadily narrowed the margins of everyday student life. While student discounts remain mandated by law, irregular route operations, multiple transfers, and unpredictable travel intervals often push transport costs past a hundred pesos each morning alone.
            </p>

            {/* PULL QUOTE BOX (Figma 6:582) */}
            <div
              className="relative my-8 border-[1.5px] border-[#e0506a] p-8 md:p-10 flex flex-col gap-4 overflow-hidden bg-white"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%),
                  radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%)
                `
              }}
            >
              {/* Corner brackets */}
              <span className="absolute -top-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -top-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -bottom-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -bottom-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />

              {/* Watermark seal */}
              <div className="absolute right-0 top-0 w-[150px] h-full pointer-events-none opacity-30 overflow-hidden">
                <img
                  src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
                  alt="Watermark"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[48px] md:text-[64px] font-black leading-none text-[#a8283f] font-display z-10">
                NEWS
              </span>
              <div className="w-[180px] h-px bg-[#6b6467]/75 z-10" />
              <blockquote className="text-[20px] md:text-[24px] font-bold text-[#2b2226] leading-snug z-10">
                Between the first jeepney ride and the last walk to campus, students are counting what the commute really costs them.
              </blockquote>
              <div className="w-[180px] h-px bg-[#6b6467]/75 z-10" />
            </div>

            <p>
              For students balancing classes with part-time work or family duties, that uncertainty narrows an already tight schedule. Group study sessions are often cut short by the fear of missing the last trip home, turning transit access into an invisible determinant of student participation.
            </p>

            {/* TECHNIQUE NOTE (Figma 6:606) */}
            <div className="my-4 p-5 rounded-[6px] bg-[#fff4f5] border border-[#f1c9d0] flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-[#b51d42] uppercase tracking-wider">
                TECHNIQUE USED IN THIS STORY
              </span>
              <p className="text-[13.5px] text-[#5f5a5c] leading-relaxed">
                A composite character helps readers follow a pattern without exposing one student's real route. Newsrooms label it clearly, as this story does.
              </p>
            </div>

            {/* End mark */}
            <div className="flex justify-start my-2">
              <div className="w-[14px] h-[14px] bg-[#b51d42]" />
            </div>

            {/* REACTIONS (Figma 6:610) */}
            <div className="flex items-center gap-3 py-6 border-t border-b border-[#f1c9d0] my-4">
              <span className="text-[14px] font-bold text-[#2b2226]">React:</span>
              <div className="flex items-center gap-2">
                {reactions.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => toggleReaction(i)}
                    className={`px-3 py-1.5 rounded-full border text-[13px] font-bold flex items-center gap-1.5 transition-colors ${
                      r.active
                        ? "bg-[#b51d42] border-[#b51d42] text-white"
                        : "border-[#f1c9d0] hover:bg-[#fff4f5] text-[#2b2226]"
                    }`}
                  >
                    <span>{r.emoji}</span>
                    <span>{r.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* WRITER BIO (Figma 6:620) */}
            <div className="flex items-center gap-4 py-4">
              <div className="w-[64px] h-[64px] rounded-full overflow-hidden bg-[#ffe1e5] border-2 border-[#e0506a] shrink-0">
                <img
                  src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                  alt="Bea Reyes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-[#2b2226]">Bea Reyes</span>
                <span className="text-[13px] text-[#7a7275] leading-snug">
                  News Desk Reporter · Writing about campus transit, tuition policies, student living costs, and labor concerns.
                </span>
              </div>
            </div>

          </div>

          {/* RELATED STORIES */}
          <div className="w-full max-w-[1000px] mt-16 pt-10 border-t border-[#f1c9d0]">
            <h3 className="text-[28px] font-black text-[#b51d42] font-display mb-6">
              RELATED STORIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tag: "NEWS · CANTEEN",
                  title: "What a hundred pesos buys at the campus canteen",
                  author: "By Bea Reyes",
                  date: "17 Oct 2026",
                  gradient: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)"
                },
                {
                  tag: "OPINION · FARES",
                  title: "Public transportation is an education issue",
                  author: "By Paolo Garcia",
                  date: "18 Oct 2026",
                  gradient: "linear-gradient(135deg, #f2edf8 0%, #7d5ba6 80%)"
                },
                {
                  tag: "SCI-TECH · URBAN",
                  title: "Mapping the heat, one campus corner at a time",
                  author: "By Dan Navarro",
                  date: "18 Oct 2026",
                  gradient: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)"
                }
              ].map((rel, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden"
                       style={{ backgroundImage: rel.gradient }} />
                  <span className="text-[10.5px] font-bold text-[#b51d42] uppercase tracking-wider">
                    {rel.tag}
                  </span>
                  <Link href="/article/the-long-way-to-class" className="text-[15px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                    {rel.title}
                  </Link>
                  <span className="text-[12px] text-[#7a7275]">
                    {rel.author} · {rel.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
