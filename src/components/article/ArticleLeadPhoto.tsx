import React from "react";

interface ArticleLeadPhotoProps {
  label?: string;
  gradient?: string;
  caption?: string;
}

export default function ArticleLeadPhoto({
  label = "LEAD PHOTO · 16:9",
  gradient = "linear-gradient(150.62deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
  caption = "Caption and photo credit go here. Photo by the Photo Desk.",
}: ArticleLeadPhotoProps) {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-[100px] lg:px-[180px] pb-[40px] flex flex-col gap-[8px] items-start"
      data-node-id="6:570"
      data-name="lead photo"
    >
      <div
        className="w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[608px] rounded-[4px] overflow-hidden relative shrink-0"
        style={{ backgroundImage: gradient }}
        data-node-id="6:571"
        data-name="photo"
      >
        <span className="absolute bottom-[16px] left-[16px] font-sans font-semibold text-[11px] text-white tracking-[0.66px]">
          {label}
        </span>
        <img
          src="/assets/5aa9ab8a17a2061cb6b688106cf1fde9c726de26.png"
          alt="Badge"
          className="absolute bottom-[14px] right-[14px] size-[34px] opacity-85 object-contain pointer-events-none"
        />
      </div>

      <p
        className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px]"
        data-node-id="6:574"
      >
        {caption}
      </p>
    </div>
  );
}
