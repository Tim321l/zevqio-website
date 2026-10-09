import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const locales = {
  "zh-cn": {
    "Sample workspace": "示例工作区",
    WORKSPACE: "工作区",
    Overview: "概览",
    Documents: "文档",
    Settings: "设置",
    "Concept preview": "概念预览",
    "Sample content": "示例内容",
    "Scanned document": "扫描文档",
    "DOCUMENT WORKSPACE": "文档工作区",
    "A clearer place to review documents.": "更清晰地审核文档。",
    "Start with a sample file, then keep the source and text in view.":
      "从示例文件开始，同时查看原文与识别文字。",
    "Add document": "添加文档",
    "Bring a document into the workspace": "将文档添加到工作区",
    "Choose a sample file to begin the review flow.":
      "选择示例文件，开始审核流程。",
    "Browse files": "浏览文件",
    "A SIMPLE REVIEW FLOW": "简单的审核流程",
    "From page to text": "从页面到文字",
    "Choose a source page": "选择原始页面",
    "Bring the scan into view.": "查看扫描页面。",
    "Review recognized text": "审核识别文字",
    "Compare it with the original.": "与原文进行对照。",
    "Continue with reviewed text": "继续使用审核后的文字",
    "Recent sample documents": "最近的示例文档",
    "EXAMPLE FILES · CONCEPT CONTENT": "示例文件 · 概念内容",
    DOCUMENT: "文档",
    TYPE: "类型",
    "REVIEW STATE": "审核状态",
    "Ready to review": "待审核",
    "In workspace": "工作区中",
    "Example interface preview · Sample files are fictional.":
      "界面示意 · 文件均为虚构样例。",
    "DOCUMENT LIBRARY": "文档库",
    "Your documents, at a glance.": "一览所有文档。",
    "Fictional sample files for this interface concept.":
      "此界面概念中的文件均为虚构样例。",
    "Find a sample document": "查找示例文档",
    "FILE NAME": "文件名",
    "DOCUMENT TYPE": "文档类型",
    PAGES: "页数",
    "Needs review": "需要审核",
    "Concept interface only · File names and states are sample content.":
      "仅为界面概念 · 文件名与状态均为示例。",
    "Sample document": "示例文档",
    "Finish review": "完成审核",
    "TEXT REVIEW": "文字审核",
    "Example preview · Page 01 of 03": "界面示意 · 第 1 页，共 3 页",
    "SOURCE PAGE · SAMPLE DOCUMENT": "原始页面 · 示例文档",
    "RECOGNIZED TEXT · SAMPLE OUTPUT": "识别文字 · 示例输出",
    "Review concept": "审核概念",
    "INVOICE HEADER": "发票标题",
    "DOCUMENT DETAILS": "文档详情",
    "Source and text stay together in this concept view.":
      "此概念界面将原文与识别文字并列显示。",
    "All text shown here is fictional sample content.":
      "此处所有文字均为虚构示例内容。",
    "Interface shown for illustration only.": "界面仅供示意。",
    "Invoice number": "发票号码",
    "Invoice date": "发票日期",
    "Bill to": "收件方",
    "Archival paper stock": "归档用纸",
    TOTAL: "合计",
    "Document title": "文档标题",
    "September 12": "9月12日",
    "Sample Studio": "样例工作室",
    Total: "总计",
    "All review states": "全部审核状态",
    "Fictional example": "虚构示例",
  },
  "zh-hk": {
    "Sample workspace": "示例工作區",
    WORKSPACE: "工作區",
    Overview: "概覽",
    Documents: "文件",
    Settings: "設定",
    "Concept preview": "概念預覽",
    "Sample content": "示例內容",
    "Scanned document": "掃描文件",
    "DOCUMENT WORKSPACE": "文件工作區",
    "A clearer place to review documents.": "更清晰地審核文件。",
    "Start with a sample file, then keep the source and text in view.":
      "從示例檔案開始，同時查看原文與辨識文字。",
    "Add document": "加入文件",
    "Bring a document into the workspace": "將文件加入工作區",
    "Choose a sample file to begin the review flow.":
      "選擇示例檔案，開始審核流程。",
    "Browse files": "瀏覽檔案",
    "A SIMPLE REVIEW FLOW": "簡單審核流程",
    "From page to text": "由頁面到文字",
    "Choose a source page": "選擇原始頁面",
    "Bring the scan into view.": "查看掃描頁面。",
    "Review recognized text": "審核辨識文字",
    "Compare it with the original.": "與原文進行對照。",
    "Continue with reviewed text": "繼續使用審核後的文字",
    "Recent sample documents": "最近的示例文件",
    "EXAMPLE FILES · CONCEPT CONTENT": "示例檔案 · 概念內容",
    DOCUMENT: "文件",
    TYPE: "類型",
    "REVIEW STATE": "審核狀態",
    "Ready to review": "待審核",
    "In workspace": "工作區中",
    "Example interface preview · Sample files are fictional.":
      "介面示意 · 檔案均為虛構示例。",
    "DOCUMENT LIBRARY": "文件庫",
    "Your documents, at a glance.": "一覽所有文件。",
    "Fictional sample files for this interface concept.":
      "此介面構想中的檔案均為虛構示例。",
    "Find a sample document": "尋找示例文件",
    "FILE NAME": "檔案名稱",
    "DOCUMENT TYPE": "文件類型",
    PAGES: "頁數",
    "Needs review": "需要審核",
    "Concept interface only · File names and states are sample content.":
      "僅供介面構想 · 檔名與狀態均為示例。",
    "Sample document": "示例文件",
    "Finish review": "完成審核",
    "TEXT REVIEW": "文字審核",
    "Example preview · Page 01 of 03": "介面示意 · 第 1 頁，共 3 頁",
    "SOURCE PAGE · SAMPLE DOCUMENT": "原始頁面 · 示例文件",
    "RECOGNIZED TEXT · SAMPLE OUTPUT": "辨識文字 · 示例輸出",
    "Review concept": "審核構想",
    "INVOICE HEADER": "發票標題",
    "DOCUMENT DETAILS": "文件詳情",
    "Source and text stay together in this concept view.":
      "此構想介面將原文與辨識文字並列顯示。",
    "All text shown here is fictional sample content.":
      "此處所有文字均為虛構示例內容。",
    "Interface shown for illustration only.": "介面僅供示意。",
    "Invoice number": "發票編號",
    "Invoice date": "發票日期",
    "Bill to": "收件方",
    "Archival paper stock": "典藏紙張",
    TOTAL: "合計",
    "Document title": "文件標題",
    "September 12": "9月12日",
    "Sample Studio": "示例工作室",
    Total: "總計",
    "All review states": "所有審核狀態",
    "Fictional example": "虛構示例",
  },
  ja: {
    "Sample workspace": "サンプルワークスペース",
    WORKSPACE: "ワークスペース",
    Overview: "概要",
    Documents: "文書",
    Settings: "設定",
    "Concept preview": "コンセプト",
    "Sample content": "サンプル内容",
    "Scanned document": "スキャン文書",
    "DOCUMENT WORKSPACE": "文書ワークスペース",
    "A clearer place to review documents.":
      "文書を分かりやすく確認できる場所。",
    "Start with a sample file, then keep the source and text in view.":
      "サンプルから始め、原文とテキストを並べて確認。",
    "Add document": "文書を追加",
    "Bring a document into the workspace": "文書をワークスペースに追加",
    "Choose a sample file to begin the review flow.":
      "サンプルを選んで確認を始めます。",
    "Browse files": "ファイルを見る",
    "A SIMPLE REVIEW FLOW": "シンプルな確認フロー",
    "From page to text": "ページからテキストへ",
    "Choose a source page": "原文ページを選ぶ",
    "Bring the scan into view.": "スキャンを表示します。",
    "Review recognized text": "認識テキストを確認",
    "Compare it with the original.": "原文と照合します。",
    "Continue with reviewed text": "確認済みテキストで続ける",
    "Recent sample documents": "最近のサンプル文書",
    "EXAMPLE FILES · CONCEPT CONTENT": "サンプルファイル · コンセプト",
    DOCUMENT: "文書",
    TYPE: "種類",
    "REVIEW STATE": "確認状況",
    "Ready to review": "確認待ち",
    "In workspace": "作業中",
    "Example interface preview · Sample files are fictional.":
      "画面例 · ファイルは架空のサンプルです。",
    "DOCUMENT LIBRARY": "文書ライブラリ",
    "Your documents, at a glance.": "文書を一覧で確認。",
    "Fictional sample files for this interface concept.":
      "画面コンセプト用の架空サンプルです。",
    "Find a sample document": "サンプル文書を検索",
    "FILE NAME": "ファイル名",
    "DOCUMENT TYPE": "文書の種類",
    PAGES: "ページ数",
    "Needs review": "確認が必要",
    "Concept interface only · File names and states are sample content.":
      "コンセプト画面のみ · 名称と状態はサンプルです。",
    "Sample document": "サンプル文書",
    "Finish review": "確認を完了",
    "TEXT REVIEW": "テキスト確認",
    "Example preview · Page 01 of 03": "画面例 · 全3ページの1ページ目",
    "SOURCE PAGE · SAMPLE DOCUMENT": "原文ページ · サンプル文書",
    "RECOGNIZED TEXT · SAMPLE OUTPUT": "認識テキスト · サンプル出力",
    "Review concept": "確認画面の案",
    "INVOICE HEADER": "請求書ヘッダー",
    "DOCUMENT DETAILS": "文書の詳細",
    "Source and text stay together in this concept view.":
      "この画面案では原文とテキストを並べて表示します。",
    "All text shown here is fictional sample content.":
      "表示内容はすべて架空のサンプルです。",
    "Interface shown for illustration only.": "画面は説明用のイメージです。",
    "Invoice number": "請求書番号",
    "Invoice date": "請求日",
    "Bill to": "請求先",
    "Archival paper stock": "保存用紙",
    TOTAL: "合計",
    "Document title": "文書名",
    "September 12": "9月12日",
    "Sample Studio": "サンプルスタジオ",
    Total: "合計",
    "All review states": "すべての確認状態",
    "Fictional example": "架空の例",
  },
  ko: {
    "Sample workspace": "샘플 작업 공간",
    WORKSPACE: "작업 공간",
    Overview: "개요",
    Documents: "문서",
    Settings: "설정",
    "Concept preview": "콘셉트 미리보기",
    "Sample content": "샘플 내용",
    "Scanned document": "스캔 문서",
    "DOCUMENT WORKSPACE": "문서 작업 공간",
    "A clearer place to review documents.": "문서를 더 명확하게 검토하는 공간.",
    "Start with a sample file, then keep the source and text in view.":
      "샘플 파일로 시작해 원본과 텍스트를 함께 확인하세요.",
    "Add document": "문서 추가",
    "Bring a document into the workspace": "작업 공간에 문서를 추가하세요",
    "Choose a sample file to begin the review flow.":
      "샘플 파일을 선택해 검토를 시작하세요.",
    "Browse files": "파일 찾아보기",
    "A SIMPLE REVIEW FLOW": "간단한 검토 흐름",
    "From page to text": "페이지에서 텍스트로",
    "Choose a source page": "원본 페이지 선택",
    "Bring the scan into view.": "스캔 이미지를 표시합니다.",
    "Review recognized text": "인식된 텍스트 검토",
    "Compare it with the original.": "원본과 비교합니다.",
    "Continue with reviewed text": "검토한 텍스트로 계속",
    "Recent sample documents": "최근 샘플 문서",
    "EXAMPLE FILES · CONCEPT CONTENT": "예시 파일 · 콘셉트 콘텐츠",
    DOCUMENT: "문서",
    TYPE: "유형",
    "REVIEW STATE": "검토 상태",
    "Ready to review": "검토 대기",
    "In workspace": "작업 중",
    "Example interface preview · Sample files are fictional.":
      "화면 예시 · 파일은 가상의 샘플입니다.",
    "DOCUMENT LIBRARY": "문서 라이브러리",
    "Your documents, at a glance.": "문서를 한눈에 확인하세요.",
    "Fictional sample files for this interface concept.":
      "이 화면 콘셉트를 위한 가상의 샘플 파일입니다.",
    "Find a sample document": "샘플 문서 검색",
    "FILE NAME": "파일 이름",
    "DOCUMENT TYPE": "문서 유형",
    PAGES: "페이지",
    "Needs review": "검토 필요",
    "Concept interface only · File names and states are sample content.":
      "콘셉트 화면 전용 · 이름과 상태는 샘플입니다.",
    "Sample document": "샘플 문서",
    "Finish review": "검토 완료",
    "TEXT REVIEW": "텍스트 검토",
    "Example preview · Page 01 of 03": "화면 예시 · 총 3페이지 중 1페이지",
    "SOURCE PAGE · SAMPLE DOCUMENT": "원본 페이지 · 샘플 문서",
    "RECOGNIZED TEXT · SAMPLE OUTPUT": "인식 텍스트 · 샘플 출력",
    "Review concept": "검토 화면 콘셉트",
    "INVOICE HEADER": "송장 머리글",
    "DOCUMENT DETAILS": "문서 세부 정보",
    "Source and text stay together in this concept view.":
      "이 콘셉트 화면에서는 원본과 텍스트를 나란히 보여줍니다.",
    "All text shown here is fictional sample content.":
      "표시된 내용은 모두 가상의 샘플입니다.",
    "Interface shown for illustration only.":
      "화면은 이해를 돕기 위한 예시입니다.",
    "Invoice number": "송장 번호",
    "Invoice date": "송장 날짜",
    "Bill to": "청구 대상",
    "Archival paper stock": "보관용 용지",
    TOTAL: "합계",
    "Document title": "문서 제목",
    "September 12": "9월 12일",
    "Sample Studio": "샘플 스튜디오",
    Total: "합계",
    "All review states": "모든 검토 상태",
    "Fictional example": "가상 예시",
  },
};

const sourceDir = join(process.cwd(), "public", "images");
const outputDir = sourceDir;
const previews = ["workspace", "review", "library"];

for (const [locale, dictionary] of Object.entries(locales)) {
  for (const preview of previews) {
    const sourceName = `ocr-studio-${preview}.svg`;
    const source = await readFile(join(sourceDir, sourceName), "utf8");
    let localized = source;

    for (const [english, translation] of Object.entries(dictionary)) {
      const escaped = english.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      localized = localized.replace(
        new RegExp(`(>\\s*)${escaped}(\\s*<)`, "g"),
        (_match, before, after) => `${before}${translation}${after}`,
      );
    }

    const outputName = `ocr-studio-${locale}-${preview}.svg`;
    await writeFile(join(outputDir, outputName), localized);
  }
}

console.log(
  `Generated ${Object.keys(locales).length * previews.length} localized OCR Studio previews.`,
);
