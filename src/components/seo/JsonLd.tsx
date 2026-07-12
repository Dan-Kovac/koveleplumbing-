import { Helmet } from "react-helmet-async"

/* ------------------------------------------------------------------ */
/*  Schema helper functions                                           */
/* ------------------------------------------------------------------ */

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Kovele Plumbing",
    "description":
      "Father-son plumbing team serving Melbourne for 40+ years. Blocked drains, gas & hot water, roof plumbing, bathroom renovations, and emergency service.",
    "url": "https://koveleplumbing.com.au",
    "telephone": "+61418340501",
    "email": "koveleplumbing5@bigpond.com",
    "image": "https://koveleplumbing.com.au/images/melbourne-plumber-steve-nick-kovac.webp",
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 Greenstone Pl",
      "addressLocality": "Bundoora",
      "addressRegion": "VIC",
      "postalCode": "3083",
      "addressCountry": "AU",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.7,
      "longitude": 145.06,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "17:00",
      },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 246,
      "bestRating": 5,
      "worstRating": 1,
    },
    "areaServed": [
      "Bundoora",
      "Heidelberg",
      "Reservoir",
      "Thornbury",
      "Northcote",
      "Brunswick",
      "Doncaster",
      "Balwyn",
      "Kew",
      "Fairfield",
      "Coburg",
      "Fitzroy North",
      "Templestowe",
      "Bulleen",
    ],
    "sameAs": [
      "https://www.facebook.com/KovelePlumbingServices/",
      "https://www.serviceseeking.com.au/profile/54252-kovele-plumbing-pty-ltd",
    ],
  }
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Plumber",
      "name": "Kovele Plumbing",
      "telephone": "+61418340501",
      "url": "https://koveleplumbing.com.au",
    },
    "areaServed": {
      "@type": "City",
      "name": "Melbourne",
    },
    "serviceType": "Plumbing",
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kovele Plumbing",
    "url": "https://koveleplumbing.com.au",
    "publisher": {
      "@type": "Plumber",
      "name": "Kovele Plumbing",
      "telephone": "+61418340501",
      "url": "https://koveleplumbing.com.au",
    },
  }
}

export function articleSchema(article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "url": article.url,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified ?? article.datePublished,
    "mainEntityOfPage": { "@type": "WebPage", "@id": article.url },
    "author": {
      "@type": "Person",
      "name": "Steve Kovac",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kovele Plumbing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://koveleplumbing.com.au/images/kovele-logo.png",
      },
    },
  }
}

/** Individual Review objects — use on the dedicated reviews page only. */
export function reviewSchemas(
  reviews: { name: string; date: string; rating: number; text: string }[],
) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "datePublished": r.date,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating,
      "bestRating": 5,
      "worstRating": 1,
    },
    "reviewBody": r.text,
    "itemReviewed": {
      "@type": "Plumber",
      "name": "Kovele Plumbing",
      "url": "https://koveleplumbing.com.au",
    },
  }))
}

/* ------------------------------------------------------------------ */
/*  JsonLd component — renders one or more schemas into <head>        */
/* ------------------------------------------------------------------ */

interface JsonLdProps {
  schemas: Record<string, unknown>[]
}

export function JsonLd({ schemas }: JsonLdProps) {
  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script
          key={`jsonld-${i}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
