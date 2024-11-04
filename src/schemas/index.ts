import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import faq from './faq'
import layout from './layout'
import feature from './feature'
import subfeature from './subFeature'
import partner from './partner'

export const schemaTypes = [faq, layout, feature, subfeature,partner]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, faq, layout, feature, subfeature,partner],
}
