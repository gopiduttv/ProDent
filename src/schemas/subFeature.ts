import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'subfeature',
  title: 'Sub Feature',
  type: 'document',
  fields: [
    defineField({
      name: 'subFeatureHeading',
      title: 'Sub Feature Heading',
      type: 'string',
    }),
    defineField({
      name: 'subFeatureImage',
      title: 'Sub Feature Image',
      type: 'image',
    }),
    defineField({
        name: 'subfeatureDescription',
        title: 'Sub Feature Description',
        type: 'blockContent',
      }),

      defineField({
        name: 'subpoints',
        title: 'Sub Points',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
            
              defineField({
                name: 'subHeader',
                title: 'Sub Header',
                type: 'string',
              }),
  
              defineField({
                name: 'subUl',
                title: 'Sub Ul',
                type: 'string',
              }),
              defineField({
                name: 'subLi',
                title: 'Sub Li',
                type: 'string',
              })
            ],
          },
        ],
      }),
  ],
})
