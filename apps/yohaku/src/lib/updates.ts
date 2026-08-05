import type { Locale } from "./content";

export type UpdateCategory = "notice" | "column";

export type UpdateSection = {
  heading?: string;
  paragraphs: string[];
};

export type UpdatePost = {
  slug: string;
  category: UpdateCategory;
  date: string;
  datetime: string;
  title: string;
  summary: string;
  sections: UpdateSection[];
};

const posts: Record<Locale, UpdatePost[]> = {
  ja: [
    {
      slug: "site-launch",
      category: "notice",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "Yohaku公式ブランドサイトを公開しました",
      summary: "Yohakuの考え方から使い方、料金、サポートまでを、ひとつの場所にまとめました。",
      sections: [
        {
          paragraphs: [
            "Yohakuの公式ブランドサイトを公開しました。アプリが生まれた背景、Today・Week・Monthでできること、日々の使い方を、実際の画面と一緒に紹介しています。",
            "Yohakuは、予定を増やすためのアプリではありません。何もしない時間や、ひと息つく時間を先に置いておくための小さな道具です。",
          ],
        },
        {
          heading: "公開に向けて準備中です",
          paragraphs: [
            "現在はApp Storeでの公開に向けて準備を進めています。ダウンロードできるようになった際は、このお知らせページでもご案内します。",
            "余白の記録は端末内に保存され、アカウント登録やYohaku独自のクラウド同期はありません。詳しくはプライバシーポリシーと利用規約をご確認ください。",
          ],
        },
      ],
    },
    {
      slug: "leaving-space-not-plans",
      category: "column",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "予定ではなく、余白だけを置くということ",
      summary: "空いている時間まで埋めたくなる日々の中で、何もしない時間に名前をつけてみる。",
      sections: [
        {
          paragraphs: [
            "カレンダーに何もない時間を見ると、そこにも何かを入れたくなることがあります。用事、勉強、運動。空いている時間は、いつの間にか『まだ使える時間』として扱われてしまいます。",
            "けれど、ぼんやり窓の外を見ることや、急がずにお茶を飲むことも、暮らしに必要な時間です。予定に追い出されないようにするには、何もしない時間にも名前をつけて、先に場所を取っておく必要があるのかもしれません。",
          ],
        },
        {
          heading: "管理するためではなく、気づくために",
          paragraphs: [
            "Yohakuは、余白を達成できたか採点するアプリではありません。連続記録も、目標時間もありません。置いた余白はTodayで確かめ、WeekとMonthで静かな印として振り返ります。",
            "印が少ない週があっても大丈夫です。増やすことより、自分の時間の使い方に気づけることを大切にしています。",
          ],
        },
        {
          heading: "まずは10分から",
          paragraphs: [
            "最初から大きな空白を作る必要はありません。移動のあと、寝る前、予定と予定のあいだ。10分だけ『何もしない』と置いてみる。それくらいの小ささが、長く続く余白にはちょうどいいと思っています。",
          ],
        },
      ],
    },
    {
      slug: "app-store-preparation",
      category: "notice",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "App Store公開に向けて",
      summary: "iPhone・iOS 17以降向け。全機能を無料で使え、¥400の買い切りで広告を削除できます。",
      sections: [
        {
          paragraphs: [
            "現在はApp Storeでの公開準備中です。余白の作成・編集、Today・Week・Month、通知、振り返りなど、すべての機能を無料で利用できます。",
            "個人で開発と運営を続ける費用のため、無料利用時には画面下部に小さなバナー広告を表示します。申し訳ありません。¥400の買い切りで広告を永久に削除でき、開発を応援していただけます。追加機能を解放する課金やサブスクリプションではありません。",
            "価格と提供内容は、公開時のApp Storeおよびアプリ内購入画面の表示が正しいものとします。",
          ],
        },
      ],
    },
  ],
  en: [
    {
      slug: "site-launch",
      category: "notice",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "The official Yohaku site is now live",
      summary:
        "The idea, the app, practical guides, pricing and support—now together in one quiet place.",
      sections: [
        {
          paragraphs: [
            "The official Yohaku site is now live. It introduces why the app exists and what Today, Week and Month do, with real screens and practical guidance.",
            "Yohaku is not another way to add plans. It is a small tool for leaving time to do nothing, or simply to breathe.",
          ],
        },
        {
          heading: "Preparing for release",
          paragraphs: [
            "We are currently preparing Yohaku for the App Store. When it is ready to download, we will share the news here.",
            "Spaces stay on your device. There is no Yohaku account or proprietary cloud sync. See the Privacy Policy and Terms for details.",
          ],
        },
      ],
    },
    {
      slug: "leaving-space-not-plans",
      category: "column",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "Leaving space instead of another plan",
      summary:
        "When every open hour feels available to fill, what changes if we give doing nothing a name?",
      sections: [
        {
          paragraphs: [
            "An empty calendar slot can feel like time still waiting to be used. Another errand, a workout, a little more work—open time quietly becomes available capacity.",
            "But looking out the window or drinking tea without rushing belongs in a life too. Sometimes unplanned time needs a name and a place before another plan pushes it out.",
          ],
        },
        {
          heading: "Notice, rather than measure",
          paragraphs: [
            "Yohaku does not score your space. There are no streaks or time goals. See each space on Today, then look back through the quiet marks on Week and Month.",
            "A week with fewer marks is not a failure. The point is noticing the rhythm of your time—not maximizing it.",
          ],
        },
        {
          heading: "Start with ten minutes",
          paragraphs: [
            "You do not need to clear a whole afternoon. Try ten minutes after a journey, before bed, or between two plans. Small spaces are often the ones that fit naturally enough to last.",
          ],
        },
      ],
    },
    {
      slug: "app-store-preparation",
      category: "notice",
      date: "2026.08.01",
      datetime: "2026-08-01",
      title: "Preparing for the App Store",
      summary:
        "For iPhone on iOS 17+. Every feature is free, with optional one-time ¥400 ad removal.",
      sections: [
        {
          paragraphs: [
            "Yohaku is currently being prepared for the App Store. Creating and editing spaces, Today, Week, Month, notifications and check-ins are all free.",
            "To help one independent developer keep building and operating Yohaku, the free experience includes a small banner ad at the bottom of the screen. Sorry about that. A one-time ¥400 purchase permanently removes ads and supports development. It is not a subscription or a feature unlock.",
            "The App Store and in-app purchase screen are the source of truth for final price and availability.",
          ],
        },
      ],
    },
  ],
};

export const getUpdates = (lang: Locale) => posts[lang];

export const getUpdate = (lang: Locale, slug: string) =>
  posts[lang].find((post) => post.slug === slug);

export const updateCategoryLabel = (lang: Locale, category: UpdateCategory) => {
  if (lang === "ja") return category === "column" ? "コラム" : "お知らせ";
  return category === "column" ? "Column" : "News";
};
