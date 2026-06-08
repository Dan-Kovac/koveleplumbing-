import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Container } from '@/components/layout/Container'
import { ScrollReveal, RevealItem } from '@/components/layout/ScrollReveal'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS_FALLBACK, type BlogPostFallback } from '@/data/blog-fallback'

function BlogCard({ post }: { post: BlogPostFallback }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col gap-0 overflow-hidden border-border/50 py-0 transition-all duration-300 group-hover:border-brand-primary/30 group-hover:shadow-lg">
        <div className="aspect-[16/10] overflow-hidden bg-brand-muted">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <span className="rounded-full bg-brand-muted px-3 py-0.5 text-xs font-medium text-brand-primary">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-AU', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
          </div>
          <h3 className="mt-3 font-heading text-lg font-semibold text-text-heading transition-colors group-hover:text-brand-primary">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-2">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-primary">
            Read more
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function Blog() {
  return (
    <PageLayout>
      <Helmet>
        <title>Plumbing Tips & Advice | Kovele Plumbing Blog | Melbourne</title>
        <meta
          name="description"
          content="Plumbing tips, guides, and advice from Steve Kovac. 40 years of experience shared in plain English. Kovele Plumbing Melbourne."
        />
        <link rel="canonical" href="https://koveleplumbing.com.au/blog" />
        <meta property="og:title" content="Plumbing Tips & Advice | Kovele Plumbing Blog | Melbourne" />
        <meta property="og:description" content="Plumbing tips, guides, and advice from Steve Kovac. 40 years of experience shared in plain English. Kovele Plumbing Melbourne." />
        <meta property="og:url" content="https://koveleplumbing.com.au/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Hero
        variant="minimal"
        title="The Kovele Plumbing blog."
        subtitle="Tips, guides, and advice from 40 years on the tools. No jargon, just useful information."
      />

      <section className="py-16 md:py-24">
        <Container>
          <ScrollReveal className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS_FALLBACK.map((post) => (
              <RevealItem key={post.slug}>
                <BlogCard post={post} />
              </RevealItem>
            ))}
          </ScrollReveal>
        </Container>
      </section>

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
