import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-32 text-center">
      <div className="text-6xl mb-6">🔍</div>
      <h1 className="text-3xl text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Page Not Found
      </h1>
      <p className="text-ink-muted mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-trust text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-trust-dark transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
