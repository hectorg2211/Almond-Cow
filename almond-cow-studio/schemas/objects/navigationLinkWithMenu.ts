export default {
  name: 'navigationLinkWithMenu',
  title: 'Navigation Link with Menu',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navigationLink' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
    },
  },
}
