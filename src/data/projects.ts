export type SelectedProject = {
  name: string;
  summary: string;
  tools: string[];
  icon: "gamepad" | "web" | "audio";
  accent: "blue" | "cyan" | "violet";
  href?: string;
};

export type ProjectPage = {
  slug: "rimrise-unity" | "rimrise-web";
  icon: "gamepad" | "web";
  accent: "blue" | "cyan";
  heroImage: string;
  screenshots: string[];
  tools: string[];
  githubUrl: string;
};

export const projectPages: ProjectPage[] = [
  {
    slug: "rimrise-unity",
    icon: "gamepad",
    accent: "blue",
    heroImage: "/images/projects/rimrise-unity-gameplay.webp",
    screenshots: [
      "/images/projects/rimrise-unity-career.webp",
      "/images/projects/rimrise-unity-pause.webp",
    ],
    tools: ["Unity 6.3", "C#"],
    githubUrl:
      "https://github.com/Tim321l/hardwood-career/tree/codex/unity-city-continuation-20261006/unity",
  },
  {
    slug: "rimrise-web",
    icon: "web",
    accent: "cyan",
    heroImage: "/images/projects/rimrise-web-career.webp",
    screenshots: [
      "/images/projects/rimrise-web-city.webp",
      "/images/projects/rimrise-web-gameplay.webp",
    ],
    tools: ["JavaScript", "Three.js", "Node.js", "WebSocket"],
    githubUrl: "https://github.com/Tim321l/hardwood-career",
  },
];

export const selectedProjects: SelectedProject[] = [
  {
    name: "RimRise · Unity edition",
    summary:
      "A Unity 6.3 basketball career prototype, starting with a playable full-court 5v5 game.",
    tools: ["Unity 6.3", "C#"],
    icon: "gamepad",
    accent: "blue",
    href: "/projects/rimrise-unity",
  },
  {
    name: "RimRise · Browser game",
    summary:
      "A browser basketball career game with season progression, a 3D city, and street play.",
    tools: ["JavaScript", "Three.js"],
    icon: "web",
    accent: "cyan",
    href: "/projects/rimrise-web",
  },
  {
    name: "Original audio",
    summary: "Independent audio projects featuring original work.",
    tools: ["Audio"],
    icon: "audio",
    accent: "violet",
  },
];
