import { defineField, defineType } from 'sanity'
import { orderRankField,orderRankOrdering } from '@sanity/orderable-document-list'

export default defineType({
  name: 'integration',
  title: 'Integration',
  type: 'document',
  orderings:[orderRankOrdering],
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'integration',
      title: 'Integration',
      type: 'url',
    }),
    defineField({
      name: 'integrationProductImage',
      title: 'Integration Product Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      media: 'integrationProductImage',
    },
  }
})

