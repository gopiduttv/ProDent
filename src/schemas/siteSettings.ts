import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'homeSettings',
      title: 'Home Settings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'buttonText',
              title: 'Call to Action Button Text',
              type: 'string',
            }),
            defineField({
              name: 'heroSectionHeader',
              title: 'Hero Section Header',
              type: 'string',
            }),

            defineField({
              name: 'heroDescription',
              title: 'Hero Section Description',
              type: 'text',
            }),
            defineField({
              name: 'heroSubHeading',
              title: 'Hero Section Subheading',
              type: 'string',
            }),
          ],
        },
      ],
      validation: (Rule) =>
        Rule.max(1).error('Only one Home Settings item is allowed'),
      description:
        'Only one item can be added to Home Settings. To edit, remove the existing item and add a new one.',
    }),
    defineField({
      name: 'ogFavicon',
      title: 'Og Favicon',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Og Image',
      type: 'image',
    }),
    defineField({
      name: 'ogUrl',
      title: 'Og Url',
      type: 'url',
    }),
    defineField({
      name: 'ogDescription',
      title: 'Og Description',
      type: 'text',
    }),
    defineField({
      name: 'ogTitle',
      title: 'Og Title',
      type: 'string',
    }),
    defineField({
      name: 'ogType',
      title: 'Og Type',
      type: 'string',
    }),
  ],
})
