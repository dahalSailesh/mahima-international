import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mahima International",
  description:
    "Mahima International is a women-led non-profit organization founded by and for women with refugee experience. We foster social connections through food, art, and story circles to uphold the dignity of refugee experiences and build cross-cultural understanding.",
  keywords: [
    "refugee women",
    "non-profit",
    "story circles",
    "culinary exchange",
    "cross-cultural connections",
    "Spokane",
    "women empowerment",
  ],
  openGraph: {
    title: "Mahima International",
    description:
      "Reclaiming our narratives and fostering collaborative connections for refugee women.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-lavender-900 bg-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
