import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    defineField({
      name: 'featureHeading',
      title: 'Feature Heading',
      type: 'string',
    }),
    defineField({
        name: 'featureboldheading',
        title: 'Feature Bold Heading',
        type: 'string',
      }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
    }),
    defineField({
      name: 'featureDescription',
      title: 'Feature Description',
      type: 'blockContent',
    }),

    defineField({
      name: 'subFeatures',
      title: 'Add Sub Features',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'subfeature' }],
        },
      ],
    }),
  ],
})
