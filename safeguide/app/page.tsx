import Link from "next/link";
import { Shield, CheckCircle, ArrowRight, AlertTriangle, BookOpen, Users } from "lucide-react";
import { categories, articles } from "@/lib/data";

export default function HomePage() {
  const featuredArticles = articles.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-trust rounded flex items-center justify-center">
                <Shield size={13} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-medium text-trust">India&apos;s Safety Knowledge Hub</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Stay safe in a world full of{" "}
              <span className="text-trust">everyday risks</span>
            </h1>

            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-xl">
              Practical, jargon-free safety guides on banking fraud, UPI scams, travel security, lost documents, and online threats — written for real people.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/banking"
                className="inline-flex items-center gap-2 bg-trust text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-trust-dark transition-colors"
              >
                Browse Guides <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-surface-soft text-ink px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-surface-border transition-colors"
              >
                About SafeGuide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-b border-surface-border bg-surface-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10">
            {[
              { icon: <CheckCircle size={16} />, text: "Verified Information" },
              { icon: <BookOpen size={16} />, text: `${articles.length}+ Safety Guides` },
              { icon: <Shield size={16} />, text: "No Ads, No Tracking" },
              { icon: <Users size={16} />, text: "Trusted by Thousands" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-ink-muted">
                <span className="text-trust">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2
              className="text-2xl md:text-3xl text-ink mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Browse by Category
            </h2>
            <p className="text-ink-muted text-sm">Find guides relevant to your situation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="group bg-white rounded-xl border border-surface-border hover:border-trust/30 hover:shadow-md transition-all duration-200 p-6"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-ink text-base group-hover:text-trust transition-colors">
                  {cat.title}
                </h3>
                <span className="text-xs text-ink-muted bg-surface-soft px-2 py-0.5 rounded-full shrink-0">
                  {cat.articleCount} guides
                </span>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">{cat.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-end justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl text-ink"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Essential Reading
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.category}/${article.slug}`}
              className="group bg-white rounded-xl border border-surface-border hover:border-trust/40 hover:shadow-md transition-all duration-200 p-6 flex gap-5"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs text-trust font-medium mb-2 uppercase tracking-wide">
                  {categories.find((c) => c.slug === article.category)?.title}
                </div>
                <h3 className="font-semibold text-ink text-base leading-snug mb-2 group-hover:text-trust transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
              <ArrowRight
                size={16}
                className="text-trust shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-ink rounded-2xl p-8 md:p-10 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
              <AlertTriangle size={20} className="text-red-400" />
            </div>
            <div>
              <h2
                className="text-2xl text-white mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Emergency Contacts
              </h2>
              <p className="text-gray-400 text-sm">Save these numbers before you need them</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Cybercrime", number: "1930" },
              { label: "Police", number: "100" },
              { label: "Women Helpline", number: "1091" },
              { label: "Tourist Helpline", number: "1800-11-1363" },
              { label: "MEA (Abroad)", number: "+91-11-2301-4104" },
            ].map((e) => (
              <div key={e.number} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <p className="text-gray-400 text-xs mb-1">{e.label}</p>
                <p className="text-white font-semibold text-sm">{e.number}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
