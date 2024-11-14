import { defineField, defineType } from 'sanity'
export default defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  fields: [
    defineField({
      name: 'benefitHeading',
      title: 'Benefits Heading',
      type: 'string',
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
