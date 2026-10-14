import content from "./local-tool-content.json";
import { docupassCopy } from "./docupass-content";
import type { Product, ProductStory } from "./products";
import type { Locale } from "./locales";

type ToolSlug = "monitor" | "tokensaver";
const labels = {
  en: [
    "Real app captures",
    "Current implementation",
    "Details from the local source files.",
    "Design choices",
    "How the current app behaves.",
    "Open full-size image",
  ],
  "zh-hk": [
    "實際程式截圖",
    "目前實作",
    "根據本機原始碼整理的功能及限制。",
    "設計取向",
    "目前程式的實際行為。",
    "查看原尺寸截圖",
  ],
  "zh-cn": [
    "实际程序截图",
    "当前实现",
    "根据本机源代码整理的功能及限制。",
    "设计方向",
    "当前程序的实际行为。",
    "查看原尺寸截图",
  ],
  ja: [
    "実際のアプリ画面",
    "現在の実装",
    "ローカルのソースに基づく機能と制限。",
    "設計の選択",
    "現在のアプリの動作。",
    "原寸の画像を見る",
  ],
  ko: [
    "실제 앱 화면",
    "현재 구현",
    "로컬 소스를 바탕으로 정리한 기능과 제한입니다.",
    "설계 방향",
    "현재 앱의 실제 동작입니다.",
    "원본 크기 이미지 보기",
  ],
} as const;
const images = {
  monitor: ["monitor-dashboard.jpg"],
  tokensaver: [
    "tokensaver-workspace.jpg",
    "tokensaver-planning.jpg",
    "tokensaver-prompt.jpg",
    "tokensaver-versions.jpg",
  ],
  docupass: [
    "docupass-workflow.svg",
    "docupass-hardware.svg",
    "docupass-phone.svg",
  ],
};

export function getLocalToolCopy(locale: Locale, slug: string, name: string) {
  if (slug === "docupass") {
    const text = docupassCopy[locale];
    return {
      ...text,
      previewBadge: `${text.name.toUpperCase()} · SOURCE-BASED DIAGRAMS`,
      screenshotsLabel: text.screenshotsLabel,
      specificationsLabel: text.specificationsLabel,
      specificationsTitle: text.specificationsTitle,
      specificationsIntro: text.specificationsIntro,
      story: {
        title: text.title,
        problem: text.problem,
        approach: text.approach,
        workflowTitle: text.workflowTitle,
        workflowIntro: text.workflowIntro,
        workflow: text.workflow,
        principlesTitle: text.principlesTitle,
        principlesIntro: text.principlesIntro,
        principles: text.principles,
        status: text.status,
      },
      interfacePreviews: text.previews.map(([title, description], index) => ({
        title,
        description,
        alt: `${title}: ${description}`,
        image: `/images/projects/${images.docupass[index]}`,
        width: 1440,
        height: 900,
      })),
    };
  }
  if (slug !== "monitor" && slug !== "tokensaver") return undefined;
  const text = content[locale][slug];
  const ui = labels[locale];
  return {
    ...text,
    name,
    previewBadge: `${name.toUpperCase()} · ${ui[0]}`,
    screenshotsLabel: ui[0],
    specificationsLabel: ui[1],
    specificationsTitle: ui[1],
    specificationsIntro: ui[2],
    story: {
      title: text.title,
      problem: text.problem,
      approach: text.approach,
      workflowTitle: text.workflowTitle,
      workflowIntro: text.description,
      workflow: text.workflow,
      principlesTitle: ui[3],
      principlesIntro: ui[4],
      principles: text.principles,
      status: text.status,
    },
  };
}

export function buildLocalTool(
  slug: ToolSlug,
): Omit<Product, "slug" | "name" | "shortName" | "stage" | "icon" | "accent"> {
  const text = content.en[slug];
  const ui = labels.en;
  const pairs = (items: string[][]) =>
    items.map(([title, description]) => ({ title, description }));
  const story: ProductStory = {
    overviewTitle: text.title,
    problem: text.problem,
    approach: text.approach,
    workflowTitle: text.workflowTitle as [string, string],
    workflowIntro: text.description,
    workflow: pairs(text.workflow),
    principlesTitle: ui[3],
    principlesIntro: ui[4],
    principles: pairs(text.principles),
    statusNote: text.status,
  };
  return {
    category: text.category,
    summary: text.summary,
    description: text.description,
    focus: text.focus,
    screenshotsLabel: ui[0],
    screenshotsNote: text.screenshotsNote,
    previewBadge: ui[0],
    specificationsLabel: ui[1],
    specificationsTitle: ui[1],
    specificationsIntro: ui[2],
    specifications: text.specifications.map(([label, value]) => ({
      label,
      value,
    })),
    story,
    interfacePreviews: text.previews.map(([title, description], index) => ({
      title,
      description,
      alt: `${title}: ${description}`,
      image: `/images/projects/${images[slug][index]}`,
      width: slug === "monitor" ? 352 : 1905,
      height: slug === "monitor" ? 832 : 938,
    })),
  };
}

export const fullImageLabel = (locale: Locale) => labels[locale][5];
