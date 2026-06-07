import Link from "next/link";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                SafeGuide
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Trusted safety guides for everyday life in India.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/banking", label: "Banking Safety" },
                { href: "/upi", label: "UPI Safety" },
                { href: "/travel", label: "Travel Safety" },
                { href: "/lost-items", label: "Lost Items" },
                { href: "/online-safety", label: "Online Safety" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Emergency Numbers</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Cybercrime Helpline", number: "1930" },
                { label: "Police", number: "100" },
                { label: "Women Helpline", number: "1091" },
                { label: "Tourist Helpline", number: "1800-11-1363" },
                { label: "MEA (Abroad)", number: "+91-11-2301-4104" },
              ].map((e) => (
                <li key={e.number} className="text-sm text-gray-400">
                  <span className="text-gray-300">{e.label}:</span>{" "}
                  <span className="text-white font-medium">{e.number}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About SafeGuide" },
                { href: "https://cybercrime.gov.in", label: "Report Cybercrime ↗", external: true },
                { href: "https://cms.rbi.org.in", label: "RBI Ombudsman ↗", external: true },
                { href: "https://myaadhaar.uidai.gov.in", label: "UIDAI Portal ↗", external: true },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} SafeGuide. For informational purposes only.</p>
          <p className="text-xs text-gray-600">Always verify with official government sources.</p>
        </div>
      </div>
    </footer>
  );
}
