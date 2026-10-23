"use client";

import React from "react";

export interface EpisodeItem {
  id: number;
  title: string;
  desk: string;
  duration: string;
}

interface PodcastEpisodesProps {
  currentEpisodeId: number | null;
  isPlaying: boolean;
  onEpisodeSelect: (episode: EpisodeItem) => void;
}

export default function PodcastEpisodes({
  currentEpisodeId,
  isPlaying,
  onEpisodeSelect,
}: PodcastEpisodesProps) {
  const episodes: EpisodeItem[] = [
    {
      id: 4,
      title: "Ep. 4: The commute, out loud",
      desk: "News Desk",
      duration: "21 min",
    },
    {
      id: 3,
      title: "Ep. 3: Who decides what counts as news?",
      desk: "News Desk",
      duration: "18 min",
    },
    {
      id: 2,
      title: "Ep. 2: Writing columns without shouting",
      desk: "Opinion Desk",
      duration: "22 min",
    },
    {
      id: 1,
      title: "Ep. 1: Meet the Focalcrews",
      desk: "Circulation",
      duration: "15 min",
    },
  ];

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] py-[64px] flex flex-col gap-[4px]"
      data-node-id="10:1119"
      data-name="episodes"
    >
      {/* Section Head */}
      <div
        className="flex items-end justify-between overflow-clip w-full pb-2"
        data-node-id="10:1120"
        data-name="section head"
      >
        <h2
          className="font-display font-black leading-[0.88] text-[52px] sm:text-[68px] lg:text-[78px] text-[#b51d42] tracking-wide"
          data-node-id="10:1121"
        >
          EPISODES
        </h2>
        <p
          className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[0.52px] uppercase pb-1"
          data-node-id="10:1122"
        >
          SAMPLE EPISODES
        </p>
      </div>

      {/* Episode Rows */}
      <div className="flex flex-col w-full">
        {episodes.map((ep) => {
          const isCurrent = currentEpisodeId === ep.id;
          const isRowPlaying = isCurrent && isPlaying;

          return (
            <div
              key={ep.id}
              onClick={() => onEpisodeSelect(ep)}
              className="border-b border-[#f1c9d0] py-[16px] flex items-center justify-between gap-[16px] w-full cursor-pointer group hover:bg-[#fff4f5]/40 transition-colors px-2 -mx-2 rounded-[2px]"
            >
              {/* Play Button & Details */}
              <div className="flex items-center gap-[16px] flex-1 min-w-0">
                <button
                  type="button"
                  aria-label={`Play ${ep.title}`}
                  className="size-[48px] rounded-[24px] bg-[#b51d42] hover:bg-[#961836] transition-colors flex items-center justify-center shrink-0 text-white cursor-pointer shadow-xs focus:outline-hidden"
                >
                  <span className="font-sans font-bold text-[14px]">
                    {isRowPlaying ? "❚❚" : "▶"}
                  </span>
                </button>

                <div className="flex flex-col gap-[2px] items-start min-w-0">
                  <h3 className="font-sans font-bold text-[16px] sm:text-[17px] text-[#2b2226] leading-[1.3] tracking-[-0.17px] group-hover:text-[#b51d42] transition-colors truncate w-full">
                    {ep.title}
                  </h3>
                  <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                    {ep.desk} · {ep.duration}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <span
                className={`font-sans font-bold text-[11px] tracking-[0.66px] uppercase whitespace-nowrap shrink-0 ${
                  isRowPlaying ? "text-[#b51d42]" : "text-[#6c5a61]"
                }`}
              >
                {isRowPlaying ? "NOW PLAYING" : "SAMPLE"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
