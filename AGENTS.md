<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Commands

| Action | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Production | `npm run start` |
| Lint | `npm run lint` |
| Typecheck | `npx tsc --noEmit` |

No test framework or test scripts are configured.

# Architecture

- **Next.js 16.2.4** (alpha) / **React 19.2.4** / **TypeScript 5** / **Tailwind CSS v4**
- App Router (`app/`), single-page portfolio layout in `app/page.tsx`
- All components live under `app/components/` and are default-exported
- All styling is hand-written CSS in `app/globals.css` (Tailwind is installed but not used in components)
- Path alias `@/*` maps to project root (`tsconfig.json` paths)
- Remote images allowed from `avatars.githubusercontent.com` only (`next.config.ts`)

# Key conventions

- Default exports for all components
- CSS class names are BEM-style custom classes from `globals.css` (no Tailwind utility classes in JSX)
- `aria-label`, `aria-labelledby`, `aria-hidden` used pervasively for a11y
- All external links use `target="_blank" rel="noopener noreferrer"`
