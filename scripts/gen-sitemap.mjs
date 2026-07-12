// Generates public/sitemap.xml from the shared route manifest at build time,
// with real per-route <lastmod> (blog posts use their publish date; everything
// else uses the build date). Replaces the previously hand-maintained, frozen file.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { routes, SITE } from './routes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const out = join(root, 'public', 'sitemap.xml')
writeFileSync(out, xml)
console.log(`[sitemap] wrote ${routes.length} URLs -> public/sitemap.xml`)
