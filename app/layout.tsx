import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SafeGuide — Trusted Safety Guides for Everyday Life",
    template: "%s | SafeGuide",
  },
  description:
    "Expert safety guides on banking, UPI payments, travel, lost items, and online security.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://safeguide.in"
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
