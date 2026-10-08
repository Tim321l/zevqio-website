export type ProductStatus = "In Development";

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
};

export const products: Product[] = [
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
