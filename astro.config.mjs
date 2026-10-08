import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const [repositoryOwner, repositoryName] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/");
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" &&
  Boolean(repositoryOwner && repositoryName);
const site =
  process.env.PUBLIC_SITE_URL ||
  (isGitHubPagesBuild
    ? `https://${repositoryOwner}.github.io`
    : "https://zevqio.site");
const base =
  process.env.PUBLIC_BASE_PATH ||
  (isGitHubPagesBuild && repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}`
    : "/");

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
