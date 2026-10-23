"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ScreenItem {
  name: string;
  url: string;
  description: string;
  badge: string;
  category: "Main Editorial" | "Interactive & Desk" | "Utility & Info";
}

export default function ScreensDirectoryPage() {
  const screens: ScreenItem[] = [
    {
      name: "Home Page",
      url: "/",
      description: "Front page with lead stories, kicker headlines, and editorial grids.",
      badge: "Desktop & Mobile",
      category: "Main Editorial",
    },
    {
      name: "News",
      url: "/news",
      description: "News desk section with featured and trending stories.",
      badge: "Figma Aligned",
      category: "Main Editorial",
    },
    {
      name: "Article Reader",
      url: "/article/the-long-way-to-class",
      description: "Full story view with article header, rich typography, and sidebar.",
      badge: "Desktop & Mobile",
      category: "Main Editorial",
    },
    {
      name: "Editorial & Column",
      url: "/editorial",
      description: "Opinion pieces, editorial commentary, and student columns.",
      badge: "Desk",
      category: "Main Editorial",
    },
    {
      name: "Feature",
      url: "/features",
      description: "Long-form journalism, human interest stories, and student deep-dives.",
      badge: "Desk",
      category: "Main Editorial",
    },
    {
      name: "Sci-Tech",
      url: "/sci-tech",
      description: "Campus science research, tech trends, and digital culture.",
      badge: "Desk",
      category: "Main Editorial",
    },
    {
      name: "Sports",
      url: "/sports",
      description: "Game coverage, athlete features, and student athletic stories.",
      badge: "Desk",
      category: "Main Editorial",
    },
    {
      name: "Literary",
      url: "/literary",
      description: "Creative writing, poetry, prose, and student essays.",
      badge: "Desk",
      category: "Main Editorial",
    },
    {
      name: "Gallery",
      url: "/gallery",
      description: "Photojournalism showcase with high-res photo stories and captions.",
      badge: "10:911 Aligned",
      category: "Main Editorial",
    },
    {
      name: "About Focalpoint",
      url: "/about",
      description: "Mission, publication history, leadership, and masthead.",
      badge: "8:746 Aligned",
      category: "Utility & Info",
    },
    {
      name: "Podcasts",
      url: "/podcasts",
      description: "Student audio broadcasts, audio player, and episode backlog.",
      badge: "10:1066 Aligned",
      category: "Interactive & Desk",
    },
    {
      name: "Community",
      url: "/community",
      description: "Letters from readers, community discussions, and Fokie Q&A.",
      badge: "11:1193 Aligned",
      category: "Interactive & Desk",
    },
    {
      name: "My Profile",
      url: "/profile",
      description: "Fokie points counter, streak tracker, frames selector, and badges.",
      badge: "11:1346 Aligned",
      category: "Interactive & Desk",
    },
    {
      name: "Staff Desk",
      url: "/staff",
      description: "Mock CMS publishing editor with live preview and queue counters.",
      badge: "12:1487 Aligned",
      category: "Interactive & Desk",
    },
    {
      name: "404 Not Found",
      url: "/non-existent-page-demo",
      description: "Giant 336px 404 display with tilted confused Fokie graphic.",
      badge: "12:1649 Aligned",
      category: "Utility & Info",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-8 lg:pt-[40px] pb-16 flex flex-col gap-8">
        {/* Title bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#f1c9d0] pb-4 gap-2">
          <div>
            <h1 className="text-[52px] lg:text-[72px] font-black text-[#b51d42] font-display leading-[0.88]">
              ALL SCREENS
            </h1>
            <p className="text-[15px] text-[#6c5a61] mt-2">
              Index of all pages aligned with the Figma designs. Click any card to navigate directly.
            </p>
          </div>
          <span className="text-[12px] font-bold text-[#b51d42] bg-[#fff4f5] border border-[#f1c9d0] px-3 py-1.5 rounded-full shrink-0">
            {screens.length} Screens Available
          </span>
        </div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {screens.map((screen, idx) => (
            <Link
              key={idx}
              href={screen.url}
              className="group border-[1.5px] border-[#f1c9d0] rounded-[6px] p-5 flex flex-col justify-between gap-4 bg-white hover:border-[#b51d42] hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c5a61]">
                    {screen.category}
                  </span>
                  <span className="text-[11px] font-bold text-[#b51d42] bg-[#fff4f5] px-2 py-0.5 rounded">
                    {screen.badge}
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-[#2b2226] group-hover:text-[#b51d42] transition-colors leading-tight">
                  {screen.name}
                </h3>
                <p className="text-[13px] text-[#6c5a61] leading-relaxed">
                  {screen.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#f1c9d0]/60 text-[13px] font-semibold text-[#b51d42]">
                <code className="text-[12px] bg-[#fff4f5] px-2 py-1 rounded text-[#b51d42]">
                  {screen.url}
                </code>
                <span className="group-hover:translate-x-1 transition-transform">
                  Visit →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
