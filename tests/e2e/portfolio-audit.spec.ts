import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.setTimeout(90_000);

for (const width of [375, 1440]) {
  test(`language, theme and game navigation work at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const slug of [
      "rimrise-unity",
      "rimrise-web",
      "bigdeal",
      "song-guess",
    ]) {
      await page.goto(`zh-hk/projects/${slug}`);
      const menu = page.locator("[data-menu-toggle]");
      if (width === 375) await menu.click();
      const language = page.locator(".language-switcher summary");
      await language.click();
      await expect(page.locator(".language-menu")).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator(".language-switcher")).not.toHaveAttribute(
        "open",
        "",
      );
      await expect(language).toBeFocused();
      if (width === 375)
        await expect(menu).toHaveAttribute("aria-expanded", "true");
      await language.click();
      await page.locator(".detail-preview-hero").click();
      await expect(page.locator(".language-menu")).not.toBeVisible();
      await language.click();
      const english = page.locator('.language-menu a[lang="en"]');
      await expect(english).toHaveAttribute(
        "href",
        `${(process.env.PUBLIC_BASE_PATH || "").replace(/\/$/, "")}/projects/${slug}`,
      );
      await english.click();
      await expect(page).toHaveURL(new RegExp(`/projects/${slug}$`));
      if (width === 375) await menu.click();
      const theme = page.locator("[data-theme-toggle]");
      const before = await page.locator("html").getAttribute("data-theme");
      await theme.click();
      expect(await page.locator("html").getAttribute("data-theme")).not.toBe(
        before,
      );
      if (width === 375) await page.keyboard.press("Escape");
      await page
        .locator('.game-section-nav a[href="#project-screenshots"]')
        .click();
      expect(
        await page
          .locator("#project-screenshots")
          .evaluate((node) => node.getBoundingClientRect().top),
      ).toBeGreaterThanOrEqual(70);
      await page.locator('.game-switcher a[aria-current="page"]').focus();
      await page.keyboard.press("Tab");
      await page.keyboard.press("Shift+Tab");
      expect(
        await page
          .locator(":focus")
          .evaluate((node) => getComputedStyle(node).outlineStyle),
      ).toBe("solid");
    }
  });
}

const pages = [
  "",
  "products",
  "products/vidoany",
  "products/tokensaver",
  "products/monitor",
  "products/docupass",
  "products/basketball-clip-mixer",
  "projects/rimrise-unity",
  "projects/rimrise-web",
  "projects/bigdeal",
  "projects/song-guess",
  "about",
  "contact",
  "privacy",
];

for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
  for (const route of pages) {
    test(`${locale}/${route || "home"}: complete responsive and accessibility review`, async ({
      page,
    }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const path = [locale === "en" ? "" : locale, route]
        .filter(Boolean)
        .join("/");
      const response = await page.goto(path || ".");
      expect(response?.ok()).toBe(true);
      await expect(page.locator("main h1")).toHaveCount(1);
      if (route && route !== "privacy") {
        const activeLink = page.locator(".nav-link[aria-current='page']");
        await expect(activeLink).toHaveCount(1);
        const prefix = locale === "en" ? "" : `/${locale}`;
        const target = route.startsWith("projects/")
          ? `${locale === "en" ? "/" : ""}#selected-projects`
          : route === "products/docupass"
            ? `/${route}`
            : `/${route.split("/")[0]}`;
        await expect(activeLink).toHaveAttribute(
          "href",
          `${(process.env.PUBLIC_BASE_PATH || "").replace(/\/$/, "")}${prefix}${target}`,
        );
      }

      for (const theme of ["light", "dark"]) {
        await page.evaluate(
          (value) => document.documentElement.setAttribute("data-theme", value),
          theme,
        );
        for (const width of [320, 375, 768, 1440]) {
          await page.setViewportSize({
            width,
            height: width < 768 ? 812 : 1000,
          });
          expect(
            await page.evaluate(() => document.documentElement.scrollWidth),
            `${path}: ${theme} at ${width}px`,
          ).toBeLessThanOrEqual(width);
          await expect(page.locator("main h1")).toBeVisible();
        }
        await page.setViewportSize({ width: 375, height: 812 });
        if (!route) {
          await expect(page.locator(".contact-band h2")).toHaveCSS(
            "color",
            "rgb(240, 246, 253)",
          );
        }
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(
          result.violations.map(({ id, nodes }) => ({
            id,
            targets: nodes.map(({ target }) => target),
          })),
          `${path}: ${theme}`,
        ).toEqual([]);
      }

      for (const image of await page.locator("main img:visible").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect(image).toHaveJSProperty("complete", true);
        expect(
          await image.evaluate(
            (node) => (node as HTMLImageElement).naturalWidth,
          ),
        ).toBeGreaterThan(0);
      }
      const missingAnchors = await page
        .locator('a[href^="#"]')
        .evaluateAll((links) =>
          links
            .map((link) => link.getAttribute("href")!)
            .filter(
              (href) =>
                href.length > 1 &&
                !document.getElementById(decodeURIComponent(href.slice(1))),
            ),
        );
      expect(missingAnchors).toEqual([]);
      expect(errors).toEqual([]);

      if (
        locale === "zh-hk" &&
        (route.startsWith("projects/") || route === "" || route === "products")
      ) {
        const name = route.split("/").pop() || "home";
        for (const theme of ["light", "dark"]) {
          await page.evaluate(
            (value) =>
              document.documentElement.setAttribute("data-theme", value),
            theme,
          );
          for (const width of [375, 1440]) {
            await page.setViewportSize({
              width,
              height: width === 375 ? 812 : 1000,
            });
            await page.evaluate(() => window.scrollTo(0, 0));
            await page.screenshot({
              path: `test-results/ui-review-${name}-${theme}-${width}.png`,
              fullPage: true,
            });
          }
        }
      }
    });
  }
}
