# Vendor assets (self-hosted)

## Fonts (`fonts/`)

`colors_and_type.css` self-hosts Mulish, Questrial, and JetBrains Mono as local
WOFF2 files instead of a Google Fonts `@import`. Six files total — `latin` +
`latin-ext` subsets for each family, covering accented characters (property/city
names, etc.):

- `mulish-latin.woff2` / `mulish-latin-ext.woff2` — variable font, weights 300-800
- `questrial-latin.woff2` / `questrial-latin-ext.woff2` — weight 400 only
- `jetbrains-mono-latin.woff2` / `jetbrains-mono-latin-ext.woff2` — variable font, weights 400-500

Mulish and JetBrains Mono ship as single variable-font files covering their full
weight range (`@font-face` declares `font-weight: 300 800` etc. rather than one
file per weight) — that's why there are 2 files per family, not 6+.

A failed Google Fonts import wouldn't have broken anything on its own (the browser
just falls back to the next font in the stack — `Sailec`, `ui-sans-serif`,
`system-ui`, `sans-serif`), but this was the last external dependency anywhere in
`docs/design-system/`. With it self-hosted, the whole folder — every `preview/`
file and the design tokens — renders identically with zero network access, in any
browser, regardless of ad-blockers or privacy extensions.

### Updating

To re-fetch with a newer version, hit Google's CSS2 API with a real Chrome user
agent (a generic/`curl` UA gets served an older static-per-weight format instead of
the variable-font one) and pull the `latin`/`latin-ext` block URLs:

```
curl -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36" \
  "https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800&family=Questrial&family=JetBrains+Mono:wght@400;500&display=swap"
```
