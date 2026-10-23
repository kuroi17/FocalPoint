import React from "react";

interface ArticlePullQuoteProps {
  categoryTitle?: string;
  quotePrefix?: string;
  quoteHighlight?: string;
}

export default function ArticlePullQuote({
  categoryTitle = "NEWS",
  quotePrefix = "The route has not changed. ",
  quoteHighlight = "The room left in her day has.",
}: ArticlePullQuoteProps) {
  return (
    <figure
      className="border-[1.5px] border-[#e0506a] border-solid flex flex-col gap-[20px] items-start px-[26px] py-[34px] relative shrink-0 w-full overflow-hidden bg-white my-6 select-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 95% 95%, rgba(253,240,207,1) 0%, rgba(253,240,207,0) 60%), radial-gradient(circle at 5% 5%, rgba(251,225,230,1) 0%, rgba(251,225,230,0) 50%), #ffffff",
      }}
      data-node-id="6:582"
      data-name="pull quote"
    >
      {/* 100% full-color saturation watermark seal on the right */}
      <div
        className="absolute top-[-8px] right-0 w-[136px] h-[414px] overflow-hidden pointer-events-none z-0"
        data-node-id="6:587"
      >
        <img
          src="/assets/6f6bce4aafdf388fb68d83d9ae7a69fd03536b89.png"
          alt="Watermark"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4 Corner brackets */}
      <span className="absolute -top-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
      <span className="absolute -top-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
      <span className="absolute -bottom-[6px] -left-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />
      <span className="absolute -bottom-[6px] -right-[6px] size-[12px] bg-white border-[1.5px] border-[#e0506a] pointer-events-none" />

      {/* Big category heading */}
      <span
        className="font-display font-black leading-[0.86] not-italic text-[90px] sm:text-[150px] lg:text-[233px] text-[#a8283f] whitespace-nowrap z-10"
        data-node-id="6:583"
      >
        {categoryTitle}
      </span>

      <div className="bg-[rgba(107,100,103,0.75)] h-px w-[422px] max-w-full z-10 shrink-0" />

      {/* Two-tone Pull Quote Text */}
      <blockquote
        className="font-sans font-semibold text-[22px] sm:text-[30px] tracking-[-0.9px] leading-[1.08] w-[422px] max-w-full z-10 not-italic"
        data-node-id="4005:1708"
      >
        <span className="text-[#5f5a5c]">{quotePrefix}</span>
        <span className="text-[#a8283f]">{quoteHighlight}</span>
      </blockquote>

      <div className="bg-[rgba(107,100,103,0.75)] h-px w-[422px] max-w-full z-10 shrink-0" />
    </figure>
  );
}
