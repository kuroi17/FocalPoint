import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2b2226] text-white pt-[56px] pb-[28px] px-5 md:px-[100px]">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-[32px]">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* About publication */}
          <div className="md:col-span-5 flex flex-col gap-[10px]">
            <h2 className="text-[36px] font-black tracking-wide text-white font-display">
              FOCALPOINT
            </h2>
            <p className="text-[14px] leading-[1.5] text-[#e3d3d8] tracking-[-0.14px] max-w-[420px]">
              Bringing stories into focus. Amplifying voices with purpose. Empowering the next generation of student journalists.
            </p>
          </div>

          {/* Read Links */}
          <div className="md:col-span-2 flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold text-[#b9a7ad] tracking-[0.96px] uppercase">
              READ
            </p>
            <Link href="/news" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              News
            </Link>
            <Link href="/editorial" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Editorial & Column
            </Link>
            <Link href="/features" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Feature
            </Link>
            <Link href="/sci-tech" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Sci-Tech
            </Link>
            <Link href="/sports" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Sports
            </Link>
            <Link href="/literary" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Literary
            </Link>
          </div>

          {/* About Links */}
          <div className="md:col-span-2 md:col-start-8 flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold text-[#b9a7ad] tracking-[0.96px] uppercase">
              ABOUT
            </p>
            <Link href="/about#mission" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Mission and corrections
            </Link>
            <Link href="/about#journey" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Our journey
            </Link>
            <Link href="/about#team" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Meet the team
            </Link>
            <Link href="/about#desks" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Our desks
            </Link>
            <Link href="/about#join" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Join the Focalcrews
            </Link>
          </div>

          {/* Take Part Links */}
          <div className="md:col-span-2 md:col-start-11 flex flex-col gap-[8px]">
            <p className="text-[12px] font-bold text-[#b9a7ad] tracking-[0.96px] uppercase">
              TAKE PART
            </p>
            <Link href="/gallery" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Gallery
            </Link>
            <Link href="/podcasts" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Podcasts
            </Link>
            <Link href="/community" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Community
            </Link>
            <Link href="/feedback" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Send feedback to Fokie
            </Link>
            <Link href="/staff" className="text-[14px] text-white hover:text-[#e0506a] tracking-[-0.14px] transition-colors">
              Staff sign-in
            </Link>
          </div>
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-white/20" />

        {/* Copyright */}
        <p className="text-[13px] text-[#b9a7ad]">
          © 2026 Focalpoint. Independent youth media.
        </p>
      </div>
    </footer>
  );
}
