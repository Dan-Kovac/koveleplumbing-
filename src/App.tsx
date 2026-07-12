import { BrowserRouter, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import { AppInner } from '@/AppInner'

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
        <AppInner />
      </BrowserRouter>
    </HelmetProvider>
  )
}
