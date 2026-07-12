// Static prerender: renders every route to complete HTML at build time using the
// Node SSR bundle (dist/server/entry-server.js), injecting Helmet's <head> tags
// and the app markup into the client index.html template. Writes dist/<route>/
// index.html so crawlers (and non-JS clients) get full HTML — title, meta,
// canonical, Open Graph/Twitter, JSON-LD, headings, and body — before any JS runs.
// The client still boots normally and takes over. Pure Node; runs on Vercel.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'
import { routes } from './routes.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const { render } = await import(
  pathToFileURL(join(dist, 'server', 'entry-server.js')).href
)

let ok = 0
for (const r of routes) {
  const { head, body } = render(r.path)

  // Drop the template's static <title> and description; the per-page versions
  // come from <head> injection below. Everything else in <head> (fonts,
  // analytics, favicons, og:site_name) is preserved.
  const page = template
    .replace(/\n?\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\n?\s*<meta name="description"[^>]*\/?>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const outPath =
    r.path === '/' ? join(dist, 'index.html') : join(dist, r.path, 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, page)
  ok++
}

console.log(`[prerender] wrote ${ok}/${routes.length} routes`)
