import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import layout from './layout'
import Features from './Features'
import FeatureCategories from './FeatureCategories'
import Integrations from './Integrations'
import SiteSettings from './SiteSettings'
import Testimonials from './Testimonials'
import service from './Service'
import HomeSettings from './HomeSettings'
import multipleString from './multipleString'
import Person from './Person'
import legal from './Legal'
import partner from './partner'

export const schemaTypes = [
  layout,
  Features,
  FeatureCategories,
  Integrations,
  SiteSettings,
  Testimonials,
  service,
  HomeSettings,
  Person,
  legal,
  partner,
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContent,
    layout,
    Features,
    FeatureCategories,
    Integrations,
    SiteSettings,
    Testimonials,
    service,
    HomeSettings,
    multipleString,
    Person,
    legal,
    partner,
  ],
}
