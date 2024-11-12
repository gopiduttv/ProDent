import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import faq from './faq'
import layout from './layout'
import feature from './feature'
import subfeature from './subFeature'
import Integration from './Integration'
import siteSettings from './siteSettings'
import testimonial from './testimonial'
import benefit from './benefits'

export const schemaTypes = [
  faq,
  layout,
  feature,
  subfeature,
  siteSettings,
  testimonial,
  benefit,
  Integration
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    faq,
    layout,
    feature,
    subfeature,
    Integration,
    siteSettings,
    testimonial,
    benefit,
  ],
}
