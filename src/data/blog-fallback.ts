/** Static blog post data used when Sanity CMS is not connected */
export interface BlogPostFallback {
  title: string
  excerpt: string
  image: string
  slug: string
  date: string
  category: string
}

export const BLOG_POSTS_FALLBACK: BlogPostFallback[] = [
  {
    title: 'What to do in a plumbing emergency',
    excerpt:
      "Burst pipe? Flooding? Here is exactly what to do in the first five minutes to minimise damage to your Melbourne home.",
    image: '/images/plumbing-emergency-tips-melbourne.webp',
    slug: 'plumbing-emergency-tips',
    date: '2026-03-18',
    category: 'Emergency',
  },
  {
    title: 'How to choose a plumber in Melbourne',
    excerpt:
      'What to look for, what to avoid, and the questions to ask before you hire. From a plumber with 40 years in the trade.',
    image: '/images/how-to-choose-plumber-melbourne.webp',
    slug: 'how-to-choose-plumber-melbourne',
    date: '2026-03-07',
    category: 'Advice',
  },
  {
    title: 'Signs you have a blocked drain',
    excerpt:
      'Slow drains, gurgling sounds, bad smells. Know the early warning signs before a blocked drain becomes an emergency.',
    image: '/images/signs-of-blocked-drain.webp',
    slug: 'signs-blocked-drain',
    date: '2026-02-25',
    category: 'Drains',
  },
  {
    title: 'Hot water system buying guide: electric vs gas vs solar',
    excerpt:
      'Comparing the three main hot water system types for Melbourne homes. Running costs, lifespan, and which suits your house.',
    image: '/images/hot-water-system-buying-guide.webp',
    slug: 'hot-water-system-buying-guide',
    date: '2026-02-17',
    category: 'Hot Water',
  },
  {
    title: 'What is a boundary trap?',
    excerpt:
      "That concrete thing in your front yard is actually important. Here is what a boundary trap does and why it matters.",
    image: '/images/what-is-boundary-trap-plumbing.webp',
    slug: 'what-is-boundary-trap',
    date: '2026-02-07',
    category: 'Education',
  },
  {
    title: 'Roof leak vs plumbing leak: how to tell the difference',
    excerpt:
      "Water stain on the ceiling? It might not be a roof leak. Here is how to tell where the water is actually coming from.",
    image: '/images/roof-flashing-repair-closeup.webp',
    slug: 'roof-leak-vs-plumbing-leak',
    date: '2026-01-29',
    category: 'Advice',
  },
  {
    title: 'How much does a bathroom renovation cost in Melbourne?',
    excerpt:
      "A realistic cost breakdown from a plumber who has done 150+ bathroom renovations across Melbourne.",
    image: '/images/bathroom-renovation-cost-melbourne.webp',
    slug: 'bathroom-renovation-cost-melbourne',
    date: '2026-01-20',
    category: 'Renovations',
  },
  {
    title: 'When to repair vs replace your hot water system',
    excerpt:
      "Is it worth fixing, or time for a new one? The honest answer from a plumber who does not need to sell you a new system.",
    image: '/images/repair-vs-replace-hot-water-system.webp',
    slug: 'repair-vs-replace-hot-water',
    date: '2026-01-10',
    category: 'Hot Water',
  },
]
