import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { client, articleBySlugQuery } from "@/sanity/lib/client";
import { getCategoryBySlug, SanityArticle } from "@/lib/types";
import ArticleBody from "@/components/ArticleBody";

export const revalidate = 60;

interface Props {
  params: { category: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await client.fetch<SanityArticle>(articleBySlugQuery, {
    slug: params.slug,
  });
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: Props) {
  const article = await client.fetch<SanityArticle>(articleBySlugQuery, {
    slug: params.slug,
  });

  if (!article || article.category !== params.category) notFound();

  const cat = getCategoryBySlug(params.category);

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
      })
    : null;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/${params.category}`} className="hover:text-gray-900 transition-colors">
          {cat?.title}
        </Link>
        <span>/</span>
        <span className="text-gray-700 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Category badge */}
      {cat && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 ${cat.bgColor} ${cat.color}`}>
          <span>{cat.icon}</span> {cat.title}
        </div>
      )}

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl text-gray-900 mb-4 leading-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {article.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-8 border-b border-gray-200">
        <div className="flex items-center gap-1.5">
          <Clock size={14} />
          <span>{article.readTime}</span>
        </div>
        {formattedDate && (
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            <span>Updated {formattedDate}</span>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <Tag size={14} />
          <span>{article.difficulty}</span>
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-lg text-gray-500 leading-relaxed mb-8 font-light">{article.excerpt}</p>

      {/* Body */}
      {article.body && article.body.length > 0 ? (
        <ArticleBody content={article.body} />
      ) : (
        <p className="text-gray-400 italic">No content yet — add it in the Studio.</p>
      )}

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="text-sm bg-gray-50 text-gray-400 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="mt-10">
        <Link
          href={`/${params.category}`}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          <ArrowLeft size={15} /> Back to {cat?.title}
        </Link>
      </div>
    </div>
  );
}
