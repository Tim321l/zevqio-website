import { buildLocalTool } from "./local-tools";
import { docupassCopy } from "./docupass-content";
export type ProductStatus = "In Development";

export type ProductInterfacePreview = {
  title: string;
  description: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
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
  workflowPreviewIndexes?: (number | null)[];
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
      "Transcribe speech with faster-whisper, then use Ollama to identify topics and build a timestamped outline",
      "When speech is too sparse, sample video keyframes for analysis with a local vision model",
      "Run one video, process a folder batch, or watch an input folder for new files",
      "Export category, tags, pitch, story summary and timeline chapters as Markdown and JSON",
      "Choose Gemini cloud analysis when needed; that mode uploads the full video to Google",
    ],
    icon: "file",
    accent: "blue",
    workflowPreviewIndexes: [0, 1, 2],
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
          title: "Choose videos and a mode",
          description:
            "Analyze one video, process a folder, or watch an input folder. Choose local Ollama processing or Gemini cloud analysis before starting.",
        },
        {
          title: "Select models and process",
          description:
            "Choose the local text and vision models, then start the run. Speech is transcribed first; videos with sparse speech can fall back to sampled keyframes.",
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
          "The current desktop dashboard brings video intake, processing status, and recent work together.",
        image: "/images/projects/vidoutline-dashboard.png",
        alt: "Screenshot of VidOutline's current Chinese-language local dashboard, showing local Ollama settings and sample input counts.",
      },
      {
        title: "Local model settings",
        description:
          "Choose the local Ollama endpoint and text and vision models in the desktop dashboard.",
        image: "/images/projects/vidoutline-settings.png",
        alt: "Screenshot of the current dashboard's local analysis settings, with Ollama text and vision model fields.",
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
    ...buildLocalTool("tokensaver"),
    slug: "tokensaver",
    name: "TokenSaver",
    shortName: "TokenSaver",
    stage: "In Development",
    icon: "braces",
    accent: "violet",
    workflowPreviewIndexes: [1, 2, 3],
  },
  {
    ...buildLocalTool("monitor"),
    slug: "monitor",
    name: "Monitor",
    shortName: "Monitor",
    stage: "In Development",
    icon: "workflow",
    accent: "cyan",
  },
  {
    slug: "docupass",
    name: "DocuPass",
    shortName: "DocuPass",
    category: docupassCopy.en.category,
    summary: docupassCopy.en.summary,
    description: docupassCopy.en.description,
    stage: "In Development",
    focus: docupassCopy.en.focus,
    icon: "scan",
    accent: "blue",
    workflowPreviewIndexes: [0, 1, 2],
    screenshotsLabel: docupassCopy.en.screenshotsLabel,
    screenshotsNote: docupassCopy.en.screenshotsNote,
    specificationsLabel: docupassCopy.en.specificationsLabel,
    specificationsTitle: docupassCopy.en.specificationsTitle,
    specificationsIntro: docupassCopy.en.specificationsIntro,
    specifications: docupassCopy.en.specifications.map(([label, value]) => ({
      label,
      value,
    })),
    story: {
      overviewTitle: docupassCopy.en.title,
      problem: docupassCopy.en.problem,
      approach: docupassCopy.en.approach,
      workflowTitle: docupassCopy.en.workflowTitle,
      workflowIntro: docupassCopy.en.workflowIntro,
      workflow: docupassCopy.en.workflow.map(([title, description]) => ({
        title,
        description,
      })),
      principlesTitle: docupassCopy.en.principlesTitle,
      principlesIntro: docupassCopy.en.principlesIntro,
      principles: docupassCopy.en.principles.map(([title, description]) => ({
        title,
        description,
      })),
      statusNote: docupassCopy.en.status,
    },
    interfacePreviews: docupassCopy.en.previews.map(
      ([title, description], index) => ({
        title,
        description,
        image: `/images/projects/${[
          "docupass-workflow.svg",
          "docupass-hardware.svg",
          "docupass-phone.svg",
        ][index]}`,
        alt: `${title}: ${description}`,
        width: 1440,
        height: 900,
      }),
    ),
  },
];

export const allProducts = [...products];

export const getProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
export const productStatusLabel = (status: ProductStatus): string => status;
