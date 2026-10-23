# Whole-site layout audit

Reviewed: 24 October 2026 (Hong Kong). Executor: layout review agent. Scope: the existing static Astro site, all eleven projects and five locales. No publishing or repository commits were performed.

## Method and design direction

The review preserves the existing Zevqio brand, local app captures, factual development status and established page families. UI UX Pro Max was used for guidance on consistent hierarchy, semantic headings, complete image presentation and responsive layout. Existing shared typography, color tokens, shell widths and breakpoints remain the design foundation. Product summaries should answer what a tool does; technical evidence belongs on its detail page. Image proportions may vary with their source, while preview stages need sensible upper bounds. Game showcases and DocuPass retain their deliberate distinct layouts and controls.

Baseline and final captures cover home, catalog, Web Control Studio, TokenSaver, DocuPass, BigDeal, about, contact and privacy, each at 375 and 1440 pixels in light and dark themes: 36 captures per revision. The complete browser suite additionally checks every content route across all five locales, four widths (320, 375, 768, 1440) and both themes, including every remaining product and game detail family. This combines representative visual judgment with route-wide behavioral and accessibility checks.

## Prioritized findings and completed plan

| Priority | Verified finding                                                                                                                                                                                                                | Completed correction                                                                                                                                                                                                                                                                                 | Files                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| P1       | Status pills and home project stage labels used a pale hardcoded green in both themes, making light-mode status difficult to read.                                                                                              | Use the existing theme-aware `--mint` token: light rgb(8,115,95), dark rgb(99,215,192). Development status remains visible text.                                                                                                                                                                     | global.css                                  |
| P1       | Product, game and DocuPass evidence actions requested `button-secondary`, which had no style definition. Secondary actions therefore lacked the established outline treatment.                                                  | Use the shared `button-outline` style across all three components; preserve destinations and playback hooks. Mobile product actions allow wrapped labels and have at least 44px height.                                                                                                              | LocalizedPage.astro, DocuPassFeatures.astro |
| P2       | Catalog tool cards mixed a benefit summary with up to four long technical features. Game cards added lengthy feature explanations and stack labels. Mobile catalog cards ranged from 582 to 962px, making comparison laborious. | Home/catalog tool cards use the existing three localized journey steps under their benefit summary. Catalog game cards retain full summaries and three concise feature titles. Detailed explanations and technical stacks remain on detail pages. No essential text is truncated, clamped or hidden. | LocalizedPage.astro                         |
| P2       | Web Control's tall capture expanded the hero: 1319px mobile and 751px desktop, compared with TokenSaver's 1143px and 693px. Its gallery rows were also much taller than surrounding tool galleries.                             | Bound standard tool hero images to 360px desktop / 280px mobile, and gallery images to 480px / 360px. Images remain complete with contain sizing and full-size gallery links. Landscape screens retain natural height below the cap; DocuPass's established image layout remains distinct.           | global.css                                  |
| P2       | The catalog game heading followed the final tool card without a section-level gap. Home and catalog tool category spacing also differed.                                                                                        | Add a responsive 56–96px section gap and use matching 16px category spacing on both card families. Existing responsive grids keep equal heights within each row.                                                                                                                                     | global.css                                  |
| P3       | Every project journey repeated its heading below the three steps; product overview content began only 18px below its preceding gallery boundary.                                                                                | Remove the redundant repeated label and its unused style. Give the overview a responsive 48–80px top inset.                                                                                                                                                                                          | ProjectPromotion.astro, global.css          |

## Measured outcomes

Measurements use English content with reduced motion and fully loaded local images. Theme changes do not alter geometry.

| Measurement                                          | Before    | After     |
| ---------------------------------------------------- | --------- | --------- |
| Catalog card height range at 375px                   | 582–962px | 546–651px |
| Catalog tool card range at 375px                     | 582–792px | 546–590px |
| Catalog tool card range at 1440px                    | 587–731px | 552–578px |
| Catalog game card range at 1440px                    | 803–887px | 604–631px |
| Web Control hero at 375px                            | 1319px    | 1196px    |
| Web Control hero at 1440px                           | 751px     | 655px     |
| TokenSaver hero at 375px                             | 1143px    | 1135px    |
| Horizontal overflow in representative capture matrix | 0 / 36    | 0 / 36    |

Equal hero heights are not imposed: text length, source capture shape and the game/DocuPass presentation still determine natural flow. This prevents whitespace inflation or cropped evidence merely to enforce identical dimensions.

## Page-family review

- Home: shared tool cards are shorter and clearer; game cards keep their established two-column editorial presentation. Featured DocuPass evidence, workflow, studio and enquiry sections remain intact.
- Catalog: all seven tools and four games remain discoverable. Summaries, localized status, screenshots and project links remain; game section has a clear beginning.
- Standard products: tall and landscape captures are bounded without cropping; original-size links and disclaimers remain. Journey, gallery, overview and specifications have a clearer rhythm.
- DocuPass: distinct wide hero, six-chapter story, tour, OCR evidence and export links remain. Its secondary evidence action now matches other outlined actions.
- Games: game-specific colors, complete source captures, demos, screenshot tour and section navigation remain. Their single-column hero is intentional and supports wide game media.
- About/contact/privacy: shared shell, hero type and text widths are coherent; no structural redesign was warranted. Email remains a direct mailto enquiry with no fake submission form.
- Navigation: existing active states, language preservation, mobile menu, Escape behavior, theme controls and focus outlines remain covered by the browser suite.

## Evidence locations

Stable capture archive: `/tmp/zevqio-layout-review/`. Captures were kept outside Playwright's output directory because a browser-suite run clears that directory. The baseline was reproduced from the checkout's original four source files, then final edited sources were restored and rebuilt before final capture/testing.

Each `before/` and `after/` folder contains full-page PNG files named `<route-with-hyphens>-<light|dark>-<375|1440>.png`, with `home` representing `/`, plus `measurements.json`.

Representative pairs:

- Catalog: `/tmp/zevqio-layout-review/before/products-light-1440.png` → `/tmp/zevqio-layout-review/after/products-light-1440.png`.
- Catalog dark: `/tmp/zevqio-layout-review/before/products-dark-1440.png` → `/tmp/zevqio-layout-review/after/products-dark-1440.png`.
- Tall-screen mobile: `/tmp/zevqio-layout-review/before/products-web-control-studio-light-375.png` → `/tmp/zevqio-layout-review/after/products-web-control-studio-light-375.png`.
- Tall-screen dark desktop: `/tmp/zevqio-layout-review/before/products-web-control-studio-dark-1440.png` → `/tmp/zevqio-layout-review/after/products-web-control-studio-dark-1440.png`.
- Home: `/tmp/zevqio-layout-review/before/home-light-1440.png` → `/tmp/zevqio-layout-review/after/home-light-1440.png`.
- Additional final viewport overview: `/tmp/zevqio-layout-review/after/page-family-review.jpg`.

Full route-suite captures remain in the ignored `test-results/` directory; these include localized home/catalog/game families in both themes at mobile and desktop widths. Temporary captures/logs are local review evidence and are not public website assets.

## Verification

All required commands completed against the final edited source and rebuilt preview at `http://127.0.0.1:4387`:

| Check                                                  | Result                                       | Command log                    |
| ------------------------------------------------------ | -------------------------------------------- | ------------------------------ |
| `npm run lint`                                         | Passed: ESLint and Prettier                  | `/tmp/zevqio-layout-lint.log`  |
| `npm run typecheck`                                    | Passed: 60 files, zero errors/warnings/hints | `/tmp/zevqio-layout-types.log` |
| `npm run test`                                         | Passed: 9 tests in 2 files                   | `/tmp/zevqio-layout-unit.log`  |
| `npm run build`                                        | Passed: 81 generated pages including 404     | `/tmp/zevqio-layout-build.log` |
| `PLAYWRIGHT_PORT=4387 npm run test:e2e -- --workers=4` | Passed: complete 122-test Chromium suite     | `/tmp/zevqio-layout-e2e.log`   |
| `git diff --check`                                     | Passed                                       | Local checkout review          |

The full suite covers WCAG-tagged axe checks, overflow at four widths in both themes, loaded media, valid section anchors, active navigation, language/theme controls, direct mailto enquiries, demo playback and keyboard tour controls, DocuPass story/reduced-motion behavior, internal links, metadata, static assets and branded 404 behavior. An initial exploratory browser run was stopped before completion to include the final contrast correction; the results above refer to the later complete run.

The coordinator independently reviewed catalog before/after, dark Web Control and a fresh mobile hero capture and requested no additional design changes. Executor visual review also inspected standard product, DocuPass, game, about, contact and privacy viewport compositions, plus full-page mobile/dark catalog and Web Control captures.

### Acceptance mapping

1. Evidence-based whole-site audit and prioritized plan: Method, findings table and page-family review above; stable baseline/final screenshot matrix.
2. Shared fixes preserving eleven projects/five locales: four edited shared presentation files; unchanged project/locale data; full route suite and catalog checks.
3. Responsive media/navigation/enquiries/demos/accessibility and required checks: command table above, complete 122-test suite, zero overflow in the representative capture matrix.
4. Auditable completed-fix report and limitations: this report, measured outcomes, exact capture/log locations and the limits below.

## Limits and follow-up

The automated browser run uses Chromium and accessibility heuristics, supplemented by representative visual review. It does not certify Safari/Firefox, real device rendering, every possible zoom/font setting or usability with real users. Real app screenshots retain their source interface language; captions and surrounding presentation remain localized. Smaller bounded previews communicate the interface shape; users can inspect full-size captures on detail pages. No brand replacement, invented availability, pricing, external media, backend or public source-code links were added.
