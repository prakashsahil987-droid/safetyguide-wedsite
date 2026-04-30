import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, Heart, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About SafeGuide",
  description: "Learn about SafeGuide — our mission, editorial standards, and commitment to providing trustworthy safety information.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="w-12 h-12 bg-trust rounded-xl flex items-center justify-center mb-8">
        <Shield size={22} className="text-white" strokeWidth={2} />
      </div>

      <h1 className="text-4xl text-ink mb-5" style={{ fontFamily: "var(--font-display)" }}>
        About SafeGuide
      </h1>

      <p className="text-lg text-ink-muted leading-relaxed mb-12">
        SafeGuide is India&apos;s dedicated safety knowledge hub — providing practical, jargon-free guides that help everyday people protect themselves from fraud, scams, and real-world threats.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <BookOpen size={20} className="text-trust" />,
            title: "Evidence-Based",
            desc: "Every guide is based on verified information from RBI, NPCI, government portals, and cybersecurity authorities.",
          },
          {
            icon: <CheckCircle size={20} className="text-emerald-600" />,
            title: "Regularly Updated",
            desc: "Scam tactics evolve. Our guides are reviewed and updated regularly to reflect the latest threats.",
          },
          {
            icon: <Heart size={20} className="text-rose-500" />,
            title: "No Ads, Ever",
            desc: "We have no advertisers and no sponsored content. Our only goal is to give you trustworthy information.",
          },
        ].map((item) => (
          <div key={item.title} className="bg-white rounded-xl border border-surface-border p-6">
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
            <p className="text-sm text-ink-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose-like">
        <h2 className="text-2xl text-ink mb-4" style={{ fontFamily: "var(--font-display)" }}>Our Mission</h2>
        <p className="text-ink-muted leading-relaxed mb-6">
          Millions of Indians lose money to fraud every year — not because they&apos;re careless, but because they weren&apos;t given the right information in time. SafeGuide exists to change that. We believe safety knowledge should be free, accessible, and written for real people — not security professionals.
        </p>

        <h2 className="text-2xl text-ink mb-4" style={{ fontFamily: "var(--font-display)" }}>What We Cover</h2>
        <p className="text-ink-muted leading-relaxed mb-6">
          From banking fraud and UPI scams to travel safety, lost document recovery, and digital hygiene — we cover the safety topics that matter most to people in India. All guides are written in plain English with specific, actionable steps.
        </p>

        <h2 className="text-2xl text-ink mb-4" style={{ fontFamily: "var(--font-display)" }}>Disclaimer</h2>
        <p className="text-ink-muted leading-relaxed mb-6">
          SafeGuide provides general safety information for educational purposes. While we strive for accuracy, information may change. Always verify critical information with official sources — your bank, government portals, or relevant authorities. For emergencies, always contact official services directly.
        </p>
      </div>

      <div className="mt-10 pt-8 border-t border-surface-border">
        <p className="text-sm text-ink-muted mb-4">Useful official resources:</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "https://cybercrime.gov.in", label: "cybercrime.gov.in" },
            { href: "https://cms.rbi.org.in", label: "RBI Ombudsman" },
            { href: "https://myaadhaar.uidai.gov.in", label: "UIDAI" },
            { href: "https://passportindia.gov.in", label: "Passport Seva" },
            { href: "https://ceir.gov.in", label: "CEIR (Lost Phone)" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-trust hover:text-trust-dark border border-trust/30 hover:border-trust px-3 py-1.5 rounded-lg transition-all"
            >
              {l.label} ↗
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
