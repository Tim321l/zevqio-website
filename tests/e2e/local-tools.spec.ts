import { expect, test } from "@playwright/test";

const prefix = (process.env.PUBLIC_BASE_PATH || "").replace(/\/$/, "");

for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
  test(`${locale}: only implemented tools are listed with original app images`, async ({
    page,
  }) => {
    const language = locale === "en" ? "" : `${locale}/`;
    await page.goto(`${language}products`);
    const productGrid = page.locator(".product-grid-page").first();
    const listedProductSlugs = await productGrid
      .locator(".product-card h3 a")
      .evaluateAll((links) =>
        links.map((link) =>
          (link as HTMLAnchorElement).pathname.split("/").filter(Boolean).pop(),
        ),
      );
    expect(listedProductSlugs).toEqual([
      "vidoany",
      "tokensaver",
      "monitor",
      "docupass",
      "basketball-clip-mixer",
    ]);
    await page.goto(`${language}products/basketball-clip-mixer`);
    await expect(page.locator("h1")).toContainText("Basketball Clip Mixer");
    await expect(page.locator(".detail-symbol-card")).toHaveCount(1);
    await expect(page.locator(".tool-image-link")).toHaveCount(0);
    await expect(page.locator(".project-depth-section")).toHaveCount(0);
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

test("forwards old localized basketball clip links to the renamed page", async ({
  page,
}) => {
  for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
    const language = locale === "en" ? "" : `${locale}/`;
    const target = `${prefix}/${language}products/basketball-clip-mixer`;
    await page.goto(`${prefix}/${language}products/nba-clip-mixer`);
    await expect(page).toHaveURL(
      (url) => url.pathname === target || url.pathname === `${target}/`,
    );
    await expect(page.locator("h1")).toContainText("Basketball Clip Mixer");
  }
});
