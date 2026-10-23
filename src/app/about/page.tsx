import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroBanner from "@/components/about/AboutHeroBanner";
import AboutIntro from "@/components/about/AboutIntro";
import AboutSubNav from "@/components/about/AboutSubNav";
import AboutMission from "@/components/about/AboutMission";
import AboutJourney from "@/components/about/AboutJourney";
import AboutMeetTheTeam from "@/components/about/AboutMeetTheTeam";
import AboutDesks from "@/components/about/AboutDesks";
import AboutJoinUs from "@/components/about/AboutJoinUs";

export const metadata = {
  title: "About | Focalpoint",
  description:
    "Focalpoint is an independent youth media outlet. We report, explain and listen, and we train the next generation of student journalists while we do it.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226] selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Hero Banner with Student Illustrations & Wave Edge */}
        <AboutHeroBanner />

        {/* 3. Intro Tag & Mission Statement */}
        <AboutIntro />

        {/* 4. Sub-Navigation (Mission, Our Journey, Meet The Team, Desks, Join Us) */}
        <AboutSubNav />

        {/* 5. Mission, Identity, Purpose & Corrections Policy */}
        <AboutMission />

        {/* 6. Our Journey & Milestones */}
        <AboutJourney />

        {/* 7. Meet The Team (Editorial Board & Writers/Staff Grid) */}
        <AboutMeetTheTeam />

        {/* 8. Our Desks (Content Group & Technical Group) */}
        <AboutDesks />

        {/* 9. Join The Focalcrews (Requirements & Quiz) */}
        <AboutJoinUs />
      </main>

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
}
