import type { Locale } from "./locales";

export type DocuPassCopy = {
  name: string;
  category: string;
  summary: string;
  description: string;
  focus: string[];
  previews: [string, string][];
  screenshotsLabel: string;
  screenshotsNote: string;
  specificationsLabel: string;
  specificationsTitle: string;
  specificationsIntro: string;
  specifications: [string, string][];
  title: string;
  problem: string;
  approach: string;
  workflowTitle: [string, string];
  workflowIntro: string;
  workflow: [string, string][];
  principlesTitle: string;
  principlesIntro: string;
  principles: [string, string][];
  status: string;
};

export const docupassCopy: Record<Locale, DocuPassCopy> = {
  en: {
    name: "DocuPass",
    category: "Desktop OCR · Hong Kong business documents",
    summary:
      "A local document app for turning Hong Kong receipts, invoices, cheques and forms into reviewed, exportable records.",
    description:
      "DocuPass (formerly PaddleOCR Studio) is a Windows and macOS desktop app with an iPhone and Android companion. It reads scans on the user's computer, checks extracted fields, and keeps a person in control of corrections and exports.",
    focus: [
      "Reads receipts, invoices, cheques, business cards, sick-leave certificates and e-payment records.",
      "Detects CPU and NVIDIA GPU support, checks the installed OCR runtime, and recommends a safe worker count.",
      "Choose Fast, Balanced or Accurate models; select PDF pages, folders and six OCR languages.",
      "Review extracted fields beside the source page; uncertain values and conflicting totals are flagged.",
      "Export Excel, CSV or JSON, with accounting imports, vCards, searchable history and a watched folder.",
    ],
    previews: [
      [
        "The real DocuPass desktop screen",
        "A live capture from the running macOS app: the New job workspace, document-type controls and local CPU processing status.",
      ],
      [
        "CPU and NVIDIA GPU setup",
        "Shows where hardware checks affect the OCR runtime. NVIDIA GPU use requires a compatible driver and installed GPU build; macOS uses CPU.",
      ],
      [
        "Phone and desktop companion",
        "The Flutter app pairs with the desktop over a local network. The desktop performs final OCR and returns results to the phone.",
      ],
    ],
    screenshotsLabel: "Real app screen and product flow",
    screenshotsNote:
      "The first image is a live capture of the working DocuPass app on macOS. The hardware and phone panels are diagrams based on the local source code.",
    specificationsLabel: "TECHNICAL OVERVIEW",
    specificationsTitle: "What the current source supports",
    specificationsIntro:
      "Verified from the local project README, desktop code, and Flutter companion source.",
    specifications: [
      ["Desktop", "Windows and macOS · Python · CustomTkinter"],
      ["Phone companion", "Flutter app for iOS and Android; paired transfer over a local network"],
      ["OCR engine", "PaddleOCR PP-OCRv6 · CPU or supported NVIDIA GPU runtime"],
      ["GPU boundary", "GPU mode requires NVIDIA, compatible driver/runtime and at least 2 GB free VRAM; macOS is CPU-only. Real NVIDIA hardware is not yet verified."],
      ["Inputs and languages", "Images, HEIC/HEIF, TIFF and PDF page ranges · Chinese, English, Japanese, Korean, French and German"],
      ["Document fields", "Merchant, dates, totals, cheque values, receipt line items, contact details and document-specific fields"],
      ["Review and checks", "Editable source-linked fields, confidence review, duplicate warnings and arithmetic cross-checks"],
      ["Exports", "Excel, CSV and JSON; Xero / QuickBooks bill imports and business-card vCards"],
      ["Privacy", "OCR runs locally. Optional AI field filling is off by default and receives extracted text, not document images."],
    ],
    title: "Make document batches easier to check.",
    problem:
      "Business records arrive as scans, photos, PDFs and payment confirmations. Re-entering every value by hand takes time, while unreviewed OCR can carry mistakes into accounts.",
    approach:
      "DocuPass batches local OCR, identifies common Hong Kong document types, extracts structured fields, and shows each result beside its source for a human check. Hardware checks and per-file progress make larger runs easier to plan.",
    workflowTitle: ["From a scan", "to a checked export."],
    workflowIntro:
      "These diagrams explain the desktop flow and companion-phone handoff. The showcase above includes a live capture from the working desktop app.",
    workflow: [
      ["Choose files and pages", "Add images, PDFs or folders; select the PDF pages and document mode to process."],
      ["Check hardware and model", "Select language and model tier. The app checks CPU, memory and supported NVIDIA runtime before recommending parallel workers."],
      ["Run local OCR", "Process files in parallel with live progress and an estimate; failed files are reported without stopping the rest of the batch."],
      ["Review the fields", "Compare values with the original page, correct uncertain results, and inspect duplicates or arithmetic checks."],
      ["Export the records", "Save JSON, CSV or Excel, including document-specific sheets and accounting-ready outputs."],
    ],
    principlesTitle: "Keep the source and the decision together.",
    principlesIntro:
      "DocuPass is built around reviewable results and clear device boundaries.",
    principles: [
      ["Local by default", "Document OCR runs on the desktop. The phone sends scans over the paired local network; it does not send them to a hosted OCR service."],
      ["Show the evidence", "Review keeps extracted values beside the original page and marks uncertain or conflicting values for a person."],
      ["Be clear about GPU support", "The setup logic includes compatible NVIDIA GPU runtimes. macOS uses CPU, and the source says real NVIDIA hardware still needs verification."],
    ],
    status:
      "A working local project in development. The source documents macOS CPU verification; the NVIDIA GPU path has not yet been verified on real NVIDIA hardware. This website does not host OCR jobs.",
  },
  "zh-hk": {
    name: "單據通 DocuPass",
    category: "桌面 OCR · 香港商業單據",
    summary:
      "在本機處理香港收據、發票、支票及表格，覆核辨識欄位後再匯出記錄。",
    description:
      "DocuPass（前稱 PaddleOCR Studio）是 Windows、macOS 桌面程式，並配有 iPhone 及 Android 伴侶 App。OCR 在電腦本機執行，欄位可逐一覆核、更正及匯出。",
    focus: [
      "辨識收據、發票、支票、名片、病假紙及電子付款記錄。",
      "檢查 CPU 與 NVIDIA GPU 支援狀態、OCR 執行環境，並建議安全的並行數量。",
      "選用快速、平衡或精準模型；指定 PDF 頁面、資料夾及六種 OCR 語言。",
      "在原始頁面旁覆核抽取欄位；不確定值及金額衝突會標示出來。",
      "匯出 Excel、CSV 或 JSON，亦支援會計匯入、vCard、搜尋歷史及監察資料夾。",
    ],
    previews: [
      ["DocuPass 桌面程式實際畫面", "macOS 上運行中的真實截圖：顯示新工作頁面、文件類型選項及本機 CPU 處理狀態。"],
      ["CPU 與 NVIDIA GPU 設定", "展示硬件檢查如何影響 OCR 執行環境。GPU 需要相容 NVIDIA 驅動及 GPU 版本；macOS 使用 CPU。"],
      ["手機與桌面伴侶 App", "Flutter 手機 App 透過本地網絡配對桌面程式；最終 OCR 由桌面執行，再把結果傳回手機。"],
    ],
    screenshotsLabel: "實際程式畫面與流程",
    screenshotsNote:
      "第一張是 macOS 上實際運行的 DocuPass 程式截圖；硬件及手機部分則是根據本機原始碼繪製的流程圖。",
    specificationsLabel: "技術概覽",
    specificationsTitle: "目前原始碼支援的內容",
    specificationsIntro: "根據本機專案 README、桌面程式及 Flutter 伴侶 App 原始碼核實。",
    specifications: [
      ["桌面版", "Windows 及 macOS · Python · CustomTkinter"],
      ["手機伴侶 App", "Flutter · iOS 及 Android；透過本地網絡配對傳送"],
      ["OCR 引擎", "PaddleOCR PP-OCRv6 · CPU 或受支援的 NVIDIA GPU 環境"],
      ["GPU 條件", "需 NVIDIA、相容驅動與執行環境，以及至少 2 GB 可用 VRAM；macOS 只用 CPU。尚未以實體 NVIDIA 顯示卡驗證。"],
      ["檔案與語言", "圖片、HEIC/HEIF、TIFF、指定 PDF 頁面 · 中文、英文、日文、韓文、法文及德文"],
      ["抽取欄位", "商戶、日期、總額、支票金額、收據項目、聯絡資料及文件專用欄位"],
      ["覆核與核對", "連結原始頁面的可編輯欄位、信心度覆核、重複提示及算術核對"],
      ["匯出", "Excel、CSV、JSON；Xero／QuickBooks 帳單匯入及名片 vCard"],
      ["私隱", "OCR 在本機執行。可選 AI 欄位填寫預設關閉，只會接收抽出的文字，不會接收文件圖片。"],
    ],
    title: "令大量單據更容易覆核。",
    problem:
      "商業記錄來自掃描檔、相片、PDF 及付款確認畫面。逐項手動輸入需時，而未經覆核的 OCR 亦可能把錯誤帶進帳目。",
    approach:
      "DocuPass 在本機批次執行 OCR，識別常見香港文件類別並抽取欄位，再把結果與原頁並列，方便人手確認。硬件檢查及逐檔進度亦有助安排大型批次。",
    workflowTitle: ["由一張掃描", "到已核對的匯出檔。"],
    workflowIntro:
      "流程圖說明桌面處理流程及手機伴侶傳送方式；上方的展示區亦包括實際運行中的桌面程式截圖。",
    workflow: [
      ["選擇檔案及頁面", "加入圖片、PDF 或資料夾，選擇要處理的 PDF 頁面和文件模式。"],
      ["檢查硬件及模型", "選擇語言和模型；程式會檢查 CPU、記憶體及相容 NVIDIA 環境，再建議並行數量。"],
      ["本機執行 OCR", "以多程序處理並顯示進度與估算；個別檔案失敗時會回報錯誤，不會令整批停止。"],
      ["覆核欄位", "對照原始頁面、更正不確定結果，並查看重複提示及金額核對。"],
      ["匯出記錄", "儲存 JSON、CSV 或 Excel，包括文件專用工作表及會計用途格式。"],
    ],
    principlesTitle: "保留來源，方便人手判斷。",
    principlesIntro: "DocuPass 著重可覆核的結果及清楚的裝置界線。",
    principles: [
      ["預設本機處理", "文件 OCR 在桌面電腦執行。手機透過已配對的本地網絡傳送掃描，不會送到雲端 OCR 服務。"],
      ["保留辨識依據", "覆核畫面會把抽取值與原始頁並列，並標示不確定或互相衝突的欄位。"],
      ["清楚交代 GPU 條件", "設定支援相容 NVIDIA GPU 執行環境；macOS 使用 CPU，原始碼亦說明實體 NVIDIA 硬件仍待驗證。"],
    ],
    status:
      "本機程式開發中。原始碼記錄了 macOS CPU 驗證；NVIDIA GPU 路徑尚未以實體 NVIDIA 電腦驗證。本站不會託管 OCR 工作。",
  },
  "zh-cn": {
    name: "单据通 DocuPass",
    category: "桌面 OCR · 香港商业单据",
    summary: "在本机处理香港收据、发票、支票和表格，复核识别字段后再导出记录。",
    description:
      "DocuPass（原名 PaddleOCR Studio）是 Windows 和 macOS 桌面程序，并配有 iPhone 与 Android 伴侣 App。OCR 在电脑本机运行，字段可逐项复核、更正和导出。",
    focus: [
      "识别收据、发票、支票、名片、病假证明和电子付款记录。",
      "检查 CPU 与 NVIDIA GPU 支持、OCR 运行环境，并推荐安全的并行数量。",
      "选择快速、平衡或精准模型；指定 PDF 页面、文件夹和六种 OCR 语言。",
      "在原始页面旁复核抽取字段；不确定值和金额冲突会被标记。",
      "导出 Excel、CSV 或 JSON，并支持会计导入、vCard、可搜索历史和监控文件夹。",
    ],
    previews: [
      ["DocuPass 桌面程序实机画面", "macOS 上运行中的真实截图：显示新建任务界面、文档类型选项和本机 CPU 处理状态。"],
      ["CPU 与 NVIDIA GPU 设置", "展示硬件检查如何影响 OCR 运行环境。GPU 需要兼容 NVIDIA 驱动和 GPU 版本；macOS 使用 CPU。"],
      ["手机和桌面伴侣 App", "Flutter 手机 App 通过本地网络配对桌面程序；最终 OCR 由桌面执行，再把结果传回手机。"],
    ],
    screenshotsLabel: "真实应用界面与处理流程",
    screenshotsNote: "第一张是 DocuPass 在 macOS 上运行时的实机截图；硬件和手机部分是根据本机源代码绘制的流程图。",
    specificationsLabel: "技术概览",
    specificationsTitle: "当前源代码支持的内容",
    specificationsIntro: "根据本机项目 README、桌面程序和 Flutter 伴侣 App 源代码核实。",
    specifications: [
      ["桌面版", "Windows 与 macOS · Python · CustomTkinter"],
      ["手机伴侣 App", "Flutter · iOS 与 Android；通过本地网络配对传输"],
      ["OCR 引擎", "PaddleOCR PP-OCRv6 · CPU 或受支持的 NVIDIA GPU 环境"],
      ["GPU 条件", "需要 NVIDIA、兼容驱动和运行环境，以及至少 2 GB 可用 VRAM；macOS 仅使用 CPU。尚未用真实 NVIDIA 显卡验证。"],
      ["文件和语言", "图片、HEIC/HEIF、TIFF、指定 PDF 页面 · 中文、英语、日语、韩语、法语和德语"],
      ["抽取字段", "商户、日期、总额、支票金额、收据明细、联系信息和文档专用字段"],
      ["复核与校验", "关联原始页面的可编辑字段、置信度复核、重复提示和算术校验"],
      ["导出", "Excel、CSV、JSON；Xero／QuickBooks 账单导入和名片 vCard"],
      ["隐私", "OCR 在本机运行。可选 AI 字段填充默认关闭，只接收抽取文本，不接收文档图片。"],
    ],
    title: "让单据批量处理更容易复核。",
    problem: "商业记录来自扫描件、照片、PDF 和付款确认页面。逐项手动输入耗时，未复核的 OCR 也可能把错误带入账目。",
    approach: "DocuPass 在本机批量运行 OCR，识别常见香港文档类型并抽取字段，再把结果与原页面并列，方便人工确认。硬件检查和逐文件进度也有助于安排大批量处理。",
    workflowTitle: ["从扫描件", "到已核对的导出文件。"],
    workflowIntro: "流程图说明桌面处理流程和手机伴侣传输方式；上方的展示区也包含实际运行中的桌面程序截图。",
    workflow: [
      ["选择文件和页面", "添加图片、PDF 或文件夹，选择需要处理的 PDF 页面和文档模式。"],
      ["检查硬件和模型", "选择语言和模型；程序会检查 CPU、内存和兼容 NVIDIA 环境，再推荐并行数量。"],
      ["本机运行 OCR", "通过多进程处理并显示进度和估算；单个文件失败会报告错误，不会中断整批。"],
      ["复核字段", "对照原始页面、更正不确定结果，并查看重复提示和金额校验。"],
      ["导出记录", "保存 JSON、CSV 或 Excel，包括文档专用工作表和会计用途格式。"],
    ],
    principlesTitle: "让来源和人工判断保持一致。",
    principlesIntro: "DocuPass 重视可复核结果和清晰的设备边界。",
    principles: [
      ["默认本机处理", "文档 OCR 在桌面电脑运行。手机通过已配对的本地网络传送扫描件，不会发送到云端 OCR 服务。"],
      ["保留识别依据", "复核界面会把抽取值与原始页面并列，并标记不确定或互相冲突的字段。"],
      ["说明 GPU 条件", "设置支持兼容 NVIDIA GPU 运行环境；macOS 使用 CPU，源代码也说明真实 NVIDIA 硬件仍待验证。"],
    ],
    status: "本机程序正在开发。源代码记录了 macOS CPU 验证；NVIDIA GPU 路径尚未在真实 NVIDIA 电脑上验证。本网站不托管 OCR 任务。",
  },
  ja: {
    name: "DocuPass · 書類OCR",
    category: "デスクトップOCR · 香港の業務書類",
    summary: "香港の領収書、請求書、小切手、フォームをローカルで読み取り、確認してから記録として出力します。",
    description: "DocuPass（旧 PaddleOCR Studio）は Windows と macOS のデスクトップアプリで、iPhone／Android 用の連携アプリもあります。OCR はパソコン上で実行し、抽出項目を確認・修正してから出力できます。",
    focus: [
      "領収書、請求書、小切手、名刺、病気休暇証明書、電子決済記録を読み取ります。",
      "CPU と NVIDIA GPU の対応状況、OCR 実行環境を確認し、安全なワーカー数を提案します。",
      "Fast／Balanced／Accurate モデルを選択し、PDF ページ、フォルダー、6 言語を指定できます。",
      "元ページの横で抽出項目を確認でき、不確かな値や金額の不一致は表示されます。",
      "Excel、CSV、JSON に出力し、会計ソフト用データ、vCard、履歴検索、監視フォルダーも利用できます。",
    ],
    previews: [
      ["DocuPass デスクトップの実画面", "macOSで実際に動作しているアプリを撮影した画面です。新規ジョブ、書類種別、ローカルCPU処理状態を表示します。"],
      ["CPU と NVIDIA GPU の設定", "ハードウェア確認とOCR環境の関係を示します。GPUには対応ドライバーとGPU版ランタイムが必要です。macOSはCPUを使用します。"],
      ["スマートフォンとデスクトップ", "Flutterアプリはローカルネットワーク経由でデスクトップとペアリングし、最終OCRはデスクトップで実行します。"],
    ],
    screenshotsLabel: "実際のアプリ画面と処理フロー",
    screenshotsNote: "最初の画像はmacOSで動作中のDocuPassを撮影した画面です。ハードウェアとスマートフォンの図はローカルソースに基づいています。",
    specificationsLabel: "技術概要",
    specificationsTitle: "現在のソースが対応する内容",
    specificationsIntro: "ローカルのREADME、デスクトップコード、Flutter連携アプリのソースで確認しました。",
    specifications: [
      ["デスクトップ", "Windows／macOS · Python · CustomTkinter"],
      ["スマートフォン", "Flutter · iOS／Android · ローカルネットワークでペアリング転送"],
      ["OCRエンジン", "PaddleOCR PP-OCRv6 · CPU または対応する NVIDIA GPU 環境"],
      ["GPU条件", "NVIDIA、対応ドライバー／ランタイム、空きVRAM 2 GB以上が必要です。macOSはCPUのみです。実機NVIDIA GPUでは未検証です。"],
      ["入力と言語", "画像、HEIC/HEIF、TIFF、PDFページ指定 · 中国語、英語、日本語、韓国語、フランス語、ドイツ語"],
      ["抽出項目", "店舗、日付、合計、小切手金額、領収書明細、連絡先、書類別の項目"],
      ["確認", "元ページと並べた編集可能な項目、信頼度確認、重複警告、計算チェック"],
      ["出力", "Excel、CSV、JSON · Xero／QuickBooks請求書データ、名刺vCard"],
      ["プライバシー", "OCRはローカル実行です。任意のAI補完は初期状態で無効で、文書画像ではなく抽出テキストを使います。"],
    ],
    title: "書類の一括処理を確認しやすく。",
    problem: "業務記録はスキャン、写真、PDF、決済確認画面などで届きます。手入力には時間がかかり、確認しないOCR結果は会計記録に誤りを残す可能性があります。",
    approach: "DocuPassはローカルでOCRをまとめて実行し、香港でよく使われる書類の種類と項目を抽出します。元ページの横で結果を確認でき、ハードウェア確認と進捗表示で大きな処理も計画できます。",
    workflowTitle: ["スキャンから", "確認済みの出力へ。"],
    workflowIntro: "処理図はデスクトップの手順とスマートフォン連携を説明します。上のショーケースには実際に動作するデスクトップ画面も掲載しています。",
    workflow: [
      ["ファイルとページを選択", "画像、PDF、フォルダーを追加し、PDFの対象ページと書類モードを選びます。"],
      ["ハードウェアとモデルを確認", "言語とモデルを選ぶと、CPU、メモリ、対応NVIDIA環境を確認してワーカー数を提案します。"],
      ["ローカルOCRを実行", "並列処理、進捗、所要時間の目安を表示します。個別ファイルの失敗でバッチ全体は止まりません。"],
      ["項目を確認", "元ページと比較し、不確かな結果を修正して重複や金額チェックを確認します。"],
      ["記録を出力", "書類別シートや会計用データを含むJSON、CSV、Excelを保存します。"],
    ],
    principlesTitle: "根拠を残して人が判断できるように。",
    principlesIntro: "DocuPassは確認可能な結果とデバイスの境界を明確にします。",
    principles: [
      ["ローカルを基本に", "書類OCRはデスクトップ上で実行します。スマートフォンの画像はペアリング済みのローカルネットワークで転送します。"],
      ["根拠を表示", "確認画面では抽出値を元ページの横に表示し、不確かまたは矛盾する項目に印を付けます。"],
      ["GPU対応を正確に説明", "対応するNVIDIA GPU環境を設定できます。macOSはCPUを使い、実機NVIDIA GPUの検証は未完了です。"],
    ],
    status: "ローカル開発中のプロジェクトです。ソースにはmacOS CPUでの検証が記録されていますが、NVIDIA GPU経路は実機未検証です。このサイトはOCR処理をホストしません。",
  },
  ko: {
    name: "DocuPass 문서 OCR",
    category: "데스크톱 OCR · 홍콩 업무 문서",
    summary: "홍콩 영수증, 송장, 수표와 양식을 로컬에서 읽고 검토한 뒤 기록으로 내보냅니다.",
    description: "DocuPass(구 PaddleOCR Studio)는 Windows와 macOS용 데스크톱 앱이며 iPhone·Android 동반 앱도 제공합니다. OCR은 컴퓨터에서 실행하고 추출 항목을 확인·수정한 뒤 내보낼 수 있습니다.",
    focus: [
      "영수증, 송장, 수표, 명함, 병가 증명서, 전자 결제 기록을 읽습니다.",
      "CPU와 NVIDIA GPU 지원 및 OCR 런타임을 확인하고 안전한 작업자 수를 권장합니다.",
      "Fast·Balanced·Accurate 모델을 선택하고 PDF 페이지, 폴더, 6개 OCR 언어를 지정합니다.",
      "원본 페이지 옆에서 추출 항목을 검토하며 불확실한 값과 금액 충돌을 표시합니다.",
      "Excel, CSV, JSON 내보내기와 회계 가져오기, vCard, 검색 기록, 감시 폴더를 지원합니다.",
    ],
    previews: [
      ["실제 DocuPass 데스크톱 화면", "macOS에서 실행 중인 앱을 캡처했습니다. 새 작업 화면, 문서 유형 선택과 로컬 CPU 처리 상태를 보여줍니다."],
      ["CPU 및 NVIDIA GPU 설정", "하드웨어 확인이 OCR 런타임 선택에 미치는 영향을 표시합니다. GPU에는 호환 드라이버와 GPU 빌드가 필요하며 macOS는 CPU를 사용합니다."],
      ["휴대폰과 데스크톱 연동", "Flutter 앱이 로컬 네트워크로 데스크톱과 페어링됩니다. 최종 OCR은 데스크톱에서 실행합니다."],
    ],
    screenshotsLabel: "실제 앱 화면과 작업 흐름",
    screenshotsNote: "첫 이미지는 macOS에서 실제 실행 중인 DocuPass 캡처입니다. 하드웨어와 휴대폰 그림은 로컬 소스 코드를 바탕으로 만들었습니다.",
    specificationsLabel: "기술 개요",
    specificationsTitle: "현재 소스가 지원하는 항목",
    specificationsIntro: "로컬 README, 데스크톱 코드, Flutter 동반 앱 소스로 확인했습니다.",
    specifications: [
      ["데스크톱", "Windows 및 macOS · Python · CustomTkinter"],
      ["휴대폰 동반 앱", "Flutter · iOS 및 Android · 로컬 네트워크 페어링 전송"],
      ["OCR 엔진", "PaddleOCR PP-OCRv6 · CPU 또는 지원되는 NVIDIA GPU 런타임"],
      ["GPU 조건", "NVIDIA, 호환 드라이버/런타임, 여유 VRAM 2GB 이상 필요; macOS는 CPU 전용입니다. 실제 NVIDIA 장비에서는 아직 검증되지 않았습니다."],
      ["입력 및 언어", "이미지, HEIC/HEIF, TIFF, PDF 페이지 지정 · 중국어, 영어, 일본어, 한국어, 프랑스어, 독일어"],
      ["추출 필드", "상점, 날짜, 총액, 수표 금액, 영수증 항목, 연락처 및 문서별 필드"],
      ["검토 및 확인", "원본 페이지와 연결된 편집 필드, 신뢰도 검토, 중복 경고, 산술 확인"],
      ["내보내기", "Excel, CSV, JSON · Xero/QuickBooks 청구서 가져오기, 명함 vCard"],
      ["개인정보", "OCR은 로컬에서 실행됩니다. 선택형 AI 필드 채우기는 기본 꺼짐이며 문서 이미지가 아닌 추출 텍스트를 사용합니다."],
    ],
    title: "문서 묶음을 쉽게 검토하세요.",
    problem: "업무 기록은 스캔, 사진, PDF, 결제 확인 화면으로 들어옵니다. 직접 입력은 시간이 걸리고 검토하지 않은 OCR은 회계 기록에 오류를 남길 수 있습니다.",
    approach: "DocuPass는 로컬에서 OCR을 일괄 실행하고 홍콩 문서 유형과 필드를 추출한 뒤 원본 페이지 옆에 결과를 표시합니다. 하드웨어 확인과 파일별 진행률로 큰 작업도 계획할 수 있습니다.",
    workflowTitle: ["스캔에서", "검토된 내보내기까지."],
    workflowIntro: "흐름도는 데스크톱 작업과 휴대폰 연동을 설명합니다. 위 쇼케이스에는 실제 실행 중인 데스크톱 앱 화면도 있습니다.",
    workflow: [
      ["파일과 페이지 선택", "이미지, PDF, 폴더를 추가하고 처리할 PDF 페이지와 문서 모드를 선택합니다."],
      ["하드웨어와 모델 확인", "언어와 모델을 선택하면 CPU, 메모리, 호환 NVIDIA 환경을 확인해 작업자 수를 권장합니다."],
      ["로컬 OCR 실행", "병렬 처리와 진행률, 예상 시간을 표시합니다. 개별 파일 오류가 전체 작업을 멈추지 않습니다."],
      ["필드 검토", "원본과 비교하고 불확실한 결과를 수정한 뒤 중복 및 금액 검사를 확인합니다."],
      ["기록 내보내기", "문서별 시트와 회계용 결과가 포함된 JSON, CSV, Excel을 저장합니다."],
    ],
    principlesTitle: "근거를 남겨 사람이 판단하게 합니다.",
    principlesIntro: "DocuPass는 검토할 수 있는 결과와 기기 간 경계를 명확히 합니다.",
    principles: [
      ["기본은 로컬 처리", "문서 OCR은 데스크톱에서 실행합니다. 휴대폰 스캔은 페어링된 로컬 네트워크로 전송하며 호스팅 OCR 서비스로 보내지 않습니다."],
      ["근거 표시", "검토 화면에서 추출 값을 원본 페이지 옆에 보여 주고 불확실하거나 충돌하는 필드를 표시합니다."],
      ["GPU 지원 조건 공개", "호환 NVIDIA GPU 런타임 설정이 있습니다. macOS는 CPU를 사용하며 실제 NVIDIA 장비 검증은 아직 남아 있습니다."],
    ],
    status: "로컬 개발 프로젝트입니다. 소스에는 macOS CPU 검증이 기록되어 있지만 NVIDIA GPU 경로는 실제 장비에서 검증되지 않았습니다. 이 웹사이트는 OCR 작업을 호스팅하지 않습니다.",
  },
};
