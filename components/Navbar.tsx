"use client";

import Link from "next/link";
import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/banking", label: "Banking" },
  { href: "/upi", label: "UPI Safety" },
  { href: "/travel", label: "Travel" },
  { href: "/lost-items", label: "Lost Items" },
  { href: "/online-safety", label: "Online Safety" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <Shield size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-gray-900 font-semibold text-lg tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SafeGuide
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-900 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
