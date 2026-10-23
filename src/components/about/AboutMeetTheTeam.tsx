"use client";

import React, { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  desk?: string;
  avatarSize?: number;
}

export default function AboutMeetTheTeam() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const editorialBoard: TeamMember[] = [
    {
      name: "Andrea Sison",
      role: "Editor-in-Chief",
    },
    {
      name: "Luis Fernandez",
      role: "Associate Editor",
    },
    {
      name: "Camille Ong",
      role: "Managing Editor",
    },
  ];

  const staffMembers: TeamMember[] = [
    {
      name: "Bea Reyes",
      role: "Head writer",
      desk: "NEWS",
    },
    {
      name: "Migs Dela Cruz",
      role: "Writer",
      desk: "NEWS",
    },
    {
      name: "Kat Mendoza",
      role: "Columnist",
      desk: "OPINION",
    },
    {
      name: "Paolo Garcia",
      role: "Columnist",
      desk: "OPINION",
    },
    {
      name: "Ria Santos",
      role: "Head writer",
      desk: "FEATURE",
    },
    {
      name: "Elle Navarro",
      role: "Head writer",
      desk: "SCI-TECH",
    },
    {
      name: "Rafa Torres",
      role: "Head writer",
      desk: "SPORTS",
    },
    {
      name: "Jyvhan Ponce",
      role: "WebDev Division Head",
      desk: "WEBDEV",
    },
  ];

  const filterChips = [
    "All",
    "News",
    "Opinion",
    "Feature",
    "Sci-Tech",
    "Sports",
    "Literary",
    "WebDev",
    "Photo",
  ];

  const filteredStaff =
    selectedFilter === "All"
      ? staffMembers
      : staffMembers.filter(
          (m) => m.desk?.toLowerCase() === selectedFilter.toLowerCase()
        );

  return (
    <section
      id="meet-the-team"
      className="w-full bg-[#fff4f5] py-[64px]"
      data-node-id="8:912"
      data-name="meet the team"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] flex flex-col gap-[24px]">
        {/* Section Head */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-b border-transparent pb-1">
          <h2 className="font-display font-black text-[52px] sm:text-[68px] lg:text-[78px] text-[#b51d42] leading-[0.88] tracking-wide">
            MEET THE TEAM
          </h2>
          <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
            Sample names · Fokie stands in until real photos arrive
          </p>
        </div>

        {/* Editorial Board */}
        <p className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase">
          EDITORIAL BOARD
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
          {editorialBoard.map((member) => (
            <div
              key={member.name}
              className="bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] p-[24px] flex flex-col items-center gap-[6px] shadow-sm"
            >
              <div className="size-[120px] rounded-[60px] border-2 border-[#e0506a] overflow-hidden bg-[#ffe1e5] relative shrink-0">
                <img
                  src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans font-bold text-[16px] text-[#2b2226] tracking-[-0.16px] pt-1">
                {member.name}
              </p>
              <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Writers and Staff */}
        <p className="font-sans font-bold text-[12px] text-[#6c5a61] tracking-[0.96px] uppercase pt-4">
          WRITERS AND STAFF
        </p>

        {/* Desk Filter Chips */}
        <div className="flex flex-wrap items-center gap-[8px]">
          {filterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setSelectedFilter(chip)}
              className={`px-[14px] py-[7px] rounded-[99px] text-[13px] font-semibold tracking-[-0.13px] border-[1.5px] transition-colors ${
                selectedFilter === chip
                  ? "bg-[#b51d42] border-[#b51d42] text-white"
                  : "bg-white border-[#f1c9d0] text-[#2b2226] hover:border-[#b51d42]"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full pt-2">
          {filteredStaff.map((staff) => (
            <div
              key={staff.name}
              className="bg-white border-[1.5px] border-[#f1c9d0] rounded-[4px] p-[18px] flex flex-col items-center gap-[6px] shadow-sm"
            >
              <div className="size-[96px] rounded-[48px] border-2 border-[#e0506a] overflow-hidden bg-[#ffe1e5] relative shrink-0">
                <img
                  src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans font-bold text-[16px] text-[#2b2226] tracking-[-0.16px] pt-1">
                {staff.name}
              </p>
              <p className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                {staff.role}
              </p>
              <span className="font-sans font-bold text-[11px] text-[#b51d42] tracking-[0.88px] uppercase">
                {staff.desk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
