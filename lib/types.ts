export type SanityArticle = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  publishedAt: string;
  featured: boolean;
  body?: unknown[];
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bgColor: string;
  color: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "banking",
    title: "Banking Safety",
    tagline: "Protect your money & accounts",
    description:
      "Learn how to keep your bank accounts, cards, and transactions safe from fraud, phishing, and scams.",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    icon: "🏦",
  },
  {
    slug: "upi",
    title: "UPI Safety",
    tagline: "Secure every digital payment",
    description:
      "Everything you need to know about safe UPI transactions, avoiding payment frauds, and protecting your PIN.",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    icon: "📲",
  },
  {
    slug: "travel",
    title: "Travel Safety",
    tagline: "Stay safe on every journey",
    description:
      "Essential safety tips for domestic and international travel — from booking safely to handling emergencies abroad.",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    icon: "✈️",
  },
  {
    slug: "lost-items",
    title: "Lost Items",
    tagline: "What to do when things go missing",
    description:
      "Step-by-step guides for reporting lost documents, phones, wallets, and cards — and preventing identity theft.",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    icon: "🔍",
  },
  {
    slug: "online-safety",
    title: "Online Safety",
    tagline: "Guard your digital life",
    description:
      "Protect yourself from phishing, scams, data breaches, and social media threats.",
    color: "text-violet-700",
    bgColor: "bg-violet-50",
    icon: "🛡️",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
