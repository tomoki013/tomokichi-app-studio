import type { NewsPost } from "@tomokichi/app-site/NewsFeed.astro";

const newsPostsJa: NewsPost[] = [
  {
    id: "released",
    date: "2026.08.17",
    datetime: "2026-08-17",
    badge: "お知らせ",
    title: "Colorviaを、App Storeでリリースしました",
    summary: "訪れた国や地域を地図の色として残すColorviaが、本日よりApp Storeでダウンロードいただけます。",
    body: [
      "Colorviaを本日App Storeでリリースしました。訪れた国を選ぶだけで世界地図が色づき、対応11か国では都道府県や州など国の内側まで記録できます。",
      "基本機能はすべて無料です。一部端末ではホーム下部にバナー広告が表示される場合があります。アプリ内課金はありません。",
      "記録は端末内に保存され、アカウント登録は不要です。地図はオフラインでも利用できます。",
    ],
  },
  {
    id: "site-launch",
    date: "2026.08.01",
    datetime: "2026-08-01",
    badge: "お知らせ",
    title: "Colorvia公式ブランドサイトを公開しました",
    summary: "機能、地域マップ、使い方、FAQ、プライバシーポリシー、利用規約をまとめて掲載しています。",
    body: [
      "Colorviaの公式ブランドサイトを公開しました。訪れた国や地域を地図の色として残すアプリの考え方と、対応している地域マップの範囲を、公開準備中の段階からそのままお伝えしています。",
      "現時点ではApp Storeへのリンクはありません。配信の準備が整い次第、サイトからもご案内します。",
      "地図はCanvas描画で、オフラインでも閲覧できます。データはJSONで書き出し・読み込みでき、端末内に保存されます。詳細はプライバシーポリシーと利用規約をご確認ください。",
    ],
  },
];

const newsPostsEn: NewsPost[] = [
  {
    id: "released",
    date: "2026.08.17",
    datetime: "2026-08-17",
    badge: "Update",
    title: "Colorvia is now available on the App Store",
    summary: "Colorvia, for colouring the countries and regions you've visited, is available to download starting today.",
    body: [
      "Colorvia is live on the App Store today. Pick a country you've visited and the world map fills in colour; in 11 supported countries you can record prefectures, states and provinces too.",
      "Every core feature is free. A banner ad may appear at the bottom of Home on some devices. There are no in-app purchases.",
      "Records stay on your device — no account required. The map works offline.",
    ],
  },
  {
    id: "site-launch",
    date: "2026.08.01",
    datetime: "2026-08-01",
    badge: "Update",
    title: "The official Colorvia brand site is now live",
    summary: "Features, regional maps, how-to, FAQ, Privacy Policy, and Terms—in one place.",
    body: [
      "The official Colorvia brand site is live. It explains colouring countries and regions you have visited, and which in-country maps are supported—while the app is still preparing for release.",
      "There is no App Store link yet. When distribution is ready, we will share it here as well.",
      "Maps are canvas-drawn and work offline. Data can be exported and imported as JSON and stays on your device. See the Privacy Policy and Terms for details.",
    ],
  },
];

export function getNewsPosts(lang: "ja" | "en"): NewsPost[] {
  return lang === "ja" ? newsPostsJa : newsPostsEn;
}
