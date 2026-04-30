import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCategoryBySlug, getArticlesByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";

export async function generateMetadata(): Promise<Metadata> {
  const cat = getCategoryBySlug("travel");
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
}

export default function TravelPage() {
  const cat = getCategoryBySlug("travel");
  if (!cat) notFound();
  const articles = getArticlesByCategory("travel");
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink mb-8 transition-colors">
        <ArrowLeft size={14} /> Back to home
      </Link>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 ${cat.bgColor} ${cat.color}`}>
        <span>{cat.icon}</span> {cat.title}
      </div>
      <h1 className="text-3xl md:text-4xl text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>{cat.title}</h1>
      <p className="text-ink-muted text-base leading-relaxed mb-10 max-w-xl">{cat.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} categorySlug="travel" />
        ))}
      </div>
    </div>
  );
}
