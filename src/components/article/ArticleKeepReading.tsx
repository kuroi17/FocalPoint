import React from "react";
import Link from "next/link";

interface KeepReadingStory {
  tag: string;
  title: string;
  authorDate: string;
  photoGradient: string;
  href: string;
}

interface ArticleKeepReadingProps {
  categorySlug?: string;
  categoryName?: string;
  stories?: KeepReadingStory[];
}

export default function ArticleKeepReading({
  categorySlug = "news",
  categoryName = "News",
  stories = [
    {
      tag: "NEWS · STUDY SPACES",
      title: "When the library closes before the studying ends",
      authorDate: "By Migs Dela Cruz · 18 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
      href: "/article/when-the-library-closes",
    },
    {
      tag: "NEWS · CANTEEN",
      title: "What a hundred pesos buys at the campus canteen",
      authorDate: "By Bea Reyes · 17 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
      href: "/article/what-a-hundred-pesos-buys",
    },
    {
      tag: "NEWS · AFTER THE STORM",
      title: "After the rain, a closer look at the paths we share",
      authorDate: "By Ana Villanueva · 16 Oct 2026",
      photoGradient:
        "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
      href: "/article/after-the-rain",
    },
  ],
}: ArticleKeepReadingProps) {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] pt-[56px] pb-[64px] flex flex-col gap-[24px] items-start"
      data-node-id="6:669"
      data-name="keep reading"
    >
      {/* Rose top divider line */}
      <div
        className="bg-[#e0506a] h-[1.5px] opacity-70 w-full shrink-0"
        data-node-id="6:670"
      />

      {/* Header Row */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 text-[#b51d42]"
        data-node-id="6:671"
      >
        <h2
          className="font-display font-black leading-[0.88] not-italic text-[48px] sm:text-[64px] lg:text-[78px] tracking-wide select-none"
          data-node-id="6:672"
        >
          KEEP READING
        </h2>
        <Link
          href={`/${categorySlug}`}
          className="font-sans font-bold text-[14px] text-[#b51d42] hover:underline whitespace-nowrap self-end sm:self-auto"
          data-node-id="6:673"
        >
          More from {categoryName} →
        </Link>
      </div>

      {/* 3 Story Cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full"
        data-node-id="6:674"
      >
        {stories.map((st, i) => (
          <article
            key={i}
            className="flex flex-col gap-[8px] items-start w-full group"
          >
            {/* Card photo */}
            <div
              className="h-[253px] w-full rounded-[4px] overflow-hidden relative shrink-0"
              style={{ backgroundImage: st.photoGradient }}
            >
              <span className="absolute bottom-[12px] left-[12px] font-sans font-semibold text-[11px] text-white tracking-[0.66px]">
                PHOTO
              </span>
              <img
                src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
                alt="Badge"
                className="absolute bottom-[12px] right-[12px] size-[34px] opacity-85 object-contain pointer-events-none"
              />
            </div>

            <div className="h-[4px]" />

            {/* Tag */}
            <p className="font-sans font-bold text-[11px] text-[#b51d42] tracking-[0.88px] uppercase">
              {st.tag}
            </p>

            {/* Title */}
            <h3 className="font-sans font-bold text-[21px] text-[#2b2226] tracking-[-0.42px] leading-[1.22] group-hover:text-[#b51d42] transition-colors">
              <Link href={st.href}>{st.title}</Link>
            </h3>

            {/* Byline */}
            <p className="font-sans text-[13px] text-[#6c5a61] tracking-[-0.13px]">
              {st.authorDate}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
