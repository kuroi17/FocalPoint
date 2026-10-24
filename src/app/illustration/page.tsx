import React from "react";
import SectionTemplate from "@/components/SectionTemplate";
import { SectionStoryItem } from "@/components/section/SectionStoriesGrid";
import { ImportantStoryItem } from "@/components/section/SectionImportantSidebar";

export const metadata = {
  title: "Illustration Desk | Focalpoint",
  description:
    "Editorial cartoons, satirical comics, infographics, and visual journalism from student illustrators across campus.",
};

const illustrationStories: SectionStoryItem[] = [
  {
    id: "1",
    tag: "ILLUSTRATION · COMICS",
    title: "The Anatomy of Midterms: A comic strip journey through caffeine and cramming",
    author: "Illustrated by Nina Torres",
    date: "21 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
    href: "/article/the-anatomy-of-midterms",
  },
  {
    id: "2",
    tag: "ILLUSTRATION · SATIRE",
    title: "Jeepney modernization in sharp ink and campus dialogue",
    author: "Illustrated by Marcus Cruz",
    date: "20 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
    href: "/article/jeepney-modernization-ink",
  },
  {
    id: "3",
    tag: "ILLUSTRATION · INFOGRAPHICS",
    title: "Map of the quadrangle: An illustrated guide to surviving the afternoon heat",
    author: "Illustrated by Paolo Santos",
    date: "19 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
    href: "/article/map-of-the-quadrangle",
  },
  {
    id: "4",
    tag: "ILLUSTRATION · CAMPUS LIFE",
    title: "Spotting the cats of focal campus: Character sketches and habits",
    author: "Illustrated by Bea Luna",
    date: "18 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
    href: "/article/spotting-the-cats",
  },
];

const importantIllustrationStories: ImportantStoryItem[] = [
  {
    id: "1",
    num: "1",
    title: "Why editorial cartoons remain the conscience of student journalism",
    dek: "A look at campus cartooning traditions and the visual language of student satire.",
    href: "/article/editorial-cartoons-conscience",
  },
  {
    id: "2",
    num: "2",
    title: "Open call for student illustrators and comic artists this semester",
    href: "/article/illustration-open-call",
  },
  {
    id: "3",
    num: "3",
    title: "Visual ethics: When does political caricature cross into defamation?",
    href: "/article/visual-ethics-caricature",
  },
  {
    id: "4",
    num: "4",
    title: "Behind the pen: How our illustrators translate breaking news into art",
    href: "/article/behind-the-pen",
  },
];

export default function IllustrationPage() {
  return (
    <SectionTemplate
      categorySlug="illustration"
      categoryName="Illustration"
      descriptionPrefix="Art that tells the story. "
      descriptionHighlight="Editorial cartoons, satirical comics, "
      descriptionSuffix="and visual journalism from student illustrators across campus."
      accentColor="#c0304f"
      filters={["All", "Cartoons", "Comics", "Infographics", "Campus Life"]}
      featuredHeadlinePrefix="The Sketchbook Archives: "
      featuredHeadlineHighlight="satirical perspectives on the daily campus commute"
      featuredByline="Illustrated by Marcus Cruz · 22 Oct 2026"
      featuredPhotoLabel="EDITORIAL CARTOON · 3:2"
      stories={illustrationStories}
      importantStories={importantIllustrationStories}
    />
  );
}
