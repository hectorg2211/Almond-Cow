export default {
  name: 'row',
  title: 'Row',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'column',
      title: 'Column',
      type: 'array',
      of: [{ type: 'blockContentObject' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'column.length',
    },
  },
}
