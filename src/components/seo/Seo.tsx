import { Helmet } from "react-helmet-async"

const SITE = "https://koveleplumbing.com.au"
const DEFAULT_IMAGE = "/images/steve-nick-kovele-fleet.webp"

interface SeoProps {
  /** Page <title> */
  title: string
  /** Meta description */
  description: string
  /** Canonical path or full URL, e.g. "/services" or "https://…/services" */
  canonical: string
  /** og:image / twitter image — path or full URL. Falls back to the team photo. */
  image?: string
  /** og:type — "website" (default) or "article" for blog posts */
  type?: "website" | "article"
}

function absolute(url: string) {
  if (url.startsWith("http")) return url
  return `${SITE}${url.startsWith("/") ? "" : "/"}${url}`
}

/**
 * Single source of truth for per-page head tags: title, description, canonical,
 * Open Graph, and Twitter Card. Every page renders one <Seo>. og:site_name is set
 * once statically in index.html; everything else is per-page here so each URL gets
 * its own social preview (previously every page shared the homepage's tags).
 */
export function Seo({ title, description, canonical, image = DEFAULT_IMAGE, type = "website" }: SeoProps) {
  const url = absolute(canonical)
  const img = absolute(image)
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}
