import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const workspaceDir = path.dirname(currentFilePath);
const html = fs.readFileSync(path.join(workspaceDir, "index.html"), "utf8");

const checks = [
  {
    name: "dark mode panels carry the neon green top accent",
    test: () => html.includes('body[data-theme="dark"] .panel::before')
      && html.includes("linear-gradient(90deg, var(--accent-green-dark), var(--accent-green) 36%"),
  },
  {
    name: "dark mode command center cards carry the neon green accent",
    test: () => html.includes('body[data-theme="dark"] .command-center-card::before')
      && html.includes("box-shadow: 0 0 16px rgba(39, 213, 108, 0.14);"),
  },
  {
    name: "dark mode broadcast match cards carry the neon green accent",
    test: () => html.includes('body[data-theme="dark"] .broadcast-match-card::before'),
  },
  {
    name: "all hero and bracket logos use the provided banner image",
    test: () => {
      const matches = html.match(/(?:Drift PDX Rose Banner Stickers-01|driftpdx-rose-banner)\.png\?v=[^"' )]+/gu) || [];
      return matches.length >= 8;
    },
  },
  {
    name: "home hero legacy eyebrow is visually disabled",
    test: () => html.includes('#view-home > .hero .eyebrow,')
      && html.includes('#view-home > .hero #landingHeroTitle {\n      display: none;')
      || html.includes('#view-home > .hero #landingHeroTitle {\r\n      display: none;'),
  },
];

const failed = checks.filter((check) => !check.test());

if (failed.length) {
  console.error("Demo window check failed:");
  failed.forEach((check) => console.error(`- ${check.name}`));
  process.exit(1);
}

console.log(`Demo window check passed (${checks.length} checks).`);
