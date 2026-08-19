# Design Studio Site

Built following `design-studio-site-guide.md`.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you launch

- Set the real `--primary` color (from your logo) in `src/app/globals.css`.
- Replace placeholder `.webp` images in `src/data/projects.ts` with real photography once available.
- `src/data/testimonials.ts` is intentionally empty — fill it in only once real client quotes exist, then remove the early `return null` in `src/components/sections/Testimonials.tsx`.
- The Framer Motion pass (guide §13) hasn't been added yet — structure is built and approved first, motion comes last.

## Structure

See `design-studio-site-guide.md` §3 for the full folder-structure rationale. Short version: `components/ui/` = reusable primitives, `components/sections/` = page blocks built from those primitives, `data/` = all real copy (never inline in JSX).
