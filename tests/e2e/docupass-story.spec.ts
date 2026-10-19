import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("DocuPass story plays, supports keyboard navigation and pauses for interaction", async ({
  page,
}) => {
  await page.goto("products/docupass");
  const story = page.locator("[data-docu-story]");
  await page
    .getByRole("link", { name: "Play the product story", exact: true })
    .click();
  await expect(story).toHaveAttribute("data-playing", "true");
  await story.getByRole("button", { name: "Pause story", exact: true }).click();
  await expect(story).toHaveAttribute("data-playing", "false");
  const tabs = story.getByRole("tab");
  await expect(tabs).toHaveCount(6);
  await expect(story.getByRole("tabpanel")).toHaveCount(1);
  await tabs.first().focus();
  await page.keyboard.press("ArrowRight");
  await expect(tabs.nth(1)).toBeFocused();
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
  await expect(story.getByRole("tabpanel")).toContainText("A mixed batch");
  await page.keyboard.press("Home");
  await expect(tabs.first()).toBeFocused();
  await story
    .getByRole("button", { name: "Play the product story", exact: true })
    .click();
  await expect(story).toHaveAttribute("data-playing", "true");
  await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true", {
    timeout: 12000,
  });
  await tabs.nth(3).click();
  await expect(story).toHaveAttribute("data-playing", "false");
  await expect(story.getByRole("tabpanel")).toContainText("OpenAI-compatible");
  await expect(story.getByRole("tabpanel")).toContainText("OCR text only");
  await page
    .getByRole("link", { name: "See app screens", exact: true })
    .first()
    .click();
  await expect(page.locator(".docu-gallery-details")).toHaveAttribute(
    "open",
    "",
  );
  for (const image of await page.locator(".docu-gallery-details img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((node) => (node as HTMLImageElement).naturalWidth),
    ).toBeGreaterThan(0);
    await expect(image).toHaveAttribute("src", /docupass-current-/);
  }
});

test("reduced motion keeps chapters available without playback", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("products/docupass#docupass-features");
  const story = page.locator("[data-docu-story]");
  await expect(story.locator("[data-docu-play]")).toBeDisabled();
  await expect(story).toHaveAttribute("data-playing", "false");
  const first = story.getByRole("tab").first();
  await first.focus();
  await page.keyboard.press("End");
  await expect(story.getByRole("tab").last()).toBeFocused();
  await expect(story.getByRole("tabpanel")).toContainText("local network");
  await expect(page.locator(".docu-platform-grid article")).toHaveCount(4);
  await expect(page.locator(".docu-platforms")).toContainText(
    "real-device validation",
  );
});

for (const locale of ["en", "zh-hk", "zh-cn", "ja", "ko"]) {
  test(`${locale}: story remains readable and accessible on mobile and desktop`, async ({
    page,
  }) => {
    const prefix = locale === "en" ? "" : `${locale}/`;
    await page.goto(`${prefix}products/docupass#docupass-features`);
    for (const width of [375, 1440]) {
      await page.setViewportSize({ width, height: 1000 });
      for (const theme of ["light", "dark"]) {
        await page.evaluate(
          (value) => (document.documentElement.dataset.theme = value),
          theme,
        );
        for (const tab of await page.locator("[data-docu-tab]").all()) {
          await tab.click();
          expect(
            await page.evaluate(
              () => document.documentElement.scrollWidth <= window.innerWidth,
            ),
          ).toBe(true);
        }
        await expect(
          page.locator(".docu-story-scene:visible .docu-scene-visual"),
        ).toHaveCSS("opacity", "1");
        await expect(
          page.locator(".docu-story-scene:visible .docu-scene-copy"),
        ).toHaveCSS("opacity", "1");
        const result = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze();
        expect(
          result.violations.map(({ id, nodes }) => ({
            id,
            targets: nodes.map((node) => node.target),
          })),
        ).toEqual([]);
      }
      await page.locator("[data-docu-tab]").first().click();
      await page.locator(".docu-story").scrollIntoViewIfNeeded();
      await page.locator(".docu-story").screenshot({
        path: `test-results/docupass-story-${locale}-${width}.png`,
        animations: "disabled",
      });
    }
  });
}
