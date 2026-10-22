"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Story {
  id: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  readTime?: string;
  imageGradient: string;
}

interface SectionTemplateProps {
  categorySlug: string;
  categoryName: string;
  description: string;
  tagline?: string;
  accentColor?: string;
}

export default function SectionTemplate({
  categorySlug,
  categoryName,
  description,
  accentColor = "#b51d42",
}: SectionTemplateProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Campus", "Local", "Special Reports"];

  const stories: Story[] = [
    {
      id: "1",
      tag: `${categoryName} · CAMPUS`,
      title: "When the library closes before the studying ends",
      author: "By Migs Dela Cruz",
      date: "18 Oct 2026",
      readTime: "4 min read",
      imageGradient: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)",
    },
    {
      id: "2",
      tag: `${categoryName} · FARES`,
      title: "The long way to class: students rethink the daily commute",
      author: "By Bea Reyes",
      date: "17 Oct 2026",
      readTime: "7 min read",
      imageGradient: "linear-gradient(135deg, #fcebe8 0%, #e86348 80%)",
    },
    {
      id: "3",
      tag: `${categoryName} · COUNCIL`,
      title: "Student councils open the floor to everyday concerns",
      author: "By Paolo Garcia",
      date: "16 Oct 2026",
      readTime: "5 min read",
      imageGradient: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)",
    },
    {
      id: "4",
      tag: `${categoryName} · BUDGET`,
      title: "Tuition adjustments and the question of campus facilities",
      author: "By Kat Mendoza",
      date: "15 Oct 2026",
      readTime: "6 min read",
      imageGradient: "linear-gradient(135deg, #f2edf8 0%, #7d5ba6 80%)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            1. SECTION HEADER (Figma 6:362 & 6:729)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] pt-8 pb-6 border-b border-[#f1c9d0]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-[800px]">
              {/* Breadcrumb */}
              <nav className="text-[13px] text-[#7a7275]">
                <Link href="/" className="hover:text-[#b51d42]">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-[#b51d42] font-semibold capitalize">{categoryName}</span>
              </nav>

              {/* Title */}
              <h1 className="text-[64px] md:text-[100px] lg:text-[130px] font-black leading-none font-display text-[#b51d42] uppercase tracking-tight">
                {categoryName}
              </h1>

              {/* Description */}
              <p className="text-[15px] md:text-[17px] text-[#5f5a5c] leading-relaxed max-w-[700px]">
                {description}
              </p>
            </div>

            {/* Fokie Mascot in Section Header */}
            <div className="w-[140px] md:w-[180px] aspect-[4/5] relative shrink-0">
              <img
                src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
                alt="Fokie Mascot"
                className="w-full h-full object-contain pointer-events-none drop-shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ==========================================================
            2. STORIES & FILTERS (Figma 6:369 & 6:736)
        ========================================================== */}
        <section className="w-full max-w-[1440px] px-5 md:px-[100px] py-8 flex flex-col gap-8">
          {/* Filters / Chips */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-[13.5px] font-bold tracking-tight transition-colors whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-[#b51d42] text-white"
                    : "bg-[#fff4f5] text-[#2b2226] border border-[#f1c9d0] hover:border-[#b51d42]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Featured Story Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Lead Photo */}
            <div className="lg:col-span-7 aspect-[16/10] rounded-[4px] overflow-hidden relative"
                 style={{ backgroundImage: "linear-gradient(135deg, #fbe1e6 0%, #e0506a 80%)" }}>
              <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white tracking-widest">
                FEATURED PHOTO
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-3 right-3 w-6 h-6 opacity-85 object-contain"
              />
            </div>

            {/* Pub Box */}
            <div className="lg:col-span-5 relative border-[1.5px] border-[#e0506a] p-7 md:p-8 flex flex-col justify-between overflow-hidden bg-white"
                 style={{
                   backgroundImage: `
                     radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%),
                     radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%)
                   `
                 }}>
              {/* Corner brackets */}
              <span className="absolute -top-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -top-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -bottom-[6px] -left-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />
              <span className="absolute -bottom-[6px] -right-[6px] w-[12px] h-[12px] bg-white border-[1.5px] border-[#e0506a]" />

              {/* Pub watermark seal */}
              <div className="absolute right-0 top-0 w-[150px] h-full pointer-events-none opacity-30 overflow-hidden">
                <img
                  src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
                  alt="Watermark"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 z-10">
                <span className="text-[44px] md:text-[56px] font-black leading-none text-[#a8283f] font-display">
                  FEATURED
                </span>
                <div className="w-[180px] h-px bg-[#6b6467]/75" />
                <h2 className="text-[22px] md:text-[28px] font-bold text-[#2b2226] leading-snug">
                  What a hundred pesos buys at the campus canteen
                </h2>
                <div className="w-[180px] h-px bg-[#6b6467]/75" />
                <span className="text-[13px] text-[#7a7275]">
                  By Bea Reyes · 19 Oct 2026
                </span>
              </div>

              <div className="pt-5 z-10">
                <Link
                  href="/article/what-a-hundred-pesos-buys"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#b51d42] hover:bg-[#a8283f] text-white text-[14px] font-bold rounded-[4px] transition-colors"
                >
                  Read the story →
                </Link>
              </div>
            </div>
          </div>

          {/* 2x2 Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#f1c9d0]">
            {stories.map((st) => (
              <div key={st.id} className="flex flex-col gap-3">
                <div className="w-full aspect-[16/10] rounded-[4px] overflow-hidden relative"
                     style={{ backgroundImage: st.imageGradient }}>
                  <span className="absolute bottom-2 left-3 text-[10px] font-bold text-white tracking-widest">
                    PHOTO
                  </span>
                  <img
                    src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                    alt="Badge"
                    className="absolute bottom-2 right-2 w-5 h-5 opacity-75 object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold text-[#b51d42] tracking-wider uppercase">
                  {st.tag}
                </span>
                <Link href={`/article/the-long-way-to-class`} className="text-[18px] md:text-[20px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-snug">
                  {st.title}
                </Link>
                <span className="text-[13px] text-[#7a7275]">
                  {st.author} · {st.date} {st.readTime && `· ${st.readTime}`}
                </span>
              </div>
            ))}
          </div>

          {/* Pager Pagination (Figma 6:445) */}
          <div className="flex items-center justify-center gap-2 pt-8">
            <button className="w-[44px] h-[44px] rounded-[4px] border border-[#f1c9d0] flex items-center justify-center text-[#2b2226] hover:bg-[#fff4f5]">
              ←
            </button>
            <button className="w-[44px] h-[44px] rounded-[4px] bg-[#b51d42] text-white font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-[44px] h-[44px] rounded-[4px] border border-[#f1c9d0] flex items-center justify-center text-[#2b2226] hover:bg-[#fff4f5]">
              2
            </button>
            <button className="w-[44px] h-[44px] rounded-[4px] border border-[#f1c9d0] flex items-center justify-center text-[#2b2226] hover:bg-[#fff4f5]">
              3
            </button>
            <button className="w-[44px] h-[44px] rounded-[4px] border border-[#f1c9d0] flex items-center justify-center text-[#2b2226] hover:bg-[#fff4f5]">
              →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
