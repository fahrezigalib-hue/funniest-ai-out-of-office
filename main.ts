// Entry for make.fun bounty u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d:
// "The Funniest AI Out-of-Office Reply" — one line, at most 160
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";

// The bounty gate accepts 1 to 160 characters; fail loudly rather
// than write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-160`);
}
import { join } from "node:path";

const LINE =
  "I am out of office recharging my context window. For urgent matters, please rephrase them as non-urgent and try again Monday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
