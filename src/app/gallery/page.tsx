"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryHeader from "@/components/gallery/GalleryHeader";
import GalleryControls from "@/components/gallery/GalleryControls";
import GalleryMasonry, {
  PhotoItem,
} from "@/components/gallery/GalleryMasonry";
import GalleryStoryDetail from "@/components/gallery/GalleryStoryDetail";
import GallerySubmitModal from "@/components/gallery/GallerySubmitModal";

const ALL_PHOTOS: PhotoItem[] = [
  {
    id: "rain-on-the-walk-home",
    title: "Rain on the walk home",
    category: "COMMUNITY",
    height: 420,
    gradient:
      "linear-gradient(125.63deg, rgb(255, 225, 229) 0%, rgb(224, 80, 106) 71.43%)",
    author: "Shared by a Grade 9 reader",
    story:
      "I waited out the rain under the waiting shed and noticed how everyone shared one umbrella.",
    type: "community",
  },
  {
    id: "court-lights",
    title: "Court lights before the game",
    category: "PHOTO DESK",
    height: 260,
    gradient:
      "linear-gradient(139.18deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
    author: "Shot by Photo Desk",
    story:
      "Warmup lights hitting the court an hour before tip-off, when the gym is still dead silent.",
    type: "photojourn",
  },
  {
    id: "morning-assembly",
    title: "Morning assembly, seen from the stairs",
    category: "PHOTO DESK",
    height: 260,
    gradient:
      "linear-gradient(139.18deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
    author: "Shot by Photo Desk",
    story:
      "The entire student body filling the quadrangle in lines that only look straight from the top floor.",
    type: "photojourn",
  },
  {
    id: "canteen-at-1205",
    title: "The canteen at 12:05",
    category: "PHOTO DESK",
    height: 420,
    gradient:
      "linear-gradient(125.63deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
    author: "Shot by Photo Desk",
    story:
      "Five minutes after the bell rings, lunch trays turn into a high-speed negotiation.",
    type: "photojourn",
  },
  {
    id: "zine-table",
    title: "Zine table at the fair",
    category: "COMMUNITY",
    height: 340,
    gradient:
      "linear-gradient(131.52deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
    author: "Shared by a Literary staffer",
    story:
      "Handmade zines, stapled photocopies, and student art traded across desks at the club fair.",
    type: "community",
  },
  {
    id: "fokie-sticker",
    title: "Fokie sticker spotted",
    category: "COMMUNITY",
    height: 340,
    gradient:
      "linear-gradient(131.52deg, rgb(255, 225, 229) 0%, rgb(240, 138, 155) 71.43%)",
    author: "Shared by a Grade 11 reader",
    story:
      "A holographic Fokie sticker spotted on an engineering student's laptop in the canteen.",
    type: "community",
  },
  {
    id: "practice-after-bell",
    title: "Practice after the last bell",
    category: "PHOTO DESK",
    height: 300,
    gradient:
      "linear-gradient(135.1deg, rgb(255, 225, 229) 0%, rgb(44, 109, 181) 71.43%)",
    author: "Shot by Sports Desk",
    story:
      "Track and field athletes running intervals as the campus gates begin to close for the day.",
    type: "photojourn",
  },
  {
    id: "sunrise-run",
    title: "Sunrise run",
    category: "COMMUNITY",
    height: 380,
    gradient:
      "linear-gradient(128.38deg, rgb(255, 225, 229) 0%, rgb(163, 90, 42) 71.43%)",
    author: "Shared by a campus runner",
    story:
      "Early morning joggers catching the first orange sunlight over the oval track.",
    type: "community",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(
    ALL_PHOTOS[0]
  );
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);

  // Filter logic
  const filteredPhotos = ALL_PHOTOS.filter((photo) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Photojourn board")
      return photo.category === "PHOTO DESK";
    if (activeFilter === "Community")
      return photo.category === "COMMUNITY";
    return true;
  });

  const handlePhotoClick = (photo: PhotoItem) => {
    setSelectedPhoto(photo);
    const detailEl = document.getElementById("photo-detail");
    if (detailEl) {
      detailEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#2b2226] selection:bg-[#ffe1e5] selection:text-[#b51d42]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-1 w-full flex flex-col items-center">
        {/* 2. Gallery Page Head: Breadcrumb, 210px IMAGE BOARD, Lead Text, Fokie Mascot */}
        <GalleryHeader />

        {/* 3. Board Section: Filter Chips, Submit Button, Subtext, Masonry Grid */}
        <section
          className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[100px] pb-[64px] flex flex-col gap-[16px]"
          data-node-id="10:964"
          data-name="board"
        >
          {/* Controls: Chips, Button, Description */}
          <GalleryControls
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onSubmitClick={() => setIsSubmitModalOpen(true)}
          />

          {/* Masonry 4-Column Grid */}
          <GalleryMasonry
            photos={filteredPhotos}
            selectedPhotoId={selectedPhoto?.id}
            onPhotoClick={handlePhotoClick}
          />
        </section>

        {/* 4. Photo Story (Tapped State) / WHEN YOU TAP A PHOTO */}
        <GalleryStoryDetail
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      </main>

      {/* 5. Submit Photo Modal */}
      <GallerySubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />

      {/* 6. Global Footer */}
      <Footer />
    </div>
  );
}
