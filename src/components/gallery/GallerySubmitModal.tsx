"use client";

import React, { useState } from "react";

interface GallerySubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GallerySubmitModal({
  isOpen,
  onClose,
}: GallerySubmitModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white border-[1.5px] border-[#e0506a] rounded-[6px] max-w-[540px] w-full p-6 sm:p-8 flex flex-col gap-5 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#f1c9d0] pb-3">
          <div>
            <span className="font-sans font-bold text-[11px] text-[#b51d42] tracking-wider uppercase">
              PHOTOJOURN & COMMUNITY
            </span>
            <h3 className="font-display font-black text-[28px] sm:text-[34px] text-[#b51d42] leading-none pt-1">
              SUBMIT YOUR PHOTO
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#6c5a61] hover:text-[#b51d42] font-bold text-xl p-1"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="bg-[#fff4f5] border border-[#e0506a] p-6 rounded-[4px] text-center flex flex-col gap-2">
            <span className="text-3xl">🦅</span>
            <h4 className="font-sans font-bold text-[18px] text-[#b51d42]">
              Photo Received!
            </h4>
            <p className="font-sans text-[14px] text-[#6c5a61]">
              Thank you! Our Circulation and WebDev editors will review your
              submission before it goes live on the Image Board.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="font-sans text-[13px] text-[#6c5a61] leading-relaxed">
              Every photo is reviewed by Circulation and WebDev before it goes up.
              Include a title and the short story behind your capture.
            </p>

            {/* Photo Title */}
            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-[12px] text-[#2b2226] uppercase tracking-wide">
                Photo Title *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Afternoon light across the quad"
                className="w-full border-[1.5px] border-[#f1c9d0] rounded-[4px] px-3 py-2 text-[14px] focus:outline-hidden focus:border-[#b51d42]"
              />
            </div>

            {/* Submitter Name / Attribution */}
            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-[12px] text-[#2b2226] uppercase tracking-wide">
                Shared By *
              </label>
              <input
                required
                type="text"
                placeholder="e.g. Grade 10 reader / Photo Desk"
                className="w-full border-[1.5px] border-[#f1c9d0] rounded-[4px] px-3 py-2 text-[14px] focus:outline-hidden focus:border-[#b51d42]"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-[12px] text-[#2b2226] uppercase tracking-wide">
                Category *
              </label>
              <select
                required
                className="w-full border-[1.5px] border-[#f1c9d0] rounded-[4px] px-3 py-2 text-[14px] focus:outline-hidden focus:border-[#b51d42] bg-white"
              >
                <option value="COMMUNITY">Community</option>
                <option value="PHOTO DESK">Photo Desk</option>
              </select>
            </div>

            {/* The Story Behind The Shot */}
            <div className="flex flex-col gap-1">
              <label className="font-sans font-bold text-[12px] text-[#2b2226] uppercase tracking-wide">
                The Story Behind The Shot *
              </label>
              <textarea
                required
                rows={3}
                placeholder="What made you take this photo? What was happening in that moment?"
                className="w-full border-[1.5px] border-[#f1c9d0] rounded-[4px] px-3 py-2 text-[14px] focus:outline-hidden focus:border-[#b51d42]"
              />
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[13px] font-bold text-[#6c5a61] hover:text-[#b51d42]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#b51d42] hover:bg-[#961836] text-white px-5 py-2.5 rounded-[4px] font-sans font-bold text-[14px] transition-colors"
              >
                Send to Editors →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
