import React from "react";

export default function PointsRules() {
  const rules = [
    { label: "Open Focalpoint today", pts: "+5" },
    { label: "Read a story to the end", pts: "+2" },
    { label: "Guess the Word of the Day", pts: "+3" },
    { label: "React to a story", pts: "+1" },
    { label: "Send feedback to Fokie", pts: "+3" },
    { label: "Submit a photo", pts: "+10" },
  ];

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* Section Head */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full whitespace-nowrap gap-1">
        <h2 className="font-display font-black text-[52px] md:text-[78px] text-[#b51d42] leading-[0.88]">
          FOKIE POINTS
        </h2>
        <span className="text-[12px] text-[#6c5a61] tracking-[0.72px] sm:mb-1">
          PRETEND POINTS · NO MONEY VALUE
        </span>
      </div>

      {/* Description */}
      <p className="text-[16px] text-[#2b2226] leading-[1.5] tracking-[-0.16px]">
        Fokie Points reward reading and taking part. Spend them on profile frames.
        They stay on this device.
      </p>

      {/* How to earn list */}
      <div className="flex flex-col w-full text-[15px] text-[#2b2226] tracking-[-0.15px] mt-1">
        {rules.map((rule, idx) => (
          <div
            key={idx}
            className="border-b border-[#f1c9d0] flex items-start justify-between py-[8px] w-full"
          >
            <span className="font-normal">{rule.label}</span>
            <span className="font-bold text-[#2b2226]">{rule.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
