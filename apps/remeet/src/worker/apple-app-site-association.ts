/**
 * What makes `https://remeet.tmkch.io/i/…` open the app instead of this site.
 *
 * Only `/i/*` is claimed. Claiming the whole domain would hand every page of
 * the brand site — privacy policy, support, news — to the app, which cannot
 * show any of them.
 */
export function appleAppSiteAssociation(appID: string): string {
  return JSON.stringify({
    applinks: {
      details: [
        {
          appIDs: [appID],
          components: [{ "/": "/i/*", comment: "Remeet invitation links" }],
        },
      ],
    },
  });
}
