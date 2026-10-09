export const localeOptions = [
  { code: "en", tag: "EN", label: "English", lang: "en" },
  { code: "zh-cn", tag: "简中", label: "简体中文", lang: "zh-CN" },
  { code: "zh-hk", tag: "繁中", label: "繁體中文", lang: "zh-HK" },
  { code: "ja", tag: "日本語", label: "日本語", lang: "ja" },
  { code: "ko", tag: "한국어", label: "한국어", lang: "ko" },
] as const;

export type Locale = (typeof localeOptions)[number]["code"];

const basePrefix = import.meta.env.BASE_URL.replace(/\/+$/, "");
const withoutBase = (pathname: string): string => {
  if (
    basePrefix &&
    basePrefix !== "/" &&
    pathname.startsWith(`${basePrefix}/`)
  ) {
    return pathname.slice(basePrefix.length) || "/";
  }
  return pathname;
};

const english = {
  nav: {
    products: "Products",
    solutions: "Solutions",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    cta: "Get in touch",
    language: "Choose language",
    menu: "Open navigation menu",
    skip: "Skip to content",
  },
  footer: {
    tagline: "Practical software for the work that moves business forward.",
    explore: "Explore",
    connect: "Connect",
    email: "Email the founder",
    privacy: "Privacy",
    copyright: "An independent software initiative.",
    building: "Building with intention",
  },
  common: {
    home: "Home",
    products: "Products",
    projects: "Projects",
    inDevelopment: "In Development",
    learn: "Explore project",
    screens: "Screen previews",
    concept: "Concept preview",
    breadcrumb: "Breadcrumb",
    currentFocus: "CURRENT FOCUS",
    whatExploring: "What we’re exploring",
    possibleWorkflow: "Possible workflow",
    possibleStep: "POSSIBLE STEP",
    designPriorities: "Design priorities",
    workWithUs: "Work with us",
    contactCta: "Start a conversation",
    seeMore: "Learn more",
    emailUs: "Email the founder",
    projectOverview: "Project overview",
    areaOverview: "About this area",
    exampleOnly: "EXAMPLE ONLY",
    screen: "SCREEN",
    fictional: "Fictional sample content",
  },
  home: {
    title: "Practical AI & Workflow Software",
    description:
      "Practical software and intelligent automation tools for modern business workflows.",
    eyebrow: "Independent software studio",
    headline: ["Build Smarter.", "Work Faster."],
    lead: "Practical software and intelligent automation tools for modern business workflows.",
    productsCta: "Explore products",
    contactCta: "Contact us",
    footnote: "Small, useful software for real operational work.",
    capabilitiesLabel: "What we work on",
    capabilitiesTitle: ["Less busywork.", "More room to think."],
    capabilitiesIntro:
      "A focused set of software ideas for the document-heavy, repetitive parts of modern work.",
    productsLabel: "Product areas",
    productsTitle: ["Ideas becoming", "useful tools."],
    productsIntro:
      "We’re building with care and sharing progress honestly. Each product area is currently in development.",
    allProducts: "View all product areas",
    selectedLabel: "Selected projects",
    selectedTitle: ["Work across", "code and sound."],
    selectedIntro:
      "Explore RimRise in two forms: a browser basketball game and a Unity prototype. The portfolio also includes independent web and original audio work.",
    selectedNames: [
      "RimRise · Unity edition",
      "RimRise · Browser game",
      "Original audio",
    ],
    selectedDescriptions: [
      "A Unity 6.3 prototype for full-court 5v5 basketball and career play.",
      "A browser basketball game with career progression and 3D city play.",
      "Independent audio projects featuring original work.",
    ],
    workflowLabel: "The shape of the work",
    workflowTitle: ["From a file", "to a clear next step."],
    workflowIntro:
      "Good automation makes the work easier to follow. This example shows a possible document workflow, with a person in the loop before information moves forward.",
    workflowLink: "Explore document intelligence",
    workflowBoard: "ILLUSTRATIVE WORKFLOW",
    workflowSteps: [
      ["Document input", "Scanned or digital file"],
      ["OCR & extraction", "Text to structured fields"],
      ["Validation", "Check what was captured"],
      ["Human review", "Confirm before proceeding"],
      ["Structured output", "Ready for the next tool"],
    ],
    workflowNote:
      "Example diagram only. Product capabilities are in development.",
    principlesLabel: "How we think about software",
    principlesTitle: ["Built around the", "real work."],
    principlesIntro:
      "Useful tools should feel understandable, fit the way people work, and earn trust one step at a time.",
    principles: [
      [
        "Privacy-conscious by design",
        "Keep data handling deliberate, minimize collection, and make deployment choices clear.",
      ],
      [
        "Human review where it matters",
        "Treat validation and human oversight as part of a dependable workflow.",
      ],
      [
        "Modular and integration-friendly",
        "Shape small, understandable tools that can fit into existing operations over time.",
      ],
      [
        "AI-assisted development",
        "Coding agents support exploration and implementation; the founder reviews and tests changes before release.",
      ],
    ],
    studioLabel: "About Zevqio",
    studioTitle: ["An independent studio, working on", "useful things."],
    studioIntro:
      "Zevqio is an independent, founder-led software studio, bootstrapped and in an early stage. It explores practical tools for document processing, automation, and business productivity.",
    studioDetail:
      "Current work also includes RimRise, an independent basketball game with a browser edition and a Unity prototype, alongside smaller web and original audio projects. We share the work as it develops and make its current stage clear.",
    studioStatus: "Founder-led · Bootstrapped · Early-stage",
    studioLink: "More about Zevqio",
    contactLabel: "Start a conversation",
    contactTitle: "Let’s build something useful.",
    contactIntro:
      "Have a workflow worth making simpler? Tell us what you’re working on.",
    mailSubject: "A workflow worth simplifying",
  },
  about: {
    title: "About",
    description:
      "Learn about Zevqio, an independent founder-led software initiative focused on useful business tools.",
    eyebrow: "A small independent studio",
    headline: ["Make useful things.", "Make them thoughtfully."],
    intro:
      "Zevqio is an independent, founder-led and bootstrapped software studio in its early stage. It explores practical tools for document work and business workflows, alongside independent game and web projects.",
    storyLabel: "Why Zevqio exists",
    storyTitle: ["Software should make the next step", "easier to see."],
    storyLead:
      "We combine software engineering with modern AI techniques to explore reliable, efficient solutions for real operational challenges.",
    story1:
      "Our current areas of interest include document intelligence, OCR and data extraction, PDF automation, business workflows, and developer tools. These are early explorations, and we’ll be clear as products develop and become ready to share.",
    story2:
      "Zevqio is bootstrapped and early-stage. The work starts with a real task or a clear idea, then moves through focused prototypes and careful iteration. We describe what each project can do today and where work is still in progress.",
    story3:
      "Alongside OCR Studio, the portfolio includes RimRise, an independent basketball game with both a browser edition and a Unity prototype. The two builds are at different stages, so each project page explains what is available in that version.",
    profile: "ZEVQIO / STUDIO PROFILE",
    structure: "Structure",
    structureValue: "Independent initiative",
    stage: "Stage",
    focus: "Focus",
    focusValue: "Practical software",
    approach: "Approach",
    approachValue: "Founder-led · Bootstrapped",
    cardFoot: "Building with care, one useful step at a time.",
    principlesLabel: "Working principles",
    principlesTitle: ["How we approach", "the details."],
    principlesIntro:
      "Good software respects people’s time, context, and confidence in the result.",
    ctaLabel: "Say hello",
    ctaTitle: "What are you working on?",
    ctaButton: "Contact Zevqio",
  },
  portfolio: {
    title: "Projects",
    screenshotsLabel: "Screens from the project",
    screenshotsNote:
      "These screenshots were captured from local RimRise builds. Both editions are works in progress, so screens and features may change.",
    overviewLabel: "Project overview",
    toolsLabel: "Built with",
    sourceLink: "View the project on GitHub",
    ctaLabel: "Have a project in mind?",
    ctaTitle: "Let’s make the next step clearer.",
    ctaButton: "Contact Zevqio",
    pages: {
      "rimrise-unity": {
        name: "RimRise · Unity edition",
        category: "Basketball game · Unity prototype",
        summary:
          "A Unity 6.3 version of RimRise, beginning with a playable full-court 5v5 basketball game and career interface.",
        stage: "Unity prototype · In development",
        heroAlt:
          "RimRise Unity prototype during a five-on-five basketball game.",
        heroBadge: "UNITY 6.3 · LOCAL PROTOTYPE",
        overviewTitle: "A focused Unity prototype for basketball on the court.",
        overview: [
          "RimRise is a basketball career and city-life game project. The Unity edition starts with the playable court: a full-court five-on-five game with player movement, passing, shooting, defense, AI teammates and opponents, and an in-game scoreboard.",
          "The prototype also includes a career hub for player stats, training, teams, and season progress. Career data is saved locally. The Unity build is currently single-player; the browser edition still contains additional city, social, and online systems.",
        ],
        focusTitle: "What the Unity build covers today",
        focus: [
          [
            "Full-court 5v5",
            "A playable court loop with movement, ball handling, passing, shooting, defense, and AI players.",
          ],
          [
            "Career dashboard",
            "A career hub for player profiles, skills, team information, and season progress.",
          ],
          [
            "A staged port",
            "The Unity edition is an in-progress single-player version. It does not yet include every system in the browser game.",
          ],
        ],
        gallery: [
          [
            "Career management screen",
            "A player overview with season information and development actions.",
          ],
          [
            "Match pause screen",
            "The in-game pause view with the current match and basic controls.",
          ],
        ],
        stageNote:
          "Work in progress. The Unity edition is currently a local single-player prototype, and its features are not yet at parity with the browser version.",
      },
      "rimrise-web": {
        name: "RimRise · Browser edition",
        category: "Browser game · Web development",
        summary:
          "A browser basketball career game that brings together season progression, an explorable 3D city, and street basketball.",
        stage: "Browser game · In development",
        heroAlt:
          "RimRise browser game career dashboard with player and season information.",
        heroBadge: "BROWSER EDITION · SCREEN CAPTURE",
        overviewTitle: "A basketball world in the browser.",
        overview: [
          "The browser edition combines a player career simulation with an explorable 3D city. Players build a fictional career across seasons, develop their skills, and make decisions about teams, training, and life outside the court.",
          "The project brings its own browser interface, game simulation, and multiplayer room systems together. The city, season screens, and basketball matches are developed as one independent web game, separate from the Unity prototype.",
        ],
        focusTitle: "What shapes the browser game",
        focus: [
          [
            "Career and seasons",
            "Player progression, season schedules, career milestones, and between-season decisions.",
          ],
          [
            "3D city and street play",
            "An explorable city themed around Taipei, Hong Kong, and Tokyo, with street courts for basketball games.",
          ],
          [
            "Browser game systems",
            "JavaScript and Three.js power the client; Node.js and WebSocket support rooms and real-time features.",
          ],
        ],
        gallery: [
          [
            "3D city exploration",
            "A browser capture from the city mode, with navigation and the player in the world.",
          ],
          [
            "Street-court game",
            "A five-on-five basketball match running inside the browser game.",
          ],
        ],
        stageNote:
          "Work in progress. These are screenshots from a local browser build; live availability and game systems may change as development continues.",
      },
    },
  },
  productsPage: {
    title: "Products",
    description:
      "Explore Zevqio's early-stage software projects and product areas, including OCR Studio, Vidoany, and TokenSaver.",
    eyebrow: "Product portfolio",
    headline: ["Software for work", "that repeats."],
    intro:
      "We’re exploring focused software projects for practical work. Every project listed here is in development, and some public details are still taking shape.",
    note: "We’ll share availability and specific capabilities once each product area is ready to discuss publicly.",
    ctaLabel: "Have a use case?",
    ctaTitle: "Tell us about the work.",
    ctaButton: "Get in touch",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Zevqio about practical software, document processing, and business workflow automation.",
    eyebrow: "Contact",
    headline: ["Let’s talk about", "the work."],
    intro:
      "Tell us about a repetitive process, a document challenge, or a useful tool you wish existed. We read every note.",
    email: "EMAIL",
    cardTitle: "Start with a note.",
    cardBody:
      "Use your email app to reach the founder directly. There’s no website contact form or submission database.",
    guidanceLabel: "A useful starting point",
    guidanceTitle: "What should I include?",
    guidanceIntro:
      "A few lines about the task and the outcome you’re after is plenty.",
    prompts: [
      "What part of the workflow takes time?",
      "Which documents or tools are involved?",
      "What would a better next step look like?",
    ],
    privacy:
      "Please don’t send confidential documents or sensitive personal information in an introductory email.",
  },
  privacy: {
    title: "Privacy",
    description:
      "How the Zevqio website handles browser preferences, email links, and basic hosting requests.",
    eyebrow: "Plain-language policy",
    headline: ["Your privacy,", "in plain terms."],
    intro: "This page describes what this website does and doesn’t collect.",
    updated: "LAST UPDATED",
    date: "October 8, 2026",
    aside: "This website is a small, static information site for Zevqio.",
    lead: "Zevqio aims to keep this website simple. It does not include analytics, advertising trackers, a contact form, or an account system.",
    sections: [
      [
        "Information the site stores",
        "If you choose a light or dark theme, the site can save that preference in your browser’s local storage so it remains selected on later visits. This preference stays in your browser and is not sent to Zevqio. The site does not set advertising or analytics cookies.",
      ],
      [
        "Hosting and technical requests",
        "The website is intended to be hosted as static pages through GitHub Pages. When a browser requests a page, the hosting provider may process technical request information to deliver and protect the service, according to its own terms and settings. Zevqio has not added a separate analytics or visitor-tracking service to this site.",
      ],
      [
        "Email",
        "Links to the Zevqio email address open your own email application. If you send a message, the information you include is handled by your and Zevqio’s email providers. This website does not receive or store the message. Please avoid including confidential documents or sensitive personal information in an introductory message.",
      ],
      [
        "External links",
        "Links to other websites are governed by those sites’ own privacy practices. This policy applies only to the Zevqio website.",
      ],
      ["Questions", "For a question about this policy, email the founder."],
    ],
    emailSubject: "Privacy question",
  },
  detail: {
    screenLabel: "Interface concept",
    closer: "A closer look at",
    screenDisclaimer:
      "These original screen previews use sample content to show a possible experience. They do not depict a live product.",
    overviewLabel: "Project overview",
    aboutLabel: "About this area",
    fallbackTitle: ["A closer look", "at the project."],
    focusKicker: "CURRENT FOCUS",
    focusTitle: "What we’re exploring",
    inDevelopment: "In development",
    workflowEyebrow: "Possible workflow",
    workflowTitle: ["From a scan to", "reviewed text."],
    workflowIntro:
      "This is the direction being explored for OCR Studio. These steps describe a concept, not a released feature set.",
    prioritiesEyebrow: "Design priorities",
    prioritiesTitle: "Choices shaping the exploration.",
    prioritiesIntro:
      "The early direction puts legibility and human review ahead of promises about speed or accuracy.",
    ctaLabel: "Work with us",
    ctaTitle: "Have a useful idea to share?",
    ctaButton: "Start a conversation",
    questionSubject: "Question about",
  },
  products: {
    "ocr-studio": {
      name: "OCR Studio",
      category: "Documents · OCR",
      summary:
        "A workspace concept for turning scanned pages into reviewable text, with the source kept close to the result.",
      description:
        "OCR Studio explores a review-first experience for scanned documents. It considers how the original page and recognized text can stay together while a person checks the result. The project is in development, and the interface previews are concepts rather than a public service.",
      focus: [
        "Make the source page and recognized text easy to compare",
        "Keep text review visible in the main workflow",
        "Explore clear next steps for reviewed text",
      ],
      previews: [
        [
          "Workspace",
          "A simple starting point for adding a document and finding recent work.",
        ],
        [
          "Text review",
          "Keep a sample source page visible beside the text being reviewed.",
        ],
        [
          "Document library",
          "Scan a sample document list and its review state at a glance.",
        ],
      ],
      story: {
        title: "Scanned pages need more than recognition.",
        problem:
          "Getting text from a scan is only one part of the job. Names, numbers, and page structure can be misread, so people may need to check the result against the original before using it.",
        approach:
          "OCR Studio is exploring a workspace that keeps the source page beside the recognized text. The aim is to make review understandable and keep a person in control while the product scope is being defined.",
        workflow: [
          [
            "Start with a scan",
            "Bring a scanned document into the workspace. Supported file types and intake rules are still being explored.",
          ],
          [
            "Compare page and text",
            "Review recognized words alongside the source page so details can be checked in context.",
          ],
          [
            "Confirm the result",
            "Consider how someone could correct text and finish a review. Export and storage choices have not been finalized.",
          ],
        ],
        principles: [
          [
            "Keep the source close",
            "Make it easy to compare recognized text with the scanned page without losing context.",
          ],
          [
            "Make review clear",
            "Treat checking and correcting text as part of the experience, because recognition may need a human look.",
          ],
          [
            "Keep next steps simple",
            "Focus the early concept on a clear path from scan to reviewed text before defining later outputs.",
          ],
        ],
        status:
          "These screens are static concepts with fictional sample documents. The OCR engine, supported formats, correction behavior, export options, storage, and release timing have not been finalized.",
      },
    },
    "document-intelligence": {
      name: "Document Intelligence",
      category: "AI · Documents",
      summary:
        "Explore clearer ways to extract and validate useful information from business documents.",
      description:
        "Zevqio is exploring document processing workflows that can help teams move from scanned or digital files toward structured information. This product area is in development; no public product or service is currently offered.",
      focus: [
        "Document intake and classification concepts",
        "OCR and structured data extraction approaches",
        "Validation and human review requirements",
      ],
    },
    "pdf-automation": {
      name: "PDF Automation",
      category: "Documents · Utilities",
      summary:
        "Investigate practical tools for creating, processing, and automating business PDFs.",
      description:
        "This product area explores reliable PDF generation and processing for routine business work. It is in development, and its scope and availability have not been finalized.",
      focus: [
        "Document generation and templating needs",
        "Repeatable PDF processing workflows",
        "Quality checks for business outputs",
      ],
    },
    "workflow-automation": {
      name: "Workflow Automation",
      category: "Operations · Automation",
      summary:
        "Design configurable software workflows that reduce repetitive operational steps.",
      description:
        "Zevqio is investigating workflow automation for repeatable business operations, with clear steps and human review where it is useful. This work is in development; specific integrations and capabilities are not yet available to claim.",
      focus: [
        "Mapping repetitive processes into clear steps",
        "Configurable review and handoff points",
        "Integration requirements for real workflows",
      ],
    },
    vidoany: {
      name: "Vidoany",
      category: "Zevqio project",
      summary:
        "Vidoany is an early-stage Zevqio project; its public scope is still being defined.",
      description:
        "Vidoany is part of Zevqio's early-stage project portfolio. Its intended use, audience, and capabilities are still being defined, so this page will be updated as details are approved for public sharing.",
      focus: [
        "Define the intended use and audience",
        "Confirm the project scope and requirements",
        "Prepare accurate product information for public sharing",
      ],
    },
    tokensaver: {
      name: "TokenSaver",
      category: "Zevqio project",
      summary:
        "TokenSaver is an early-stage Zevqio project; its public scope is still being defined.",
      description:
        "TokenSaver is part of Zevqio's early-stage project portfolio. Its intended use, audience, and capabilities are still being defined, so this page will be updated as details are approved for public sharing.",
      focus: [
        "Define the intended use and audience",
        "Confirm the project scope and requirements",
        "Prepare accurate product information for public sharing",
      ],
    },
  },
} as const;

const translated = {
  "zh-cn": {
    nav: {
      products: "产品",
      solutions: "解决方案",
      projects: "项目",
      about: "关于",
      contact: "联系",
      cta: "联系我",
      language: "选择语言",
      menu: "打开导航菜单",
      skip: "跳至正文",
    },
    footer: {
      tagline: "为推动业务前进的工作打造实用软件。",
      explore: "探索",
      connect: "联系",
      email: "给创办人发邮件",
      privacy: "隐私",
      copyright: "独立软件项目。",
      building: "用心打造",
    },
    common: {
      home: "首页",
      products: "产品",
      projects: "项目",
      inDevelopment: "开发中",
      learn: "了解项目",
      screens: "界面预览",
      concept: "概念预览",
      breadcrumb: "面包屑导航",
      currentFocus: "当前重点",
      whatExploring: "正在探索的方向",
      possibleWorkflow: "设想中的流程",
      possibleStep: "可能的步骤",
      designPriorities: "设计重点",
      workWithUs: "与我们合作",
      contactCta: "开始交流",
      seeMore: "了解更多",
      emailUs: "给创办人发邮件",
      projectOverview: "项目概览",
      areaOverview: "关于此方向",
      exampleOnly: "仅为示例",
      screen: "界面",
      fictional: "虚构示例内容",
    },
    home: {
      title: "实用 AI 与工作流程软件",
      description: "为现代业务流程打造的实用软件与智能自动化工具。",
      eyebrow: "独立软件工作室",
      headline: ["更聪明地构建，", "更高效地工作。"],
      lead: "为现代业务流程打造的实用软件与智能自动化工具。",
      productsCta: "浏览产品",
      contactCta: "联系我们",
      footnote: "为真实运营工作打造的小型实用软件。",
      capabilitiesLabel: "我们的工作方向",
      capabilitiesTitle: ["减少琐事，", "留出思考空间。"],
      capabilitiesIntro: "专注探索适用于文档密集、重复性现代工作的软件。",
      productsLabel: "产品方向",
      productsTitle: ["让想法逐渐成为", "实用工具。"],
      productsIntro:
        "我们认真构建并如实分享进展。目前每个产品方向都仍在开发中。",
      allProducts: "查看所有产品方向",
      selectedLabel: "精选项目",
      selectedTitle: ["跨越代码", "与声音的创作。"],
      selectedIntro:
        "了解 RimRise 的两种版本：浏览器篮球游戏和 Unity 原型。作品集也包括独立网页与原创音频项目。",
      selectedNames: ["RimRise · Unity 版", "RimRise · 浏览器版", "原创音频"],
      selectedDescriptions: [
        "使用 Unity 6.3 制作的篮球生涯原型，现以全场 5 对 5 为起点。",
        "包含生涯成长、3D 城市和街头篮球的浏览器游戏。",
        "包含原创作品的独立音频项目。",
      ],
      workflowLabel: "工作流程的形态",
      workflowTitle: ["从文件开始，", "找到清晰的下一步。"],
      workflowIntro:
        "好的自动化让工作更容易理解。这个示例展示了一种可能的文档流程，并在信息继续流转前保留人工参与。",
      workflowLink: "了解文档智能",
      workflowBoard: "流程示意图",
      workflowSteps: [
        ["导入文档", "扫描件或数字文件"],
        ["OCR 与提取", "将文字整理为字段"],
        ["验证信息", "检查识别结果"],
        ["人工审核", "确认后再继续"],
        ["结构化输出", "供下一个工具使用"],
      ],
      workflowNote: "仅为示意图。产品能力仍在开发中。",
      principlesLabel: "我们如何看待软件",
      principlesTitle: ["围绕", "真实工作打造。"],
      principlesIntro: "实用工具应易于理解、贴合工作方式，并逐步建立信任。",
      principles: [
        ["从设计上重视隐私", "审慎处理数据，减少收集，并清楚说明部署选择。"],
        ["在关键环节保留人工审核", "把验证与人工监督纳入可靠的工作流程。"],
        ["模块化且易于集成", "打造小巧易懂的工具，让它们逐步融入现有运营。"],
        [
          "AI 辅助开发",
          "编程代理协助探索与实现；创办人会在发布前检查和测试改动。",
        ],
      ],
      studioLabel: "关于 Zevqio",
      studioTitle: ["独立工作室，专注", "打造实用工具。"],
      studioIntro:
        "Zevqio 是一个由创办人主导、自筹资金、处于早期阶段的独立软件工作室，专注探索文档处理、自动化和业务效率工具。",
      studioDetail:
        "目前的项目还包括 RimRise 篮球游戏，设有浏览器版本和 Unity 原型，以及其他独立网页与原创音频作品。我们会随着项目进展展示真实画面，并清楚说明仍在开发中的部分。",
      studioStatus: "创办人主导 · 自筹资金 · 早期阶段",
      studioLink: "更多关于 Zevqio",
      contactLabel: "开始交流",
      contactTitle: "一起打造实用工具。",
      contactIntro: "有值得简化的工作流程吗？告诉我们你正在处理什么。",
      mailSubject: "想简化的工作流程",
    },
    about: {
      title: "关于",
      description:
        "了解 Zevqio：一个由创办人主导、专注实用业务工具的独立软件项目。",
      eyebrow: "小型独立工作室",
      headline: ["打造实用工具，", "也认真打磨细节。"],
      intro:
        "Zevqio 是一个由创办人主导、自筹资金、处于早期阶段的独立软件工作室，探索文档工作和业务流程工具，也制作独立游戏与网页项目。",
      storyLabel: "Zevqio 的初衷",
      storyTitle: ["软件应让下一步", "更清晰易见。"],
      storyLead:
        "我们结合软件工程与现代 AI 技术，为真实运营挑战探索可靠、高效的方案。",
      story1:
        "目前关注的方向包括文档智能、OCR 与数据提取、PDF 自动化、业务流程和开发者工具。这些都仍处于早期探索阶段；产品逐步成熟并适合分享时，我们会清楚说明。",
      story2:
        "Zevqio 处于自筹资金的早期阶段。项目从真实任务或清晰想法出发，再通过专注的原型和迭代逐步完善。我们会说明各项目目前能做什么，以及哪些内容仍在开发中。",
      story3:
        "除了 OCR Studio，作品集还包括 RimRise 篮球人生游戏，提供浏览器版本和 Unity 原型。两个版本进度不同，因此各项目页面会说明对应版本的当前情况。",
      profile: "ZEVQIO / 工作室简介",
      structure: "组织形式",
      structureValue: "独立项目",
      stage: "阶段",
      focus: "重点",
      focusValue: "实用软件",
      approach: "方式",
      approachValue: "创办人主导 · 自筹资金",
      cardFoot: "用心打造，每次迈出一个实用的小步。",
      principlesLabel: "工作原则",
      principlesTitle: ["我们如何处理", "每个细节。"],
      principlesIntro: "好的软件尊重人们的时间、处境，以及他们对结果的信心。",
      ctaLabel: "欢迎交流",
      ctaTitle: "你正在做什么？",
      ctaButton: "联系 Zevqio",
    },
    portfolio: {
      title: "项目",
      screenshotsLabel: "项目画面",
      screenshotsNote:
        "这些画面截取自本机运行的 RimRise 版本。两个版本都仍在开发中，界面和功能可能调整。",
      overviewLabel: "项目概览",
      toolsLabel: "使用技术",
      sourceLink: "在 GitHub 查看项目",
      ctaLabel: "有项目想法？",
      ctaTitle: "一起把下一步做得更清晰。",
      ctaButton: "联系 Zevqio",
      pages: {
        "rimrise-unity": {
          name: "RimRise · Unity 版",
          category: "篮球游戏 · Unity 原型",
          summary:
            "RimRise 的 Unity 6.3 版本，从可玩的全场 5 对 5 篮球比赛和生涯界面开始。",
          stage: "Unity 原型 · 开发中",
          heroAlt: "RimRise Unity 原型中的五对五篮球比赛。",
          heroBadge: "UNITY 6.3 · 本机原型",
          overviewTitle: "专注打造篮球场上的 Unity 原型。",
          overview: [
            "RimRise 是一个结合篮球生涯与城市生活的游戏项目。Unity 版从可玩的球场开始：全场五对五比赛，包含球员移动、传球、投篮、防守、AI 队友与对手，以及场内计分板。",
            "原型还包含生涯中心，可查看球员数据、训练、球队和赛季进度。生涯资料保存在本机。Unity 版目前为单人游戏；浏览器版本仍包含其他城市、社交和在线系统。",
          ],
          focusTitle: "Unity 当前版本的内容",
          focus: [
            [
              "全场 5 对 5",
              "可玩的球场流程，包含移动、控球、传球、投篮、防守和 AI 球员。",
            ],
            ["生涯界面", "管理球员资料、能力、球队信息和赛季进度的生涯中心。"],
            [
              "分阶段移植",
              "Unity 版仍是开发中的单人版本，目前尚未包含浏览器游戏的所有系统。",
            ],
          ],
          gallery: [
            ["生涯管理界面", "球员总览、赛季信息和成长操作。"],
            ["比赛暂停画面", "比赛中的暂停界面及基本操作提示。"],
          ],
          stageNote:
            "项目仍在开发中。Unity 版目前是本机单人原型，功能尚未与浏览器版本完全一致。",
        },
        "rimrise-web": {
          name: "RimRise · 浏览器版",
          category: "浏览器游戏 · 网页开发",
          summary:
            "一款浏览器篮球生涯游戏，结合赛季成长、可探索的 3D 城市和街头篮球。",
          stage: "浏览器游戏 · 开发中",
          heroAlt: "RimRise 浏览器游戏的球员生涯界面。",
          heroBadge: "浏览器版本 · 实际截屏",
          overviewTitle: "在浏览器中展开篮球世界。",
          overview: [
            "浏览器版把球员生涯模拟与可探索的 3D 城市结合起来。玩家可以跨赛季经营虚构球员生涯、提升能力，并作出球队、训练和球场外生活的选择。",
            "项目把浏览器界面、游戏模拟和多人房间系统结合为一个独立网页游戏。城市、赛季界面和篮球比赛共同构成网页版本，与 Unity 原型分开开发。",
          ],
          focusTitle: "浏览器游戏的组成",
          focus: [
            ["生涯与赛季", "球员成长、赛程、生涯里程碑和赛季之间的决定。"],
            [
              "3D 城市与街头篮球",
              "以台北、香港和东京为主题的可探索城市，以及街头篮球场。",
            ],
            [
              "浏览器游戏系统",
              "客户端使用 JavaScript 与 Three.js；Node.js 和 WebSocket 支持房间与实时功能。",
            ],
          ],
          gallery: [
            ["探索 3D 城市", "浏览器城市模式截屏，展示导航和游戏角色。"],
            ["街头篮球比赛", "在浏览器游戏中进行的五对五篮球比赛。"],
          ],
          stageNote:
            "项目仍在开发中。这些画面截取自本机浏览器版本；在线可用状态和游戏系统可能随开发进度调整。",
        },
      },
    },
    productsPage: {
      title: "产品",
      description:
        "浏览 Zevqio 早期的软件项目与产品方向，包括 OCR Studio、Vidoany 和 TokenSaver。",
      eyebrow: "产品组合",
      headline: ["为重复工作", "打造软件。"],
      intro:
        "我们正在探索面向实际工作的专注型软件项目。此处列出的项目都在开发中，部分公开信息仍在整理。",
      note: "当各产品方向适合公开讨论时，我们会分享其可用情况和具体能力。",
      ctaLabel: "有实际应用场景？",
      ctaTitle: "告诉我们你的工作。",
      ctaButton: "联系我",
    },
    contact: {
      title: "联系",
      description: "联系 Zevqio，讨论实用软件、文档处理与业务流程自动化。",
      eyebrow: "联系",
      headline: ["聊聊", "你的工作。"],
      intro:
        "告诉我们一个重复流程、文档难题，或你希望存在的实用工具。每封邮件我们都会阅读。",
      email: "电子邮件",
      cardTitle: "先写封邮件。",
      cardBody:
        "使用你的邮件应用直接联系创办人。本网站没有联系表单，也不会保存提交内容。",
      guidanceLabel: "一个好的开端",
      guidanceTitle: "可以写些什么？",
      guidanceIntro: "简单介绍任务和你希望达成的结果即可。",
      prompts: [
        "工作流程中哪一部分最耗时？",
        "涉及哪些文档或工具？",
        "怎样的下一步会更理想？",
      ],
      privacy: "初次联系时，请勿发送机密文件或敏感个人信息。",
    },
    privacy: {
      title: "隐私",
      description:
        "了解 Zevqio 网站如何处理浏览器偏好、邮件链接和基本托管请求。",
      eyebrow: "简明隐私说明",
      headline: ["关于你的隐私，", "简单说明。"],
      intro: "本页介绍此网站会收集和不会收集哪些信息。",
      updated: "最后更新",
      date: "2026年10月8日",
      aside: "这是 Zevqio 的轻量静态信息网站。",
      lead: "Zevqio 希望网站保持简单。网站不含分析、广告追踪器、联系表单或账户系统。",
      sections: [
        [
          "网站保存的信息",
          "如果你选择浅色或深色主题，网站可以将偏好保存在浏览器的本地存储中，以便下次访问时继续使用。此设置留在你的浏览器中，不会发送给 Zevqio。网站不设置广告或分析 Cookie。",
        ],
        [
          "托管与技术请求",
          "本网站计划通过 GitHub Pages 以静态页面托管。浏览器请求页面时，托管服务商可能会依据其条款和设置处理技术请求信息，以提供并保护服务。Zevqio 没有为本网站添加独立的分析或访客追踪服务。",
        ],
        [
          "电子邮件",
          "点击 Zevqio 邮件地址会打开你自己的邮件应用。发送邮件后，你提供的信息将由你和 Zevqio 的邮件服务商处理。本网站不会接收或存储邮件内容。初次联系时请避免加入机密文件或敏感个人信息。",
        ],
        [
          "外部链接",
          "其他网站的链接受其自身隐私做法约束。本说明仅适用于 Zevqio 网站。",
        ],
        ["问题", "如对本说明有疑问，请给创办人发送邮件。"],
      ],
      emailSubject: "隐私问题",
    },
    detail: {
      screenLabel: "界面概念",
      closer: "深入了解",
      screenDisclaimer:
        "这些原创界面预览使用示例内容展示一种可能的体验，并非真实运行的产品。",
      overviewLabel: "项目概览",
      aboutLabel: "关于此方向",
      fallbackTitle: ["深入了解", "这个项目。"],
      focusKicker: "当前重点",
      focusTitle: "正在探索的方向",
      inDevelopment: "开发中",
      workflowEyebrow: "设想中的流程",
      workflowTitle: ["从扫描件到", "审核后的文字。"],
      workflowIntro:
        "这是 OCR Studio 正在探索的方向。以下步骤描述的是概念，并非已发布的功能。",
      prioritiesEyebrow: "设计重点",
      prioritiesTitle: "塑造探索方向的选择。",
      prioritiesIntro:
        "早期方向优先考虑易读性与人工审核，不对速度或准确率作出承诺。",
      ctaLabel: "与我们合作",
      ctaTitle: "有实用想法想分享？",
      ctaButton: "开始交流",
      questionSubject: "关于此项目的问题",
    },
    products: {
      "ocr-studio": {
        name: "OCR Studio",
        category: "文档 · OCR",
        summary:
          "一个工作区概念，帮助将扫描页面转换为可审核的文字，并让原始页面始终与结果并列。",
        description:
          "OCR Studio 正在探索以审核为先的扫描文档体验，让原始页面与识别文字保持在一起，方便人工检查。项目仍在开发中，界面预览为概念设计，并非公开服务。",
        focus: [
          "方便对照原始页面与识别文字",
          "让文字审核融入主要工作流程",
          "探索审核完成后的清晰后续步骤",
        ],
        previews: [
          ["工作区", "添加文档并查看近期工作的简洁起点。"],
          ["文字审核", "在审核文字旁持续显示原始页面示例。"],
          ["文档库", "快速查看示例文档及其审核状态。"],
        ],
        story: {
          title: "扫描页面不止需要文字识别。",
          problem:
            "从扫描件提取文字只是工作的一部分。姓名、数字和页面结构可能识别错误，因此使用结果前，人们可能还需要对照原文检查。",
          approach:
            "OCR Studio 正在探索让原始页面与识别文字并列显示的工作区。产品范围仍在定义中，我们希望让审核过程清楚易懂，并由使用者掌握决定权。",
          workflow: [
            [
              "从扫描件开始",
              "将扫描文档放入工作区。支持的文件类型和导入规则仍在探索。",
            ],
            [
              "对照页面与文字",
              "在原始页面旁检查识别文字，结合上下文核对细节。",
            ],
            [
              "确认结果",
              "探索如何修改文字并完成审核。导出和存储方式尚未确定。",
            ],
          ],
          principles: [
            ["让原文始终可见", "便于对照识别文字与扫描页面，同时保留上下文。"],
            [
              "让审核过程清晰",
              "把检查和修正文字纳入体验，因为识别结果可能需要人工复核。",
            ],
            [
              "让后续步骤简单",
              "早期概念聚焦于从扫描件到审核文字的清晰路径，再考虑后续输出。",
            ],
          ],
          status:
            "这些静态界面使用虚构示例文档。OCR 引擎、支持格式、修正方式、导出选项、存储方式和发布时间均尚未确定。",
        },
      },
      "document-intelligence": {
        name: "文档智能",
        category: "AI · 文档",
        summary: "探索从业务文档中提取和验证实用信息的清晰方式。",
        description:
          "Zevqio 正在探索文档处理流程，帮助团队从扫描或数字文件逐步整理出结构化信息。此产品方向仍在开发中，目前未提供公开产品或服务。",
        focus: [
          "文档导入与分类概念",
          "OCR 与结构化数据提取方法",
          "验证和人工审核需求",
        ],
      },
      "pdf-automation": {
        name: "PDF 自动化",
        category: "文档 · 工具",
        summary: "研究用于创建、处理和自动化业务 PDF 的实用工具。",
        description:
          "此产品方向探索适用于日常业务的可靠 PDF 生成与处理方式。目前仍在开发中，范围和可用时间尚未确定。",
        focus: [
          "文档生成与模板需求",
          "可重复的 PDF 处理流程",
          "业务输出的质量检查",
        ],
      },
      "workflow-automation": {
        name: "工作流程自动化",
        category: "运营 · 自动化",
        summary: "设计可配置的软件流程，减少重复的运营步骤。",
        description:
          "Zevqio 正在研究适用于重复业务运营的工作流程自动化，并探索清晰步骤和适时人工审核。目前仍在开发中，尚无可确认的具体集成或功能。",
        focus: [
          "将重复流程梳理为清晰步骤",
          "可配置的审核与交接节点",
          "真实流程所需的集成条件",
        ],
      },
      vidoany: {
        name: "Vidoany",
        category: "Zevqio 项目",
        summary: "Vidoany 是 Zevqio 的早期项目，公开范围仍在定义。",
        description:
          "Vidoany 属于 Zevqio 的早期项目组合。其用途、受众与能力仍在定义中；获准公开更多信息后，本页会继续更新。",
        focus: [
          "定义预期用途与受众",
          "确认项目范围与需求",
          "准备准确的公开产品信息",
        ],
      },
      tokensaver: {
        name: "TokenSaver",
        category: "Zevqio 项目",
        summary: "TokenSaver 是 Zevqio 的早期项目，公开范围仍在定义。",
        description:
          "TokenSaver 属于 Zevqio 的早期项目组合。其用途、受众与能力仍在定义中；获准公开更多信息后，本页会继续更新。",
        focus: [
          "定义预期用途与受众",
          "确认项目范围与需求",
          "准备准确的公开产品信息",
        ],
      },
    },
  },
  "zh-hk": {
    nav: {
      products: "產品",
      solutions: "方案",
      projects: "項目",
      about: "關於",
      contact: "聯絡",
      cta: "聯絡我們",
      language: "選擇語言",
      menu: "開啟導覽選單",
      skip: "跳至正文",
    },
    footer: {
      tagline: "為推動業務前進的工作打造實用軟件。",
      explore: "探索",
      connect: "聯絡",
      email: "電郵給創辦人",
      privacy: "私隱",
      copyright: "獨立軟件項目。",
      building: "用心打造",
    },
    common: {
      home: "首頁",
      products: "產品",
      projects: "項目",
      inDevelopment: "開發中",
      learn: "了解項目",
      screens: "介面預覽",
      concept: "概念預覽",
      breadcrumb: "導覽路徑",
      currentFocus: "目前重點",
      whatExploring: "正在探索的方向",
      possibleWorkflow: "構想中的流程",
      possibleStep: "可能步驟",
      designPriorities: "設計重點",
      workWithUs: "與我們合作",
      contactCta: "開始交流",
      seeMore: "了解更多",
      emailUs: "電郵給創辦人",
      projectOverview: "項目概覽",
      areaOverview: "關於此方向",
      exampleOnly: "僅供示例",
      screen: "介面",
      fictional: "虛構示例內容",
    },
    home: {
      title: "實用 AI 與工作流程軟件",
      description: "為現代業務流程打造的實用軟件與智能自動化工具。",
      eyebrow: "獨立軟件工作室",
      headline: ["更聰明地打造，", "更有效率地工作。"],
      lead: "為現代業務流程打造的實用軟件與智能自動化工具。",
      productsCta: "瀏覽產品",
      contactCta: "聯絡我們",
      footnote: "為真實營運工作打造的小型實用軟件。",
      capabilitiesLabel: "我們的工作方向",
      capabilitiesTitle: ["減少瑣事，", "留多點思考空間。"],
      capabilitiesIntro: "專注探索適用於文檔密集、重複性現代工作的軟件。",
      productsLabel: "產品方向",
      productsTitle: ["讓構想逐步變成", "實用工具。"],
      productsIntro:
        "我們認真打造並如實分享進度。目前每個產品方向都仍在開發中。",
      allProducts: "查看所有產品方向",
      selectedLabel: "精選項目",
      selectedTitle: ["跨越程式碼", "與聲音的創作。"],
      selectedIntro:
        "展示 RimRise 的兩個版本：瀏覽器籃球遊戲和 Unity 原型。作品集亦包括獨立網頁與原創音訊項目。",
      selectedNames: ["RimRise · Unity 版", "RimRise · 瀏覽器版", "原創音訊"],
      selectedDescriptions: [
        "使用 Unity 6.3 製作的籃球生涯原型，現以全場 5 對 5 為起點。",
        "包含生涯成長、3D 城市和街頭籃球的瀏覽器遊戲。",
        "包含原創作品的獨立音訊項目。",
      ],
      workflowLabel: "工作流程的構想",
      workflowTitle: ["從檔案開始，", "找到清晰的下一步。"],
      workflowIntro:
        "好的自動化讓工作更容易理解。這個示例展示一種可能的文件流程，並在資訊繼續流轉前保留人手參與。",
      workflowLink: "了解文件智能",
      workflowBoard: "流程示意圖",
      workflowSteps: [
        ["匯入文件", "掃描檔或數碼檔案"],
        ["OCR 與擷取", "將文字整理為欄位"],
        ["驗證資料", "檢查識別結果"],
        ["人工審核", "確認後再繼續"],
        ["結構化輸出", "供下一個工具使用"],
      ],
      workflowNote: "僅供示意。產品功能仍在開發中。",
      principlesLabel: "我們如何看待軟件",
      principlesTitle: ["圍繞", "真實工作打造。"],
      principlesIntro: "實用工具應易於理解、配合工作方式，並逐步建立信任。",
      principles: [
        ["從設計上重視私隱", "審慎處理資料、減少收集，並清楚說明部署選擇。"],
        ["在關鍵環節保留人工審核", "把驗證與人工監督納入可靠的工作流程。"],
        ["模組化並易於整合", "打造小巧易明的工具，讓它們逐步融入現有營運。"],
        [
          "AI 輔助開發",
          "編程代理協助探索與實作；創辦人會在發佈前檢查和測試改動。",
        ],
      ],
      studioLabel: "關於 Zevqio",
      studioTitle: ["獨立工作室，專注", "打造實用工具。"],
      studioIntro:
        "Zevqio 是一個由創辦人主導、自資、處於早期階段的獨立軟件工作室，專注探索文件處理、自動化和業務效率工具。",
      studioDetail:
        "目前的項目還包括 RimRise 籃球遊戲，設有瀏覽器版本和 Unity 原型，以及其他獨立網頁與原創音訊作品。我們會隨項目進展展示實際畫面，並清楚說明仍在開發中的部分。",
      studioStatus: "創辦人主導 · 自資 · 早期階段",
      studioLink: "更多關於 Zevqio",
      contactLabel: "開始交流",
      contactTitle: "一起打造實用工具。",
      contactIntro: "有值得簡化的工作流程嗎？告訴我們你正在處理甚麼。",
      mailSubject: "想簡化的工作流程",
    },
    about: {
      title: "關於",
      description:
        "認識 Zevqio：一個由創辦人主導、專注實用業務工具的獨立軟件項目。",
      eyebrow: "小型獨立工作室",
      headline: ["打造實用工具，", "也用心打磨細節。"],
      intro:
        "Zevqio 是一個由創辦人主導、自資、處於早期階段的獨立軟件工作室，探索文件工作和業務流程工具，也製作獨立遊戲與網頁項目。",
      storyLabel: "Zevqio 的初衷",
      storyTitle: ["軟件應令下一步", "更清晰易見。"],
      storyLead:
        "我們結合軟件工程與現代 AI 技術，為真實營運挑戰探索可靠、高效的方案。",
      story1:
        "目前關注的方向包括文件智能、OCR 與資料擷取、PDF 自動化、業務流程和開發者工具。這些仍處於早期探索階段；產品逐步成熟並適合分享時，我們會清楚說明。",
      story2:
        "Zevqio 處於自資的早期階段。項目從真實任務或清晰構想出發，再透過專注的原型和迭代逐步完善。我們會說明各項目目前能做到甚麼，以及哪些內容仍在開發中。",
      story3:
        "除了 OCR Studio，作品集亦包括 RimRise 籃球人生遊戲，提供瀏覽器版本和 Unity 原型。兩個版本進度不同，因此各項目頁面會說明對應版本的現況。",
      profile: "ZEVQIO / 工作室簡介",
      structure: "組織形式",
      structureValue: "獨立項目",
      stage: "階段",
      focus: "重點",
      focusValue: "實用軟件",
      approach: "方式",
      approachValue: "創辦人主導 · 自資",
      cardFoot: "用心打造，每次踏出一個實用的小步。",
      principlesLabel: "工作原則",
      principlesTitle: ["我們如何處理", "每個細節。"],
      principlesIntro: "好的軟件尊重人們的時間、處境，以及他們對結果的信心。",
      ctaLabel: "歡迎交流",
      ctaTitle: "你正在做甚麼？",
      ctaButton: "聯絡 Zevqio",
    },
    portfolio: {
      title: "項目",
      screenshotsLabel: "項目畫面",
      screenshotsNote:
        "這些畫面截取自本機運行的 RimRise 版本。兩個版本都仍在開發中，介面和功能可能調整。",
      overviewLabel: "項目概覽",
      toolsLabel: "使用技術",
      sourceLink: "在 GitHub 查看項目",
      ctaLabel: "有項目構想？",
      ctaTitle: "一起令下一步更清晰。",
      ctaButton: "聯絡 Zevqio",
      pages: {
        "rimrise-unity": {
          name: "RimRise · Unity 版",
          category: "籃球遊戲 · Unity 原型",
          summary:
            "RimRise 的 Unity 6.3 版本，從可玩的全場 5 對 5 籃球比賽和生涯介面開始。",
          stage: "Unity 原型 · 開發中",
          heroAlt: "RimRise Unity 原型中的五對五籃球比賽。",
          heroBadge: "UNITY 6.3 · 本機原型",
          overviewTitle: "專注打造球場籃球體驗的 Unity 原型。",
          overview: [
            "RimRise 是一個結合籃球生涯與城市生活的遊戲項目。Unity 版從可玩的球場開始：全場五對五比賽，包含球員移動、傳球、投籃、防守、AI 隊友與對手，以及場內計分板。",
            "原型亦包含生涯中心，可查看球員數據、訓練、球隊和賽季進度。生涯資料儲存在本機。Unity 版目前是單人遊戲；瀏覽器版本仍包含其他城市、社交和線上系統。",
          ],
          focusTitle: "Unity 目前版本的內容",
          focus: [
            [
              "全場 5 對 5",
              "可玩的球場流程，包含移動、控球、傳球、投籃、防守和 AI 球員。",
            ],
            ["生涯介面", "管理球員資料、能力、球隊資訊和賽季進度的生涯中心。"],
            [
              "分階段移植",
              "Unity 版仍是開發中的單人版本，目前尚未包含瀏覽器遊戲的所有系統。",
            ],
          ],
          gallery: [
            ["生涯管理介面", "球員總覽、賽季資訊和成長操作。"],
            ["比賽暫停畫面", "比賽中的暫停介面及基本操作提示。"],
          ],
          stageNote:
            "項目仍在開發中。Unity 版目前是本機單人原型，功能尚未與瀏覽器版本完全一致。",
        },
        "rimrise-web": {
          name: "RimRise · 瀏覽器版",
          category: "瀏覽器遊戲 · 網頁開發",
          summary:
            "一款瀏覽器籃球生涯遊戲，結合賽季成長、可探索的 3D 城市和街頭籃球。",
          stage: "瀏覽器遊戲 · 開發中",
          heroAlt: "RimRise 瀏覽器遊戲的球員生涯介面。",
          heroBadge: "瀏覽器版本 · 實際截圖",
          overviewTitle: "在瀏覽器中展開籃球世界。",
          overview: [
            "瀏覽器版把球員生涯模擬與可探索的 3D 城市結合。玩家可以跨賽季經營虛構球員生涯、提升能力，並作出球隊、訓練和球場外生活的選擇。",
            "項目把瀏覽器介面、遊戲模擬和多人房間系統結合成一個獨立網頁遊戲。城市、賽季介面和籃球比賽共同構成網頁版本，並與 Unity 原型分開開發。",
          ],
          focusTitle: "瀏覽器遊戲的組成",
          focus: [
            ["生涯與賽季", "球員成長、賽程、生涯里程碑和賽季之間的決定。"],
            [
              "3D 城市與街頭籃球",
              "以台北、香港和東京為主題的可探索城市，以及街頭籃球場。",
            ],
            [
              "瀏覽器遊戲系統",
              "客戶端使用 JavaScript 與 Three.js；Node.js 和 WebSocket 支援房間與即時功能。",
            ],
          ],
          gallery: [
            ["探索 3D 城市", "瀏覽器城市模式截圖，展示導航和遊戲角色。"],
            ["街頭籃球比賽", "在瀏覽器遊戲中進行的五對五籃球比賽。"],
          ],
          stageNote:
            "項目仍在開發中。這些畫面截取自本機瀏覽器版本；線上可用狀態和遊戲系統可能隨開發進度調整。",
        },
      },
    },
    productsPage: {
      title: "產品",
      description:
        "瀏覽 Zevqio 早期軟件項目與產品方向，包括 OCR Studio、Vidoany 和 TokenSaver。",
      eyebrow: "產品組合",
      headline: ["為重複工作", "打造軟件。"],
      intro:
        "我們正探索面向實際工作的專注型軟件項目。此處列出的項目都在開發中，部分公開資料仍在整理。",
      note: "當各產品方向適合公開討論時，我們會分享可用情況和具體功能。",
      ctaLabel: "有實際應用場景？",
      ctaTitle: "告訴我們你的工作。",
      ctaButton: "聯絡我們",
    },
    contact: {
      title: "聯絡",
      description: "聯絡 Zevqio，討論實用軟件、文件處理與業務流程自動化。",
      eyebrow: "聯絡",
      headline: ["聊聊", "你的工作。"],
      intro:
        "告訴我們一個重複流程、文件難題，或你希望存在的實用工具。我們會閱讀每封郵件。",
      email: "電郵",
      cardTitle: "先寫封電郵。",
      cardBody:
        "使用你的電郵程式直接聯絡創辦人。本網站沒有聯絡表格，也不會儲存提交內容。",
      guidanceLabel: "一個好的開始",
      guidanceTitle: "可以寫些甚麼？",
      guidanceIntro: "簡單介紹任務和你希望達成的結果便足夠。",
      prompts: [
        "工作流程中哪部分最花時間？",
        "涉及哪些文件或工具？",
        "怎樣的下一步會更理想？",
      ],
      privacy: "初次聯絡時，請勿傳送機密文件或敏感個人資料。",
    },
    privacy: {
      title: "私隱",
      description:
        "了解 Zevqio 網站如何處理瀏覽器偏好、電郵連結和基本託管請求。",
      eyebrow: "簡明私隱說明",
      headline: ["關於你的私隱，", "簡單說明。"],
      intro: "本頁介紹此網站會收集和不會收集哪些資料。",
      updated: "最後更新",
      date: "2026年10月8日",
      aside: "這是 Zevqio 的輕量靜態資訊網站。",
      lead: "Zevqio 希望網站保持簡單。網站不含分析、廣告追蹤器、聯絡表格或帳戶系統。",
      sections: [
        [
          "網站儲存的資料",
          "如果你選擇淺色或深色主題，網站可以把偏好儲存在瀏覽器的本機儲存空間，以便下次瀏覽時繼續使用。此設定會留在你的瀏覽器，不會傳送給 Zevqio。網站不會設定廣告或分析 Cookie。",
        ],
        [
          "託管與技術請求",
          "本網站計劃透過 GitHub Pages 以靜態頁面託管。瀏覽器要求頁面時，託管服務商可能會按其條款和設定處理技術請求資料，以提供及保障服務。Zevqio 沒有為本網站加入獨立的分析或訪客追蹤服務。",
        ],
        [
          "電郵",
          "點擊 Zevqio 電郵地址會開啟你自己的電郵程式。發送電郵後，你提供的資料會由你和 Zevqio 的電郵服務商處理。本網站不會接收或儲存電郵內容。初次聯絡時請避免加入機密文件或敏感個人資料。",
        ],
        [
          "外部連結",
          "其他網站連結受其自身私隱做法約束。本說明只適用於 Zevqio 網站。",
        ],
        ["問題", "如對本說明有疑問，請電郵給創辦人。"],
      ],
      emailSubject: "私隱問題",
    },
    detail: {
      screenLabel: "介面構想",
      closer: "深入了解",
      screenDisclaimer:
        "這些原創介面預覽以示例內容展示一種可能體驗，並非實際運作的產品。",
      overviewLabel: "項目概覽",
      aboutLabel: "關於此方向",
      fallbackTitle: ["深入了解", "這個項目。"],
      focusKicker: "目前重點",
      focusTitle: "正在探索的方向",
      inDevelopment: "開發中",
      workflowEyebrow: "構想中的流程",
      workflowTitle: ["從掃描檔到", "審核後的文字。"],
      workflowIntro:
        "這是 OCR Studio 正在探索的方向。以下步驟描述的是構想，並非已發佈的功能。",
      prioritiesEyebrow: "設計重點",
      prioritiesTitle: "塑造探索方向的選擇。",
      prioritiesIntro:
        "早期方向優先考慮易讀性與人工審核，不會承諾速度或準確率。",
      ctaLabel: "與我們合作",
      ctaTitle: "有實用想法想分享？",
      ctaButton: "開始交流",
      questionSubject: "關於此項目的問題",
    },
    products: {
      "ocr-studio": {
        name: "OCR Studio",
        category: "文件 · OCR",
        summary:
          "一個工作區構想，協助將掃描頁面轉為可審核文字，並讓原始頁面與結果並列。",
        description:
          "OCR Studio 正在探索以審核為先的掃描文件體驗，讓原始頁面與識別文字保持在一起，方便人工檢查。項目仍在開發中，介面預覽屬於概念設計，並非公開服務。",
        focus: [
          "方便對照原始頁面與識別文字",
          "讓文字審核融入主要工作流程",
          "探索審核完成後的清晰後續步驟",
        ],
        previews: [
          ["工作區", "加入文件並查看近期工作的簡潔起點。"],
          ["文字審核", "在審核文字旁持續顯示原始頁面示例。"],
          ["文件庫", "快速查看示例文件及其審核狀態。"],
        ],
        story: {
          title: "掃描頁面不止需要文字辨識。",
          problem:
            "從掃描檔擷取文字只是工作的一部分。姓名、數字和頁面結構可能辨識錯誤，因此使用結果前，人們可能仍需對照原文檢查。",
          approach:
            "OCR Studio 正在探索讓原始頁面與辨識文字並列顯示的工作區。產品範圍仍在界定中，我們希望令審核過程清晰易明，並由使用者掌握決定權。",
          workflow: [
            [
              "從掃描檔開始",
              "將掃描文件放進工作區。支援的檔案類型和匯入規則仍在探索。",
            ],
            [
              "對照頁面與文字",
              "在原始頁面旁檢查辨識文字，結合上下文核對細節。",
            ],
            [
              "確認結果",
              "探索如何修改文字並完成審核。匯出和儲存方式尚未確定。",
            ],
          ],
          principles: [
            ["讓原文保持在旁", "方便對照辨識文字與掃描頁面，同時保留上下文。"],
            [
              "令審核過程清晰",
              "把檢查和修正文字納入體驗，因為辨識結果可能需要人工覆核。",
            ],
            [
              "令後續步驟簡單",
              "早期構想聚焦於從掃描檔到審核文字的清晰流程，再考慮之後的輸出。",
            ],
          ],
          status:
            "這些靜態介面使用虛構示例文件。OCR 引擎、支援格式、修正方式、匯出選項、儲存方式和推出時間均尚未確定。",
        },
      },
      "document-intelligence": {
        name: "文件智能",
        category: "AI · 文件",
        summary: "探索從業務文件擷取和驗證實用資訊的清晰方法。",
        description:
          "Zevqio 正在探索文件處理流程，協助團隊從掃描或數碼檔案逐步整理出結構化資料。此產品方向仍在開發中，目前未有公開產品或服務。",
        focus: [
          "文件匯入與分類構想",
          "OCR 與結構化資料擷取方法",
          "驗證及人工審核需求",
        ],
      },
      "pdf-automation": {
        name: "PDF 自動化",
        category: "文件 · 工具",
        summary: "研究用於建立、處理和自動化業務 PDF 的實用工具。",
        description:
          "此產品方向探索適用於日常業務的可靠 PDF 產生與處理方式。目前仍在開發中，範圍和可用時間尚未確定。",
        focus: [
          "文件產生與範本需求",
          "可重複的 PDF 處理流程",
          "業務輸出的品質檢查",
        ],
      },
      "workflow-automation": {
        name: "工作流程自動化",
        category: "營運 · 自動化",
        summary: "設計可設定的軟件流程，減少重複的營運步驟。",
        description:
          "Zevqio 正研究適用於重複業務營運的工作流程自動化，並探索清晰步驟和適時人工審核。目前仍在開發中，尚無可確認的具體整合或功能。",
        focus: [
          "把重複流程整理為清晰步驟",
          "可設定的審核與交接節點",
          "真實流程所需的整合條件",
        ],
      },
      vidoany: {
        name: "Vidoany",
        category: "Zevqio 項目",
        summary: "Vidoany 是 Zevqio 的早期項目，公開範圍仍在界定。",
        description:
          "Vidoany 屬於 Zevqio 的早期項目組合。其用途、對象與功能仍在界定中；獲准公開更多資料後，本頁會繼續更新。",
        focus: [
          "界定預期用途與對象",
          "確認項目範圍與需求",
          "準備準確的公開產品資料",
        ],
      },
      tokensaver: {
        name: "TokenSaver",
        category: "Zevqio 項目",
        summary: "TokenSaver 是 Zevqio 的早期項目，公開範圍仍在界定。",
        description:
          "TokenSaver 屬於 Zevqio 的早期項目組合。其用途、對象與功能仍在界定中；獲准公開更多資料後，本頁會繼續更新。",
        focus: [
          "界定預期用途與對象",
          "確認項目範圍與需求",
          "準備準確的公開產品資料",
        ],
      },
    },
  },
  ja: {
    nav: {
      products: "プロダクト",
      solutions: "ソリューション",
      projects: "プロジェクト",
      about: "概要",
      contact: "お問い合わせ",
      cta: "お問い合わせ",
      language: "言語を選択",
      menu: "ナビゲーションを開く",
      skip: "本文へ移動",
    },
    footer: {
      tagline: "ビジネスを前に進める仕事のための、実用的なソフトウェア。",
      explore: "見る",
      connect: "連絡先",
      email: "創業者にメール",
      privacy: "プライバシー",
      copyright: "独立したソフトウェアプロジェクト。",
      building: "丁寧に開発中",
    },
    common: {
      home: "ホーム",
      products: "プロダクト",
      projects: "プロジェクト",
      inDevelopment: "開発中",
      learn: "プロジェクトを見る",
      screens: "画面プレビュー",
      concept: "コンセプトプレビュー",
      breadcrumb: "パンくずリスト",
      currentFocus: "現在の重点",
      whatExploring: "検討していること",
      possibleWorkflow: "想定ワークフロー",
      possibleStep: "想定ステップ",
      designPriorities: "設計の優先事項",
      workWithUs: "一緒に取り組む",
      contactCta: "お問い合わせ",
      seeMore: "詳しく見る",
      emailUs: "創業者にメール",
      projectOverview: "プロジェクト概要",
      areaOverview: "この領域について",
      exampleOnly: "イメージ例",
      screen: "画面",
      fictional: "架空のサンプル内容",
    },
    home: {
      title: "実用的なAI・業務ワークフローソフトウェア",
      description:
        "現代の業務プロセスに役立つソフトウェアとインテリジェントな自動化ツール。",
      eyebrow: "独立系ソフトウェアスタジオ",
      headline: ["賢くつくり、", "仕事を効率よく。"],
      lead: "現代の業務プロセスに役立つソフトウェアとインテリジェントな自動化ツール。",
      productsCta: "プロダクトを見る",
      contactCta: "お問い合わせ",
      footnote: "実際の業務に役立つ、小さく実用的なソフトウェア。",
      capabilitiesLabel: "取り組んでいること",
      capabilitiesTitle: ["細かな作業を減らし、", "考える時間を増やす。"],
      capabilitiesIntro:
        "文書が多く、繰り返しの多い現代の仕事に向けたソフトウェアを重点的に検討しています。",
      productsLabel: "プロダクト領域",
      productsTitle: ["アイデアを", "役立つツールへ。"],
      productsIntro:
        "丁寧につくり、進捗を正直に共有します。各プロダクト領域は現在開発中です。",
      allProducts: "すべての領域を見る",
      selectedLabel: "主なプロジェクト",
      selectedTitle: ["コードと", "音でつくる。"],
      selectedIntro:
        "ブラウザー版のバスケットボールゲームとUnityプロトタイプ、RimRiseの2つの形を紹介します。独立したウェブやオリジナル音源の作品も掲載しています。",
      selectedNames: [
        "RimRise · Unity版",
        "RimRise · ブラウザー版",
        "オリジナル音源",
      ],
      selectedDescriptions: [
        "Unity 6.3で開発中のバスケットボールキャリアゲーム。まずは5対5の試合から。",
        "キャリア進行、3D都市、ストリートバスケを組み合わせたブラウザーゲーム。",
        "オリジナル作品を含む音声プロジェクト。",
      ],
      workflowLabel: "仕事の流れ",
      workflowTitle: ["ファイルから、", "次の一歩を明確に。"],
      workflowIntro:
        "優れた自動化は作業の流れを分かりやすくします。この例では、情報を次へ進める前に人が確認する文書ワークフローを示します。",
      workflowLink: "文書インテリジェンスを見る",
      workflowBoard: "ワークフロー例",
      workflowSteps: [
        ["文書を取り込む", "スキャンまたは電子ファイル"],
        ["OCR・抽出", "テキストを項目に整理"],
        ["検証", "読み取った内容を確認"],
        ["人による確認", "確認してから次へ進む"],
        ["構造化データ", "次のツールで利用可能"],
      ],
      workflowNote: "図はイメージ例です。製品機能は開発中です。",
      principlesLabel: "ソフトウェアへの考え方",
      principlesTitle: ["実際の仕事を", "中心に設計する。"],
      principlesIntro:
        "役立つツールは分かりやすく、仕事の進め方に合い、一歩ずつ信頼を築くものです。",
      principles: [
        [
          "プライバシーを意識した設計",
          "データの扱いを慎重にし、収集を抑え、導入方法を明確にします。",
        ],
        [
          "必要な場面で人が確認",
          "検証と人による監督を、信頼できる業務フローの一部として扱います。",
        ],
        [
          "モジュール化と連携のしやすさ",
          "既存の業務に少しずつ組み込める、分かりやすい小さなツールを目指します。",
        ],
        [
          "AIを活用した開発",
          "コーディングエージェントが調査や実装を支援し、公開前に創業者が変更を確認・テストします。",
        ],
      ],
      studioLabel: "Zevqioについて",
      studioTitle: ["独立したスタジオとして", "役立つものをつくる。"],
      studioIntro:
        "Zevqio は創業者主導で自己資金により進める、初期段階の独立ソフトウェアスタジオです。文書処理、自動化、業務効率化に役立つツールを検討しています。",
      studioDetail:
        "現在は、ブラウザー版とUnityプロトタイプを持つ独立バスケットボールゲーム「RimRise」や、小規模なウェブ・オリジナル音源プロジェクトにも取り組んでいます。進捗に合わせて実際の画面を紹介し、開発中の範囲を明確にします。",
      studioStatus: "創業者主導 · 自己資金 · 初期段階",
      studioLink: "Zevqioについて詳しく",
      contactLabel: "相談する",
      contactTitle: "役立つものを一緒につくりましょう。",
      contactIntro:
        "簡素化したい業務フローはありますか？取り組んでいることをお聞かせください。",
      mailSubject: "簡素化したい業務フロー",
    },
    about: {
      title: "概要",
      description:
        "実用的な業務ツールに取り組む、創業者主導の独立系ソフトウェアプロジェクト Zevqio について。",
      eyebrow: "小さな独立系スタジオ",
      headline: ["役立つものをつくる。", "細部まで丁寧に。"],
      intro:
        "Zevqio は創業者主導で自己資金により進める初期段階の独立ソフトウェアスタジオです。文書業務や業務フローのツールを検討するほか、独立したゲームやウェブのプロジェクトにも取り組んでいます。",
      storyLabel: "Zevqio が目指すこと",
      storyTitle: ["ソフトウェアで次の一歩を", "見えやすくする。"],
      storyLead:
        "ソフトウェアエンジニアリングと現代のAI技術を組み合わせ、実際の業務課題に対する信頼性と効率性を探っています。",
      story1:
        "現在は文書インテリジェンス、OCRとデータ抽出、PDF自動化、業務ワークフロー、開発者向けツールに関心を持っています。いずれも初期の検討段階です。プロダクトが進み、共有できる段階になったら明確にお知らせします。",
      story2:
        "Zevqio は自己資金で進める初期段階の取り組みです。実際の作業や明確なアイデアを起点に、対象を絞ったプロトタイプと反復を通じて形にします。各プロジェクトで現在できることと、開発中の範囲を説明します。",
      story3:
        "OCR Studio に加えて、ブラウザー版とUnityプロトタイプを持つバスケットボールゲーム「RimRise」にも取り組んでいます。2つのバージョンは開発段階が異なるため、それぞれのページで現状を説明します。",
      profile: "ZEVQIO / スタジオ概要",
      structure: "形態",
      structureValue: "独立した取り組み",
      stage: "段階",
      focus: "重点",
      focusValue: "実用的なソフトウェア",
      approach: "進め方",
      approachValue: "創業者主導 · 自己資金",
      cardFoot: "一つずつ、丁寧に役立つものをつくります。",
      principlesLabel: "開発の原則",
      principlesTitle: ["細部への", "取り組み方。"],
      principlesIntro:
        "優れたソフトウェアは、時間や状況、結果への信頼を大切にします。",
      ctaLabel: "お気軽にどうぞ",
      ctaTitle: "今、何に取り組んでいますか？",
      ctaButton: "Zevqioに連絡",
    },
    portfolio: {
      title: "プロジェクト",
      screenshotsLabel: "プロジェクト画面",
      screenshotsNote:
        "画面はローカルで動かしたRimRiseから撮影しました。どちらのバージョンも開発中のため、画面や機能は変更される場合があります。",
      overviewLabel: "プロジェクト概要",
      toolsLabel: "使用技術",
      sourceLink: "GitHubでプロジェクトを見る",
      ctaLabel: "アイデアをお聞かせください",
      ctaTitle: "次の一歩を一緒に明確にしませんか。",
      ctaButton: "Zevqioに連絡",
      pages: {
        "rimrise-unity": {
          name: "RimRise · Unity版",
          category: "バスケットボールゲーム · Unityプロトタイプ",
          summary:
            "RimRiseのUnity 6.3版です。プレイ可能なフルコート5対5とキャリア画面から開発を進めています。",
          stage: "Unityプロトタイプ · 開発中",
          heroAlt: "RimRiseのUnityプロトタイプで行われる5対5の試合。",
          heroBadge: "UNITY 6.3 · ローカルプロトタイプ",
          overviewTitle:
            "コートでのバスケットボールに焦点を当てたUnityプロトタイプ。",
          overview: [
            "RimRiseは、バスケットボールのキャリアと都市生活を組み合わせたゲームプロジェクトです。Unity版ではプレイ可能なコートから着手し、移動、パス、シュート、ディフェンス、AIの味方と対戦相手、ゲーム内スコアボードを備えたフルコート5対5を作っています。",
            "プロトタイプには選手データ、トレーニング、チーム、シーズンの進行状況を確認できるキャリアハブもあります。キャリアデータはローカルに保存されます。Unity版は現在シングルプレイヤーで、ブラウザー版にある都市、ソーシャル、オンライン機能はまだすべて移植されていません。",
          ],
          focusTitle: "現在のUnityビルドに含まれる内容",
          focus: [
            [
              "フルコート5対5",
              "移動、ボール操作、パス、シュート、ディフェンス、AI選手を含むプレイ可能な試合。",
            ],
            [
              "キャリア画面",
              "選手プロフィール、スキル、チーム情報、シーズンの進行を確認する画面。",
            ],
            [
              "段階的な移植",
              "Unity版は開発中のシングルプレイヤー版です。ブラウザーゲームのすべてのシステムはまだ含まれていません。",
            ],
          ],
          gallery: [
            ["キャリア管理画面", "選手概要、シーズン情報、育成メニュー。"],
            ["試合のポーズ画面", "試合中に表示されるポーズ画面と基本操作。"],
          ],
          stageNote:
            "開発中です。Unity版は現在ローカルのシングルプレイヤープロトタイプで、ブラウザー版と機能はまだ同等ではありません。",
        },
        "rimrise-web": {
          name: "RimRise · ブラウザー版",
          category: "ブラウザーゲーム · ウェブ開発",
          summary:
            "シーズンの成長、探索できる3D都市、ストリートバスケを組み合わせたブラウザーゲームです。",
          stage: "ブラウザーゲーム · 開発中",
          heroAlt:
            "選手とシーズン情報を表示するRimRiseのブラウザー版キャリア画面。",
          heroBadge: "ブラウザー版 · 実際の画面",
          overviewTitle: "ブラウザーで広がるバスケットボールの世界。",
          overview: [
            "ブラウザー版では選手のキャリアシミュレーションと、探索できる3D都市を組み合わせています。プレイヤーは複数のシーズンにわたって架空のキャリアを築き、スキルを伸ばし、チーム、トレーニング、コート外の生活について選択します。",
            "ブラウザー用のインターフェース、ゲームシミュレーション、マルチプレイヤーのルーム機能を一つの独立したウェブゲームにまとめています。都市、シーズン画面、バスケットボールの試合を含み、Unityプロトタイプとは別に開発しています。",
          ],
          focusTitle: "ブラウザーゲームの構成",
          focus: [
            [
              "キャリアとシーズン",
              "選手の成長、シーズン日程、キャリアの節目、シーズン間の選択。",
            ],
            [
              "3D都市とストリートプレイ",
              "台北、香港、東京をテーマにした探索可能な都市と、ストリートバスケのコート。",
            ],
            [
              "ブラウザーゲームの仕組み",
              "クライアントはJavaScriptとThree.jsで動作し、Node.jsとWebSocketがルームやリアルタイム機能を支えます。",
            ],
          ],
          gallery: [
            [
              "3D都市の探索",
              "ナビゲーションとプレイヤーを表示する都市モードの画面。",
            ],
            [
              "ストリートコートの試合",
              "ブラウザーゲーム内でプレイする5対5の試合。",
            ],
          ],
          stageNote:
            "開発中です。画面はローカルのブラウザー版から撮影しました。開発に伴い、オンラインでの提供状況やゲームシステムは変更される場合があります。",
        },
      },
    },
    productsPage: {
      title: "プロダクト",
      description:
        "OCR Studio、Vidoany、TokenSaver など、Zevqio の初期ソフトウェアプロジェクトをご覧ください。",
      eyebrow: "プロダクト一覧",
      headline: ["繰り返す仕事に", "役立つソフトウェア。"],
      intro:
        "実務に役立つ、目的を絞ったソフトウェアを検討しています。掲載中のプロジェクトはすべて開発中で、公開情報を整えている段階のものもあります。",
      note: "各領域について公開できる段階になったら、提供状況や具体的な機能をお知らせします。",
      ctaLabel: "活用したい場面はありますか？",
      ctaTitle: "取り組んでいる仕事をお聞かせください。",
      ctaButton: "お問い合わせ",
    },
    contact: {
      title: "お問い合わせ",
      description:
        "実用的なソフトウェア、文書処理、業務ワークフロー自動化について Zevqio にお問い合わせください。",
      eyebrow: "お問い合わせ",
      headline: ["仕事について", "お話ししませんか。"],
      intro:
        "繰り返し作業や文書の課題、あったら便利なツールについてお聞かせください。すべてのメッセージに目を通します。",
      email: "メール",
      cardTitle: "まずはメールで。",
      cardBody:
        "メールアプリから創業者へ直接連絡できます。ウェブサイトに問い合わせフォームや送信内容のデータベースはありません。",
      guidanceLabel: "書き始めのヒント",
      guidanceTitle: "何を書けばよいですか？",
      guidanceIntro:
        "作業内容と目指す結果を数行でお知らせいただければ十分です。",
      prompts: [
        "ワークフローのどこに時間がかかりますか？",
        "どの文書やツールを使っていますか？",
        "どのような次の一歩が理想ですか？",
      ],
      privacy:
        "初回のメールには、機密文書や機微な個人情報を含めないでください。",
    },
    privacy: {
      title: "プライバシー",
      description:
        "Zevqio のウェブサイトにおけるブラウザー設定、メールリンク、基本的なホスティングリクエストの扱いについて。",
      eyebrow: "分かりやすいプライバシー説明",
      headline: ["プライバシーについて", "簡潔に説明します。"],
      intro: "このウェブサイトが収集する情報と収集しない情報を説明します。",
      updated: "最終更新",
      date: "2026年10月8日",
      aside: "Zevqio の小規模な静的情報サイトです。",
      lead: "Zevqio はサイトをシンプルに保つことを目指しています。分析、広告トラッカー、問い合わせフォーム、アカウント機能はありません。",
      sections: [
        [
          "サイトに保存される情報",
          "ライトまたはダークテーマを選ぶと、次回もその設定を使えるようブラウザーのローカルストレージに保存できます。この設定はブラウザー内に留まり、Zevqio には送信されません。広告や分析用のCookieは設定しません。",
        ],
        [
          "ホスティングと技術的なリクエスト",
          "本サイトは GitHub Pages の静的ページとして公開する予定です。ブラウザーからページをリクエストすると、ホスティング事業者はサービスの提供と保護のため、利用規約や設定に応じて技術的なリクエスト情報を処理することがあります。Zevqio は独自の分析・訪問者追跡サービスを追加していません。",
        ],
        [
          "メール",
          "Zevqio のメールアドレスへのリンクを選ぶと、お使いのメールアプリが開きます。送信した情報は、送信者と Zevqio のメール事業者によって処理されます。このウェブサイトがメッセージを受信・保存することはありません。初回の連絡には機密文書や機微な個人情報を含めないでください。",
        ],
        [
          "外部リンク",
          "外部サイトへのリンクは、それぞれのプライバシー方針に従います。この説明は Zevqio のウェブサイトにのみ適用されます。",
        ],
        [
          "ご質問",
          "この説明についてのご質問は、創業者へメールでお送りください。",
        ],
      ],
      emailSubject: "プライバシーについての質問",
    },
    detail: {
      screenLabel: "インターフェースのコンセプト",
      closer: "詳しく見る：",
      screenDisclaimer:
        "オリジナルの画面プレビューではサンプル内容を使って体験の一例を示しています。実際に提供中の製品画面ではありません。",
      overviewLabel: "プロジェクト概要",
      aboutLabel: "この領域について",
      fallbackTitle: ["プロジェクトを", "詳しく見る。"],
      focusKicker: "現在の重点",
      focusTitle: "検討していること",
      inDevelopment: "開発中",
      workflowEyebrow: "想定ワークフロー",
      workflowTitle: ["スキャンから", "確認済みテキストへ。"],
      workflowIntro:
        "OCR Studio で検討している方向性です。以下はコンセプトを示しており、公開済みの機能一覧ではありません。",
      prioritiesEyebrow: "設計の優先事項",
      prioritiesTitle: "検討を形づくる選択。",
      prioritiesIntro:
        "初期段階では速度や精度を約束するより、読みやすさと人による確認を優先します。",
      ctaLabel: "一緒に取り組む",
      ctaTitle: "アイデアをお聞かせください。",
      ctaButton: "お問い合わせ",
      questionSubject: "プロジェクトについて",
    },
    products: {
      "ocr-studio": {
        name: "OCR Studio",
        category: "文書 · OCR",
        summary:
          "スキャンしたページを確認可能なテキストにするワークスペースのコンセプトです。原文と結果を並べて確認できます。",
        description:
          "OCR Studio は、スキャン文書を確認しやすくする体験を検討しています。原文ページと認識テキストを並べて、人が結果を確認できる設計を考えています。開発中のプロジェクトであり、画面はコンセプトプレビューです。公開サービスではありません。",
        focus: [
          "原文ページと認識テキストを比較しやすくする",
          "主な作業画面でテキスト確認を行えるようにする",
          "確認後の明確な次の手順を検討する",
        ],
        previews: [
          [
            "ワークスペース",
            "文書の追加や最近の作業を確認するためのシンプルな画面。",
          ],
          ["テキスト確認", "確認中のテキストの横に原文ページを表示。"],
          ["文書ライブラリ", "サンプル文書と確認状況を一覧で把握。"],
        ],
        story: {
          title: "スキャン文書には認識以上の工夫が必要です。",
          problem:
            "スキャンから文字を取り出すだけでは作業は終わりません。名前、数字、ページ構造が誤認識されることがあり、結果を使う前に原文との照合が必要になる場合があります。",
          approach:
            "OCR Studio では、原文ページと認識テキストを並べて表示するワークスペースを検討しています。製品の範囲を定める段階で、確認しやすく、利用者が判断を保てる体験を目指します。",
          workflow: [
            [
              "スキャンから始める",
              "スキャン文書をワークスペースに取り込みます。対応ファイル形式や取り込み方法は検討中です。",
            ],
            [
              "ページとテキストを照合する",
              "原文の横で認識テキストを確認し、文脈に沿って細部を確かめます。",
            ],
            [
              "結果を確認する",
              "テキストを修正して確認を完了する方法を検討します。出力や保存方法は未定です。",
            ],
          ],
          principles: [
            [
              "原文を近くに保つ",
              "文脈を失わずに、認識テキストとスキャンページを照合できるようにします。",
            ],
            [
              "確認しやすくする",
              "認識結果は人による確認が必要な場合があるため、チェックや修正も体験の一部として扱います。",
            ],
            [
              "次の手順を簡潔に",
              "初期コンセプトでは、後続の出力を決める前に、スキャンから確認済みテキストまでの流れを明確にします。",
            ],
          ],
          status:
            "これらの画面は架空のサンプル文書を使った静的なコンセプトです。OCRエンジン、対応形式、修正方法、出力、保存、公開時期は未定です。",
        },
      },
      "document-intelligence": {
        name: "文書インテリジェンス",
        category: "AI · 文書",
        summary:
          "業務文書から役立つ情報を抽出・検証する、分かりやすい方法を検討します。",
        description:
          "スキャン文書や電子ファイルから構造化情報を得るための文書処理フローを検討中です。この領域は開発中で、公開製品やサービスは提供していません。",
        focus: [
          "文書の取り込みと分類のコンセプト",
          "OCRと構造化データ抽出の方法",
          "検証と人による確認の要件",
        ],
      },
      "pdf-automation": {
        name: "PDF自動化",
        category: "文書 · ユーティリティ",
        summary: "業務用PDFの作成、処理、自動化に役立つツールを検討します。",
        description:
          "日常業務向けの信頼できるPDF生成・処理方法を検討しています。開発中で、範囲や提供時期は未定です。",
        focus: [
          "文書作成とテンプレートの要件",
          "繰り返し可能なPDF処理フロー",
          "業務成果物の品質確認",
        ],
      },
      "workflow-automation": {
        name: "業務ワークフロー自動化",
        category: "業務 · 自動化",
        summary:
          "繰り返し発生する業務手順を減らす、設定可能なソフトウェアフローを設計します。",
        description:
          "明確なステップと必要に応じた人の確認を備えた、反復業務の自動化を検討しています。開発中であり、具体的な連携機能や能力はまだ公開できる段階ではありません。",
        focus: [
          "繰り返し業務を明確な手順に整理",
          "設定可能な確認と引き継ぎポイント",
          "実際の業務に必要な連携要件",
        ],
      },
      vidoany: {
        name: "Vidoany",
        category: "Zevqio プロジェクト",
        summary:
          "Vidoany は初期段階のプロジェクトです。公開範囲を検討しています。",
        description:
          "Vidoany は Zevqio の初期プロジェクトの一つです。用途、対象者、機能を検討中です。公開できる情報が整い次第、このページを更新します。",
        focus: [
          "想定用途と対象者を定める",
          "プロジェクトの範囲と要件を確認する",
          "正確な公開情報を準備する",
        ],
      },
      tokensaver: {
        name: "TokenSaver",
        category: "Zevqio プロジェクト",
        summary:
          "TokenSaver は初期段階のプロジェクトです。公開範囲を検討しています。",
        description:
          "TokenSaver は Zevqio の初期プロジェクトの一つです。用途、対象者、機能を検討中です。公開できる情報が整い次第、このページを更新します。",
        focus: [
          "想定用途と対象者を定める",
          "プロジェクトの範囲と要件を確認する",
          "正確な公開情報を準備する",
        ],
      },
    },
  },
  ko: {
    nav: {
      products: "제품",
      solutions: "솔루션",
      projects: "프로젝트",
      about: "소개",
      contact: "문의",
      cta: "문의하기",
      language: "언어 선택",
      menu: "탐색 메뉴 열기",
      skip: "본문으로 건너뛰기",
    },
    footer: {
      tagline: "비즈니스를 앞으로 나아가게 하는 실용적인 소프트웨어.",
      explore: "둘러보기",
      connect: "연락하기",
      email: "창업자에게 이메일",
      privacy: "개인정보",
      copyright: "독립 소프트웨어 프로젝트입니다.",
      building: "정성껏 만드는 중",
    },
    common: {
      home: "홈",
      products: "제품",
      projects: "프로젝트",
      inDevelopment: "개발 중",
      learn: "프로젝트 살펴보기",
      screens: "화면 미리보기",
      concept: "콘셉트 미리보기",
      breadcrumb: "현재 위치",
      currentFocus: "현재 중점",
      whatExploring: "살펴보는 내용",
      possibleWorkflow: "가능한 작업 흐름",
      possibleStep: "가능한 단계",
      designPriorities: "디자인 우선순위",
      workWithUs: "함께하기",
      contactCta: "대화 시작하기",
      seeMore: "자세히 보기",
      emailUs: "창업자에게 이메일",
      projectOverview: "프로젝트 개요",
      areaOverview: "이 영역 소개",
      exampleOnly: "예시 전용",
      screen: "화면",
      fictional: "가상의 예시 콘텐츠",
    },
    home: {
      title: "실용적인 AI 및 업무 흐름 소프트웨어",
      description:
        "현대적인 비즈니스 업무 흐름을 위한 실용적인 소프트웨어와 지능형 자동화 도구입니다.",
      eyebrow: "독립 소프트웨어 스튜디오",
      headline: ["똑똑하게 만들고,", "더 빠르게 일하세요."],
      lead: "현대적인 비즈니스 업무 흐름을 위한 실용적인 소프트웨어와 지능형 자동화 도구입니다.",
      productsCta: "제품 둘러보기",
      contactCta: "문의하기",
      footnote: "실제 운영 업무를 위한 작고 유용한 소프트웨어.",
      capabilitiesLabel: "우리가 하는 일",
      capabilitiesTitle: ["반복 업무는 줄이고,", "생각할 여유는 늘리고."],
      capabilitiesIntro:
        "문서가 많고 반복이 잦은 현대 업무를 위한 소프트웨어를 집중적으로 탐색합니다.",
      productsLabel: "제품 분야",
      productsTitle: ["아이디어를", "유용한 도구로."],
      productsIntro:
        "신중하게 만들고 진행 상황을 솔직하게 공유합니다. 모든 제품 분야는 현재 개발 중입니다.",
      allProducts: "모든 제품 분야 보기",
      selectedLabel: "주요 프로젝트",
      selectedTitle: ["코드와", "사운드를 넘나들며."],
      selectedIntro:
        "브라우저 농구 게임과 Unity 프로토타입, RimRise의 두 가지 버전을 소개합니다. 독립 웹 및 오리지널 오디오 작업도 포함합니다.",
      selectedNames: [
        "RimRise · Unity 에디션",
        "RimRise · 브라우저 게임",
        "오리지널 오디오",
      ],
      selectedDescriptions: [
        "Unity 6.3 농구 커리어 프로토타입으로, 풀코트 5대5부터 구현하고 있습니다.",
        "커리어 성장, 3D 도시, 길거리 농구를 담은 브라우저 게임입니다.",
        "오리지널 작업을 담은 독립 오디오 프로젝트입니다.",
      ],
      workflowLabel: "업무의 흐름",
      workflowTitle: ["파일에서 시작해", "명확한 다음 단계로."],
      workflowIntro:
        "좋은 자동화는 업무 흐름을 이해하기 쉽게 만듭니다. 이 예시는 정보가 다음 단계로 넘어가기 전에 사람이 확인하는 문서 업무 흐름을 보여줍니다.",
      workflowLink: "문서 인텔리전스 보기",
      workflowBoard: "업무 흐름 예시",
      workflowSteps: [
        ["문서 입력", "스캔 또는 디지털 파일"],
        ["OCR 및 추출", "텍스트를 구조화된 항목으로"],
        ["검증", "인식된 내용 확인"],
        ["사람의 검토", "확인 후 진행"],
        ["구조화된 출력", "다음 도구에서 사용 가능"],
      ],
      workflowNote: "예시 다이어그램입니다. 제품 기능은 개발 중입니다.",
      principlesLabel: "소프트웨어에 대한 생각",
      principlesTitle: ["실제 업무를", "중심으로 만듭니다."],
      principlesIntro:
        "유용한 도구는 이해하기 쉽고, 일하는 방식에 맞으며, 한 걸음씩 신뢰를 쌓아야 합니다.",
      principles: [
        [
          "설계 단계부터 개인정보 보호",
          "데이터를 신중하게 다루고 수집을 줄이며 배포 방식을 명확히 합니다.",
        ],
        [
          "필요한 곳에 사람의 검토",
          "검증과 사람의 감독을 신뢰할 수 있는 업무 흐름의 일부로 봅니다.",
        ],
        [
          "모듈형 구조와 쉬운 연동",
          "기존 업무에 점차 적용할 수 있는 작고 이해하기 쉬운 도구를 지향합니다.",
        ],
        [
          "AI 지원 개발",
          "코딩 에이전트가 탐색과 구현을 돕고, 창업자가 공개 전에 변경 사항을 검토하고 테스트합니다.",
        ],
      ],
      studioLabel: "Zevqio 소개",
      studioTitle: ["독립 스튜디오로서", "유용한 것을 만듭니다."],
      studioIntro:
        "Zevqio는 창업자가 이끌고 자체 자금으로 운영하는 초기 단계의 독립 소프트웨어 스튜디오입니다. 문서 처리, 자동화, 비즈니스 생산성을 위한 도구를 탐색합니다.",
      studioDetail:
        "현재 작업에는 브라우저 버전과 Unity 프로토타입으로 나뉜 독립 농구 게임 RimRise, 소규모 웹 및 오리지널 오디오 프로젝트가 있습니다. 진행 과정에서 실제 화면을 공유하고 개발 중인 범위를 분명하게 알립니다.",
      studioStatus: "창업자 주도 · 자체 자금 · 초기 단계",
      studioLink: "Zevqio 자세히 보기",
      contactLabel: "대화 시작하기",
      contactTitle: "유용한 것을 함께 만들어 봐요.",
      contactIntro:
        "단순하게 만들고 싶은 업무 흐름이 있나요? 어떤 일을 하고 있는지 들려주세요.",
      mailSubject: "단순하게 만들고 싶은 업무 흐름",
    },
    about: {
      title: "소개",
      description:
        "유용한 비즈니스 도구에 집중하는 창업자 주도의 독립 소프트웨어 프로젝트 Zevqio를 소개합니다.",
      eyebrow: "작은 독립 스튜디오",
      headline: ["유용한 것을 만들고,", "세심하게 다듬습니다."],
      intro:
        "Zevqio는 창업자가 이끌고 자체 자금으로 운영하는 초기 단계의 독립 소프트웨어 스튜디오입니다. 문서 업무와 비즈니스 흐름을 위한 도구를 탐색하며 독립 게임 및 웹 프로젝트도 만듭니다.",
      storyLabel: "Zevqio가 존재하는 이유",
      storyTitle: ["소프트웨어는 다음 단계를", "더 쉽게 보여줘야 합니다."],
      storyLead:
        "소프트웨어 엔지니어링과 현대 AI 기술을 결합해 실제 운영 과제에 신뢰할 수 있고 효율적인 해결책을 탐색합니다.",
      story1:
        "현재 관심 분야는 문서 인텔리전스, OCR 및 데이터 추출, PDF 자동화, 비즈니스 업무 흐름, 개발자 도구입니다. 모두 초기 탐색 단계이며, 제품이 발전해 공유할 준비가 되면 명확히 알리겠습니다.",
      story2:
        "Zevqio는 자체 자금으로 운영하는 초기 단계 프로젝트입니다. 실제 업무나 명확한 아이디어에서 출발해 범위를 좁힌 프로토타입과 반복 작업으로 발전시킵니다. 각 프로젝트에서 현재 가능한 것과 개발 중인 부분을 설명합니다.",
      story3:
        "OCR Studio와 함께 브라우저 버전과 Unity 프로토타입을 갖춘 농구 게임 RimRise도 개발하고 있습니다. 두 버전의 진행 단계가 다르므로 각 프로젝트 페이지에서 현재 상태를 설명합니다.",
      profile: "ZEVQIO / 스튜디오 소개",
      structure: "형태",
      structureValue: "독립 프로젝트",
      stage: "단계",
      focus: "중점",
      focusValue: "실용적인 소프트웨어",
      approach: "방식",
      approachValue: "창업자 주도 · 자체 자금",
      cardFoot: "한 번에 한 단계씩, 정성껏 만듭니다.",
      principlesLabel: "작업 원칙",
      principlesTitle: ["세부 사항을", "다루는 방식."],
      principlesIntro:
        "좋은 소프트웨어는 사람들의 시간과 상황, 결과에 대한 신뢰를 존중합니다.",
      ctaLabel: "편하게 인사해 주세요",
      ctaTitle: "무엇을 만들고 계신가요?",
      ctaButton: "Zevqio에 문의",
    },
    portfolio: {
      title: "프로젝트",
      screenshotsLabel: "프로젝트 화면",
      screenshotsNote:
        "화면은 로컬에서 실행한 RimRise 빌드에서 캡처했습니다. 두 버전 모두 개발 중이므로 화면과 기능은 바뀔 수 있습니다.",
      overviewLabel: "프로젝트 개요",
      toolsLabel: "사용 기술",
      sourceLink: "GitHub에서 프로젝트 보기",
      ctaLabel: "프로젝트 아이디어가 있나요?",
      ctaTitle: "다음 단계를 함께 더 명확하게 만들어 봐요.",
      ctaButton: "Zevqio에 문의",
      pages: {
        "rimrise-unity": {
          name: "RimRise · Unity 에디션",
          category: "농구 게임 · Unity 프로토타입",
          summary:
            "플레이 가능한 풀코트 5대5 농구와 커리어 화면부터 시작하는 RimRise의 Unity 6.3 버전입니다.",
          stage: "Unity 프로토타입 · 개발 중",
          heroAlt: "RimRise Unity 프로토타입에서 진행 중인 5대5 농구 경기.",
          heroBadge: "UNITY 6.3 · 로컬 프로토타입",
          overviewTitle: "코트 위 농구에 집중한 Unity 프로토타입.",
          overview: [
            "RimRise는 농구 커리어와 도시 생활을 결합한 게임 프로젝트입니다. Unity 버전은 플레이 가능한 코트부터 시작합니다. 선수 이동, 패스, 슛, 수비, AI 팀원과 상대, 경기 점수판을 포함한 풀코트 5대5 게임입니다.",
            "프로토타입에는 선수 기록, 훈련, 팀, 시즌 진행 상황을 보는 커리어 허브도 있습니다. 커리어 데이터는 로컬에 저장됩니다. Unity 빌드는 현재 싱글 플레이어이며, 브라우저 버전의 도시·소셜·온라인 시스템은 아직 모두 옮기지 않았습니다.",
          ],
          focusTitle: "현재 Unity 빌드의 구성",
          focus: [
            [
              "풀코트 5대5",
              "이동, 볼 핸들링, 패스, 슛, 수비, AI 선수가 포함된 플레이 가능한 경기 흐름.",
            ],
            [
              "커리어 대시보드",
              "선수 프로필, 기술, 팀 정보, 시즌 진행 상황을 확인하는 허브.",
            ],
            [
              "단계별 포팅",
              "Unity 에디션은 개발 중인 싱글 플레이어 버전이며, 브라우저 게임의 모든 시스템을 아직 포함하지 않습니다.",
            ],
          ],
          gallery: [
            [
              "커리어 관리 화면",
              "선수 개요, 시즌 정보, 성장 메뉴를 보여줍니다.",
            ],
            [
              "경기 일시 정지 화면",
              "경기 중 일시 정지 메뉴와 기본 조작 안내입니다.",
            ],
          ],
          stageNote:
            "개발 중입니다. Unity 에디션은 현재 로컬 싱글 플레이어 프로토타입이며 브라우저 버전과 기능이 아직 동일하지 않습니다.",
        },
        "rimrise-web": {
          name: "RimRise · 브라우저 에디션",
          category: "브라우저 게임 · 웹 개발",
          summary:
            "시즌 성장, 탐험 가능한 3D 도시, 길거리 농구를 결합한 브라우저 농구 커리어 게임입니다.",
          stage: "브라우저 게임 · 개발 중",
          heroAlt:
            "선수와 시즌 정보를 보여주는 RimRise 브라우저 커리어 대시보드.",
          heroBadge: "브라우저 버전 · 실제 화면 캡처",
          overviewTitle: "브라우저에서 펼쳐지는 농구 세계.",
          overview: [
            "브라우저 버전은 선수 커리어 시뮬레이션과 탐험 가능한 3D 도시를 결합합니다. 플레이어는 여러 시즌에 걸쳐 가상의 커리어를 만들고 기술을 키우며 팀, 훈련, 코트 밖 생활에 관한 결정을 내립니다.",
            "브라우저 인터페이스, 게임 시뮬레이션, 멀티플레이어 룸 시스템을 하나의 독립 웹 게임으로 묶었습니다. 도시, 시즌 화면, 농구 경기가 포함되며 Unity 프로토타입과는 별도로 개발합니다.",
          ],
          focusTitle: "브라우저 게임을 이루는 요소",
          focus: [
            [
              "커리어와 시즌",
              "선수 성장, 시즌 일정, 커리어의 주요 순간, 시즌 사이의 선택.",
            ],
            [
              "3D 도시와 길거리 농구",
              "타이베이, 홍콩, 도쿄를 테마로 한 탐험형 도시와 길거리 코트.",
            ],
            [
              "브라우저 게임 시스템",
              "클라이언트는 JavaScript와 Three.js로 만들고 Node.js 및 WebSocket으로 룸과 실시간 기능을 지원합니다.",
            ],
          ],
          gallery: [
            ["3D 도시 탐험", "이동 안내와 플레이어를 보여주는 도시 모드 화면."],
            [
              "길거리 코트 경기",
              "브라우저 게임 안에서 진행되는 5대5 농구 경기.",
            ],
          ],
          stageNote:
            "개발 중입니다. 화면은 로컬 브라우저 빌드에서 캡처했으며, 개발이 진행되면서 온라인 제공 상태와 게임 시스템이 바뀔 수 있습니다.",
        },
      },
    },
    productsPage: {
      title: "제품",
      description:
        "OCR Studio, Vidoany, TokenSaver를 포함한 Zevqio의 초기 소프트웨어 프로젝트와 제품 분야를 살펴보세요.",
      eyebrow: "제품 포트폴리오",
      headline: ["반복되는 업무를 위한", "소프트웨어."],
      intro:
        "실제 업무에 필요한 집중형 소프트웨어 프로젝트를 탐색합니다. 목록의 모든 프로젝트는 개발 중이며, 공개 세부 정보가 정리 중인 항목도 있습니다.",
      note: "각 제품 분야를 공개적으로 논의할 준비가 되면 제공 여부와 구체적인 기능을 공유하겠습니다.",
      ctaLabel: "활용 사례가 있나요?",
      ctaTitle: "어떤 업무인지 알려주세요.",
      ctaButton: "문의하기",
    },
    contact: {
      title: "문의",
      description:
        "실용적인 소프트웨어, 문서 처리, 비즈니스 업무 흐름 자동화에 대해 Zevqio에 문의하세요.",
      eyebrow: "문의하기",
      headline: ["업무에 대해", "이야기해요."],
      intro:
        "반복되는 절차나 문서 문제, 있었으면 하는 유용한 도구를 알려주세요. 모든 메시지를 읽습니다.",
      email: "이메일",
      cardTitle: "이메일로 시작하세요.",
      cardBody:
        "이메일 앱으로 창업자에게 직접 연락할 수 있습니다. 웹사이트에는 문의 양식이나 제출 데이터베이스가 없습니다.",
      guidanceLabel: "유용한 시작점",
      guidanceTitle: "무엇을 적으면 좋을까요?",
      guidanceIntro: "업무와 원하는 결과를 몇 줄로 알려주시면 충분합니다.",
      prompts: [
        "업무 흐름의 어느 부분에 시간이 많이 드나요?",
        "어떤 문서나 도구를 사용하나요?",
        "더 나은 다음 단계는 어떤 모습인가요?",
      ],
      privacy:
        "처음 보내는 이메일에는 기밀 문서나 민감한 개인정보를 포함하지 마세요.",
    },
    privacy: {
      title: "개인정보 보호",
      description:
        "Zevqio 웹사이트에서 브라우저 설정, 이메일 링크, 기본 호스팅 요청을 처리하는 방식을 설명합니다.",
      eyebrow: "알기 쉬운 개인정보 안내",
      headline: ["개인정보 보호를", "간단히 설명합니다."],
      intro:
        "이 페이지에서는 웹사이트가 수집하는 정보와 수집하지 않는 정보를 설명합니다.",
      updated: "최종 업데이트",
      date: "2026년 10월 8일",
      aside: "Zevqio의 소규모 정적 정보 웹사이트입니다.",
      lead: "Zevqio는 웹사이트를 단순하게 유지합니다. 분석 도구, 광고 추적기, 문의 양식, 계정 시스템은 포함하지 않습니다.",
      sections: [
        [
          "사이트가 저장하는 정보",
          "밝은 테마나 어두운 테마를 선택하면 다음 방문에도 설정이 유지되도록 브라우저의 로컬 저장소에 저장할 수 있습니다. 이 설정은 브라우저에만 남으며 Zevqio로 전송되지 않습니다. 광고나 분석 쿠키는 설정하지 않습니다.",
        ],
        [
          "호스팅 및 기술 요청",
          "웹사이트는 GitHub Pages를 통해 정적 페이지로 제공할 예정입니다. 브라우저가 페이지를 요청할 때 호스팅 제공업체는 자체 약관과 설정에 따라 서비스 제공과 보호를 위해 기술 요청 정보를 처리할 수 있습니다. Zevqio는 별도의 분석 또는 방문자 추적 서비스를 추가하지 않았습니다.",
        ],
        [
          "이메일",
          "Zevqio 이메일 주소 링크를 누르면 본인의 이메일 앱이 열립니다. 메시지를 보내면 포함된 정보는 본인과 Zevqio의 이메일 제공업체에서 처리합니다. 이 웹사이트는 메시지를 받거나 저장하지 않습니다. 첫 문의에는 기밀 문서나 민감한 개인정보를 포함하지 마세요.",
        ],
        [
          "외부 링크",
          "다른 웹사이트 링크에는 해당 사이트의 개인정보 처리 방식이 적용됩니다. 이 안내는 Zevqio 웹사이트에만 적용됩니다.",
        ],
        ["문의", "이 안내에 관한 질문은 창업자에게 이메일로 보내 주세요."],
      ],
      emailSubject: "개인정보 관련 문의",
    },
    detail: {
      screenLabel: "인터페이스 콘셉트",
      closer: "자세히 보기:",
      screenDisclaimer:
        "이 화면 미리보기는 샘플 콘텐츠로 가능한 경험을 보여주는 자체 제작 콘셉트입니다. 실제 출시 제품 화면이 아닙니다.",
      overviewLabel: "프로젝트 개요",
      aboutLabel: "이 분야 소개",
      fallbackTitle: ["프로젝트를", "자세히 살펴보기."],
      focusKicker: "현재 중점",
      focusTitle: "살펴보는 내용",
      inDevelopment: "개발 중",
      workflowEyebrow: "가능한 업무 흐름",
      workflowTitle: ["스캔에서", "검토된 텍스트로."],
      workflowIntro:
        "OCR Studio에서 탐색 중인 방향입니다. 아래 단계는 콘셉트를 설명하며 출시된 기능 목록이 아닙니다.",
      prioritiesEyebrow: "디자인 우선순위",
      prioritiesTitle: "탐색을 이끄는 선택.",
      prioritiesIntro:
        "초기 방향은 속도나 정확도를 약속하기보다 가독성과 사람의 검토를 우선합니다.",
      ctaLabel: "함께하기",
      ctaTitle: "유용한 아이디어를 나눠 주세요.",
      ctaButton: "대화 시작하기",
      questionSubject: "프로젝트 문의",
    },
    products: {
      "ocr-studio": {
        name: "OCR Studio",
        category: "문서 · OCR",
        summary:
          "스캔 페이지를 검토 가능한 텍스트로 바꾸고 원본과 결과를 함께 확인하는 작업 공간 콘셉트입니다.",
        description:
          "OCR Studio는 스캔 문서를 먼저 검토하는 경험을 탐색합니다. 사람이 결과를 확인할 수 있도록 원본 페이지와 인식된 텍스트를 나란히 두는 방식을 살펴봅니다. 개발 중인 프로젝트이며 화면 미리보기는 콘셉트입니다. 공개 서비스가 아닙니다.",
        focus: [
          "원본 페이지와 인식된 텍스트를 쉽게 비교",
          "주요 작업 흐름에서 텍스트 검토를 유지",
          "검토 후 명확한 다음 단계를 탐색",
        ],
        previews: [
          [
            "작업 공간",
            "문서를 추가하고 최근 작업을 찾는 간결한 시작 화면입니다.",
          ],
          [
            "텍스트 검토",
            "검토 중인 텍스트 옆에 원본 페이지 예시를 표시합니다.",
          ],
          ["문서 라이브러리", "샘플 문서와 검토 상태를 한눈에 살펴봅니다."],
        ],
        story: {
          title: "스캔 페이지에는 인식 이상의 과정이 필요합니다.",
          problem:
            "스캔에서 텍스트를 얻는 것은 작업의 일부일 뿐입니다. 이름, 숫자, 페이지 구조가 잘못 인식될 수 있어 결과를 사용하기 전에 원본과 대조해야 할 수 있습니다.",
          approach:
            "OCR Studio는 원본 페이지와 인식된 텍스트를 나란히 두는 작업 공간을 탐색합니다. 제품 범위를 정하는 동안 검토를 이해하기 쉽게 만들고 사용자가 직접 판단할 수 있도록 하는 것이 목표입니다.",
          workflow: [
            [
              "스캔으로 시작",
              "스캔 문서를 작업 공간에 가져옵니다. 지원 파일 형식과 가져오기 규칙은 아직 검토 중입니다.",
            ],
            [
              "페이지와 텍스트 비교",
              "원본 페이지 옆에서 인식된 단어를 검토해 맥락에 맞게 세부 사항을 확인합니다.",
            ],
            [
              "결과 확인",
              "텍스트 수정과 검토 완료 방식을 살펴봅니다. 내보내기와 저장 방식은 정해지지 않았습니다.",
            ],
          ],
          principles: [
            [
              "원본을 가까이 두기",
              "맥락을 잃지 않고 인식 결과와 스캔 페이지를 쉽게 비교하도록 합니다.",
            ],
            [
              "검토를 명확하게",
              "인식 결과는 사람이 확인해야 할 수 있으므로 확인과 수정도 경험의 일부로 다룹니다.",
            ],
            [
              "다음 단계를 간결하게",
              "초기 콘셉트는 이후 출력 방식을 정하기 전에 스캔에서 검토된 텍스트까지의 명확한 흐름에 집중합니다.",
            ],
          ],
          status:
            "이 화면은 가상의 샘플 문서를 사용한 정적 콘셉트입니다. OCR 엔진, 지원 형식, 수정 방식, 내보내기 옵션, 저장, 출시 시기는 아직 정해지지 않았습니다.",
        },
      },
      "document-intelligence": {
        name: "문서 인텔리전스",
        category: "AI · 문서",
        summary:
          "비즈니스 문서에서 유용한 정보를 추출하고 확인하는 명확한 방법을 탐색합니다.",
        description:
          "스캔 또는 디지털 파일에서 구조화된 정보로 이어지는 문서 처리 흐름을 살펴보고 있습니다. 이 제품 분야는 개발 중이며 공개 제품이나 서비스를 제공하지 않습니다.",
        focus: [
          "문서 가져오기와 분류 콘셉트",
          "OCR 및 구조화 데이터 추출 방식",
          "검증과 사람의 검토 요건",
        ],
      },
      "pdf-automation": {
        name: "PDF 자동화",
        category: "문서 · 유틸리티",
        summary:
          "업무용 PDF를 만들고 처리하고 자동화하는 실용적인 도구를 검토합니다.",
        description:
          "일상 업무에 필요한 안정적인 PDF 생성 및 처리 방식을 탐색합니다. 개발 중이며 범위와 제공 시기는 정해지지 않았습니다.",
        focus: [
          "문서 생성 및 템플릿 요구사항",
          "반복 가능한 PDF 처리 흐름",
          "업무 결과물 품질 확인",
        ],
      },
      "workflow-automation": {
        name: "업무 흐름 자동화",
        category: "운영 · 자동화",
        summary:
          "반복적인 운영 단계를 줄이는 설정 가능한 소프트웨어 업무 흐름을 설계합니다.",
        description:
          "명확한 단계와 필요한 사람의 검토를 포함하는 반복 업무 자동화를 살펴보고 있습니다. 개발 중이며 구체적인 연동 및 기능은 아직 공개할 수 없습니다.",
        focus: [
          "반복 업무를 명확한 단계로 정리",
          "설정 가능한 검토 및 인계 지점",
          "실제 업무 흐름에 필요한 연동 요건",
        ],
      },
      vidoany: {
        name: "Vidoany",
        category: "Zevqio 프로젝트",
        summary:
          "Vidoany는 초기 단계의 Zevqio 프로젝트이며 공개 범위를 정리 중입니다.",
        description:
          "Vidoany는 Zevqio의 초기 프로젝트 포트폴리오에 포함됩니다. 용도, 대상, 기능을 정리하고 있으며 공개 정보가 준비되면 이 페이지를 업데이트하겠습니다.",
        focus: [
          "예상 용도와 대상 정의",
          "프로젝트 범위와 요구사항 확인",
          "정확한 공개 정보 준비",
        ],
      },
      tokensaver: {
        name: "TokenSaver",
        category: "Zevqio 프로젝트",
        summary:
          "TokenSaver는 초기 단계의 Zevqio 프로젝트이며 공개 범위를 정리 중입니다.",
        description:
          "TokenSaver는 Zevqio의 초기 프로젝트 포트폴리오에 포함됩니다. 용도, 대상, 기능을 정리하고 있으며 공개 정보가 준비되면 이 페이지를 업데이트하겠습니다.",
        focus: [
          "예상 용도와 대상 정의",
          "프로젝트 범위와 요구사항 확인",
          "정확한 공개 정보 준비",
        ],
      },
    },
  },
} as const;

export const getLocaleContent = (locale: Locale) =>
  locale === "en" ? english : translated[locale];

export const getLocaleFromPath = (pathname: string): Locale => {
  const match = withoutBase(pathname).match(/^\/(zh-cn|zh-hk|ja|ko)(?:\/|$)/i);
  return (match?.[1]?.toLowerCase() as Locale | undefined) ?? "en";
};

export const stripLocaleFromPath = (pathname: string): string => {
  const path = withoutBase(pathname).replace(
    /^\/(?:zh-cn|zh-hk|ja|ko)(?=\/|$)/i,
    "",
  );
  return path || "/";
};

export const localeHref = (locale: Locale, path: string): string => {
  const [pathname, ...hashParts] = path.split("#");
  const unprefixed = stripLocaleFromPath(withoutBase(pathname || "/"));
  const cleanPath = unprefixed.startsWith("/") ? unprefixed : `/${unprefixed}`;
  const localized =
    locale === "en"
      ? cleanPath
      : `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
  const hash = hashParts.length ? `#${hashParts.join("#")}` : "";
  return `${localized}${hash}`;
};

const capabilities = {
  en: [
    [
      "Document intelligence",
      "Explore ways to turn digital and scanned documents into clear, structured information.",
    ],
    [
      "OCR & data extraction",
      "Investigate text recognition and extraction workflows for everyday business documents.",
    ],
    [
      "PDF automation",
      "Design practical approaches to creating, processing, and organizing PDF documents.",
    ],
    [
      "Workflow automation",
      "Map repetitive operations into understandable steps with room for human review.",
    ],
    [
      "Developer tools",
      "Build toward useful integrations and developer-friendly ways to connect business tools.",
    ],
  ],
  "zh-cn": [
    ["文档智能", "探索将数字文档和扫描件转化为清晰结构化信息的方法。"],
    ["OCR 与数据提取", "研究适用于日常业务文档的文字识别与提取流程。"],
    ["PDF 自动化", "设计创建、处理和整理 PDF 文档的实用方案。"],
    ["工作流程自动化", "将重复运营流程梳理为易懂步骤，并保留人工审核空间。"],
    ["开发者工具", "探索实用集成方式，让业务工具更容易连接。"],
  ],
  "zh-hk": [
    ["文件智能", "探索把數碼文件和掃描檔轉化為清晰結構化資料的方法。"],
    ["OCR 與資料擷取", "研究適用於日常業務文件的文字辨識與擷取流程。"],
    ["PDF 自動化", "設計建立、處理和整理 PDF 文件的實用方案。"],
    ["工作流程自動化", "把重複營運流程整理成易明步驟，並保留人工審核空間。"],
    ["開發者工具", "探索實用整合方式，讓業務工具更容易連接。"],
  ],
  ja: [
    [
      "文書インテリジェンス",
      "電子文書やスキャン文書を明確な構造化情報にする方法を検討します。",
    ],
    [
      "OCR・データ抽出",
      "日常業務の文書を対象とした文字認識と抽出フローを検討します。",
    ],
    ["PDF自動化", "PDFの作成、処理、整理に役立つ方法を設計します。"],
    [
      "業務ワークフロー自動化",
      "繰り返し作業を人による確認を含む分かりやすい手順に整理します。",
    ],
    ["開発者向けツール", "業務ツールをつなぐ実用的な連携方法を検討します。"],
  ],
  ko: [
    [
      "문서 인텔리전스",
      "디지털 문서와 스캔 문서를 명확한 구조화 정보로 바꾸는 방법을 탐색합니다.",
    ],
    [
      "OCR 및 데이터 추출",
      "일상적인 비즈니스 문서를 위한 문자 인식과 추출 업무 흐름을 살펴봅니다.",
    ],
    [
      "PDF 자동화",
      "PDF 문서를 만들고 처리하고 정리하는 실용적인 방법을 설계합니다.",
    ],
    [
      "업무 흐름 자동화",
      "사람의 검토를 포함해 반복 운영 업무를 이해하기 쉬운 단계로 정리합니다.",
    ],
    ["개발자 도구", "비즈니스 도구를 연결하는 유용한 연동 방식을 탐색합니다."],
  ],
} as const;

export const getCapabilityTranslations = (locale: Locale) =>
  capabilities[locale];

export const getEarlyStageNote = (locale: Locale): string =>
  ({
    en: "Zevqio is an early-stage, independent software initiative. This page describes work in progress and does not represent a commercial product offer.",
    "zh-cn":
      "Zevqio 是一个处于早期阶段的独立软件项目。本页介绍的是进行中的探索，不构成商业产品或服务的提供。",
    "zh-hk":
      "Zevqio 是一個處於早期階段的獨立軟件項目。本頁介紹的是進行中的探索，並不構成商業產品或服務的提供。",
    ja: "Zevqio は初期段階の独立したソフトウェアプロジェクトです。このページは開発中の内容を紹介しており、商用製品の提供を示すものではありません。",
    ko: "Zevqio는 초기 단계의 독립 소프트웨어 프로젝트입니다. 이 페이지는 진행 중인 작업을 소개하며 상용 제품의 제공을 의미하지 않습니다.",
  })[locale];

export const getStudioLabels = (locale: Locale) =>
  ({
    en: {
      about: "About Zevqio",
      stage: "Early-stage",
      exploration: "ZEVQIO / EXPLORATION",
    },
    "zh-cn": {
      about: "关于 Zevqio",
      stage: "早期阶段",
      exploration: "ZEVQIO / 探索",
    },
    "zh-hk": {
      about: "關於 Zevqio",
      stage: "早期階段",
      exploration: "ZEVQIO / 探索",
    },
    ja: {
      about: "Zevqioについて",
      stage: "初期段階",
      exploration: "ZEVQIO / 検討中",
    },
    ko: {
      about: "Zevqio 소개",
      stage: "초기 단계",
      exploration: "ZEVQIO / 탐색 중",
    },
  })[locale];
