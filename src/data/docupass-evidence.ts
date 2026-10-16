import type { Locale } from "./locales";

const l = (
  en: string,
  hk: string,
  cn: string,
  ja: string,
  ko: string,
): Record<Locale, string> => ({
  en,
  "zh-hk": hk,
  "zh-cn": cn,
  ja,
  ko,
});

export const docuEvidence = {
  featured: l(
    "Featured project · DocuPass",
    "焦點項目 · DocuPass",
    "焦点项目 · DocuPass",
    "注目のプロジェクト · DocuPass",
    "주요 프로젝트 · DocuPass",
  ),
  headline: l(
    "From a scanned page to a result you can check.",
    "由掃描頁面，到可逐項覆核的結果。",
    "从扫描页面，到可逐项核对的结果。",
    "スキャンから確認できる結果へ。",
    "스캔한 문서에서 확인 가능한 결과로.",
  ),
  intro: l(
    "See the actual local app reviewing a synthetic receipt, the extracted fields, and the evidence behind them. DocuPass also includes handwriting and form modes, with measured limits shown below.",
    "查看本機程式如何覆核合成收據、抽取欄位及保留依據。DocuPass 亦有手寫及表格模式；下方列出實測限制。",
    "查看本地程序如何核对合成收据、提取字段并保留依据。DocuPass 也有手写和表格模式；下方列出实测限制。",
    "ローカルアプリで合成レシートを確認し、抽出した項目と根拠を見られます。手書き・フォームモードの測定結果と限界も掲載しています。",
    "로컬 앱에서 합성 영수증과 추출 필드 및 근거를 확인하세요. 필기·양식 모드의 측정 결과와 한계도 아래에 표시합니다.",
  ),
  receiptLabel: l(
    "Actual local OCR result · synthetic receipt",
    "本機 OCR 實際結果 · 合成收據",
    "本地 OCR 实际结果 · 合成收据",
    "ローカルOCRの実結果 · 合成レシート",
    "로컬 OCR 실제 결과 · 합성 영수증",
  ),
  inspect: l(
    "Explore the full DocuPass case study",
    "查看 DocuPass 完整項目",
    "查看 DocuPass 完整项目",
    "DocuPassの詳細を見る",
    "DocuPass 자세히 보기",
  ),
  handwriting: l(
    "Handwriting: what was measured",
    "手寫辨識：實際量度結果",
    "手写识别：实际测量结果",
    "手書き：測定した結果",
    "필기 인식: 측정 결과",
  ),
  handwritingIntro: l(
    "The source project tested 60 real hand-printed forms with 240 date, city, state and ZIP fields. These development results are not a guarantee for a new document or a production accuracy claim.",
    "原始項目以 60 份真實手寫印刷體表格、共 240 個日期、城市、州及郵編欄位測試。這是開發測試結果，不能保證新文件的準確度。",
    "原项目用 60 份真实手写印刷体表格、共 240 个日期、城市、州和邮编字段测试。这是开发测试结果，不保证新文件的准确率。",
    "元のプロジェクトは、実際の手書き活字体フォーム60枚、日付・都市・州・郵便番号の240項目を検証しました。開発時の結果であり、別の文書の精度を保証しません。",
    "원본 프로젝트는 실제 손글씨 정자체 양식 60장, 날짜·도시·주·우편번호 240개 필드를 시험했습니다. 개발 단계 결과이며 새 문서의 정확도를 보장하지 않습니다.",
  ),
  exact: l(
    "Fields exactly correct",
    "完全正確的欄位",
    "完全正确的字段",
    "完全一致した項目",
    "정확히 일치한 필드",
  ),
  balanced: l("Balanced", "平衡", "平衡", "Balanced", "Balanced"),
  accurate: l("Accurate", "準確", "准确", "Accurate", "Accurate"),
  fast: l("Fast", "快速", "快速", "Fast", "Fast"),
  method: l(
    "Line orientation detection off; values checked against the form labels. Balanced and Accurate were close, while Fast missed more handwriting.",
    "關閉逐行方向偵測，並對照表格標籤核對數值。平衡與準確模式結果接近，快速模式漏讀較多手寫內容。",
    "关闭逐行方向检测，并对照表格标签核对数值。平衡与准确模式结果接近，快速模式漏读更多手写内容。",
    "行方向検出をオフにし、フォームのラベルと照合。BalancedとAccurateは近い結果で、Fastは手書きの読み落としが多くなりました。",
    "행 방향 감지를 끄고 양식 라벨과 대조했습니다. Balanced와 Accurate는 비슷했고 Fast는 필기를 더 많이 놓쳤습니다.",
  ),
  limitation: l(
    "The 60 source forms are not stored on this website, so there is no handwriting before/after image here. The receipt above is printed text. Review every handwritten field against its source before export.",
    "本站沒有儲存這 60 份來源表格，因此沒有手寫前後對照圖。上方收據是印刷文字；匯出前應逐項對照原稿覆核手寫欄位。",
    "本站没有存储这 60 份来源表格，因此没有手写前后对照图。上方收据是印刷文字；导出前应逐项对照原稿核对手写字段。",
    "元の60枚のフォームはこのサイトに保存されていないため、手書きの前後比較画像はありません。上のレシートは印刷文字です。出力前に手書き項目を原本と照合してください。",
    "원본 양식 60장은 이 사이트에 저장되지 않아 필기 전후 비교 이미지는 없습니다. 위 영수증은 인쇄된 글자입니다. 내보내기 전에 모든 필기 필드를 원본과 대조하세요.",
  ),
  source: l(
    "Read the source test notes",
    "閱讀原始測試記錄",
    "阅读原始测试记录",
    "元のテスト記録を見る",
    "원본 테스트 기록 보기",
  ),
};
