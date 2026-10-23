"use client";

import React, { useState } from "react";

export default function ArticleReactions() {
  const [reactions, setReactions] = useState([
    { emoji: "❤️", count: 24, active: true },
    { emoji: "💡", count: 12, active: false },
    { emoji: "🤔", count: 9, active: false },
    { emoji: "👏", count: 17, active: false },
  ]);

  const toggle = (index: number) => {
    setReactions((prev) =>
      prev.map((r, i) =>
        i === index
          ? {
              ...r,
              count: r.active ? r.count - 1 : r.count + 1,
              active: !r.active,
            }
          : r
      )
    );
  };

  return (
    <div
      className="border-[#f1c9d0] border-t border-b border-solid flex gap-[8px] items-center py-[16px] w-full"
      data-node-id="6:610"
      data-name="reactions"
    >
      <span className="font-sans font-bold text-[14px] text-[#2b2226] tracking-[-0.14px] mr-1">
        React:
      </span>
      {reactions.map((r, i) => (
        <button
          key={r.emoji}
          type="button"
          onClick={() => toggle(i)}
          className={`border-[1.5px] border-solid px-[12px] py-[7px] rounded-[99px] font-sans font-semibold text-[14px] text-[#2b2226] tracking-[-0.14px] whitespace-nowrap transition-colors flex items-center gap-1.5 ${
            r.active
              ? "bg-[#ffe1e5] border-[#b51d42]"
              : "bg-white border-[#f1c9d0] hover:border-[#b51d42]"
          }`}
        >
          <span>{r.emoji}</span>
          <span>{r.count}</span>
        </button>
      ))}
    </div>
  );
}
