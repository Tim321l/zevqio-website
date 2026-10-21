import type { Locale } from "./locales";
import type { ProjectDetailCopy } from "./projects";

type Current = {
  summary: string;
  city: [string, string];
  life: [string, string];
  overview: string;
  gallery: [string, string][];
  badge: string;
};

const current: Record<Locale, Current> = {
  en: {
    summary:
      "The current Unity 6.3 single-player build combines full-court 5v5 basketball, career progression and a larger 3D city with drivable vehicles and walk-in shops.",
    city: [
      "A city you can move through",
      "Explore six procedural city styles, drive or cycle along the roads, enter shops and cafés, and manage housing, work and daily activities.",
    ],
    life: [
      "City life systems",
      "A character appearance studio, an editable home with Build and Buy mode, city emergencies, and vehicles that take damage and can be repaired.",
    ],
    overview:
      "The current local build adds denser city streets, vehicle and weather systems, and shops with walk-in interiors. These captures come from completed local QA runs on 11–16 October 2026. The city is still a procedural prototype, and the Unity edition remains single-player.",
    gallery: [
      [
        "Career hub and next match",
        "The current career screen shows player rating, stamina, skill points, record and cash, with routes into development and team management.",
      ],
      [
        "Procedural city streets",
        "A current city capture shows the expanded street grid and building exteriors. Six city styles share procedural systems rather than representing six exact real-world maps.",
      ],
      [
        "Walk in from the street",
        "The Fresh Corner storefront has a working street-facing entrance. A local QA run checks that the player can enter and leave on foot.",
      ],
      [
        "Inside a café",
        "The Daily Bites café interior shows seating, a counter and a staffed checkout in the current local build.",
      ],
      [
        "Character appearance studio",
        "A dedicated studio previews the 3D player model and adjusts height, build and supported colours. Trying on is free; an applied look carries into the city and matches.",
      ],
      [
        "Home Build and Buy mode",
        "A cutaway home editor with walls, doors, windows, floors and furniture categories. Room sizes are listed beside the plan.",
      ],
      [
        "City emergencies",
        "Police, fire and medical incidents appear on the street with an on-screen prompt and mini-map. Native QA checks each response type.",
      ],
      [
        "Vehicle damage",
        "Collisions leave visible damage on cars, which can be repaired later. The vehicle panel shows the car's condition.",
      ],
      [
        "Inside the pet shop",
        "The Paw House pet shop has its own layout, signs and adoption counter, one of several themed walk-in interiors.",
      ],
    ],
    badge: "UNITY 6.3 · CURRENT LOCAL BUILD",
  },
  "zh-hk": {
    summary:
      "目前的 Unity 6.3 單人版本結合全場 5 對 5、生涯進度，以及可駕車和步入商店的擴展 3D 城市。",
    city: [
      "可自由探索的城市",
      "探索六種程序化街區，沿路駕車或踩單車、走進商店與咖啡店，並管理住屋、工作及日常活動。",
    ],
    life: [
      "城市生活系統",
      "角色外觀工作室、可編輯住宅的建屋與購物模式、城市突發事件，以及會損壞並可維修的車輛。",
    ],
    overview:
      "目前本機版本加入更密集的街道、車輛和天氣系統，以及可步入的商店室內。以下畫面來自 2026 年 10 月 11 至 16 日完成的本機 QA 測試。城市仍是程序化原型，Unity 版仍為單人遊戲。",
    gallery: [
      [
        "生涯中心與下一場比賽",
        "目前的生涯畫面顯示球員能力、體力、技能點、戰績及現金，並可進入球員發展與球隊管理。",
      ],
      [
        "程序化城市街道",
        "目前版本的城市畫面展示擴展後的街道及建築外觀。六種城市風格共用程序系統，並非六張真實城市地圖。",
      ],
      [
        "由街道步入店舖",
        "Fresh Corner 店面設有面向街道的入口；本機 QA 已檢查角色可步行進出。",
      ],
      ["咖啡店室內", "Daily Bites 咖啡店展示座位、櫃檯和有店員的收銀處。"],
      [
        "角色外觀工作室",
        "獨立工作室預覽 3D 球員模型，可調整身高、體型及支援的顏色。試穿不扣款，確認套用後外觀會帶到城市與比賽。",
      ],
      [
        "住宅建屋與購物模式",
        "剖面式住宅編輯器，提供牆身、門窗、地板及家具分類，並在平面圖旁列出各房間面積。",
      ],
      [
        "城市突發事件",
        "警察、消防及醫療事件會在街上出現，配合畫面提示與小地圖。本機原生 QA 逐一檢查各種應對類型。",
      ],
      [
        "車輛損壞",
        "車輛碰撞後會出現可見損壞，之後可以維修；車輛面板會顯示車況。",
      ],
      [
        "寵物店室內",
        "Paw House 寵物店有獨立擺設、招牌及領養櫃位，是多個主題室內場景之一。",
      ],
    ],
    badge: "UNITY 6.3 · 目前本機版本",
  },
  "zh-cn": {
    summary:
      "当前 Unity 6.3 单人版本结合全场 5 对 5、生涯进度，以及可驾车和步入商店的扩展 3D 城市。",
    city: [
      "可自由探索的城市",
      "探索六种程序化街区，沿路驾车或骑车、走进商店与咖啡店，并管理住房、工作及日常活动。",
    ],
    life: [
      "城市生活系统",
      "角色外观工作室、可编辑住宅的建造与购买模式、城市突发事件，以及会损坏并可维修的车辆。",
    ],
    overview:
      "当前本地版本加入更密集的街道、车辆和天气系统，以及可步入的商店室内。以下画面来自 2026 年 10 月 11 至 16 日完成的本地 QA 测试。城市仍是程序化原型，Unity 版仍为单人游戏。",
    gallery: [
      [
        "生涯中心与下一场比赛",
        "当前生涯画面显示球员能力、体力、技能点、战绩和现金，并可进入球员发展与球队管理。",
      ],
      [
        "程序化城市街道",
        "当前版本的城市画面展示扩展后的街道和建筑外观。六种城市风格共用程序系统，并非六张真实城市地图。",
      ],
      [
        "从街道步入店铺",
        "Fresh Corner 店面设有面向街道的入口；本地 QA 已检查角色可以步行进出。",
      ],
      ["咖啡店室内", "Daily Bites 咖啡店展示座位、柜台和有店员的收银处。"],
      [
        "角色外观工作室",
        "独立工作室预览 3D 球员模型，可调整身高、体型及支持的颜色。试穿不扣款，确认应用后外观会带到城市与比赛。",
      ],
      [
        "住宅建造与购买模式",
        "剖面式住宅编辑器，提供墙体、门窗、地板及家具分类，并在平面图旁列出各房间面积。",
      ],
      [
        "城市突发事件",
        "警察、消防及医疗事件会在街上出现，配合画面提示与小地图。本地原生 QA 逐一检查各种应对类型。",
      ],
      [
        "车辆损坏",
        "车辆碰撞后会出现可见损坏，之后可以维修；车辆面板会显示车况。",
      ],
      [
        "宠物店室内",
        "Paw House 宠物店有独立陈设、招牌及领养柜台，是多个主题室内场景之一。",
      ],
    ],
    badge: "UNITY 6.3 · 当前本地版本",
  },
  ja: {
    summary:
      "現在のUnity 6.3シングルプレイヤー版は、フルコート5対5、キャリア進行、運転と店内への移動ができる拡張された3D都市を組み合わせています。",
    city: [
      "歩いて巡る街",
      "6種類の生成された街区で車や自転車を運転し、店舗やカフェに入り、住居・仕事・日常活動を管理できます。",
    ],
    life: [
      "街の生活システム",
      "外見スタジオ、住宅のビルド＆購入モード、街の突発イベント、損傷して修理できる車両。",
    ],
    overview:
      "現在のローカルビルドには、密度を増した街路、車両と天候の仕組み、歩いて入れる店舗が含まれます。画像は2026年10月11～16日のローカルQAで取得しました。都市は生成型のプロトタイプで、Unity版はシングルプレイヤーです。",
    gallery: [
      [
        "キャリア画面と次の試合",
        "現在の画面には能力、スタミナ、スキルポイント、戦績、所持金と、育成・チーム管理への入口が表示されます。",
      ],
      [
        "生成された都市の街路",
        "拡張された道路と建物を示します。6種類の都市スタイルは生成システムを共有し、実在都市の正確な再現ではありません。",
      ],
      [
        "通りから店舗へ",
        "Fresh Cornerには通りに面した入口があり、ローカルQAで徒歩での出入りを確認しました。",
      ],
      [
        "カフェの店内",
        "現在のDaily Bitesには座席、カウンター、店員のいる会計エリアがあります。",
      ],
      [
        "キャラクター外見スタジオ",
        "専用スタジオで 3D 選手モデルをプレビューし、身長・体型・対応する色を調整できます。試着は無料で、適用した外見は街と試合に反映されます。",
      ],
      [
        "住宅のビルド＆購入モード",
        "壁・ドア・窓・床・家具カテゴリーを備えた断面表示の住宅エディター。間取りの横に各部屋の面積が表示されます。",
      ],
      [
        "街の突発イベント",
        "警察・消防・救急のイベントが路上で発生し、画面の案内とミニマップで示されます。ネイティブ QA で各対応タイプを確認しています。",
      ],
      [
        "車両ダメージ",
        "衝突すると車に目に見える損傷が生じ、後で修理できます。車両パネルで状態を確認できます。",
      ],
      [
        "ペットショップの店内",
        "Paw House ペットショップには専用のレイアウト、看板、譲渡カウンターがあります。テーマ別に作られた店内の一つです。",
      ],
    ],
    badge: "UNITY 6.3 · 現在のローカルビルド",
  },
  ko: {
    summary:
      "현재 Unity 6.3 싱글플레이 빌드는 풀코트 5대5 경기, 커리어 진행, 운전과 매장 입장이 가능한 확장된 3D 도시를 결합합니다.",
    city: [
      "직접 돌아다니는 도시",
      "절차적으로 생성된 여섯 도시 스타일에서 자동차와 자전거를 타고 상점과 카페에 들어가며 주거, 일, 일상 활동을 관리합니다.",
    ],
    life: [
      "도시 생활 시스템",
      "외형 스튜디오, 주택 건축·구매 모드, 도시 돌발 상황, 손상되고 수리할 수 있는 차량.",
    ],
    overview:
      "현재 로컬 빌드에는 더 촘촘한 도로, 차량과 날씨 시스템, 걸어서 들어갈 수 있는 상점이 추가되었습니다. 화면은 2026년 10월 11~16일 완료된 로컬 QA에서 촬영했습니다. 도시는 절차적 프로토타입이며 Unity 버전은 싱글플레이입니다.",
    gallery: [
      [
        "커리어 허브와 다음 경기",
        "현재 커리어 화면은 선수 능력, 체력, 스킬 포인트, 전적과 자금을 보여 주고 성장 및 팀 관리로 이어집니다.",
      ],
      [
        "절차적으로 생성된 도시 거리",
        "확장된 도로와 건물 외관을 보여 줍니다. 여섯 도시 스타일은 생성 시스템을 공유하며 실제 도시를 정확히 재현한 것은 아닙니다.",
      ],
      [
        "거리에서 상점으로",
        "Fresh Corner에는 거리 쪽 출입구가 있습니다. 로컬 QA에서 걸어서 들어가고 나올 수 있음을 확인했습니다.",
      ],
      [
        "카페 내부",
        "현재 Daily Bites 카페의 좌석, 카운터와 직원이 있는 계산 구역을 보여 줍니다.",
      ],
      [
        "캐릭터 외형 스튜디오",
        "전용 스튜디오에서 3D 선수 모델을 미리 보고 키, 체형, 지원되는 색상을 조정합니다. 미리 입어 보기는 무료이며, 적용한 외형은 도시와 경기에 반영됩니다.",
      ],
      [
        "주택 건축·구매 모드",
        "벽, 문, 창문, 바닥, 가구 카테고리를 갖춘 단면 주택 편집기입니다. 평면도 옆에 방별 면적이 표시됩니다.",
      ],
      [
        "도시 돌발 상황",
        "경찰, 소방, 응급 상황이 거리에서 발생하며 화면 안내와 미니맵으로 표시됩니다. 네이티브 QA에서 대응 유형별로 확인했습니다.",
      ],
      [
        "차량 손상",
        "충돌하면 차량에 눈에 보이는 손상이 생기고 나중에 수리할 수 있습니다. 차량 패널에서 상태를 확인합니다.",
      ],
      [
        "펫숍 내부",
        "Paw House 펫숍에는 전용 배치, 간판, 입양 카운터가 있습니다. 테마별 실내 공간 중 하나입니다.",
      ],
    ],
    badge: "UNITY 6.3 · 현재 로컬 빌드",
  },
};

export function getCurrentUnityCopy(
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
  if (focus.length > 6) focus.splice(6, 1);
  focus.splice(2, 0, update.city, update.life);
  return {
    ...original,
    summary: update.summary,
    heroBadge: update.badge,
    overview: [
      ...original.overview.slice(0, 2),
      update.overview,
      ...original.overview.slice(2),
    ],
    focus,
    gallery: update.gallery,
  };
}
