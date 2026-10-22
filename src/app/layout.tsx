import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Focalpoint — Philippine Student Journalism",
  description:
    "Bringing stories into focus. Amplifying voices with purpose. Empowering the next generation of student journalists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-[#2b2226] antialiased">
        {children}
      </body>
    </html>
  );
}
