import posthog from 'posthog-js'

const PH_KEY = import.meta.env.VITE_POSTHOG_KEY
const PH_HOST = import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com'

export function initPostHog() {
  if (!PH_KEY) {
    console.warn('[PostHog] VITE_POSTHOG_KEY not set; tracking disabled')
    return
  }
  if (typeof window === 'undefined') return

  posthog.init(PH_KEY, {
    api_host: PH_HOST,
    loaded: (ph) => {
      if (import.meta.env.DEV) {
        ph.opt_out_capturing()
        console.info('[PostHog] opted out in dev')
      }
    },
    capture_pageview: false, // we track manually via React Router
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: false,
      maskInputFn: (text: string, element?: HTMLElement) => {
        if (element?.attributes.getNamedItem('type')?.value === 'password') return '*'.repeat(text.length)
        if (element?.attributes.getNamedItem('name')?.value === 'email') return text.replace(/^(.).*@/, '$1***@')
        return text
      },
    },
  })
}

export function capture(event: string, properties?: Record<string, unknown>) {
  if (posthog.__loaded) {
    posthog.capture(event, properties)
  }
}

export function identify(distinctId: string, properties?: Record<string, unknown>) {
  if (posthog.__loaded) {
    posthog.identify(distinctId, properties)
  }
}

export function setPersonProperties(properties: Record<string, unknown>) {
  if (posthog.__loaded) {
    posthog.people.set(properties)
  }
}

export default posthog
