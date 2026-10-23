import React from "react";
import Link from "next/link";

export default function CallForFocalcrews() {
  return (
    <section className="w-full bg-[#b51d42] text-white py-12 md:py-[64px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] flex justify-center">
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-[32px] items-center justify-between">
        <div className="flex flex-col gap-[18px] flex-1 min-w-0">
          <div className="text-[52px] sm:text-[76px] md:text-[100px] lg:text-[124px] xl:text-[157px] font-black leading-[0.88] font-display text-white whitespace-nowrap select-none">
            <p className="leading-[0.88] mb-0">CALL FOR</p>
            <p className="leading-[0.88]">FOCALCREWS</p>
          </div>
          <p className="text-[15px] md:text-[18px] text-white leading-[1.5] tracking-[-0.18px] max-w-[868px] font-sans">
            Content group, technical group, photo and web. Let Fokie help you
            find the desk that fits you.
          </p>
          <div>
            <Link
              href="/about#join"
              className="inline-flex items-center justify-center px-[18px] py-[12px] bg-white text-[#b51d42] hover:bg-[#ffe1e5] font-bold text-[14px] tracking-[-0.14px] rounded-[4px] transition-colors"
            >
              Find your desk  →
            </Link>
          </div>
        </div>

        <div className="w-[200px] sm:w-[260px] md:w-[280px] xl:w-[340px] h-[250px] sm:h-[320px] md:h-[360px] xl:h-[420px] relative shrink-0">
          <img
            src="/assets/130e9e03a66ae4fc0b1463c9486da5a07856222c.png"
            alt="Fokie Mascot"
            className="w-full h-full object-contain pointer-events-none drop-shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
