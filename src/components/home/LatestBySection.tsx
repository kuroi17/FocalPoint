import React from "react";
import Link from "next/link";

export default function LatestBySection() {
  return (
    <>
      {/* Divider rule (Figma 5:113: 1.5px rose rule) */}
      <div className="w-full max-w-[1240px] px-5 h-[1.5px] bg-[#e0506a] opacity-70 my-2" />

      {/* Latest By Section Container */}
      <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-4 pb-[64px]">
        <div className="flex items-end justify-between mb-8 pb-2">
          <h2 className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[78px] font-black text-[#b51d42] font-display leading-[0.88] tracking-wide">
            LATEST BY SECTION
          </h2>
          <span className="hidden md:inline text-[14px] font-bold text-[#b51d42] tracking-[-0.14px]">
            Tap a section name to open it
          </span>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 lg:gap-[40px] items-start w-full">
          {/* Left: News, Feature, Sci-Tech blocks */}
          <div className="w-full xl:w-[880px] flex-1 min-w-0 flex flex-col gap-[32px]">
            {/* NEWS BLOCK */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center justify-between text-[#c0304f] w-full">
                <h3 className="text-[44px] md:text-[56px] font-black font-display leading-[0.88]">
                  NEWS
                </h3>
                <Link
                  href="/news"
                  className="text-[13px] font-bold text-[#c0304f] hover:underline tracking-[-0.13px]"
                >
                  See all →
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                {/* Big Story Card (480px) */}
                <div className="w-full md:w-[480px] shrink-0 flex flex-col gap-[8px]">
                  <div
                    className="w-full h-[253px] rounded-[4px] overflow-hidden relative"
                    style={{
                      backgroundImage:
                        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
                    }}
                  >
                    <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                      PHOTO
                    </span>
                    <img
                      src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                      alt="Badge"
                      className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase font-sans pt-1">
                    NEWS · COMMUTE
                  </span>
                  <Link
                    href="/article/the-long-way-to-class"
                    className="text-[21px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.22] tracking-[-0.42px] font-sans transition-colors"
                  >
                    The long way to class: students rethink the daily commute
                  </Link>
                  <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] font-sans">
                    By Bea Reyes · 19 Oct 2026
                  </span>
                </div>

                {/* Story Rows (376px) */}
                <div className="flex flex-1 flex-col gap-[16px] w-full min-w-0">
                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                      }}
                    >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        NEWS · STUDY SPACES
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        When the library closes before the studying ends
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Migs Dela Cruz · 4 min read
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                      }}
                    >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        NEWS · CANTEEN
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        What a hundred pesos buys at the campus canteen
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Bea Reyes · 5 min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#f1c9d0]" />
            </div>

            {/* FEATURE BLOCK */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center justify-between text-[#e0506a] w-full">
                <h3 className="text-[44px] md:text-[56px] font-black font-display leading-[0.88]">
                  FEATURE
                </h3>
                <Link
                  href="/features"
                  className="text-[13px] font-bold text-[#e0506a] hover:underline tracking-[-0.13px]"
                >
                  See all →
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                {/* Big Story Card */}
                <div className="w-full md:w-[480px] shrink-0 flex flex-col gap-[8px]">
                  <div
                    className="w-full h-[253px] rounded-[4px] overflow-hidden relative"
                    style={{
                      backgroundImage:
                        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                    }}
                  >
                    <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                      PHOTO
                    </span>
                    <img
                      src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                      alt="Badge"
                      className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase font-sans pt-1">
                    FEATURE · ZINES
                  </span>
                  <Link
                    href="#"
                    className="text-[21px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.22] tracking-[-0.42px] font-sans transition-colors"
                  >
                    A little paper, a little courage: inside the campus zine
                    scene
                  </Link>
                  <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] font-sans">
                    By Ria Santos · 18 Oct 2026
                  </span>
                </div>

                {/* Story Rows */}
                <div className="flex flex-1 flex-col gap-[16px] w-full min-w-0">
                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                      }}
                    >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        FEATURE · REPAIR SHOP
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        Small repairs, lasting stories
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Ria Santos · 6 min read
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                        }}
                      >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        FEATURE · SECOND HAND
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        The second life of a course book
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Joaquin Lim · 6 min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#f1c9d0]" />
            </div>

            {/* SCI-TECH BLOCK */}
            <div className="flex flex-col gap-[16px] w-full">
              <div className="flex items-center justify-between text-[#2f8f83] w-full">
                <h3 className="text-[44px] md:text-[56px] font-black font-display leading-[0.88]">
                  SCI-TECH
                </h3>
                <Link
                  href="/sci-tech"
                  className="text-[13px] font-bold text-[#2f8f83] hover:underline tracking-[-0.13px]"
                >
                  See all →
                </Link>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px] items-start w-full">
                {/* Big Story Card */}
                <div className="w-full md:w-[480px] shrink-0 flex flex-col gap-[8px]">
                  <div
                    className="w-full h-[253px] rounded-[4px] overflow-hidden relative"
                    style={{
                      backgroundImage:
                        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
                    }}
                  >
                    <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                      PHOTO
                    </span>
                    <img
                      src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                      alt="Badge"
                      className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase font-sans pt-1">
                    SCI-TECH · HEAT MAP
                  </span>
                  <Link
                    href="#"
                    className="text-[21px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.22] tracking-[-0.42px] font-sans transition-colors"
                  >
                    Mapping the heat, one campus corner at a time
                  </Link>
                  <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px] font-sans">
                    By Elle Navarro · 18 Oct 2026
                  </span>
                </div>

                {/* Story Rows */}
                <div className="flex flex-1 flex-col gap-[16px] w-full min-w-0">
                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                      }}
                    >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        SCI-TECH · MEDIA LITERACY
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        Before you trust the answer, check the source
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Elle Navarro · 5 min read
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-[#f1c9d0] pb-[16px] flex gap-[16px] items-start w-full">
                    <div
                      className="size-[120px] rounded-[4px] shrink-0 overflow-hidden relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
                      }}
                    >
                      <span className="absolute bottom-[24px] left-[12px] text-[11px] font-semibold text-white tracking-[0.66px]">
                        PHOTO
                      </span>
                      <img
                        src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                        alt="Badge"
                        className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] opacity-85 object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0 font-sans">
                      <span className="text-[11px] font-bold text-[#b51d42] tracking-[0.88px] uppercase">
                        SCI-TECH · RAIN GAUGE
                      </span>
                      <Link
                        href="#"
                        className="text-[17px] font-bold text-[#2b2226] hover:text-[#b51d42] leading-[1.3] tracking-[-0.17px] transition-colors"
                      >
                        What the rain gauge on the roof is telling us
                      </Link>
                      <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                        By Joaquin Lim · 4 min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right CATCH UP card (Figma 5:211) */}
          <div className="w-full xl:w-[320px] xl:shrink-0 border-[1.5px] border-[#e0506a] rounded-[4px] p-[18px] bg-white flex flex-col gap-[4px]">
            <h3 className="text-[34px] sm:text-[42px] font-black text-[#b51d42] font-display leading-[0.88] whitespace-nowrap">
              CATCH UP
            </h3>
            <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px] font-sans pb-1">
              The stories that matter this week, in one line each.
            </p>

            <div className="flex flex-col">
              <div className="border-t border-[#f1c9d0] py-[12px] flex gap-[10px] items-start w-full">
                <span className="text-[34px] font-black text-[#e0506a] font-display leading-[0.88] shrink-0">
                  1
                </span>
                <div className="flex flex-col gap-[4px] flex-1 min-w-0 font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] tracking-[-0.15px] leading-[1.25]">
                    The long way to class
                  </span>
                  <span className="text-[13.5px] text-[#6c5a61] tracking-[-0.135px] leading-[1.4]">
                    Commutes take up to two hours for some students.
                  </span>
                </div>
              </div>

              <div className="border-t border-[#f1c9d0] py-[12px] flex gap-[10px] items-start w-full">
                <span className="text-[34px] font-black text-[#e0506a] font-display leading-[0.88] shrink-0">
                  2
                </span>
                <div className="flex flex-col flex-1 min-w-0 font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] tracking-[-0.15px] leading-[1.25]">
                    A seat at the table
                  </span>
                </div>
              </div>

              <div className="border-t border-[#f1c9d0] py-[12px] flex gap-[10px] items-start w-full">
                <span className="text-[34px] font-black text-[#e0506a] font-display leading-[0.88] shrink-0">
                  3
                </span>
                <div className="flex flex-col flex-1 min-w-0 font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] tracking-[-0.15px] leading-[1.25]">
                    Mapping the heat
                  </span>
                </div>
              </div>

              <div className="border-t border-[#f1c9d0] py-[12px] flex gap-[10px] items-start w-full">
                <span className="text-[34px] font-black text-[#e0506a] font-display leading-[0.88] shrink-0">
                  4
                </span>
                <div className="flex flex-col flex-1 min-w-0 font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] tracking-[-0.15px] leading-[1.25]">
                    Student councils open the floor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
