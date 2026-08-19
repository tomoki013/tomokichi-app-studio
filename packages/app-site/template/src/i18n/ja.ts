import type { AppSiteTranslation } from "./types";

export default {
  shell: {
    home: "ホーム",
    mainNavigation: "メインナビゲーション",
    language: "言語",
    skipToContent: "本文へスキップ",
    menu: "メニュー",
    menuClose: "メニューを閉じる",
  },
  nav: { features: "機能", howTo: "使い方", faq: "FAQ", updates: "お知らせ" },
  footer: {
    product: "プロダクト",
    screenshots: "スクリーンショット",
    support: "サポート",
    contact: "お問い合わせ",
    legal: "規約",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    commercialTransactions: "特定商取引法に基づく表記",
    otherApps: "ほかのアプリ",
  },
  meta: {
    description: "__APP_BRAND__の公式サイトです。",
    tagline: "アプリのタグラインを入力してください。",
    appStore: "App Storeで見る",
  },
  landing: {
    title: "__APP_BRAND__へようこそ",
    value: "アプリの価値を一文で伝えます。",
    body: "ここにプロダクト固有の説明を入力してください。",
    download: "App Storeからダウンロード",
    screenAlt: "アプリ画面のプレースホルダー",
    news: "__APP_BRAND__サイトを公開しました。",
    about: "__APP_BRAND__について",
    aboutBody: "機能や使い方など、アプリ固有のランディングページをここから構築してください。",
  },
  content: {
    placeholder: "このページに__APP_BRAND__固有の内容を入力してください。",
    titles: {
      features: "機能",
      "how-to": "使い方",
      screenshots: "スクリーンショット",
      faq: "よくある質問",
      updates: "お知らせ",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
} satisfies AppSiteTranslation;
