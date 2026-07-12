// Single source of truth for the site's routes, derived from the same data the
// app uses. Consumed by gen-sitemap.mjs and prerender.mjs so the sitemap and the
// prerendered HTML can never drift from each other or from the router.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

function extractSlugs(file, re) {
  const text = readFileSync(join(root, file), 'utf8')
  const slugs = new Set()
  let m
  while ((m = re.exec(text)) !== null) slugs.add(m[1])
  return [...slugs]
}

// Top-level location slugs (nearbySuburbs reference the same slugs, so a unique
// set of every plumber-* slug is exactly the 14 real location pages).
const locationSlugs = extractSlugs(
  'src/pages/locations/data.ts',
  /slug:\s*'(plumber-[a-z-]+)'/g,
)

// Blog slugs + their publish dates for accurate <lastmod>.
function blogPosts() {
  const text = readFileSync(join(root, 'src/data/blog-fallback.ts'), 'utf8')
  const posts = []
  const re = /slug:\s*'([a-z0-9-]+)',\s*\n\s*date:\s*'([0-9-]+)'/g
  let m
  while ((m = re.exec(text)) !== null) posts.push({ slug: m[1], date: m[2] })
  return posts
}

const posts = blogPosts()
const today = new Date().toISOString().slice(0, 10)

/** @type {{path:string, priority:number, changefreq:string, lastmod:string}[]} */
export const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly', lastmod: today },
  { path: '/services', priority: 0.9, changefreq: 'monthly', lastmod: today },
  { path: '/emergency-plumber', priority: 0.9, changefreq: 'monthly', lastmod: today },
  { path: '/contact', priority: 0.9, changefreq: 'monthly', lastmod: today },
  { path: '/about', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/reviews', priority: 0.7, changefreq: 'weekly', lastmod: today },
  { path: '/faq', priority: 0.6, changefreq: 'monthly', lastmod: today },
  // Service detail pages
  { path: '/blocked-drains', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/gas-hot-water', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/roof-plumbing', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/general-plumbing', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/toilet-repairs', priority: 0.8, changefreq: 'monthly', lastmod: today },
  { path: '/bathroom-renovations', priority: 0.8, changefreq: 'monthly', lastmod: today },
  // Location pages
  ...locationSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: today,
  })),
  // Blog
  { path: '/blog', priority: 0.6, changefreq: 'weekly', lastmod: today },
  ...posts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.6,
    changefreq: 'yearly',
    lastmod: p.date,
  })),
  // Utility
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly', lastmod: today },
  { path: '/terms', priority: 0.3, changefreq: 'yearly', lastmod: today },
]

export const SITE = 'https://koveleplumbing.com.au'
