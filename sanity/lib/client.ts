import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Queries
export const allArticlesQuery = `
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    readTime,
    difficulty,
    tags,
    publishedAt,
    featured
  }
`;

export const articlesByCategoryQuery = `
  *[_type == "article" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    readTime,
    difficulty,
    tags,
    publishedAt,
    featured
  }
`;

export const articleBySlugQuery = `
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    readTime,
    difficulty,
    tags,
    publishedAt,
    body
  }
`;

export const featuredArticlesQuery = `
  *[_type == "article" && featured == true] | order(publishedAt desc)[0...4] {
    _id,
    title,
    "slug": slug.current,
    category,
    excerpt,
    readTime,
    difficulty,
    tags,
    publishedAt
  }
`;

export const categorySlugsByArticle = `
  *[_type == "article"] {
    "slug": slug.current,
    category
  }
`;
