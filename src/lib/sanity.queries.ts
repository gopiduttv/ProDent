import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`
export async function metaDataQuery(
  client: SanityClient,
): Promise<SiteSettings> {
  const query = groq` 
    *[_type == "siteSettings"][0]{
      ogTitle,
      "ogFavicon":ogFavicon.asset->url,
      "ogImage" :ogImage.asset->url,
      ogUrl,
      ogDescription
    }
  `
  return await client.fetch(query)
}

const imageFragment = `
  "image": integrationProductImages.asset-> {
    _id,
    url,
    metadata {
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  },
  "altText": image.altText,
  "title": image.title
`

export async function fetchIntegrationList(client: SanityClient): Promise<any> {
  const query = groq`*[_type == "integration" ]{
  "image": integrationProductImage.asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      _createdAt,
      _id
    
   
  }`
  return await client.fetch(query)
}
export async function featureSection(client: SanityClient): Promise<any> {
  const query = groq`
    *[_type == "featureCategory" && !(_id in path('drafts.**'))] {
      ..., 
      "imageUrl": categoryImage.asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height,
            aspectRatio
          }
        }
      },
      "altText": image.altText,
      "title": image.title,
      "features": features[]->
    }
  `
  return await client.fetch(query)
}

export async function fetchTestimonial(client: SanityClient): Promise<any> {
  const query = groq`*[_type == "testimonial"]{...,"AuthorImage":authorimage.asset->url}`
  return await client.fetch(query)
}

export async function heroSectionQuery(
  client: SanityClient,
): Promise<HomeSettings | null> {
  const query = groq`
    *[_type == "siteSettings"][0]{
      homeSettings[0],
      "about":ogDescription
    }
  `
  return await client.fetch(query)
}

export async function fetchAboutSection(client: SanityClient): Promise<any> {
  const query = groq`*[_type == "siteSettings"]{"about":ogDescription}`
  return await client.fetch(query)
}

export async function fetchHeroSectionData(client: SanityClient): Promise<any> {
  const query = groq` *[_type == "homeSettings"][0]{
    "heroDescription":heroDescription,
    "ctaName":bookBtnContent,
    "heroStrip":heroStrip,
    "heroTitleStatic":heroTitleStatic,
    "heroTitleDynamic":heroTitleStaticDynamic,
    "aboutSectionImage":aboutSectionImage.asset->url,
    "integrationHeader":integrationHeader,
    "benefitHeader":benefitHeader,
    "testimonialHeader":testimonialHeader,
    "featureHeader":featureHeader
  }`
  return await client.fetch(query)
}
export async function fetchBenefitSectionData(
  client: SanityClient,
): Promise<any> {
  const query = groq` *[_type == "benefit"]{
    'benefitHeading':benefitHeading,
     'benifitSectionImage':benefitImageSection.asset->{
         _id,
         url,
         metadata {
           dimensions {
             width,
             height,
             aspectRatio
           }
         }
       },
 'benefitPoints':benefitPoints
      
  }`
  return await client.fetch(query)
}

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

export interface SiteSettings {
  ogTitle: string
  ogFavicon: string
  ogImage: string
  ogUrl: string
  ogDescription: string
}

export interface HomeSettings {
  buttonText?: string
  heroSectionHeader?: string
  heroDescription?: string
  heroSubHeading?: string
}
