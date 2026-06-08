import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-03-20',
  useCdn: false,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

/** Blog post as returned from Sanity */
export interface SanityBlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  category: string
  publishedAt: string
  mainImage: SanityImageSource
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[] // Portable Text blocks
}

/** Fetch all blog posts (listing) */
export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      mainImage
    }`
  )
}

/** Fetch a single blog post by slug */
export async function getBlogPost(slug: string): Promise<SanityBlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      mainImage,
      body
    }`,
    { slug }
  )
}
