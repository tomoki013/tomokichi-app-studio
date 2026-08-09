import { appSiteUrl, appSiteWorkersUrl } from "./urls";

export interface AppBrandRegistration {
  slug: string;
  name: string;
  publicUrl: string;
  workersUrl: string;
  support: boolean;
  footer: boolean;
}

/**
 * Shared registry for app brand sites.
 *
 * Adding an entry here updates shared support choices and the main-site footer.
 * The main Apps page intentionally keeps its broader product portfolio,
 * including concepts that do not have a brand site yet.
 */
export const APP_BRANDS = [
  {
    slug: "remeet",
    name: "Remeet",
    publicUrl: appSiteUrl("remeet"),
    workersUrl: appSiteWorkersUrl("remeet"),
    support: true,
    footer: true,
  },
  {
    slug: "tripory",
    name: "Tripory",
    publicUrl: appSiteUrl("tripory"),
    workersUrl: appSiteWorkersUrl("tripory"),
    support: true,
    footer: true,
  },
  {
    slug: "colorvia",
    name: "Colorvia",
    publicUrl: appSiteUrl("colorvia"),
    workersUrl: appSiteWorkersUrl("colorvia"),
    support: true,
    footer: true,
  },
  {
    slug: "yohaku",
    name: "Yohaku",
    publicUrl: appSiteUrl("yohaku"),
    workersUrl: appSiteWorkersUrl("yohaku"),
    support: true,
    footer: true,
  },
  // Unpublished brand sites: available for support forms, not linked from the main footer yet.
  {
    slug: "soonish",
    name: "Soonish",
    publicUrl: appSiteUrl("soonish"),
    workersUrl: appSiteWorkersUrl("soonish"),
    support: true,
    footer: false,
  },
  {
    slug: "tana",
    name: "Tana",
    publicUrl: appSiteUrl("tana"),
    workersUrl: appSiteWorkersUrl("tana"),
    support: true,
    footer: false,
  },
  {
    slug: "quiet-solitaire",
    name: "Quiet Solitaire",
    publicUrl: appSiteUrl("quiet-solitaire"),
    workersUrl: appSiteWorkersUrl("quiet-solitaire"),
    support: true,
    footer: false,
  },
  {
    slug: "rough-board",
    name: "Rough Board",
    publicUrl: appSiteUrl("rough-board"),
    workersUrl: appSiteWorkersUrl("rough-board"),
    support: true,
    footer: false,
  },
  {
    slug: "doodle",
    name: "Doodle Series",
    publicUrl: appSiteUrl("doodle"),
    workersUrl: appSiteWorkersUrl("doodle"),
    support: true,
    footer: false,
  },
] as const satisfies readonly AppBrandRegistration[];

export const supportAppBrands = APP_BRANDS.filter((app) => app.support);
export const footerAppBrands = APP_BRANDS.filter((app) => app.footer);

export function appBrand(slug: string): AppBrandRegistration | undefined {
  return APP_BRANDS.find((app) => app.slug === slug);
}
