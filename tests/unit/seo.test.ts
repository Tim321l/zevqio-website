import { describe, expect, it } from "vitest";
import { site } from "../../src/data/site";
import { selectedProjects } from "../../src/data/projects";
import { pageMetadata, canonicalUrl } from "../../src/utils/seo";

describe("SEO metadata", () => {
  it("builds canonical URLs from the configured site origin", () => {
    expect(canonicalUrl("/products")).toBe("https://zevqio.site/products");
  });

  it("returns a unique page title, description, and canonical URL", () => {
    const metadata = pageMetadata(
      "About",
      "A founder-led software initiative.",
      "/about",
    );

    expect(metadata.title).toBe(`About | ${site.name}`);
    expect(metadata.description).toBe("A founder-led software initiative.");
    expect(metadata.canonical).toBe("https://zevqio.site/about");
  });

  it("configures all top-level navigation links as site paths", () => {
    for (const item of site.navigation) {
      expect(item.href.startsWith("/")).toBe(true);
    }
  });

  it("keeps selected projects complete and uniquely named", () => {
    expect(new Set(selectedProjects.map((project) => project.name)).size).toBe(
      selectedProjects.length,
    );
    for (const project of selectedProjects) {
      expect(project.summary.trim().length).toBeGreaterThan(10);
      expect(project.tools.length).toBeGreaterThan(0);
    }
  });
});
