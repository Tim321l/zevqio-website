import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/products",
  "/products/document-intelligence",
  "/products/pdf-automation",
  "/products/workflow-automation",
  "/products/vidoany",
  "/products/tokensaver",
  "/about",
  "/contact",
  "/privacy",
];

const [repositoryOwner, repositoryName] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  Boolean(repositoryOwner && repositoryName);
const configuredBase =
  process.env.PUBLIC_BASE_PATH ||
  (isGitHubPagesBuild && repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}`
    : "");
const basePath = configuredBase.replace(/\/$/, "");
const siteOrigin = (
  process.env.PUBLIC_SITE_URL ||
  (isGitHubPagesBuild
    ? `https://${repositoryOwner}.github.io`
    : "https://zevqio.site")
).replace(/\/$/, "");
const publicPath = (path: string): string =>
  `${basePath}${path === "/" ? "/" : path}`;
const localRoute = (path: string): string =>
  path === "/" ? "." : path.replace(/^\/+/, "");
const canonicalFor = (path: string): string =>
  `${siteOrigin}${publicPath(path)}`;

test("homepage presents the brand and working primary actions", async ({
  page,
}) => {
  await page.goto(localRoute("/"));
  await expect(
    page.getByRole("heading", { name: /build smarter\.? work faster\.?/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /explore products/i }).first(),
  ).toHaveAttribute("href", publicPath("/products"));
  await expect(page.locator("#selected-projects")).toBeVisible();
  await expect(
    page
      .locator("#selected-projects")
      .getByRole("heading", { name: /work across code and sound/i }),
  ).toBeVisible();
  await expect(page.getByText("Godot", { exact: true })).toBeVisible();
  await expect(page.getByText("Unity", { exact: true })).toBeVisible();
  await expect(page.getByText("Original audio", { exact: true })).toBeVisible();
  await expect(
    page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Contact", exact: true }),
  ).toHaveAttribute("href", publicPath("/contact"));
});

test("mobile navigation opens, exposes links, and closes after selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(localRoute("/"));
  const menu = page.locator("[data-menu-toggle]");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  const productsLink = page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Products" });
  await expect(productsLink).toBeVisible();
  await productsLink.click();
  await expect(page).toHaveURL(/\/products$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("Escape closes mobile navigation and returns focus to its button", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(localRoute("/"));
  const menu = page.locator("[data-menu-toggle]");
  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
});

test("theme selection persists after reload", async ({ page }) => {
  await page.goto(localRoute("/"));
  const themeButton = page.locator("[data-theme-toggle]");
  await themeButton.click();
  const selectedTheme = await page.locator("html").getAttribute("data-theme");
  expect(selectedTheme).toMatch(/^(light|dark)$/);
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem("zevqio-theme")))
    .toBe(selectedTheme);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute(
    "data-theme",
    selectedTheme!,
  );
});

test("initial theme follows the operating system preference", async ({
  page,
}) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto(localRoute("/"));
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("production JavaScript is same-origin for the static content policy", async ({
  page,
}) => {
  await page.goto(localRoute("/"));
  await expect(
    page.locator(`script[src="${publicPath("/site-controls.js")}"]`),
  ).toHaveCount(1);
  await expect(page.locator("script:not([src])")).toHaveCount(0);
});

test("robots and sitemap files are reachable and use canonical route paths", async ({
  request,
}) => {
  const robots = await request.get("robots.txt");
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain(
    `${siteOrigin}${publicPath("/sitemap-index.xml")}`,
  );

  const sitemapIndex = await request.get("sitemap-index.xml");
  expect(sitemapIndex.ok()).toBe(true);
  expect(await sitemapIndex.text()).toContain("sitemap-0.xml");

  const sitemap = await request.get("sitemap-0.xml");
  const sitemapXml = await sitemap.text();
  expect(sitemap.ok()).toBe(true);
  expect(sitemapXml).toContain(canonicalFor("/products"));
  expect(sitemapXml).not.toContain(`${canonicalFor("/products")}/</loc>`);
});

test("all required product details render with development status", async ({
  page,
}) => {
  for (const route of routes.filter(
    (path) => path.startsWith("/products/") && path !== "/products",
  )) {
    await page.goto(localRoute(route));
    await expect(page.locator("main h1")).toBeVisible();
    await expect(
      page.getByText("In Development", { exact: true }).first(),
    ).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      canonicalFor(route),
    );
  }
});

test("contact path opens a real email link", async ({ page }) => {
  await page.goto(localRoute("/contact"));
  await expect(
    page.getByRole("link", { name: /founder@zevqio\.site/i }),
  ).toHaveAttribute("href", "mailto:founder@zevqio.site");
});

test("unknown routes receive the branded not-found page", async ({ page }) => {
  const response = await page.goto(localRoute("/this-page-does-not-exist"));
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: /path wandered off/i }),
  ).toBeVisible();
});

test("internal links resolve and every page has a unique title and description", async ({
  page,
  request,
}) => {
  const titles = new Set<string>();
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const route of routes) {
    const response = await page.goto(localRoute(route));
    expect(response?.ok(), `${route} should load`).toBe(true);
    const title = await page.title();
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(title.length).toBeGreaterThan(8);
    expect(description?.length).toBeGreaterThan(20);
    expect(titles.has(title), `${route} title should be unique`).toBe(false);
    titles.add(title);

    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) =>
        links.map(
          (link) =>
            (link as HTMLAnchorElement).getAttribute("href")?.split("#")[0] ??
            "/",
        ),
      );
    for (const href of new Set(hrefs)) {
      const linkResponse = await request.get(href || publicPath("/"));
      expect(
        linkResponse.ok(),
        `Internal link ${href} from ${route} should resolve`,
      ).toBe(true);
    }
  }

  expect(errors).toEqual([]);
});

test("layout stays within the viewport at target widths", async ({ page }) => {
  for (const viewport of [
    { width: 375, height: 812 },
    { width: 768, height: 1024 },
    { width: 1440, height: 900 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto(localRoute("/"));
    const dimensions = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    }));
    expect(
      dimensions.documentWidth,
      `No horizontal overflow at ${viewport.width}px`,
    ).toBeLessThanOrEqual(dimensions.viewportWidth);
  }
});

test("skip link is the first keyboard stop", async ({ page }) => {
  await page.goto(localRoute("/"));
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toHaveText("Skip to content");
});

test("key pages meet automated WCAG 2.2 AA checks in both themes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/products", "/about", "/contact", "/privacy"]) {
    await page.goto(localRoute(route));
    for (let themeIndex = 0; themeIndex < 2; themeIndex += 1) {
      if (themeIndex === 1) await page.locator("[data-theme-toggle]").click();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(
        results.violations.map((violation) => ({
          id: violation.id,
          impact: violation.impact,
          nodes: violation.nodes.map((node) => ({
            target: node.target,
            summary: node.failureSummary,
          })),
        })),
        `${route} should have no WCAG 2.2 AA violations in theme ${themeIndex}`,
      ).toEqual([]);
    }
  }
});
