import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SafeGuide — Trusted Safety Guides for Everyday Life",
    template: "%s | SafeGuide",
  },
  description:
    "Expert safety guides on banking, UPI payments, travel, lost items, and online security. Protect yourself with practical, easy-to-follow advice.",
  keywords: [
    "safety guide",
    "banking safety",
    "UPI safety",
    "travel safety",
    "online security",
    "lost item guide",
    "India safety tips",
  ],
  authors: [{ name: "SafeGuide Editorial Team" }],
  metadataBase: new URL("https://safeguide.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://safeguide.in",
    siteName: "SafeGuide",
    title: "SafeGuide — Trusted Safety Guides for Everyday Life",
    description:
      "Practical safety guides on banking, UPI, travel, and digital security.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SafeGuide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeGuide",
    description: "Trusted safety guides for everyday life.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
