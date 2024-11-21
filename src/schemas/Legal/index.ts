import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'legal',
  title: 'Legal Information',
  type: 'document',
  fields: [
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
    }),
    defineField({
      name: 'termsAndCondition',
      title: 'Terms and Conditions',
      type: 'blockContent',
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'blockContent',
    }),
    defineField({
      name: 'businessAgreement',
      title: 'Business Associate Agreement',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'lastUpdated',
     
    }
  }
})
