import React from "react";

export default function AboutHeroBanner() {
  return (
    <section
      className="relative w-full h-[380px] sm:h-[460px] md:h-[540px] overflow-hidden select-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #fff5f7 0%, #f6c0cb 55%, #e58599 100%)",
      }}
      data-node-id="8:792"
      data-name="about header"
    >
      {/* Background Swirl Vector Layer */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-90 z-0"
        data-node-id="8:793"
      >
        <img
          src="/assets/8e59afb1dfd565ead368cb4d2fd8ba5f50bd4920.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Student Illustration */}
      <div
        className="absolute left-[-20px] sm:left-[0px] lg:left-[14px] top-[40px] sm:top-[50px] lg:top-[66px] w-[260px] sm:w-[380px] lg:w-[540px] h-auto max-h-[494px] drop-shadow-[0px_10px_22px_rgba(120,20,41,0.18)] pointer-events-none z-10"
        data-node-id="8:801"
      >
        <img
          src="/assets/63bc3d01253f0ca6c58e225411ab567fbdc3147e.png"
          alt="Student Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Center Title Box (Rotated 2.5deg) */}
      <div
        className="absolute left-1/2 top-[70px] sm:top-[110px] lg:top-[150px] -translate-x-1/2 z-20 flex items-center justify-center"
        data-node-id="2008:1703"
      >
        <div className="rotate-[2.5deg] shadow-lg">
          <div
            className="bg-white border-2 border-[#bdb5b8] border-solid px-6 sm:px-8 lg:px-[30px] pt-2 sm:pt-3 lg:pt-[10px] pb-3 sm:pb-4 lg:pb-[14px] relative"
            data-name="title box"
          >
            <h1
              className="font-sans font-black leading-none text-[#a8283f] text-[42px] sm:text-[64px] lg:text-[86px] tracking-[-2px] sm:tracking-[-3px] lg:tracking-[-4.3px] whitespace-nowrap"
              data-node-id="2008:1704"
            >
              FOCALPOINT
            </h1>
            {/* 4 Corner brackets */}
            <span className="absolute -top-[7px] -left-[7px] size-[12px] sm:size-[14px] bg-white border-[#bdb5b8] border-[1.5px] border-solid" />
            <span className="absolute -top-[7px] -right-[7px] size-[12px] sm:size-[14px] bg-white border-[#bdb5b8] border-[1.5px] border-solid" />
            <span className="absolute -bottom-[7px] -left-[7px] size-[12px] sm:size-[14px] bg-white border-[#bdb5b8] border-[1.5px] border-solid" />
            <span className="absolute -bottom-[7px] -right-[7px] size-[12px] sm:size-[14px] bg-white border-[#bdb5b8] border-[1.5px] border-solid" />
          </div>
        </div>
      </div>

      {/* Tagline Block (Rotated 3deg) */}
      <div
        className="absolute left-1/2 top-[175px] sm:top-[235px] lg:top-[300px] -translate-x-[45%] z-20 flex flex-col items-start"
        data-node-id="2008:1709"
      >
        <div className="rotate-3 flex flex-col gap-[4px] items-start">
          <p
            className="font-sans font-extrabold text-[#a8283f] text-[20px] sm:text-[28px] lg:text-[38px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.28px] whitespace-nowrap leading-tight"
            data-node-id="2008:1710"
          >
            Bringing Stories into Focus,
          </p>
          <div
            className="bg-[#a8283f] px-2.5 sm:px-3 py-1 flex flex-col items-start text-white shadow-md"
            data-node-id="2008:1711"
          >
            <span
              className="font-sans font-extrabold text-[18px] sm:text-[26px] lg:text-[34px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] whitespace-nowrap leading-[0.88]"
              data-node-id="2008:1712"
            >
              Amplifying Voices
            </span>
            <span
              className="font-sans font-extrabold text-[18px] sm:text-[26px] lg:text-[34px] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2.04px] whitespace-nowrap leading-[0.88]"
            >
              with Purpose.
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Banner Rule (Rotated 0.6deg) */}
      <div
        className="hidden md:block absolute left-1/2 top-[462px] -translate-x-1/2 w-[1100px] z-10 pointer-events-none"
        data-node-id="2008:1713"
      >
        <div className="rotate-[0.6deg] bg-[#bdb5b8] h-[2px] w-full" />
      </div>

      {/* Right Student Illustration */}
      <div
        className="absolute right-[0px] sm:right-[10px] lg:right-[106px] top-[40px] sm:top-[50px] lg:top-[64px] w-[160px] sm:w-[220px] lg:w-[298px] h-auto max-h-[486px] drop-shadow-[0px_10px_22px_rgba(120,20,41,0.18)] pointer-events-none z-10"
        data-node-id="8:802"
      >
        <img
          src="/assets/276ee10a29c498b449d84d89e7ce48d8a39e326a.png"
          alt="Student Illustration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wave Edge SVG Divider across bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40px] sm:h-[52px] z-20 pointer-events-none"
        data-node-id="8:813"
      >
        <img
          src="/assets/16e786132dc25c16b42c532d3ec4afb299eacfe6.svg"
          alt=""
          className="w-full h-full object-cover sm:object-fill"
        />
      </div>
    </section>
  );
}
