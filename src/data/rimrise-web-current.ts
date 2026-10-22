import type { Locale } from "./locales";
import type { ProjectDetailCopy } from "./projects";

type Pair = [string, string];

type Current = {
  city: Pair;
  added: Pair[];
  focus: { cityLife: Pair; money: Pair; online: Pair };
  stageNote: string;
};

// Captures from the public build on 22 October 2026. The 5v5 match image and
// its caption still come from the earlier local build.
const current: Record<Locale, Current> = {
  en: {
    city: [
      "Police duty in the 3D city",
      "A new police officer in Taipei's Wanhua district takes a patrol dispatch; the objective panel, world marker and minimap route lead to the police station 322 m away.",
    ],
    added: [
      [
        "Choose a life, then a role",
        "The start screen offers free city life or a basketball career, eleven city roles from police officer and firefighter to delivery rider and pilot, and name, body type, position and background options.",
      ],
      [
        "City life menu",
        "Pay, rent and loans from friends; training, work vehicles, flights and pets; role changes, street incidents and gang districts; plus duties, meals, showers, rest and chats.",
      ],
      [
        "City map and navigation",
        "The full map lists districts, shops, the bank, training centre, airport and more with distances, and draws the route to the current duty.",
      ],
      [
        "Wealth hub",
        "Net worth, cash and weekly cash flow, a one-click diversified portfolio, financial news, a stock exchange, funds, businesses, property and car sponsorship.",
      ],
      [
        "Online street city",
        "A players-only online city with live player counts for Taipei, Hong Kong, Tokyo and New York, up to 16 players each, next to rooms for playing with friends.",
      ],
      [
        "League standings",
        "The high-school league table at the start of a new career, beside the player's team and contract details and the controls for the next game.",
      ],
    ],
    focus: {
      cityLife: [
        "3D city life and roles",
        "Explore city styles based on Taipei, Hong Kong and Tokyo as a citizen, police officer, firefighter, medic, delivery rider, taxi driver, pilot or another of eleven roles; take three-stop duties, drive, and manage a home, meals and rest.",
      ],
      money: [
        "Money and off-court choices",
        "A wealth hub with one-click diversified investing, financial news, a stock exchange with ETFs and options, funds, businesses, property and car sponsorship, alongside contracts and living costs.",
      ],
      online: [
        "Play with friends online",
        "A players-only online street city in Taipei, Hong Kong, Tokyo or New York for up to 16 players each, plus rooms, friends, chat, 3D duels and cooperative 5v5; availability depends on the game server.",
      ],
    },
    stageNote:
      "Work in progress. The newer screenshots were captured on 22 October 2026 from the public build at rimrise.onrender.com with a new, fictional player; the 5v5 match image comes from an earlier local build. Online features depend on the separate game server, and this Zevqio website does not host game rooms or player accounts.",
  },
  "zh-hk": {
    city: [
      "3D 城市中的警察勤務",
      "新任警察在台北萬華區接下巡邏派遣；任務面板、地上標記及小地圖路線指向 322 米外的警察局。",
    ],
    added: [
      [
        "先選人生，再選身份",
        "開始畫面可選自由城市人生或籃球生涯，十一種城市身份由警察、消防員到外送騎手及飛行員，並可設定名字、外型、位置及背景。",
      ],
      [
        "城市人生選單",
        "薪資、租金與好友借貸；培訓、工作車、飛行與寵物；轉換身份、街頭事件及幫派街區；另有接勤務、吃飯、洗澡、休息及聊天。",
      ],
      [
        "城市地圖與導航",
        "完整地圖列出各區、商店、銀行、訓練中心、機場等地點及距離，並畫出前往目前勤務的路線。",
      ],
      [
        "財富中心",
        "淨資產、現金及每週收支，一鍵分散投資、財經新聞、證券交易所、基金、事業、房市及房車贊助。",
      ],
      [
        "線上街頭城市",
        "只有真人玩家的線上城市，顯示台北、香港、東京及紐約的即時人數，每城最多 16 人，旁邊是和朋友一起玩的房間。",
      ],
      [
        "聯賽戰績榜",
        "新生涯開始時的高中聯賽排名，旁邊是球員的球隊及合約資料，以及下一場比賽的操作。",
      ],
    ],
    focus: {
      cityLife: [
        "3D 城市生活與身份",
        "以自由市民、警察、消防員、醫護、外送騎手、計程車司機、飛行員等十一種身份之一，探索參考台北、香港及東京的城市；接三站勤務、駕車，並打理住所、飲食及休息。",
      ],
      money: [
        "財務與場外選擇",
        "財富中心提供一鍵分散投資、財經新聞、含 ETF 及選擇權的證券交易所、基金、事業、房市及房車贊助，另有合約與生活開支。",
      ],
      online: [
        "與朋友線上同玩",
        "只有真人玩家的線上街頭城市，可選台北、香港、東京或紐約，每城最多 16 人；另有房間、好友、聊天、3D 單挑及合作 5v5，是否可用取決於遊戲伺服器。",
      ],
    },
    stageNote:
      "開發中。較新的截圖於 2026 年 10 月 22 日以新建的虛構球員，從公開版本 rimrise.onrender.com 擷取；5v5 比賽圖片來自較早的本機版本。線上功能取決於獨立的遊戲伺服器，Zevqio 網站不提供遊戲房間或玩家帳戶。",
  },
  "zh-cn": {
    city: [
      "3D 城市中的警察勤务",
      "新任警察在台北万华区接下巡逻派遣；任务面板、地面标记及小地图路线指向 322 米外的警察局。",
    ],
    added: [
      [
        "先选人生，再选身份",
        "开始画面可选自由城市人生或篮球生涯，十一种城市身份从警察、消防员到外卖骑手及飞行员，并可设置名字、外形、位置及背景。",
      ],
      [
        "城市人生菜单",
        "薪资、房租与好友借贷；培训、工作车、飞行与宠物；转换身份、街头事件及帮派街区；另有接勤务、吃饭、洗澡、休息及聊天。",
      ],
      [
        "城市地图与导航",
        "完整地图列出各区、商店、银行、训练中心、机场等地点及距离，并画出前往当前勤务的路线。",
      ],
      [
        "财富中心",
        "净资产、现金及每周收支，一键分散投资、财经新闻、证券交易所、基金、事业、房市及房车赞助。",
      ],
      [
        "线上街头城市",
        "只有真人玩家的线上城市，显示台北、香港、东京及纽约的实时人数，每城最多 16 人，旁边是和朋友一起玩的房间。",
      ],
      [
        "联赛战绩榜",
        "新生涯开始时的高中联赛排名，旁边是球员的球队及合同信息，以及下一场比赛的操作。",
      ],
    ],
    focus: {
      cityLife: [
        "3D 城市生活与身份",
        "以自由市民、警察、消防员、医护、外卖骑手、出租车司机、飞行员等十一种身份之一，探索参考台北、香港及东京的城市；接三站勤务、驾车，并打理住所、饮食及休息。",
      ],
      money: [
        "财务与场外选择",
        "财富中心提供一键分散投资、财经新闻、含 ETF 及期权的证券交易所、基金、事业、房市及房车赞助，另有合同与生活开支。",
      ],
      online: [
        "与朋友在线同玩",
        "只有真人玩家的线上街头城市，可选台北、香港、东京或纽约，每城最多 16 人；另有房间、好友、聊天、3D 单挑及合作 5v5，是否可用取决于游戏服务器。",
      ],
    },
    stageNote:
      "开发中。较新的截图于 2026 年 10 月 22 日以新建的虚构球员，从公开版本 rimrise.onrender.com 截取；5v5 比赛图片来自较早的本地版本。在线功能取决于独立的游戏服务器，Zevqio 网站不提供游戏房间或玩家账户。",
  },
  ja: {
    city: [
      "3D都市での警察勤務",
      "台北・萬華区で新人警察官がパトロール指令を受けます。目標パネル、地面のマーカー、ミニマップの経路が322m先の警察署へ案内します。",
    ],
    added: [
      [
        "人生と役割を選ぶ",
        "開始画面では自由な都市生活かバスケットボールのキャリアを選び、警察官・消防士から配達ライダー・パイロットまで11の役割と、名前、体型、ポジション、経歴を設定できます。",
      ],
      [
        "都市生活メニュー",
        "給料、家賃、友人からの借入、研修、仕事用の車、フライト、ペット、役割の変更、路上の出来事、ギャング地区、勤務、食事、シャワー、休憩、会話。",
      ],
      [
        "都市マップとナビ",
        "地区、店、銀行、トレーニングセンター、空港などを距離付きで一覧し、現在の勤務への経路を表示します。",
      ],
      [
        "資産ハブ",
        "純資産、現金、週ごとの収支、ワンクリック分散投資、経済ニュース、証券取引所、ファンド、事業、不動産、車のスポンサー。",
      ],
      [
        "オンライン街頭都市",
        "プレイヤーだけのオンライン都市。台北・香港・東京・ニューヨークの現在人数を表示し、各都市最大16人。友達と遊ぶルームも並びます。",
      ],
      [
        "リーグ順位表",
        "新しいキャリア開始時の高校リーグ順位。選手のチームと契約情報、次の試合への操作が並びます。",
      ],
    ],
    focus: {
      cityLife: [
        "3D都市生活と役割",
        "市民、警察官、消防士、救急、配達ライダー、タクシー運転手、パイロットなど11の役割から選び、台北・香港・東京をもとにした都市を探索。3か所を回る勤務、運転、住まい・食事・休息の管理。",
      ],
      money: [
        "お金とコート外の選択",
        "ワンクリック分散投資、経済ニュース、ETFやオプションを扱う証券取引所、ファンド、事業、不動産、車のスポンサーを備えた資産ハブ。契約や生活費も管理します。",
      ],
      online: [
        "オンラインで友達と遊ぶ",
        "台北・香港・東京・ニューヨークから選べるプレイヤーだけのオンライン街頭都市（各最大16人）に加え、ルーム、フレンド、チャット、3D 1on1、協力5v5。利用はゲームサーバーの状況によります。",
      ],
    },
    stageNote:
      "開発中です。新しいスクリーンショットは2026年10月22日に、新しく作った架空の選手で公開版 rimrise.onrender.com から撮影しました。5v5の試合画像は以前のローカルビルドのものです。オンライン機能は別のゲームサーバーに依存し、Zevqioのサイトはゲームルームやプレイヤーアカウントを提供しません。",
  },
  ko: {
    city: [
      "3D 도시의 경찰 근무",
      "타이베이 완화구의 신입 경찰이 순찰 지령을 받습니다. 목표 패널, 바닥 표시, 미니맵 경로가 322m 떨어진 경찰서로 안내합니다.",
    ],
    added: [
      [
        "삶을 고르고 역할을 고르기",
        "시작 화면에서 자유 도시 생활 또는 농구 커리어를 고르고, 경찰과 소방관부터 배달 라이더와 파일럿까지 11가지 역할과 이름, 체형, 포지션, 배경을 정합니다.",
      ],
      [
        "도시 생활 메뉴",
        "급여, 월세, 친구 대출, 훈련, 업무용 차량, 비행, 반려동물, 역할 변경, 거리 사건, 갱 구역, 근무, 식사, 샤워, 휴식, 대화.",
      ],
      [
        "도시 지도와 내비게이션",
        "구역, 상점, 은행, 훈련 센터, 공항 등을 거리와 함께 보여 주고 현재 근무까지의 경로를 그립니다.",
      ],
      [
        "자산 허브",
        "순자산, 현금, 주간 수지, 원클릭 분산 투자, 경제 뉴스, 증권 거래소, 펀드, 사업, 부동산, 차량 스폰서.",
      ],
      [
        "온라인 거리 도시",
        "실제 플레이어만 있는 온라인 도시로 타이베이, 홍콩, 도쿄, 뉴욕의 접속자 수를 보여 주며 도시마다 최대 16명입니다. 옆에는 친구와 함께하는 방이 있습니다.",
      ],
      [
        "리그 순위표",
        "새 커리어를 시작할 때의 고교 리그 순위와 선수의 팀·계약 정보, 다음 경기 조작이 함께 보입니다.",
      ],
    ],
    focus: {
      cityLife: [
        "3D 도시 생활과 역할",
        "시민, 경찰, 소방관, 의료진, 배달 라이더, 택시 기사, 파일럿 등 11가지 역할 중 하나로 타이베이·홍콩·도쿄를 바탕으로 한 도시를 탐험하고, 세 곳을 도는 근무와 운전, 집·식사·휴식을 관리합니다.",
      ],
      money: [
        "돈과 코트 밖의 선택",
        "원클릭 분산 투자, 경제 뉴스, ETF와 옵션을 다루는 증권 거래소, 펀드, 사업, 부동산, 차량 스폰서를 갖춘 자산 허브와 계약·생활비 관리.",
      ],
      online: [
        "친구와 온라인 플레이",
        "타이베이, 홍콩, 도쿄, 뉴욕 중 고르는 플레이어 전용 온라인 거리 도시(도시당 최대 16명)와 방, 친구, 채팅, 3D 1대1, 협동 5v5. 이용 여부는 게임 서버에 따라 다릅니다.",
      ],
    },
    stageNote:
      "개발 중입니다. 새 스크린샷은 2026년 10월 22일 새로 만든 가상의 선수로 공개 빌드 rimrise.onrender.com에서 촬영했습니다. 5v5 경기 이미지는 이전 로컬 빌드입니다. 온라인 기능은 별도 게임 서버에 의존하며 Zevqio 웹사이트는 게임 방이나 플레이어 계정을 제공하지 않습니다.",
  },
};

// English already has these three focus items and they are updated in place;
// the shorter translated lists in locales.ts gain them at the end.
const replacedTitles: Record<keyof Current["focus"], string> = {
  cityLife: "3D city life",
  money: "Money and off-court choices",
  online: "Play with friends online",
};

export function getCurrentWebCopy(
  locale: Locale,
  original: Omit<ProjectDetailCopy, "overview" | "focus" | "gallery"> & {
    overview: readonly string[];
    focus: ReadonlyArray<readonly [string, string]>;
    gallery: ReadonlyArray<readonly [string, string]>;
  },
): ProjectDetailCopy {
  const update = current[locale];
  const focus: [string, string][] = original.focus.map(
    ([title, description]) => [title, description],
  );
  for (const key of Object.keys(replacedTitles) as (keyof Current["focus"])[]) {
    const index = focus.findIndex(([title]) => title === replacedTitles[key]);
    if (index >= 0) focus[index] = update.focus[key];
    else focus.push(update.focus[key]);
  }
  const match = original.gallery[1];
  return {
    ...original,
    overview: [...original.overview],
    focus,
    gallery: [update.city, [match[0], match[1]], ...update.added],
    stageNote: update.stageNote,
  };
}
