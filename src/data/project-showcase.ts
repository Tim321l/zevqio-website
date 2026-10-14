import type { Locale } from "./locales";
import type { ProjectPage } from "./projects";

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

export const showcaseLabels = {
  demos: l(
    "Project demos",
    "項目示範",
    "项目演示",
    "プロジェクトのデモ",
    "프로젝트 데모",
  ),
  demoIntro: l(
    "Watch a feature in use, then explore the implementation below.",
    "先看看功能如何運作，再了解下方的程式實作。",
    "先看看功能如何运作，再了解下方的代码实现。",
    "機能の動きを見てから、下の実装を確認できます。",
    "기능이 작동하는 모습을 보고 아래에서 구현을 확인하세요.",
  ),
  engineering: l(
    "Skills demonstrated",
    "項目展示的技術能力",
    "项目展示的技术能力",
    "このプロジェクトで示す技術",
    "프로젝트가 보여 주는 기술",
  ),
  engineeringIntro: l(
    "The visible experience is supported by these systems. Each example links to the actual source used for this showcase.",
    "這些系統支援畫面中的體驗。每個例子都連結到本次展示所參考的實際原始碼。",
    "这些系统支持画面中的体验。每个例子都链接到本次展示参考的实际源代码。",
    "画面の体験を支えるシステムを紹介します。各例から今回確認した実際のソースを参照できます。",
    "화면의 경험을 만드는 시스템입니다. 각 예시는 이번 소개에 사용한 실제 소스로 연결됩니다.",
  ),
  source: l(
    "Inspect the implementation",
    "查看程式實作",
    "查看代码实现",
    "実装を見る",
    "구현 살펴보기",
  ),
  tour: l(
    "Explore the Unity workflow",
    "探索 Unity 遊戲流程",
    "探索 Unity 游戏流程",
    "Unityの流れを見る",
    "Unity 게임 흐름 살펴보기",
  ),
  tourNote: l(
    "An interactive tour of real local screenshots: career, court, city and home. Select a screen or play the screen tour.",
    "以本機實際截圖展示生涯、球場、城市和住所。選擇畫面，或播放畫面導覽。",
    "用本机实际截图展示生涯、球场、城市和住所。选择画面，或播放画面导览。",
    "ローカルの実際の画面でキャリア、コート、街、自宅を紹介します。画面を選択するか、画面ツアーを再生できます。",
    "실제 로컬 캡처로 커리어, 코트, 도시와 집을 소개합니다. 화면을 선택하거나 화면 투어를 재생하세요.",
  ),
  playTour: l(
    "Play screen tour",
    "播放畫面導覽",
    "播放画面导览",
    "画面ツアーを再生",
    "화면 투어 재생",
  ),
  pauseTour: l(
    "Pause screen tour",
    "暫停畫面導覽",
    "暂停画面导览",
    "画面ツアーを停止",
    "화면 투어 일시 정지",
  ),
};

type Evidence = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  skills: string[];
  files: string[];
};
type Demo = {
  video: string;
  poster: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};
type Showcase = { sourceRoot: string; evidence: Evidence[]; demos: Demo[] };

export const projectShowcases: Record<ProjectPage["slug"], Showcase> = {
  "rimrise-unity": {
    sourceRoot:
      "https://github.com/Tim321l/hardwood-career/blob/5d5f693c8c746cab988bac33c1df926eaae714b4/",
    demos: [],
    evidence: [
      {
        title: l(
          "A career that continues between sessions",
          "可以延續的球員生涯",
          "可以延续的球员生涯",
          "セッションをまたぐキャリア",
          "다음 실행에도 이어지는 커리어",
        ),
        description: l(
          "The C# career model stores player and season state. The hub writes JSON through a temporary file and keeps a backup, connecting the management UI to persistent progress.",
          "C# 生涯模型保存球員和賽季狀態。中心先寫入暫存 JSON，再保留備份，把管理介面連接到可延續的進度。",
          "C# 生涯模型保存球员和赛季状态。中心先写入临时 JSON，再保留备份，把管理界面连接到可延续的进度。",
          "C#のモデルが選手とシーズンの状態を管理します。ハブは一時JSONファイル経由で保存し、バックアップを残して管理画面と継続する進行をつなぎます。",
          "C# 모델이 선수와 시즌 상태를 관리합니다. 허브는 임시 JSON 파일을 거쳐 저장하고 백업을 남겨 관리 화면과 지속되는 진행도를 연결합니다.",
        ),
        skills: ["C#", "JSON", "Unity"],
        files: [
          "unity/Assets/HardwoodCareer/Scripts/CareerHub.cs",
          "unity/Assets/HardwoodCareer/Scripts/CareerProfile.cs",
        ],
      },
      {
        title: l(
          "One match loop, several input methods",
          "同一套比賽流程，多種操作方式",
          "同一套比赛流程，多种操作方式",
          "複数の入力で動く試合ループ",
          "여러 입력으로 작동하는 경기 루프",
        ),
        description: l(
          "Keyboard and controller actions share an input adapter. The match combines those actions with touch controls, AI movement, possession, shot timing and the scoreboard.",
          "鍵盤與控制器透過共用輸入轉接器發出動作。比賽把動作與觸控、AI 移動、控球、投籃計時和計分板結合。",
          "键盘与控制器通过共用输入适配器发出动作。比赛把动作与触控、AI 移动、控球、投篮计时和计分板结合。",
          "キーボードとコントローラーは共通の入力アダプターを使います。試合側がタッチ操作、AI移動、ボール保持、シュートのタイミング、スコア表示を組み合わせます。",
          "키보드와 컨트롤러는 공통 입력 어댑터를 사용합니다. 경기 로직이 터치 입력, AI 이동, 볼 소유, 슛 타이밍과 점수판을 연결합니다.",
        ),
        skills: ["C#", "Unity Input", "AI"],
        files: [
          "unity/Assets/HardwoodCareer/Scripts/CareerInput.cs",
          "unity/Assets/HardwoodCareer/Scripts/BasketballGame.cs",
        ],
      },
      {
        title: l(
          "City systems connected to the player",
          "與球員連接的城市系統",
          "与球员连接的城市系统",
          "選手につながる都市システム",
          "선수와 연결되는 도시 시스템",
        ),
        description: l(
          "The city world coordinates navigation and interactions, while traffic and pedestrian behavior live in separate modules. City progress is captured when the career is saved.",
          "城市世界協調導航與互動，交通和行人行為則由獨立模組處理。儲存生涯時亦會記錄城市進度。",
          "城市世界协调导航与互动，交通和行人行为由独立模块处理。保存生涯时也会记录城市进度。",
          "都市のワールドが移動と操作をまとめ、交通と歩行者の動きは別モジュールが担当します。キャリア保存時には街での進行も記録されます。",
          "도시 월드가 이동과 상호작용을 조율하고 교통과 보행자 동작은 별도 모듈이 맡습니다. 커리어 저장 시 도시 진행도 함께 기록합니다.",
        ),
        skills: ["C#", "Unity 3D"],
        files: [
          "unity/Assets/HardwoodCareer/Scripts/CareerCityWorld.cs",
          "unity/Assets/HardwoodCareer/Scripts/CareerCityTraffic.cs",
        ],
      },
    ],
  },
  "rimrise-web": {
    sourceRoot:
      "https://github.com/Tim321l/hardwood-career/blob/31d317b267eac17613384988a885bb90e90c09d2/",
    demos: [
      {
        video: "/videos/rimrise-career-to-city.webm",
        poster: "/images/projects/rimrise-city-demo-poster.png",
        title: l(
          "Enter and explore the 3D city",
          "進入並探索 3D 城市",
          "进入并探索 3D 城市",
          "3D都市に入って探索",
          "3D 도시에 들어가 탐험",
        ),
        description: l(
          "A local demo profile opens the city and moves using the keyboard. Watch the character, location markers, activity panel and minimap work together.",
          "本機示範角色進入城市，再用鍵盤移動。觀察角色、地點標記、活動面板和小地圖如何一起運作。",
          "本机演示角色进入城市，再用键盘移动。观察角色、地点标记、活动面板和小地图如何一起运作。",
          "ローカルのデモプロフィールで街に入り、キーボードで移動します。キャラクター、目的地マーカー、活動パネル、ミニマップの連携を確認できます。",
          "로컬 데모 캐릭터가 도시에 들어가 키보드로 이동합니다. 캐릭터, 장소 마커, 활동 패널과 미니맵이 함께 작동하는 모습을 보세요.",
        ),
      },
      {
        video: "/videos/rimrise-web-gameplay.webm",
        poster: "/images/projects/rimrise-web-gameplay.webp",
        title: l(
          "See the 5v5 court simulation",
          "觀看 5 對 5 球場模擬",
          "观看 5 对 5 球场模拟",
          "5対5の試合シミュレーション",
          "5대5 경기 시뮬레이션",
        ),
        description: l(
          "An AI-controlled local match demonstrates movement, possession and the scoreboard in the browser. The separate server powers online rooms.",
          "本機 AI 對局展示瀏覽器中的移動、控球和計分板。線上房間由獨立伺服器處理。",
          "本机 AI 对局展示浏览器中的移动、控球和计分板。在线房间由独立服务器处理。",
          "ローカルのAI対戦でブラウザー内の移動、ボール保持、スコア表示を紹介します。オンラインルームは別サーバーで動作します。",
          "로컬 AI 경기로 브라우저의 이동, 볼 소유와 점수판을 보여 줍니다. 온라인 방은 별도 서버에서 작동합니다.",
        ),
      },
    ],
    evidence: [
      {
        title: l(
          "Graphics that respond to the device",
          "按裝置調整的圖形",
          "按设备调整的图形",
          "端末に合わせる描画",
          "기기에 맞춰 조절하는 그래픽",
        ),
        description: l(
          "Three.js requests a high-performance WebGL renderer, reads the adapter information, and detects software rendering. The fallback lowers resolution and frame rate to keep the world usable.",
          "Three.js 請求高效能 WebGL、讀取顯示卡資料並偵測軟件渲染。後備設定降低解析度與影格率，維持世界的可操作性。",
          "Three.js 请求高性能 WebGL、读取显卡信息并检测软件渲染。回退设置降低分辨率与帧率，维持世界的可操作性。",
          "Three.jsが高性能WebGLを要求し、GPU情報からソフトウェア描画を検出します。フォールバックは解像度とフレームレートを下げて操作を維持します。",
          "Three.js가 고성능 WebGL을 요청하고 GPU 정보로 소프트웨어 렌더링을 감지합니다. 대체 설정은 해상도와 프레임 속도를 낮춰 조작을 유지합니다.",
        ),
        skills: ["JavaScript", "Three.js", "WebGL"],
        files: ["public/js/world.js"],
      },
      {
        title: l(
          "A playable simulation behind the court",
          "球場背後的可玩模擬",
          "球场背后的可玩模拟",
          "コートを支える試合シミュレーション",
          "코트 뒤의 플레이 시뮬레이션",
        ),
        description: l(
          "The court module handles possession, AI decisions, shooting, rebounds and match state. The 3D scene renders the result of the live game loop.",
          "球場模組處理控球、AI 決策、投籃、籃板和比賽狀態。3D 場景呈現遊戲迴圈即時計算的結果。",
          "球场模块处理控球、AI 决策、投篮、篮板和比赛状态。3D 场景呈现游戏循环实时计算的结果。",
          "コートのモジュールがボール保持、AI判断、シュート、リバウンド、試合状態を処理します。3D画面はゲームループの計算結果を描画します。",
          "코트 모듈이 볼 소유, AI 판단, 슛, 리바운드와 경기 상태를 처리합니다. 3D 장면은 게임 루프가 계산한 결과를 렌더링합니다.",
        ),
        skills: ["JavaScript", "AI", "Three.js"],
        files: ["public/js/court5.js"],
      },
      {
        title: l(
          "Save validation and recovery",
          "存檔驗證與復原",
          "存档验证与恢复",
          "セーブの検証と復元",
          "저장 검증과 복구",
        ),
        description: l(
          "Browser saves are parsed and validated before storage. Loading tries the primary save and then a backup; a damaged save does not overwrite a valid backup.",
          "瀏覽器存檔先經解析與驗證。載入時先讀主存檔，再嘗試備份；損壞資料不會蓋掉有效備份。",
          "浏览器存档先经过解析与验证。加载时先读主存档，再尝试备份；损坏数据不会覆盖有效备份。",
          "ブラウザーのセーブは保存前に解析・検証します。読み込みは本体、次にバックアップを試し、壊れたデータが正常なバックアップを上書きしないようにします。",
          "브라우저 저장 데이터는 저장 전에 해석하고 검증합니다. 불러올 때 기본 저장과 백업을 차례로 시도하며 손상된 데이터가 정상 백업을 덮어쓰지 않도록 합니다.",
        ),
        skills: ["JavaScript", "JSON", "localStorage"],
        files: ["public/js/storage.js"],
      },
    ],
  },
  bigdeal: {
    sourceRoot:
      "https://github.com/Tim321l/bigdeal/blob/8c14ffe9b77209464d929d6ead442aea5d09f1e3/",
    demos: [
      {
        video: "/videos/bigdeal-room-to-turn.webm",
        poster: "/images/projects/bigdeal-demo-poster.png",
        title: l(
          "Create a room, then play a turn",
          "由開房到完成回合",
          "从开房到完成回合",
          "ルーム作成からターン操作まで",
          "방 생성부터 턴 플레이까지",
        ),
        description: l(
          "A real local client and server: choose rules, add a bot, ready the room, draw and bank cards, then watch the bot’s turn and event log update.",
          "使用實際本機客戶端與伺服器：選玩法、加機械人、準備開局、抽牌和存入銀行，再看機械人回合與事件紀錄更新。",
          "使用实际本机客户端与服务器：选玩法、加机器人、准备开局、抽牌和存入银行，再看机器人回合与事件记录更新。",
          "実際のローカルクライアントとサーバーで、モード選択、ボット追加、準備、ドロー、銀行への入金を行い、ボットのターンとイベント記録の更新を見ます。",
          "실제 로컬 클라이언트와 서버에서 모드를 고르고 봇을 추가해 준비한 뒤 카드를 뽑아 은행에 넣습니다. 봇의 턴과 이벤트 기록이 갱신되는 모습도 보여 줍니다.",
        ),
      },
    ],
    evidence: [
      {
        title: l(
          "Game rules live on the server",
          "由伺服器處理遊戲規則",
          "由服务器处理游戏规则",
          "サーバーで処理するゲームルール",
          "서버가 처리하는 게임 규칙",
        ),
        description: l(
          "The React client submits actions to a typed game engine. Server handlers apply turn rules and broadcast the result, keeping room interaction separate from rule calculation.",
          "React 客戶端把動作交給有型別的遊戲引擎。伺服器套用回合規則並廣播結果，讓房間互動與規則計算各有分工。",
          "React 客户端把动作交给有类型的游戏引擎。服务器应用回合规则并广播结果，让房间互动与规则计算各有分工。",
          "Reactクライアントの操作を型付きゲームエンジンへ渡します。サーバーがターンのルールを適用して結果を配信し、ルーム操作とルール計算を分けます。",
          "React 클라이언트의 액션을 타입이 정의된 게임 엔진에 전달합니다. 서버가 턴 규칙을 적용하고 결과를 전송해 방 상호작용과 규칙 계산을 분리합니다.",
        ),
        skills: ["TypeScript", "React", "Socket.IO"],
        files: ["src/engine/stateManager.ts", "src/server/socketServer.ts"],
      },
      {
        title: l(
          "Rooms, reconnection and bot decisions",
          "房間、重新連線與機械人決策",
          "房间、重新连接与机器人决策",
          "ルーム、再接続、ボットの判断",
          "방, 재접속과 봇 판단",
        ),
        description: l(
          "Room management tracks seats, ready state and reconnection tokens. Bot decision logic supplies playable actions, so a human can demonstrate a match without gathering a full table.",
          "房間管理追蹤席位、準備狀態和重新連線代碼。機械人決策產生可用動作，讓玩家毋須湊齊真人也能進行對局。",
          "房间管理追踪座位、准备状态和重连令牌。机器人决策生成可用动作，让玩家无需凑齐真人也能进行对局。",
          "ルーム管理が席、準備状態、再接続トークンを追跡します。ボットは実行可能な操作を判断し、人を集めなくても対戦を試せます。",
          "방 관리가 좌석, 준비 상태와 재접속 토큰을 추적합니다. 봇이 가능한 액션을 판단하므로 사람을 모두 모으지 않아도 경기를 시연할 수 있습니다.",
        ),
        skills: ["Node.js", "Socket.IO", "TypeScript"],
        files: ["src/server/roomManager.ts", "src/engine/bot.ts"],
      },
      {
        title: l(
          "Each player gets the right information",
          "各玩家收到適當的資訊",
          "各玩家收到适当的信息",
          "プレイヤーごとに適切な情報を送る",
          "플레이어별 정보 구분",
        ),
        description: l(
          "The server builds a view for each player: their own hand is visible, other hands become counts, and deck order and the random seed are removed before sending.",
          "伺服器為每位玩家建立專屬視圖：顯示自己的手牌，把別人的手牌轉為數量，並在發送前移除牌堆順序和隨機種子。",
          "服务器为每位玩家建立专属视图：显示自己的手牌，把其他人的手牌转为数量，并在发送前移除牌堆顺序和随机种子。",
          "サーバーは各プレイヤー向けの状態を作ります。自分の手札だけを表示し、他の手札は枚数に変換。山札の順番と乱数シードは送信前に除きます。",
          "서버는 플레이어별 상태를 만듭니다. 자신의 손패만 공개하고 다른 손패는 장수로 바꾸며 덱 순서와 난수 시드는 전송 전에 제거합니다.",
        ),
        skills: ["TypeScript", "Client / server"],
        files: ["src/server/sanitize.ts"],
      },
    ],
  },
  "song-guess": {
    sourceRoot:
      "https://github.com/Tim321l/song-guess/blob/747759c81df68c2b33e5f62342d351bcc76ae9a3/",
    demos: [
      {
        video: "/videos/song-guess-settings.webm",
        poster: "/images/projects/song-guess-demo-poster.png",
        title: l(
          "Configure the music quiz",
          "設定音樂問答玩法",
          "设置音乐问答玩法",
          "音楽クイズを設定",
          "음악 퀴즈 설정",
        ),
        description: l(
          "A frontend settings recording: change the answer timer, switch from rounds to elimination hearts, choose a private room and open code entry. Account login and song rounds are outside this clip.",
          "前端設定錄影：改答題時間、把固定回合轉為淘汰生命、選私人房間，再開啟代碼輸入。這段示範只展示設定介面。",
          "前端设置录像：改答题时间、把固定回合改为淘汰生命、选私人房间，再打开代码输入。这段演示只展示设置界面。",
          "フロントエンドの設定動画です。回答時間、ラウンドから脱落ライフへの切り替え、非公開ルーム、コード入力を紹介します。設定画面のデモです。",
          "프런트엔드 설정 녹화입니다. 답변 시간, 라운드에서 탈락 하트로의 전환, 비공개 방과 코드 입력을 보여 줍니다. 설정 화면을 시연한 영상입니다.",
        ),
      },
    ],
    evidence: [
      {
        title: l(
          "An interface that follows the mode",
          "跟隨玩法改變的介面",
          "跟随玩法改变的界面",
          "モードに合わせて変わる画面",
          "모드에 따라 바뀌는 화면",
        ),
        description: l(
          "Changing the quiz mode updates the relevant controls: elimination exposes starting hearts, while other modes expose rounds. Lobby code sends the selected settings with the room request.",
          "問答模式改變時會更新相關控制：淘汰模式顯示起始生命，其餘模式顯示回合數。大廳程式把設定一起傳送至開房請求。",
          "问答模式改变时更新相关控件：淘汰模式显示起始生命，其余模式显示回合数。大厅代码把设置一起发送到开房请求。",
          "モード変更で必要な入力が切り替わります。脱落戦は開始ライフ、他のモードはラウンド数を表示し、ロビーのコードが選択した設定を作成リクエストに渡します。",
          "모드를 바꾸면 필요한 입력이 바뀝니다. 탈락 모드는 시작 하트, 다른 모드는 라운드를 표시하고 로비 코드가 선택한 설정을 방 생성 요청에 전달합니다.",
        ),
        skills: ["JavaScript", "DOM", "Socket.IO"],
        files: ["src/main.js", "src/client/lobby.js"],
      },
      {
        title: l(
          "Shared timing and round results",
          "共用答題計時與回合結果",
          "共享答题计时与回合结果",
          "回答時間と結果の共有",
          "답변 시간과 라운드 결과 공유",
        ),
        description: l(
          "The server waits for ready players, starts rounds, records answers with timestamps and broadcasts outcomes. These handlers show the coordination behind a multiplayer quiz.",
          "伺服器等待玩家準備、開始回合、記錄答案與時間，再廣播結果。這些處理程式展示多人問答背後的協調邏輯。",
          "服务器等待玩家准备、开始回合、记录答案和时间，再广播结果。这些处理程序展示多人问答背后的协调逻辑。",
          "サーバーは参加者の準備を待ち、ラウンドを開始し、回答と時刻を記録して結果を配信します。マルチプレイクイズの同期処理を示す実装です。",
          "서버는 참가자 준비를 기다린 뒤 라운드를 시작하고 답변과 시각을 기록해 결과를 전송합니다. 멀티플레이 퀴즈의 동기화 로직을 보여 줍니다.",
        ),
        skills: ["Node.js", "Socket.IO"],
        files: ["src/server/gameplay.js"],
      },
      {
        title: l(
          "Separate UI, rooms and stored data",
          "介面、房間與資料各有分工",
          "界面、房间与数据各有分工",
          "画面・ルーム・保存データを分離",
          "화면, 방과 저장 데이터 분리",
        ),
        description: l(
          "Client modules cover the lobby and gameplay UI; server modules handle room state and database models. The source includes MongoDB models for users, teams and playlists; those services need their own configuration.",
          "客戶端模組處理大廳與遊玩介面，伺服器模組處理房間狀態及資料模型。原始碼包含用戶、隊伍和播放清單的 MongoDB 模型，服務需另外設定。",
          "客户端模块处理大厅与游戏界面，服务器模块处理房间状态和数据模型。源代码包含用户、队伍和播放列表的 MongoDB 模型，服务需要另外配置。",
          "クライアントがロビーとゲーム画面、サーバーがルーム状態とデータモデルを担当します。ユーザー、チーム、プレイリストのMongoDBモデルがあり、利用には別途設定が必要です。",
          "클라이언트는 로비와 게임 화면, 서버는 방 상태와 데이터 모델을 담당합니다. 사용자, 팀과 플레이리스트의 MongoDB 모델이 있으며 서비스 사용에는 별도 설정이 필요합니다.",
        ),
        skills: ["JavaScript", "Express", "MongoDB"],
        files: ["src/client/gameplay.js", "src/server/models.js"],
      },
    ],
  },
};
