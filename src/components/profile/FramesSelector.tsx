import React from "react";

export interface FrameItem {
  id: string;
  name: string;
  cost: string;
  color: string;
  status: "wearing" | "wear" | "unlock";
}

interface FramesSelectorProps {
  frames: FrameItem[];
  activeFrame: string;
  onFrameClick: (frame: FrameItem) => void;
}

export default function FramesSelector({
  frames,
  activeFrame,
  onFrameClick,
}: FramesSelectorProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full pt-1">
      {/* Title */}
      <h3 className="font-display font-black text-[56px] text-[#b51d42] leading-[0.88]">
        FRAMES
      </h3>

      {/* Grid of frames */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[14px] w-full">
        {frames.map((frame) => {
          const isWearing = activeFrame === frame.id;
          return (
            <div
              key={frame.id}
              className="border-[1.5px] border-[#f1c9d0] rounded-[4px] p-[14px] flex flex-col items-center gap-[6px] bg-white"
            >
              {/* Avatar preview with frame color */}
              <div
                className="size-[64px] rounded-[32px] border-4 shrink-0 relative overflow-hidden"
                style={{ borderColor: frame.color }}
              >
                <div className="absolute inset-0 bg-[#ffe1e5] rounded-[32px]" />
                <img
                  src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
                  alt={frame.name}
                  className="absolute inset-0 size-full object-cover rounded-[32px]"
                />
              </div>

              {/* Title */}
              <p className="font-bold text-[14px] text-[#2b2226] tracking-[-0.14px] text-center">
                {frame.name}
              </p>

              {/* Subtitle / Cost */}
              <p className="text-[13px] text-[#6c5a61] tracking-[-0.13px] text-center">
                {frame.cost}
              </p>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onFrameClick(frame)}
                className={`w-full py-[12px] px-[18px] rounded-[4px] font-bold text-[14px] tracking-[-0.14px] text-center transition mt-auto ${
                  isWearing
                    ? "bg-[#b51d42] text-white cursor-default"
                    : "border-[1.5px] border-[#b51d42] text-[#b51d42] hover:bg-[#fff4f5] cursor-pointer"
                }`}
              >
                {isWearing
                  ? "Wearing"
                  : frame.status === "unlock"
                  ? "Unlock"
                  : "Wear"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
