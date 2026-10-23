import React from "react";
import Link from "next/link";

export interface ImportantStoryItem {
  id: string;
  num: string;
  title: string;
  dek?: string;
  href?: string;
}

interface SectionImportantSidebarProps {
  title?: string;
  subtitle?: string;
  items?: ImportantStoryItem[];
}

export default function SectionImportantSidebar({
  title = "IMPORTANT",
  subtitle = "What readers should not miss.",
  items = [
    {
      id: "1",
      num: "1",
      title: "The long way to class: students rethink the daily commute",
      dek: "Commutes take up to two hours for some students, a week of travel diaries shows.",
      href: "/article/the-long-way-to-class",
    },
    {
      id: "2",
      num: "2",
      title: "A seat at the table means little if no one is listening",
      href: "/article/a-seat-at-the-table",
    },
    {
      id: "3",
      num: "3",
      title: "Mapping the heat, one campus corner at a time",
      href: "/article/mapping-the-heat",
    },
    {
      id: "4",
      num: "4",
      title: "Student councils open the floor to everyday concerns",
      href: "/article/student-councils-open-floor",
    },
  ],
}: SectionImportantSidebarProps) {
  return (
    <aside
      className="w-full lg:w-[300px] shrink-0 bg-white border-[1.5px] border-[#e0506a] border-solid rounded-[4px] p-[18px] flex flex-col gap-[4px]"
      data-node-id="6:456"
      data-name="important stories"
    >
      {/* Box Header */}
      <h3
        className="font-display font-black leading-[0.88] not-italic text-[42px] text-[#b51d42] whitespace-nowrap tracking-wide select-none"
        data-node-id="6:457"
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="font-sans font-normal text-[13px] text-[#6c5a61] tracking-[-0.13px] pb-1"
        data-node-id="6:458"
      >
        {subtitle}
      </p>

      {/* Numbered Story List */}
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.id}
            className="border-t border-[#f1c9d0] border-solid py-[12px] flex gap-[10px] items-start"
          >
            {/* Rose Bold Number */}
            <span className="font-display font-black leading-[0.88] not-italic text-[34px] text-[#e0506a] whitespace-nowrap shrink-0 w-[16px] select-none pt-0.5">
              {item.num}
            </span>

            {/* Title & optional Dek */}
            <div className="flex-1 min-w-0 flex flex-col gap-[4px] items-start">
              <Link
                href={item.href || `/article/${item.id}`}
                className="font-sans font-bold leading-[1.25] text-[15px] text-[#2b2226] tracking-[-0.15px] hover:text-[#b51d42] transition-colors"
              >
                {item.title}
              </Link>
              {item.dek && (
                <p className="font-sans font-normal leading-[1.4] text-[13.5px] text-[#6c5a61] tracking-[-0.135px]">
                  {item.dek}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
