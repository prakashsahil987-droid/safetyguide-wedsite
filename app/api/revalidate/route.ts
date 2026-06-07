import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Validate the secret token
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { _type, category, slug } = body;

    if (_type === "article") {
      // Revalidate homepage
      revalidatePath("/");

      // Revalidate the category page
      if (category) {
        revalidatePath(`/${category}`);
      }

      // Revalidate the specific article
      if (category && slug?.current) {
        revalidatePath(`/${category}/${slug.current}`);
      }
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
