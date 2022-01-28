export default {
  title: 'Shop Page',
  name: 'shop',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'blockContent',
    },
    {
      name: 'collections',
      title: 'Collections',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'heroBg',
      title: 'Hero Background Color',
      type: 'colorPalette',
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title, slug }) {
      return {
        title,
      }
    },
  },
}
