import React from "react";
import Link from "next/link";

export default function CommunityLensAndListen() {
  const photos = [
    "linear-gradient(127.86deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
    "linear-gradient(127.86deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
    "linear-gradient(127.86deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
    "linear-gradient(127.86deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
  ];

  const podcasts = [
    {
      title: "Ep. 4: The commute, out loud",
      desk: "News Desk",
      duration: "21 min",
    },
    {
      title: "Ep. 3: Who decides what counts as news?",
      desk: "News Desk",
      duration: "18 min",
    },
    {
      title: "Ep. 2: Writing columns without shouting",
      desk: "Opinion Desk",
      duration: "22 min",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] px-5 md:px-[100px] pb-[64px]">
      <div className="flex flex-col lg:flex-row gap-[40px] items-start w-full">
        {/* Community lens (720px) */}
        <div className="w-full lg:w-[720px] shrink-0 flex flex-col gap-[16px]">
          <div className="flex items-center justify-between text-[#b51d42] w-full">
            <h3 className="text-[44px] md:text-[56px] font-black font-display leading-[0.88]">
              COMMUNITY LENS
            </h3>
            <Link
              href="/gallery"
              className="text-[14px] font-bold text-[#b51d42] hover:underline tracking-[-0.14px]"
            >
              Image board →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[12px] w-full">
            {photos.map((grad, i) => (
              <div
                key={i}
                className="w-full h-[220px] rounded-[4px] relative overflow-hidden shrink-0"
                style={{ backgroundImage: grad }}
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
            ))}
          </div>
        </div>

        {/* Listen / Podcasts (480px) */}
        <div className="flex-1 flex flex-col gap-[4px] w-full min-w-0">
          <div className="flex items-center justify-between text-[#b51d42] w-full mb-1">
            <h3 className="text-[44px] md:text-[56px] font-black font-display leading-[0.88]">
              LISTEN
            </h3>
            <Link
              href="/podcasts"
              className="text-[14px] font-bold text-[#b51d42] hover:underline tracking-[-0.14px]"
            >
              All episodes →
            </Link>
          </div>

          <div className="flex flex-col">
            {podcasts.map((ep, i) => (
              <div
                key={i}
                className="border-b border-[#f1c9d0] py-[12px] flex gap-[14px] items-center w-full group cursor-pointer"
              >
                <div className="w-[44px] h-[44px] rounded-full bg-[#b51d42] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <span className="text-[14px] ml-0.5">▶</span>
                </div>
                <div className="flex flex-col gap-[2px] flex-1 min-w-0 font-sans">
                  <span className="text-[15px] font-bold text-[#2b2226] group-hover:text-[#b51d42] leading-[1.3] tracking-[-0.15px] transition-colors">
                    {ep.title}
                  </span>
                  <span className="text-[13px] text-[#6c5a61] tracking-[-0.13px]">
                    {ep.desk} · {ep.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
