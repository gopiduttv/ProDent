import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroStrip',
      title: 'Hero Strip',
      type: 'string',
    }),

    defineField({
      name: 'heroTitleStatic',
      title: 'Hero Title Static',
      type: 'string',
    }),
    defineField({
      name: 'heroTitleStaticDynamic',
      title: 'Hero Title Dynamic',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'bookBtnContent',
      title: 'Book Demo Button Content',
      type: 'string',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),

    defineField({
      name: 'aboutSectionImage',
      title: 'About Section Image',
      type: 'image',
    }),

    defineField({
      name: 'benefits',
      title: 'Add Benefits',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'benefit' }],
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Add Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
    defineField({
      name: 'integration',
      title: 'Add Integration',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'integration' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'osDentalSlogan',
      media: 'aboutSectionImage',
    },
  },
})
