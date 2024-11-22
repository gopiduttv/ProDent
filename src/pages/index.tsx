import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  featureSection,
  fetchIntegrationList,
  getPosts,
  heroSectionQuery,
  metaDataQuery,
  fetchTestimonial,
  type Post,
  postsQuery,
  SiteSettings,
  fetchHeroSectionData,
  fetchBenefitSectionData,
  fetchFounderDetails,
  fetchPartners,
  fetchSeoSettings,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
    siteSettings: SiteSettings
    seoSettings: any
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const [
    posts,
    siteSettings,
    heroSectionContent,
    OsDentalIntegration,
    featureSectionDetails,
    testimonialData,
    heroSectionData,
    BenefitSectionData,
    founderDetails,
    partnerList,
    seoSettings,
  ] = await Promise.all([
    getPosts(client),
    metaDataQuery(client),
    heroSectionQuery(client),
    fetchIntegrationList(client),
    featureSection(client),
    fetchTestimonial(client),
    fetchHeroSectionData(client),
    fetchBenefitSectionData(client),
    fetchFounderDetails(client),
    fetchPartners(client),
    fetchSeoSettings(client),
  ])

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      siteSettings,
      heroSectionContent,
      OsDentalIntegration,
      featureSectionDetails,
      testimonialData,
      heroSectionData,
      BenefitSectionData,
      founderDetails,
      partnerList,
      seoSettings,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const siteSettings: SiteSettings = props?.siteSettings
  const seoSettings = props.seoSettings
  return (
    <div>
      <Layout data ={props}>
        <CustomHead siteSettings={siteSettings} seoSettings={seoSettings} />
        <Content {...props} />
      </Layout>
    </div>
  )
}
