"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsMoreOpen(false);
  }, [pathname]);

  const [greetingInfo, setGreetingInfo] = useState({
    greeting: "Good evening, readers!",
    fullDate: "Friday, October 23, 2026",
    shortDate: "Fri, Oct 23",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hour = now.getHours();
      let greeting = "Good morning, readers!";
      if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon, readers!";
      } else if (hour >= 18 || hour < 5) {
        greeting = "Good evening, readers!";
      }

      const fullDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const shortDate = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      setGreetingInfo({ greeting, fullDate, shortDate });
    };

    updateTime();
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Editorial & Column", href: "/editorial" },
    { label: "Feature", href: "/features" },
    { label: "Sci-Tech", href: "/sci-tech" },
    { label: "Sports", href: "/sports" },
    { label: "Literary", href: "/literary" },
  ];

  const moreLinks = [
    { label: "Podcasts", href: "/podcasts" },
    { label: "Community", href: "/community" },
    { label: "Staff Desk", href: "/staff" },
    { label: "My Profile", href: "/profile" },
  ];

  const isMoreActive = moreLinks.some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
  );

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full bg-white select-none relative z-40">
      {/* 1. Greeting strip */}
      <div className="w-full bg-[#b51d42] text-white flex items-center justify-between px-5 md:px-[100px] py-[7px]">
        <p className="text-[13px] font-normal tracking-tight">
          <span className="font-bold">{greetingInfo.greeting}</span>
          <span className="hidden md:inline font-normal">
            {" "}
            {greetingInfo.fullDate}
          </span>
          <span className="inline md:hidden font-normal"> {greetingInfo.shortDate}</span>
        </p>
        <div className="bg-white/16 flex items-center px-[10px] py-[3px] rounded-full">
          <span className="text-[12.5px] font-semibold text-white">🔥 1 day</span>
        </div>
      </div>

      {/* 2. Top bar */}
      <div className="w-full flex items-center justify-between gap-[10px] md:gap-[14px] px-5 md:px-[100px] py-[12px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-[10px]">
          <div className="w-[38px] h-[38px] relative shrink-0">
            <img
              src="/assets/e664502cc413a3343a7e044f4c1bca0d4ab24e10.png"
              alt="Focalpoint Logo"
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[20px] md:text-[22px] font-black text-[#b51d42] tracking-[-0.66px] leading-tight font-sans">
              FOCALPOINT
            </span>
            <span className="hidden md:block text-[10.5px] font-medium text-[#6c5a61] tracking-[-0.1px] leading-tight">
              Bringing Stories into Focus, Amplifying Voices with Purpose.
            </span>
          </div>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Search bar */}
          <div className="hidden md:flex items-center gap-2 bg-[#fff4f5] border-[1.5px] border-[#f1c9d0] rounded-full px-[14px] py-[9px] w-[250px]">
            <img
              src="/assets/6eb8cd8bdce040d8b1429d87cf7780f143b6df03.svg"
              alt="Search"
              className="w-[18px] h-[18px]"
            />
            <input
              type="text"
              placeholder="Search stories, desks, people"
              className="w-full bg-transparent text-[14px] text-[#6c5a61] tracking-[-0.14px] placeholder:text-[#6c5a61] outline-none"
            />
          </div>

          {/* Mobile Search Icon */}
          <button className="md:hidden p-1 text-[#6c5a61]">
            <img
              src="/assets/6eb8cd8bdce040d8b1429d87cf7780f143b6df03.svg"
              alt="Search"
              className="w-[18px] h-[18px]"
            />
          </button>

          {/* Fokie Points */}
          <Link
            href="/profile"
            className="bg-[#fdefc6] border-[1.5px] border-[#fce192] flex items-center gap-[6px] pl-[6px] pr-[12px] py-[5px] rounded-full shrink-0 hover:bg-[#fae7b0] transition"
          >
            <img
              src="/assets/24987dedda14882f36c592ac42e7434ff030c7a3.png"
              alt="Points"
              className="w-[22px] h-[22px]"
            />
            <span className="text-[13px] font-bold text-[#2b2226] tracking-[-0.13px]">
              <span className="hidden md:inline">5 pts</span>
              <span className="inline md:hidden">5</span>
            </span>
          </Link>

          {/* Desktop Notification Bell */}
          <button className="hidden md:block text-[#6c5a61] hover:text-[#b51d42] transition-colors p-1">
            <img
              src="/assets/5cf64ed41d22c50b0207ff154ee099c1517346aa.svg"
              alt="Notifications"
              className="w-[20px] h-[20px]"
            />
          </button>

          {/* User Avatar */}
          <Link
            href="/profile"
            className="w-[40px] h-[40px] rounded-full border-2 border-[#e0506a] bg-[#ffe1e5] overflow-hidden shrink-0 hover:scale-105 transition-transform"
          >
            <img
              src="/assets/9e8c16262bf6b93dad03aea9ee33c2d6199bd585.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>

      {/* 3. Navigation bar */}
      <nav className="w-full border-t border-b border-[#f1c9d0] px-3 md:px-[92px] py-[6px] flex items-center gap-[2px] overflow-x-auto md:overflow-visible scrollbar-none relative">
        {navLinks.map((item) => {
          const active = isLinkActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-[9px] py-[7px] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap shrink-0 transition-colors ${
                active ? "text-[#b51d42]" : "text-[#2b2226] hover:text-[#b51d42]"
              }`}
            >
              {item.label}
              {active && (
                <span className="absolute bottom-0 left-[9px] right-[9px] h-[2px] bg-[#b51d42]" />
              )}
            </Link>
          );
        })}

        <div className="w-px h-[20px] bg-[#f1c9d0] mx-1 shrink-0" />

        {/* Gallery */}
        <Link
          href="/gallery"
          className={`relative px-[9px] py-[7px] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap shrink-0 transition-colors ${
            isLinkActive("/gallery")
              ? "text-[#b51d42]"
              : "text-[#2b2226] hover:text-[#b51d42]"
          }`}
        >
          Gallery
          {isLinkActive("/gallery") && (
            <span className="absolute bottom-0 left-[9px] right-[9px] h-[2px] bg-[#b51d42]" />
          )}
        </Link>

        {/* About */}
        <Link
          href="/about"
          className={`relative px-[9px] py-[7px] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap shrink-0 transition-colors ${
            isLinkActive("/about")
              ? "text-[#b51d42]"
              : "text-[#2b2226] hover:text-[#b51d42]"
          }`}
        >
          About
          {isLinkActive("/about") && (
            <span className="absolute bottom-0 left-[9px] right-[9px] h-[2px] bg-[#b51d42]" />
          )}
        </Link>

        {/* More dropdown */}
        <div ref={dropdownRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setIsMoreOpen((prev) => !prev)}
            onMouseEnter={() => setIsMoreOpen(true)}
            className={`relative px-[9px] py-[7px] text-[14px] font-semibold tracking-[-0.14px] whitespace-nowrap cursor-pointer flex items-center gap-1 transition-colors ${
              isMoreActive || isMoreOpen
                ? "text-[#b51d42]"
                : "text-[#2b2226] hover:text-[#b51d42]"
            }`}
          >
            <span>More ▾</span>
            {isMoreActive && (
              <span className="absolute bottom-0 left-[9px] right-[9px] h-[2px] bg-[#b51d42]" />
            )}
          </button>

          {/* Dropdown dialog menu */}
          {isMoreOpen && (
            <div
              onMouseLeave={() => setIsMoreOpen(false)}
              className="absolute right-0 top-full mt-1.5 flex flex-col bg-white border border-[#f1c9d0] rounded-[6px] shadow-2xl z-[100] min-w-[170px] py-1.5"
            >
              {moreLinks.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMoreOpen(false)}
                    className={`px-4 py-2 text-[13px] font-semibold transition ${
                      active
                        ? "bg-[#fff4f5] text-[#b51d42]"
                        : "text-[#2b2226] hover:bg-[#fff4f5] hover:text-[#b51d42]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
