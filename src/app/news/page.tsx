import React from "react";
import SectionTemplate from "@/components/SectionTemplate";

export default function NewsPage() {
  return (
    <SectionTemplate
      categorySlug="news"
      categoryName="News"
      descriptionPrefix="For those who want to be "
      descriptionHighlight="where the story begins. Ti"
      descriptionSuffix="mely campus issues, reported with accuracy, speed and purpose."
      accentColor="#c0304f"
    />
  );
}
