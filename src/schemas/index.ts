import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import faq from './faq'
import layout from './layout'
import feature from './feature'
import featureCategories from './featureCategories'
import Integration from './Integration'
import siteSettings from './siteSettings'
import testimonial from './testimonial'
import benefit from './benefits'
import homeSettings from './homeSettings'

export const schemaTypes = [
  faq,
  layout,
  feature,
  featureCategories,
  siteSettings,
  testimonial,
  benefit,
  Integration,
  homeSettings,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    faq,
    layout,
    feature,
    featureCategories,
    Integration,
    siteSettings,
    testimonial,
    benefit,
    homeSettings,
  ],
}
