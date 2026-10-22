"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PodcastsPage() {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  const episodes = [
    { id: 4, title: "Ep. 4: The commute, out loud", desk: "News Desk", duration: "21 min", date: "19 Oct 2026", desc: "A live field-recording episode tracing morning commuter routes from the northern bus terminal to the campus gates." },
    { id: 3, title: "Ep. 3: Who decides what counts as news?", desk: "News Desk", duration: "18 min", date: "12 Oct 2026", desc: "Our editors unpack editorial autonomy, censorship concerns, and how stories get vetted in a student newsroom." },
    { id: 2, title: "Ep. 2: Writing columns without shouting", desk: "Opinion Desk", duration: "22 min", date: "05 Oct 2026", desc: "Kat Mendoza and Paolo Garcia discuss persuasive op-ed writing and giving voice to controversial campus debates." },
    { id: 1, title: "Ep. 1: Into Focus: The Focalpoint Launch", desk: "Editorial Board", duration: "25 min", date: "28 Sep 2026", desc: "The founding staff shares why student journalism matters now more than ever." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226]">
      <Header />

      <main className="flex-1 w-full max-w-[1440px] px-5 md:px-[100px] py-10 flex flex-col gap-8">
        <div className="border-b border-[#f1c9d0] pb-6 flex flex-col gap-2">
          <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">
            AUDIO JOURNALISM
          </span>
          <h1 className="text-[44px] md:text-[68px] font-black leading-none font-display text-[#b51d42]">
            PODCASTS & BROADCASTS
          </h1>
          <p className="text-[16px] text-[#5f5a5c]">
            Conversations, investigative audio dispatches, and interviews with our student journalists.
          </p>
        </div>

        {/* Episodes List */}
        <div className="flex flex-col divide-y divide-[#f1c9d0]">
          {episodes.map((ep, i) => (
            <div key={ep.id} className="py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <button
                  onClick={() => setCurrentPlaying(currentPlaying === i ? null : i)}
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 transition-all ${
                    currentPlaying === i
                      ? "bg-emerald-600 text-white animate-pulse"
                      : "bg-[#b51d42] hover:bg-[#a8283f] text-white"
                  }`}
                >
                  <span className="text-[16px] ml-0.5">{currentPlaying === i ? "❚❚" : "▶"}</span>
                </button>
                <div className="flex flex-col gap-1 max-w-[700px]">
                  <span className="text-[12px] font-bold text-[#b51d42] uppercase tracking-wider">
                    {ep.desk} · {ep.duration} · {ep.date}
                  </span>
                  <h3 className="text-[20px] font-bold text-[#2b2226] leading-snug">
                    {ep.title}
                  </h3>
                  <p className="text-[14px] text-[#5f5a5c] leading-relaxed">
                    {ep.desc}
                  </p>
                </div>
              </div>

              {currentPlaying === i && (
                <div className="flex items-center gap-2 text-[12px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                  <span>● Playing Episode {ep.id}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
