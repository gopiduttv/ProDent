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
      of: [{ type: 'string' }],
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
      name: 'featureHeader',
      title: 'Feature Header',
      type: 'string',
    }),

    defineField({
      name: 'benefitHeader',
      title: 'Benefit Header',
      type: 'string',
    }),
    defineField({
      name: 'testimonialHeader',
      title: 'Testimonial Header',
      type: 'string',
    }),

    defineField({
      name: 'integrationHeader',
      title: 'Integration Header',
      type: 'string',
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
