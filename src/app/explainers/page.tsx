import React from "react";
import SectionTemplate from "@/components/SectionTemplate";
import { SectionStoryItem } from "@/components/section/SectionStoriesGrid";
import { ImportantStoryItem } from "@/components/section/SectionImportantSidebar";

export const metadata = {
  title: "Explainers | Focalpoint",
  description:
    "In-depth visual guides, policy breakdowns, and Q&A explainers on campus and student issues.",
};

const explainerStories: SectionStoryItem[] = [
  {
    id: "1",
    tag: "EXPLAINERS · BUDGETS",
    title: "Where does the student publication fee go? An itemized campus guide",
    author: "By Migs Dela Cruz",
    date: "20 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(47, 143, 131) 71.43%)",
    href: "/article/where-the-pub-fee-goes",
  },
  {
    id: "2",
    tag: "EXPLAINERS · STUDENT RIGHTS",
    title: "How to file a formal grievance with your college student council",
    author: "By Bea Reyes",
    date: "19 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(192, 48, 79) 71.43%)",
    href: "/article/how-to-file-grievance",
  },
  {
    id: "3",
    tag: "EXPLAINERS · CAMPUS TECH",
    title: "Understanding the new campus RFID tap system: Privacy and tracking answered",
    author: "By Ryan Dizon",
    date: "18 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(217, 164, 65) 71.43%)",
    href: "/article/campus-rfid-system-explained",
  },
  {
    id: "4",
    tag: "EXPLAINERS · ACADEMICS",
    title: "The grading curve explained: Why standard deviations affect your Latin honors",
    author: "By Clarisse Santos",
    date: "17 Oct 2026",
    photoGradient:
      "linear-gradient(146.34deg, rgb(255, 225, 229) 0%, rgb(125, 91, 166) 71.43%)",
    href: "/article/the-grading-curve-explained",
  },
];

const importantExplainerStories: ImportantStoryItem[] = [
  {
    id: "1",
    num: "1",
    title: "Fast facts: The 2026 State University budget allocation in 5 charts",
    dek: "Everything you need to know about where higher education funds are moving this school year.",
    href: "/article/state-u-budget-charts",
  },
  {
    id: "2",
    num: "2",
    title: "What happens when a professor cancels class without notice? Your rights",
    href: "/article/class-cancellation-rights",
  },
  {
    id: "3",
    num: "3",
    title: "Jeepney fare matrix: How the student discount is calculated on local routes",
    href: "/article/jeepney-fare-discount-guide",
  },
  {
    id: "4",
    num: "4",
    title: "Submit a question: What campus policy do you want our team to explain?",
    href: "/article/submit-explainer-question",
  },
];

export default function ExplainersPage() {
  return (
    <SectionTemplate
      categorySlug="explainers"
      categoryName="Explainers"
      descriptionPrefix="Complex campus issues, "
      descriptionHighlight="broken down step-by-step. "
      descriptionSuffix="Guides, Q&As, and card stacks that clarify what really matters to students."
      accentColor="#2f8f83"
      filters={["All", "Guides", "Q&A", "Budgets", "Policy"]}
      featuredHeadlinePrefix="How campus tuition hikes actually work: "
      featuredHeadlineHighlight="a breakdown of the consultation and approval process"
      featuredByline="By Clarisse Santos · 21 Oct 2026"
      featuredPhotoLabel="VISUAL EXPLAINER · 3:2"
      stories={explainerStories}
      importantStories={importantExplainerStories}
    />
  );
}
