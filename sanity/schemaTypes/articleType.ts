import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(100),
      description: "The headline of your article (10–100 characters)",
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: "Auto-generated from the title. This becomes part of the article URL.",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "🏦 Banking Safety", value: "banking" },
          { title: "📲 UPI Safety", value: "upi" },
          { title: "✈️ Travel Safety", value: "travel" },
          { title: "🔍 Lost Items", value: "lost-items" },
          { title: "🛡️ Online Safety", value: "online-safety" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(300),
      description: "A brief summary shown on article cards and in search results (50–300 characters)",
    }),

    defineField({
      name: "readTime",
      title: "Read Time",
      type: "string",
      placeholder: "e.g. 5 min read",
      validation: (Rule) => Rule.required(),
      initialValue: "5 min read",
    }),

    defineField({
      name: "difficulty",
      title: "Difficulty Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "Beginner" },
          { title: "Intermediate", value: "Intermediate" },
          { title: "Advanced", value: "Advanced" },
        ],
        layout: "radio",
      },
      initialValue: "Beginner",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Add relevant tags (press Enter after each one)",
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
      description: "Show this article in the 'Essential Reading' section on the homepage",
    }),

    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          type: "object",
          name: "callout",
          title: "Callout Box",
          fields: [
            {
              name: "type",
              title: "Box Type",
              type: "string",
              options: {
                list: [
                  { title: "💡 Tip (Blue)", value: "tip" },
                  { title: "⚠️ Warning (Amber)", value: "warning" },
                  { title: "🚨 Danger (Red)", value: "danger" },
                ],
                layout: "radio",
              },
            },
            {
              name: "content",
              title: "Content",
              type: "text",
              rows: 3,
            },
          ],
          preview: {
            select: { type: "type", content: "content" },
            prepare({ type, content }: { type: string; content: string }) {
              const icons: Record<string, string> = { tip: "💡", warning: "⚠️", danger: "🚨" };
              return {
                title: `${icons[type] || "📌"} Callout Box`,
                subtitle: content,
              };
            },
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility",
            },
            {
              name: "caption",
              title: "Caption",
              type: "string",
            },
          ],
        },
      ],
      description: "Write your full article here. Use Heading 2 for main sections, Heading 3 for sub-sections, and Callout Boxes for tips/warnings.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      category: "category",
      featured: "featured",
    },
    prepare({ title, category, featured }: { title: string; category: string; featured: boolean }) {
      const icons: Record<string, string> = {
        banking: "🏦",
        upi: "📲",
        travel: "✈️",
        "lost-items": "🔍",
        "online-safety": "🛡️",
      };
      return {
        title: `${featured ? "⭐ " : ""}${title}`,
        subtitle: `${icons[category] || "📄"} ${category}`,
      };
    },
  },

  orderings: [
    {
      title: "Published Date (Newest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Category",
      name: "categoryAsc",
      by: [{ field: "category", direction: "asc" }],
    },
  ],
});
