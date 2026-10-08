import { describe, expect, it } from "vitest";
import {
  getProduct,
  productStatusLabel,
  products,
} from "../../src/data/products";
import { isEmailAddress, isInternalPath } from "../../src/utils/validation";

describe("product configuration", () => {
  it("uses unique URL-safe slugs and non-empty content", () => {
    const slugs = products.map((product) => product.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    for (const product of products) {
      expect(product.slug).toMatch(/^[a-z0-9-]+$/);
      expect(product.summary.trim().length).toBeGreaterThan(20);
      expect(product.focus.length).toBeGreaterThan(0);
    }
  });

  it("keeps each published product status explicit", () => {
    for (const product of products) {
      expect(productStatusLabel(product.stage)).toBe("In Development");
    }
  });

  it("finds a product by its route slug", () => {
    expect(getProduct("pdf-automation")?.name).toBe("PDF Automation");
    expect(getProduct("vidoany")?.name).toBe("Vidoany");
    expect(getProduct("tokensaver")?.name).toBe("TokenSaver");
    expect(getProduct("unknown-product")).toBeUndefined();
  });
});

describe("content URL validation", () => {
  it("accepts internal absolute paths and rejects malformed paths", () => {
    expect(isInternalPath("/products/document-intelligence")).toBe(true);
    expect(isInternalPath("//untrusted.example/path")).toBe(false);
    expect(isInternalPath("/path with spaces")).toBe(false);
    expect(isInternalPath("products")).toBe(false);
  });

  it("checks the contact address format", () => {
    expect(isEmailAddress("founder@zevqio.site")).toBe(true);
    expect(isEmailAddress("not-an-email")).toBe(false);
  });
});
