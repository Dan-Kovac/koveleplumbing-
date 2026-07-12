import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { initPostHog } from '@/lib/posthog'

initPostHog()

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// In production the route HTML is prerendered (scripts/prerender.mjs), so hydrate
// the existing markup — this reuses the server-rendered <head> tags instead of
// re-creating them (which would duplicate title/canonical/og). In dev the SPA
// shell ships an empty #root, so mount fresh.
if (root.firstChild) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
