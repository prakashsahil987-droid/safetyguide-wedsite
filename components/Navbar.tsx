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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-trust rounded-lg flex items-center justify-center group-hover:bg-trust-dark transition-colors">
              <Shield size={16} className="text-white" strokeWidth={2.5} />
            </div>
            <span
              className="text-ink font-semibold text-lg tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              SafeGuide
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-ink-muted hover:text-ink hover:bg-surface-soft rounded-md transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-ink-muted hover:text-ink rounded-md"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-border bg-white">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-soft rounded-md transition-all"
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
