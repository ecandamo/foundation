Read AGENTS.md and CLAUDE.md for all project rules.
Review .agents/skills/ for available skills.

## Design System
The design system is already established in:
- src/app/globals.css → live source of truth for all tokens (colors, typography, spacing, radius, shadows)
- src/styles/design-tokens.ts → reference only

All styling must use these tokens. Never hardcode hex values, font names, or
spacing values. Never override or replace existing tokens.

Pay special attention to the Design Philosophy section — redesign this app to match 
it. Current design is too generic — I want premium SaaS-level polish, clean 
typography hierarchy, intentional color usage, nothing generic or default looking.

## UX & Quality Standard
Apply the impeccable skill from .agents/skills/ as a quality and compliance framework:
- The design system above is the source of truth — impeccable's own DESIGN.md discovery is not needed here
- Run `audit` for accessibility, performance, and responsive compliance as your minimum bar
- Run `critique` for a UX heuristic review, and `polish` as a final quality pass before shipping
- Apply `harden` (production-readiness: errors, i18n, edge cases) and `adapt` (device/screen coverage) as needed per component
- Never use emoji as icons — use Lucide (already in the stack)
- All touch targets minimum 44×44px, visible focus states, no color-only meaning

## Redesign Scope
Preserve all existing functionality and data logic. Only change visual styling —
no changes to API routes, business logic, or data fetching.

## Before Touching Any Code
Generate a Design Audit covering:
- Components that look too generic or default
- What needs the most attention (typography, spacing, color usage)
- Which screens/pages to tackle first
- Specific changes recommended per component
- Which impeccable commands are most relevant to this codebase

Wait for my approval before changing anything.