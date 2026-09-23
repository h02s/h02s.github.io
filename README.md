# h02s Personal Website

Minimal personal portfolio + technical writing site built with Astro and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL shown by Astro.

## Add an article

Create a Markdown file in:

```text
src/content/articles/
```

Example frontmatter:

```yaml
---
title: "My article"
description: "A short description."
date: 2026-09-24
tags: ["linux", "backend"]
category: "Notes"
draft: false
---
```

## Deploy

1. Create a GitHub repository named `h02s.github.io`.
2. Push this project to the `main` branch.
3. In GitHub: Settings → Pages → Source: **GitHub Actions**.
4. The workflow uses the official Astro GitHub Action, Node.js 24, and GitHub Pages deployment actions.
5. The workflow installs dependencies with `npm` and runs `npm run build`.

For reproducible dependency installs, generate and commit a `package-lock.json` locally before production use:
`npm install`

If you use another repository name, update `site` in `astro.config.mjs` and configure the appropriate `base`.

## Customize

- Replace `hello@example.com` in `src/pages/about.astro`.
- Replace the GitHub username if needed.
- Edit colors, typography and spacing in `src/layouts/BaseLayout.astro`.
- Add articles as Markdown.
