import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { lazy, Suspense, useEffect } from 'react'
import { LocationPage } from '@/pages/LocationPage'
import { LOCATIONS } from '@/pages/locations/data'
import { ClickToCallTracker } from '@/components/tracking/ClickToCallTracker'
import { PageViewTracker } from '@/components/tracking/PageViewTracker'

// Lazy-load pages for code splitting
const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const BlockedDrains = lazy(() => import('@/pages/BlockedDrains'))
const GasHotWater = lazy(() => import('@/pages/GasHotWater'))
const RoofPlumbing = lazy(() => import('@/pages/RoofPlumbing'))
const GeneralPlumbing = lazy(() => import('@/pages/GeneralPlumbing'))
const ToiletRepairs = lazy(() => import('@/pages/ToiletRepairs'))
const BathroomRenovations = lazy(() => import('@/pages/BathroomRenovations'))
const EmergencyPlumber = lazy(() => import('@/pages/EmergencyPlumber'))
const About = lazy(() => import('@/pages/About'))
const Reviews = lazy(() => import('@/pages/Reviews'))
const Contact = lazy(() => import('@/pages/Contact'))
const Faq = lazy(() => import('@/pages/Faq'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const Terms = lazy(() => import('@/pages/Terms'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PageViewTracker />
        <ClickToCallTracker />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-primary border-t-transparent" />
            </div>
          }
        >
          <Routes>
            {/* Core pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/emergency-plumber" element={<EmergencyPlumber />} />

            {/* Service detail pages */}
            <Route path="/blocked-drains" element={<BlockedDrains />} />
            <Route path="/gas-hot-water" element={<GasHotWater />} />
            <Route path="/roof-plumbing" element={<RoofPlumbing />} />
            <Route path="/general-plumbing" element={<GeneralPlumbing />} />
            <Route path="/toilet-repairs" element={<ToiletRepairs />} />
            <Route path="/bathroom-renovations" element={<BathroomRenovations />} />

            {/* Location pages */}
            {LOCATIONS.map((loc) => (
              <Route
                key={loc.slug}
                path={`/${loc.slug}`}
                element={<LocationPage data={loc} />}
              />
            ))}

            {/* Utility pages */}
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  )
}
