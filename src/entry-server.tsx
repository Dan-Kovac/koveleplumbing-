import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import { AppInner } from '@/AppInner'

/**
 * Server render entry for build-time static prerendering (scripts/prerender.mjs).
 *
 * On React 19, document metadata (<title>, <meta>, <link>, and JSON-LD <script>)
 * rendered anywhere in the tree — here, via the <Seo>/<JsonLd> Helmet components —
 * is hoisted by React to the front of the render output rather than into Helmet's
 * context object. So we render to a string, then split that leading metadata block
 * off the front and return it as `head` (to inject into <head>) with the remaining
 * app markup as `body` (to inject into #root). Pure Node — runs on Vercel's build.
 */

// A run of hoistable head tags at the start of the render output.
const HEAD_TAG =
  /^\s*(<title>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?\/?>|<script\b[^>]*?type="application\/ld\+json"[^>]*?>[\s\S]*?<\/script>)/

function splitHead(rendered: string): { head: string; body: string } {
  const head: string[] = []
  let rest = rendered
  let m: RegExpExecArray | null
  while ((m = HEAD_TAG.exec(rest)) !== null) {
    head.push(m[1])
    rest = rest.slice(m[0].length)
  }
  return { head: head.join('\n    '), body: rest }
}

export function render(url: string): { head: string; body: string } {
  const helmetContext = {}
  const rendered = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppInner />
      </StaticRouter>
    </HelmetProvider>,
  )
  return splitHead(rendered)
}
