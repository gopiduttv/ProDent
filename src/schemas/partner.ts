import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'partners',
      title: 'Partner',
      type: 'string',
    }),
    defineField({
        name: 'partnerImage',
        title: 'Partner Image',
        type: 'image',
      }),
      defineField({
        name: 'partnerDescription',
        title: 'Partner Description',
        type: 'text',
      }),
  ],
})
    