import { usePostHogPageView } from '@/hooks/usePostHogPageView'

export function PageViewTracker() {
  usePostHogPageView()
  return null
}
