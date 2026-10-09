export const site = {
  name: "Zevqio",
  url: import.meta.env.SITE ?? "https://zevqio.site",
  email: "founder@zevqio.site",
  tagline: "Build Smarter. Work Faster.",
  description:
    "Practical software and intelligent automation tools for modern business workflows.",
  brandDescription:
    "Zevqio is an independent, founder-led software initiative exploring practical tools for document processing, automation, and business productivity.",
  socialImage: "/images/social-card.png",
  navigation: [
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Projects", href: "/#selected-projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const capabilities = [
  {
    title: "Document intelligence",
    description:
      "Explore ways to turn digital and scanned documents into clear, structured information.",
    icon: "scan",
    href: "/products/document-intelligence",
  },
  {
    title: "OCR & data extraction",
    description:
      "Investigate text recognition and extraction workflows for everyday business documents.",
    icon: "braces",
    href: "/products/ocr-studio",
  },
  {
    title: "PDF automation",
    description:
      "Design practical approaches to creating, processing, and organizing PDF documents.",
    icon: "file",
    href: "/products/pdf-automation",
  },
  {
    title: "Workflow automation",
    description:
      "Map repetitive operations into understandable steps with room for human review.",
    icon: "workflow",
    href: "/products/workflow-automation",
  },
  {
    title: "Developer tools",
    description:
      "Build toward useful integrations and developer-friendly ways to connect business tools.",
    icon: "code",
    href: "/products",
  },
] as const;

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Privacy-conscious by design",
    description:
      "Keep data handling deliberate, minimize collection, and make deployment choices clear.",
    icon: "shield",
  },
  {
    number: "02",
    title: "Human review where it matters",
    description:
      "Treat validation and human oversight as part of a dependable workflow.",
    icon: "user-check",
  },
  {
    number: "03",
    title: "Modular and integration-friendly",
    description:
      "Shape small, understandable tools that can fit into existing operations over time.",
    icon: "blocks",
  },
  {
    number: "04",
    title: "AI-assisted development",
    description:
      "Coding agents support exploration and implementation; the founder reviews and tests changes before release.",
    icon: "sparkles",
  },
] as const;
