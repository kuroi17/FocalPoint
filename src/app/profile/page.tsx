"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileIdCard from "@/components/profile/ProfileIdCard";
import PointsRules from "@/components/profile/PointsRules";
import FramesSelector, { FrameItem } from "@/components/profile/FramesSelector";
import BadgesList from "@/components/profile/BadgesList";
import SavedStoriesList from "@/components/profile/SavedStoriesList";

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
      alert(
        `Unlock ${frame.name} for ${frame.cost}? You currently have ${points} Fokie Points.`,
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-[32px] lg:pt-[40px] pb-[48px] lg:pb-[64px]">
        <div className="flex flex-col lg:flex-row gap-[32px] items-start w-full">
          {/* LEFT COLUMN: ID Card */}
          <ProfileIdCard activeFrame={activeFrame} points={points} />

          {/* RIGHT COLUMN: Fokie Points, Frames, Badges, Saved Stories */}
          <div className="flex-1 w-full flex flex-col gap-[20px] items-start min-w-0">
            {/* 1. Points Rules */}
            <PointsRules />

            {/* 2. Frames */}
            <FramesSelector
              frames={frames}
              activeFrame={activeFrame}
              onFrameClick={handleFrameClick}
            />

            {/* 3. Badges */}
            <BadgesList />

            {/* 4. Saved Stories */}
            <SavedStoriesList />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
