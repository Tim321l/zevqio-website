import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://zevqio.site";
const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/products/nba-clip-mixer": "/products/basketball-clip-mixer",
    "/zh-hk/products/nba-clip-mixer": "/zh-hk/products/basketball-clip-mixer",
    "/zh-cn/products/nba-clip-mixer": "/zh-cn/products/basketball-clip-mixer",
    "/ja/products/nba-clip-mixer": "/ja/products/basketball-clip-mixer",
    "/ko/products/nba-clip-mixer": "/ko/products/basketball-clip-mixer",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
