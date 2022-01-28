export default {
  name: 'social',
  title: 'Social',
  type: 'object',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'mainImage',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'url',
      media: 'icon',
    },
  },
}
