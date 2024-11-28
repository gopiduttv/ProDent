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
    // defineField({
    //   name: 'heroTitleStaticDynamic',
    //   title: 'Hero Title Dynamic',
    //   type: 'string',
    //   of: [{ type: 'string' }],
    // }),
    defineField({
      name: 'bookBtnContent',
      title: 'CIA Button',
      type: 'string',
    }),

    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'blockContent',
    }),

    defineField({
      name: 'aboutSectionImage',
      title: 'About Section Image',
      type: 'image',
    }),


    defineField({
      name: 'ServiceHeader',
      title: 'Service Section Header',
      type: 'string',
    }),
    defineField({
      name: 'testimonialHeader',
      title: 'Testimonial Header',
      type: 'string',
    }),

    defineField({
      name: 'integrationHeader',
      title: 'Integration Section Header',
      type: 'string',
    }),

    defineField({
      name: 'selectedfeatures',
      title: 'Selected Feature',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'featureCategory' }],
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

    defineField({
      name: 'selectedService',
      title: 'Selected Service',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'service' }],
        },
      ],
    }),

    defineField({
      name: 'selectedPartner',
      title: 'Selected Partner',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'partner' }],
        },
      ],
    }),

    defineField({
      name: 'selectedTestimonial',
      title: 'Selected Testimonial',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroStrip',
      media: 'aboutSectionImage',
    },
  },
})
