export type Locale = "ja" | "en";
export type Page =
  | "features"
  | "how-to"
  | "screenshots"
  | "faq"
  | "privacy"
  | "terms"
  | "news"
  | "updates";

export const pick = <T>(ja: boolean, pair: [T, T]): T => pair[ja ? 0 : 1];

export const titles: Record<Page, [string, string]> = {
  features: ["機能", "Features"],
  "how-to": ["使い方", "How to"],
  screenshots: ["コンセプト画面", "Concept visuals"],
  faq: ["よくある質問", "FAQ"],
  privacy: ["プライバシーポリシー", "Privacy Policy"],
  terms: ["利用規約", "Terms of Service"],
  news: ["ブログ / お知らせ", "Blog / News"],
  updates: ["アップデート情報", "App updates"],
};

export const descriptions: Record<Page, [string, string]> = {
  features: [
    "手書きの数字と記号をユーティリティに使う、Doodleシリーズの機能。",
    "Doodle Series features: hand-drawn digits and symbols inside everyday utility apps.",
  ],
  "how-to": [
    "落書きを描き、TimerやCalculatorなど各アプリで使うまでの流れ。",
    "How to draw doodles and use them across Timer, Calculator, and the rest of the series.",
  ],
  screenshots: [
    "手描きUIの雰囲気を伝える、Doodleシリーズのコンセプトビジュアル。",
    "Concept doodle visuals that show the hand-drawn look of the Doodle Series.",
  ],
  faq: [
    "Doodleシリーズ、共有アセット、端末内保存、App Store公開についてのFAQ。",
    "FAQ about the Doodle Series, shared assets, on-device storage, and App Store availability.",
  ],
  privacy: [
    "Doodleシリーズのプライバシーポリシー。端末内保存、App Group共有、サポートについて。",
    "Doodle Series Privacy Policy: on-device storage, App Group sharing, and support.",
  ],
  terms: [
    "Doodleシリーズの利用規約。無料提供、ローカル保存、DoodleKitについて。",
    "Doodle Series Terms of Service covering free use, local storage, and DoodleKit.",
  ],
  news: ["Doodle公式ブランドサイト公開のお知らせ。", "News from the Doodle Series brand site."],
  updates: [
    "Doodleシリーズ各アプリのバージョンごとの変更内容。",
    "Version-by-version release notes for Doodle Series apps.",
  ],
};

/** Suite of independent doodle-drawn utility apps. */
export type SuiteApp = {
  id: string;
  mark: string;
  nameJa: string;
  nameEn: string;
  blurbJa: string;
  blurbEn: string;
};

export const suiteApps: SuiteApp[] = [
  {
    id: "timer",
    mark: "⏱",
    nameJa: "Timer",
    nameEn: "Timer",
    blurbJa: "手書きの数字でカウントダウン。",
    blurbEn: "Countdown with digits you drew yourself.",
  },
  {
    id: "calculator",
    mark: "＋",
    nameJa: "Calculator",
    nameEn: "Calculator",
    blurbJa: "落書きの数字と演算子で計算。",
    blurbEn: "Add, subtract, and more with doodled symbols.",
  },
  {
    id: "counter",
    mark: "＃",
    nameJa: "Counter",
    nameEn: "Counter",
    blurbJa: "タップするたび、手描きの数字が変わる。",
    blurbEn: "Tap and watch your hand-drawn numbers climb.",
  },
  {
    id: "stopwatch",
    mark: "⏵",
    nameJa: "Stopwatch",
    nameEn: "Stopwatch",
    blurbJa: "走り書きの針でラップを刻む。",
    blurbEn: "Lap times in a rough, sketchy face.",
  },
  {
    id: "roulette",
    mark: "◎",
    nameJa: "Roulette",
    nameEn: "Roulette",
    blurbJa: "落書きラベルでルーレットを回す。",
    blurbEn: "Spin a wheel labelled in your own ink.",
  },
  {
    id: "dice",
    mark: "⚄",
    nameJa: "Dice",
    nameEn: "Dice",
    blurbJa: "手描きの目のサイコロを振る。",
    blurbEn: "Roll dice whose pips look hand-inked.",
  },
  {
    id: "amidakuji",
    mark: "彡",
    nameJa: "Amidakuji",
    nameEn: "Amidakuji",
    blurbJa: "あみだくじをスケッチして運命を引く。",
    blurbEn: "Sketch a ladder and follow a playful path.",
  },
  {
    id: "bingo",
    mark: "☑",
    nameJa: "Bingo",
    nameEn: "Bingo",
    blurbJa: "落書きカードでビンゴを楽しむ。",
    blurbEn: "Play bingo on cards that feel hand-made.",
  },
  {
    id: "clock",
    mark: "◷",
    nameJa: "Clock",
    nameEn: "Clock",
    blurbJa: "ラフな文字盤で今を見る。",
    blurbEn: "Tell time on a rough-sketched dial.",
  },
  {
    id: "compass",
    mark: "✦",
    nameJa: "Compass",
    nameEn: "Compass",
    blurbJa: "手描きの方位で方角を確かめる。",
    blurbEn: "Find north with a doodled rose.",
  },
  {
    id: "metronome",
    mark: "♩",
    nameJa: "Metronome",
    nameEn: "Metronome",
    blurbJa: "スケッチの針でテンポを取る。",
    blurbEn: "Keep tempo with a sketched pendulum.",
  },
  {
    id: "pedometer",
    mark: "⇢",
    nameJa: "Pedometer",
    nameEn: "Pedometer",
    blurbJa: "歩数を手書きの数字で数える。",
    blurbEn: "Steps counted in your own numerals.",
  },
  {
    id: "rps",
    mark: "✊",
    nameJa: "Rock Paper Scissors",
    nameEn: "Rock Paper Scissors",
    blurbJa: "落書きの手でじゃんけん。",
    blurbEn: "Play with doodled rock, paper, scissors.",
  },
  {
    id: "scoreboard",
    mark: "▣",
    nameJa: "Scoreboard",
    nameEn: "Scoreboard",
    blurbJa: "手描きスコアで試合を記録。",
    blurbEn: "Keep score in hand-drawn digits.",
  },
];

export function privacySections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "1. はじめに",
          "本ポリシーは、Tomokichi（以下「運営者」）が提供する「Doodle」シリーズのiOSアプリケーション（Timer、Calculator、Counter、Stopwatch、Roulette、Dice、Amidakuji、Bingo、Clock、Compass、Metronome、Pedometer、Rock Paper Scissors、Scoreboard など。以下総称して「本アプリ」）および公式ブランドサイト（以下あわせて「本サービス」）における利用者情報の取扱いを定めるものです。公式Webサイトに掲載する内容を正本とし、本アプリ内からはWebサイトを参照する場合があります。オフライン時にはアプリ内の参照用コピーが表示される場合があります。",
        ],
        [
          "2. 運営者",
          "運営者：Tomokichi（個人開発者）\nお問い合わせ：共通サポートフォーム（対象アプリとして Doodle を選択）、または https://tmkch.io のサポートページ\nメール：support@tmkch.io",
        ],
        [
          "3. 端末内に保存する情報",
          "各本アプリは、原則として次の情報を利用者の端末内に保存します。\n\n・アプリ固有の設定、表示状態、直近の操作状態\n・タイマー、カウンター、スコアなど、そのアプリが扱うローカルな作業データ\n・外観や言語に関する端末側の設定の反映結果\n・サポート用のランダムなクライアントID（問い合わせ時の回数制限等に利用）\n・その他、アプリの動作に必要なローカル設定\n\nアカウント登録は不要です。通常のアプリ利用だけでは、作業データは運営者のサーバーへ送信されません。データはアプリごとに端末内で管理されます（local-first）。",
        ],
        [
          "4. 共有される手描きアセット（App Group）",
          "Doodleシリーズは、手書きの数字・記号などの共有アセットを、Apple の App Group「group.io.tmkch.doodle」を通じて同一端末上のシリーズアプリ間で共有する場合があります。\n\n・共有の目的は、描いた落書きを複数のユーティリティアプリで再利用できるようにすることです。\n・共有されるのは端末上のローカル領域であり、運営者のクラウドへ自動アップロードするものではありません。\n・共有の範囲は同一端末上の、App Group を利用する Doodle シリーズアプリに限ります。\n・ユーザーが描いた内容の権利は利用者に帰属します。運営者が勝手に収集・解析して広告や第三者提供に用いることはありません。",
        ],
        [
          "5. アカウント",
          "本アプリはアカウント登録を前提としません。サインインやクラウド上のユーザープロファイルは提供していません。",
        ],
        [
          "6. お問い合わせ",
          "共通サポートフォームまたはアプリ内フォームを明示的に送信した場合に限り、次の情報がサポートAPIおよびメール配信事業者へ送信されることがあります。\n\n・カテゴリ、名前、メールアドレス、件名、本文\n・アプリバージョン、ビルド番号、OS名・OSバージョン、ロケール\n・送信日時、問い合わせID、ランダムなクライアントID、送信元、対象アプリ\n・不正送信防止・回数制限に必要な情報\n\n手描きアセットやアプリ内の作業データは自動添付されません。必要な場合は、利用者が本文に記載するか、別途同意のうえで提供してください。",
        ],
        [
          "7. 外部サービス",
          "本サービスは、提供に必要な範囲で次の外部サービスを利用します。\n\n・Apple（システム機能、センサー、App Group 等）\n・Cloudflare Workers（お問い合わせAPIの実行基盤）\n・Resend（お問い合わせメール配送）\n・公式Webサイトの配信基盤\n\n各サービスの取扱いは、各事業者の方針に従います。現時点では、広告配信SDKや解析のための第三者トラッキングを本ポリシーが想定する必須の前提とはしていません。導入する場合は本ポリシーを更新します。",
        ],
        [
          "8. 法務文書の表示",
          "本アプリは、最新のプライバシーポリシーおよび利用規約を公式Webサイトから取得して表示する場合があります。通信できない場合は、アプリ内に保存された参照用文書を表示します。Web版を正本として扱います。",
        ],
        [
          "9. 保存期間と削除",
          "アプリ内の作業データや共有アセットは、利用者が削除するか、アプリをアンインストールするまで端末内に残ります。アンインストール後、運営者が端末内データを復旧することはできません。App Group 上の共有アセットは、シリーズ内の他アプリが残っている場合、OS の管理方針に従い残存することがあります。サポート情報は対応、法令、セキュリティ、不正防止に必要な期間保存します。",
        ],
        [
          "10. 第三者提供",
          "運営者は、法令に基づく場合を除き、利用者の個人情報を不当に第三者へ提供しません。外部サービスへの委託処理は、本ポリシーに記載したサービス提供に必要な範囲で行われます。",
        ],
        [
          "11. 安全管理",
          "運営者は、取り扱う情報について合理的な安全管理措置を講じます。端末内の情報は、iOSの標準的なセキュリティ機構のもとで保護されます。",
        ],
        [
          "12. 未成年者の利用",
          "未成年の方が本アプリを利用する場合は、保護者の同意を得たうえでご利用ください。",
        ],
        [
          "13. 改定",
          "法令または機能の変更に応じて本ポリシーを改定することがあります。重要な変更がある場合は、最終更新日を更新し、公式サイトまたはアプリ内で周知します。",
        ],
        [
          "14. お問い合わせ",
          "本ポリシーに関するお問い合わせは、共通サポートフォーム（対象アプリ Doodle）、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "1. Introduction",
          "This policy explains how Tomokichi (the “Operator”) handles user information for the “Doodle” series of iOS apps (including Timer, Calculator, Counter, Stopwatch, Roulette, Dice, Amidakuji, Bingo, Clock, Compass, Metronome, Pedometer, Rock Paper Scissors, Scoreboard, and related apps; the “Apps”) and the official brand website (together, the “Service”). The website is the authoritative version; an App may refer to it. When offline, a bundled reference copy may be shown.",
        ],
        [
          "2. Operator",
          "Operator: Tomokichi (individual developer)\nContact: the shared support form with Doodle selected as the app, or https://tmkch.io\nEmail: support@tmkch.io",
        ],
        [
          "3. Information stored on your device",
          "Each App generally stores the following on your device:\n\n・App-specific settings, display state, and recent UI state\n・Local working data for that app (timers, counters, scores, and similar)\n・Results of system appearance and language settings\n・A random client id used for support rate limiting\n・Other local settings needed for the App to work\n\nNo account is required. During ordinary use, working data is not sent to the Operator’s servers. Storage is local-first and per app.",
        ],
        [
          "4. Shared doodle assets (App Group)",
          "The Doodle Series may share hand-drawn digits, symbols, and similar assets among series apps on the same device through Apple’s App Group “group.io.tmkch.doodle”.\n\n・Sharing exists so doodles you draw can be reused across utility apps.\n・Shared content stays in on-device storage; it is not automatically uploaded to the Operator’s cloud.\n・Sharing is limited to Doodle Series apps on the same device that use the App Group.\n・You retain rights in what you draw. The Operator does not scrape or analyse doodles for advertising or third-party sale.",
        ],
        [
          "5. Accounts",
          "The Apps do not require accounts. There is no sign-in or cloud user profile.",
        ],
        [
          "6. Support",
          "Only when you explicitly submit the shared or in-app support form may the following be sent to the support API and email delivery provider:\n\n・Category, name, email, subject, message\n・App version, build number, OS name/version, locale\n・Submission time, enquiry id, random client id, source, target app\n・Details needed to prevent abuse and rate-limit submissions\n\nDoodle assets and in-app working data are never attached automatically. Include details in the message yourself if needed.",
        ],
        [
          "7. Service providers",
          "The Service uses, where needed:\n\n・Apple (system features, sensors, App Groups, and similar)\n・Cloudflare Workers (support API)\n・Resend (support email delivery)\n・Website hosting infrastructure\n\nEach provider processes information under its own policies. This policy does not assume advertising SDKs or third-party analytics as a required baseline; if introduced, this policy will be updated.",
        ],
        [
          "8. Display of legal documents",
          "An App may load the latest Privacy Policy and Terms from the official website. When offline, a bundled reference copy may be shown. The website version is authoritative.",
        ],
        [
          "9. Retention and deletion",
          "Working data and shared assets remain on the device until you delete them or uninstall the App. The Operator cannot recover on-device data after uninstall. Shared App Group assets may remain if other series apps still use the group, subject to the OS. Support information is kept as needed for response, law, security, and abuse prevention.",
        ],
        [
          "10. Disclosure",
          "Except where required by law, the Operator does not improperly disclose personal information to third parties. Processing by service providers is limited to what the Service needs, as described in this policy.",
        ],
        [
          "11. Security",
          "The Operator takes reasonable security measures. On-device data is protected by standard iOS security mechanisms.",
        ],
        ["12. Minors", "If a minor uses an App, please do so with a parent or guardian’s consent."],
        [
          "13. Changes",
          "This policy may change with law or product updates. Material changes update the last-updated date and may be announced on the website or in the Apps.",
        ],
        [
          "14. Contact",
          "Questions about this policy: the shared support form (app: Doodle), or support@tmkch.io.",
        ],
      ];
}

export function termsSections(ja: boolean): [string, string][] {
  return ja
    ? [
        [
          "第1条（適用）",
          "本規約は、運営者（Tomokichi）が提供する「Doodle」シリーズのiOSアプリおよび公式ブランドサイト（あわせて「本サービス」）の利用条件を定めます。利用者は、本アプリをダウンロードまたは本サービスを利用した時点で本規約に同意したものとみなされます。",
        ],
        [
          "第2条（サービス内容）",
          "Doodleシリーズは、手描き風のUIと、利用者が描いた数字・記号などのアセットを、タイマー、電卓、カウンター、ストップウォッチ、ルーレット、サイコロ、あみだくじ、ビンゴ、時計、コンパス、メトロノーム、歩数計、じゃんけん、スコアボードなどのユーティリティに用いる独立アプリ群です。共通の描画・アセット基盤として DoodleKit を利用し、App Group「group.io.tmkch.doodle」で同一端末上のアセット共有を行う場合があります。アカウント登録は不要です。",
        ],
        [
          "第3条（利用料金）",
          "本アプリは無料で提供されることを基本とします。現時点で、本サイトが前提とする広告表示や有料プランは主張しません。将来、有料商品や広告を導入する場合は、App Store の商品ページおよび本サイトで明示し、本規約を更新します。通信に必要な費用は利用者の負担とします。",
        ],
        [
          "第4条（利用者の責任）",
          "利用者は、自己の責任において本サービスを利用します。手描きアセットや作業データのバックアップは、各アプリの機能と端末管理に依存します。",
        ],
        [
          "第5条（禁止事項）",
          "法令違反、不正アクセス、運営妨害、違法な複製・再配布、サポートフォームの荒らし、その他運営者が不適切と合理的に判断する行為を禁止します。",
        ],
        [
          "第6条（知的財産権）",
          "本サービスに含まれるプログラム、デザイン、文章、画像等の権利は運営者または正当な権利者に帰属します。利用者が作成した手描きアセットの権利は利用者に帰属します。",
        ],
        [
          "第7条（データの管理）",
          "データは原則として端末内に保存され、アプリごとに管理されます（local-first）。共有アセットは App Group を通じて同一端末上のシリーズアプリ間で共有される場合があります。Doodle 独自のクラウド同期を保証するものではありません。アプリ削除、端末故障、紛失等によりデータが失われる場合があり、運営者は復旧できません。",
        ],
        [
          "第8条（センサー・システム機能）",
          "コンパス、歩数計など一部のアプリは、位置・モーション・ヘルスケア関連など iOS のセンサーやシステムAPIを利用する場合があります。許可はOSの設定に従い、拒否しても他の機能が使える範囲では利用を継続できます。センサーの精度や可用性は端末とOSに依存し、保証しません。",
        ],
        [
          "第9条（保証の否認・責任制限）",
          "本サービスは現状有姿で提供されます。運営者の故意または重過失および強行法規の範囲を除き、法令で認められる範囲で責任を限定します。タイマーやスコアなどの結果を、安全・医療・賭博・法的判断など重大な用途に依存しないでください。",
        ],
        [
          "第10条（変更・中断・終了）",
          "運営者は、OS対応、法令、保守、セキュリティ等の理由により、本サービスを変更・中断・終了することがあります。シリーズ内の個別アプリの公開時期は異なる場合があります。",
        ],
        [
          "第11条（規約変更）",
          "本規約は変更されることがあります。変更後の規約は、本アプリまたは公式サイトに掲載された時点から効力を生じます。",
        ],
        [
          "第12条（準拠法・管轄）",
          "本規約は日本法に準拠します。消費者契約法その他の強行法規に別段の定めがある場合を除き、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
        ],
        [
          "第13条（お問い合わせ）",
          "本規約に関するお問い合わせは、共通サポートフォーム（対象アプリ Doodle）、または support@tmkch.io までご連絡ください。",
        ],
      ]
    : [
        [
          "Article 1 — Application",
          "These Terms govern the “Doodle” series of iOS apps and the official brand website (together, the “Service”) provided by Tomokichi. By downloading an App or using the Service, you agree to these Terms.",
        ],
        [
          "Article 2 — The Service",
          "The Doodle Series is a set of independent utility apps that use a hand-drawn UI and doodled digits/symbols—Timer, Calculator, Counter, Stopwatch, Roulette, Dice, Amidakuji, Bingo, Clock, Compass, Metronome, Pedometer, Rock Paper Scissors, Scoreboard, and related apps. They share drawing and asset foundations via DoodleKit and may share assets on-device through App Group “group.io.tmkch.doodle”. No account is required.",
        ],
        [
          "Article 3 — Fees",
          "The Apps are provided free as a baseline. This site does not claim advertising or paid plans at present. If paid products or ads are introduced later, they will be disclosed on the App Store listing and this site, and these Terms will be updated. You are responsible for data charges.",
        ],
        [
          "Article 4 — User responsibility",
          "You use the Service at your own responsibility. Backing up doodle assets and working data depends on each App’s features and your device management.",
        ],
        [
          "Article 5 — Prohibited conduct",
          "You must not break the law, gain unauthorized access, disrupt the Service, unlawfully copy the Apps, abuse support, or engage in other conduct the Operator reasonably finds inappropriate.",
        ],
        [
          "Article 6 — Intellectual property",
          "Rights in the Service’s programs, design, text, and images belong to the Operator or rights holders. Rights in doodle assets you create belong to you.",
        ],
        [
          "Article 7 — Data management",
          "Data is stored on your device in principle, managed per app (local-first). Shared assets may be available across series apps on the same device via the App Group. Doodle does not guarantee its own cloud sync. Data may be lost if you uninstall, lose, or damage the device; the Operator cannot restore it.",
        ],
        [
          "Article 8 — Sensors and system features",
          "Some apps (for example Compass or Pedometer) may use location, motion, health-related, or other iOS sensors and system APIs. Permissions follow iOS Settings; if you deny them, other features may still work. Accuracy and availability depend on the device and OS and are not guaranteed.",
        ],
        [
          "Article 9 — Disclaimer and liability",
          "The Service is provided “as is.” Except for willful misconduct, gross negligence, or mandatory law, liability is limited to the extent permitted by law. Do not rely on timers, scores, or similar outputs for safety-critical, medical, gambling, or legal decisions.",
        ],
        [
          "Article 10 — Changes, suspension, termination",
          "The Operator may change, suspend, or end the Service for OS support, law, maintenance, security, or similar reasons. Individual apps in the series may ship on different schedules.",
        ],
        [
          "Article 11 — Changes to these Terms",
          "These Terms may be revised. Revised Terms take effect when posted in an App or on the website.",
        ],
        [
          "Article 12 — Governing law and jurisdiction",
          "Japanese law applies. Unless mandatory consumer law provides otherwise, the Tokyo District Court has exclusive first-instance jurisdiction.",
        ],
        ["Article 13 — Contact", "Shared support form (app: Doodle), or support@tmkch.io."],
      ];
}
