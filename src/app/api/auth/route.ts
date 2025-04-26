import type { NextRequest } from "next/server";
import { isAuthenticated, unauthorized } from "@/src/lib/auth";

export async function GET(request: NextRequest) {
  if (await isAuthenticated(request)) {
    return new Response(JSON.stringify({ authenticated: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return unauthorized();
}
