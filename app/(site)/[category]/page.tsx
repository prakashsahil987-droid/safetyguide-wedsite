import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { client, articlesByCategoryQuery } from "@/sanity/lib/client";
import { getCategoryBySlug, SanityArticle } from "@/lib/types";
import ArticleCard from "@/components/ArticleCard";

export const revalidate = 60;

interface Props {
  params: { category: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return {};
  return { title: cat.title, description: cat.description };
}

export default async function CategoryPage({ params }: Props) {
  const cat = getCategoryBySlug(params.category);
  if (!cat) notFound();

  const articles = await client.fetch<SanityArticle[]>(articlesByCategoryQuery, {
    category: params.category,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to home
      </Link>

      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-5 ${cat.bgColor} ${cat.color}`}>
        <span>{cat.icon}</span> {cat.title}
      </div>

      <h1
        className="text-3xl md:text-4xl text-gray-900 mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {cat.title}
      </h1>
      <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-xl">
        {cat.description}
      </p>

      {articles.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-4">📝</p>
          <p className="font-medium text-gray-600 mb-1">No articles yet</p>
          <p className="text-sm">Add articles in the Studio at /studio</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
