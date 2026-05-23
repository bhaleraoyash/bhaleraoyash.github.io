# Yash Bhalerao — Portfolio

Personal portfolio site built with a focus on clean design and performance.

**Live:** [bhaleraoyash.github.io](https://bhaleraoyash.github.io)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion (LazyMotion, ~18kb) |
| Icons | Lucide React + React Icons |
| Deployment | GitHub Pages via GitHub Actions |

## Structure

```
src/
  app/            # Layout, global styles, metadata
  components/
    layout/       # Navbar, Footer
    sections/     # Hero, About, Skills, Experience, Projects, Resume
    providers/    # Framer Motion provider
    ui/           # Shared UI primitives
  data/           # Content — personal info, experience, skills, projects
  hooks/          # useActiveSection (IntersectionObserver)
  lib/            # Framer Motion variants
  types/          # TypeScript interfaces

public/
  icons/          # Favicon
  images/         # Project screenshots
  resume/         # Resume PDF
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushing to `main` triggers the GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the static export and deploys to the `gh-pages` branch.

To deploy manually:

```bash
npm run build   # outputs to /out
```
