/**
 * Sanity schema for blog posts.
 *
 * To use: create a Sanity project at https://sanity.io/manage,
 * install sanity globally (npm i -g sanity), then run `sanity init`
 * in a separate studio directory or embedded studio.
 *
 * This schema file is provided as reference — copy it into your
 * Sanity studio's schemas/ directory.
 */
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description for listing pages and meta description',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Emergency', value: 'Emergency' },
          { title: 'Advice', value: 'Advice' },
          { title: 'Drains', value: 'Drains' },
          { title: 'Hot Water', value: 'Hot Water' },
          { title: 'Education', value: 'Education' },
          { title: 'Renovations', value: 'Renovations' },
          { title: 'Roof Plumbing', value: 'Roof Plumbing' },
          { title: 'General', value: 'General' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category',
    },
  },
}
