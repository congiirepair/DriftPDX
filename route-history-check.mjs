import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFilePath = fileURLToPath(import.meta.url);
const workspaceDir = path.dirname(currentFilePath);
const html = fs.readFileSync(path.join(workspaceDir, "index.html"), "utf8");
const config = fs.readFileSync(path.join(workspaceDir, "client-config.js"), "utf8");

const checks = [
  {
    name: "home hero uses the current banner asset",
    test: () => html.includes('./assets/Drift PDX Rose Banner Stickers-01.png?v=20260414b'),
  },
  {
    name: "home hero hides the legacy wordmark block",
    test: () => html.includes('#view-home > .hero #landingHeroTitle {\n      display: none;')
      || html.includes('#view-home > .hero #landingHeroTitle {\r\n      display: none;'),
  },
  {
    name: "home quick actions render as four columns",
    test: () => html.includes('#view-home > .hero .public-event-actions {\n      width: min(920px, 100%);\n      grid-template-columns: repeat(4, minmax(0, 1fr));')
      || html.includes('#view-home > .hero .public-event-actions {\r\n      width: min(920px, 100%);\r\n      grid-template-columns: repeat(4, minmax(0, 1fr));'),
  },
  {
    name: "landing buttons still target the expected tabs",
    test: () => ["self-register", "qualifying", "results", "queue"].every((view) =>
      html.includes(`data-landing-jump="${view}"`)
    ),
  },
  {
    name: "client config points to the provided banner image",
    test: () => config.includes('logoPrimary: "./assets/Drift PDX Rose Banner Stickers-01.png?v=20260414b"')
      && config.includes('logoInverted: "./assets/Drift PDX Rose Banner Stickers-01.png?v=20260414b"'),
  },
  {
    name: "legacy brandmark asset references are gone",
    test: () => !html.includes("driftpdx-brandmark") && !config.includes("driftpdx-brandmark"),
  },
];

const failed = checks.filter((check) => !check.test());

if (failed.length) {
  console.error("Route/history check failed:");
  failed.forEach((check) => console.error(`- ${check.name}`));
  process.exit(1);
}

console.log(`Route/history check passed (${checks.length} checks).`);
