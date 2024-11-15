import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useLiveQuery } from 'next-sanity/preview'
import Content from '~/components/Content'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import {
  fetchIntegrationList,
  getPosts,
  heroSectionQuery,
  metaDataQuery,
  type Post,
  postsQuery,
  SiteSettings,
} from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'
import Layout from '../components/Layout'
import CustomHead from '~/components/common/CustomHead'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    posts: Post[]
    siteSettings: SiteSettings
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const siteSettings = await metaDataQuery(client)
  const heroSectionContent = await heroSectionQuery(client)
  const OsDentalIntegration = await fetchIntegrationList(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      posts,
      siteSettings,
      heroSectionContent,
      OsDentalIntegration
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  // const [posts] = useLiveQuery<Post[]>(props.posts, postsQuery)
  const siteSettings: SiteSettings = props?.siteSettings
  return (
    <div>
      <Layout>
      <CustomHead siteSettings={siteSettings} />
        <Content {...props} />
      </Layout>
    </div>
  )
}
