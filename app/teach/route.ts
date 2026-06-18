import { readFileSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

const html = readFileSync(join(process.cwd(), "app/teach/teach-source.html"), "utf8");

export function GET() {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300"
    }
  });
}
