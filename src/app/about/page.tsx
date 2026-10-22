"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const team = [
    { name: "Jyvhan Earl Ponce", role: "Web Development Division Head", desk: "Technical Desk", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
    { name: "Bea Reyes", role: "News Desk Head", desk: "News Desk", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
    { name: "Paolo Garcia", role: "Managing Editor", desk: "Editorial Board", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
    { name: "Kat Mendoza", role: "Opinion Editor", desk: "Opinion Desk", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
    { name: "Dan Navarro", role: "Sci-Tech Editor", desk: "Sci-Tech Desk", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
    { name: "Allen Gomez", role: "Features Desk Lead", desk: "Features Desk", avatar: "/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* ==========================================================
            1. ABOUT HERO BANNER (Figma 8:747 & 8:1134)
        ========================================================== */}
        <section className="w-full bg-[#b51d42] text-white py-12 md:py-16 px-5 md:px-[100px] overflow-hidden relative">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Student illustration */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="w-[200px] aspect-[3/4] relative">
                <img
                  src="/assets/63bc3d01253f0ca6c58e225411ab567fbdc3147e.png"
                  alt="Student Journalist"
                  className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
                />
              </div>
            </div>

            {/* Center Brand Lockup */}
            <div className="md:col-span-12 lg:col-span-6 flex flex-col items-center text-center gap-4">
              {/* Corner bracket box */}
              <div className="relative border-[1.5px] border-white/60 p-6 md:p-8 bg-white/10 backdrop-blur-sm rounded-[4px]">
                <span className="absolute -top-[5px] -left-[5px] w-[10px] h-[10px] bg-white border border-[#b51d42]" />
                <span className="absolute -top-[5px] -right-[5px] w-[10px] h-[10px] bg-white border border-[#b51d42]" />
                <span className="absolute -bottom-[5px] -left-[5px] w-[10px] h-[10px] bg-white border border-[#b51d42]" />
                <span className="absolute -bottom-[5px] -right-[5px] w-[10px] h-[10px] bg-white border border-[#b51d42]" />
                
                <h1 className="text-[54px] md:text-[80px] font-black leading-none font-display text-white tracking-wide">
                  FOCALPOINT
                </h1>
              </div>

              {/* Tagline */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[20px] md:text-[24px] font-semibold text-white/90">
                  Bringing Stories into Focus,
                </span>
                <span className="text-[16px] md:text-[20px] font-bold text-[#fce192] bg-black/20 px-4 py-1 rounded-full">
                  Amplifying Voices with Purpose.
                </span>
              </div>
            </div>

            {/* Right Student illustration */}
            <div className="hidden lg:flex lg:col-span-3 justify-end">
              <div className="w-[200px] aspect-[3/4] relative">
                <img
                  src="/assets/276ee10a29c498b449d84d89e7ce48d8a39e326a.png"
                  alt="Student Journalist"
                  className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================================
            2. INTRO & SUB-NAV (Figma 8:814 & 8:819)
        ========================================================== */}
        <section className="w-full max-w-[1240px] px-5 py-8 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-6 border-b border-[#f1c9d0]">
            <span className="bg-[#b51d42] text-white text-[11px] font-bold tracking-widest px-3 py-1 rounded-[4px] uppercase shrink-0">
              ABOUT FOCALPOINT
            </span>
            <p className="text-[18px] md:text-[22px] font-semibold text-[#2b2226] leading-snug">
              Focalpoint is an independent youth media outlet. We report, explain and listen, and we train the next generation of student journalists while we do it.
            </p>
          </div>

          {/* Sub Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none border-b border-[#f1c9d0]">
            {[
              { id: "mission", label: "MISSION" },
              { id: "journey", label: "OUR JOURNEY" },
              { id: "team", label: "MEET THE TEAM" },
              { id: "desks", label: "DESKS" },
              { id: "join", label: "JOIN US" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-[14px] font-bold tracking-tight transition-colors whitespace-nowrap relative ${
                  activeTab === tab.id
                    ? "text-[#b51d42]"
                    : "text-[#6c5a61] hover:text-[#b51d42]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b51d42]" />
                )}
              </button>
            ))}
          </div>

          {/* ==========================================================
              3. CONTENT SECTIONS
          ========================================================== */}
          {activeTab === "mission" && (
            <div className="flex flex-col gap-8 py-6">
              <div className="p-8 rounded-[8px] bg-[#fff4f5] border border-[#f1c9d0] flex flex-col gap-3">
                <h2 className="text-[28px] font-bold text-[#b51d42]">
                  Our Mission & Convictions
                </h2>
                <p className="text-[17px] text-[#2b2226] leading-relaxed">
                  Empower the next generation of student journalists by giving them a real newsroom to learn in. We stand for factual rigor, editorial independence, deep empathy for our campus community, and a commitment to bringing unnoticed stories into sharp focus.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-[6px] border border-[#f1c9d0] flex flex-col gap-2">
                  <span className="text-[20px] font-black text-[#b51d42] font-display">ACCURACY FIRST</span>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    We verify every claim, corroborate sources, and correct our mistakes openly and swiftly.
                  </p>
                </div>
                <div className="p-6 rounded-[6px] border border-[#f1c9d0] flex flex-col gap-2">
                  <span className="text-[20px] font-black text-[#b51d42] font-display">STUDENT-CENTERED</span>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    Our coverage answers what policies, tuition, transit, and events mean for everyday student life.
                  </p>
                </div>
                <div className="p-6 rounded-[6px] border border-[#f1c9d0] flex flex-col gap-2">
                  <span className="text-[20px] font-black text-[#b51d42] font-display">EDITORIAL FREEDOM</span>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    As an independent publication, our stories are guided solely by the truth and the public good.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[32px] font-black text-[#b51d42] font-display">
                  EDITORIAL BOARD & STAFF
                </h2>
                <span className="text-[13px] text-[#7a7275]">Academic Term 2026</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {team.map((member, i) => (
                  <div key={i} className="p-5 rounded-[8px] border border-[#f1c9d0] flex items-center gap-4 bg-[#fff9fa]">
                    <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-[#ffe1e5] border-2 border-[#e0506a] shrink-0">
                      <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-bold text-[#2b2226]">{member.name}</span>
                      <span className="text-[12.5px] font-semibold text-[#b51d42]">{member.role}</span>
                      <span className="text-[11.5px] text-[#7a7275]">{member.desk}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "journey" && (
            <div className="flex flex-col gap-6 py-6 max-w-[800px]">
              <h2 className="text-[32px] font-black text-[#b51d42] font-display">
                OUR JOURNEY & MILESTONES
              </h2>
              <div className="flex flex-col border-l-2 border-[#b51d42] ml-4 pl-6 gap-8">
                <div>
                  <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">OCTOBER 2026</span>
                  <h3 className="text-[18px] font-bold text-[#2b2226]">Official Digital Launch</h3>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    Focalpoint unveils its modern digital publishing home, unifying News, Features, Sci-Tech, and Opinions.
                  </p>
                </div>
                <div>
                  <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">SEPTEMBER 2026</span>
                  <h3 className="text-[18px] font-bold text-[#2b2226]">Newsroom Restructuring</h3>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    Establishment of dedicated desks for Sci-Tech and Investigative reporting.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "desks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
              {[
                { name: "News Desk", desc: "Covers immediate campus developments, administration policies, and student council sessions.", color: "#b51d42" },
                { name: "Opinion & Column Desk", desc: "Houses analytical columns, the official collective stand of the Editorial Board, and student op-eds.", color: "#7d5ba6" },
                { name: "Features Desk", desc: "Long-form narratives highlighting student culture, local artisans, community profiles, and campus life.", color: "#e86348" },
                { name: "Sci-Tech Desk", desc: "Explores laboratory research, environmental campus heat-mapping, digital tools, and tech trends.", color: "#2e8b83" },
                { name: "Sports Desk", desc: "Follows varsity athletes, cheer competitions, intramurals, and community sporting events.", color: "#c28427" },
                { name: "Technical & WebDev Desk", desc: "Builds and maintains the Focalpoint web platform, ensuring performance, accessibility, and smooth publishing.", color: "#2b2226" },
              ].map((d, i) => (
                <div key={i} className="p-6 rounded-[6px] border border-[#f1c9d0] flex flex-col gap-2">
                  <h3 className="text-[20px] font-bold" style={{ color: d.color }}>{d.name}</h3>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "join" && (
            <div className="p-8 rounded-[8px] bg-[#b51d42] text-white flex flex-col items-center text-center gap-4 my-6">
              <h2 className="text-[36px] font-black font-display tracking-wide">
                BECOME A FOCALCREW MEMBER
              </h2>
              <p className="text-[16px] text-white/90 max-w-[600px] leading-relaxed">
                Whether you write, photograph, code, design, or podcast, there is a place for you in our newsroom.
              </p>
              <button
                onClick={() => alert("Recruitment applications open! Join our onboarding session.")}
                className="px-6 py-3 bg-white text-[#b51d42] font-bold text-[14px] rounded-[4px] hover:bg-[#ffe1e5] transition-colors"
              >
                Submit Application Form →
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
