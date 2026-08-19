import type { AppSiteTranslation } from "./types";

export default {
  shell: {
    home: "Home",
    mainNavigation: "Main navigation",
    language: "Language",
    skipToContent: "Skip to content",
    menu: "Menu",
    menuClose: "Close menu",
  },
  nav: { features: "Features", howTo: "How it works", faq: "FAQ", updates: "News" },
  footer: {
    product: "Product",
    screenshots: "Screenshots",
    support: "Support",
    contact: "Contact",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    commercialTransactions: "Commercial Transactions",
    otherApps: "Other apps",
  },
  meta: {
    description: "The official website for __APP_BRAND__.",
    tagline: "Add the app tagline here.",
    appStore: "View on App Store",
  },
  landing: {
    title: "Welcome to __APP_BRAND__",
    value: "Describe the app’s value in one sentence.",
    body: "Add the product-specific supporting copy here.",
    download: "Download on the App Store",
    screenAlt: "App screen placeholder",
    news: "The __APP_BRAND__ website is now available.",
    about: "About __APP_BRAND__",
    aboutBody: "Build the product-specific landing page from this shared foundation.",
  },
  content: {
    placeholder: "Add content specific to __APP_BRAND__ on this page.",
    titles: {
      features: "Features",
      "how-to": "How it works",
      screenshots: "Screenshots",
      faq: "FAQ",
      updates: "News",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
} satisfies AppSiteTranslation;
