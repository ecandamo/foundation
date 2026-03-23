# Foundation Project

## Stack
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS + shadcn/ui (Radix, Nova preset)
- Neon Postgres (when needed)
- Vercel (deployment)

## Rules
- TypeScript only, never JavaScript
- Tailwind for all styling, no CSS modules or inline styles
- shadcn/ui components before custom ones
- Server components by default, client only when needed
- Clean, lightweight code — no unnecessary dependencies
- Design tokens in src/styles/design-tokens.ts

## File Structure
- src/components/ui — shadcn/ui
- src/components/layout — Headers, footers, sidebars
- src/components/shared — Reusable components
- src/lib — Utilities, helpers
- src/hooks — Custom hooks
- src/types — TypeScript types
- src/styles — Design tokens

## Self-Improvement
- Review .learnings/ at session start
- Log corrections and errors to .learnings/
- Consolidate periodically
