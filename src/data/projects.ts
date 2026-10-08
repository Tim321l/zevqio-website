export type SelectedProject = {
  name: string;
  summary: string;
  tools: string[];
  icon: "gamepad" | "web" | "audio";
  accent: "blue" | "cyan" | "violet";
};

export const selectedProjects: SelectedProject[] = [
  {
    name: "Game development",
    summary: "Independent game projects made with Godot and Unity.",
    tools: ["Godot", "Unity"],
    icon: "gamepad",
    accent: "blue",
  },
  {
    name: "Web development",
    summary: "Independent projects built for the web.",
    tools: ["Web"],
    icon: "web",
    accent: "cyan",
  },
  {
    name: "Original audio",
    summary: "Independent audio projects featuring original work.",
    tools: ["Audio"],
    icon: "audio",
    accent: "violet",
  },
];
