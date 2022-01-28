export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Add comma separated keywords',
    },
    {
      name: 'image',
      title: 'Site Image',
      type: 'string',
      description: 'Add site Image url',
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'string',
    },
    {
      name: 'twitterSite',
      title: 'Twitter Site',
      type: 'string',
    },
    {
      name: 'twitterCreator',
      title: 'Twitter creator',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title,
        subtitle: description,
      }
    },
  },
}
