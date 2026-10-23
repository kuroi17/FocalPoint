import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunityHeader from "@/components/community/CommunityHeader";
import CommunityNotice from "@/components/community/CommunityNotice";
import CommunityBox from "@/components/community/CommunityBox";

export const metadata = {
  title: "Community | Focalpoint",
  description:
    "Talk about your favorite stories, ask Focalpoint anything, and say hi to other readers. Be kind. Moderators are watching.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226] selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Community Page Head: Breadcrumb, 210px COMMUNITY Title, Prompt with bold text, Fokie Mascot */}
        <CommunityHeader />

        {/* 3. Demo Note with rose accent bar */}
        <CommunityNotice />

        {/* 4. Community Box: Channels, Chat & Compose, Ask Focalpoint Q&A */}
        <CommunityBox />
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
