import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.metaTitle,
  description: profile.summary,
  keywords: [
    profile.name,
    profile.education,
    "engineering student",
    "artificial intelligence",
    "robotics",
    "web development",
    "portfolio",
  ],
  openGraph: {
    title: profile.metaTitle,
    description: profile.summary,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-canvas font-sans text-body">{children}</body>
    </html>
  );
}
