export default {
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockContent',
    },
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'row',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
