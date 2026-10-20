import { NextRequest, NextResponse } from "next/server";

/**
 * PWA Share Target handler.
 * When users "Share" content from another app to ExamiQ, the browser
 * sends a POST here. We redirect to the AI Quiz generator with the
 * shared text pre-filled as a prompt.
 */
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const title = (formData.get("title") as string) || "";
    const text = (formData.get("text") as string) || "";
    const url = (formData.get("url") as string) || "";

    const combined = [title, text, url].filter(Boolean).join(" ").trim();
    const prompt = combined ? encodeURIComponent(combined.slice(0, 500)) : "";

    // Redirect to AI Quiz Generator with shared content as prompt
    const redirectUrl = prompt
      ? `/?shortcut=ai-quiz&prompt=${prompt}`
      : "/?shortcut=ai-quiz";

    return NextResponse.redirect(new URL(redirectUrl, request.url), 303);
  } catch {
    return NextResponse.redirect(new URL("/", request.url), 303);
  }
}

// Also handle GET for direct navigation
export async function GET() {
  return NextResponse.redirect("/");
}
