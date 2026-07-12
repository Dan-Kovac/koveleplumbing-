import { Routes, Route, Navigate } from 'react-router-dom'
import { LocationPage } from '@/pages/LocationPage'
import { LOCATIONS } from '@/pages/locations/data'

// Direct (non-lazy) imports so the same route tree renders on the server during
// static prerendering (scripts/prerender.mjs) and on the client. Shared by both
// entry-server.tsx and App.tsx — one source of truth for the router.
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import BlockedDrains from '@/pages/BlockedDrains'
import GasHotWater from '@/pages/GasHotWater'
import RoofPlumbing from '@/pages/RoofPlumbing'
import GeneralPlumbing from '@/pages/GeneralPlumbing'
import ToiletRepairs from '@/pages/ToiletRepairs'
import BathroomRenovations from '@/pages/BathroomRenovations'
import EmergencyPlumber from '@/pages/EmergencyPlumber'
import About from '@/pages/About'
import Reviews from '@/pages/Reviews'
import Contact from '@/pages/Contact'
import Faq from '@/pages/Faq'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import NotFound from '@/pages/NotFound'

export function AppRoutes() {
  return (
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
        <Route key={loc.slug} path={`/${loc.slug}`} element={<LocationPage data={loc} />} />
      ))}

      {/* Utility pages */}
      <Route path="/privacy-policy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />

      {/* Locale route that was never built — redirect to home. A server-side 301
          in vercel.json handles crawlers; this covers client-side navigation. */}
      <Route path="/zh" element={<Navigate to="/" replace />} />
      <Route path="/zh/*" element={<Navigate to="/" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
