"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ActiveTab = "overview" | "write" | "articles" | "gallery" | "feedback";
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
  const [savedNotification, setSavedNotification] = useState<string | null>(null);

  const handleSave = (step: WorkflowStep) => {
    setWorkflowStep(step);
    setSavedNotification(
      step === "Draft"
        ? "Draft saved locally!"
        : "Submitted for editor review! Status changed to 'For review'."
    );
    setTimeout(() => setSavedNotification(null), 4000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 md:px-[100px] pt-8 md:pt-[40px] pb-16">
        {/* Title bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-transparent pb-3 gap-2">
          <h1 className="text-[52px] md:text-[78px] font-black text-[#b51d42] font-display leading-[0.88] tracking-tight">
            STAFF DESK
          </h1>
          <span className="text-[11px] font-bold text-[#6c5a61] tracking-[0.66px] uppercase">
            MOCK ADMIN · NOTHING IS REALLY PUBLISHED
          </span>
        </div>

        {/* Dashboard Box */}
        <div className="border-[1.5px] border-[#f1c9d0] rounded-[4px] flex flex-col md:flex-row overflow-hidden mt-4 shadow-sm">
          {/* STAFF NAV / SIDEBAR */}
          <aside className="bg-[#2b2226] text-white p-4 md:p-[18px] md:w-[230px] shrink-0 flex flex-col gap-1">
            <span className="text-[15px] font-black tracking-[-0.3px] text-white/90 mb-3 block">
              FOCALPOINT · STAFF
            </span>

            {/* Nav Links */}
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition text-left cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#e0506a]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("write")}
              className={`w-full flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition text-left cursor-pointer ${
                activeTab === "write"
                  ? "bg-[#e0506a]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Write article</span>
            </button>

            <button
              onClick={() => setActiveTab("articles")}
              className={`w-full flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition text-left cursor-pointer ${
                activeTab === "articles"
                  ? "bg-[#e0506a]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Articles</span>
              <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] py-[1px] rounded-full">
                1
              </span>
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`w-full flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition text-left cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-[#e0506a]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Gallery queue</span>
              <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] py-[1px] rounded-full">
                3
              </span>
            </button>

            <button
              onClick={() => setActiveTab("feedback")}
              className={`w-full flex items-center justify-between px-[10px] py-[9px] rounded-[4px] text-[14px] font-semibold tracking-[-0.14px] transition text-left cursor-pointer ${
                activeTab === "feedback"
                  ? "bg-[#e0506a]/35 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Feedback &amp; Q&amp;A</span>
              <span className="bg-[#e0506a] text-white text-[12px] font-bold px-[7px] py-[1px] rounded-full">
                4
              </span>
            </button>
          </aside>

          {/* EDITOR MAIN AREA */}
          <div className="bg-white p-5 md:p-[24px] flex-1 flex flex-col gap-[16px] overflow-x-hidden">
            {savedNotification && (
              <div className="bg-[#ffe1e5] border border-[#e0506a] text-[#b51d42] px-4 py-2 rounded text-[13px] font-bold flex items-center justify-between">
                <span>{savedNotification}</span>
                <button
                  onClick={() => setSavedNotification(null)}
                  className="text-[#b51d42] font-black cursor-pointer"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Title */}
            <h2 className="text-[46px] md:text-[62px] font-black text-[#b51d42] font-display leading-[0.88] tracking-tight">
              WRITE ARTICLE
            </h2>

            {/* Publishing step pills */}
            <div className="flex items-center gap-[6px]">
              {(["Draft", "For review", "Published"] as WorkflowStep[]).map((step) => {
                const isActive = workflowStep === step;
                return (
                  <button
                    key={step}
                    onClick={() => setWorkflowStep(step)}
                    className={`px-[12px] py-[6px] rounded-full text-[12px] font-bold tracking-[-0.12px] transition cursor-pointer ${
                      isActive
                        ? "bg-[#b51d42] text-white"
                        : "bg-[#fff4f5] text-[#6c5a61] hover:text-[#2b2226]"
                    }`}
                  >
                    {step}
                  </button>
                );
              })}
            </div>

            {/* Two Column Workspace: Form & Live Preview */}
            <div className="flex flex-col lg:flex-row gap-8 items-start mt-2">
              {/* Form */}
              <div className="flex-1 w-full flex flex-col gap-[14px]">
                {/* Section dropdown */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Section
                  </label>
                  <select
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] outline-none focus:border-[#b51d42] transition"
                  >
                    <option value="News">News</option>
                    <option value="Editorial & Column">Editorial &amp; Column</option>
                    <option value="Feature">Feature</option>
                    <option value="Sci-Tech">Sci-Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Literary">Literary</option>
                  </select>
                </div>

                {/* Kicker */}
                <div className="flex flex-col gap-[6px]">
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
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Headline
                  </label>
                  <input
                    type="text"
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    placeholder="Write the headline"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition font-medium"
                  />
                </div>

                {/* Dek */}
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Dek (one-line summary)
                  </label>
                  <input
                    type="text"
                    value={dek}
                    onChange={(e) => setDek(e.target.value)}
                    placeholder="One-line summary for reader engagement"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition"
                  />
                </div>

                {/* Byline */}
                <div className="flex flex-col gap-[6px]">
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
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Lead photo
                  </label>
                  <div className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[8px] flex items-center gap-2">
                    <input
                      type="file"
                      className="text-[13px] text-[#6c5a61] file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-[12px] file:font-semibold file:bg-[#fff4f5] file:text-[#b51d42] hover:file:bg-[#ffe1e5] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Caption and credit */}
                <div className="flex flex-col gap-[6px]">
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
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[13px] font-semibold text-[#2b2226] tracking-[-0.13px]">
                    Story
                  </label>
                  <textarea
                    rows={8}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Start writing…"
                    className="w-full bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] px-[12px] py-[10px] text-[14px] text-[#2b2226] placeholder:text-[#6c5a61] outline-none focus:border-[#b51d42] transition leading-relaxed resize-y"
                  />
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-[8px] pt-2">
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
              <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-[8px]">
                <span className="text-[11px] font-bold text-[#6c5a61] tracking-[0.66px] uppercase">
                  LIVE PREVIEW
                </span>

                {/* Card Preview */}
                <div className="border border-[#f1c9d0] rounded-[4px] p-3 flex flex-col gap-[8px] bg-white shadow-sm">
                  {/* Photo with Camera badge */}
                  <div className="h-[200px] rounded-[4px] relative overflow-hidden bg-gradient-to-br from-[#ffe1e5] to-[#e0506a] flex items-end justify-between p-3">
                    <span className="text-[11px] font-semibold text-white tracking-[0.66px]">
                      PHOTO
                    </span>
                    <div className="w-[34px] h-[34px] opacity-85">
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Camera icon"
                        className="w-full h-full object-contain pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Kicker */}
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                    {section.toUpperCase()} · {kicker.trim() ? kicker.toUpperCase() : "KICKER"}
                  </span>

                  {/* Headline */}
                  <h4 className="text-[19px] font-bold text-[#2b2226] leading-[1.22] tracking-[-0.42px]">
                    {headline.trim() ? headline : "Your headline appears here"}
                  </h4>

                  {/* Byline */}
                  <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                    By {byline.trim() ? byline : "Writer"} · Today
                  </p>
                </div>

                {/* Publishing Flow Info Box */}
                <div className="bg-[#fff4f5] border border-[#f1c9d0] rounded-[4px] p-[14px] flex flex-col gap-[6px] text-[#2b2226] text-[13px] tracking-[-0.13px] mt-2">
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.66px] uppercase">
                    PUBLISHING FLOW
                  </span>
                  <p>1 Writer drafts</p>
                  <p>2 Copy Reading checks</p>
                  <p>3 Section editor approves</p>
                  <p>4 EIC publishes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
