# Project demos and engineering evidence

## Outcome

Help portfolio visitors understand what each game does and which engineering skills its implemented features demonstrate. Preserve the current site layout and factual prototype status.

## Requirements

- Add short local recordings for runnable project flows. Label UI-only recordings and screenshot tours clearly.
- Add project-specific engineering explanations with source-file links for all four games.
- Keep all added visitor-facing copy localized in English, Traditional Chinese, Simplified Chinese, Japanese and Korean.
- Give every recording a poster, native playback controls and a concise explanation. Do not autoplay; respect reduced motion.
- Use local media and static page rendering. The showcase does not connect visitors to development game servers.
- Preserve existing captures, features, routes and source links.

## Acceptance

- Game pages render meaningful demo and engineering sections, source links resolve to inspected files, and media loads.
- Keyboard users can operate tours and playback. New sections fit desktop and mobile layouts.
- Type checking, lint, production build and the relevant existing site checks pass before publication through the existing GitHub Pages workflow.

## Capture boundaries

- BigDeal: temporary local room and bot player using its real server and React client.
- RimRise browser: new fictional demo career using local source; WebGL rendering depends on the capture browser.
- Song Guess: actual frontend setup interaction without an authenticated account or configured song backend; label as a settings preview.
- Unity: use real existing screenshots when a runnable build is unavailable; do not present image transitions as gameplay footage.
