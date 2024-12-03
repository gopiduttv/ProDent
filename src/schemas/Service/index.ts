import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceHeading',
      title: 'Service Heading',
      type: 'string',
    }),
    defineField({
      title: 'Service Points',
      name: 'servicePoint',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Service Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'benefitImageSection',
      title: 'Service Section Image',
      type: 'image',
    }),
  ],
})
