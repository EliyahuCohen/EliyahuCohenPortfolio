# Eliyahu Cohen — Portfolio

Personal resume site, styled after the classic [chronark.com](https://github.com/chronark/chronark.com) Next.js design.

Live: https://eliyahu-cohen-portfolio.vercel.app

## Stack

- Next.js 16 (App Router, static generation) + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui (new-york, zinc)
- next-themes: light, dark and system themes
- motion for the spotlight cards; a canvas particle field on the home page

## Pages

| Route      | Content                                                         |
| ---------- | --------------------------------------------------------------- |
| `/`        | Name, tagline, links, CV download                               |
| `/resume`  | Summary, experience, skills, education, volunteering, languages |
| `/contact` | Email, LinkedIn, GitHub, phone                                  |

## Editing content

- Resume content: `src/content/resume.ts`
- Contact links, site URL and CV path: `src/lib/site.ts`
- Downloadable CV: `public/Eliyahu-Cohen-CV.pdf`

Set `NEXT_PUBLIC_SITE_URL` if the site moves to a custom domain (used for canonical URLs and the sitemap).

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm lint
```
