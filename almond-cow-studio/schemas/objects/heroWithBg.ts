export default {
  name: 'heroWithBg',
  title: 'Hero with Background',
  type: 'object',
  initialValue: {
    imageSide: false,
  },
  fields: [
    {
      name: 'deskBg',
      title: 'Background Image',
      type: 'mainImage',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage',
    },
    {
      name: 'imageSide',
      title: 'Image side',
      type: 'boolean',
      description:
        'Leave deactivated if the image will be shown on the left side. Activate if the image will be shown on the right',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPalette',
      description:
        'Select a background color only if no background image is going to be used',
    },
    {
      name: 'navBarColor',
      title: 'Navbar Background Color',
      type: 'colorPalette',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'content',
      media: 'image',
    },
    prepare({ media }) {
      return {
        title: 'Hero with Background',
        media,
        subtitle: 'heroWithBackground',
      }
    },
  },
}
