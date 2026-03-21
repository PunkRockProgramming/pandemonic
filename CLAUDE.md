# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Destined for Dirt — a static portfolio site for the DFD music label, built with Astro. Hosts pages for two band projects (Pandemonic, Respair) and individual show pages. Deploys to GitHub Pages at destinedfordirt.com.

## Commands

- `npm run dev` — start dev server
- `npm run build` — build to `dist/`
- `npm run preview` — preview production build locally

No test suite or linter is configured.

## Architecture

**Layouts:** `BaseLayout.astro` provides the shared HTML shell (head, favicons, OG tags). `ShowLayout.astro` wraps BaseLayout and adds a poster image + CSS custom properties (`--show-accent`, `--show-bg`, `--poster-width`) injected via `:root` so each show page can have its own color scheme.

**Components:** `BandBlock.astro` renders a band name + link list (used on show pages). `StreamingLinks.astro` renders a row of platform icon links (used on Respair page).

**Pages:** The hub landing page (`/`) links to `/pandemonic/` and `/respair/`. Show pages live at `/shows/MMDDYYYY/` and use ShowLayout + BandBlock.

**Styles:** Plain CSS files in `src/styles/`, imported by their respective pages/layouts. No CSS framework. Show page theming is driven by CSS variables, not separate stylesheets per show.

**Assets:** `public/images/` for shared assets (favicons, platform icons), `public/pandemonic/` for Pandemonic artwork, `public/shows/` for show poster images.

## Conventions

- Image filenames use hyphens, no spaces (e.g., `apple-logo.png` not `apple logo.png`)
- Show pages are named by date: `MMDDYYYY.astro`
- Show links on the Respair page use relative paths (`/shows/MMDDYYYY/`), not absolute URLs
- Deployment is via GitHub Actions on push to `main` — repo Pages setting should use "GitHub Actions" source, not "branch"
