import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import faq from './faq'
import layout from './layout'
import feature from './feature'
import subfeature from './subFeature'
import sponsor from './sponsor'
import siteSettings from './siteSettings'
import testimonial from './testimonial'
import benefit from './benefits'

export const schemaTypes = [
  faq,
  layout,
  feature,
  subfeature,
  sponsor,
  siteSettings,
  testimonial,
  benefit,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    faq,
    layout,
    feature,
    subfeature,
    sponsor,
    siteSettings,
    testimonial,
    benefit,
  ],
}
