import { expect, test } from "@playwright/test";

test("project recordings decode and play on request without autoplay", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const slug of ["rimrise-web", "bigdeal", "song-guess"]) {
    await page.goto("projects/" + slug);
    const clips = page.locator("#gameplay-demo video");
    expect(await clips.count()).toBeGreaterThan(0);
    for (const clip of await clips.all()) {
      await expect(clip).not.toHaveAttribute("autoplay");
      await expect(clip).toHaveJSProperty("paused", true);
      await clip.evaluate(async (node) => {
        const video = node as HTMLVideoElement;
        video.muted = true;
        await video.play();
      });
      await expect
        .poll(() =>
          clip.evaluate((node) => (node as HTMLVideoElement).currentTime),
        )
        .toBeGreaterThan(0.1);
      expect(
        await clip.evaluate((node) => (node as HTMLVideoElement).videoWidth),
      ).toBeGreaterThan(0);
      await clip.evaluate((node) => (node as HTMLVideoElement).pause());
    }
  }
});

test("Unity screen tour supports manual selection, keyboard and opt-in playback", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("projects/rimrise-unity");
  const steps = page.locator("[data-tour-step]");
  const selected = page.locator("[data-tour-step][aria-pressed='true']");
  for (const step of await steps.all()) {
    await step.click();
    const image = page.locator("[data-tour-screen]:visible img");
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((node) => (node as HTMLImageElement).naturalWidth),
    ).toBeGreaterThan(0);
  }
  await steps.last().click();
  await expect(selected).toContainText("Inside the player");
  await expect(page.locator("[data-tour-screen]:visible img")).toHaveJSProperty(
    "complete",
    true,
  );
  await page.keyboard.press("ArrowRight");
  await expect(selected).toContainText("Career hub");
  const play = page.getByRole("button", {
    name: "Play screen tour",
    exact: true,
  });
  await play.click();
  const pause = page.getByRole("button", {
    name: "Pause screen tour",
    exact: true,
  });
  await expect(pause).toHaveAttribute("aria-pressed", "true");
  await expect(selected).toContainText("Full-court 5v5", { timeout: 6000 });
  await pause.click();
  await expect(play).toHaveAttribute("aria-pressed", "false");
  await page.waitForTimeout(4500);
  await expect(selected).toContainText("Full-court 5v5");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
