export type SelectedProject = {
  name: string;
  summary: string;
  tools: string[];
  icon: "gamepad" | "web" | "audio";
  accent: "blue" | "cyan" | "violet";
  image?: string;
  imageAspect?: "wide" | "cinema" | "square";
  imagePosition?: "center" | "top";
  href?: string;
};

export const projectImageSizes: Record<string, [number, number]> = {
  "/images/projects/bigdeal-gameplay.png": [1440, 1000],
  "/images/projects/bigdeal-landing.png": [420, 322],
  "/images/projects/bigdeal-waiting-room.png": [480, 852],
  "/images/projects/song-guess-create-room.png": [1000, 1000],
  "/images/projects/song-guess-elimination.png": [1000, 1000],
  "/images/projects/song-guess-join-room.png": [1000, 1000],
  "/images/projects/rimrise-unity-career.webp": [1280, 720],
  "/images/projects/rimrise-unity-gameplay.webp": [1280, 720],
  "/images/projects/rimrise-unity-pause.webp": [1280, 720],
  "/images/projects/rimrise-web-career.webp": [1440, 960],
  "/images/projects/rimrise-web-city.webp": [1440, 960],
  "/images/projects/rimrise-web-gameplay.webp": [1440, 960],
};

export type ProjectDetailCopy = {
  name: string;
  category: string;
  summary: string;
  stage: string;
  heroAlt: string;
  heroBadge: string;
  overviewTitle: string;
  overview: string[];
  focusTitle: string;
  focus: [string, string][];
  gallery: [string, string][];
  stageNote: string;
};

export type ProjectPage = {
  slug: "rimrise-unity" | "rimrise-web" | "bigdeal" | "song-guess";
  icon: "gamepad" | "web";
  accent: "blue" | "cyan";
  heroImage: string;
  screenshots: string[];
  tools: string[];
  githubUrl: string;
  imageAspect?: "cinema" | "square";
  details?: ProjectDetailCopy;
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
  {
    slug: "bigdeal",
    icon: "gamepad",
    accent: "blue",
    heroImage: "/images/projects/bigdeal-gameplay.png",
    screenshots: [
      "/images/projects/bigdeal-landing.png",
      "/images/projects/bigdeal-waiting-room.png",
    ],
    tools: ["TypeScript", "React", "Socket.IO", "Node.js"],
    githubUrl: "https://github.com/Tim321l/bigdeal",
    imageAspect: "cinema",
    details: {
      name: "BigDeal HK",
      category: "Hong Kong card game · Multiplayer prototype",
      summary:
        "A Hong Kong-themed property card game with several room modes, bot opponents, and changing game events.",
      stage: "Local prototype · In development",
      heroAlt:
        "BigDeal HK local game screen showing a player hand and an opponent at the card table.",
      heroBadge: "BIG DEAL HK · LOCAL SCREEN CAPTURE",
      overviewTitle: "Property cards with room for different ways to play.",
      overview: [
        "BigDeal HK is a multiplayer property card game prototype. Players build property sets and manage action and money cards in private rooms. The room can be configured for classic play, battle royale, 2v2 teams, blind-bid auctions, a cooperative boss round, or a board-and-card mode.",
        "The project uses a React and TypeScript client with a Node.js game server and Socket.IO rooms. Bot opponents, spectator access, and a random-event modifier system are part of the current codebase.",
      ],
      focusTitle: "What the current build includes",
      focus: [
        [
          "Six room modes",
          "Classic set collection, elimination, teams, auctions, co-op boss play, and a property board mode.",
        ],
        [
          "Room-based multiplayer",
          "Create or join rooms, set a game mode, add bot players, and watch as a spectator.",
        ],
        [
          "Dynamic events",
          "Random event modifiers change the conditions around a match as it unfolds.",
        ],
      ],
      gallery: [
        [
          "Room entry screen",
          "Choose to open a room or join with a room code.",
        ],
        [
          "Waiting room",
          "Select a mode, add a bot, and ready the room before a match.",
        ],
      ],
      stageNote:
        "Work in progress. These are local development captures; the room code and player name shown are temporary test data. This website does not host the game.",
    },
  },
  {
    slug: "song-guess",
    icon: "gamepad",
    accent: "cyan",
    heroImage: "/images/projects/song-guess-create-room.png",
    screenshots: [
      "/images/projects/song-guess-elimination.png",
      "/images/projects/song-guess-join-room.png",
    ],
    tools: ["JavaScript", "Socket.IO", "Express", "MongoDB"],
    githubUrl: "https://github.com/Tim321l/song-guess",
    imageAspect: "square",
    details: {
      name: "Song Guess Online",
      category: "Music trivia · Multiplayer game",
      summary:
        "A multiplayer music-guessing game with configurable rooms, timed rounds, categories, and team play.",
      stage: "Local prototype · In development",
      heroAlt:
        "Song Guess room setup screen with category, difficulty, game mode, rounds, and visibility controls.",
      heroBadge: "SONG GUESS · LOCAL SCREEN PREVIEW",
      overviewTitle: "A music quiz shaped around the room.",
      overview: [
        "Song Guess Online is a fan-made music trivia game. Players can create or join rooms, choose a music category and difficulty, then guess songs against a timer. The interface includes standard rounds, elimination, fastest-answer, next-line, lyrics, tournament, and team modes.",
        "The repository contains a browser client and an Express and Socket.IO server, with Mongoose models for persistent game data. The screenshots on this page show local interface previews rather than a hosted game session.",
      ],
      focusTitle: "Room and round options",
      focus: [
        [
          "Timed rounds",
          "Choose a difficulty and set the round length for a standard match.",
        ],
        [
          "Multiple game modes",
          "Use fixed rounds, elimination, fastest answer, lyrics, tournament, or team play.",
        ],
        [
          "Room access",
          "Set a room to public or private, then join with a room code or browse public rooms.",
        ],
      ],
      gallery: [
        [
          "Elimination settings",
          "Choose survival play and set the starting number of hearts.",
        ],
        ["Join a room", "Enter a room code to join a match."],
      ],
      stageNote:
        "Work in progress. These screen captures come from a local front-end preview. Account, room, and server features depend on the project's backend and are not hosted by this website.",
    },
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
    image: "/images/projects/rimrise-unity-gameplay.webp",
    href: "/projects/rimrise-unity",
  },
  {
    name: "RimRise · Browser game",
    summary:
      "A browser basketball career game with season progression, a 3D city, and street play.",
    tools: ["JavaScript", "Three.js"],
    icon: "web",
    accent: "cyan",
    image: "/images/projects/rimrise-web-career.webp",
    href: "/projects/rimrise-web",
  },
  {
    name: "BigDeal HK",
    summary:
      "A Hong Kong-themed property card game with multiplayer rooms, bots, and changing events.",
    tools: ["TypeScript", "React", "Socket.IO"],
    icon: "gamepad",
    accent: "blue",
    image: "/images/projects/bigdeal-gameplay.png",
    imageAspect: "cinema",
    imagePosition: "top",
    href: "/projects/bigdeal",
  },
  {
    name: "Song Guess Online",
    summary:
      "A multiplayer music quiz with timed rounds, configurable rooms, and team modes.",
    tools: ["JavaScript", "Socket.IO"],
    icon: "gamepad",
    accent: "cyan",
    image: "/images/projects/song-guess-create-room.png",
    imageAspect: "square",
    href: "/projects/song-guess",
  },
  {
    name: "Original audio",
    summary: "Independent audio projects featuring original work.",
    tools: ["Audio"],
    icon: "audio",
    accent: "violet",
  },
];
