import { PortableText, PortableTextComponents } from "@portabletext/react";

interface CalloutValue {
  type: "tip" | "warning" | "danger";
  content: string;
}

interface ImageValue {
  asset?: { _ref: string };
  alt?: string;
  caption?: string;
}

const calloutStyles: Record<string, string> = {
  tip: "bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6",
  warning: "bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6",
  danger: "bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6",
};

const calloutLabels: Record<string, string> = {
  tip: "💡 Tip",
  warning: "⚠️ Warning",
  danger: "🚨 Important",
};

const components: PortableTextComponents = {
  types: {
    callout: ({ value }: { value: CalloutValue }) => (
      <div className={calloutStyles[value.type] || calloutStyles.tip}>
        <p className="font-semibold text-sm mb-1">{calloutLabels[value.type]}</p>
        <p className="text-sm leading-relaxed">{value.content}</p>
      </div>
    ),
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-6">
          <img
            src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref
              .replace("image-", "")
              .replace("-jpg", ".jpg")
              .replace("-png", ".png")
              .replace("-webp", ".webp")}`}
            alt={value.alt || ""}
            className="rounded-xl w-full"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2
        className="text-2xl text-gray-900 mt-8 mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-500 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 space-y-2 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-gray-600 leading-relaxed">
        <span className="text-blue-600 mt-0.5 shrink-0">→</span>
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-gray-600 leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

export default function ArticleBody({ content }: { content: unknown[] }) {
  return (
    <div className="article-body">
      <PortableText value={content as Parameters<typeof PortableText>[0]["value"]} components={components} />
    </div>
  );
}
