import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { SanityArticle } from "@/lib/types";

interface ArticleCardProps {
  article: SanityArticle;
}

const difficultyColor: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-rose-50 text-rose-700",
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/${article.category}/${article.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-6"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            difficultyColor[article.difficulty] || "bg-gray-100 text-gray-600"
          }`}
        >
          {article.difficulty}
        </span>
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Clock size={12} />
          <span>{article.readTime}</span>
        </div>
      </div>

      <h3 className="font-semibold text-gray-900 text-base leading-snug mb-2 group-hover:text-blue-700 transition-colors">
        {article.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {(article.tags || []).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight
          size={15}
          className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
        />
      </div>
    </Link>
  );
}
