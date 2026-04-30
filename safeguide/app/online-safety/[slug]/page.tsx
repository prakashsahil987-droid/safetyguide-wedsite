import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { getArticle, getCategoryBySlug } from "@/lib/data";

interface Props { params: { slug: string }; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function OnlineSafetyArticlePage({ params }: Props) {
  const article = getArticle(params.slug);
  if (!article || article.category !== "online-safety") notFound();
  const cat = getCategoryBySlug("online-safety");

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <nav className="flex items-center gap-2 text-sm text-ink-muted mb-8">
        <Link href="/" className="hover:text-ink transition-colors">Home</Link>
        <span>/</span>
        <Link href="/online-safety" className="hover:text-ink transition-colors">{cat?.title}</Link>
        <span>/</span>
        <span className="text-ink truncate">{article.title}</span>
      </nav>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 ${cat?.bgColor} ${cat?.color}`}>
        <span>{cat?.icon}</span> {cat?.title}
      </div>
      <h1 className="text-3xl md:text-4xl text-ink mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>{article.title}</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted mb-8 pb-8 border-b border-surface-border">
        <div className="flex items-center gap-1.5"><Clock size={14} /><span>{article.readTime}</span></div>
        <div className="flex items-center gap-1.5"><Calendar size={14} /><span>Updated {article.updatedAt}</span></div>
        <div className="flex items-center gap-1.5"><Tag size={14} /><span>{article.difficulty}</span></div>
      </div>
      <p className="text-lg text-ink-muted leading-relaxed mb-8 font-light">{article.excerpt}</p>
      <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }} />
      <div className="mt-12 pt-6 border-t border-surface-border">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-sm bg-surface-soft text-ink-muted px-3 py-1 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Link href="/online-safety" className="inline-flex items-center gap-2 text-trust hover:text-trust-dark text-sm font-medium transition-colors">
          <ArrowLeft size={15} /> Back to Online Safety
        </Link>
      </div>
    </div>
  );
}
