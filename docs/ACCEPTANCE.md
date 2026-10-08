# Acceptance checklist

## Routes

- `/`
- `/products`
- `/products/document-intelligence`
- `/products/pdf-automation`
- `/products/workflow-automation`
- `/products/vidoany`
- `/products/tokensaver`
- `/about`
- `/contact`
- `/privacy`
- `/404`

## Release checks

- [ ] All internal links resolve; mail links use `mailto:founder@zevqio.site`.
- [ ] Every page has a distinct title, description, canonical URL, and social metadata.
- [ ] Product status is centrally configured and displays “In Development”.
- [ ] GitHub Pages repository base path works for routes, assets, sitemap, and `robots.txt`.
- [ ] Mobile navigation works by pointer and keyboard and reports its expanded state.
- [ ] Theme follows the OS until selected manually, then persists in local storage.
- [ ] No horizontal overflow at 375×812, 768×1024, and 1440×900.
- [ ] No uncaught browser errors during route navigation.
- [ ] Keyboard focus is visible and reduced-motion preferences are respected.
- [ ] Privacy copy reflects current site behavior.
- [ ] `robots.txt` and the generated sitemap are reachable after deployment.
- [ ] Main-branch deployment runs only after lint, type, unit, browser, and build checks pass.

The browser suite covers route, navigation, theme, internal-link, console-error, keyboard-entry, and overflow checks. Manual review is still needed for screen-reader behavior and the published GitHub Pages URL. The custom domain and its DNS are not configured.
