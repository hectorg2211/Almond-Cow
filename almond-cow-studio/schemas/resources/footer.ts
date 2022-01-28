export default {
  name: 'footer',
  title: 'Footer',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'backgroundCurve',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPalette',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'navigationLinkWithMenu' }],
    },
    {
      name: 'subcribeTitle',
      title: 'Subscribe title',
      type: 'blockContent',
    },
    {
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [{ type: 'social' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
}
