# Docs-as-Code with Starlight

A demonstration that the same Docs-as-Code content can be published with a second static site generator. This repository is a **separate project** from the Start Docs-as-Code with Me course site, which is built with Docusaurus.

**Live site:** https://riffat786.github.io/docs-as-code-starlight/

## What is included

Eight pages from the course, copied from the Docusaurus repository and ported to Starlight:

| Section | Page | Source in the Docusaurus repo |
|---|---|---|
| Welcome | What is Docs-as-Code? | `docs/00-Welcome/What-is-Docs-as-Code.md` |
| Welcome | Why Docs-as-Code? | `docs/00-Welcome/Why-Docs-as-Code.md` |
| Markdown | Markdown Basics | `docs/02-Markdown/Basics.md` |
| Markdown | Markdown Frontmatter | `docs/02-Markdown/Frontmatter.md` |
| Markdown | Creating Diagrams with Mermaid | `docs/02-Markdown/Mermaid.md` |
| Workflow | Documentation Review Workflow | `docs/05-Docs-as-Code-Workflow/review-workflow.md` |
| Static Site Generators | Comparison | `docs/06-Static-Site-Generators/Comparison.md` |
| Portfolio | Docs-as-Code Documentation Platform | `portfolio/case-studies/docs-as-code-platform/index.md` |

Copied from Docusaurus repository commit `e6ec1922fd0af34f82c40e22bb707c6dbab23583`. Later changes in the Docusaurus repository are not reflected here until they are copied again.

## What changed when porting

- **Frontmatter:** `sidebar_position` and `id` were replaced with Starlight's `sidebar.order`. Titles and descriptions were kept.
- **Duplicate headings:** the first H1 was removed where it matched the title, because Starlight renders the title as the page heading.
- **Admonitions:** `:::important` and `:::info` became `:::note`, and `:::warning` became `:::caution`.
- **Links:** links to pages that are not in this demo were changed to plain text. Links between copied pages were rewritten to Starlight routes.
- **Mermaid:** diagrams are rendered with `astro-mermaid`.

Pages that depend on Docusaurus features (React components, the Docusaurus module pages, API and AI modules, the appendix, and the glossary) are not included in this demo.

## Build locally

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

## Deployment

Pushes to `main` build the site and deploy it to GitHub Pages with `.github/workflows/deploy.yml`. This workflow exists only in this repository and does not affect the Docusaurus site.
