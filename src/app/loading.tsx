import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6">
      <div className="relative w-[118px] h-[118px] flex items-center justify-center">
        {/* Outer static ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#f1c9d0]" />
        
        {/* Spinning indicator */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#b51d42] border-r-[#e0506a] animate-spin" />
        
        {/* Central Logo */}
        <div className="w-[50px] h-[50px] relative">
          <img
            src="/assets/e664502cc413a3343a7e044f4c1bca0d4ab24e10.png"
            alt="Focalpoint Logo"
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>
      </div>

      <p className="text-[14px] font-bold tracking-[0.2em] text-[#b51d42] font-display animate-pulse uppercase">
        Bringing Stories into Focus.
      </p>
    </div>
  );
}
