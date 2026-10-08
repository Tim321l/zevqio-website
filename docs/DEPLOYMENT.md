# Deploy to GitHub Pages

This project builds a static Astro site and deploys it to GitHub Pages through GitHub Actions at the existing custom domain, `https://zevqio.site/`. The custom-domain and DNS settings are managed separately and are not changed by this workflow.

## Build configuration

Astro uses `https://zevqio.site` as its default canonical site URL and `/` as its base path. The workflow sets `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` to those values explicitly so CSS, JavaScript, icons, navigation, the sitemap, and canonical URLs use root-domain paths.

The project remains static. Keep credentials and private business documents out of the public repository.

## GitHub Pages workflow

GitHub Pages is configured to use **GitHub Actions**. The workflow runs lint, type checks, unit tests, browser tests, and a production build before deploying `dist/` from pushes to `main`.

The live site is available at `https://zevqio.site/`.

## Check the published site

After the **Website checks** workflow completes, open the URL shown in its `github-pages` deployment environment. Confirm:

- The homepage, product pages, About, Contact, and Privacy pages load.
- Navigation, theme switching, and project section links work.
- CSS and JavaScript assets load from `/_astro/` and `/site-controls.js` with successful responses.
- `/robots.txt` and `/sitemap-index.xml` use `https://zevqio.site/`.
- The contact link opens `mailto:founder@zevqio.site`.
- The branded 404 page appears for an unknown route.

## Build locally

```sh
npm ci
npm run build
```

The generated site is written to `dist/`. The local development server continues to use `http://127.0.0.1:4321/`.
