import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
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
    defineField({
      name: 'copyRightText',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
})
