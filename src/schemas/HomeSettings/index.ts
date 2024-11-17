import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'homeSettings',
  title: 'Home Settings',
  type: 'document',
  fields: [

    defineField({
        name: 'osDentalSlogan',
        title:'Add Slogan',
        type: 'string'
    }),
    defineField({
      name: 'aboutSectionImage',
      title:'About Section Image',
      type: 'image'
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
      title:'osDentalSlogan',
      media: 'aboutSectionImage',
    },
  }
})
