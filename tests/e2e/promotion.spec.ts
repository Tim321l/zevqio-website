import { expect, test } from "@playwright/test";
const routes = [
  "products/vidoany",
  "products/tokensaver",
  "products/monitor",
  "products/docupass",
  "products/basketball-clip-mixer",
  "products/smartcart-ai",
  "products/web-control-studio",
  "projects/rimrise-unity",
  "projects/rimrise-web",
  "projects/bigdeal",
  "projects/song-guess",
];
for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
  test(`${locale}: visitors can understand each project and request a walkthrough`, async ({
    page,
  }) => {
    for (const route of routes) {
      await page.goto(`${locale === "en" ? "" : locale + "/"}${route}`);
      await expect(page.locator(".promotion-audience")).toBeVisible();
      await expect(page.locator("#product-journey h3")).toHaveCount(3);
      const enquiry = page.locator(".promotion-enquiry a");
      const href = await enquiry.getAttribute("href");
      expect(href).toMatch(/^mailto:founder@zevqio\.site\?subject=/);
      const subject = new URL(href!).searchParams.get("subject");
      expect(subject!.length).toBeGreaterThan(10);
      await expect(page.locator('main a[href*="github.com"]')).toHaveCount(0);
      await expect(
        page.locator(".promotion-actions a").first(),
      ).toHaveAttribute("href", href!);
      await page.setViewportSize({ width: 375, height: 812 });
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(375);
    }
  });
}
