import { rule } from 'postcss'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featureCategories',
  title: 'Feature Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'featureSubCategoriesHeading',
      title: 'Feature Subcategories Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureSubCategoriesImage',
      title: 'Feature Subcategories Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Linked Features for this feature Subcategories',
      type: 'array',
      validation: (Rule) => Rule.unique(),

      of: [
        {
          type: 'reference',
          to: [{ type: 'feature' }],
          options: {
            filter:
              '!(_id in path("drafts.**") || _id in path("**")) && !(_id in *[_type == "feature" && defined(referenceField)].referenceField._ref)',
          },
        },
      ],
    }),
  ],
})
