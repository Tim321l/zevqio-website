import { defineConfig, devices } from "@playwright/test";

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

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: `http://127.0.0.1:4321${basePath}/`,
    trace: "retain-on-failure",
    ...devices["Desktop Chrome"],
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "npm run preview -- --host 127.0.0.1",
    url: `http://127.0.0.1:4321${basePath}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
