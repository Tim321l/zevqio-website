# Content guide

## Brand

- Name: Zevqio
- Domain: `https://zevqio.site`
- Tagline: “Build Smarter. Work Faster.”
- Contact: `founder@zevqio.site`
- Description: independent, founder-led, bootstrapped, early-stage software initiative

## Product truth

All current product areas, Vidoany, and TokenSaver use **In Development**. Vidoany and TokenSaver are listed with deliberately general descriptions until their intended uses and capabilities are approved for public sharing. The copy is not a claim that a commercial product, capability, integration, or API is currently available. Keep status centralized in `src/data/products.ts`.

The homepage's **Selected Projects** section summarizes independent game development, web, and original audio work. It intentionally contains no invented titles, demos, or claims; add those once approved details are available.

## Claims to avoid

Do not add claims about customers, revenue, testimonials, partnerships, awards, certifications, funding, legal incorporation, production readiness, Anthropic endorsement, or a Claude API integration unless the founder provides approved evidence. Do not use employer code, customer documents, or proprietary screenshots.

## Updating content

1. Edit shared identity and navigation in `src/data/site.ts`.
2. Edit product copy and status in `src/data/products.ts`.
3. Keep page metadata distinct and accurate.
4. Update the privacy policy when the site begins using new data collection or third-party services.
5. Run `npm run typecheck`, `npm run test`, `npm run build`, and `npm run test:e2e` after meaningful content or route changes.
