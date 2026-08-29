# Foundation

Esteban's starter template for all new projects.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (Radix + Nova preset)
- Vitest + React Testing Library (testing)
- Neon Postgres (when needed)
- Vercel (deployment)

## Getting Started
1. Create a new repo from this template
2. Clone it locally
3. Run `npm install`
4. Run `npm run dev`
5. Start building

## Design System
Live design system lives in `src/app/globals.css` — edit there for style changes.
`src/styles/design-tokens.ts` is a reference document only, not the live source.

**Brand:** API Global Solutions — navy `#273B6E` + green `#78BC43`.
**Fonts:** Mulish (UI), Questrial (docs), JetBrains Mono (data/code).
**Logos:** `public/` — navy, green, white, and blue variants + plus mark.

See `docs/design-system/` for the full design system reference — color/type tokens and component previews.

## Design Philosophy
- Target aesthetic: operational SaaS polish — confident, data-dense, calm, navy-and-green
- Typography: Mulish for UI, strong size contrast, JetBrains Mono for all data values
- Color: navy primary, green accent used sparingly and intentionally — no amber, teal, or purple
- Density: data-rich but never cluttered
- Whitespace: deliberate, not filler
- Every component intentional and premium, never default shadcn appearance

## Folder Structure
- `src/components/ui` — shadcn/ui components
- `src/components/layout` — Layout components (header, footer, sidebar)
- `src/components/shared` — Reusable components across pages
- `src/lib` — Utilities, helpers, API clients
- `src/hooks` — Custom React hooks
- `src/types` — TypeScript type definitions
- `src/styles` — Reference tokens and shared style utilities only (live theme is in src/app/globals.css)
- `public/` — Logos and brand assets (navy, green, white, blue variants + plus mark)
- `docs/design-system/` — Design system reference: color/type tokens, component previews

## Testing
- `npm test` — run all tests once (unit/component tests via Vitest + React Testing Library)
- `npm run test:watch` — run tests in watch mode while developing
- CI runs lint, typecheck, tests, and build automatically on every push (see `.github/workflows/ci.yml`)

## Environment Variables
Copy `.env.example` to `.env.local` and fill in real values once the project needs
auth or a database (the base template needs none). Never commit `.env.local`.

## Rules
- TypeScript only, no JavaScript
- Tailwind CSS for all styling
- shadcn/ui as a base — always customize to match Design Philosophy, never use default appearance as-is
- Clean, lightweight code — no unnecessary dependencies