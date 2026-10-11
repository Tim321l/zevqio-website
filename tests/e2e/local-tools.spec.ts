import { expect, test } from "@playwright/test";

const prefix = (process.env.PUBLIC_BASE_PATH || "").replace(/\/$/, "");

for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
  test(`${locale}: only implemented tools are listed with original app images`, async ({
    page,
  }) => {
    const language = locale === "en" ? "" : `${locale}/`;
    await page.goto(`${language}products`);
    await expect(page.locator(".product-card h3")).toHaveText([
      "VidOutline",
      "TokenSaver",
      "Monitor",
    ]);
    await expect(page.locator("main")).not.toContainText(
      /OCR Studio|Document Intelligence|PDF Automation|Workflow Automation/,
    );
    for (const hidden of [
      "ocr-studio",
      "document-intelligence",
      "pdf-automation",
      "workflow-automation",
    ]) {
      const response = await page.request.get(
        `${prefix}/${language}products/${hidden}/`,
      );
      expect(response.status()).toBe(404);
    }
    for (const [slug, count] of [
      ["monitor", 1],
      ["tokensaver", 4],
    ] as const) {
      await page.goto(`${language}products/${slug}`);
      await expect(page.locator(".tool-image-link")).toHaveCount(count);
      await expect(page.locator(".project-spec-card")).toHaveCount(6);
      for (const link of await page.locator(".tool-image-link").all()) {
        const path = await link.getAttribute("href");
        expect(path).toMatch(/\/images\/projects\//);
        expect((await page.request.get(path!)).status()).toBe(200);
      }
      if (locale === "zh-hk") {
        for (const width of [375, 1440]) {
          await page.setViewportSize({
            width,
            height: width === 375 ? 812 : 1000,
          });
          await page.screenshot({
            path: `test-results/tool-${slug}-${width}.png`,
            fullPage: true,
          });
        }
      }
    }
  });
}
