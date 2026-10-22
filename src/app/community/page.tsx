"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] px-5 md:px-[100px] py-10 flex flex-col gap-8">
        <div className="border-b border-[#f1c9d0] pb-6 flex flex-col gap-2">
          <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">
            READER VOICES
          </span>
          <h1 className="text-[44px] md:text-[68px] font-black leading-none font-display text-[#b51d42]">
            COMMUNITY & LETTERS
          </h1>
          <p className="text-[16px] text-[#5f5a5c]">
            Letters to the Editor, anonymous feedback to Fokie, and community discussion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Letters to the Editor */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-[26px] font-bold text-[#2b2226]">
              Recent Letters to the Editor
            </h2>

            {[
              {
                title: "Re: The Daily Commute Crisis",
                from: "A Second-Year Engineering Student",
                date: "20 Oct 2026",
                text: "The report on campus transit hits home. Many of us arrive exhausted before our 7:30 AM lectures even start. The student council should formally coordinate with the local transit board."
              },
              {
                title: "On Extended Library Hours",
                from: "Graduating Senior, College of Arts",
                date: "18 Oct 2026",
                text: "When midterm exams approach, public study hubs on campus are sorely needed. Extending the library hours until 10 PM is a practical and necessary step."
              }
            ].map((letter, i) => (
              <div key={i} className="p-6 rounded-[8px] border border-[#f1c9d0] bg-[#fff9fa] flex flex-col gap-2">
                <span className="text-[12px] font-bold text-[#b51d42] uppercase">{letter.date}</span>
                <h3 className="text-[18px] font-bold text-[#2b2226]">{letter.title}</h3>
                <p className="text-[15px] text-[#5f5a5c] leading-relaxed italic">"{letter.text}"</p>
                <span className="text-[13px] text-[#7a7275] font-semibold mt-2">— {letter.from}</span>
              </div>
            ))}
          </div>

          {/* Feedback Form */}
          <div className="lg:col-span-5 p-7 rounded-[8px] bg-[#fff4f5] border border-[#f1c9d0] flex flex-col gap-4">
            <h2 className="text-[24px] font-bold text-[#b51d42]">
              Send Feedback to Fokie
            </h2>
            <p className="text-[14px] text-[#5f5a5c] leading-snug">
              Have a campus tip, story idea, or feedback on our coverage? Send it to our editorial team (anonymous option available).
            </p>

            {feedbackSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded text-emerald-800 text-[14px] font-medium">
                Maraming salamat! Your feedback has been forwarded to the editorial desk.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFeedbackSubmitted(true);
                }}
                className="flex flex-col gap-3"
              >
                <div>
                  <label className="text-[12px] font-bold text-[#2b2226] uppercase">Name (Optional)</label>
                  <input
                    type="text"
                    placeholder="Leave blank for anonymous"
                    className="w-full mt-1 p-2.5 rounded border border-[#f1c9d0] text-[14px] bg-white"
                  />
                </div>
                <div>
                  <label className="text-[12px] font-bold text-[#2b2226] uppercase">Desk Target</label>
                  <select className="w-full mt-1 p-2.5 rounded border border-[#f1c9d0] text-[14px] bg-white">
                    <option>General Editorial / EIC</option>
                    <option>News Desk</option>
                    <option>Features Desk</option>
                    <option>Opinion Desk</option>
                    <option>Sci-Tech Desk</option>
                    <option>WebDev & Tech Team</option>
                  </select>
                </div>
                <div>
                  <label className="text-[12px] font-bold text-[#2b2226] uppercase">Your Message / Story Lead</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your feedback, lead, or opinion..."
                    className="w-full mt-1 p-2.5 rounded border border-[#f1c9d0] text-[14px] bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 py-3 bg-[#b51d42] hover:bg-[#a8283f] text-white font-bold text-[14px] rounded transition-colors"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
