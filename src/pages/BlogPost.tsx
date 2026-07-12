import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { CTABanner } from '@/components/sections/CTABanner'
import { Seo } from '@/components/seo/Seo'
import { JsonLd, articleSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

import { BLOG_POSTS_FALLBACK } from '@/data/blog-fallback'
import { BLOG_BODIES } from '@/data/blog-bodies'

/** Map each post category to the most relevant service page for internal linking. */
const CATEGORY_SERVICE: Record<string, { href: string; label: string }> = {
  Emergency: { href: '/emergency-plumber', label: 'Emergency plumber Melbourne' },
  Drains: { href: '/blocked-drains', label: 'Blocked drain repair Melbourne' },
  'Hot Water': { href: '/gas-hot-water', label: 'Gas & hot water systems' },
  Renovations: { href: '/bathroom-renovations', label: 'Bathroom renovations Melbourne' },
  Advice: { href: '/services', label: 'All plumbing services' },
  Education: { href: '/services', label: 'All plumbing services' },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  const fallbackPost = BLOG_POSTS_FALLBACK.find((p) => p.slug === slug)

  if (fallbackPost) {
    const relatedService = CATEGORY_SERVICE[fallbackPost.category] ?? CATEGORY_SERVICE.Advice
    return (
      <PageLayout>
        <Seo
          title={`${fallbackPost.title} | Kovele Plumbing Blog`}
          description={fallbackPost.excerpt}
          canonical={`/blog/${fallbackPost.slug}`}
          image={fallbackPost.image}
          type="article"
        />
        <JsonLd
          schemas={[
            articleSchema({
              title: fallbackPost.title,
              description: fallbackPost.excerpt,
              url: `https://koveleplumbing.com.au/blog/${fallbackPost.slug}`,
              image: `https://koveleplumbing.com.au${fallbackPost.image}`,
              datePublished: fallbackPost.date,
            }),
            breadcrumbSchema([
              { name: 'Home', url: 'https://koveleplumbing.com.au' },
              { name: 'Blog', url: 'https://koveleplumbing.com.au/blog' },
              { name: fallbackPost.title, url: `https://koveleplumbing.com.au/blog/${fallbackPost.slug}` },
            ]),
          ]}
        />

        <article className="py-12 md:py-24 lg:py-32">
          <Container className="max-w-3xl">
            <Link
              to="/blog"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>

            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span className="rounded-full bg-brand-muted px-3 py-0.5 text-xs font-medium text-brand-primary">
                {fallbackPost.category}
              </span>
              <time dateTime={fallbackPost.date}>
                {new Date(fallbackPost.date).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold text-text-heading md:text-4xl">
              {fallbackPost.title}
            </h1>

            <img
              src={fallbackPost.image}
              alt={fallbackPost.title}
              className="mt-8 aspect-[16/9] w-full rounded-xl object-cover"
            />

            <div className="prose prose-lg mt-10 max-w-none text-text-DEFAULT leading-relaxed">
              {BLOG_BODIES[fallbackPost.slug] ? (
                BLOG_BODIES[fallbackPost.slug].map((block, i) =>
                  block.type === 'h2' ? (
                    <h2 key={i} className="mt-8 mb-4 font-heading text-2xl font-bold text-text-heading">
                      {block.text}
                    </h2>
                  ) : (
                    <p key={i} className="mb-4">{block.text}</p>
                  )
                )
              ) : (
                <>
                  <p className="text-lg text-text-muted">{fallbackPost.excerpt}</p>
                  <p className="mt-6">
                    Call Steve on{' '}
                    <a href="tel:0418340501" className="font-semibold text-brand-primary">
                      0418 340 501
                    </a>{' '}
                    for advice on this topic.
                  </p>
                </>
              )}
            </div>

            {/* Internal links: blog posts previously linked to nothing. Point
                readers at the relevant service, emergency, and a local page. */}
            <aside className="mt-12 rounded-xl border border-border/60 bg-surface-alt p-6">
              <h2 className="font-heading text-lg font-semibold text-text-heading">
                Need a plumber for this?
              </h2>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link to={relatedService.href} className="inline-flex items-center gap-1.5 font-medium text-brand-primary hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    {relatedService.label}
                  </Link>
                </li>
                <li>
                  <Link to="/emergency-plumber" className="inline-flex items-center gap-1.5 font-medium text-brand-primary hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    24/7 emergency plumber Melbourne
                  </Link>
                </li>
                <li>
                  <Link to="/plumber-bundoora" className="inline-flex items-center gap-1.5 font-medium text-brand-primary hover:underline">
                    <ArrowRight className="h-4 w-4" />
                    Find your local Kovele plumber
                  </Link>
                </li>
              </ul>
            </aside>
          </Container>
        </article>

        <CTABanner
          variant="simple"
          title="Need a plumber, not a blog post?"
          subtitle="Call Steve on 0418 340 501"
          cta={{ label: 'Call Now', href: 'tel:0418340501' }}
          secondaryCta={{ label: 'Request a Callback', href: '/contact' }}
        />
      </PageLayout>
    )
  }

  // 404 — post not found
  return (
    <PageLayout>
      <section className="py-24 md:py-32">
        <Container className="max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold text-text-heading">Post not found</h1>
          <p className="mt-4 text-text-muted">
            This blog post does not exist.{' '}
            <Link to="/blog" className="font-medium text-brand-primary hover:underline">
              Browse all posts
            </Link>
          </p>
        </Container>
      </section>
    </PageLayout>
  )
}
