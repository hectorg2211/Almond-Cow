export default {
  title: 'Home Page',
  name: 'home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPalette',
    },
    {
      name: 'footerBgColor',
      title: 'Footer Background Color',
      type: 'colorPalette',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'heroWithBg' },
        // { type: 'comboWithImage' },
        // { type: 'slider' },
        // { type: 'reviews' },
        // { type: 'allInOne' },
        // { type: 'instagram' },
        // { type: 'alignedImage' },
        // { type: 'animatedLottieModule' },
      ],
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
        subtitle: slug?.current,
      }
    },
  },
}
