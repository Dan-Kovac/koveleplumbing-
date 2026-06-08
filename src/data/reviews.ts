/**
 * Real reviews from Google and Service Seeking.
 * Google: 48 reviews, 4.8 stars
 * Service Seeking: 198 reviews, 4.9 stars
 *
 * These are actual customer reviews  - not fabricated.
 * Profile links allow visitors to verify.
 */

export interface ReviewItem {
  name: string
  date: string
  rating: number
  text: string
  platform: 'Google' | 'Service Seeking'
}

export interface ReviewsPlatform {
  name: string
  count: number
  url: string
}

export const REVIEW_PLATFORMS: ReviewsPlatform[] = [
  {
    name: 'Google',
    count: 48,
    url: 'https://www.google.com/maps/place/Kovele+Plumbing/',
  },
  {
    name: 'Service Seeking',
    count: 198,
    url: 'https://www.serviceseeking.com.au/profile/54252-kovele-plumbing-pty-ltd',
  },
]

export const AGGREGATE_RATING = 4.9
export const TOTAL_REVIEWS = 246

/** Featured reviews  - the best, most specific reviews that name what was done */
export const FEATURED_REVIEWS: ReviewItem[] = [
  {
    name: 'YC C.',
    date: '2025-10-15',
    rating: 5,
    text: "What a wonderful duo, father and son! Extremely competent and kind! Got a gas heater removed at a reasonable price and on such short notice. He kindly replaced a shower head for me at no extra cost too while he was there! Steve didn't stop there. He returned to the property to drop off a replacement part. What a service! Highly recommend.",
    platform: 'Google',
  },
  {
    name: 'Ryan C.',
    date: '2025-10-10',
    rating: 5,
    text: 'Steve and Nick came today to fix the leaking pipe under my kitchen sink. He was on time, very professional, and did an excellent job. The problem was solved quickly and neatly. Very happy with the service and would definitely recommend Kovele Plumbing to others.',
    platform: 'Google',
  },
  {
    name: 'Andrea R.',
    date: '2025-09-20',
    rating: 5,
    text: 'I have been using Steve for about 8-10 years now. He has helped in the case of emergencies and also regular home plumbing needs. He has always gone above and beyond to help me out. I will continue to call on Steve for all my plumbing needs.',
    platform: 'Google',
  },
  {
    name: 'Kenneth W.',
    date: '2025-08-15',
    rating: 5,
    text: "Absolutely outstanding service from this highly skilled father-and-son team. My nearly 50-year-old home's drainage system has been brought back to life under their skilled hands. From the very first inspection and clear communication, to replacing old damaged pipes, clearing stubborn blockages, installing new pits, and thorough drainage testing. Every step was done with remarkable patience and professionalism.",
    platform: 'Google',
  },
  {
    name: 'Anbin',
    date: '2025-06-01',
    rating: 5,
    text: 'Quick response, came same day, quality work. Steve and Nick treated the issue with urgency and care. Communication was transparent.',
    platform: 'Service Seeking',
  },
  {
    name: 'Jason',
    date: '2025-09-18',
    rating: 5,
    text: 'Responded immediately, someone arrived same day, resolved professionally, reasonable pricing.',
    platform: 'Service Seeking',
  },
  {
    name: 'Siva',
    date: '2025-09-02',
    rating: 5,
    text: 'Steve and Nick diagnosed and fixed blocked drain quickly. Friendly, punctual, explained everything clearly.',
    platform: 'Service Seeking',
  },
  {
    name: 'Shiphrah E.',
    date: '2025-10-20',
    rating: 5,
    text: 'Good and prompt service.',
    platform: 'Google',
  },
  {
    name: 'Jimmy',
    date: '2024-07-22',
    rating: 5,
    text: 'Friendly and knowledgeable, identified issue and provided guidance.',
    platform: 'Service Seeking',
  },
  {
    name: 'Pukkai',
    date: '2023-11-27',
    rating: 5,
    text: 'Fantastic job, very friendly.',
    platform: 'Service Seeking',
  },
]

/** Top 6 reviews for homepage and key pages */
export const HOMEPAGE_REVIEWS = FEATURED_REVIEWS.slice(0, 6)

/** Standard 6 reviews for all service/location/about pages (uniform grid) */
export const PAGE_REVIEWS = FEATURED_REVIEWS.slice(0, 6)

/** Map real reviews to Testimonials component shape */
export function toTestimonials(reviews: ReviewItem[]) {
  return reviews.map((r) => ({
    quote: r.text,
    name: r.name,
    role: r.platform,
    initials: r.name.split(' ').map(w => w[0]).join('').toUpperCase(),
    rating: r.rating,
  }))
}
