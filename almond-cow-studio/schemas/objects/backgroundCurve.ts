export default {
  name: 'backgroundCurve',
  type: 'image',
  title: 'Background curve',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alignVertical',
      type: 'string',
      title: 'Background Vertical Align',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Top', value: 'top' },
          { title: 'Bottom', value: 'bottom' },
        ],
        isHighlighted: true,
      },
    },
    {
      name: 'alignHorizontal',
      type: 'string',
      title: 'Background Horizontal Align',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
