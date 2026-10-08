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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
