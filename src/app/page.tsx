import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import LatestBySection from "@/components/home/LatestBySection";
import OpinionSection from "@/components/home/OpinionSection";
import WordAndTechnique from "@/components/home/WordAndTechnique";
import ExploreDesks from "@/components/home/ExploreDesks";
import CommunityLensAndListen from "@/components/home/CommunityLensAndListen";
import CallForFocalcrews from "@/components/home/CallForFocalcrews";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* 1. Hero Lead, Photo & Top Stories */}
        <HeroSection />

        {/* 2. Latest By Section & Catch Up */}
        <LatestBySection />

        {/* 3. Opinion Spotlight & Columns */}
        <OpinionSection />

        {/* 4. Word of the Day & Journalism Technique */}
        <WordAndTechnique />

        {/* 5. Explore Our Desks */}
        <ExploreDesks />

        {/* 6. Community Lens & Listen */}
        <CommunityLensAndListen />

        {/* 7. Call For Focalcrews */}
        <CallForFocalcrews />
      </main>

      <Footer />
    </div>
  );
}
