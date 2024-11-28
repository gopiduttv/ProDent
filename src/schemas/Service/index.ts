import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceHeading',
      title: 'Benefit Heading',
      type: 'string',
    }),
    defineField({
      title: 'Benefit Points',
      name: 'servicePoint',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'benefitDescription',
      title: 'Benefit Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'benefitImageSection',
      title: 'Benefit Image',
      type: 'image',
    }),
  ],
})
