export type ProductStatus = "In Development";

export type ProductInterfacePreview = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

export type ProductStory = {
  overviewTitle: string;
  problem: string;
  approach: string;
  workflowTitle: [string, string];
  workflowIntro: string;
  principlesTitle: string;
  principlesIntro: string;
  workflow: { title: string; description: string }[];
  principles: { title: string; description: string }[];
  statusNote: string;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  summary: string;
  description: string;
  stage: ProductStatus;
  focus: string[];
  icon: "scan" | "file" | "workflow" | "braces";
  accent: string;
  interfacePreviews?: ProductInterfacePreview[];
  previewBadge?: string;
  screenshotsLabel?: string;
  screenshotsNote?: string;
  specificationsLabel?: string;
  specificationsTitle?: string;
  specificationsIntro?: string;
  specifications?: { label: string; value: string }[];
  story?: ProductStory;
};

export const products: Product[] = [
  {
    slug: "ocr-studio",
    name: "OCR Studio",
    shortName: "OCR Studio",
    category: "Documents · OCR",
    summary:
      "A workspace concept for turning scanned pages into reviewable text, with the source kept close to the result.",
    description:
      "OCR Studio explores a review-first experience for scanned documents. It considers how the original page and recognized text can stay together while a person checks the result. The project is in development, and the interface previews are concepts rather than a public service.",
    stage: "In Development",
    focus: [
      "Make the source page and recognized text easy to compare",
      "Keep text review visible in the main workflow",
      "Explore clear next steps for reviewed text",
    ],
    icon: "scan",
    accent: "cyan",
    story: {
      overviewTitle: "Scanned pages need more than recognition.",
      problem:
        "Getting text from a scan is only one part of the job. Names, numbers, and page structure can be misread, so people may need to check the result against the original before using it.",
      approach:
        "OCR Studio is exploring a workspace that keeps the source page beside the recognized text. The aim is to make review understandable and keep a person in control while the product scope is being defined.",
      workflowTitle: ["From a scan to", "reviewed text."],
      workflowIntro:
        "This is the direction being explored for OCR Studio. These steps describe a concept, not a released feature set.",
      principlesTitle: "Choices shaping the exploration.",
      principlesIntro:
        "The early direction puts legibility and human review ahead of promises about speed or accuracy.",
      workflow: [
        {
          title: "Start with a scan",
          description:
            "Bring a scanned document into the workspace. Supported file types and intake rules are still being explored.",
        },
        {
          title: "Compare page and text",
          description:
            "Review recognized words alongside the source page so details can be checked in context.",
        },
        {
          title: "Confirm the result",
          description:
            "Consider how someone could correct text and finish a review. Export and storage choices have not been finalized.",
        },
      ],
      principles: [
        {
          title: "Keep the source close",
          description:
            "Make it easy to compare recognized text with the scanned page without losing context.",
        },
        {
          title: "Make review clear",
          description:
            "Treat checking and correcting text as part of the experience, because recognition may need a human look.",
        },
        {
          title: "Keep next steps simple",
          description:
            "Focus the early concept on a clear path from scan to reviewed text before defining later outputs.",
        },
      ],
      statusNote:
        "These screens are static concepts with fictional sample documents. The OCR engine, supported formats, correction behavior, export options, storage, and release timing have not been finalized.",
    },
    interfacePreviews: [
      {
        title: "Workspace",
        description:
          "A simple starting point for adding a document and finding recent work.",
        image: "/images/ocr-studio-workspace.svg",
        alt: "Illustrative OCR Studio workspace screen with a document intake panel and sample recent files.",
      },
      {
        title: "Text review",
        description:
          "Keep a sample source page visible beside the text being reviewed.",
        image: "/images/ocr-studio-review.svg",
        alt: "Illustrative OCR Studio review screen showing a sample document page beside recognized text.",
      },
      {
        title: "Document library",
        description:
          "Scan a sample document list and its review state at a glance.",
        image: "/images/ocr-studio-library.svg",
        alt: "Illustrative OCR Studio document library screen with sample files and review states.",
      },
    ],
  },
  {
    slug: "document-intelligence",
    name: "Document Intelligence",
    shortName: "Document Intelligence",
    category: "AI · Documents",
    summary:
      "Explore clearer ways to extract and validate useful information from business documents.",
    description:
      "Zevqio is exploring document processing workflows that can help teams move from scanned or digital files toward structured information. This product area is in development; no public product or service is currently offered.",
    stage: "In Development",
    focus: [
      "Document intake and classification concepts",
      "OCR and structured data extraction approaches",
      "Validation and human review requirements",
    ],
    icon: "scan",
    accent: "blue",
  },
  {
    slug: "pdf-automation",
    name: "PDF Automation",
    shortName: "PDF Automation",
    category: "Documents · Utilities",
    summary:
      "Investigate practical tools for creating, processing, and automating business PDFs.",
    description:
      "This product area explores reliable PDF generation and processing for routine business work. It is in development, and its scope and availability have not been finalized.",
    stage: "In Development",
    focus: [
      "Document generation and templating needs",
      "Repeatable PDF processing workflows",
      "Quality checks for business outputs",
    ],
    icon: "file",
    accent: "cyan",
  },
  {
    slug: "workflow-automation",
    name: "Workflow Automation",
    shortName: "Workflow Automation",
    category: "Operations · Automation",
    summary:
      "Design configurable software workflows that reduce repetitive operational steps.",
    description:
      "Zevqio is investigating workflow automation for repeatable business operations, with clear steps and human review where it is useful. This work is in development; specific integrations and capabilities are not yet available to claim.",
    stage: "In Development",
    focus: [
      "Mapping repetitive processes into clear steps",
      "Configurable review and handoff points",
      "Integration requirements for real workflows",
    ],
    icon: "workflow",
    accent: "violet",
  },
  {
    slug: "vidoany",
    name: "VidOutline",
    shortName: "VidOutline",
    category: "Video · Local analysis",
    summary:
      "A Windows desktop tool that turns video files and folders into categorized summaries and timestamped outlines.",
    description:
      "VidOutline is the working public name for the local video analysis project currently labeled Video Agent in its desktop interface. It uses faster-whisper and Ollama for local analysis, with Gemini available as an optional cloud mode that uploads the full video to Google. The tool can analyze individual files or folders, watch an input folder, and export Markdown and JSON reports.",
    stage: "In Development",
    focus: [
      "Transcribe speech locally with faster-whisper, then analyze it with Ollama",
      "Use keyframes with a local vision model when the transcript is too short",
      "Organize single-file, folder, and watched-folder runs into reports",
    ],
    icon: "file",
    accent: "blue",
    previewBadge: "VIDOUTLINE · APP SCREEN",
    screenshotsLabel: "Screens from the desktop app",
    screenshotsNote:
      "These are captures of the current local dashboard. The video names and report text shown are fictional demo content prepared for this page. The app is a local Windows project in development, not a hosted web service.",
    specificationsLabel: "TECHNICAL OVERVIEW",
    specificationsTitle: "What the project supports",
    specificationsIntro:
      "The details below reflect the current repository and README. They describe a development-stage desktop utility, not a hosted service.",
    specifications: [
      {
        label: "Platform",
        value: "Windows · Python 3.10+ · local Flask dashboard",
      },
      {
        label: "Video formats",
        value: ".mp4 · .mkv · .mov · .avi · .webm · .m4v · .mpeg · .mpg",
      },
      {
        label: "Local analysis",
        value:
          "faster-whisper transcription with Ollama text analysis; keyframe fallback with an Ollama vision model",
      },
      {
        label: "Cloud option",
        value:
          "Gemini API mode uploads the full video to Google for analysis and attempts to delete the uploaded file afterward.",
      },
      {
        label: "Ways to process",
        value:
          "One video · a folder batch · an automatically watched input folder",
      },
      {
        label: "Report files",
        value:
          "Markdown summary and structured JSON, with category, tags, pitch, story summary, and timeline chapters",
      },
      { label: "Media tools", value: "FFmpeg and ffprobe" },
    ],
    story: {
      overviewTitle: "Turn long video files into useful notes.",
      problem:
        "Finding the useful parts of a recording can mean rewatching it, searching through a transcript, and writing timestamps by hand. This project brings speech, scenes, and a structured outline into one repeatable analysis run.",
      approach:
        "VidOutline first transcribes audio with faster-whisper. When a usable transcript is available, Ollama analyzes its topics and timeline; when speech is too sparse, the tool samples keyframes for a local vision model. A separate Gemini mode can analyze the full video through Google's API.",
      workflowTitle: ["From video to", "a timestamped outline."],
      workflowIntro:
        "A view of the current analysis flow. Local and cloud modes process video differently, as described in the project details above.",
      principlesTitle: "Choices for clear analysis and reusable results.",
      principlesIntro:
        "The project makes the processing mode visible, preserves timestamps, and keeps reports in portable formats.",
      workflow: [
        {
          title: "Choose files and a mode",
          description:
            "Analyze a single video, process a folder, or place files in the watched folder. Choose local Ollama processing or Gemini cloud analysis before starting.",
        },
        {
          title: "Build a structured outline",
          description:
            "In local mode, speech is transcribed first and short transcripts fall back to keyframe analysis. The analysis produces a category, tags, a short pitch, a story summary, and timestamped chapters.",
        },
        {
          title: "Keep the report files",
          description:
            "Save each result as Markdown for reading and JSON for structured reuse. Repeated source names receive numbered report files instead of overwriting an earlier result.",
        },
      ],
      principles: [
        {
          title: "Make processing mode clear",
          description:
            "Local mode sends transcripts or sampled frames to Ollama on the same computer. Gemini mode uploads the full video to Google, so the choice is visible before processing.",
        },
        {
          title: "Keep timestamps with the summary",
          description:
            "Organize findings into timeline chapters so a reader can navigate back to the relevant part of a video.",
        },
        {
          title: "Keep results portable",
          description:
            "Store a readable Markdown report alongside structured JSON, in a folder the user can choose.",
        },
      ],
      statusNote:
        "The screens show the current local dashboard with fictional sample video names and reports. VidOutline is in development as a Windows desktop utility; the project does not provide a hosted web service. Gemini mode uploads the full video to Google, while local mode sends a transcript or sampled frames to the local Ollama service.",
    },
    interfacePreviews: [
      {
        title: "Local analysis dashboard",
        description:
          "The current desktop dashboard shows the input folder, processing mode, upload area, local model settings, and analysis queue.",
        image: "/images/projects/vidoutline-dashboard.png",
        alt: "Screenshot of VidOutline's current Chinese-language local dashboard, showing local Ollama settings and sample input counts.",
      },
      {
        title: "Report library",
        description:
          "Recent Markdown reports and JSON downloads appear beside the analysis queue. The visible filenames and report contents are fictional demo data.",
        image: "/images/projects/vidoutline-report-library.png",
        alt: "Screenshot of the local video analysis dashboard with three fictional sample reports in its recent report library.",
      },
    ],
  },
  {
    slug: "tokensaver",
    name: "TokenSaver",
    shortName: "TokenSaver",
    category: "Zevqio project",
    summary:
      "TokenSaver is an early-stage Zevqio project; its public scope is still being defined.",
    description:
      "TokenSaver is part of Zevqio's early-stage project portfolio. Its intended use, audience, and capabilities are still being defined, so this page will be updated as details are approved for public sharing.",
    stage: "In Development",
    focus: [
      "Define the intended use and audience",
      "Confirm the project scope and requirements",
      "Prepare accurate product information for public sharing",
    ],
    icon: "braces",
    accent: "cyan",
  },
];

export const getProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);

export const productStatusLabel = (status: ProductStatus): string => status;
