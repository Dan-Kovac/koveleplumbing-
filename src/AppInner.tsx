import { AppRoutes } from '@/AppRoutes'
import { ClickToCallTracker } from '@/components/tracking/ClickToCallTracker'
import { PageViewTracker } from '@/components/tracking/PageViewTracker'
import { MobileCallButton } from '@/components/tracking/MobileCallButton'

/**
 * The app tree shared by the client (App.tsx, under BrowserRouter) and the
 * prerender server entry (entry-server.tsx, under StaticRouter). Keeping both
 * on the exact same tree is what lets the client hydrateRoot() the prerendered
 * HTML instead of re-rendering it — which is what prevents duplicate <head> tags.
 * The trackers render null (or a static anchor) so they're hydration-safe.
 */
export function AppInner() {
  return (
    <>
      <PageViewTracker />
      <ClickToCallTracker />
      <MobileCallButton />
      <AppRoutes />
    </>
  )
}
