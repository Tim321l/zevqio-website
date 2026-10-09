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
    name: "Vidoany",
    shortName: "Vidoany",
    category: "Zevqio project",
    summary:
      "Vidoany is an early-stage Zevqio project; its public scope is still being defined.",
    description:
      "Vidoany is part of Zevqio's early-stage project portfolio. Its intended use, audience, and capabilities are still being defined, so this page will be updated as details are approved for public sharing.",
    stage: "In Development",
    focus: [
      "Define the intended use and audience",
      "Confirm the project scope and requirements",
      "Prepare accurate product information for public sharing",
    ],
    icon: "file",
    accent: "blue",
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
