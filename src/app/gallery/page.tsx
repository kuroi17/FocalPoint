"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const photos = [
    { title: "Morning Commute Lines", by: "Photo Desk", tag: "Campus Life", grad: "linear-gradient(135deg, #fcebe8 0%, #e0506a 80%)" },
    { title: "Rally at the Freedom Wall", by: "Photo Desk", tag: "Events", grad: "linear-gradient(135deg, #fef4dc 0%, #d89f28 80%)" },
    { title: "Quiet Hours at Central Library", by: "Bea Reyes", tag: "Study Spaces", grad: "linear-gradient(135deg, #e3f5f2 0%, #2e8b83 80%)" },
    { title: "Volleyball Championship Finals", by: "Sports Desk", tag: "Sports", grad: "linear-gradient(135deg, #f2edf8 0%, #7d5ba6 80%)" },
    { title: "Late Night Laboratory", by: "Sci-Tech Desk", tag: "Campus Life", grad: "linear-gradient(135deg, #e0f2fe 0%, #0369a1 80%)" },
    { title: "Campus Canteen Rush", by: "Photo Desk", tag: "Campus Life", grad: "linear-gradient(135deg, #fcebe8 0%, #b51d42 80%)" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] px-5 md:px-[100px] py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-[#f1c9d0] pb-6">
          <div className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">
              COMMUNITY LENS
            </span>
            <h1 className="text-[44px] md:text-[68px] font-black leading-none font-display text-[#b51d42]">
              PHOTO GALLERY
            </h1>
            <p className="text-[16px] text-[#5f5a5c]">
              Visual stories and photojournalism documenting our university and communities.
            </p>
          </div>

          <button
            onClick={() => alert("Photo submission portal: Submit high-res photos with complete caption & context.")}
            className="px-5 py-2.5 bg-[#b51d42] text-white font-bold text-[14px] rounded-[4px] hover:bg-[#a8283f] transition-colors"
          >
            Submit a Photo →
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
          {["All", "Campus Life", "Events", "Sports", "Study Spaces"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-[13.5px] font-bold transition-colors whitespace-nowrap ${
                activeFilter === f
                  ? "bg-[#b51d42] text-white"
                  : "bg-[#fff4f5] text-[#2b2226] border border-[#f1c9d0]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos
            .filter((p) => activeFilter === "All" || p.tag === activeFilter)
            .map((p, i) => (
              <div key={i} className="flex flex-col gap-2 group cursor-pointer">
                <div
                  className="w-full aspect-[4/3] rounded-[4px] overflow-hidden relative group-hover:scale-[1.01] transition-transform"
                  style={{ backgroundImage: p.grad }}
                >
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white tracking-widest">
                    {p.tag}
                  </span>
                  <img
                    src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                    alt="Badge"
                    className="absolute bottom-3 right-3 w-5 h-5 opacity-80 object-contain"
                  />
                </div>
                <h3 className="text-[17px] font-bold text-[#2b2226] group-hover:text-[#b51d42] leading-snug">
                  {p.title}
                </h3>
                <span className="text-[12.5px] text-[#7a7275]">{p.by}</span>
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
