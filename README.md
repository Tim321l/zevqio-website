# Zevqio website

A static, multi-page website for Zevqio, an independent, founder-led software initiative focused on practical document and workflow tools.

## Stack

- Astro with static output
- TypeScript strict configuration
- Tailwind CSS v4 through the official Vite plugin
- Lucide icons for Astro
- Vitest unit tests and Playwright browser tests
- ESLint and Prettier
- GitHub Pages deployment through GitHub Actions

The generated site is written to `dist/`. There is no backend, database, contact form, analytics script, or runtime AI API dependency.

## Local development

Use Node.js 24 LTS and npm. The `.nvmrc` file selects the Node 24 line.

```sh
npm ci
npm run dev
```

Useful checks:

```sh
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Playwright requires its Chromium browser to be installed once on a new machine:

```sh
npx playwright install chromium
```

The browser suite reviews all 60 content routes across five languages in both themes at 320, 375, 768, and 1440 pixels. It checks accessibility, image loading, page anchors, active navigation, and the game pages' language, theme, keyboard, and screenshot controls. Review captures are saved under the ignored `test-results/` directory. On a busy local computer, use `npm run test:e2e -- --workers=4` to reduce browser resource use. These checks run in Chromium; they do not certify other browsers or replace testing with real users.

After editing the social preview source SVG, regenerate its PNG with `npm run social:render`.

## Pages

- `/` — studio overview and local prompt preparation workflow
- `/products` — product portfolio
- `/products/vidoany`
- `/products/tokensaver` — Promptwell local prompt preparation, four real captures
- `/products/monitor` — local Windows resource dashboard and real capture
- Homepage selected projects section for game development, web, and original audio work
- `/projects/rimrise-unity` — Unity basketball prototype
- `/projects/rimrise-web` — browser basketball career project
- `/projects/bigdeal` — Hong Kong property card game prototype
- `/projects/song-guess` — multiplayer music quiz interface prototype
- `/about`
- `/contact`
- `/privacy`
- `/404` — branded not-found page
- Localized versions of the homepage, product pages, about, contact, and privacy pages:
  - `/zh-cn/` — Simplified Chinese
  - `/zh-hk/` — Traditional Chinese
  - `/ja/` — Japanese
  - `/ko/` — Korean

The language menu keeps the current page when switching languages. Game descriptions, screenshot captions, and navigation are localized in every supported language. Each game page includes its background, current features, three local captures with original-size image links, and navigation to all four game projects. The captured game interfaces retain the language of their source builds. Concept-only products are hidden. Tool descriptions and captions are translated; the real app captures retain their source interface language.

Product names, descriptions, status labels, homepage capabilities, navigation, contact details, and SEO helpers are kept in `src/data/` and `src/utils/`.

## Deployment

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for GitHub Pages setup. The workflow builds for the existing root custom domain, `https://zevqio.site/`, and deploys through GitHub Actions.

## Project notes

- Product areas are labeled **In Development** and do not claim public availability.
- Zevqio is presented as an independent software initiative, without a company suffix or invented credentials.
- The contact address is a direct `mailto:` link. Messages are not submitted to or stored by this site.
- The theme preference is stored in browser local storage only.
- SEO and asset paths use the root custom domain by default. Set `PUBLIC_BASE_PATH` only when intentionally building for a subpath.
