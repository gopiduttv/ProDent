import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import React from 'react'
import { SharedPageProps } from '../_app'
import {
  getLegalInformation,
  LegalInformation,
  LegalSlugsQuery,
  fetchTermsAndCondition,
} from '~/lib/sanity.queries'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    legalInformation: any
  },
  { slug: string }
> = async ({ draftMode = false, params }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const slug = params?.slug

  const legalInformation = await fetchTermsAndCondition(client, slug)

  if (!legalInformation || legalInformation.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      legalInformation,
    },
  }
}

export default function TermsofUse(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const privacyPolicy = props.legalInformation

  if (!privacyPolicy) {
    return <div>No privacy policy found.</div>
  }

  return (
    <div className="prose prose-md px-4 md:m-auto md:prose-md  lg:prose-md">
      <PortableText value={privacyPolicy?.termsAndCondition} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  const slugs = await client.fetch(LegalSlugsQuery)

  if (!slugs || slugs.length === 0) {
    throw new Error('No slugs found for legal pages.')
  }

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  }
}
