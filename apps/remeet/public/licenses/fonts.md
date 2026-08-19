# Fonts in the invitation preview

`src/worker/invite/fonts/serif.bin` and `sans.bin` are subsets of:

- **Noto Serif JP** — © The Noto Project Authors
- **Noto Sans JP** — © The Noto Project Authors

Both are licensed under the **SIL Open Font License, Version 1.1**
(<https://openfontlicense.org>), which permits subsetting and redistribution
of the modified font, under the same licence and without selling the font by
itself. They are shipped only as bytes handed to a renderer, never offered for
download and never used as a webfont on any page.

Regenerate with `node scripts/build-og-fonts.mjs`. The characters kept are
listed in `scripts/og-charset.mjs`, and a name containing anything outside
them is dropped from the picture rather than drawn as tofu.
