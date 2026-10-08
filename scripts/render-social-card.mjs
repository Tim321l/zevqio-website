import { chromium } from "@playwright/test";
import { resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const source = resolve(projectRoot, "public/images/social-card.svg");
const output = resolve(projectRoot, "public/images/social-card.png");

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto(pathToFileURL(source).href);
  await page.screenshot({ path: output });
} finally {
  await browser.close();
}
