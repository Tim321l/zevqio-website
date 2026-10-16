# Demo evidence

## Portfolio refresh — 16 October 2026

The expanded DocuPass capability guide covers six business-document types and nine workflow areas: file intake, handwriting/form comparison, review checks, correction memory, exports, batch automation, hardware/model selection, phone capture, and local/optional AI processing. Copy is translated into all five site languages and grounded in the same pinned source README. Features described in source are distinguished from the existing macOS CPU demonstration; no new successful phone transfer, GPU benchmark, accounting import or representative accuracy result is claimed.

DocuPass is featured on the homepage with its existing real OCR output. The handwriting comparison quotes the development results in `Tim321l/paddleocr-studio` at `bf86a8c1853b976cdba95610fd5515ce46b5a5b9`, `docs/studio-plan.md`, Phase 7: 60 hand-printed forms and 240 fields, with line orientation detection disabled. Rounded exact-field results were Balanced 78%, Accurate 79% and Fast 60%. The source forms are not redistributed; the website explicitly distinguishes these measurements from the printed synthetic receipt and from production accuracy.

Unity gallery assets now come from the current local `rimrise-latest` workspace at source commit `83b9769`, rather than the older October 8 workspace. Court and career captures are from `DrivingRegression-Final4`; the city exterior is from `Exterior-Release` (16 October, 16:02), and the storefront and café are from `Interior-Release` (16 October, 19:16). The latter completed with 251 checks; the exterior run completed with 78 checks. These are existing native QA captures, not newly recorded gameplay. The interactive tour now covers career, court, city, storefront and café. Captions are localized in all five languages.

All added media are silent local project captures. The static portfolio hosts recordings and source links, not running game services. Videos use controls and preload only on request.

| Asset                       | Capture and scope                                                                                                                                                                                                                                                    | Source snapshot                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| bigdeal-room-to-turn.webm   | Real React client and local Node/Socket.IO server. A temporary Demo Player creates a room, previews a mode, adds a level-2 bot, readies, draws, banks two cards and ends a turn. The bot then acts and the event log updates.                                        | Tim321l/bigdeal at 8c14ffe9b77209464d929d6ead442aea5d09f1e3                                            |
| song-guess-settings.webm    | Actual frontend controls: answer time, elimination mode, starting hearts, private visibility and code entry. The local start view is opened directly for capture without a real login or backend. No successful room join, song playback or quiz outcome is claimed. | Tim321l/song-guess at 747759c81df68c2b33e5f62342d351bcc76ae9a3                                         |
| rimrise-career-to-city.webm | A fresh fictional local profile opens the city and moves through keyboard input. Character motion, location markers, minimap and activity HUD are visible. Capture performance is not a benchmark.                                                                   | Tim321l/hardwood-career at 31d317b267eac17613384988a885bb90e90c09d2                                    |
| Unity screen tour           | Existing real career, court, city and home screenshots. Visitors select a stage or opt into a timed screenshot tour. This is labeled as a screen tour.                                                                                                               | Source links reference unity/Assets/HardwoodCareer/Scripts at 5d5f693c8c746cab988bac33c1df926eaae714b4 |

Engineering cards link to inspected files at these fixed commits. They describe features in the code; they do not establish sole authorship, production availability, independent security certification or measured performance.

## DocuPass — 14 October 2026

Source snapshot: `bf86a8c1853b976cdba95610fd5515ce46b5a5b9` (local working tree).

Four real macOS source-app captures: New job, Recognition settings, receipt review and the export dialog. An isolated temporary data directory held only the generated SUNNY CAFE receipt. Phone background reception was disabled in the capture harness. Capture pages were opened at startup for consistent views; the walkthrough is explicitly a screen tour, not a continuous OCR recording. Its 20-second WebM plays only on request with native controls.

The packaged desktop executable's existing `--self-test` passed PNG/HEIC recognition, empty-file error isolation, receipt cropping, merchant/total extraction and Excel workbook creation. The sanitized report is `public/downloads/docupass-ocr-check.json`. This check used English, Balanced PP-OCRv6 and macOS CPU. No speed or representative accuracy claim is made.

The synthetic tilted receipt was also processed using the actual local source `BatchRunner`, one CPU worker and the bundled Balanced models, with PaddlePaddle 3.3.1 and PaddleOCR 3.7.0. The real output contains merchant `SUNNY CAFE LIMITED`, total `88.50`, receipt number/date, item lines, amount paid/change and source boxes. A sanitized document result is available as `public/downloads/docupass-receipt-result.json`. The review capture renders this actual result without fabricated values. The export capture shows available formats; it does not demonstrate a successful Xero or QuickBooks import.

The website's new captions and test explanation are translated into all five languages; captured app UI remains English. Confidence shown in the app is explicitly distinguished from accuracy. NVIDIA hardware and companion-phone processing are not demonstrated by these captures.

The sample Excel download was generated by the actual local document exporter from this result. Its sheets are reported in the verification log; the result remains unconfirmed, as no human review is claimed.
