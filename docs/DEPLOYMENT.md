# Deploy to GitHub Pages

This project builds a static Astro site and deploys it to GitHub Pages through GitHub Actions. It uses the GitHub Pages URL; the custom domain is not configured.

## 1. Create the GitHub repository

Create a repository named `zevqio-website` and push the `main` branch. The repository should be public to use GitHub Pages on GitHub Free. Keep credentials and private business documents out of the repository.

## 2. Enable GitHub Pages

In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. The included workflow runs lint, type checks, unit tests, browser tests, and a production build before deploying `dist/` from pushes to `main`.

The first successful deployment will be available at:

```text
https://<github-owner>.github.io/zevqio-website/
```

Astro uses the repository name as the base path for project pages. Route links, assets, canonical URLs, the sitemap, and `robots.txt` are built with that path.

## 3. Check the published site

After the **Website checks** workflow completes, open the URL shown in its `github-pages` deployment environment. Confirm:

- The homepage, product pages, About, Contact, and Privacy pages load.
- Navigation, theme switching, and project section links work.
- `/robots.txt` and `/sitemap-index.xml` use the GitHub Pages URL.
- The contact link opens `mailto:founder@zevqio.site`.
- The branded 404 page appears for an unknown route.

## Custom domain later

The GitHub Pages URL works without a custom domain. If you later attach `zevqio.site`, set repository Actions variables `PUBLIC_SITE_URL` to `https://zevqio.site` and `PUBLIC_BASE_PATH` to `/`, then configure the domain in **Settings → Pages**. Follow GitHub's DNS instructions at that time. Preserve any existing email-routing MX and TXT records.

## Build locally

```sh
npm ci
npm run build
```

The generated site is written to `dist/`. The local development server continues to use `http://127.0.0.1:4321/`.
