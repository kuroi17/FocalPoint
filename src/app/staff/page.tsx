"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StaffSidebar, { ActiveTab } from "@/components/staff/StaffSidebar";
import ArticleLivePreview from "@/components/staff/ArticleLivePreview";

type WorkflowStep = "Draft" | "For review" | "Published";

export default function StaffPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("write");
  const [workflowStep, setWorkflowStep] = useState<WorkflowStep>("Draft");

  // Form states for Live Preview
  const [section, setSection] = useState("News");
  const [kicker, setKicker] = useState("");
  const [headline, setHeadline] = useState("");
  const [dek, setDek] = useState("");
  const [byline, setByline] = useState("");
  const [caption, setCaption] = useState("");
  const [story, setStory] = useState("");
  const [savedNotification, setSavedNotification] = useState<string | null>(
    null,
  );

  const handleSave = (step: WorkflowStep) => {
    setWorkflowStep(step);
    setSavedNotification(
      step === "Draft"
        ? "Draft saved locally!"
        : "Submitted for editor review! Status changed to 'For review'.",
    );
    setTimeout(() => setSavedNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-[100px] pt-[28px] lg:pt-[40px] pb-[40px] lg:pb-[64px] flex flex-col gap-[20px] items-start">
        {/* Title bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full whitespace-nowrap gap-1">
          <h1 className="text-[62px] md:text-[78px] font-black text-[#b51d42] font-display leading-[0.88]">
            STAFF DESK
          </h1>
          <span className="text-[11px] font-bold text-[#6c5a61] tracking-[0.66px] uppercase sm:mb-1">
            MOCK ADMIN · NOTHING IS REALLY PUBLISHED
          </span>
        </div>

        {/* Dashboard Box */}
        <div className="border-[1.5px] border-[#f1c9d0] rounded-[4px] flex flex-col lg:flex-row overflow-hidden w-full items-start">
          {/* STAFF NAV / SIDEBAR */}
          <StaffSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* EDITOR MAIN AREA */}
          <div className="bg-white p-[16px] lg:p-[24px] flex-1 flex flex-col gap-[16px] w-full min-w-0">
            {savedNotification && (
              <div className="bg-[#ffe1e5] border border-[#e0506a] text-[#b51d42] px-4 py-2 rounded text-[13px] font-bold flex items-center justify-between">
                <span>{savedNotification}</span>
                <button
                  type="button"
                  onClick={() => setSavedNotification(null)}
                  className="text-[#b51d42] font-black cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Title */}
            <h2 className="text-[50px] lg:text-[62px] font-black text-[#b51d42] font-display leading-[0.88]">
              WRITE ARTICLE
            </h2>

            {/* Publishing step pills */}
            <div className="flex items-center gap-[6px] w-full">
              {(["Draft", "For review", "Published"] as WorkflowStep[]).map(
                (step) => {
                  const isActive = workflowStep === step;
                  return (
                    <button
                      type="button"
                      key={step}
                      onClick={() => setWorkflowStep(step)}
                      className={`px-[10px] py-[6px] rounded-full text-[12px] font-bold tracking-[-0.12px] transition cursor-pointer ${
                        isActive
                          ? "bg-[#b51d42] text-white"
                          : "bg-[#fff4f5] text-[#6c5a61] hover:text-[#2b2226]"
                      }`}
                    >
                      {step}
                    </button>
                  );
                },
              )}
            </div>

            {/* Two Column Workspace on desktop, stacked on mobile */}
            <div className="flex flex-col lg:flex-row gap-[24px] items-start w-full">
              {/* Form */}
              <div className="flex-1 w-full flex flex-col gap-[12px] items-start min-w-0">
                {/* Section dropdown */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Section
                  </label>
                  <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] outline-none focus:border-[#b51d42] transition"
                  >
                    <option value="News">News</option>
                    <option value="Editorial & Column">
                      Editorial &amp; Column
                    </option>
                    <option value="Feature">Feature</option>
                    <option value="Sci-Tech">Sci-Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Literary">Literary</option>
                  </select>
                </div>

                {/* Kicker */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Kicker / hammer
                  </label>
                  <input
                    type="text"
                    value={kicker}
                    onChange={(e) => setKicker(e.target.value)}
                    placeholder="e.g. Commute"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Headline */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Headline
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Write the headline"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Dek */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Dek (one-line summary)
                  </label>
                  <input
                    type="text"
                    value={dek}
                    onChange={(e) => setDek(e.target.value)}
                    placeholder=""
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Byline */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Byline
                  </label>
                  <input
                    type="text"
                    value={byline}
                    onChange={(e) => setByline(e.target.value)}
                    placeholder="Writer's name"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Lead photo */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Lead photo
                  </label>
                  <div className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] flex items-center">
                    <input
                      type="file"
                      className="text-[14px] text-[#6c5a61] file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-[12px] file:font-semibold file:bg-[#fff4f5] file:text-[#b51d42] hover:file:bg-[#ffe1e5] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Caption and credit */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Caption and credit
                  </label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Photo by…"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Story */}
                <div className="flex flex-col gap-[6px] items-start w-full">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Story
                  </label>
                  <textarea
                    rows={8}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Start writing…"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition leading-normal resize-y min-h-[160px]"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-[8px] pt-1">
                  <button
                    type="button"
                    onClick={() => handleSave("Draft")}
                    className="border-[1.5px] border-[#b51d42] text-[#b51d42] px-[18px] py-[12px] rounded-[4px] text-[14px] font-bold tracking-[-0.14px] hover:bg-[#fff4f5] transition cursor-pointer"
                  >
                    Save draft
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSave("For review")}
                    className="bg-[#b51d42] text-white px-[18px] py-[12px] rounded-[4px] text-[14px] font-bold tracking-[-0.14px] hover:bg-[#961735] transition cursor-pointer flex items-center gap-1"
                  >
                    Submit for review →
                  </button>
                </div>
              </div>

              {/* LIVE PREVIEW COLUMN */}
              <ArticleLivePreview
                section={section}
                kicker={kicker}
                headline={headline}
                byline={byline}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
