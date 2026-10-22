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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-[#2b2226] antialiased">
        {children}
      </body>
    </html>
  );
}
