export type SelectedProject = {
  name: string;
  summary: string;
  tools: string[];
  icon: "gamepad" | "web";
  accent: "blue" | "cyan";
  image?: string;
  imageAspect?: "wide" | "cinema" | "square";
  imagePosition?: "center" | "top";
  href?: string;
};

export const projectImageSizes: Record<string, [number, number]> = {
  "/images/projects/rimrise-unity-current-match.png": [1280, 720],
  "/images/projects/rimrise-unity-current-career.png": [1280, 720],
  "/images/projects/rimrise-unity-current-city.png": [1280, 720],
  "/images/projects/rimrise-unity-current-storefront.png": [1280, 720],
  "/images/projects/rimrise-unity-current-cafe.png": [1280, 720],
  "/images/projects/rimrise-unity-character-studio.webp": [1280, 720],
  "/images/projects/rimrise-unity-build-mode.webp": [1280, 720],
  "/images/projects/rimrise-unity-incident.webp": [1280, 720],
  "/images/projects/rimrise-unity-vehicle-damage.webp": [1280, 720],
  "/images/projects/rimrise-unity-pet-shop.webp": [1280, 720],
  "/images/projects/bigdeal-gameplay.png": [1440, 1000],
  "/images/projects/bigdeal-landing.png": [420, 322],
  "/images/projects/bigdeal-waiting-room.png": [480, 852],
  "/images/projects/song-guess-create-room.png": [1000, 1000],
  "/images/projects/song-guess-elimination.png": [1000, 1000],
  "/images/projects/song-guess-join-room.png": [1000, 1000],
  "/images/projects/rimrise-unity-career.webp": [1280, 720],
  "/images/projects/rimrise-unity-gameplay.webp": [1280, 720],
  "/images/projects/rimrise-unity-pause.webp": [1280, 720],
  "/images/projects/rimrise-unity-city.png": [1280, 720],
  "/images/projects/rimrise-unity-home.png": [1280, 720],
  "/images/projects/rimrise-web-career.webp": [1440, 900],
  "/images/projects/rimrise-web-city.webp": [1440, 900],
  "/images/projects/rimrise-web-create.webp": [1440, 900],
  "/images/projects/rimrise-web-city-life.webp": [1440, 900],
  "/images/projects/rimrise-web-city-map.webp": [1440, 900],
  "/images/projects/rimrise-web-wealth.webp": [1440, 900],
  "/images/projects/rimrise-web-online.webp": [1440, 715],
  "/images/projects/rimrise-web-league.webp": [1440, 900],
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

export type ProjectSpecKey =
  | "platform"
  | "gameModes"
  | "controls"
  | "progression"
  | "multiplayer"
  | "matchFlow"
  | "graphics"
  | "quizModes"
  | "timer"
  | "roomAccess";

export type ProjectPage = {
  slug: "rimrise-unity" | "rimrise-web" | "bigdeal" | "song-guess";
  icon: "gamepad" | "web";
  accent: "blue" | "cyan";
  heroImage: string;
  screenshots: string[];
  tools: string[];
  imageAspect?: "cinema" | "square";
  specifications?: [ProjectSpecKey, string][];
  details?: ProjectDetailCopy;
};

export const projectPages: ProjectPage[] = [
  {
    slug: "rimrise-unity",
    icon: "gamepad",
    accent: "blue",
    heroImage: "/images/projects/rimrise-unity-current-match.png",
    screenshots: [
      "/images/projects/rimrise-unity-current-career.png",
      "/images/projects/rimrise-unity-current-city.png",
      "/images/projects/rimrise-unity-current-storefront.png",
      "/images/projects/rimrise-unity-current-cafe.png",
      "/images/projects/rimrise-unity-character-studio.webp",
      "/images/projects/rimrise-unity-build-mode.webp",
      "/images/projects/rimrise-unity-incident.webp",
      "/images/projects/rimrise-unity-vehicle-damage.webp",
      "/images/projects/rimrise-unity-pet-shop.webp",
    ],
    tools: ["Unity 6.3", "C#"],
    specifications: [
      ["platform", "Unity 6.3 · C#"],
      [
        "gameModes",
        "Full-court 5v5 · 21-point street game · career and city life",
      ],
      ["controls", "Keyboard · gamepad · touch"],
      [
        "progression",
        "8 career starting paths · seasons and contracts · local JSON save with backup/import",
      ],
      ["multiplayer", "Local single-player prototype"],
      [
        "graphics",
        "Unity 3D · quality and frame-rate options · keyboard, controller and touch layouts",
      ],
    ],
  },
  {
    slug: "rimrise-web",
    icon: "web",
    accent: "cyan",
    heroImage: "/images/projects/rimrise-web-career.webp",
    screenshots: [
      "/images/projects/rimrise-web-city.webp",
      "/images/projects/rimrise-web-gameplay.webp",
      "/images/projects/rimrise-web-create.webp",
      "/images/projects/rimrise-web-city-life.webp",
      "/images/projects/rimrise-web-city-map.webp",
      "/images/projects/rimrise-web-wealth.webp",
      "/images/projects/rimrise-web-online.webp",
      "/images/projects/rimrise-web-league.webp",
    ],
    tools: ["JavaScript", "Three.js", "WebGL", "Node.js", "WebSocket"],
    specifications: [
      ["platform", "Browser · Three.js · WebGL"],
      [
        "gameModes",
        "2D career · full-court 5v5 · street 1v1/5v5 · shooting practice · free-city life",
      ],
      [
        "progression",
        "High school to professional seasons · contracts and player growth · browser save",
      ],
      [
        "multiplayer",
        "WebSocket rooms · friend duels · cooperative city jobs · group tasks up to 4",
      ],
      [
        "graphics",
        "Three.js/WebGL · adapter and acceleration status · software-rendering warning and fallback",
      ],
    ],
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
    specifications: [
      ["platform", "React · TypeScript · Node.js"],
      ["gameModes", "6 modes in the current codebase"],
      ["multiplayer", "Socket.IO rooms · bots · spectator seats"],
      ["matchFlow", "Room-based matches · mode-specific win goals"],
    ],
    imageAspect: "cinema",
    details: {
      name: "BigDeal HK",
      category: "Hong Kong card game · Multiplayer prototype",
      summary:
        "A Hong Kong-themed property card game with several room modes, bot opponents, and changing game events.",
      stage: "Local prototype · In development",
      heroAlt:
        "A local round in progress: review the opponent’s property and your five-card hand, then bank money, play an action card, draw, or end the turn.",
      heroBadge: "BIG DEAL HK · LOCAL SCREEN CAPTURE",
      overviewTitle: "Property cards with room for different ways to play.",
      overview: [
        "BigDeal HK is a multiplayer property card game prototype. Players build property sets and manage action and money cards in private rooms. The room can be configured for classic play, battle royale, 2v2 teams, blind-bid auctions, a cooperative boss round, or a board-and-card mode.",
        "The project uses a React and TypeScript client with a Node.js game server and Socket.IO rooms. Bot opponents, spectator access, and a random-event modifier system are part of the current codebase.",
      ],
      focusTitle: "What the current build includes",
      focus: [
        [
          "Classic property sets",
          "Build complete property sets while managing bank cash, rent and action cards; the first player to complete three sets wins.",
        ],
        [
          "Battle Royale",
          "Rent and payment demands are doubled. A player who cannot pay is eliminated, and the last player remaining wins.",
        ],
        [
          "Syndicate 2v2 teams",
          "Four players form two teams, can pass cards to a teammate, and combine property sets toward a shared four-set win.",
        ],
        [
          "Blind Auction Draft",
          "Three cards are revealed at the start of a turn; players bid bank cash privately and the highest bidder takes the lot.",
        ],
        [
          "Co-op Boss Raid",
          "Everyone works toward a shared target of $30M in bank cash or four complete sets before the turn limit; a major event occurs each turn.",
        ],
        [
          "Real Big Deal board mode",
          "Roll around a 32-space property board, buy unowned lots, pay or defend rent, and resolve transit, auction and event spaces.",
        ],
        [
          "Rooms, bots and spectators",
          "Create or join a room, choose a mode, add bot players, ready the table and watch a match as a spectator.",
        ],
        [
          "Action cards and events",
          "Use rent, property and response cards to change a turn; random events can alter the conditions of a match.",
        ],
      ],
      gallery: [
        [
          "Room entry: create or join",
          "Set a display name and open a room, or switch to Join Room and enter the host’s code before choosing the match rules.",
        ],
        [
          "Choose the rules before play",
          "The host selects one of six modes, checks the seats, adds bots if needed, and readies the table. The match starts when everyone is ready; the shown code and names are temporary test data.",
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
    specifications: [
      ["platform", "Browser client · Express · Socket.IO"],
      [
        "quizModes",
        "7 modes: rounds, elimination, speed, lyrics, tournament, teams, and more",
      ],
      ["timer", "1 s · 5 s · 10 s answer timer"],
      ["roomAccess", "Public/private rooms · room-code join"],
    ],
    imageAspect: "square",
    details: {
      name: "Song Guess Online",
      category: "Music trivia · Multiplayer game",
      summary:
        "A multiplayer music-guessing game with configurable rooms, timed rounds, categories, and team play.",
      stage: "Local prototype · In development",
      heroAlt:
        "Room setup controls the music category, answer time, quiz mode, round count, and public or private visibility before you create a room.",
      heroBadge: "SONG GUESS · LOCAL SCREEN PREVIEW",
      overviewTitle: "A music quiz shaped around the room.",
      overview: [
        "Song Guess Online is a fan-made music trivia game. Players can create or join rooms, choose a music category and difficulty, then guess songs against a timer. The interface includes standard rounds, elimination, fastest-answer, next-line, lyrics, tournament, and team modes.",
        "The repository contains a browser client and an Express and Socket.IO server, with Mongoose models for persistent game data. The screenshots on this page show local interface previews rather than a hosted game session.",
      ],
      focusTitle: "Room and round options",
      focus: [
        [
          "Seven quiz modes",
          "Play fixed rounds, survival elimination, fastest-answer scoring, next-song clues, next-lyric rounds, a 1v1 tournament, or red-versus-blue team play.",
        ],
        [
          "Difficulty and round settings",
          "Set the answer timer to 10, 5 or 1 second; standard matches offer 5, 10, 20 or 30 rounds, while elimination uses starting hearts.",
        ],
        [
          "Music categories and playlists",
          "Choose a music category, or connect Spotify in settings to select a playlist for a room.",
        ],
        [
          "Public and private rooms",
          "Create a public room for the room list or a private one for invited players; join by code or search public rooms.",
        ],
        [
          "Teams and scoreboards",
          "Create or join a team, track team contributions, and view leaderboards filtered by category and game mode.",
        ],
      ],
      gallery: [
        [
          "Elimination mode: set starting lives",
          "Switching from fixed rounds to elimination replaces the round count with starting hearts, making the survival format clear before the room opens.",
        ],
        [
          "Join with a room code",
          "Enter the code shared by the host and choose Join to enter the same music quiz room. This capture shows the empty code field before entry.",
        ],
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
    image: "/images/projects/rimrise-unity-current-match.png",
    href: "/projects/rimrise-unity",
  },
  {
    name: "RimRise · Browser game",
    summary:
      "A browser basketball career game with season progression, a 3D city, and street play.",
    tools: ["JavaScript", "Three.js", "WebGL"],
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
];
