"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

interface FrameItem {
  id: string;
  name: string;
  cost: string;
  color: string;
  status: "wearing" | "wear" | "unlock";
}

export default function ProfilePage() {
  const [activeFrame, setActiveFrame] = useState<string>("rose");
  const [points, setPoints] = useState<number>(26);

  const frames: FrameItem[] = [
    {
      id: "rose",
      name: "Rose ring",
      cost: "Free",
      color: "#e0506a",
      status: activeFrame === "rose" ? "wearing" : "wear",
    },
    {
      id: "gold",
      name: "Gold ring",
      cost: "20 pts",
      color: "#e3b94a",
      status: activeFrame === "gold" ? "wearing" : "wear",
    },
    {
      id: "press",
      name: "Press pass",
      cost: "40 pts",
      color: "#2b2226",
      status: activeFrame === "press" ? "wearing" : "unlock",
    },
    {
      id: "eagle",
      name: "Eagle eye",
      cost: "60 pts",
      color: "#2f8f83",
      status: activeFrame === "eagle" ? "wearing" : "unlock",
    },
  ];

  const handleFrameClick = (frame: FrameItem) => {
    if (frame.status === "wearing") return;
    if (frame.id === "rose" || frame.id === "gold") {
      setActiveFrame(frame.id);
    } else {
      alert(`Unlock ${frame.name} for ${frame.cost}? You have ${points} Fokie Points.`);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 md:px-[100px] pt-8 md:pt-[40px] pb-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[32px] items-start">
          {/* LEFT COLUMN: ID Card */}
          <div className="w-full lg:w-[320px] shrink-0 border-[1.5px] border-[#e0506a] rounded-[4px] p-6 flex flex-col items-center gap-[10px] bg-white shadow-sm">
            {/* Avatar with current frame */}
            <div
              className="w-[132px] h-[132px] rounded-full p-1 relative flex items-center justify-center shrink-0"
              style={{
                border: `5px solid ${
                  activeFrame === "rose"
                    ? "#e0506a"
                    : activeFrame === "gold"
                    ? "#e3b94a"
                    : activeFrame === "press"
                    ? "#2b2226"
                    : "#2f8f83"
                }`,
              }}
            >
              <div className="w-full h-full rounded-full bg-[#ffe1e5] overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User name & status */}
            <h1 className="text-[22px] font-bold text-[#2b2226] tracking-[-0.22px] text-center mt-1">
              Your name
            </h1>
            <p className="text-[13px] text-[#6c5a61] text-center tracking-[-0.13px] leading-snug">
              Reader since today · Fokie is your default photo
            </p>

            {/* Streak & Points stats */}
            <div className="w-full grid grid-cols-2 gap-[10px] mt-2">
              <div className="bg-[#fff4f5] rounded-[4px] p-[10px] flex flex-col items-center">
                <span className="text-[52px] font-black text-[#b51d42] font-display leading-[0.88]">
                  3
                </span>
                <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] mt-1">
                  day streak
                </span>
              </div>
              <div className="bg-[#fff4f5] rounded-[4px] p-[10px] flex flex-col items-center">
                <span className="text-[52px] font-black text-[#b51d42] font-display leading-[0.88]">
                  {points}
                </span>
                <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] mt-1">
                  Fokie Points
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Fokie Points, Frames, Badges, Saved Stories */}
          <div className="flex-1 w-full flex flex-col gap-[28px]">
            {/* 1. Fokie Points Header & Rules */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-transparent pb-1 gap-2">
                <h2 className="text-[52px] md:text-[78px] font-black text-[#b51d42] font-display leading-[0.88] tracking-wide">
                  FOKIE POINTS
                </h2>
                <span className="text-[12px] text-[#6c5a61] font-semibold tracking-[0.72px] uppercase">
                  PRETEND POINTS · NO MONEY VALUE
                </span>
              </div>
              <p className="text-[16px] text-[#2b2226] leading-[1.5] tracking-[-0.16px]">
                Fokie Points reward reading and taking part. Spend them on profile frames. They stay on this device.
              </p>

              {/* Point Earning Rules */}
              <div className="flex flex-col w-full text-[15px] text-[#2b2226] mt-2">
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>Open Focalpoint today</span>
                  <span className="font-bold text-[#b51d42]">+5</span>
                </div>
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>Read a story to the end</span>
                  <span className="font-bold text-[#b51d42]">+2</span>
                </div>
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>Guess the Word of the Day</span>
                  <span className="font-bold text-[#b51d42]">+3</span>
                </div>
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>React to a story</span>
                  <span className="font-bold text-[#b51d42]">+1</span>
                </div>
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>Send feedback to Fokie</span>
                  <span className="font-bold text-[#b51d42]">+3</span>
                </div>
                <div className="flex items-center justify-between py-[8px] border-b border-[#f1c9d0]">
                  <span>Submit a photo</span>
                  <span className="font-bold text-[#b51d42]">+10</span>
                </div>
              </div>
            </div>

            {/* 2. FRAMES Section */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-[42px] md:text-[56px] font-black text-[#b51d42] font-display leading-[0.88]">
                FRAMES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-[14px]">
                {frames.map((frame) => {
                  const isCurrent = activeFrame === frame.id;
                  return (
                    <div
                      key={frame.id}
                      className="border-[1.5px] border-[#f1c9d0] rounded-[4px] p-[14px] flex flex-col items-center gap-[6px] bg-white transition hover:border-[#b51d42]"
                    >
                      <div
                        className="w-[64px] h-[64px] rounded-full p-[2px] relative flex items-center justify-center shrink-0"
                        style={{ border: `4px solid ${frame.color}` }}
                      >
                        <div className="w-full h-full rounded-full bg-[#ffe1e5] overflow-hidden">
                          <img
                            src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                            alt={frame.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="text-[14px] font-bold text-[#2b2226] tracking-[-0.14px]">
                        {frame.name}
                      </span>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        {frame.cost}
                      </span>
                      <button
                        onClick={() => handleFrameClick(frame)}
                        className={`w-full py-[10px] rounded-[4px] text-[14px] font-bold tracking-[-0.14px] transition cursor-pointer mt-1 ${
                          isCurrent
                            ? "bg-[#b51d42] text-white"
                            : "border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#fff4f5]"
                        }`}
                      >
                        {isCurrent ? "Wearing" : frame.status === "unlock" ? "Unlock" : "Wear"}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. BADGES Section */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-[42px] md:text-[56px] font-black text-[#b51d42] font-display leading-[0.88]">
                BADGES
              </h3>
              <div className="flex flex-wrap gap-[10px] items-start">
                <span className="bg-[#fdefc6] border-[1.5px] border-[#fce192] px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ★ First visit
                </span>
                <span className="bg-[#fdefc6] border-[1.5px] border-[#fce192] px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ★ 3-day streak
                </span>
                <span className="border-[1.5px] border-dashed border-[#f1c9d0] opacity-50 px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ☆ 7-day streak
                </span>
                <span className="bg-[#fdefc6] border-[1.5px] border-[#fce192] px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ★ Word nerd
                </span>
                <span className="border-[1.5px] border-dashed border-[#f1c9d0] opacity-50 px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ☆ Contributor
                </span>
                <span className="bg-[#fdefc6] border-[1.5px] border-[#fce192] px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ★ Reactor
                </span>
                <span className="border-[1.5px] border-dashed border-[#f1c9d0] opacity-50 px-[12px] py-[9px] rounded-[4px] text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                  ☆ Finished a story
                </span>
              </div>
            </div>

            {/* 4. SAVED STORIES Section */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-[42px] md:text-[56px] font-black text-[#b51d42] font-display leading-[0.88]">
                SAVED STORIES
              </h3>
              <Link
                href="/article/commute-students-rethink"
                className="group border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start hover:opacity-95 transition"
              >
                <div className="w-[120px] h-[120px] rounded-[4px] relative overflow-hidden shrink-0 bg-gradient-to-br from-[#ffe1e5] to-[#e0506a]">
                  <span className="absolute bottom-[10px] left-[10px] text-[11px] font-semibold text-white tracking-[0.66px]">
                    PHOTO
                  </span>
                  <div className="absolute bottom-[10px] right-[10px] w-[30px] h-[30px] opacity-85">
                    <img
                      src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                      alt="Camera badge"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                    NEWS · COMMUTE
                  </span>
                  <h4 className="text-[17px] font-bold text-[#2b2226] leading-[1.3] tracking-[-0.17px] group-hover:text-[#b51d42] transition-colors">
                    The long way to class: students rethink the daily commute
                  </h4>
                  <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                    By Bea Reyes · 7 min read
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
