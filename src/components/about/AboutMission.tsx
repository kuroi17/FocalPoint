import React from "react";

export default function AboutMission() {
  const cards = [
    {
      title: "MISSION",
      description:
        "Bring stories into focus and amplify voices with purpose, reported accurately and fairly.",
    },
    {
      title: "IDENTITY",
      description:
        "Pink, bold and youthful. Fokie, a baby Philippine Eagle, stands for hope, resilience and something rare.",
    },
    {
      title: "PURPOSE",
      description:
        "Empower the next generation of student journalists by giving them a real newsroom to learn in.",
    },
  ];

  return (
    <section
      id="mission"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pt-[40px] pb-[64px] flex flex-col gap-[24px]"
      data-node-id="8:830"
      data-name="mission"
    >
      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#fff4f5] flex flex-col gap-[10px] items-start p-[22px] rounded-[4px]"
          >
            <h3 className="font-display font-black text-[40px] lg:text-[48px] leading-[0.88] text-[#b51d42] tracking-wide">
              {card.title}
            </h3>
            <p className="font-sans font-normal text-[15px] lg:text-[16px] text-[#2b2226] leading-[1.55] tracking-[-0.16px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Corrections Policy */}
      <div
        className="bg-[#fff4f5] flex flex-col gap-[6px] items-start p-[20px] rounded-[4px] w-full"
        data-node-id="8:841"
        data-name="corrections policy"
      >
        <span className="font-sans font-bold text-[12px] text-[#b51d42] tracking-[0.96px] uppercase">
          CORRECTIONS POLICY
        </span>
        <p className="font-sans font-normal text-[15px] lg:text-[16px] text-[#2b2226] leading-[1.6] tracking-[-0.16px]">
          When we get something wrong, we fix it, say what changed, and date the
          correction at the bottom of the story. Spot an error? Tell Fokie using
          the button in the corner.
        </p>
      </div>
    </section>
  );
}
