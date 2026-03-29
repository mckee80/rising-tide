# Rising Tide Timber Frames — Website

Built on the **beacon-base-astro-template** (Astro 5 + Tailwind CSS 4 + MDX).

## Quick Start
```bash
npm install
npm run dev      # Dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture
- **Astro 5** — Static site generator, no SSR
- **Tailwind CSS 4** — via `@tailwindcss/vite` plugin, configured in `@theme` block in `global.css`
- **MDX** — for blog posts
- **Sitemap** — auto-generated

## Key Files
| File | Purpose |
|------|---------|
| `src/config/site.ts` | **Single source of truth** — all business data, services, FAQ, testimonials, navigation |
| `src/styles/global.css` | Brand colors/fonts in `@theme` block, all component classes |
| `src/layouts/BaseLayout.astro` | Master layout — SEO, breadcrumbs, header/footer |
| `src/components/seo/JsonLd.astro` | Schema.org structured data (HomeAndConstructionBusiness) |
| `src/components/seo/SEOHead.astro` | Meta tags, OG, fonts (Playfair Display + Source Sans 3) |
| `astro.config.mjs` | Site URL, integrations |

## Pages
- `/` — Homepage (hero, trust bar, about, services, why us, process, testimonials, areas, FAQ, CTA)
- `/about/` — Company story, mission, differentiators
- `/services/` — Services overview with process and wood species
- `/services/timber-frame-residences/` — Custom homes
- `/services/roof-trusses/` — Truss types and styles
- `/services/barns/` — Barn types and heritage
- `/services/pavilions/` — Outdoor structures
- `/portfolio/` — Project gallery with category filtering
- `/contact/` — Contact form (Netlify Forms) + info panel
- `/areas-served/` — Service area details
- `/blog/` — Blog listing + individual posts
- `/404.astro` — 404 page

## Editing Content
1. **Business data** → Edit `src/config/site.ts`
2. **Colors/fonts** → Edit `@theme` in `src/styles/global.css` + font imports in `SEOHead.astro`
3. **Blog posts** → Add `.md`/`.mdx` files to `src/content/blog/`
4. **Pages** → Edit files in `src/pages/`

## Deployment
Configured for **Netlify** (static hosting). See `netlify.toml`.

## Brand
- **Primary**: `#8B6914` (warm timber gold)
- **Accent**: `#2C4A3E` (forest green)
- **Dark**: `#1C1C1C` (charcoal)
- **Fonts**: Playfair Display (headings), Source Sans 3 (body)
