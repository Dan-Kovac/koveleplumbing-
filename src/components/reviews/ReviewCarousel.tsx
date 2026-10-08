import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Container } from '@/components/layout/Container'

const PIXEL_HOST = '1qbx.app.embedmyreviews.com'
const PIXEL_ID = 3
const SLIDER_NAME = 'emr-simple-slider'
const WIDGET_ID = 'f2822855-a030-4f2b-a311-403e9ec1ebed'

interface EmrPixel {
  init?: (host: string, id: number, preview?: boolean) => void
  _id?: number
  config?: { mix_manifest?: Record<string, string> }
  loadWidgetScript?: (name: string) => void
}

declare global {
  interface Window {
    EMRPixel?: EmrPixel
  }
}

let pixelLoad: Promise<void> | null = null

function pixelSrc() {
  // Same daily cache-buster the EmbedMyReviews install snippet uses.
  return `https://cdn2.revw.me/js/pixel.js?t=${864e5 * Math.ceil(Date.now() / 864e5)}`
}

/**
 * The pixel only attaches a widget script when that custom element is already
 * in the DOM during bootstrap. Load it from the carousel (after render), and
 * if a later route mounts the slider after bootstrap already ran, ask the
 * pixel to load the slider script again.
 */
function loadReviewPixel(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve()

  if (!pixelLoad) {
    pixelLoad = new Promise<void>((resolve, reject) => {
      const boot = () => {
        const pixel = window.EMRPixel
        if (pixel && !pixel._id && typeof pixel.init === 'function') {
          pixel.init(PIXEL_HOST, PIXEL_ID)
        }
        resolve()
      }

      if (window.EMRPixel?._id || typeof window.EMRPixel?.init === 'function') {
        boot()
        return
      }

      const existing = document.querySelector<HTMLScriptElement>(
        'script[src*="cdn2.revw.me/js/pixel.js"]',
      )
      if (existing) {
        existing.addEventListener('load', boot, { once: true })
        existing.addEventListener(
          'error',
          () => {
            pixelLoad = null
            reject(new Error('EmbedMyReviews pixel failed to load'))
          },
          { once: true },
        )
        return
      }

      const script = document.createElement('script')
      script.defer = true
      script.src = pixelSrc()
      script.onload = boot
      script.onerror = () => {
        pixelLoad = null
        reject(new Error('EmbedMyReviews pixel failed to load'))
      }
      const first = document.getElementsByTagName('script')[0]
      if (first?.parentNode) first.parentNode.insertBefore(script, first)
      else document.head.appendChild(script)
    })
  }

  return pixelLoad.then(ensureSliderScript)
}

async function ensureSliderScript() {
  const pixel = window.EMRPixel
  if (!pixel?.loadWidgetScript) return
  if (!document.querySelector(SLIDER_NAME)) return

  for (let attempt = 0; attempt < 40 && !pixel.config; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 50))
  }

  if (!pixel.config?.mix_manifest) return
  // The pixel tags the widget script with the element name.
  if (document.getElementById(SLIDER_NAME)) return
  pixel.loadWidgetScript(SLIDER_NAME)
}

export function ReviewCarousel() {
  useEffect(() => {
    let active = true
    loadReviewPixel().catch((error: unknown) => {
      if (active) console.error(error)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <section aria-label="Customer reviews" data-review-carousel className="bg-surface py-5 md:py-6">
      <Helmet>
        <link rel="preconnect" href="https://cdn2.revw.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn2.revw.me" />
      </Helmet>
      <Container>
        <emr-simple-slider widget-id={WIDGET_ID} />
      </Container>
    </section>
  )
}
