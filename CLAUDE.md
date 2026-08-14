# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Jingcheng (Frank) Niu's personal academic website (frankniujc.github.io), built with Astro (Vitesse theme) + Vue components + UnoCSS. Static output only. Pushing to `main` deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` — there is no separate deploy step.

## Commands

- `npm run dev` — dev server at http://localhost:1977
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the built site
- `npm run lint` / `npm run lint:fix` — ESLint (@antfu/eslint-config: no semicolons, single quotes; also formats .astro and CSS)
- `npx astro sync` — regenerate content-collection types after changing `src/content/config.ts`

There are no tests. A `simple-git-hooks` pre-commit hook runs `lint-staged`, which runs `lint:fix` on all staged files — commits may auto-fix formatting.

Known noise: `astro sync`/`build` print `[glob-loader] Duplicate id` warnings on Windows; they are pre-existing and benign.

## Architecture

Three content collections defined in `src/content/config.ts` (`pubs`, `teaching`, `pages`) drive nearly all routes:

- `src/pages/index.astro` — homepage. Bio is hardcoded here. News items are parsed from `src/data/news.md` (only lines starting with `- `, first 6 shown, converted to HTML with regex — links/bold only). Selected publications = pubs with `featured: true`.
- `src/pages/publications/[...path].astro` — publication list; `[slug].astro` — per-paper detail pages.
- `src/pages/teaching/[...slug].astro` — course materials, rendered with `TeachingLayout` (per-course header nav; the course id is the first slug segment, e.g. `csc485-f24`).
- `src/pages/[...slug].astro` — renders the `pages` collection (misc, teaching landing page).
- `src/site-config.ts` — site title, social links, header nav.

### Adding a publication

The most common edit. One file per paper in `src/content/pubs/`, named `YYYY_venue_shortname.md(x)`. Frontmatter drives everything (schema in `src/content/config.ts`):

- `authors` — rendered by `src/utils/author.ts`: "Jingcheng Niu" is bolded/underlined; other names link out if present in `src/data/coauthors.json` (add new co-authors there); a trailing `*` marks equal contribution.
- `redirect` — makes the list entry link directly to an external URL instead of a detail page.
- `featured: true` — shows on the homepage. `draft: true` — hidden in production builds only.
- `note` — renders in red bold next to the venue (used for awards).
- A ```` ```bibtex ```` fenced block in the body is extracted by `BibEntry.astro` into a show/hide citation toggle on list pages.

Usually accompanied by: PDFs/posters/slides in `public/research/<venue>/`, a news line at the top of `src/data/news.md`, and possibly `coauthors.json` entries.

### Other things to know

- Styling is UnoCSS; site-wide shortcuts (`bg-main`, `text-main`, `prose-link`, `nav-link`, …) live in `uno.config.ts`. Prose/global CSS in `src/styles/`.
- `astro.config.ts` registers a custom Shiki language, TRALE (`src/languages/trale.tmLanguage.json`), used in CSC485 teaching pages. It calls `fs.readFileSync` without importing `fs` — this works under Astro's config bundling, so don't be surprised by it.
- `/projects` (`src/pages/projects/`) still contains theme placeholder data and isn't linked from the nav.
