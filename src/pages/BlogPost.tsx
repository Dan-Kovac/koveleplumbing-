import { useParams, useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'
import { PageLayout } from '@/components/layout/PageLayout'
import { Container } from '@/components/layout/Container'
import { CTABanner } from '@/components/sections/CTABanner'

import { BLOG_POSTS_FALLBACK } from '@/data/blog-fallback'
import { BLOG_BODIES } from '@/data/blog-bodies'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const fallbackPost = BLOG_POSTS_FALLBACK.find((p) => p.slug === slug)

  if (fallbackPost) {
    return (
      <PageLayout>
        <Helmet>
          <title>{fallbackPost.title} | Kovele Plumbing Blog</title>
          <meta name="description" content={fallbackPost.excerpt} />
          <link rel="canonical" href={`https://koveleplumbing.com.au/blog/${fallbackPost.slug}`} />
          <meta property="og:title" content={`${fallbackPost.title} | Kovele Plumbing Blog`} />
          <meta property="og:description" content={fallbackPost.excerpt} />
          <meta property="og:url" content={`https://koveleplumbing.com.au/blog/${fallbackPost.slug}`} />
          <meta property="og:type" content="website" />
        </Helmet>

        <article className="py-12 md:py-24 lg:py-32">
          <Container className="max-w-3xl">
            <button
              onClick={() => navigate('/blog')}
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </button>

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
