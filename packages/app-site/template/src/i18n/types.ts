export type AppSiteTranslation = {
  shell: {
    home: string;
    mainNavigation: string;
    language: string;
    skipToContent: string;
    menu: string;
    menuClose: string;
  };
  nav: {
    features: string;
    howTo: string;
    faq: string;
    updates: string;
  };
  footer: {
    product: string;
    screenshots: string;
    support: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    commercialTransactions: string;
    otherApps: string;
  };
  meta: {
    description: string;
    tagline: string;
    appStore: string;
  };
  landing: {
    title: string;
    value: string;
    body: string;
    download: string;
    screenAlt: string;
    news: string;
    about: string;
    aboutBody: string;
  };
  content: {
    placeholder: string;
    titles: Record<string, string>;
  };
};
