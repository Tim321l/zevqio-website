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

## DocuPass — current captures 19 October 2026

Source snapshot: `bf86a8c1853b976cdba95610fd5515ce46b5a5b9`, matching the current remote `feature/mobile-companion` branch when checked on 19 October.

Five fresh macOS captures replace the older theme comparison: Automatic mode with a synthetic receipt in the queue; Recognition settings with hardware details, Benchmark this PC and Auto-pick controls; receipt Review; optional AI connection settings; and watch-folder Automation setup. They are `public/images/projects/docupass-current-*.webp`. Window capture preserves the app pixels; WebP encoding is lossless. The source app ran with an isolated demo data directory and phone background reception disabled. A capture launcher selected existing pages and scroll positions. No private documents, phone credentials or API keys were loaded.

The review screen loads the recorded 14 October synthetic SUNNY CAFE OCR result. The current source's document-preparation function crops the same synthetic photo, preserving the original field-box coordinates. No new OCR values were invented and no new OCR recognition run is claimed for these captures. Automation and AI images show setup controls; they do not show a running watcher or completed AI request.

The six-chapter product story is an animated explanation, not a browser OCR service. It combines current app captures with explicitly labelled phone-transfer diagrams. Playback starts on user request, supports pause/previous/next and keyboard chapter selection, stops offscreen or when the tab is hidden, and is disabled under reduced motion. The earlier 20-second screenshot film is no longer embedded.

The benchmark chapter shows implemented controls and their method: a standard A4 page with 24 printed lines, or 2–4 samples from the user's files; model-startup and per-page times inform the estimate. It makes no new speed claim. Auto-pick compares text against the Accurate model, not ground-truth accuracy.

Platform presentation distinguishes Windows/macOS desktop builds from iOS/Android companions. Source release notes report an installed iOS development build; Android real-device validation and store publication are pending. macOS uses CPU; real NVIDIA GPU operation remains unverified. Optional AI is disabled by default, supports a chosen local/OpenAI-compatible endpoint, receives OCR text rather than images, and leaves suggestions for human review. Platform/build information comes from the source README, mobile README and release checklist, not these screenshots.

### Retained OCR evidence — 14 October 2026

The packaged executable's `--self-test` passed PNG/HEIC recognition, empty-file isolation, receipt cropping, merchant/total extraction and Excel creation. `public/downloads/docupass-ocr-check.json` records English, Balanced PP-OCRv6 and macOS CPU. This is a synthetic functional check, not a speed or representative accuracy benchmark.

The tilted synthetic receipt was processed by the actual source `BatchRunner`, one CPU worker and bundled Balanced models, with PaddlePaddle 3.3.1 and PaddleOCR 3.7.0. Recorded values include merchant `SUNNY CAFE LIMITED`, total `88.50`, receipt number/date, line items, payment/change and source boxes. The sanitized result and real exporter output remain available as `public/downloads/docupass-receipt-result.json` and `public/downloads/docupass-sample.xlsx`. The result is unconfirmed; no human review is claimed. Handwriting percentages are the separately labelled source development evaluation on 60 forms/240 fields.

Story text, platform qualifications, screen captions and evidence explanations are translated into all five site languages. The captured app UI remains English.

## Basketball Clip Mixer — 18 October 2026

Four WebP captures show the current local Python/Tk desktop app: clip workspace, output library, manual editor and render settings. The app ran with an isolated temporary state directory, blank database credentials, SQL disabled and no connected publishing account.

Three one-second, 640×360, 24 FPS solid-color clips were generated locally. The actual app's local merge action completed and added its output to the library; that completed sample appears in the library capture. The editor was opened on this output without applying edits. No sports footage, real player metadata, remote browser job or upload was used for these captures.

Captures preserve the app's interface pixels. Window chrome and the legacy branded sidebar are cropped out; the editor capture contains only its own dialog. No UI controls or processing results were fabricated. Captions identify the generated sample media and are translated into all five site languages; the app UI remains Traditional Chinese. Full-size links open the four local image assets. These images demonstrate desktop controls and the sample local merge, not a Selenium or Playwright browser session or GPU encoding performance.

## SmartCart AI — 20 October 2026

The portfolio uses four inspected local development captures from the source project's ignored `.local/` directory: `fresh-market-home.png`, `planning-header-phone.png`, `shopping-mode-phone.png` and `summary-evidence.png`. The two phone previews are cropped to their 390×640 application frames. The price-source capture is cropped to its earlier development evidence panel; its dated observations and retailer names remain explicitly labelled as demo data. No controls, data or results were added to these images. Lossless WebP assets are stored locally under `public/images/projects/smartcart-*.webp`.

The displayed list is the synthetic preview list described in the source `docs/PHASE_STATUS.md`. Food artwork is generated decoration, as recorded in `apps/smartcart_flutter/assets/README.md`; it does not establish real product inventory or retailer prices. The gallery includes no receipt images, account details or private purchase history. No source app data, accounts, prices or purchases were changed for this portfolio update.

Descriptions were checked against the source README, phase notes, Flutter list/snapshot source, receipt-processing worker, price explanation service and RapidOCR service. The public page identifies a local MVP: receipt OCR yields candidates requiring human review, photo matching is manual, price summaries are deterministic and offline access is a bounded read-only copy of previously loaded list text. Android/iOS runner source is distinguished from verified native builds or physical devices. The portfolio provides a static showcase, not a public deployment of the app. Captions and descriptions are translated into all five site languages; the app captures retain Traditional Chinese. No source app test suite or production runtime was revalidated as part of this website-only change.
