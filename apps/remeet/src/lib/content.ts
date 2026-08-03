export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "widgets"
  | "pricing"
  | "faq"
  | "privacy"
  | "terms"
  | "updates";

export const icons: Record<string, string> = {
  countdown: `<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.4 1.9"/><path d="M9.2 2.8h5.6"/>`,
  album: `<rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.4"/><circle cx="8.6" cy="10.2" r="1.5"/><path d="M20.4 15.8l-4.9-4.9L10.2 16"/>`,
  wish: `<path d="M12 19.6s-6.9-4.3-6.9-8.8a3.9 3.9 0 016.9-2.5 3.9 3.9 0 016.9 2.5c0 4.5-6.9 8.8-6.9 8.8z"/>`,
  plans: `<path d="M12 3.4l8 4.4-8 4.4-8-4.4z"/><path d="M4 12.2l8 4.4 8-4.4"/><path d="M4 16.4l8 4.4 8-4.4"/>`,
  widget: `<rect x="3.4" y="3.4" width="7.2" height="7.2" rx="2.1"/><rect x="13.4" y="3.4" width="7.2" height="7.2" rx="2.1"/><rect x="3.4" y="13.4" width="7.2" height="7.2" rx="2.1"/><rect x="13.4" y="13.4" width="7.2" height="7.2" rx="2.1"/>`,
  globe: `<circle cx="12" cy="12" r="8.6"/><path d="M3.4 12h17.2"/><path d="M12 3.4c2.6 2.9 2.6 14.3 0 17.2-2.6-2.9-2.6-14.3 0-17.2z"/>`,
  calendar: `<rect x="3.4" y="5" width="17.2" height="15.6" rx="2.4"/><path d="M3.4 10h17.2"/><path d="M8.2 3.4v3.4M15.8 3.4v3.4"/><path d="M12 13.4v4M10 15.4h4"/>`,
  camera: `<path d="M4.2 8.2h2.9l1.5-2.1h6.8l1.5 2.1h2.9a1.2 1.2 0 011.2 1.2v8.5a1.2 1.2 0 01-1.2 1.2H4.2A1.2 1.2 0 013 17.9V9.4a1.2 1.2 0 011.2-1.2z"/><circle cx="12" cy="13.4" r="3.4"/>`,
  checklist: `<path d="M3.8 7.2l1.9 1.9 2.9-2.9"/><path d="M3.8 16.2l1.9 1.9 2.9-2.9"/><path d="M12.6 8h7.6"/><path d="M12.6 17h7.6"/>`,
  reunion: `<path d="M12 4.4l1.7 4.4 4.4 1.7-4.4 1.7L12 16.6l-1.7-4.4L5.9 10.5l4.4-1.7z"/><path d="M18.2 16.4l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>`,
  mail: `<rect x="3.2" y="5.2" width="17.6" height="13.6" rx="2.4"/><path d="M3.8 6.6l8.2 5.8 8.2-5.8"/>`,
  bulb: `<path d="M9.6 17.2h4.8"/><path d="M10.2 20h3.6"/><path d="M12 3.2a5.9 5.9 0 00-3.4 10.7c.4.3.5.7.5 1.1h5.8c0-.4.1-.8.5-1.1A5.9 5.9 0 0012 3.2z"/>`,
  export: `<path d="M12 3.8v10"/><path d="M8.4 10.2l3.6 3.6 3.6-3.6"/><path d="M4.4 15.8v3a1.6 1.6 0 001.6 1.6h12a1.6 1.6 0 001.6-1.6v-3"/>`,
  bell: `<path d="M12 3.4a5.4 5.4 0 00-5.4 5.4c0 4.4-1.6 5.8-1.6 5.8h14s-1.6-1.4-1.6-5.8A5.4 5.4 0 0012 3.4z"/><path d="M10.3 18a1.9 1.9 0 003.4 0"/>`,
  map: `<path d="M9 4.4l-5.2 2.1v12.9L9 17.3l6 2.3 5.2-2.1V4.6L15 6.7z"/><path d="M9 4.4v12.9M15 6.7v12.9"/>`,
  phone: `<rect x="7" y="2.8" width="10" height="18.4" rx="2.2"/><path d="M10 18.6h4"/>`,
  shield: `<path d="M12 3.2l7.2 2.8v5.6c0 4.4-2.9 8.4-7.2 9.6-4.3-1.2-7.2-5.2-7.2-9.6V6z"/>`,
  trash: `<path d="M5 7.2h14"/><path d="M9.2 7.2V5.4h5.6v1.8"/><path d="M7.4 7.2l.8 12h7.6l.8-12"/>`,
  edit: `<path d="M4.4 16.4l.8-3.2L15.2 3.2l3.2 3.2L8.2 16.6z"/><path d="M13.4 5l3.2 3.2"/>`,
  lock: `<rect x="5.2" y="10.2" width="13.6" height="10" rx="2"/><path d="M8.2 10.2V7.6a3.8 3.8 0 017.6 0v2.6"/>`,
};

export function pick<T>(ja: boolean, pair: [T, T]): T {
  return pair[ja ? 0 : 1];
}

export const titleMap: Record<Page, [string, string]> = {
  features: ["Remeetの機能", "Remeet features"],
  "how-to": ["使い方", "How to use"],
  screenshots: ["スクリーンショット", "Screenshots"],
  widgets: ["ウィジェットでもいつでも確認", "Stay close with widgets"],
  pricing: ["料金", "Pricing"],
  faq: ["よくある質問", "Frequently asked questions"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Service"],
  updates: ["お知らせ", "News"],
};

export const subtitleMap: Partial<Record<Page, [string, string]>> = {
  features: [
    "必要な機能を、シンプルに。\n待つ時間を、そっと支えるために。",
    "The features you need, kept simple —\nquietly supporting the time you wait.",
  ],
  "how-to": [
    "初回設定からデータ管理まで、\n画面の流れに沿ってご案内します。",
    "From first setup to data management,\nfollow the flow of the real app screens.",
  ],
  screenshots: ["美しく、シンプルで、使いやすいデザイン。", "Beautiful, simple, and easy to use."],
  widgets: [
    "ホーム画面やロック画面から、再会までの時間をすぐにチェック。",
    "Check your countdown from the Home Screen or Lock Screen.",
  ],
  pricing: ["Remeetは無料で利用できます。", "Remeet is free to use."],
  faq: [
    "よくいただくご質問をまとめました。\n解決しないときは、お気軽にご連絡ください。",
    "Answers to the questions we hear most.\nIf something is still unclear, just reach out.",
  ],
  updates: ["Remeetからのお知らせ。", "News from Remeet."],
};

export const pageDescriptions: Partial<Record<Page, [string, string]>> = {
  features: [
    "カウントダウン、ルートイラスト、待っている間の記録、ウィジェットなど、Remeetの主な機能をご紹介します。",
    "Explore Remeet’s countdown, route illustration, waiting memories, widgets, and other core features.",
  ],
  "how-to": [
    "再会予定の作成からウィジェット、データ概要の書き出しまで、Remeetの使い方を画面付きで解説します。",
    "Learn how to create reunions, keep records, add widgets, and export a non-restorable data summary.",
  ],
  screenshots: [
    "Remeetのホーム、記録、ウィジェットなどの画面イメージです。",
    "Screen previews of Remeet’s home, records, and widgets.",
  ],
  widgets: [
    "ホーム画面とロック画面のウィジェットで、再会までの日数をいつでも確認できます。",
    "See your reunion countdown from Home Screen and Lock Screen widgets.",
  ],
  pricing: [
    "Remeetは無料で利用できます。一部画面に広告が表示されます。有料プランや広告削除は提供していません。",
    "Remeet is free to use. Ads may appear on some screens. Paid plans and ad removal are not available.",
  ],
  faq: [
    "アカウント不要、端末内保存、広告、ウィジェット、機種変更など、Remeetのよくある質問。",
    "FAQ about Remeet: no account, on-device storage, ads, widgets, device changes, and more.",
  ],
  privacy: [
    "Remeetのプライバシーポリシー。端末内保存、Google Mobile Ads、外部通信について説明します。",
    "Remeet Privacy Policy covering on-device storage, Google Mobile Ads, and external communications.",
  ],
  terms: [
    "Remeetの利用規約。無料提供、広告表示、端末内データの管理について定めます。",
    "Remeet Terms of Service covering free use, advertising, and on-device data responsibility.",
  ],
  updates: [
    "Remeet公式ブランドサイト公開のお知らせ。",
    "News about the official Remeet brand site launch.",
  ],
};

export function features(ja: boolean) {
  return ja
    ? ([
        [
          "countdown",
          "再会までのカウントダウン",
          "再会の日までを、日数と進捗で見守ります。少しずつ近づいていく感覚が、待つ時間を支えます。",
        ],
        [
          "map",
          "二つの場所をつなぐルートイラスト",
          "ふたりの場所をつなぐルートイラストで、離れている距離をやさしく表現します。正確な地図やリアルタイムの航路ではありません。",
        ],
        [
          "album",
          "待っている間の記録",
          "写真とメモで、離れている日々を自分の記録として残せます。1件につき写真は1枚です。",
        ],
        [
          "wish",
          "会ったらやりたいことリスト",
          "一緒にしたいことをリストに残せます。データ共有ではなく、自分の端末での記録です。1項目につき写真は1枚です。",
        ],
        [
          "plans",
          "複数の再会予定",
          "旅行や帰省など、いくつもの予定を並行して管理し、表示する予定を切り替えられます。",
        ],
        [
          "reunion",
          "再会当日の記録",
          "再会の日に写真と振り返りを残し、予定が変わったときは日時を変更できます。",
        ],
        [
          "album",
          "アルバム",
          "完了した再会をアルバムとして見返せます。同じ相手の再会をまとめることもできます。",
        ],
        [
          "widget",
          "ホーム画面・ロック画面ウィジェット",
          "アプリを開かずに、残りの日数や進捗を確認できます。",
        ],
        ["bell", "通知", "1週間前、前日、当日の朝、再会時刻の4種類を個別にオン／オフできます。"],
        [
          "calendar",
          "カレンダーへの追加",
          "設定から、選択中の再会予定を端末のカレンダーへ追加できます。",
        ],
        [
          "globe",
          "6言語に対応",
          "日本語・英語・フランス語・韓国語・スペイン語・中国語で利用できます。",
        ],
        [
          "phone",
          "端末内保存",
          "予定・写真・メモは原則として端末内に保存されます。iCloud同期はありません。",
        ],
        ["shield", "アカウント登録不要", "登録やログインなしですぐに使い始められます。"],
      ] as const)
    : ([
        [
          "countdown",
          "Reunion countdown",
          "Watch the days and progress until you meet again. Feeling it draw closer carries the waiting.",
        ],
        [
          "map",
          "Route illustration between two places",
          "A gentle route illustration connects both places and softens the distance. It is not a live map or real-time flight path.",
        ],
        [
          "album",
          "Memories while apart",
          "Keep photos and notes from the days in between as your own record. One photo per entry.",
        ],
        [
          "wish",
          "Things to do together",
          "List what you want to do when you meet. This stays on your device — it is not a shared list between phones. One photo per wish.",
        ],
        [
          "plans",
          "Multiple reunion plans",
          "Trips, visits and more can run side by side. Switch which plan is shown anytime.",
        ],
        [
          "reunion",
          "Reunion-day capture",
          "Save a photo and reflection on the day, or postpone if plans change.",
        ],
        [
          "album",
          "Albums",
          "Revisit completed reunions in albums. You can group reunions with the same person.",
        ],
        [
          "widget",
          "Home and Lock Screen widgets",
          "See days left and progress without opening the app.",
        ],
        [
          "bell",
          "Notifications",
          "Toggle one week before, the day before, the morning of, and at reunion time independently.",
        ],
        [
          "calendar",
          "Add to Calendar",
          "From Settings, add the selected reunion to your device calendar.",
        ],
        [
          "globe",
          "Six languages",
          "Available in Japanese, English, French, Korean, Spanish and Chinese.",
        ],
        [
          "phone",
          "On-device storage",
          "Plans, photos and notes stay on your device. There is no iCloud sync in v1.0.0.",
        ],
        ["shield", "No account required", "Start immediately — no sign-up, no login."],
      ] as const);
}

export function steps(ja: boolean) {
  return ja
    ? ([
        ["calendar", "再会予定を作る", "再会の日付と、ふたりがいる場所を設定します。"],
        ["camera", "待っている日々を記録する", "写真やメモで、離れている時間を残します。"],
        ["checklist", "会ったらやりたいことを残す", "再会の日にしたいことを、ひとつずつリストに。"],
        ["reunion", "再会の日を記録してアルバムに残す", "会えた日の写真と振り返りをアルバムへ。"],
      ] as const)
    : ([
        ["calendar", "Create a reunion", "Set the date and where each of you will be."],
        ["camera", "Record the waiting days", "Keep photos and notes from the time apart."],
        ["checklist", "Save things to do", "List what you want to do when you meet."],
        [
          "reunion",
          "Capture the day in an album",
          "Save a photo and reflection from the day you meet.",
        ],
      ] as const);
}

export type Guide = {
  icon: string;
  title: string;
  image: string;
  imageAlt: string;
  steps: string[];
  note?: string;
};

export function guides(ja: boolean): Guide[] {
  return ja
    ? [
        {
          icon: "phone",
          title: "初回設定",
          image: "/assets/couple.png",
          imageAlt: "Remeetの初回オンボーディング画面",
          steps: [
            "アプリを開くと、はじめに世界観の紹介が表示されます。",
            "続いて、最初の再会予定（名前・場所・日付）を入力します。",
            "保存するとホーム画面へ進み、カウントダウンが始まります。",
          ],
          note: "アカウント登録やログインは必要ありません。",
        },
        {
          icon: "calendar",
          title: "再会予定の作成",
          image: "/assets/feature-countdown.png",
          imageAlt: "再会予定作成後のホーム画面",
          steps: [
            "ホーム上部の予定名をタップします。",
            "「新しい再会をつくる」を選びます。",
            "相手の名前、場所、再会日時を入力して保存します。",
          ],
        },
        {
          icon: "edit",
          title: "再会予定の編集",
          image: "/assets/feature-map.png",
          imageAlt: "再会予定とルートイラストが表示されたホーム画面",
          steps: [
            "ホームの編集ボタンを開きます。",
            "日付・時刻・場所・名前などを変更します。",
            "保存すると、通知とウィジェットにも反映されます。",
          ],
        },
        {
          icon: "camera",
          title: "待っている間の記録",
          image: "/assets/feature-memory.png",
          imageAlt: "待っている間の記録画面",
          steps: [
            "ホームから「写真やメモを追加」を開きます。",
            "写真を選び、メモを添えて保存します。",
            "1件につき写真は1枚です。あとから編集・削除できます。",
          ],
        },
        {
          icon: "checklist",
          title: "会ったらやりたいことの追加",
          image: "/assets/feature-list.png",
          imageAlt: "会ったらやりたいことリスト画面",
          steps: [
            "ホームから「やりたいことを追加」を開きます。",
            "タイトル、メモ、写真を追加して保存します。",
            "再会の日には、叶えた項目を選んで記録に残せます。",
          ],
        },
        {
          icon: "reunion",
          title: "再会当日の記録",
          image: "/assets/feature-album.png",
          imageAlt: "再会記録とアルバムの画面",
          steps: [
            "再会時刻になると、再会画面へ切り替わります。",
            "写真と振り返りを残して完了します。",
            "予定が変わった場合は、日時を変更して延期できます。",
          ],
        },
        {
          icon: "album",
          title: "アルバムの確認",
          image: "/assets/feature-album.png",
          imageAlt: "再会アルバム一覧",
          steps: [
            "下部の「アルバム」タブを開きます。",
            "完了した再会を選ぶと、写真と振り返りを見返せます。",
            "同じ相手の再会をひとつのアルバムにまとめることもできます。",
          ],
        },
        {
          icon: "widget",
          title: "ホーム画面ウィジェットの追加",
          image: "/assets/feature-widget.png",
          imageAlt: "ホーム画面に置かれたRemeetウィジェット",
          steps: [
            "ホーム画面の空いている部分を長押しします。",
            "「編集」から「ウィジェットを追加」を選びます。",
            "Remeetを検索して、好きなサイズを配置してください。",
          ],
        },
        {
          icon: "lock",
          title: "ロック画面ウィジェットの追加",
          image: "/assets/widget-showcase.png",
          imageAlt: "ロック画面向けRemeetウィジェット",
          steps: [
            "ロック画面を長押ししてカスタマイズを開きます。",
            "ウィジェット領域をタップし、Remeetを選びます。",
            "インライン・円形・長方形など、好きなスタイルを配置します。",
          ],
        },
        {
          icon: "bell",
          title: "通知設定",
          image: "/assets/app-phone.png",
          imageAlt: "Remeetホーム画面（通知設定は設定タブから）",
          steps: [
            "下部の「設定」タブを開きます。",
            "「通知」を開きます。",
            "1週間前・前日・当日の朝・再会時刻を、それぞれオン／オフできます。",
          ],
          note: "通知の許可は、最初の再会を保存したあとに求められます。",
        },
        {
          icon: "calendar",
          title: "カレンダーへの追加",
          image: "/assets/app-phone.png",
          imageAlt: "Remeetホーム画面（カレンダー追加は設定から）",
          steps: [
            "「設定」を開きます。",
            "「カレンダー」をタップします。",
            "確認のあと、選択中の再会予定を端末のカレンダーへ追加できます。",
          ],
        },
        {
          icon: "globe",
          title: "表示言語の変更",
          image: "/assets/app-phone.png",
          imageAlt: "Remeetの画面（言語はiOS設定から変更）",
          steps: [
            "iOSの「設定」アプリを開きます。",
            "「Remeet」を選びます。",
            "「言語」から表示言語を変更します。",
          ],
        },
        {
          icon: "export",
          title: "データ概要の書き出し",
          image: "/assets/app-phone.png",
          imageAlt: "Remeetの設定関連画面イメージ",
          steps: [
            "「設定」→「データ管理」を開きます。",
            "「データ概要を書き出す」を選びます。",
            "登録名と予定・再会済み件数などの概要をJSONで保存できます。",
          ],
          note: "書き出されるファイルはデータ概要です。写真やメモの完全な内容は含まれず、アプリへ復元することはできません。",
        },
        {
          icon: "trash",
          title: "すべてのデータの削除",
          image: "/assets/app-phone.png",
          imageAlt: "Remeetのデータ管理画面イメージ",
          steps: [
            "「設定」→「データ管理」を開きます。",
            "「すべてのデータを削除」を選びます。",
            "確認のあと、予定・記録・アルバムを含む端末内のRemeetデータが削除されます。",
          ],
          note: "削除後は元に戻せません。大切な写真が写真アプリにも残っていることを確認してください。",
        },
      ]
    : [
        {
          icon: "phone",
          title: "First setup",
          image: "/assets/couple.png",
          imageAlt: "Remeet first-run onboarding screen",
          steps: [
            "Open the app to see a short introduction.",
            "Create your first reunion with names, places and a date.",
            "After you save, Home opens and the countdown begins.",
          ],
          note: "No account or sign-in is required.",
        },
        {
          icon: "calendar",
          title: "Create a reunion",
          image: "/assets/feature-countdown.png",
          imageAlt: "Home screen after creating a reunion",
          steps: [
            "Tap the plan name at the top of Home.",
            "Choose “Create a new reunion”.",
            "Enter names, places and the reunion date, then save.",
          ],
        },
        {
          icon: "edit",
          title: "Edit a reunion",
          image: "/assets/feature-map.png",
          imageAlt: "Home screen with reunion details and route illustration",
          steps: [
            "Open the edit control on Home.",
            "Change the date, time, places or names.",
            "Saving also updates notifications and widgets.",
          ],
        },
        {
          icon: "camera",
          title: "Memories while apart",
          image: "/assets/feature-memory.png",
          imageAlt: "Waiting memories screen",
          steps: [
            "From Home, open “Add photo or note”.",
            "Choose a photo, add a note, and save.",
            "One photo per entry. You can edit or delete later.",
          ],
        },
        {
          icon: "checklist",
          title: "Add things to do",
          image: "/assets/feature-list.png",
          imageAlt: "Wish list screen",
          steps: [
            "From Home, open “Add something to do”.",
            "Add a title, optional note and photo, then save.",
            "On reunion day you can mark wishes as completed.",
          ],
        },
        {
          icon: "reunion",
          title: "Capture reunion day",
          image: "/assets/feature-album.png",
          imageAlt: "Reunion capture and album screen",
          steps: [
            "When reunion time arrives, the reunion screen opens.",
            "Save a photo and reflection to finish.",
            "If plans change, you can postpone the date and time.",
          ],
        },
        {
          icon: "album",
          title: "Browse albums",
          image: "/assets/feature-album.png",
          imageAlt: "Reunion album list",
          steps: [
            "Open the “Album” tab.",
            "Select a completed reunion to revisit its photo and reflection.",
            "You can group reunions with the same person into one album.",
          ],
        },
        {
          icon: "widget",
          title: "Add a Home Screen widget",
          image: "/assets/feature-widget.png",
          imageAlt: "Remeet widgets on the Home Screen",
          steps: [
            "Touch and hold an empty area of the Home Screen.",
            "Choose Edit, then Add Widget.",
            "Search for Remeet and place the size you like.",
          ],
        },
        {
          icon: "lock",
          title: "Add a Lock Screen widget",
          image: "/assets/widget-showcase.png",
          imageAlt: "Remeet Lock Screen widget styles",
          steps: [
            "Touch and hold the Lock Screen to customize it.",
            "Tap a widget area and choose Remeet.",
            "Place an inline, circular or rectangular style.",
          ],
        },
        {
          icon: "bell",
          title: "Notification settings",
          image: "/assets/app-phone.png",
          imageAlt: "Remeet home screen; notifications live in Settings",
          steps: [
            "Open the Settings tab.",
            "Open Notifications.",
            "Toggle one week before, the day before, the morning of, and at reunion time independently.",
          ],
          note: "Permission is requested after you save your first reunion.",
        },
        {
          icon: "calendar",
          title: "Add to Calendar",
          image: "/assets/app-phone.png",
          imageAlt: "Remeet home screen; calendar export lives in Settings",
          steps: [
            "Open Settings.",
            "Tap Calendar.",
            "After confirmation, the selected reunion is added to your device calendar.",
          ],
        },
        {
          icon: "globe",
          title: "Change the language",
          image: "/assets/app-phone.png",
          imageAlt: "Remeet screen; language is changed in iOS Settings",
          steps: [
            "Open the iOS Settings app.",
            "Select Remeet.",
            "Change the language under Language.",
          ],
        },
        {
          icon: "export",
          title: "Export a data summary",
          image: "/assets/app-phone.png",
          imageAlt: "Remeet settings imagery",
          steps: [
            "Open Settings → Data management.",
            "Choose Export data summary.",
            "Save a JSON summary of names and counts.",
          ],
          note: "The file is a data summary only. Photos and full notes are not included, and it cannot be restored into the app.",
        },
        {
          icon: "trash",
          title: "Delete all data",
          image: "/assets/app-phone.png",
          imageAlt: "Remeet data management imagery",
          steps: [
            "Open Settings → Data management.",
            "Choose Delete all data.",
            "After confirmation, plans, records and albums on this device are removed.",
          ],
          note: "This cannot be undone. Make sure important photos also live in the Photos app.",
        },
      ];
}

export function faqs(ja: boolean) {
  return ja
    ? ([
        [
          "start",
          "Remeetはどんなアプリですか？",
          "大切な人と再会する日までをカウントダウンし、その間の写真や気持ち、会ったらやりたいことを自分の端末に残すアプリです。カップルだけでなく、帰省、留学、家族や友人との再会にも使えます。",
        ],
        [
          "start",
          "アカウント登録は必要ですか？",
          "必要ありません。登録やログインなしですぐに使えます。",
        ],
        [
          "start",
          "無料で利用できますか？",
          "はい。基本機能は無料です。一部の画面には広告が表示されます。現在、有料プランや広告削除機能は提供していません。",
        ],
        [
          "start",
          "対応している端末とiOSは？",
          "iPhone・iOS 26以降に対応しています。現在のバージョンはiPhone向けで、iPadに最適化されたレイアウトは今後対応予定です。",
        ],
        [
          "start",
          "遠距離カップル以外でも利用できますか？",
          "はい。帰省、留学、家族や友人との再会、旅行やイベントの待ち時間など、大切な人と次に会う日を楽しみに待つ用途全般で使えます。",
        ],
        [
          "feature",
          "二人の端末でデータを共有できますか？",
          "v1.0.0ではできません。予定と記録は自分の端末だけで管理します。相手のiPhoneへの同期、招待、Share Passなどの共有機能はありません。",
        ],
        [
          "feature",
          "ウィジェットはどこで使えますか？",
          "ホーム画面とロック画面の両方に対応しています。サイズに応じて、日数・進捗・経路・最近の記録・やりたいことなどを表示します。",
        ],
        [
          "feature",
          "再会予定は複数作れますか？",
          "作れます。ホーム上部の予定名から新しい再会を追加し、表示する予定を切り替えられます。",
        ],
        [
          "feature",
          "通知のタイミングを変更できますか？",
          "1週間前、前日、当日の朝、再会時刻の4種類を、設定の「通知」からそれぞれ個別にオン・オフできます。",
        ],
        [
          "feature",
          "写真は何枚保存できますか？",
          "現在のバージョンでは、やりたいこと、待っている間の記録、再会記録にそれぞれ1枚の写真を保存できます。",
        ],
        [
          "feature",
          "地図は実際の地図ですか？",
          "いいえ。ホームのルートは、二地点をつなぐ装飾用のイラストです。正確な地図タイルやリアルタイムの航路ではありません。地名の検索にはAppleのジオコーディングを使います。",
        ],
        [
          "feature",
          "広告は表示されますか？",
          "はい。ホームや、件数が増えたやりたいこと・記録の一覧など、一部の画面にネイティブ広告が表示されます。アルバム画面には広告を出しません。",
        ],
        [
          "data",
          "データはどこに保存されますか？",
          "予定・写真・メモはこの端末内に保存されます。v1.0.0ではiCloudや外部サーバーへ同期しません。",
        ],
        [
          "data",
          "機種変更時にデータを引き継げますか？",
          "現在のバージョンは、機種変更時のデータ移行や復元には対応していません。\n\n設定から書き出せるJSONファイルは、登録名や記録件数を確認するための概要データです。写真、メモ、各記録の完全な内容は含まれず、アプリへ復元することもできません。",
        ],
        [
          "data",
          "JSONファイルはバックアップですか？",
          "いいえ。書き出されるJSONファイルは、保存されているデータの概要を確認するためのファイルです。復元用バックアップではありません。",
        ],
        [
          "data",
          "JSONからアプリへ復元できますか？",
          "できません。データ概要の書き出しのみで、読み込み・復元機能はありません。",
        ],
        [
          "data",
          "アプリを削除するとデータはどうなりますか？",
          "端末内に保存されたRemeetのデータは削除され、運営者が復旧することはできません。大切な写真は写真アプリにも残しておいてください。",
        ],
        [
          "data",
          "運営者は写真や記録を見ることができますか？",
          "通常のアプリ利用だけでは、運営者が再会予定・写真・メモなどの記録内容を閲覧することはできません。問い合わせフォームを送信したときのみ、入力した内容と技術情報が送られます。",
        ],
        [
          "data",
          "すべてのデータを削除できますか？",
          "はい。「設定 → データ管理 → すべてのデータを削除」から削除できます。削除後は元に戻せません。",
        ],
        [
          "other",
          "オフラインでも利用できますか？",
          "記録の閲覧や編集はオフラインでも利用できます。ただし次の場合は通信が必要になることがあります。天気情報、地名検索、現在地の地名変換、広告取得、最新の法務文書表示、問い合わせ送信。",
        ],
        [
          "other",
          "表示言語を変更できますか？",
          "はい。iOSの設定アプリからRemeetの言語を変更できます。日本語・英語・フランス語・韓国語・スペイン語・中国語に対応しています。",
        ],
        [
          "other",
          "問い合わせ時に何が送信されますか？",
          "フォームを明示的に送信した場合のみ、名前（任意）、メールアドレス、カテゴリ、本文、アプリバージョン、ビルド番号、iOSバージョン、表示言語、問い合わせ識別子、送信日時などが送られることがあります。写真や再会予定の内容は自動送信されません。",
        ],
        [
          "other",
          "広告に関する同意を変更できますか？",
          "はい。地域によって表示される同意画面や、iOSのトラッキング許可から変更できます。許可しなくてもアプリの基本機能は利用でき、広告は表示されることがありますが、他社アプリやWebサイトをまたいだ情報を使ったパーソナライズは行われません。",
        ],
      ] as const)
    : ([
        [
          "start",
          "What is Remeet?",
          "An app that counts down to the day you meet someone important again, and keeps photos, thoughts and things you want to do on your own device. It works for couples, family visits, study abroad, friends and more.",
        ],
        ["start", "Do I need an account?", "No. You can start immediately — no sign-up, no login."],
        [
          "start",
          "Is it free?",
          "Yes. Core features are free. Ads may appear on some screens. Paid plans and ad removal are not currently available.",
        ],
        [
          "start",
          "Which devices and iOS versions are supported?",
          "Requires an iPhone running iOS 26 or later. The current version is designed for iPhone; an iPad-optimized layout is planned later.",
        ],
        [
          "start",
          "Can I use it if I’m not in a long-distance relationship?",
          "Yes. Homecomings, study abroad, family or friends, trips and events — anything where you’re waiting to meet someone important.",
        ],
        [
          "feature",
          "Can two phones share the same data?",
          "Not in v1.0.0. Plans and records stay on your device only. There is no two-device sync, invitation flow or Share Pass.",
        ],
        [
          "feature",
          "Where do widgets work?",
          "Both the Home Screen and Lock Screen. Depending on size, they can show days left, progress, the route, recent records and wishes.",
        ],
        [
          "feature",
          "Can I create multiple reunions?",
          "Yes. From the plan name on Home you can add another reunion and switch which one is shown.",
        ],
        [
          "feature",
          "Can I change notification timing?",
          "You can independently toggle one week before, the day before, the morning of, and at reunion time in Settings → Notifications.",
        ],
        [
          "feature",
          "How many photos can I save?",
          "In the current version, wishes, waiting memories and completed reunions each store one photo.",
        ],
        [
          "feature",
          "Is the map a real map?",
          "No. The home route is a decorative illustration between two points, not live map tiles or a real-time flight path. Place search uses Apple geocoding.",
        ],
        [
          "feature",
          "Are there ads?",
          "Yes. Native ads may appear on Home and on longer wish or memory lists. The album screen stays free of ads.",
        ],
        [
          "data",
          "Where is my data stored?",
          "Plans, photos and notes stay on this device. v1.0.0 does not sync to iCloud or a Remeet server.",
        ],
        [
          "data",
          "Can I move data when I change phones?",
          "The current version does not support migration or restore when you change phones.\n\nThe JSON file from Settings is only a summary of names and counts. Photos, notes and full records are not included, and it cannot be restored into the app.",
        ],
        [
          "data",
          "Is the JSON file a backup?",
          "No. The exported JSON file is a summary for checking stored data. It is not a restorable backup.",
        ],
        [
          "data",
          "Can I restore from JSON into the app?",
          "No. There is only a data-summary export — no import or restore.",
        ],
        [
          "data",
          "What happens if I delete the app?",
          "Remeet data on the device is deleted and the operator cannot recover it. Keep important photos in the Photos app too.",
        ],
        [
          "data",
          "Can the operator see my photos and records?",
          "During normal use, the operator cannot view your reunion plans, photos or notes. Only when you submit the support form are your typed answers and technical details sent.",
        ],
        [
          "data",
          "Can I delete all data?",
          "Yes, from Settings → Data management → Delete all data. This cannot be undone.",
        ],
        [
          "other",
          "Can I use it offline?",
          "Viewing and editing records works offline. Network access may still be needed for weather, place search, reverse geocoding, ad loading, the latest legal documents, and support submissions.",
        ],
        [
          "other",
          "Can I change the display language?",
          "Yes, from the iOS Settings app under Remeet. Supported languages: Japanese, English, French, Korean, Spanish and Chinese.",
        ],
        [
          "other",
          "What is sent with a support enquiry?",
          "Only when you submit the form: optional name, email, category, message, app version, build number, iOS version, display language, enquiry id, submission time and related details. Photos and reunion content are not attached automatically.",
        ],
        [
          "other",
          "Can I change advertising consent?",
          "Yes, through regional consent prompts and iOS tracking permission. You can use every feature without allowing tracking. Ads may still appear, but they will not use cross-app or cross-website data for personalization without permission.",
        ],
      ] as const);
}

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、運営者（Tomokichi）が提供するiOSアプリケーション「Remeet」および本ウェブサイト（以下あわせて「本サービス」）における、利用者情報の取扱いについて定めるものです。本ウェブサイトに掲載する内容を正本とし、本アプリ内からは本ウェブサイトを参照します。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
        ],
        [
          "2. 運営者情報",
          "本サービスは、運営者（Tomokichi）が個人で開発・運営しています。お問い合わせは support@tmkch.io または共通お問い合わせフォームからご連絡ください。",
        ],
        [
          "3. 適用範囲",
          "本ポリシーは、本アプリの利用および本ウェブサイトの閲覧に関して適用されます。",
        ],
        [
          "4. 基本方針",
          "本アプリはアカウント登録を必要としません。利用者が入力・撮影した再会予定、写真、メモ等は原則として利用者の端末内に保存されます。運営者は、通常のアプリ利用だけではこれらの記録内容を収集・閲覧できるサーバーを運用していません。本アプリは広告表示のためGoogle Mobile Ads SDKを使用します。問い合わせフォームを明示的に送信した場合に限り、利用者が入力した情報と技術情報を送信します。",
        ],
        [
          "5. 端末内に保存する情報",
          "本アプリは、利用者が入力または選択した次の情報を、端末内のデータベース（Core Data）およびApp Group領域に保存します。\n\n・再会予定の名称、離れ始めた日時、再会日時、メモ\n・自分・相手・待ち合わせ場所の地名、緯度経度、タイムゾーン\n・「会ったらやりたいこと」の項目と完了状態\n・待っている間の記録および再会記録の写真、日付、メモ、感想、5段階評価\n・通知のオン／オフなどのアプリ設定\n\nこれらはウィジェット表示のため同一開発者のApp Group内で共有されますが、その保存自体は端末外へ送信されません。",
        ],
        [
          "6. 外部サービスへ送信される情報",
          "本アプリが外部と通信を行うのは、次の場合に限られます。\n\n(1) Open-Meteo：天気取得のため、登録地点の緯度経度を open-meteo.com へ送信します。氏名や写真等は送信しません。\n\n(2) Appleの地名検索・ジオコーディング：入力した検索語または取得した座標を、Appleの機能へ送信します。取扱いはAppleのプライバシー方針に従います。\n\n(3) 法務文書：最新のプライバシーポリシー・利用規約を表示するため、本ウェブサイトへ通信します。\n\n(4) 問い合わせ：利用者がフォームを明示的に送信した場合に限り、名前（任意）、メールアドレス、問い合わせカテゴリ、本文、アプリバージョン、ビルド番号、iOSバージョン、表示言語、問い合わせ識別子、送信日時、不正利用防止・レート制限に必要な情報等を送信することがあります。写真、再会予定、現在地、アルバム、メモ、やりたいことの内容は問い合わせ時に自動送信しません。\n\n(5) 広告配信：次条を参照してください。",
        ],
        [
          "7. 端末機能へのアクセス",
          "本アプリは次の機能を、利用者の許可を得たうえで使用します。許可はiOSの「設定」から変更できます。\n\n・カメラ：待っている間および再会の写真を撮影するため\n・写真ライブラリ：利用者が選択した写真を読み込むため\n・位置情報：「現在地を使う」を押したときだけ、地名とタイムゾーンへ変換するため。継続的な追跡は行いません\n・カレンダー：利用者が操作した場合に再会予定を書き込むため。既存の予定は読み取りません\n・通知：端末上で再会のリマインダーを表示するため\n・トラッキング：許可された場合に限り、他社アプリやWebサイトをまたいだ情報をパーソナライズ広告等に使用するため。許可しなくても本アプリの全機能を利用できます",
        ],
        [
          "8. 広告配信",
          "本アプリは広告表示のためGoogle Mobile Ads SDKおよび同意管理のためのUser Messaging Platform（UMP）を使用します。\n\n・広告配信、効果測定、不正利用防止等の目的で、IPアドレス、端末情報、広告識別子、アプリ操作・診断情報、同意状況等がGoogleおよび広告配信パートナーにより処理される場合があります\n・広告識別子の利用は、利用者の許可および地域の同意状況に従います\n・同意状況に応じて、パーソナライズ広告または非パーソナライズ広告が表示される場合があります\n・App Tracking Transparency（ATT）を拒否しても、アプリの基本機能は制限されません\n・同意やトラッキングの設定は、表示される同意画面およびiOSの設定から変更できる場合があります\n\n再会予定、写真、メモ等のアプリ内記録内容は広告配信事業者へ送信しません。Googleが取得する情報の詳細は、Googleのプライバシーポリシーおよび広告に関する公式説明をあわせてご確認ください。",
        ],
        [
          "9. 外部サービス・第三者提供",
          "運営者は、利用者のアプリ内記録を販売または貸与しません。本ポリシーに記載した範囲で、次の外部サービスを利用します。\n\n・Google（広告配信・同意管理）\n・Apple（ジオコーディング等のシステム機能）\n・Open-Meteo（天気）\n・Cloudflare Workers（問い合わせAPI基盤）\n・Resend（問い合わせメール配送）\n\n法令に基づく開示請求があった場合を除き、無関係な第三者へ提供しません。",
        ],
        [
          "10. 保存期間と削除",
          "端末内の情報は、利用者が削除するまで保存されます。個々の記録は各画面から、すべてのデータは「設定 → データ管理 → すべてのデータを削除」から削除できます。本アプリをアンインストールした場合、端末内に保存された情報は削除され、運営者が復旧することはできません。お問い合わせは専用データベースへ保存せず、メールとして受信します。",
        ],
        [
          "11. データ概要の書き出し",
          "設定画面から、登録名および予定・再会済み記録の件数等をJSON形式のデータ概要として書き出せます。写真、メモおよび各記録の完全な内容は含まれず、書き出したファイルをアプリへ復元する機能はありません。書き出したファイルの管理は利用者の責任において行ってください。",
        ],
        [
          "12. 安全管理措置",
          "本アプリはアカウント登録を必要としないため、パスワードなどの認証情報を取り扱いません。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "13. 未成年者の利用",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "14. ポリシーの変更",
          "法令の改正または本アプリの機能変更に伴い、本ポリシーを変更する場合があります。重要な変更を行う場合は、本アプリ内または本ウェブサイトにて周知します。変更後の内容は、掲載された時点から適用されます。",
        ],
        [
          "15. お問い合わせ",
          "本ポリシーおよび個人情報の取扱いに関するお問い合わせは、Tomokichi共通お問い合わせフォームまたは support@tmkch.io からお送りください。フォームを送信しない限り、問い合わせ情報は送信されません。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how the operator (Tomokichi) handles user information for the iOS app “Remeet” and this website (together, the “Service”). This website is the authoritative version; the app refers back to it. When offline, a bundled reference copy may be shown in the app.",
        ],
        [
          "2. Operator",
          "The Service is developed and operated by an individual, Tomokichi. Contact support@tmkch.io or the shared support form.",
        ],
        ["3. Scope", "This policy applies to use of the app and browsing of this website."],
        [
          "4. Basic policy",
          "The app does not require an account. Reunion plans, photos, notes and similar content are stored on your device in principle. The operator does not run a server that can collect or view those records from ordinary app use alone. The app uses the Google Mobile Ads SDK to show ads. Support details and technical information are sent only when you explicitly submit the support form.",
        ],
        [
          "5. Information stored on your device",
          "The app stores the following in an on-device database (Core Data) and an App Group container:\n\n・Reunion plan names, the date you started being apart, the reunion date, and notes\n・Place names, coordinates and time zones for you, your partner and the meeting place\n・Wish-list items and completion state\n・Photos, dates, notes, impressions and a 5-star rating for waiting and reunion records\n・App settings such as notification preferences\n\nThis data is shared within the developer’s App Group for widgets, but that storage itself is not sent off-device.",
        ],
        [
          "6. Information sent externally",
          "The app communicates externally only in these cases:\n\n(1) Open-Meteo: coordinates of a saved place are sent to open-meteo.com for weather. Names and photos are not sent.\n\n(2) Apple place search / geocoding: a search term or coordinates are sent to Apple. Handling follows Apple’s privacy policy.\n\n(3) Legal documents: the app loads the latest Privacy Policy and Terms from this website.\n\n(4) Support: only when you submit the form — optional name, email, category, message, app version, build number, iOS version, display language, enquiry id, submission time, and details needed for abuse prevention / rate limiting. Photos, reunion plans, location, albums, notes and wish content are not attached automatically.\n\n(5) Advertising: see the next section.",
        ],
        [
          "7. Device permissions",
          "With your permission, the app uses:\n\n・Camera — photos of waiting days and reunions\n・Photo library — photos you choose\n・Location — only when you tap “Use current location”, to resolve a place name and time zone; never continuous tracking\n・Calendar — write a reunion when you choose; existing events are not read\n・Notifications — reunion reminders on device\n・Tracking — only if allowed, for personalized ads using cross-app / cross-website data. Every feature remains available without tracking permission.",
        ],
        [
          "8. Advertising",
          "The app uses the Google Mobile Ads SDK and the User Messaging Platform (UMP) for consent.\n\n・Information such as IP address, device details, advertising identifiers, ad interaction / diagnostics and consent status may be processed by Google and advertising partners for delivery, measurement and fraud prevention\n・Use of advertising identifiers follows your permission and regional consent\n・Personalized or non-personalized ads may be shown depending on consent\n・Refusing App Tracking Transparency (ATT) does not limit core app features\n・You may be able to change consent via the consent form and iOS Settings\n\nIn-app records such as plans, photos and notes are not sent to advertising partners. See Google’s privacy policy and ads documentation for more detail about Google’s processing.",
        ],
        [
          "9. Service providers and disclosure",
          "The operator does not sell or lend your in-app records. Within the scope of this policy, the Service uses:\n\n・Google (ads and consent)\n・Apple (system features such as geocoding)\n・Open-Meteo (weather)\n・Cloudflare Workers (support API)\n・Resend (support email delivery)\n\nInformation is not otherwise disclosed to unrelated third parties except where required by law.",
        ],
        [
          "10. Retention and deletion",
          "On-device data is kept until you delete it. Delete individual records on their screens, or all data from Settings → Data management → Delete all data. Uninstalling removes on-device data; the operator cannot recover it. Support enquiries are received by email and not stored in a dedicated support database.",
        ],
        [
          "11. Data summary export",
          "From Settings you can export a JSON data summary of registered names and plan / completed-reunion counts. Photos, notes and full record contents are not included, and there is no way to restore the file into the app. You are responsible for any file you export.",
        ],
        [
          "12. Security",
          "Because the app has no account, it does not handle passwords. On-device data is protected by iOS security mechanisms.",
        ],
        [
          "13. Minors",
          "If a minor uses the app, please do so with a parent or guardian’s consent.",
        ],
        [
          "14. Changes",
          "This policy may change with law or product updates. Material changes will be announced in the app or on this website and take effect when published.",
        ],
        [
          "15. Contact",
          "Questions about this policy: shared Tomokichi support form or support@tmkch.io. Support information is not sent unless you submit the form.",
        ],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供するiOSアプリケーション「Remeet」（以下「本アプリ」）および本ウェブサイト（あわせて「本サービス」）の利用条件を定めるものです。本ウェブサイトに掲載する内容を正本とし、本アプリ内からは本ウェブサイトを参照します。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で、本規約に同意したものとみなされます。",
        ],
        [
          "第2条（本サービスの内容）",
          "本アプリは、再会予定の作成、カウントダウン、写真・メモ、会ったらやりたいこと、再会記録、アルバム、ウィジェット、通知、カレンダー追加などの機能を、利用者の端末上で提供します。データは原則として端末内に保存されます。本アプリはアカウント登録を必要とせず、利用者間でデータを共有する機能は提供していません。",
        ],
        [
          "第3条（利用料金および広告）",
          "本アプリは無料で提供されます。一部の画面には広告が表示されます。現在、有料プラン、広告削除機能およびアプリ内課金は提供していません。通信に必要な費用は利用者の負担とします。",
        ],
        [
          "第4条（利用者の責任）",
          "利用者は、自己の責任において本サービスを利用するものとし、入力する情報について必要な権利を有していることを保証します。第三者が写り込んだ写真等を保存する場合は、当該第三者の権利に配慮するものとします。",
        ],
        [
          "第5条（禁止事項）",
          "利用者は、本サービスの利用にあたり、次の行為をしてはなりません。\n\n1. 法令または公序良俗に違反する行為\n2. 運営者または第三者の権利、財産、名誉、プライバシーを侵害する行為\n3. 本アプリの複製、改変、逆コンパイル、逆アセンブルその他のリバースエンジニアリング\n4. 本サービスの運営を妨害し、または不正にアクセスする行為\n5. その他、運営者が不適切と合理的に判断する行為",
        ],
        [
          "第6条（知的財産権）",
          "本サービスおよびこれに含まれるプログラム、デザイン、文章、画像等に関する著作権その他の知的財産権は、運営者または正当な権利者に帰属します。利用者が本アプリ内で作成・保存した記録の権利は、利用者に帰属します。",
        ],
        [
          "第7条（データの管理）",
          "本アプリのデータは原則として利用者の端末内に保存され、アカウントによる同期はありません。機種変更時の自動移行は保証しません。端末の故障・紛失、本アプリの削除、OSのアップデートその他の事由によりデータが失われる可能性があり、運営者は失われたローカルデータを復旧できません。「設定 → データ管理」のJSON書き出しはデータ概要であり、写真やメモの完全な内容は含まれず、アプリへ復元することはできません。大切な写真は写真アプリ等にも保存してください。",
        ],
        [
          "第8条（保証の否認・免責事項）",
          "運営者は、本サービスが利用者の特定の目的に適合すること、期待する機能・正確性・有用性を有すること、および不具合が生じないことを保証しません。本アプリが表示する天気情報および地名情報は外部サービスから取得したものであり、その正確性・完全性を保証しません。通知の配信時刻はOSの状態により前後する場合があります。運営者は、本サービスの利用によって利用者に生じた損害について、運営者の故意または重過失による場合を除き、責任を負いません。消費者契約法その他の強行法規により運営者の免責が認められない場合、運営者の責任は法令上認められる範囲に限定されます。",
        ],
        [
          "第9条（本サービスの変更・中断・終了）",
          "運営者は、事前の通知なく本サービスの内容を変更し、または提供を中断・終了することがあります。重要な変更については、本アプリ内または本ウェブサイトにて周知するよう努めます。",
        ],
        [
          "第10条（本規約の変更）",
          "運営者は、必要と判断した場合、本規約を変更することがあります。変更後の規約は、本アプリ内または本ウェブサイトに掲載された時点から効力を生じます。変更後に本サービスを継続して利用した場合、変更に同意したものとみなされます。",
        ],
        [
          "第11条（準拠法および管轄裁判所）",
          "本規約の解釈および適用は日本法に準拠します。本サービスに関して運営者と利用者との間で紛争が生じた場合は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第12条（お問い合わせ）",
          "本規約に関するお問い合わせは、Tomokichi共通お問い合わせフォームまたは support@tmkch.io からお送りください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms set out the conditions for using the iOS application “Remeet” (the “App”) and this website (together, the “Service”), provided by the operator (Tomokichi). This website is the authoritative version; the App refers back to it. You are deemed to have agreed once you download the App or otherwise use the Service.",
        ],
        [
          "Article 2 — The Service",
          "The App provides reunion plans, countdown, photos and notes, things to do, reunion records, albums, widgets, notifications and calendar export on your device. Data is stored on-device in principle. The App does not require an account and does not offer sharing between users’ devices.",
        ],
        [
          "Article 3 — Fees and advertising",
          "The App is provided free of charge. Ads may appear on some screens. Paid plans, ad removal and in-app purchases are not currently offered. You are responsible for data and communication charges.",
        ],
        [
          "Article 4 — User responsibility",
          "You are responsible for your own use of the Service and warrant that you hold any rights needed for the information you enter. When saving photos that include third parties, please respect their rights.",
        ],
        [
          "Article 5 — Prohibited conduct",
          "You must not:\n\n1. Violate any law or public order and morals\n2. Infringe the rights, property, reputation or privacy of the operator or any third party\n3. Copy, modify, decompile, disassemble or otherwise reverse-engineer the App\n4. Interfere with the operation of, or gain unauthorised access to, the Service\n5. Engage in any other conduct the operator reasonably considers inappropriate",
        ],
        [
          "Article 6 — Intellectual property",
          "Copyright and other IP in the Service and its programs, design, text and images belong to the operator or relevant rights holders. Rights to records you create in the App belong to you.",
        ],
        [
          "Article 7 — Data management",
          "App data is stored on your device in principle; there is no account-based sync. Automatic migration when changing phones is not guaranteed. Data may be lost through device failure or loss, uninstalling the App, OS updates or similar events, and the operator cannot recover lost local data. The JSON export under Settings → Data management is a data summary only; it does not include full photos or notes and cannot be restored into the App. Keep important photos in the Photos app as well.",
        ],
        [
          "Article 8 — Disclaimer",
          "The operator does not warrant fitness for a particular purpose, expected functionality, accuracy or usefulness, or freedom from defects. Weather and place-name information come from external services and are not guaranteed. Notification timing may vary with OS conditions. Except for willful misconduct or gross negligence, the operator is not liable for damages arising from use of the Service. Where mandatory law such as the Consumer Contract Act does not allow this disclaimer, liability is limited to the extent permitted by law.",
        ],
        [
          "Article 9 — Changes, suspension and termination",
          "The operator may change, suspend or discontinue the Service without prior notice, and will endeavor to announce material changes in the App or on this website.",
        ],
        [
          "Article 10 — Changes to these Terms",
          "The operator may revise these Terms when necessary. Revised Terms take effect once posted in the App or on this website. Continued use constitutes acceptance.",
        ],
        [
          "Article 11 — Governing law and jurisdiction",
          "These Terms are governed by the laws of Japan. Disputes shall be subject to the exclusive jurisdiction of the Tokyo District Court as court of first instance.",
        ],
        [
          "Article 12 — Contact",
          "Questions about these Terms: shared Tomokichi support form or support@tmkch.io.",
        ],
      ];
}
