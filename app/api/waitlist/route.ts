import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

// Simple, funnel-safe waitlist capture. If DATABASE_URL is configured we store
// the email in Neon; if anything about storage fails we still return ok so a
// signup never dies on the visitor's side. A validation asset should never show
// a scary error to a prospect.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let email = "";
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const url = process.env.DATABASE_URL;
  if (url) {
    try {
      const sql = neon(url);
      await sql`
        insert into waitlist (email)
        values (${email})
        on conflict (email) do nothing
      `;
    } catch (err) {
      // Never block the funnel on a storage hiccup; just record it server-side.
      console.error("waitlist insert failed:", err);
    }
  } else {
    console.log("waitlist signup (no DATABASE_URL configured):", email);
  }

  return NextResponse.json({ ok: true });
}
