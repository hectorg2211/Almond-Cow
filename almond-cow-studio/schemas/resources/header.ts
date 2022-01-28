export default {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'icon',
      title: 'Icon',
      type: 'mainImage',
    },
    {
      name: 'mobileIcon',
      title: 'Mobile Icon',
      type: 'mainImage',
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
