"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [isSweeping, setIsSweeping] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show full loading sequence on route transition or initial mount
    setLoading(true);
    setIsSweeping(false);

    // Keep visible for ~2.2s so the user can enjoy the floating feather effects
    const sweepTimer = setTimeout(() => {
      setIsSweeping(true);

      // Exit wipe: feather sweeps left to right over 850ms, then remove loader
      const exitTimer = setTimeout(() => {
        setLoading(false);
      }, 850);

      return () => clearTimeout(exitTimer);
    }, 2200);

    return () => clearTimeout(sweepTimer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] overflow-hidden select-none transition-all duration-700 ${
        isSweeping ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{
        transition: isSweeping
          ? "opacity 0.6s ease-in 0.25s, clip-path 0.85s cubic-bezier(0.4, 0, 0.2, 1)"
          : undefined,
        clipPath: isSweeping ? "inset(0 0 0 100%)" : "inset(0 0 0 0%)",
      }}
      data-name="loading screen · desktop"
    >
      {/* Container for responsive floating feathers based on 1440x900 Figma frame */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="relative w-[1440px] h-[900px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.65] sm:scale-[0.8] md:scale-95 lg:scale-100 transition-transform origin-center">
          {/* Pair 1 */}
          <div className="absolute flex h-[40.598px] items-center justify-center left-[-41.38px] top-[20px] w-[57.692px] animate-feather-float-slow">
            <div className="flex-none rotate-60">
              <div className="h-[59.328px] relative w-[12.625px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3f3c0d1c4e1c7e1cd2f45025bb263be21340b4cc.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[53px] items-center justify-center left-[-81.8px] top-[20px] w-[91.799px] animate-feather-float-slow">
            <div className="flex-none rotate-60">
              <div className="h-[106px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/341eb589e53120cf5ca4076d9c2687bbeed9f717.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 2 */}
          <div className="absolute flex h-[75.809px] items-center justify-center left-[130.32px] top-[283px] w-[32.059px] animate-feather-float-fast" style={{ animationDelay: "0.4s" }}>
            <div className="flex-none rotate-13">
              <div className="h-[74.16px] relative w-[15.782px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a7ca0ccb4163a3d767241a31366d1892cac4c779.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[48px] items-center justify-center left-[134px] top-[328px] w-[11.846px] animate-feather-float-fast" style={{ animationDelay: "0.4s" }}>
            <div className="flex-none rotate-[13.86deg]">
              <div className="h-[49.44px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/f9c4b158908497044509eadf41b34be3dbe981b8.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 3 */}
          <div className="absolute flex h-[84.368px] items-center justify-center left-[284px] top-[535.41px] w-[65.464px] animate-feather-float-slow" style={{ animationDelay: "0.8s" }}>
            <div className="-rotate-34 flex-none">
              <div className="h-[88.992px] relative w-[18.938px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/262db49d597976982df8101ecf93175bdd3d9475.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[54px] items-center justify-center left-[317px] top-[578px] w-[38px] animate-feather-float-slow" style={{ animationDelay: "0.8s" }}>
            <div className="flex-none rotate-[-35.13deg]">
              <div className="h-[66.03px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/cd522595ff3ef4517451daca4a42ec9e10932991.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 4 */}
          <div className="absolute flex h-[60.808px] items-center justify-center left-[379px] top-[49px] w-[53.042px] animate-feather-float-fast" style={{ animationDelay: "1.2s" }}>
            <div className="flex-none rotate-39">
              <div className="h-[66.744px] relative w-[14.203px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/85334f4303240a0de6b73886053048f01e077373.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[47px] items-center justify-center left-[373px] top-[74px] w-[36.707px] animate-feather-float-fast" style={{ animationDelay: "1.2s" }}>
            <div className="flex-none rotate-[37.99deg]">
              <div className="h-[59.636px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/68a8c4b2570b8d38ade9dcd03d02bf36e5f1aa32.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 5 */}
          <div className="absolute flex h-[83.198px] items-center justify-center left-[558px] top-[309.58px] w-[28.544px] animate-feather-float-slow" style={{ animationDelay: "0.3s" }}>
            <div className="-rotate-8 flex-none">
              <div className="h-[81.576px] relative w-[17.36px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1d86738267cad2dc1a913f403b42887acde40e12.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[55px] items-center justify-center left-[575px] top-[356px] w-[5px] animate-feather-float-slow" style={{ animationDelay: "0.3s" }}>
            <div className="flex-none rotate-[-5.19deg]">
              <div className="h-[55.227px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/d8a8b198d2bb4b8af15e60b022f1526db496c99a.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 6 */}
          <div className="absolute flex h-[44.371px] items-center justify-center left-[695px] top-[564.66px] w-[55.84px] animate-feather-float-fast" style={{ animationDelay: "0.9s" }}>
            <div className="-rotate-55 flex-none">
              <div className="h-[59.328px] relative w-[12.625px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/dcff0263c6caed9556304dcf89e0eb841b96d32b.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[20px] items-center justify-center left-[728px] top-[589px] w-[26px] animate-feather-float-fast" style={{ animationDelay: "0.9s" }}>
            <div className="flex-none rotate-[-52.43deg]">
              <div className="h-[32.802px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/dae83650002b1873b9631a38849a2821610a715a.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 7 */}
          <div className="absolute flex h-[75.407px] items-center justify-center left-[809.08px] top-[78px] w-[37.926px] animate-feather-float-slow" style={{ animationDelay: "0.6s" }}>
            <div className="flex-none rotate-18">
              <div className="h-[74.16px] relative w-[15.782px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/3cef90e08d0e690d4a62ced8e04989450fbc42e6.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[57px] items-center justify-center left-[809px] top-[116px] w-[18.756px] animate-feather-float-slow" style={{ animationDelay: "0.6s" }}>
            <div className="flex-none rotate-[18.21deg]">
              <div className="h-[60.007px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/727614a6bc5f99bc44a2cef6df4d782c8d5f075e.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 8 */}
          <div className="absolute flex h-[87.015px] items-center justify-center left-[969px] top-[331.82px] w-[59.708px] animate-feather-float-fast" style={{ animationDelay: "1.1s" }}>
            <div className="-rotate-29 flex-none">
              <div className="h-[88.992px] relative w-[18.938px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/be0f471a09abefd9a1b03a25e52737ee72e87d15.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[54px] items-center justify-center left-[999px] top-[375px] w-[30px] animate-feather-float-fast" style={{ animationDelay: "1.1s" }}>
            <div className="flex-none rotate-[-29.05deg]">
              <div className="h-[61.774px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/e51ee5f2f1a645d1f404fa4d54002ee43e1a001b.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 9 */}
          <div className="absolute flex h-[57.878px] items-center justify-center left-[1059.64px] top-[604px] w-[56.581px] animate-feather-float-slow" style={{ animationDelay: "0.5s" }}>
            <div className="flex-none rotate-44">
              <div className="h-[66.744px] relative w-[14.203px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/274b06a2517493f00bd799793b8b5e7b049703b5.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[43px] items-center justify-center left-[1057px] top-[624px] w-[39.633px] animate-feather-float-slow" style={{ animationDelay: "0.5s" }}>
            <div className="flex-none rotate-[42.67deg]">
              <div className="h-[58.479px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/215da190b53f040d64c26a2ee05f682878f56ee1.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Pair 10 */}
          <div className="absolute flex h-[82.373px] items-center justify-center left-[1243px] top-[106.09px] w-[21.605px] animate-feather-float-fast" style={{ animationDelay: "0.2s" }}>
            <div className="-rotate-3 flex-none">
              <div className="h-[81.576px] relative w-[17.36px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/1af488c20684d66d09081a7eb9443595b4b8eef7.svg" />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[105.855px] items-center justify-center left-[1243px] top-[107px] w-[5.548px] animate-feather-float-fast" style={{ animationDelay: "0.2s" }}>
            <div className="-rotate-3 flex-none">
              <div className="h-[106px] relative w-0">
                <div className="absolute inset-[0_-0.7px]">
                  <img alt="" className="block max-w-none size-full" src="/assets/32db27402e0756eeb4809a7a5f75c93bbf85b7b3.svg" />
                </div>
              </div>
            </div>
          </div>

          {/* Static presence of the sweep feather in background when not yet sweeping */}
          {!isSweeping && (
            <div className="absolute flex h-[947.188px] items-center justify-center left-[1015.74px] top-[-60px] w-[415.672px] opacity-80 pointer-events-none">
              <div className="flex-none rotate-14">
                <div className="h-[927px] relative w-[197.27px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src="/assets/a5e816c5740dcf4f791a38b2d52b37662dcdf21b.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Central Content: Ring, Spinner, Logo & Title */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <div className="relative size-[118px] flex items-center justify-center">
          {/* Outer ring */}
          <img
            alt=""
            className="absolute inset-0 size-full block pointer-events-none"
            src="/assets/fa42558e8475bac38b42461cbf3df46d6853397d.svg"
          />

          {/* Spinning arc */}
          <div className="absolute inset-0 size-full animate-spin">
            <div className="absolute top-0 right-0 w-1/2 h-1/2">
              <img
                alt=""
                className="block size-full"
                src="/assets/771f3ea60eb0cf559e35800e9437ab2b2fc32a24.svg"
              />
            </div>
          </div>

          {/* Central Logo */}
          <div className="relative w-[64px] h-[66px] flex items-center justify-center">
            <img
              src="/assets/e664502cc413a3343a7e044f4c1bca0d4ab24e10.png"
              alt="Focalpoint Logo"
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Text */}
        <h2 className="font-display font-black text-[28px] sm:text-[34px] md:text-[36px] text-[#b51d42] leading-[0.88] whitespace-nowrap uppercase tracking-normal">
          BRINGING STORIES INTO FOCUS…
        </h2>
      </div>

      {/* The big sweep feather that sweeps left-to-right and wipes the screen away */}
      {isSweeping && (
        <div className="fixed inset-y-0 left-0 w-screen h-screen pointer-events-none z-[10000] flex items-center justify-center">
          <div className="animate-feather-sweep flex-none rotate-14">
            <div className="h-[120vh] relative w-[240px]">
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src="/assets/a5e816c5740dcf4f791a38b2d52b37662dcdf21b.svg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom design note from Figma */}
      <p className="absolute bottom-5 left-6 font-sans text-[12px] text-[#6c5a61] tracking-[-0.12px] hidden sm:block">
        Exit: the big feather sweeps left to right and wipes this screen away.
      </p>
    </div>
  );
}
