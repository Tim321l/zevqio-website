import type { Locale } from "./locales";

const l = (
  en: string,
  hk: string,
  cn: string,
  ja: string,
  ko: string,
): Record<Locale, string> => ({ en, "zh-hk": hk, "zh-cn": cn, ja, ko });
export const docuFeatureLabels = {
  eyebrow: l(
    "Feature guide",
    "功能詳情",
    "功能详情",
    "機能ガイド",
    "기능 안내",
  ),
  title: l(
    "What DocuPass can do",
    "DocuPass 功能一覽",
    "DocuPass 功能一览",
    "DocuPassの機能",
    "DocuPass 기능",
  ),
  intro: l(
    "Explore the detailed input, OCR, review and export capabilities. Some options depend on the device and configuration.",
    "查看匯入、OCR、覆核及匯出的完整功能；部分選項視乎裝置及設定。",
    "查看导入、OCR、核对和导出的完整功能；部分选项取决于设备和设置。",
    "取込み・OCR・確認・出力の詳細です。一部の機能は機器や設定に依存します。",
    "입력, OCR, 검토와 내보내기 기능을 자세히 확인하세요. 일부 옵션은 기기와 설정에 따라 달라집니다.",
  ),
  types: l(
    "What can it read?",
    "可以處理甚麼文件？",
    "可以处理什么文档？",
    "読み取れる書類",
    "어떤 문서를 읽을 수 있나요?",
  ),
  document: l("Document", "文件", "文档", "書類", "문서"),
  typeSummary: l(
    "6 document types and their extracted fields",
    "6 類文件及其抽取欄位",
    "6 类文档及其提取字段",
    "6種類の書類と抽出項目",
    "6가지 문서 유형과 추출 필드",
  ),
  fields: l("Typical fields", "主要欄位", "主要字段", "主な項目", "주요 필드"),
  source: l(
    "Full feature guide in the source",
    "查看原始碼的完整功能指南",
    "查看源代码中的完整功能指南",
    "ソースの機能ガイドを読む",
    "소스의 전체 기능 안내 보기",
  ),
  screens: l(
    "See app screens",
    "查看程式畫面",
    "查看程序画面",
    "アプリ画面を見る",
    "앱 화면 보기",
  ),
  results: l(
    "Receipt example",
    "收據範例",
    "收据示例",
    "レシート例",
    "영수증 예시",
  ),
  handwriting: l(
    "Handwriting test",
    "手寫實測",
    "手写实测",
    "手書きの測定",
    "필기 테스트",
  ),
};

export const docuDocumentTypes = [
  [
    l("Receipts", "收據", "收据", "レシート", "영수증"),
    l(
      "Merchant, date, receipt number, totals, payment and change; line items with quantity, unit price, discount and amount.",
      "商戶、日期、收據編號、總額、付款及找續；明細包括數量、單價、折扣和金額。",
      "商户、日期、收据编号、总额、付款和找零；明细包括数量、单价、折扣和金额。",
      "店舗、日付、番号、合計、支払額、釣銭。明細には数量・単価・割引・金額を含みます。",
      "상점, 날짜, 영수증 번호, 합계, 결제와 거스름돈. 품목별 수량, 단가, 할인과 금액도 추출합니다.",
    ),
  ],
  [
    l("Invoices and bills", "發票及帳單", "发票和账单", "請求書", "청구서"),
    l(
      "Supplier, invoice number, dates, customer, currency and amounts, organized for review and bill exports.",
      "供應商、發票編號、日期、客戶、貨幣及金額，整理後可覆核及匯出帳單資料。",
      "供应商、发票编号、日期、客户、货币和金额，整理后可核对并导出账单数据。",
      "発行元、請求番号、日付、顧客、通貨、金額を整理し、確認と請求データ出力につなげます。",
      "공급업체, 청구 번호, 날짜, 고객, 통화와 금액을 검토하고 청구 데이터로 내보냅니다.",
    ),
  ],
  [
    l("Hong Kong cheques", "香港支票", "香港支票", "香港の小切手", "홍콩 수표"),
    l(
      "Payee, date, cheque identifiers and amounts in words and figures. Amounts are cross-checked; handwritten names and dates require visual confirmation.",
      "收款人、日期、支票識別資料及文字／數字金額；交叉核對金額，手寫姓名及日期須對照原稿確認。",
      "收款人、日期、支票标识和文字／数字金额；交叉核对金额，手写姓名和日期须对照原稿确认。",
      "受取人、日付、識別情報、文字と数字の金額を抽出。金額を照合し、手書きの名前・日付は目視確認します。",
      "수취인, 날짜, 수표 식별 정보와 문자·숫자 금액을 추출합니다. 금액을 대조하며 필기 이름과 날짜는 직접 확인합니다.",
    ),
  ],
  [
    l("Business cards", "名片", "名片", "名刺", "명함"),
    l(
      "Names, company, title, telephone, email, website and address; export contacts as vCards.",
      "姓名、公司、職銜、電話、電郵、網站及地址；可匯出 vCard 聯絡人。",
      "姓名、公司、职务、电话、邮箱、网站和地址；可导出 vCard 联系人。",
      "氏名、会社、役職、電話、メール、Webサイト、住所。連絡先をvCardで出力できます。",
      "이름, 회사, 직책, 전화, 이메일, 웹사이트와 주소를 추출하고 vCard로 내보냅니다.",
    ),
  ],
  [
    l(
      "Sick-leave certificates",
      "病假證明書",
      "病假证明",
      "病気休暇証明書",
      "병가 증명서",
    ),
    l(
      "Patient, leave dates and days, doctor, clinic and certificate details. The stated day count is checked against the dates; a reason is extracted only when written.",
      "病人、休假日期及日數、醫生、診所和證明書資料；核對日期與日數，僅在原稿寫明時抽取原因。",
      "患者、休假日期和天数、医生、诊所与证明信息；核对日期和天数，仅在原稿写明时提取原因。",
      "患者、休暇期間・日数、医師、診療所、証明書情報。日数を日付と照合し、理由は記載がある場合のみ抽出します。",
      "환자, 휴가 날짜와 일수, 의사, 병원과 증명서 정보를 추출합니다. 날짜와 일수를 대조하고 사유는 기재된 경우에만 읽습니다.",
    ),
  ],
  [
    l(
      "E-payment confirmations",
      "電子付款確認",
      "电子支付确认",
      "電子決済の確認画面",
      "전자 결제 확인",
    ),
    l(
      "FPS, PayMe, AlipayHK and WeChat Pay HK confirmation images are treated as receipts, with payee, amount and transaction number.",
      "將轉數快、PayMe、AlipayHK 及 WeChat Pay HK 確認圖視作收據，抽取收款人、金額和交易編號。",
      "将转数快、PayMe、AlipayHK 和 WeChat Pay HK 确认图作为收据，提取收款人、金额和交易编号。",
      "FPS、PayMe、AlipayHK、WeChat Pay HKの確認画像をレシートとして扱い、受取人・金額・取引番号を読み取ります。",
      "FPS, PayMe, AlipayHK, WeChat Pay HK 확인 이미지를 영수증으로 처리해 수취인, 금액과 거래 번호를 읽습니다.",
    ),
  ],
];

export const docuFeatureGroups = [
  {
    id: "docu-input",
    title: l(
      "01 / Bring your documents in",
      "01 / 匯入文件",
      "01 / 导入文档",
      "01 / 書類を取り込む",
      "01 / 문서 입력",
    ),
    items: [
      l(
        "Add individual images, PDFs or folders with subfolders. PNG, JPEG, BMP, WebP, TIFF and iPhone HEIC/HEIF are supported; PDF ranges can be all pages, 1–3,5 or 4 onward.",
        "加入圖片、PDF 或連同子資料夾的整個資料夾。支援 PNG、JPEG、BMP、WebP、TIFF 和 iPhone HEIC/HEIF；PDF 可選全部、1–3,5 或第 4 頁起。",
        "添加图片、PDF 或包含子文件夹的整个文件夹。支持 PNG、JPEG、BMP、WebP、TIFF 和 iPhone HEIC/HEIF；PDF 可选全部、1–3,5 或第 4 页起。",
        "画像、PDF、サブフォルダーを含むフォルダーを追加。PNG・JPEG・BMP・WebP・TIFF・HEIC/HEIFと、PDFのページ範囲指定に対応します。",
        "이미지, PDF 또는 하위 폴더를 포함한 폴더를 추가합니다. PNG, JPEG, BMP, WebP, TIFF, HEIC/HEIF와 PDF 페이지 범위 선택을 지원합니다.",
      ),
      l(
        "Read Chinese, English, Japanese, Korean, French or German. Desk photos can be cropped and straightened, and EXIF orientation turns phone photos upright.",
        "選擇中文、英文、日文、韓文、法文或德文。桌面文件照片可裁切和拉正，並按 EXIF 方向轉正手機照片。",
        "选择中文、英文、日文、韩文、法文或德文。桌面文档照片可裁切和校正，并按 EXIF 方向转正手机照片。",
        "中国語・英語・日本語・韓国語・フランス語・ドイツ語を選択。書類写真の切り抜きと傾き補正、EXIFによる向きの補正を行います。",
        "중국어, 영어, 일본어, 한국어, 프랑스어와 독일어를 선택합니다. 문서 사진을 자르고 기울기를 보정하며 EXIF 방향을 적용합니다.",
      ),
      l(
        "Decode page QR codes and barcodes alongside OCR. Their values appear as additional fields and export columns, preserving any value already read by OCR.",
        "同步讀取頁面上的 QR code 及條碼，作為額外欄位和匯出欄；已辨識的 OCR 值會保留。",
        "同步读取页面上的二维码和条码，作为额外字段和导出列；保留已识别的 OCR 值。",
        "QRコードとバーコードも読み取り、追加項目・出力列として保存します。既存のOCR値は保持します。",
        "QR 코드와 바코드도 읽어 추가 필드와 내보내기 열에 저장하며 기존 OCR 값은 유지합니다.",
      ),
    ],
  },
  {
    id: "docu-modes",
    title: l(
      "02 / Printed text, handwriting and forms",
      "02 / 印刷文字、手寫及表格",
      "02 / 印刷文字、手写和表格",
      "02 / 印刷文字・手書き・フォーム",
      "02 / 인쇄 문자, 필기와 양식",
    ),
    items: [
      l(
        "Standard mode reads printed text. Handwriting mode uses Balanced or Accurate; choosing Fast switches to Balanced for handwriting and form work.",
        "標準模式處理印刷文字。手寫模式使用平衡或精準模型；手寫及表格工作若選快速，會改用平衡模型。",
        "标准模式处理印刷文字。手写模式使用平衡或准确模型；手写和表格工作若选快速，会改用平衡模型。",
        "標準モードは印刷文字用。手書きはBalancedかAccurateを使用し、手書き・フォームでFastを選ぶとBalancedに切り替わります。",
        "표준 모드는 인쇄 문자를 읽습니다. 필기에는 Balanced 또는 Accurate를 사용하며 필기·양식에서 Fast를 선택하면 Balanced로 전환합니다.",
      ),
      l(
        "Form compare starts with a blank original image or PDF page. Filled scans are aligned for tilt, shift and scale; the printed background is removed and written responses are attached to their labels.",
        "表格比對先選空白原稿圖片或 PDF 頁面。已填表格會校正傾斜、位移和比例，移除原有印刷背景，再將填寫內容連到對應標籤。",
        "表格对比先选空白原稿图片或 PDF 页面。已填表格会校正倾斜、位移和比例，移除原有印刷背景，再将填写内容关联到对应标签。",
        "空白の原本画像かPDFページを指定。記入済み画像の傾き・位置・倍率を合わせ、印刷背景を除去して回答をラベルに対応付けます。",
        "빈 원본 이미지나 PDF 페이지를 지정합니다. 작성된 스캔의 기울기, 위치와 크기를 맞추고 인쇄 배경을 제거해 응답을 라벨에 연결합니다.",
      ),
      l(
        "Choice fields show selectable options during review, with 1–9 shortcuts and 0 for none. Excel includes Form fields and Form summary sheets with answered, review and blank counts plus choice totals.",
        "選項題可在覆核時按選項按鈕，亦可用 1–9 快捷鍵及 0 清除。Excel 包含 Form fields 和 Form summary，統計已答、待查、空白及各選項數量。",
        "选择题可在核对时点击选项，也可用 1–9 快捷键和 0 清除。Excel 包含 Form fields 和 Form summary，统计已答、待查、空白和各选项数量。",
        "選択式の項目は確認画面のボタンと1～9のキーで選択、0で解除。Excelには項目別の回答と、回答済み・要確認・空欄・選択肢集計を出力します。",
        "선택형 필드는 검토 화면 버튼이나 1~9 키로 고르고 0으로 해제합니다. Excel에는 응답 필드와 응답·검토·빈칸 수 및 선택지 합계가 포함됩니다.",
      ),
    ],
  },
  {
    id: "docu-review",
    title: l(
      "03 / Check every result against its source",
      "03 / 逐項對照原稿",
      "03 / 逐项对照原稿",
      "03 / 原本と結果を確認",
      "03 / 원본과 결과 대조",
    ),
    items: [
      l(
        "View the original page, text boxes and editable extracted fields together. Inspect the source region for a field, correct it, then confirm; Enter advances to the next document needing review.",
        "在同一工作區查看原頁、文字方框和可編輯欄位。檢視欄位來源區域、修改後確認；Enter 可前往下一份待覆核文件。",
        "在同一工作区查看原页、文字框和可编辑字段。检查字段来源区域、修改后确认；Enter 可前往下一份待核对文档。",
        "原本、文字枠、編集できる抽出項目を一緒に表示。項目の元領域を確認・修正し、Enterで次の確認対象へ進めます。",
        "원본, 문자 상자와 편집 가능한 추출 필드를 함께 봅니다. 필드의 원본 영역을 확인하고 수정한 뒤 Enter로 다음 검토 문서로 이동합니다.",
      ),
      l(
        "Check receipt item sums against totals, cheque words against figures, and leave dates against day counts. Uncertain or conflicting values remain marked for review; OCR confidence is not an accuracy guarantee.",
        "核對收據明細與總額、支票文字與數字金額、病假日期與日數。不確定或矛盾值會保留覆核標記；OCR 信心值不等於準確保證。",
        "核对收据明细和总额、支票文字和数字金额、病假日期和天数。不确定或矛盾值保留核对标记；OCR 置信度不等于准确保证。",
        "明細合計、文字と数字の小切手金額、休暇日付と日数を照合。不確か・矛盾する値には確認表示を残します。信頼度は正確さの保証ではありません。",
        "품목 합계, 수표의 문자·숫자 금액과 병가 날짜·일수를 대조합니다. 불확실하거나 충돌하는 값은 검토 표시를 유지하며 신뢰도는 정확도 보장이 아닙니다.",
      ),
      l(
        "Flag possible repeated receipts or invoices within a batch and History, using merchant and number or merchant, date and total. A person decides whether to keep the record.",
        "按商戶及編號，或商戶、日期及總額，在批次和歷史中標示可能重複的收據或發票，由使用者決定保留。",
        "按商户和编号，或商户、日期和总额，在批次和历史中标记可能重复的收据或发票，由用户决定保留。",
        "店舗と番号、または店舗・日付・合計を使い、バッチと履歴の重複候補を表示。記録を残すかは利用者が判断します。",
        "상점과 번호 또는 상점·날짜·합계로 배치와 기록의 중복 후보를 표시하고 사용자가 보관 여부를 결정합니다.",
      ),
    ],
  },
  {
    id: "docu-learning",
    title: l(
      "04 / Reuse the corrections you make",
      "04 / 重用你作出的更正",
      "04 / 重用你做出的更正",
      "04 / 修正を次の書類に活かす",
      "04 / 수정 내용 재사용",
    ),
    items: [
      l(
        "Teach by example remembers a printed field label after a confirmed correction. Later documents with that label can receive a proposed value in an empty field, always marked for checking.",
        "範例教學會在確認更正後記住印刷欄位標籤。往後遇到同一標籤，可為空欄提出填寫建議，並標示需檢查。",
        "示例学习在确认更正后记住印刷字段标签。之后遇到相同标签，可为空字段提出填写建议，并标记需检查。",
        "確認した修正から印刷ラベルを記憶。同じラベルの次の書類では空欄への候補を提示し、必ず確認対象にします。",
        "확인한 수정에서 인쇄 라벨을 기억합니다. 이후 같은 라벨의 빈 필드에 후보를 제안하고 반드시 검토 표시를 남깁니다.",
      ),
      l(
        "Remember corrected merchant names and expense categories locally. Settings lets you inspect and forget remembered entries. This is correction memory; it does not retrain the OCR model weights.",
        "在本機記住更正後的商戶名稱和開支類別，設定可檢視及刪除記憶。這是更正記憶，並不重新訓練 OCR 模型權重。",
        "在本机记住更正后的商户名称和支出类别，设置可查看和删除记忆。这是更正记忆，不会重新训练 OCR 模型权重。",
        "修正した店舗名と経費分類をローカルに保存。設定から確認・削除できます。OCRモデルの重みを再学習する機能ではありません。",
        "수정한 상점명과 경비 분류를 로컬에 저장하고 설정에서 확인·삭제합니다. OCR 모델 가중치를 다시 학습시키는 기능은 아닙니다.",
      ),
    ],
  },
  {
    id: "docu-exports",
    title: l(
      "05 / Keep records in useful formats",
      "05 / 匯出可用的記錄格式",
      "05 / 导出实用的记录格式",
      "05 / 使いやすい形式で保存",
      "05 / 활용 가능한 형식으로 저장",
    ),
    items: [
      l(
        "Export document-specific Excel or CSV records and expense summaries by category and month. Receipt line items and form answer summaries retain their own structured sheets.",
        "匯出按文件類型整理的 Excel 或 CSV，並按類別和月份彙總開支。收據明細及表格答案統計保留獨立結構化工作表。",
        "导出按文档类型整理的 Excel 或 CSV，并按类别和月份汇总支出。收据明细和表格答案统计保留独立结构化工作表。",
        "書類種別ごとのExcel・CSVと、分類・月別の経費集計を出力。レシート明細とフォーム回答は構造化した専用シートに保存します。",
        "문서 유형별 Excel·CSV와 분류·월별 경비 요약을 내보냅니다. 영수증 품목과 양식 응답 요약은 전용 시트에 보관합니다.",
      ),
      l(
        "Prepare Xero or QuickBooks bill-import files, or use a custom customer template with account codes by category. These are export formats; this page does not demonstrate a completed accounting-system import.",
        "準備 Xero 或 QuickBooks 帳單匯入檔，或使用自訂客戶範本，按類別配會計代碼。這些是匯出格式；本頁沒有展示完成會計系統匯入。",
        "准备 Xero 或 QuickBooks 账单导入文件，或使用自定义客户模板，按类别配置会计代码。这些是导出格式；本页没有展示已完成的会计系统导入。",
        "Xero・QuickBooks向け請求書取込ファイルや、分類別勘定コードを含む独自テンプレートを作成。ここでは出力形式を紹介しており、取込完了の実演はありません。",
        "Xero·QuickBooks 청구서 가져오기 파일이나 분류별 계정 코드가 있는 사용자 템플릿을 만듭니다. 이 페이지는 출력 형식을 소개하며 회계 시스템 가져오기 완료를 시연하지는 않습니다.",
      ),
      l(
        "Save business cards as vCards and keep full JSON results containing recognized text, confidence and bounding boxes. Raw line-level Excel can also retain file, line and error information.",
        "將名片存為 vCard，並保存包括辨識文字、信心值及方框的完整 JSON。原始逐行 Excel 亦可保留檔案、行號及錯誤資料。",
        "将名片保存为 vCard，并保存包含识别文字、置信度和边界框的完整 JSON。原始逐行 Excel 也可保留文件、行号和错误信息。",
        "名刺をvCard、全文・信頼度・文字枠をJSONで保存。行単位のExcelにはファイル、行番号、エラー情報も残せます。",
        "명함은 vCard로, 인식 문자·신뢰도·경계 상자를 포함한 전체 결과는 JSON으로 저장합니다. 행별 Excel에는 파일, 행과 오류 정보도 남길 수 있습니다.",
      ),
    ],
  },
  {
    id: "docu-batches",
    title: l(
      "06 / Run repeatable batches",
      "06 / 重複使用的批次流程",
      "06 / 可重复的批量流程",
      "06 / 繰り返しのバッチ処理",
      "06 / 반복 가능한 일괄 처리",
    ),
    items: [
      l(
        "Search saved job History by merchant, month, amount or document number. A watched folder can process incoming scans automatically and create a daily Excel file; watched batches also appear in History.",
        "按商戶、月份、金額或文件編號搜尋歷史工作。監察資料夾可自動處理新掃描檔並建立每日 Excel，批次亦會出現在歷史中。",
        "按商户、月份、金额或文档编号搜索历史任务。监控文件夹可自动处理新扫描文件并创建每日 Excel，批次也会出现在历史中。",
        "店舗・月・金額・番号で処理履歴を検索。監視フォルダーの新しいスキャンを自動処理して日別Excelを作り、そのバッチも履歴に保存します。",
        "상점, 월, 금액과 문서 번호로 저장된 작업을 검색합니다. 감시 폴더는 새 스캔을 자동 처리해 일별 Excel을 만들고 작업 기록에도 남깁니다.",
      ),
      l(
        "Parallel workers keep models loaded between pages. Live progress, logs, time remaining and Cancel controls keep the batch visible while the interface stays responsive.",
        "並行工作程序在頁面之間保留已載入模型。即時進度、日誌、剩餘時間及取消按鈕讓批次狀態清楚可見。",
        "并行工作进程在页面之间保留已加载模型。实时进度、日志、剩余时间和取消按钮使批次状态清晰可见。",
        "並列ワーカーはページ間でモデルを保持。進捗、ログ、残り時間、キャンセルを表示し、操作できる画面を維持します。",
        "병렬 작업자는 페이지 사이에 모델을 유지합니다. 진행률, 로그, 남은 시간과 취소 기능을 표시하면서 화면 응답을 유지합니다.",
      ),
      l(
        "Corrupt or empty files are reported and skipped so other files continue. Worker crashes are isolated, results keep input order, and engine startup failures produce a clear batch error.",
        "損壞或空白檔案會列出錯誤並跳過，讓其他檔案繼續。工作程序故障會隔離，結果維持輸入次序，引擎啟動失敗則顯示清楚的批次錯誤。",
        "损坏或空文件会报告错误并跳过，让其他文件继续。工作进程故障会隔离，结果保持输入顺序，引擎启动失败则显示清晰的批次错误。",
        "破損・空ファイルを報告して次へ進みます。ワーカー異常を切り分け、入力順を保持し、エンジン起動失敗は明確に表示します。",
        "손상되거나 빈 파일은 오류로 표시하고 건너뜁니다. 작업자 충돌을 격리하고 입력 순서를 유지하며 엔진 시작 실패를 명확히 알립니다.",
      ),
    ],
  },
  {
    id: "docu-performance",
    title: l(
      "07 / Choose a setup for your computer",
      "07 / 按電腦選擇設定",
      "07 / 按电脑选择设置",
      "07 / パソコンに合う設定",
      "07 / 컴퓨터에 맞는 설정",
    ),
    items: [
      l(
        "Profile CPU cores, available RAM and NVIDIA GPU memory. Recommend a worker count with memory headroom. GPU mode requires a compatible NVIDIA runtime and at least 2 GB free VRAM; macOS uses CPU.",
        "檢查 CPU 核心、可用 RAM 及 NVIDIA 顯示記憶體，預留記憶體空間後建議並行數量。GPU 需要相容 NVIDIA 執行環境和至少 2 GB 空閒 VRAM；macOS 使用 CPU。",
        "检查 CPU 核心、可用 RAM 和 NVIDIA 显存，预留内存后建议并行数量。GPU 需要兼容 NVIDIA 运行环境和至少 2 GB 空闲显存；macOS 使用 CPU。",
        "CPUコア、空きRAM、NVIDIAの空きVRAMを確認し、余裕を残したワーカー数を提案。GPUは対応環境と空きVRAM 2GB以上が必要で、macOSはCPUを使用します。",
        "CPU 코어, 여유 RAM과 NVIDIA VRAM을 확인하고 메모리 여유를 둔 작업자 수를 제안합니다. GPU는 호환 환경과 여유 VRAM 2GB 이상이 필요하며 macOS는 CPU를 사용합니다.",
      ),
      l(
        "Choose Fast, Balanced or Accurate models. Japanese substitutes Balanced for Fast; Korean uses its dedicated model. The setup remembers choices and checks the installed runtime.",
        "選擇快速、平衡或精準模型。日文以平衡代替快速，韓文使用專用模型。設定會記住選擇並檢查已安裝執行環境。",
        "选择快速、平衡或准确模型。日文以平衡代替快速，韩文使用专用模型。设置会记住选择并检查已安装运行环境。",
        "Fast・Balanced・Accurateを選択。日本語のFastはBalancedに置換し、韓国語は専用モデルを使用。選択を保存し、導入済み環境を確認します。",
        "Fast, Balanced와 Accurate를 선택합니다. 일본어 Fast는 Balanced로 바뀌며 한국어는 전용 모델을 사용합니다. 선택을 저장하고 설치 환경을 점검합니다.",
      ),
      l(
        "Benchmark a standard page or measure 2–4 of your own pages for time estimates. Auto-pick compares model output on up to three pages and recommends a faster close match to Accurate; agreement is not a check against ground truth.",
        "可用標準頁測速，或以自己的 2–4 頁估算時間。自動選型比較最多三頁的模型輸出，建議與精準模式接近的較快選項；模型一致不等於與正確答案一致。",
        "可用标准页测速，或用自己的 2–4 页估算时间。自动选型比较最多三页的模型输出，建议与准确模式接近的较快选项；模型一致不代表与正确答案一致。",
        "標準ページか自分の2～4ページで時間を測定。自動選択は最大3ページの出力を比較し、Accurateに近い高速な候補を提案します。正解との比較ではありません。",
        "표준 페이지나 자신의 2~4페이지로 시간을 측정합니다. 자동 선택은 최대 3페이지의 출력을 비교해 Accurate와 유사한 빠른 모델을 제안하며 정답과 대조한 정확도는 아닙니다.",
      ),
    ],
  },
  {
    id: "docu-phone",
    title: l(
      "08 / Scan on a phone, finish on the desktop",
      "08 / 手機掃描，電腦完成",
      "08 / 手机扫描，电脑完成",
      "08 / スマホで撮影、PCで処理",
      "08 / 휴대폰 촬영, 데스크톱 처리",
    ),
    items: [
      l(
        "The Flutter companion source targets iPhone and Android. Capture guidance identifies darkness, glare, blur or distance, takes a photo when steady and crops the document.",
        "Flutter 伴侶程式原始碼支援 iPhone 及 Android，拍攝提示會檢查過暗、反光、模糊和距離，穩定時拍照並裁切文件。",
        "Flutter 配套程序源码面向 iPhone 和 Android，拍摄提示检查过暗、反光、模糊和距离，稳定时拍照并裁切文档。",
        "Flutterの連携アプリはiPhone・Android向け。暗さ、反射、ぼけ、距離を案内し、安定した時に撮影して書類を切り抜きます。",
        "Flutter 동반 앱 소스는 iPhone과 Android를 대상으로 합니다. 어두움, 반사, 흐림과 거리를 안내하고 안정되면 촬영해 문서를 자릅니다.",
      ),
      l(
        "Pair with the desktop over the local network and send scans to that computer. The phone can preview OCR with a device-appropriate model; the desktop performs final OCR and syncs results back.",
        "經本地網絡與電腦配對，將掃描件傳到該電腦。手機可用合適模型預覽 OCR，最終辨識由電腦執行，再同步結果到手機。",
        "通过本地网络与电脑配对，将扫描件传到该电脑。手机可用合适模型预览 OCR，最终识别由电脑执行，再同步结果到手机。",
        "ローカルネットワークでPCとペアリングして送信。端末に合うモデルでスマホ側のプレビューを行い、最終OCRはPCで実行して結果を戻します。",
        "로컬 네트워크로 데스크톱과 페어링해 스캔을 보냅니다. 휴대폰에서 기기에 맞는 모델로 미리 보고 데스크톱이 최종 OCR을 수행해 결과를 동기화합니다.",
      ),
    ],
  },
  {
    id: "docu-local",
    title: l(
      "09 / Local processing and optional assistance",
      "09 / 本機處理及自選輔助",
      "09 / 本地处理和可选辅助",
      "09 / ローカル処理と任意の補助",
      "09 / 로컬 처리와 선택형 보조",
    ),
    items: [
      l(
        "OCR runs on your computer. A separately enabled AI helper can fill empty fields using extracted text: choose local Ollama or a cloud OpenAI-compatible endpoint. AI proposals always require review; cloud mode sends that text to the configured provider.",
        "OCR 在電腦本機執行。另行啟用的 AI 輔助可根據抽取文字填寫空欄，可選本機 Ollama 或雲端 OpenAI 相容端點；建議一律需覆核，雲端模式會把文字傳送到所選服務商。",
        "OCR 在电脑本地执行。单独启用的 AI 辅助可根据提取文字填写空字段，可选本地 Ollama 或云端 OpenAI 兼容端点；建议始终需要核对，云端模式会将文字发送到所选服务商。",
        "OCRはPC上で実行。任意のAI補助は抽出テキストから空欄を補い、ローカルOllamaかクラウドのOpenAI互換エンドポイントを選べます。提案は要確認で、クラウド時は設定先に文字を送ります。",
        "OCR은 컴퓨터에서 실행합니다. 선택형 AI 보조는 추출 텍스트로 빈 필드를 채우며 로컬 Ollama나 클라우드 OpenAI 호환 엔드포인트를 선택합니다. 제안은 항상 검토 대상이며 클라우드에서는 설정한 제공자에게 텍스트를 보냅니다.",
      ),
      l(
        "The setup wizard selects runtime, languages and models, with online installation or an offline pack. Bundled builds can run OCR offline after the required runtime and models are present. GPU and phone capabilities depend on their device setup; the demonstrated desktop run uses macOS CPU.",
        "設定精靈選擇執行環境、語言及模型，可線上安裝或使用離線包。備妥執行環境和模型後，整合版本可離線執行 OCR。GPU 及手機功能視裝置設定而定，本頁桌面實測使用 macOS CPU。",
        "设置向导选择运行环境、语言和模型，可在线安装或使用离线包。准备好运行环境和模型后，打包版本可离线运行 OCR。GPU 和手机功能取决于设备设置，本页桌面实测使用 macOS CPU。",
        "設定ウィザードで実行環境・言語・モデルを選び、オンラインかオフラインパックで導入。必要な環境とモデルがあればOCRはオフライン動作します。掲載のデスクトップ実測はmacOS CPUです。",
        "설정 마법사에서 런타임, 언어와 모델을 고르고 온라인 또는 오프라인 팩으로 설치합니다. 필요한 환경과 모델이 있으면 OCR을 오프라인으로 실행합니다. 이 페이지의 데스크톱 실측은 macOS CPU를 사용했습니다.",
      ),
    ],
  },
];
