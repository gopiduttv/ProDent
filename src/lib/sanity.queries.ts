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
      ogFavicon,
      ogImage,
      ogUrl,
      ogDescription
    }
  `
  return await client.fetch(query)
}

export async function fetchIntegrationList(client: SanityClient): Promise<any> {
  const query = groq`*[_type == "integration" ]{integrationProductImage}`
  return await client.fetch(query)
}
export async function featureSection(client: SanityClient): Promise<any> {
  const query = groq`    *[_type == "featureCategories"]{...,"imageUrl":featureSubCategoriesImage.asset->url, 
      "features":features[]->}`
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
  ogFavicon: ImageAsset
  ogImage: ImageAsset
  ogUrl: string
  ogDescription: string
}

export interface HomeSettings {
  buttonText?: string
  heroSectionHeader?: string
  heroDescription?: string
  heroSubHeading?: string
}
